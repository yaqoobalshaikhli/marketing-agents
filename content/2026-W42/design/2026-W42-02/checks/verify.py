# Round-3 checks for 2026-W42-02 (run: python3 checks/verify.py from the piece's design folder).
# Palette, safe zones, the one pink group, pink–blue distance, ink mass by colour, sticker-zone clearance, copy match.
import json, re, subprocess, sys, html as H
from pathlib import Path
import numpy as np
from PIL import Image

here = Path(__file__).resolve().parent.parent
PAL = {'navy': (0x18, 0x19, 0x43), 'pink': (0xEE, 0x39, 0x6B), 'blue': (0x1B, 0x9C, 0xCE), 'white': (0xFF, 0xFE, 0xFF)}
LOGO = (60, 1322, 300, 1560)                       # logo box, excluded from colour counts (decision #39)
geo = json.loads(subprocess.check_output(['node', str(here / 'build.mjs')], cwd=here))
ZONES = {'01': (geo['Q']['x'], geo['Q']['y'], geo['Q']['w'], geo['Q']['h']), '02': (geo['K']['x'], geo['K']['y'], geo['K']['w'], geo['K']['h'])}

def load(p): return np.asarray(Image.open(p).convert('RGB')).astype(int)
def nearest(im):
    d = np.stack([np.abs(im - np.array(c)).sum(axis=2) for c in PAL.values()], axis=-1)
    return d.argmin(axis=-1), d.min(axis=-1)

for fid in ['01', '02']:
    im = load(here / f'frame-{fid}.png')
    h, w, _ = im.shape
    mask = np.ones((h, w), bool); x0, y0, x1, y1 = LOGO; mask[y0:y1, x0:x1] = False
    idx, dist = nearest(im)
    exact = (dist == 0) & mask
    print(f'\n== frame {fid}')
    print(f'palette: {exact.sum() / mask.sum() * 100:.2f}% of pixels outside the logo box are exact palette colours')
    ink = idx != 0
    ys, xs = np.where(ink)
    print(f'ink extents: x {xs.min()}–{xs.max()}, y {ys.min()}–{ys.max()}; ink above y 250: {(ys < 250).sum()}, below y 1580: {(ys >= 1580).sum()}')
    names = list(PAL)
    # coverage-weighted mass per colour (outside the logo box): blend weight against navy
    navy = np.array(PAL['navy'])
    for c in ['pink', 'blue', 'white']:
        col = np.array(PAL[c]); t = ((im - navy) * (col - navy)).sum(axis=2) / ((col - navy) ** 2).sum()
        sel = (idx == names.index(c)) & mask
        print(f'  {c:5} mass {np.clip(t, 0, 1)[sel].sum():9.0f} px')
    pk = (idx == names.index('pink')) & mask & (dist < 60)
    py, px = np.where(pk)
    print(f'pink: x {px.min()}–{px.max()}, y {py.min()}–{py.max()}')
    bl = (idx == names.index('blue')) & mask & (dist < 60)
    by, bx = np.where(bl)
    P = np.stack([px, py], 1)[::7]; B = np.stack([bx, by], 1)[::5]
    dmin = min(np.sqrt(((B - p) ** 2).sum(1)).min() for p in P)
    print(f'nearest blue to pink: {dmin:.0f} px')
    zx, zy, zw, zh = ZONES[fid]
    for clear in (24,):
        reg = idx[zy - clear:zy + zh + clear, zx - clear:zx + zw + clear]
        print(f'sticker zone {zw}×{zh} at x {zx}–{zx + zw}, y {zy}–{zy + zh}: ink pixels inside it or within {clear} px of it: {(reg != 0).sum()}')

# Copy: every rendered string must appear in the piece file's ## Copy section
piece = (here / '../../pieces/02-ig-story-before-the-visit.md').resolve().read_text()
copy = piece.split('## Copy', 1)[1].split('\n## ', 1)[0]
norm = lambda s: re.sub(r'\s+', ' ', s.replace('*', '').replace(' / ', ' ')).strip()
copytext = norm(copy)
print('\n== copy')
for fid in ['01', '02']:
    src = (here / f'frame-{fid}.html').read_text()
    body = re.sub(r'<svg.*?</svg>', '', src, flags=re.S)
    strings = [norm(H.unescape(re.sub(r'<[^>]+>', '', m))) for m in re.findall(r'<div class="abs (?:ln [a-z]+|label)"[^>]*>(.*?)</div>', body, flags=re.S)]
    for s in strings:
        print(f'frame {fid}: {"OK " if s in copytext else "MISSING"} {s}')

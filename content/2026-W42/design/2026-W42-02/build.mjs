// Builds the HTML sources for 2026-W42-02 (two story frames, their placement guides and their held-video pages)
// from one template, so the clean frames, the guides and the videos can never drift apart.
//   node build.mjs   → frame-01.html, frame-02.html, frame-0N-guide.html, frame-0N-video.html
// Render: design-studio/scripts/render.mjs still (PNG) or video (MP4), 1080×1920.
//
// Round 3 (2026-10-18), answering design-review/2026-W42-02-r2.md:
//  1. Sticker landings. Frame 1: a declared Question-sticker zone (432×256, 40% of the screen) wholly inside the
//     straight part of the door, ≥24 px clear of the leaf line, with the knob moved above it and the label chip
//     «سؤال» hung in the arch over it. Frame 2: the leaf swings almost edge-on, so the opening takes a 400 px link
//     sticker (text 44 px) with ≥24 px clear.
//  2. Type leads. Key words at 144 px (2× the 72 px setup) on their own lines; frame 2's light is now a low band
//     on the floor, so the pink CTA is the heaviest mass on the frame.
//  3. Sub row is Medium (500) on both frames; the open leaf keeps the leaf line (it is the same leaf, rotated).
//  The open leaf is the shut leaf rotated about its hinge in perspective (one function, leafAt(θ)), so frame 2 is
//  visibly frame 1's door, and the frame-02 video can swing it open.
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const BLUE = '#1B9CCE', NAVY = '#181943';

// ── Rows (exact ink rows; Cairo line box = font size, offsets measured from the rendered glyphs)
// Frame 2, top down: setup ink 272–346 · key 1 370–511 · key 2 550–691 · sub 723–772.
// Frame 1, bottom up from the same key-line foot (691) and sub row (723): key 557–691 · setup 2 458–529 · setup 1 329–434.
const line = (cls, top, html) => `<div class="abs ln ${cls}" style="top:${top}px">${html}</div>`;

// ── Door geometry (all y in canvas px). Threshold on the column-5 and column-12 edges (x 392–1008); the frame
// stands 28 px in from each end, as piece 01's doors do. Frame ink x 420–980, y 820–1554 (560 × 734, 1 : 1.31).
const SW = 12;                    // frame stroke, as piece 01
const G = 1548;                   // threshold centreline
const XL = 426, XR = 974;         // jamb centrelines
const R = (XR - XL) / 2;          // round head, radius 274
const APEX = 826;                 // frame apex centreline (ink top 820)
const YS = APEX + R;              // springline 1100
const CX = (XL + XR) / 2;         // door centre x 700
const frame = `M${XR} ${G} L${XR} ${YS} A${R} ${R} 0 0 0 ${XL} ${YS} L${XL} ${G}`;
const threshold = `<line x1="${392 + SW / 2}" y1="${G}" x2="${1008 - SW / 2}" y2="${G}" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round"/>`;
// The opening (inside edge of the frame), used to clip the leaf and the light; the frame is drawn over the seam.
const RI = R - SW / 2;
const opening = `M${XR - SW / 2} ${G} L${XR - SW / 2} ${YS} A${RI} ${RI} 0 0 0 ${XL + SW / 2} ${YS} L${XL + SW / 2} ${G} Z`;

// Leaf: a 6 px line inset 26 px inside the frame (centreline x 452–948, head radius 248), hinge on the left,
// knob near the free (right) edge. Shut on frame 1; on frame 2 the same outline is rotated θ about the hinge.
const LEAF = { hx: XL + 26, w: (XR - 26) - (XL + 26), foot: G - 3, ys: YS, knobU: (XR - 26) - (XL + 26) - 42, knobV: YS + 36, knobR: 14 };
const EYE = { x: 540, y: 1250, d: 2400 };   // viewer: screen centre, at about knob height, 2400 px from the door
const OPEN = 84;                            // degrees: almost edge-on, so the opening takes the link sticker

// Kept in one string so Node and the page run the same code (the video page re-runs it per frame).
const leafJs = `
function leafAt(deg, L, E) {
  const t = deg * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
  const P = (u, v) => { const X = L.hx + u * c, Z = u * s, k = E.d / (E.d + Z);
    return [E.x + (X - E.x) * k, E.y + (v - E.y) * k, k]; };
  const r = L.w / 2, pts = [P(0, L.foot), P(0, L.ys)];
  for (let i = 1; i < 48; i++) { const a = Math.PI - (Math.PI * i) / 48; pts.push(P(r + r * Math.cos(a), L.ys - r * Math.sin(a))); }
  pts.push(P(L.w, L.ys), P(L.w, L.foot));
  const d = 'M' + pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L') + ' Z';
  const k = P(L.knobU, L.knobV);
  return { d, knob: { x: k[0], y: k[1], r: L.knobR * k[2] }, freeFoot: P(L.w, L.foot), freeTop: P(L.w, L.ys) };
}`;
const leafAt = new Function(`${leafJs}; return leafAt;`)();

// Frame 2's light: the lit floor seen through the open door, a wide but low band (the floor recedes toward eye
// level, so its right edge runs toward the viewer's eye). Clipped to the opening and hidden behind the leaf, it says
// "the door is open, the house is lit" without a slab of blue, so the pink CTA stays the heaviest mass on the frame.
const LIGHT_H = 88;
const lightPath = (() => {
  // Starts at the shut leaf's own edges (x 452–948), so the shut leaf hides it completely: in the frame-02 video
  // the light is never faded in, it is uncovered by the swinging leaf.
  const yb = G, yt = G - LIGHT_H, xi = LEAF.hx + LEAF.w;
  const xr = xi - (xi - EYE.x) * (LIGHT_H / (G - EYE.y));   // right wall's floor line, receding toward the eye
  return `M${LEAF.hx} ${yb} L${xi} ${yb} L${xr.toFixed(1)} ${yt} L${LEAF.hx} ${yt} Z`;
})();

const door = (deg, { anim = false } = {}) => {
  const L = leafAt(deg, LEAF, EYE);
  const light = deg > 0;
  return `
<svg class="abs door" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <defs><clipPath id="opening"><path d="${opening}"/></clipPath></defs>
  <g clip-path="url(#opening)">
    ${light || anim ? `<path id="light" d="${lightPath}" fill="${BLUE}"/>` : ''}
    <path id="leaf" d="${L.d}" fill="${NAVY}" stroke="${BLUE}" stroke-width="6" stroke-linejoin="round"/>
    <circle id="knob" cx="${L.knob.x.toFixed(1)}" cy="${L.knob.y.toFixed(1)}" r="${L.knob.r.toFixed(1)}" fill="${BLUE}"/>
  </g>
  <path d="${frame}" fill="none" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>
  ${threshold}
</svg>`;
};

// ── Logo: the official stacked lockup with the white wordmark for navy (decision #66), unaltered.
// File 520×530; its ink is x 25–494, y 32–503. Drawn 239 px wide (under the ~300 px limit): ink 216 px wide on
// columns 1–3 (x 72–288), wordmark 216×37 px, its foot on the threshold's bottom edge (y 1554).
const LOGO_W = 239, LOGO_S = LOGO_W / 520;
const logoLeft = +(72 - 25 * LOGO_S).toFixed(2);
const logoTop = +(G + SW / 2 - 503 * LOGO_S).toFixed(2);
const logo = `<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX" ` +
  `style="left:${logoLeft}px;top:${logoTop}px;width:${LOGO_W}px">`;

// ── Sticker zones (placement guide). Frame 1: Question sticker, wholly below the springline, between the knob
// and the floor, ≥24 px clear of the leaf line. Frame 2: link sticker in the opening, ≥24 px clear of the leaf's
// free edge and of the frame.
const Q = { x: CX - 216, y: LEAF.knobV + LEAF.knobR + 24, w: 432, h: 256 };   // x 484–916, y 1174–1430
const openLeaf = leafAt(OPEN, LEAF, EYE);
const K = { w: 400, h: 104 };
K.x = Math.round((openLeaf.freeTop[0] + 3 + (XR - SW / 2)) / 2 - K.w / 2);      // centred in the opening: x 540–940
K.y = Q.y + 40 + (Q.h - 40) / 2 - K.h / 2;                                   // centred on frame 1's sticker card

// Words exactly as in pieces/02-ig-story-before-the-visit.md (## Copy); *stars* = .accent.
// Line breaks: the copy's own break is kept on both frames; the key words get their own line (frame 1) and frame 2's
// key line breaks once after «رسالة». Both added breaks are open for the Copywriter to confirm (piece file, ## Design).
const frames = {
  '01': {
    deg: 0,
    body: `
${line('setup', 340, 'شنو أكثر شي تريد تعرفه')}
${line('setup', 449, 'قبل لا يجيك دكتور')}
${line('key', 534, '<span class="accent">للبيت؟</span>')}
${line('sub', 720, 'لا تكتب اسمك ولا شي عن صحتك.')}
__DOOR__
<div class="abs label" style="left:${CX}px;top:${YS - 112 - 44}px"><span>سؤال</span></div>
${logo}`,
    guide: `
<div class="abs mock-card" style="left:${Q.x + 8}px;top:${Q.y + 44}px;width:${Q.w - 16}px;height:${Q.h - 52}px">
  <div class="mock-avatar"></div>
  <div class="mock-prompt">prompt: the Copywriter's wording (open item)</div>
  <div class="mock-field" style="direction:ltr">Type something…</div>
</div>
<div class="abs zone" style="left:${Q.x}px;top:${Q.y}px;width:${Q.w}px;height:${Q.h}px"></div>
<div class="abs guide-note" style="left:72px;width:320px;top:860px;text-align:left">
  <b>Question sticker</b> (Instagram's own, typed in at posting)<br><br>
  · white variant, never pink<br>
  · up to 432 px wide = 40% of the screen<br>
  · inside the dashed zone:<br>&nbsp;&nbsp;x ${Q.x}–${Q.x + Q.w}, y ${Q.y}–${Q.y + Q.h}<br>
  · under the knob and the <bdi dir="rtl">«سؤال»</bdi> sign, ≥24 px clear of the door lines<br><br>
  prompt: the Copywriter's wording, still open (piece file, ## Design)
</div>`,
  },
  '02': {
    deg: OPEN,
    body: `
${line('setup', 262, 'وإذا تريد تحجز زيارة هسه:')}
${line('key', 349, '<span class="accent">دزلنا رسالة</span>')}
${line('key', 529, '<span class="accent">واتساب.</span>')}
${line('sub', 720, 'لا تصدگنا. شوف بعينك.')}
__DOOR__
${logo}`,
    guide: `
<div class="abs mock-link" style="left:${K.x + 8}px;top:${K.y + 8}px;width:${K.w - 16}px;height:${K.h - 16}px"><span class="mock-link-icon"></span>احجز بالواتساب</div>
<div class="abs zone" style="left:${K.x}px;top:${K.y}px;width:${K.w}px;height:${K.h}px"></div>
<div class="abs guide-note" style="left:72px;width:320px;top:860px;text-align:left">
  <b>Link sticker</b> (Instagram's own, typed in at posting)<br><br>
  · white variant, never pink<br>
  · text <bdi dir="rtl">«احجز بالواتساب»</bdi>, about 44 px<br>
  · up to ${K.w} px wide = 37% of the screen<br>
  · in the open doorway:<br>&nbsp;&nbsp;x ${K.x}–${K.x + K.w}, y ${K.y}–${K.y + K.h}<br>
  · ≥24 px clear of the leaf and the frame<br><br>
  link: [AT POSTING: wa.me link]
</div>`,
  },
};

// Held-video pages (frame-0N-video.html): the same still, held long enough to read by the house rule
// (0.45 s per word + 0.5 s; sticker words counted). Frame 2's door swings open 0.3–1.0 s, ease-out, uncovering the light; text never moves.
const swing = `<script>${leafJs}
const L = ${JSON.stringify(LEAF)}, E = ${JSON.stringify(EYE)}, OPEN = ${OPEN};
window.__seek = (ms) => {
  const t = Math.min(1, Math.max(0, (ms - 300) / 700)), e = 1 - Math.pow(1 - t, 3);   // ease-out cubic
  const f = leafAt(OPEN * e, L, E);
  document.getElementById('leaf').setAttribute('d', f.d);
  const k = document.getElementById('knob'); k.setAttribute('cx', f.knob.x); k.setAttribute('cy', f.knob.y); k.setAttribute('r', f.knob.r);
};
window.__seek(0);
</script>`;

const page = (id, f, mode) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-02 frame ${id}${mode === 'guide' ? ' (placement guide, not for posting)' : mode === 'video' ? ' (held video)' : ''}</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<link rel="stylesheet" href="story.css">
</head><body>
${f.body.replace('__DOOR__', door(mode === 'video' && f.deg ? 0 : f.deg, { anim: mode === 'video' && f.deg > 0 })).trim()}
${mode === 'guide' ? `
<div class="abs guide-band" style="top:0;height:250px;border-bottom-width:4px">Instagram UI: keep clear (top 250 px)</div>
<div class="abs guide-band" style="bottom:0;height:340px;border-top-width:4px">Instagram UI: keep clear (bottom 340 px)</div>
${f.guide.trim()}
<div class="abs guide-tag">PLACEMENT GUIDE, NOT FOR POSTING · frame ${id}</div>` : ''}
${mode === 'video' && f.deg ? swing : ''}
</body></html>
`;

const out = process.env.OUT ? path.resolve(process.env.OUT) : here;
for (const [id, f] of Object.entries(frames)) {
  writeFileSync(path.join(out, `frame-${id}.html`), page(id, f, 'still'));
  writeFileSync(path.join(out, `frame-${id}-guide.html`), page(id, f, 'guide'));
  writeFileSync(path.join(out, `frame-${id}-video.html`), page(id, f, 'video'));
}
console.log(JSON.stringify({ open: OPEN, freeTop: openLeaf.freeTop.map(n => +n.toFixed(1)), freeFoot: openLeaf.freeFoot.map(n => +n.toFixed(1)),
  knobOpen: openLeaf.knob, Q, K, chip: { top: YS - 156, bottom: YS - 68 }, logo: { logoLeft, logoTop } }));

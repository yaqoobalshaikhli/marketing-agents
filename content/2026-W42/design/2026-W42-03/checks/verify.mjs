// Round-2 checks for 2026-W42-03: on-screen words vs the piece file, reading holds, palette, safe band, pink vs blue.
//   node checks/verify.mjs   (from design/2026-W42-03/)
import { createRequire } from 'node:module'; import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url)), dir = path.dirname(here);
const req = createRequire(import.meta.url);
let pw; try { pw = req('playwright'); } catch { pw = req(path.join(execFileSync('npm', ['root', '-g']).toString().trim(), 'playwright')); }
const { T } = await import(path.join(dir, 'build.mjs')).catch(() => ({}));   // also rebuilds video.html

// 1. words: every on-screen line, joined per frame, must equal the piece file's line exactly
const piece = readFileSync(path.join(dir, '../../pieces/03-tiktok-home-lab-door-to-result.md'), 'utf8');
const copySection = piece.slice(piece.indexOf('## Copy'), piece.indexOf('## Caption'));
const copyLines = [...copySection.matchAll(/^(?:hook|text|cta|closing|series): (.+)$/gm)].map((m) => m[1].replace(/\*/g, '').split(' / ')).flat().map((s) => s.trim());
const b = await pw.chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
await p.goto('file://' + path.join(dir, 'video.html')); await p.evaluate(() => document.fonts.ready);
const onScreen = await p.evaluate(() => {
  const t = (e) => e.innerHTML.replace(/<br>/g, ' ').trim();
  const g = (c) => [...document.querySelectorAll('.' + c)].map(t);
  return [t(document.querySelector('.f1 .key')), t(document.querySelector('.f1 .lead')),
    ...['f2', 'f3', 'f4', 'f5', 'f6'].map((f) => `${g(f + 'a')[0]} ${g(f + 'k')[0]}`), g('f7k')[0], g('f7b')[0], document.querySelector('.tag span').textContent];
});
const want = [...copyLines.slice(0, 2), ...copyLines.slice(2)];
let ok = true;
const sortedWant = [...want].sort(), sortedHave = [...onScreen].sort();
const wordsOk = JSON.stringify(sortedWant) === JSON.stringify(sortedHave);
console.log(`words: ${wordsOk ? 'PASS' : 'FAIL'} (${onScreen.length} strings; piece file has ${want.length})`);
if (!wordsOk) { ok = false; console.log(' piece:', want, '\n page :', onScreen); }

// 2. holds: during each card's still window, its lines are opacity 1 with no transform, and every other card is 0
const cards = { f1: ['f1'], f2: ['f2a', 'f2k'], f3: ['f3a', 'f3k'], f4: ['f4a', 'f4k'], f5: ['f5a', 'f5k'], f6: ['f6a', 'f6k'], f7: ['f7k', 'f7b'] };
const inDur = { f1: 0, f6: 0.4 }, words = { f1: 4, f2: 3, f3: 4, f4: 3, f5: 3, f6: 3, f7: 7 };   // f3 counts the series tag (copy table)
const seek = (ms) => p.evaluate((t) => { for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; } window.__seek && window.__seek(t); }, ms);
const state = (cls) => p.evaluate((c) => [...document.querySelectorAll('.' + c)].map((e) => { const s = getComputedStyle(e); return [+s.opacity, s.transform]; }), cls);
const holds = {};
for (const [f, [a, z]] of Object.entries(T)) {
  const s0 = a + (inDur[f] ?? 0.3), s1 = z >= 19.999 ? z : z - 0.2, hold = +(s1 - s0).toFixed(2), need = +(0.45 * words[f] + 0.5).toFixed(2);
  holds[f] = hold;
  let still = true, alone = true;
  for (let t = s0 + 0.001; t < s1; t += 0.05) {
    await seek(t * 1000);
    for (const c of cards[f]) for (const [o, tr] of await state(c)) if (o !== 1 || (tr !== 'none' && tr !== 'matrix(1, 0, 0, 1, 0, 0)')) still = false;
    for (const [g, cl] of Object.entries(cards)) if (g !== f) for (const c of cl) for (const [o] of await state(c)) if (o !== 0) alone = false;
  }
  const pass = still && alone && hold >= need - 1e-9;
  if (!pass) ok = false;
  console.log(`${f} ${a.toFixed(1)}–${z.toFixed(1)} s: still hold ${hold} s (min ${need}) ${still ? 'still' : 'MOVES'} ${alone ? 'alone' : 'OVERLAP'} → ${pass ? 'PASS' : 'FAIL'}`);
}
const f6Longest = ['f1', 'f2', 'f3', 'f4', 'f5'].every((f) => holds.f6 > holds[f]);
console.log(`F6 longest hold of the six cards: ${holds.f6} s → ${f6Longest ? 'PASS' : 'FAIL'}`); if (!f6Longest) ok = false;
const dur = Math.max(...Object.values(T).map(([, z]) => z));
console.log(`duration ${dur} s (15–20) → ${dur >= 15 && dur <= 20 ? 'PASS' : 'FAIL'}`);

// 3. pixels on settled frames: palette share, content bounds (safe band x 180–900, y 220–1420), pink–blue gap
const PAL = { navy: [24, 25, 67], pink: [238, 57, 107], blue: [27, 156, 206], white: [255, 254, 255] };
const settled = [0, 3.5, 6.5, 8.0, 9.6, 11.5, 14.5, 18.0, 19.9];
for (const t of settled) {
  await seek(t * 1000);
  const buf = await p.screenshot();
  const r = await p.evaluate(async ({ png, PAL }) => {
    const img = new Image(); img.src = 'data:image/png;base64,' + png; await img.decode();
    const c = document.createElement('canvas'); c.width = 1080; c.height = 1920; const x = c.getContext('2d'); x.drawImage(img, 0, 0);
    const d = x.getImageData(0, 0, 1080, 1920).data; const pal = Object.values(PAL); const [pr, pg, pb] = PAL.pink, [br, bg, bb] = PAL.blue;
    let exact = 0, n = 0, x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1, pinkMaxY = -1, blueMinY = 1e9, pk = [], bl = [];
    for (let i = 0, k = 0; i < d.length; i += 4, k++) {
      const R = d[i], G = d[i + 1], B = d[i + 2]; n++;
      if (pal.some(([a, b2, c2]) => Math.abs(a - R) + Math.abs(b2 - G) + Math.abs(c2 - B) <= 3)) exact++;
      const px = k % 1080, py = (k / 1080) | 0;
      if (Math.abs(R - 24) + Math.abs(G - 25) + Math.abs(B - 67) > 24) { x0 = Math.min(x0, px); y0 = Math.min(y0, py); x1 = Math.max(x1, px); y1 = Math.max(y1, py); }
      if (Math.abs(R - pr) + Math.abs(G - pg) + Math.abs(B - pb) <= 30 && (px % 4 === 0) && (py % 4 === 0)) pk.push([px, py]);
      if (Math.abs(R - br) + Math.abs(G - bg) + Math.abs(B - bb) <= 30 && (px % 4 === 0) && (py % 4 === 0)) bl.push([px, py]);
    }
    // the logo's own pink/blue (x 180–331, y 236–388) is excluded from the pink–blue gap: decision #39
    const inLogo = ([px, py]) => px >= 170 && px <= 340 && py >= 226 && py <= 398;
    pk = pk.filter((q) => !inLogo(q)); bl = bl.filter((q) => !inLogo(q));
    let gap = 1e9; for (const a of pk) for (const q of bl) { const dd = Math.hypot(a[0] - q[0], a[1] - q[1]); if (dd < gap) gap = dd; }
    return { share: +(100 * exact / n).toFixed(2), box: [x0, y0, x1, y1], gap: pk.length && bl.length ? Math.round(gap) : null };
  }, { png: buf.toString('base64'), PAL });
  const inBand = r.box[0] >= 180 && r.box[2] <= 900 && r.box[1] >= 220 && r.box[3] <= 1420;
  if (!inBand) ok = false;
  console.log(`t=${t.toFixed(1)} s: palette ${r.share}% · content x ${r.box[0]}–${r.box[2]}, y ${r.box[1]}–${r.box[3]} ${inBand ? '(in band)' : 'OUT OF BAND'} · nearest pink–blue ${r.gap ?? 'n/a'} px`);
}
await b.close();
console.log(ok ? 'ALL CHECKS PASS' : 'SOME CHECKS FAIL');

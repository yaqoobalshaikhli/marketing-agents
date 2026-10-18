// Builds video.html for 2026-W42-03, round 2 (20.0 s, 1080×1920, silent kinetic typography) from one timeline,
// so every hold in the piece file's copy is enforced in code.
//   node build.mjs   → video.html
// Render: node .claude/skills/design-studio/scripts/render.mjs video video.html video.mp4 --w 1080 --h 1920 --fps 30 --dur 20
//
// Round 2 (Design Critic r1, REVISE 6.8): fixes in the critic's order.
//   1. Official logo file (on-navy, white wordmark, decision #66), unaltered, in a 152 px header zone, 4.9 s to the end.
//   2. The turn lands. F4 is 0.2 s longer; after «ونجيك لحد البيت.» settles: the route fills right to left (8.15–8.55),
//      then the door swings open in perspective as its own beat (8.6–9.1, the week's door from piece 01's door.mjs),
//      then a map pin lands on the threshold in the light (9.1–9.4) and stays to the end. F6 now has the longest still
//      hold of the six cards (2.7 s). Total 20.0 s, the cap of decision #61.
//   3. Type is the strong element: key 140 px Bold against a 54 px Medium lead (2.59:1). Long keys break onto two lines.
//      140 is the largest key whose widest line («دزها لكروب», ink 702 px) fits the 720 px band.
//   Also: pictograms moved off the door to a zone on its right, standing on the week's dotted route; end card on the
//   piece's two sizes and rows; calendar tick uses pathLength, so no stray dot before it draws.
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { doorSVG } from '../2026-W42-01/door.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const D = 20.0;                                   // seconds
const OUT = 'cubic-bezier(.16,.84,.3,1)';         // ease-out (enter, 0.3–0.4 s)
const IN = 'cubic-bezier(.55,0,.85,.4)';          // ease-in (exit, 0.2 s)
const INOUT = 'cubic-bezier(.45,0,.2,1)';

// ---- keyframe helper: stops = [[t, {o, x, y, extra}, easingForNextSegment], ...]
const css = [];
function kf(name, stops) {
  const pct = (t) => +(t / D * 100).toFixed(4);
  const full = [...stops];
  if (full[0][0] > 0) full.unshift([0, full[0][1]]);
  if (full[full.length - 1][0] < D) full.push([D, full[full.length - 1][1]]);
  const decl = (s) => {
    const parts = [];
    if (s.o !== undefined) parts.push(`opacity:${s.o}`);
    if (s.x !== undefined || s.y !== undefined) parts.push(`transform:translate(${s.x || 0}px,${s.y || 0}px)`);
    if (s.extra) parts.push(s.extra);
    return parts.join(';');
  };
  css.push(`@keyframes ${name}{${full.map(([t, s, e]) => `${pct(t)}%{${decl(s)}${e ? `;animation-timing-function:${e}` : ''}}`).join('')}}`);
  css.push(`.${name}{animation:${name} ${D}s linear 0s 1 both}`);
  return name;
}
const hidden = (x = 0, y = 0) => ({ o: 0, x, y });
const shown = { o: 1, x: 0, y: 0 };
// a card that enters over [a, a+inDur] from `from`, holds still, and leaves over [b-0.2, b] toward `to`
const card = (name, a, b, from, to = hidden(-32, 0), inDur = 0.3) =>
  kf(name, [[a, from, OUT], [a + inDur, shown], ...(b < D ? [[b - 0.2, shown, IN], [b, to]] : [])]);

// ---- timeline (seconds). Copy windows from pieces/03, with F4 +0.2 s and F6 +0.6 s (critic r1 fix 2):
// F1 0–2.5 · F2 2.5–4.9 · F3 4.9–7.7 · F4 7.7–10.3 · F5 10.3–12.7 · F6 12.7–16.0 · F7 16.0–20.0
export const T = { f1: [0, 2.5], f2: [2.5, 4.9], f3: [4.9, 7.7], f4: [7.7, 10.3], f5: [10.3, 12.7], f6: [12.7, 16.0], f7: [16.0, D] };
const BEAT = { route: [8.15, 8.55], swing: [8.6, 9.1], pin: [9.1, 9.4] };   // F4's turn, all after the line settles at 8.0

kf('f1', [[0, shown], [2.3, shown, IN], [2.5, hidden(-32, 0)]]);           // hook: on screen at 0.0 s, no fade-in
card('f2a', ...T.f2, hidden(48, 0));
card('f2k', ...T.f2, hidden(120, 0));                                       // «رسالة واتساب،» is sent: slides in right → left
card('f3a', ...T.f3, hidden(48, 0));
card('f3k', ...T.f3, hidden(0, 0));                                         // «نثبّت»: fixed, it doesn't travel
card('f4a', ...T.f4, hidden(48, 0));
card('f4k', ...T.f4, hidden(0, -72));                                       // «لحد البيت.» comes down, toward the door
card('f5a', ...T.f5, hidden(48, 0));
card('f5k', ...T.f5, hidden(0, 72));                                        // «بالواتساب.» rises, like an incoming message
card('f6a', ...T.f6, hidden(32, 0), undefined, 0.4);
card('f6k', ...T.f6, hidden(32, 0), undefined, 0.4);                        // the payoff: the slowest entrance, the longest hold
card('f7k', ...T.f7, hidden(48, 0));
card('f7b', ...T.f7, hidden(48, 0));
card('tag', T.f3[0], T.f6[1], hidden(0, 0), hidden(0, 0));                  // series tag: with F3, leaves with F6
card('logo', T.f3[0], D, hidden(0, 0));                                     // official logo: from 4.9 s to the end
// picture zone, right of the door (pictograms no longer sit on the door)
card('bubOut', ...T.f2, hidden(64, 0), hidden(0, -40));                     // your message: in R→L, then "sent" upward
card('cal', ...T.f3, hidden(0, 0), hidden(0, 0));
kf('tick', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [5.05, { extra: 'stroke-dashoffset:1;opacity:1' }, OUT], [5.35, { extra: 'stroke-dashoffset:0;opacity:1' }]]);
kf('route', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [BEAT.route[0], { extra: 'stroke-dashoffset:1;opacity:1' }, INOUT], [BEAT.route[1], { extra: 'stroke-dashoffset:0;opacity:1' }]]);
kf('pin', [[0, hidden(0, -96)], [BEAT.pin[0], hidden(0, -96), OUT], [BEAT.pin[1], shown]]);
kf('res', [[0, hidden(0, 72)], [T.f5[0], hidden(0, 72), OUT], [T.f5[0] + 0.3, shown], [T.f6[0], shown, OUT], [T.f6[0] + 0.4, { o: 1, x: 0, y: -100 }],
  [T.f6[1] - 0.2, { o: 1, x: 0, y: -100 }, IN], [T.f6[1], { o: 0, x: -32, y: -100 }]]);
card('talk', T.f6[0], T.f6[1], hidden(0, 40), undefined, 0.4);

// ---- geometry
// Safe band: x 180–900, y 220–1420. Text right anchor x 896 (Cairo Bold's «ت» overhangs it by 3 px).
// Rows: header 236–388 (logo ink 152 tall, tag 236–316) · lead 402 · key 466 (+175 per line) · line under the key 818
//       door apex 960 · ground 1404. Picture zone right of the door: x 664–900, y 1074–1362.
// Door: the week's drawing (piece 01's door.mjs, which is piece 02's round-2 door as a function), at 01/02's
// proportions (w : h ≈ 1 : 1.4). Jambs x 216–532, apex 960, ground 1404: its threshold starts at the band's left edge
// (x 182) and the route ends at its right edge (x 900), so one ground line runs across the band.
// The held states (closed to 8.6 s, open from 9.1 s) are door.mjs's own output, embedded at build time; only the 0.5 s
// swing between them is drawn per frame (window.__seek), from the same construction constants.
const DG = { xl: 216, xr: 532, apex: 960, ground: 1404, sw: 12 };
// (the open angle is door.mjs's own: its open state is the end of the swing)
// Logo file: 520×530, ink x 25–494, y 32–503 (470×472). Ink 152 tall → scale 0.3220, ink 151 wide, x 182–333, y 236–388
// (2 px in from the band's edge, so the file's faint anti-aliased rim stays inside it too).
const LS = 152 / 472;
const logoCss = `left:${(182 - 25 * LS).toFixed(2)}px; top:${(236 - 32 * LS).toFixed(2)}px; width:${(520 * LS).toFixed(2)}px;`;
// Route: piece 01's dotted path on the ground, from the sill's end to the band's right edge; fills solid at the turn.
const dots = [894, 858, 822, 786, 750, 714, 678, 642, 606].map((x) => `<circle cx="${x}" cy="${DG.ground}" r="6"/>`).join('');
// Map pin: lands on the threshold, in the light, right of the swung leaf (its free edge is at x 304 when open;
// the light runs to x 518). Navy, so it stands in the light as a silhouette.
const PX = 412, TIP = DG.ground - DG.sw / 2, PR = 46, PC = TIP - 86;       // tip on the threshold, head radius 46
const PIN = `M${PX} ${TIP} C${PX - 12} ${TIP - 24} ${PX - PR} ${PC + 24} ${PX - PR} ${PC} A${PR} ${PR} 0 0 1 ${PX + PR} ${PC} ` +
  `C${PX + PR} ${PC + 24} ${PX + 12} ${TIP - 24} ${PX} ${TIP} Z M${PX} ${PC - 16} A16 16 0 1 0 ${PX} ${PC + 16} A16 16 0 1 0 ${PX} ${PC - 16} Z`;

// The swing between door.mjs's closed and open states (8.6–9.1 s), drawn per frame in the page. Same construction
// constants as door.mjs: the leaf turns on its left hinge, so its free edge travels right → left (reading direction),
// its foot lifts off the floor line and its knob rides with it; the closed state's leaf line fades as the leaf moves.
// p = 0 is the closed leaf covering the light, p = 1 is door.mjs's open state.
function swingSVG(p, DG) {
  const BLUE = '#1B9CCE', NAVY = '#181943';
  const f = (n) => +n.toFixed(2), lerp = (a, b, q) => a + (b - a) * q;
  const { xl, xr, apex, ground: G, sw } = DG;
  const s = (xr - xl) / 548, R = (xr - xl) / 2, YS = apex + R, H = G - YS;
  const LT = Math.max(24 * s, sw / 2 + 6), HX = xl + LT, FX = HX + 128 * s, X0 = xr - LT + 2;
  const LI = Math.max(30 * s, sw / 2 + 10), lw = Math.max(6 * s, 4);
  const fx = lerp(X0, FX, p), foot = lerp(G - sw / 2, G - 30 * s, p);
  const light = `M${f(xr - LT)} ${G - sw / 2} L${f(xr - LT)} ${f(YS)} A${f(R - LT)} ${f(R - LT)} 0 0 0 ${f(xl + LT)} ${f(YS)} L${f(xl + LT)} ${G - sw / 2} Z`;
  const leaf = `M${f(HX - 40 * s)} ${G - sw / 2} L${f(HX - 40 * s)} ${f(YS - 300 * s)} L${f(fx - 40 * s * p)} ${f(YS - 300 * s)} ` +
    `C${f(fx - 6 * s * p)} ${f(YS - 220 * s)} ${f(fx)} ${f(YS - 100 * s)} ${f(fx)} ${f(YS + 34 * s)} L${f(fx)} ${f(foot)} Z`;
  const line = `M${f(xr - LI)} ${G - sw / 2} L${f(xr - LI)} ${f(YS)} A${f(R - LI)} ${f(R - LI)} 0 0 0 ${f(xl + LI)} ${f(YS)} L${f(xl + LI)} ${G - sw / 2}`;
  const kc = { dx: (xr - LT) - (xr - LI - Math.max(46 * s, 18)), y: YS + (196 / 492) * H, r: Math.max(16 * s, 9) };
  const ko = { dx: FX - (FX - Math.max(30 * s, 12)), y: YS + (180 / 492) * H, r: Math.max(13 * s, 7) };
  const kx = fx - lerp(kc.dx, ko.dx, p), ky = lerp(kc.y, ko.y, p), kr = lerp(kc.r, ko.r, p);
  const frame = `<path d="M${xr} ${G} L${xr} ${YS} A${R} ${R} 0 0 0 ${xl} ${YS} L${xl} ${G}" fill="none" stroke="${BLUE}" stroke-width="${sw}" stroke-linejoin="round"/>`;
  const threshold = `<line x1="${xl - 34 + sw / 2}" y1="${G}" x2="${xr + 34 - sw / 2}" y2="${G}" stroke="${BLUE}" stroke-width="${sw}" stroke-linecap="round"/>`;
  return `<path d="${light}" fill="${BLUE}"/><path d="${leaf}" fill="${NAVY}"/>` +
    `<path d="${line}" fill="none" stroke="${BLUE}" stroke-width="${f(lw)}" stroke-linejoin="round" opacity="${f(Math.max(0, 1 - p / 0.2))}"/>` +
    `<circle cx="${f(kx)}" cy="${f(ky)}" r="${f(kr)}" fill="${BLUE}"/>${frame}${threshold}`;
}

const html = `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-03 · تحليل بالبيت (video, 20.0 s)</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<style>
html, body { width: 1080px; height: 1920px; overflow: hidden; }
body { position: relative; background: var(--navy); }
.abs { position: absolute; }
svg.abs { left: 0; top: 0; }
/* Type: two sizes + one label, on every card including the end card. Key (pink) 140 Bold · lead (white) 54 Medium
   (ratio 2.59) · label 44 Bold. */
.ln { right: 184px; white-space: nowrap; text-align: right; }
.key { font-weight: 800; font-size: 140px; line-height: 1.25; color: var(--pink); }
.lead { font-weight: 500; font-size: 54px; line-height: 1.5; color: var(--white); }
.rowA { top: 402px; }   /* lead line above the key */
.rowK { top: 466px; }   /* the pink key always lands here; a second key line sits 175 px below */
.rowC { top: 818px; }   /* line under a two-line key (frame 1, frame 7) */
/* Header row: series tag right, logo left */
.tag { top: 236px; right: 184px; height: 80px; padding: 0 32px; border-radius: 40px; background: var(--blue); color: var(--navy);
  display: flex; align-items: center; font-weight: 800; font-size: 44px; line-height: 1; }
.tag span { position: relative; top: -3px; }
.logo { ${logoCss} height: auto; }
${css.join('\n')}
</style></head><body>

<!-- the door: the week's drawing (door.mjs), closed to 8.6 s, swinging 8.6–9.1 s, open to the end -->
<svg id="doorClosed" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">${doorSVG({ ...DG, state: 'closed' })}</svg>
<svg id="doorSwing" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true" style="display:none"></svg>
<svg id="doorOpen" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true" style="display:none">${doorSVG({ ...DG, state: 'open' })}</svg>

<!-- the route to the door: piece 01's dots, filled solid right → left at the turn -->
<svg class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <g fill="#1B9CCE">${dots}</g>
  <line class="route" x1="894" y1="${DG.ground}" x2="560" y2="${DG.ground}" stroke="#1B9CCE" stroke-width="12" stroke-linecap="round" pathLength="1" stroke-dasharray="1 1"/>
</svg>

<!-- F4 → end: the arrival, a map pin on the threshold (navy, so it stands in the light like a silhouette) -->
<svg class="abs pin" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="${PIN}" fill="#181943" fill-rule="evenodd"/>
</svg>

<!-- F2: your message (outgoing bubble; in an Arabic chat, sent messages sit left with the tail left) -->
<svg class="abs bubOut" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="M720 1180 H844 A40 40 0 0 1 884 1220 V1276 A40 40 0 0 1 844 1316 H712 L672 1346 L680 1300 V1220 A40 40 0 0 1 720 1180 Z" fill="#181943" stroke="#1B9CCE" stroke-width="10" stroke-linejoin="round"/>
  <g stroke="#FFFEFF" stroke-width="10" stroke-linecap="round"><line x1="852" y1="1218" x2="712" y2="1218"/><line x1="852" y1="1248" x2="738" y2="1248"/><line x1="852" y1="1278" x2="790" y2="1278"/></g>
</svg>

<!-- F3: the appointment (calendar, tick drawn in) -->
<svg class="abs cal" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <rect x="694" y="1164" width="192" height="176" rx="24" fill="#181943" stroke="#1B9CCE" stroke-width="10"/>
  <line x1="694" y1="1216" x2="886" y2="1216" stroke="#1B9CCE" stroke-width="10"/>
  <g stroke="#1B9CCE" stroke-width="12" stroke-linecap="round"><line x1="744" y1="1140" x2="744" y2="1180"/><line x1="836" y1="1140" x2="836" y2="1180"/></g>
  <path class="tick" d="M748 1280 L776 1308 L834 1246" fill="none" stroke="#FFFEFF" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1 1"/>
</svg>

<!-- F5: the result arrives (incoming file bubble; incoming sits right with the tail right). Nothing legible on it. -->
<svg class="abs res" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="M704 1200 H858 L890 1174 L884 1222 V1300 A36 36 0 0 1 848 1336 H700 A36 36 0 0 1 664 1300 V1240 A40 40 0 0 1 704 1200 Z" fill="#FFFEFF"/>
  <path d="M818 1224 H840 A10 10 0 0 1 850 1234 V1302 A10 10 0 0 1 840 1312 H806 A10 10 0 0 1 796 1302 V1246 Z" fill="none" stroke="#181943" stroke-width="8" stroke-linejoin="round"/>
  <path d="M818 1224 V1246 H796" fill="none" stroke="#181943" stroke-width="8" stroke-linejoin="round"/>
  <g stroke="#181943" stroke-width="12" stroke-linecap="round"><line x1="766" y1="1254" x2="696" y2="1254"/><line x1="766" y1="1284" x2="724" y2="1284"/></g>
</svg>

<!-- F6: a doctor explains it (speech balloon under the result, its tail toward the house) -->
<svg class="abs talk" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <rect x="680" y="1258" width="184" height="80" rx="40" fill="#FFFEFF"/>
  <path d="M700 1322 L672 1360 L734 1334 Z" fill="#FFFEFF" stroke="#FFFEFF" stroke-width="4" stroke-linejoin="round"/>
  <g fill="#181943"><circle cx="732" cy="1298" r="10"/><circle cx="772" cy="1298" r="10"/><circle cx="812" cy="1298" r="10"/></g>
</svg>

<!-- header -->
<div class="abs tag"><span>شوف بعينك</span></div>
<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX">

<!-- words, exactly as in the piece file (line breaks inside a key: Copywriter to confirm; no word changed) -->
<div class="f1">
  <p class="abs ln key rowK">تحليل<br>بالبيت؟</p>
  <p class="abs ln lead rowC">هيچ يصير.</p>
</div>
<p class="abs ln lead rowA f2a">تدزلنا</p>
<p class="abs ln key rowK f2k">رسالة<br>واتساب،</p>
<p class="abs ln lead rowA f3a">ونثبّتلك</p>
<p class="abs ln key rowK f3k">الموعد.</p>
<p class="abs ln lead rowA f4a">ونجيك</p>
<p class="abs ln key rowK f4k">لحد البيت.</p>
<p class="abs ln lead rowA f5a">والنتيجة توصلك</p>
<p class="abs ln key rowK f5k">بالواتساب.</p>
<p class="abs ln lead rowA f6a">ودكتور</p>
<p class="abs ln key rowK f6k">يشرحها<br>إلك.</p>
<p class="abs ln key rowK f7k">دزها لكروب<br>العائلة.</p>
<p class="abs ln lead rowC f7b">لا تصدگنا. شوف بعينك.</p>

<script>
// The door swing (8.6–9.1 s): swingSVG is defined in build.mjs and embedded here.
const DG = ${JSON.stringify(DG)}, SWING = ${JSON.stringify(BEAT.swing)};
${swingSVG.toString()}
const el = (id) => document.getElementById(id);
// Sine ease-in-out on the leaf's projected width: the light gap opens from the first frames, speeds up, then settles
// (a cubic ease on the angle, projected through cos, left the first 0.15 s of the swing almost still).
const ease = (u) => (1 - Math.cos(Math.PI * u)) / 2;
window.__seek = (ms) => {
  const t = ms / 1000, u = (t - SWING[0]) / (SWING[1] - SWING[0]);
  el('doorClosed').style.display = u <= 0 ? '' : 'none';
  el('doorOpen').style.display = u >= 1 ? '' : 'none';
  el('doorSwing').style.display = u > 0 && u < 1 ? '' : 'none';
  if (u > 0 && u < 1) el('doorSwing').innerHTML = swingSVG(ease(u), DG);
};
window.__seek(0);
</script>
</body></html>
`;
writeFileSync(path.join(here, 'video.html'), html);
console.log('wrote video.html');

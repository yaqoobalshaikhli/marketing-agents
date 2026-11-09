// Builds video.html for 2026-W42-03, round 3 (20.0 s, 1080×1920, silent kinetic typography) from one timeline,
// so every hold in the piece file's copy is enforced in code.
//   node build.mjs   → video.html
// Render: node .claude/skills/design-studio/scripts/render.mjs video video.html video.mp4 --w 1080 --h 1920 --fps 30 --dur 20
//
// Round 3 (Design Critic r2, REVISE 7.55, lowest 7.0). Fixes in the critic's order:
//   1. The arrival is ownable. The map pin is gone. When the door has swung open, the TabeebX gesture rises in the
//      light: a white dot lifts into a white bowl of two arms (9.15–9.60 s), drawn in the piece's own round-capped
//      line. It quotes the raised-arms gesture of the logo; it is not the mark (no torso, no base, no wordmark, one
//      colour, a stroke where the mark has solid shapes) and it is not a person (no body, no feet, it does not stand
//      on the floor; it floats in the light like a sign). It says "we are at your door" and nothing about who comes.
//   2. Signed from frame 0. The official on-navy logo (decision #66), unaltered, sits at ink x 182–402, y 236–457
//      (220 px wide, cap 300) on every frame from 0.0 s to 20.0 s, with no animation.
//   3. Pink type is the largest mass. A key is set at 200 px whenever its widest line fits the 720 px band
//      (F1 «تحليل / بالبيت؟», F3 «الموعد.», F4 «لحد / البيت.», F6 «يشرحها / إلك.»), otherwise at 140 px
//      (F2 «رسالة / واتساب،», F5 «بالواتساب.», F7 «دزها لكروب / العائلة.»). Two text sizes per card (+ the tag).
//   Also: (4) holds retimed so none sits on its minimum; (5) F6 keeps one element on the picture row (the balloon
//   replaces the result bubble); (6) the F4 key drops 160 px out of a slot under the lead, the F5 key rises 160 px;
//   (7) a shanasheel bay (Baghdad's projecting wooden upper window) over the door, so the house is a Baghdad house.
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { doorSVG } from '../2026-W42-01/door.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = process.env.ASSETS || '../../../../.claude/skills/design-studio/assets';
const OUTFILE = process.env.OUT || path.join(here, 'video.html');
const VARIANT = process.env.GESTURE || 'A';       // thumbnails only: A lift (chosen) · B held · C arms only
const SHAN = process.env.SHAN !== '0';            // thumbnails only: shanasheel on/off
const D = 20.0;                                   // seconds
const OUT = 'cubic-bezier(.16,.84,.3,1)';         // ease-out (enter)
const IN = 'cubic-bezier(.55,0,.85,.4)';          // ease-in (exit)
const INOUT = 'cubic-bezier(.45,0,.2,1)';
export const EXIT = 0.15;                         // every exit: 150 ms ease-in (design-studio: 150–200 ms)

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

// ---- timeline (seconds). Card windows [start, end]: enter over IN_DUR, hold still, exit over the last 0.15 s.
// Still holds against the minimum (0.45 s × words + 0.5 s; F3 counts the series tag, as in the copy table):
//   F1 0.00–2.40 = 2.40 (min 2.30) · F2 2.85–4.95 = 2.10 (1.85) · F3 5.35–7.75 = 2.40 (2.30)
//   F4 8.20–10.20 = 2.00 (1.85) · F5 10.65–12.75 = 2.10 (1.85) · F6 13.30–15.85 = 2.55 (1.85, the longest)
//   F7 16.25–20.00 = 3.75 (3.65). Every hold clears its minimum by 0.10 s or more.
export const T = { f1: [0, 2.55], f2: [2.55, 5.10], f3: [5.10, 7.90], f4: [7.90, 10.35], f5: [10.35, 12.90], f6: [12.90, 16.00], f7: [16.00, D] };
export const IN_DUR = { f1: 0, f2: 0.3, f3: 0.25, f4: 0.3, f5: 0.3, f6: 0.4, f7: 0.25 };
export const WORDS = { f1: 4, f2: 3, f3: 4, f4: 3, f5: 3, f6: 3, f7: 7 };
// F4's turn, three beats after the line settles at 8.20: the route fills, the door swings, the gesture rises.
export const BEAT = { route: [8.25, 8.60], swing: [8.65, 9.10], arms: [9.15, 9.55], dot: [9.25, 9.60] };

const card = (name, f, from, to = hidden(-32, 0)) => {
  const [a, b] = T[f], i = IN_DUR[f];
  return kf(name, [[a, from, OUT], [a + i, shown], ...(b < D ? [[b - EXIT, shown, IN], [b, to]] : [])]);
};
kf('f1', [[0, shown], [T.f1[1] - EXIT, shown, IN], [T.f1[1], hidden(-32, 0)]]);   // hook: on screen at 0.0 s, no fade-in
card('f2a', 'f2', hidden(48, 0));
card('f2k', 'f2', hidden(120, 0));        // «رسالة واتساب،» is sent: slides 120 px right → left
card('f3a', 'f3', hidden(48, 0));
card('f3k', 'f3', hidden(0, 0));          // «الموعد.» is fixed: it fades in where it stays
card('f4a', 'f4', hidden(48, 0));
card('f4k', 'f4', hidden(0, -160));       // «لحد البيت.» drops 160 px toward the house, out of a slot under the lead
card('f5a', 'f5', hidden(48, 0));
card('f5k', 'f5', hidden(0, 160));        // «بالواتساب.» rises 160 px, like an incoming message
card('f6a', 'f6', hidden(32, 0));
card('f6k', 'f6', hidden(32, 0));         // the payoff: the slowest entrance (0.4 s), the longest hold
card('f7k', 'f7', hidden(48, 0));
card('f7b', 'f7', hidden(48, 0));
kf('tag', [[T.f3[0], hidden(), OUT], [T.f3[0] + IN_DUR.f3, shown], [T.f6[1] - EXIT, shown, IN], [T.f6[1], hidden()]]);  // F3–F6
// picture row, right of the door: one element per card, all on one row (y 1164–1346)
card('bubOut', 'f2', hidden(64, 0), hidden(0, -40));   // F2 your message: in right → left, then "sent" upward
card('cal', 'f3', hidden(0, 0), hidden(0, 0));         // F3 the appointment
kf('tick', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [T.f3[0] + 0.15, { extra: 'stroke-dashoffset:1;opacity:1' }, OUT], [T.f3[0] + 0.45, { extra: 'stroke-dashoffset:0;opacity:1' }]]);
kf('route', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [BEAT.route[0], { extra: 'stroke-dashoffset:1;opacity:1' }, INOUT], [BEAT.route[1], { extra: 'stroke-dashoffset:0;opacity:1' }]]);
card('res', 'f5', hidden(0, 72));                      // F5 the result arrives (rises, incoming)
card('talk', 'f6', hidden(0, 40));                     // F6 a doctor explains it: replaces the result on the same row
// the gesture: both arms draw outward from the bowl's bottom, then the dot lifts into them; they stay to the end
kf('arm', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [BEAT.arms[0], { extra: 'stroke-dashoffset:1;opacity:1' }, OUT], [BEAT.arms[1], { extra: 'stroke-dashoffset:0;opacity:1' }]]);
kf('dot', [[0, hidden(0, 44)], [BEAT.dot[0], hidden(0, 44), OUT], [BEAT.dot[1], shown]]);

// ---- geometry
// Safe band: x 180–900, y 220–1420. Text right anchor x 894 (Cairo Bold's «ت» overhangs it by 5 px at 200 px → 899).
// Rows (Cairo metrics: 200 px key, alef top +57 and baseline +197 in its 250 px box; 140 px key, +39 and +137 in 175;
// 54 px lead, baseline +59 in 81):
//   header 236–457: logo ink x 182–402 (left), tag 236–316 (right)
//   lead baseline 457 = the wordmark's baseline (lead box top 398)
//   every key hangs from y 540 (alef top): 200 px box top 483 (+250 per line) · 140 px box top 501 (+175 per line)
//   a lead under a key (F1, F7 bookends) hangs 44 px under the key's ink
//   the house (shanasheel over the door) 995–1404, its top 60 px or more under every key's ink
//   picture row right of the door: x 664–896, y 1164–1346, standing on the ground line y 1404
const ROW = { lead: 398, k200: 483, k140: 501, f1lead: 990, f7lead: 841 };
// Door: the week's drawing (piece 01's door.mjs) at 01/02's proportions (h : w = 1.4), 222 px wide under the bay.
// Jambs x 216–438; the threshold starts at the band's left edge (x 188) on the logo's axis.
const DG = { xl: 216, xr: 438, apex: 1093, ground: 1404, sw: 12 };
// Logo file: 520×530, ink x 25–494, y 32–503 (470×472). Ink 220 wide → scale 0.4681, ink x 182–402, y 236–457.
const LS = 220 / 470;
const logoCss = `left:${(182 - 25 * LS).toFixed(2)}px; top:${(236 - 32 * LS).toFixed(2)}px; width:${(520 * LS).toFixed(2)}px;`;
// Route: piece 01's dotted path on the ground, from the band's right edge to the threshold; fills solid at the turn.
const thresholdEnd = DG.xr + 34 - DG.sw / 2;   // 466
const dots = Array.from({ length: 12 }, (_, k) => 894 - 36 * k).filter((x) => x > thresholdEnd + 20).map((x) => `<circle cx="${x}" cy="${DG.ground}" r="6"/>`).join('');

// The shanasheel (شناشيل): the projecting wooden upper window of the old Baghdad house front. Curtin University
// thesis "Shanasheel; it's socio-cultural context and making process" (espace.curtin.edu.au/handle/20.500.11937/50566)
// and Designed in Iraq (designediniraq.org/entry/shanasheel-baghdad-basra/): a wooden structure projecting from the
// front of the house, on the first floor or higher, with latticework for privacy and air, common in the 1920s–30s
// "mainly in Baghdad and Basra". Drawn as the week's line (12 px outline, 8 px slats, round caps), no ornament:
// a bay as wide as the threshold, its row of upright slats, a sill, and two struts down to the wall over the door.
const BAY = { x0: 188, x1: thresholdEnd, top: 995, sill: 1057, strut: 1081 };
function shanasheelSVG({ x0, x1, top, sill, strut }) {
  const BLUE = '#1B9CCE', NAVY = '#181943', f = (n) => +n.toFixed(2);
  const n = 7, step = (x1 - x0) / (n + 1);
  const slats = Array.from({ length: n }, (_, k) => x0 + step * (k + 1)).map((x) => `<line x1="${f(x)}" y1="${top + 16}" x2="${f(x)}" y2="${sill - 16}"/>`).join('');
  return `<rect x="${x0}" y="${top}" width="${x1 - x0}" height="${sill - top}" rx="4" fill="${NAVY}" stroke="${BLUE}" stroke-width="12" stroke-linejoin="round"/>` +
    `<g stroke="${BLUE}" stroke-width="8" stroke-linecap="round">${slats}</g>` +
    `<g stroke="${BLUE}" stroke-width="10" stroke-linecap="round" fill="none">` +
    `<path d="M${x0 + 18} ${sill} L${x0 + 40} ${strut}"/><path d="M${x1 - 18} ${sill} L${x1 - 40} ${strut}"/></g>`;
}

// The gesture in the light. Centre x: the middle of the clear light right of the open leaf.
const s = (DG.xr - DG.xl) / 548, LT = Math.max(24 * s, DG.sw / 2 + 6);
const leafEdge = DG.xl + LT + 128 * s, lightRight = DG.xr - LT;
const BASES = { A: 1316, B: 1316, C: 1316, D: 1196, E: 1380, F: 1250 };
const G = { cx: Math.round((leafEdge + lightRight) / 2), base: BASES[VARIANT] };
function gestureSVG(v, { cx, base }) {
  const W = '#FFFEFF', sw = 15;
  if ('ABC'.includes(v)) {
    // round bowl (rejected: reads as a smile)
    const half = v === 'B' ? 54 : 50, rise = v === 'B' ? 34 : 50;
    const arm = (side) => `<path class="arm" pathLength="1" stroke-dasharray="1 1" d="M${cx} ${base} C${cx + side * half * 0.55} ${base} ${cx + side * half * 0.95} ${base - rise * 0.45} ${cx + side * half} ${base - rise}" fill="none" stroke="${W}" stroke-width="${sw}" stroke-linecap="round"/>`;
    const dot = v === 'C' ? '' : v === 'B' ? `<circle class="dot" cx="${cx}" cy="${base - 30}" r="17" fill="${W}"/>` : `<circle class="dot" cx="${cx}" cy="${base - rise - 4}" r="18" fill="${W}"/>`;
    return `<g>${arm(1)}${arm(-1)}${dot}</g>`;
  }
  // the logo's V: straight arms at ~40° from a tight rounded bottom, tips below the dot's centre (D, F); E: arms only
  const half = v === 'E' ? 52 : 56, rise = v === 'E' ? 62 : 48, r0 = 10;
  const arm = (side) => `<path class="arm" pathLength="1" stroke-dasharray="1 1" d="M${cx} ${base} Q${cx + side * r0} ${base} ${cx + side * r0 * 1.6} ${base - r0 * 1.2} L${cx + side * half} ${base - rise}" fill="none" stroke="${W}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const dot = v === 'E' ? '' : `<circle class="dot" cx="${cx}" cy="${base - rise - 8}" r="19" fill="${W}"/>`;
  return `<g>${arm(1)}${arm(-1)}${dot}</g>`;
}

// The swing between door.mjs's closed and open states (8.65–9.10 s), drawn per frame in the page with door.mjs's
// construction constants: the leaf turns on its left hinge, so its free edge travels right → left (reading
// direction), its foot lifts off the floor line and its knob rides with it; the closed leaf line fades as it moves.
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

const CLOSED = doorSVG({ ...DG, state: 'closed' });
const OPEN = doorSVG({ ...DG, state: 'open' });
const BAYSVG = SHAN ? shanasheelSVG(BAY) : '';

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
/* Type: per card, one key size and the 54 px lead (plus the 44 px tag label on F3–F6).
   The key (pink, Cairo Bold) is 200 px when its widest line fits the 720 px band, otherwise 140 px. */
.ln { right: 186px; white-space: nowrap; text-align: right; }
.key { font-weight: 800; line-height: 1.25; color: var(--pink); }
.k200 { font-size: 200px; top: ${ROW.k200}px; }
.k140 { font-size: 140px; top: ${ROW.k140}px; }
.lead { font-weight: 500; font-size: 54px; line-height: 1.5; color: var(--white); }
.rowA { top: ${ROW.lead}px; }      /* lead above the key: its baseline is the wordmark's (y 457) */
/* Header row: the series tag right, the logo left */
.tag { top: 236px; right: 186px; height: 80px; padding: 0 32px; border-radius: 40px; background: var(--blue); color: var(--navy);
  display: flex; align-items: center; font-weight: 800; font-size: 44px; line-height: 1; }
.tag span { position: relative; top: -3px; }
.logo { ${logoCss} height: auto; }
/* F4's key drops out of a slot under the lead: a fixed mask whose top edge (y 490) sits between the lead's ink
   (to 470) and the key's (from 540), so the words appear from under the lead and travel down toward the house */
.mask4 { left: 0; top: 490px; width: 1080px; height: 520px; overflow: hidden; }
.mask4 .k200 { top: ${ROW.k200 - 490}px; }
${css.join('\n')}
</style></head><body>

<!-- the house: a shanasheel bay over the week's door (door.mjs). Closed to 8.65 s, swinging 8.65–9.10 s, open to
     the end; from 9.15 s the TabeebX gesture rises in the light and stays -->
<svg class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">${BAYSVG}</svg>
<svg id="door" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"></svg>
<svg id="gesture" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">${gestureSVG(VARIANT, G)}</svg>

<!-- the route to the door: piece 01's dots, filled solid right → left at the turn, ending at the threshold -->
<svg class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <g fill="#1B9CCE">${dots}</g>
  <line class="route" x1="894" y1="${DG.ground}" x2="${thresholdEnd}" y2="${DG.ground}" stroke="#1B9CCE" stroke-width="12" stroke-linecap="round" pathLength="1" stroke-dasharray="1 1"/>
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

<!-- F6: a doctor explains it (one speech balloon on the same row as the result it replaces, its tail toward the house) -->
<svg class="abs talk" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <rect x="672" y="1200" width="212" height="104" rx="52" fill="#FFFEFF"/>
  <path d="M712 1290 L670 1344 L756 1300 Z" fill="#FFFEFF" stroke="#FFFEFF" stroke-width="4" stroke-linejoin="round"/>
  <g fill="#181943"><circle cx="736" cy="1252" r="12"/><circle cx="778" cy="1252" r="12"/><circle cx="820" cy="1252" r="12"/></g>
</svg>

<!-- header: the official logo, unaltered, from 0.0 s to the end, in one place; the series tag on F3–F6 -->
<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX">
<div class="abs tag"><span>شوف بعينك</span></div>

<!-- words, exactly as in the piece file (line breaks inside a key: Copywriter to confirm; no word changed) -->
<div class="f1">
  <p class="abs ln key k200">تحليل<br>بالبيت؟</p>
  <p class="abs ln lead" style="top:${ROW.f1lead}px">هيچ يصير.</p>
</div>
<p class="abs ln lead rowA f2a">تدزلنا</p>
<p class="abs ln key k140 f2k">رسالة<br>واتساب،</p>
<p class="abs ln lead rowA f3a">ونثبّتلك</p>
<p class="abs ln key k200 f3k">الموعد.</p>
<p class="abs ln lead rowA f4a">ونجيك</p>
<div class="abs mask4"><p class="abs ln key k200 f4k">لحد<br>البيت.</p></div>
<p class="abs ln lead rowA f5a">والنتيجة توصلك</p>
<p class="abs ln key k140 f5k">بالواتساب.</p>
<p class="abs ln lead rowA f6a">ودكتور</p>
<p class="abs ln key k200 f6k">يشرحها<br>إلك.</p>
<p class="abs ln key k140 f7k">دزها لكروب<br>العائلة.</p>
<p class="abs ln lead f7b" style="top:${ROW.f7lead}px">لا تصدگنا. شوف بعينك.</p>

<script>
// The door, drawn per frame: closed (door.mjs), the swing (8.65–9.10 s), open (door.mjs). door.mjs's own output is
// embedded as built; only the 0.45 s swing is drawn here, from the same construction constants.
const DG = ${JSON.stringify(DG)}, SWING = ${JSON.stringify(BEAT.swing)};
const CLOSED = ${JSON.stringify(CLOSED)}, OPEN = ${JSON.stringify(OPEN)};
${swingSVG.toString()}
// Sine ease-in-out on the leaf's projected width: the light opens from the first frames, speeds up, then settles.
const ease = (u) => (1 - Math.cos(Math.PI * u)) / 2;
const door = document.getElementById('door');
window.__seek = (ms) => {
  const u = (ms / 1000 - SWING[0]) / (SWING[1] - SWING[0]);
  door.innerHTML = u <= 0 ? CLOSED : u >= 1 ? OPEN : swingSVG(ease(u), DG);
};
window.__seek(0);
</script>
</body></html>
`;
writeFileSync(OUTFILE, html);
console.log(`wrote ${path.relative(process.cwd(), OUTFILE)} (gesture centre x ${G.cx}, clear light x ${leafEdge.toFixed(0)}–${lightRight.toFixed(0)})`);

// Builds video.html for 2026-W42-03, round 3 (20.0 s, 1080×1920, silent kinetic typography) from one timeline,
// so every hold in the piece file's copy is enforced in code.
//   node build.mjs   → video.html
// Render: node .claude/skills/design-studio/scripts/render.mjs video video.html video.mp4 --w 1080 --h 1920 --fps 30 --dur 20
//
// Round 3 (Design Critic r2, REVISE 7.55, lowest 7.0): fixes in the critic's order.
//   1. The arrival is ownable. The map pin is gone. When the door swings open (8.65–9.10 s) the light reveals a navy
//      figure standing in the doorway, and at 9.15–9.50 s it raises its arms: a pictogram derived from the logo's
//      raised-arms gesture (head, arms rising in a crescent, one stem), drawn in the piece's own line, one colour.
//      It is not the mark: the mark is the unaltered file in the header, and the figure has no T-bar, no base, no pink.
//   2. Signed from frame 0. The official on-navy logo (decision #66), unaltered, sits at x 182–402, y 236–457 (220 px
//      of ink, cap 300) on every frame from 0.0 s to 20.0 s, with no animation. Every key clears it by 52 px or more.
//   3. Pink type is the largest mass. A key is set at 200 px whenever its widest line fits the 720 px band
//      (F1 «تحليل / بالبيت؟», F3 «الموعد.», F4 «لحد / البيت.», F6 «يشرحها / إلك.»), otherwise at 140 px
//      (F2 «واتساب،» is 733 px at 200, F5 «بالواتساب.» 937, F7 «دزها لكروب» 1002). Two sizes per frame, lead 54 px.
//      The door is smaller (253 px wide, was 316) and its fanlight stays dark, so the blue mass shrinks.
//   Also: holds retimed so none sits on its minimum (exits 0.15 s, inside the 150–200 ms rule); F6's picture zone keeps
//   one element on the F2–F5 row; the F4 key drops 160 px (masked under the lead) and the F5 key rises 160 px;
//   the door's head carries the vertical wooden bars of Baghdad's shanasheel (Designed in Iraq, cited in the piece file).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { doorSVG } from '../2026-W42-01/door.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const D = 20.0;                                   // seconds
const OUT = 'cubic-bezier(.16,.84,.3,1)';         // ease-out (enter, 0.3–0.4 s)
const IN = 'cubic-bezier(.55,0,.85,.4)';          // ease-in (exit, 0.15 s)
const INOUT = 'cubic-bezier(.45,0,.2,1)';
export const EXIT = 0.15;

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
// a card that enters over [a, a+inDur] from `from`, holds still, and leaves over [b-EXIT, b] toward `to`
const card = (name, a, b, from, to = hidden(-32, 0), inDur = 0.3) =>
  kf(name, [[a, from, OUT], [a + inDur, shown], ...(b < D ? [[b - EXIT, shown, IN], [b, to]] : [])]);

// ---- timeline (seconds). Still holds (minimum = 0.45 s × words + 0.5 s):
// F1 0.00–2.40 (2.40, min 2.30) · F2 2.85–4.95 (2.10, min 1.85) · F3 5.40–7.80 (2.40, min 2.30 with the tag)
// F4 8.25–10.25 (2.00, min 1.85) · F5 10.70–12.80 (2.10, min 1.85) · F6 13.35–15.80 (2.45, min 1.85, the longest)
// F7 16.25–20.00 (3.75, min 3.65)
export const T = { f1: [0, 2.55], f2: [2.55, 5.1], f3: [5.1, 7.95], f4: [7.95, 10.4], f5: [10.4, 12.95], f6: [12.95, 15.95], f7: [15.95, D] };
export const IN_DUR = { f1: 0, f6: 0.4 };          // every other card enters in 0.3 s
const BEAT = { route: [8.30, 8.65], swing: [8.65, 9.10], arms: [9.15, 9.50] };   // F4's turn, after the line settles at 8.25

kf('f1', [[0, shown], [T.f1[1] - EXIT, shown, IN], [T.f1[1], hidden(-32, 0)]]);   // hook: on screen at 0.0 s, no fade-in
card('f2a', ...T.f2, hidden(48, 0));
card('f2k', ...T.f2, hidden(120, 0));                                       // «رسالة واتساب،» is sent: slides in right → left
card('f3a', ...T.f3, hidden(48, 0));
card('f3k', ...T.f3, hidden(0, 0));                                         // «نثبّت»: fixed, it doesn't travel
card('f4a', ...T.f4, hidden(48, 0));
card('f4k', ...T.f4, hidden(0, -160));                                      // «لحد البيت.» drops 160 px toward the door, from under the lead
card('f5a', ...T.f5, hidden(48, 0));
card('f5k', ...T.f5, hidden(0, 160));                                       // «بالواتساب.» rises 160 px, like an incoming message
card('f6a', ...T.f6, hidden(32, 0), undefined, 0.4);
card('f6k', ...T.f6, hidden(32, 0), undefined, 0.4);                        // the payoff: the slowest entrance, the longest hold
card('f7k', ...T.f7, hidden(48, 0));
card('f7b', ...T.f7, hidden(48, 0));
card('tag', T.f3[0], T.f6[1], hidden(0, 0), hidden(0, 0));                  // series tag: with F3, leaves with F6
// picture zone, right of the door: one element per card, all on one row (y 1164–1346)
card('bubOut', ...T.f2, hidden(64, 0), hidden(0, -40));                     // F2 your message: in R→L, then "sent" upward
card('cal', ...T.f3, hidden(0, 0), hidden(0, 0));                           // F3 the appointment
kf('tick', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [T.f3[0] + 0.15, { extra: 'stroke-dashoffset:1;opacity:1' }, OUT], [T.f3[0] + 0.45, { extra: 'stroke-dashoffset:0;opacity:1' }]]);
kf('route', [[0, { extra: 'stroke-dashoffset:1;opacity:0' }], [BEAT.route[0], { extra: 'stroke-dashoffset:1;opacity:1' }, INOUT], [BEAT.route[1], { extra: 'stroke-dashoffset:0;opacity:1' }]]);
card('res', ...T.f5, hidden(0, 72));                                        // F5 the result arrives (rises, incoming)
card('talk', ...T.f6, hidden(0, 40), undefined, 0.4);                       // F6 a doctor explains it: replaces the result on the same row

// ---- geometry
// Safe band: x 180–900, y 220–1420. Text right anchor x 894 (Cairo Bold's «ت» overhangs it by 5 px at 200 px → 899).
// Rows (measured from Cairo's metrics: 200 px key, alef top +57 and baseline +197 in its 250 px box; 140 px key,
// +39 and +137 in 175; 54 px lead, baseline +59 in 81):
//   header 236–457: logo ink x 182–402 (left), tag 236–316 (right)
//   lead baseline 457 = the wordmark's baseline (lead box top 398)
//   every key hangs from y 540 (alef top): 200 px box top 483 (+250 per line) · 140 px box top 501 (+175 per line)
//   a lead under a key (F1, F7 bookends) hangs 44 px under the key's ink
//   door apex 1050 · ground 1404. Picture zone right of the door: x 664–896, y 1164–1346.
const ROW = { lead: 398, k200: 483, k140: 501, f1lead: 990, f7lead: 882 };
// Door: the week's drawing (piece 01's door.mjs), at 01/02's proportions (w : h ≈ 1 : 1.4), now 253 px wide so the
// pink type outweighs it. Jambs x 216–469: its threshold starts at the band's left edge (x 182), on the logo's axis.
const DG = { xl: 216, xr: 469.2, apex: 1050, ground: 1404, sw: 12 };
// Logo file: 520×530, ink x 25–494, y 32–503 (470×472). Ink 220 wide → scale 0.4681, ink x 182–402, y 236–457.
const LS = 220 / 470;
const logoCss = `left:${(182 - 25 * LS).toFixed(2)}px; top:${(236 - 32 * LS).toFixed(2)}px; width:${(520 * LS).toFixed(2)}px;`;
// Route: piece 01's dotted path on the ground, from the band's right edge to the threshold; fills solid at the turn.
const dots = Array.from({ length: 11 }, (_, k) => 894 - 36 * k).map((x) => `<circle cx="${x}" cy="${DG.ground}" r="6"/>`).join('');
const thresholdEnd = DG.xr + 34 - DG.sw / 2;   // 497

// The door's head (both states): the vertical wooden bars of Baghdad's shanasheel in the fanlight, under a transom.
// Designed in Iraq (designediniraq.org/entry/shanasheel-baghdad-basra/): shanasheel are wooden lattice structures on
// house fronts, "mainly in Baghdad and Basra". Drawn in the door's own 10–12 px blue line; no ornament.
// It covers the arch head inside the frame with navy down to 11 px under the transom, so in the open state the light
// is a lit rectangle under a dark barred fanlight (and the open leaf's head, which door.mjs draws above the spring
// line, stays hidden as door.mjs intends).
function headSVG({ xl, xr, apex, ground: G, sw }) {
  const BLUE = '#1B9CCE', NAVY = '#181943', f = (n) => +n.toFixed(2);
  const R = (xr - xl) / 2, YS = apex + R, cx = (xl + xr) / 2, ri = R - sw / 2;
  const cover = `M${f(xl + sw / 2)} ${f(YS + 11)} L${f(xl + sw / 2)} ${f(YS)} A${f(ri)} ${f(ri)} 0 0 1 ${f(xr - sw / 2)} ${f(YS)} L${f(xr - sw / 2)} ${f(YS + 11)} Z`;
  const bars = [-80, -40, 0, 40, 80].map((dx) => `<line x1="${f(cx + dx)}" y1="${f(YS)}" x2="${f(cx + dx)}" y2="${f(YS - Math.sqrt(R * R - dx * dx))}"/>`).join('');
  return `<path d="${cover}" fill="${NAVY}"/><g stroke="${BLUE}" stroke-width="10" stroke-linecap="butt">${bars}</g>` +
    `<line x1="${xl}" y1="${f(YS)}" x2="${xr}" y2="${f(YS)}" stroke="${BLUE}" stroke-width="10"/>`;
}

// The arrival: a pictogram derived from the raised-arms gesture (never the mark). Navy, so it stands in the light as
// a silhouette: a head, two arms that rise in a crescent past the head, and one stem standing on the threshold.
// a = 0 arms lowered at the sides, a = 1 arms raised. Its centre sits in the clear light right of the open leaf.
const FIG = { cx: 372, foot: DG.ground - DG.sw / 2 };
function figureSVG(a, FIG) {
  const NAVY = '#181943', f = (n) => +n.toFixed(2), { cx, foot } = FIG;
  const sh = foot - 86;                                     // shoulder line
  const arm = (side) => {
    const ang = side * (1 - a) * 133;                       // lowered: rotated 133° down from the raised pose
    const d = `M${f(cx + side * 12)} ${f(sh)} Q${f(cx + side * 52)} ${f(sh - 2)} ${f(cx + side * 58)} ${f(sh - 72)}`;
    return `<path d="${d}" transform="rotate(${f(ang)} ${f(cx + side * 12)} ${f(sh)})" fill="none" stroke="${NAVY}" stroke-width="20" stroke-linecap="round"/>`;
  };
  return `<g><rect x="${cx - 17}" y="${f(sh - 12)}" width="34" height="${f(foot - sh + 12)}" rx="17" fill="${NAVY}"/>` +
    `<rect x="${cx - 17}" y="${f(foot - 20)}" width="34" height="20" fill="${NAVY}"/>` +
    `<circle cx="${cx}" cy="${f(sh - 50)}" r="21" fill="${NAVY}"/>${arm(1)}${arm(-1)}</g>`;
}

// The swing between door.mjs's closed and open states (8.65–9.10 s), drawn per frame in the page. Same construction
// constants as door.mjs: the leaf turns on its left hinge, so its free edge travels right → left (reading direction),
// its foot lifts off the floor line and its knob rides with it; the closed state's leaf line fades as the leaf moves.
// `inside` (the figure) is drawn between the light and the leaf, so the opening door reveals it.
function swingSVG(p, DG, inside) {
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
  return `<path d="${light}" fill="${BLUE}"/>${inside}<path d="${leaf}" fill="${NAVY}"/>` +
    `<path d="${line}" fill="none" stroke="${BLUE}" stroke-width="${f(lw)}" stroke-linejoin="round" opacity="${f(Math.max(0, 1 - p / 0.2))}"/>` +
    `<circle cx="${f(kx)}" cy="${f(ky)}" r="${f(kr)}" fill="${BLUE}"/>${frame}${threshold}`;
}

const HEAD = headSVG(DG);
const CLOSED = doorSVG({ ...DG, state: 'closed' }) + HEAD;
const OPEN = doorSVG({ ...DG, state: 'open' }) + HEAD;

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
/* Type: per frame, one key size and the 54 px lead (plus the 44 px tag label on F3–F6).
   Key (pink, Cairo Bold) is 200 px when its widest line fits the 720 px band, otherwise 140 px. */
.ln { right: 186px; white-space: nowrap; text-align: right; }
.key { font-weight: 800; line-height: 1.25; color: var(--pink); }
.k200 { font-size: 200px; top: ${ROW.k200}px; }
.k140 { font-size: 140px; top: ${ROW.k140}px; }
.lead { font-weight: 500; font-size: 54px; line-height: 1.5; color: var(--white); }
.rowA { top: ${ROW.lead}px; }      /* lead above the key: its baseline is the wordmark's (y 457) */
/* Header row: series tag right, logo left */
.tag { top: 236px; right: 186px; height: 80px; padding: 0 32px; border-radius: 40px; background: var(--blue); color: var(--navy);
  display: flex; align-items: center; font-weight: 800; font-size: 44px; line-height: 1; }
.tag span { position: relative; top: -3px; }
.logo { ${logoCss} height: auto; }
/* F4's key drops from under the lead: a fixed mask whose top edge sits between the lead (ink to 474) and the key (540) */
.mask4 { left: 0; top: 490px; width: 1080px; height: 560px; overflow: hidden; }
.mask4 .k200 { top: ${ROW.k200 - 490}px; }
${css.join('\n')}
</style></head><body>

<!-- the door: the week's drawing (door.mjs) with a Baghdadi shanasheel-barred head; closed to 8.65 s, swinging
     8.65–9.10 s (the light reveals the figure), open to the end; the figure's arms rise 9.15–9.50 s -->
<svg id="door" class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"></svg>

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

<!-- F6: a doctor explains it (one speech balloon on the same row, its tail toward the house) -->
<svg class="abs talk" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <rect x="672" y="1196" width="212" height="104" rx="52" fill="#FFFEFF"/>
  <path d="M712 1286 L670 1340 L756 1296 Z" fill="#FFFEFF" stroke="#FFFEFF" stroke-width="4" stroke-linejoin="round"/>
  <g fill="#181943"><circle cx="736" cy="1248" r="12"/><circle cx="778" cy="1248" r="12"/><circle cx="820" cy="1248" r="12"/></g>
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
// The door, drawn per frame: closed (door.mjs + the barred head), the swing (8.65–9.10 s), open (door.mjs + head),
// and the figure, whose arms rise 9.15–9.50 s. door.mjs's own output is embedded as built; only the swing and the
// figure are drawn here, from the same construction constants.
const DG = ${JSON.stringify(DG)}, FIG = ${JSON.stringify(FIG)}, SWING = ${JSON.stringify(BEAT.swing)}, ARMS = ${JSON.stringify(BEAT.arms)};
const CLOSED = ${JSON.stringify(CLOSED)}, OPEN = ${JSON.stringify(OPEN)}, HEAD = ${JSON.stringify(HEAD)};
${swingSVG.toString()}
${figureSVG.toString()}
// Sine ease-in-out on the leaf's projected width (the light opens from the first frames, speeds up, then settles);
// ease-out on the arms (they lift quickly, then settle into the raised pose).
const ease = (u) => (1 - Math.cos(Math.PI * u)) / 2;
const easeOut = (u) => 1 - Math.pow(1 - u, 3);
const clamp = (u) => Math.max(0, Math.min(1, u));
const door = document.getElementById('door');
window.__seek = (ms) => {
  const t = ms / 1000, u = (t - SWING[0]) / (SWING[1] - SWING[0]), a = easeOut(clamp((t - ARMS[0]) / (ARMS[1] - ARMS[0])));
  if (u <= 0) door.innerHTML = CLOSED;
  else if (u < 1) door.innerHTML = swingSVG(ease(u), DG, figureSVG(0, FIG)) + HEAD;
  else door.innerHTML = OPEN + figureSVG(a, FIG);
};
window.__seek(0);
</script>
</body></html>
`;
writeFileSync(path.join(here, 'video.html'), html);
console.log('wrote video.html');

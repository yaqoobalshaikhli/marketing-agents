// Builds the HTML sources for 2026-W42-01 (Instagram carousel, 7 slides, 1080×1350) from one template,
// so the grid, the route band and the type sizes cannot drift between slides.
//   node build.mjs            → slide-01.html … slide-07.html
// Render each with design-studio/scripts/render.mjs (still, --w 1080 --h 1350).
//
// Round 2 (Design Critic r1: REVISE 7.25). What changed:
//  1. The door is the week's one drawing (door.mjs = piece 02's round-2 door as a function of size): closed = a leaf
//     line and a knob; on slide 5 it OPENS (leaf swung inward on its left hinge, the blue is the light in the opening).
//     No numeral is set inside the door, or inside any station. Each lit station now shows what its step means:
//     your bubble (navy dots: your message) · the disc (navy tick: confirmed) · the door (open) · our bubble (handset: we call).
//     "Lit" means only "this step": a station goes back to rest once passed; the solid line is the road travelled.
//     The dotted callouts are gone, so dots mean one thing only: road.
//  2. Hierarchy by weight, not colour alone: white setup words in Cairo Medium (500), only the pink group in Bold (800).
//     Slide 7: CTA 96 Bold over the question at 60 Medium (1.6:1); the CTA is the largest line on the slide.
//  3. Step labels (١ ٢ ٣ ٤, the copy's `label:` keys) sit in a blue disc in the header row, top right, where the cover's
//     series pill sits, right above their own words. Slide 7 follows the copy's order (licence, question, CTA, sign-off).
//     The official on-navy logo replaces the slot on slides 1 and 7, ink snapped to the column grid.
//
// Round 3 (Design Critic r2: REVISE 7.75). What changed:
//  1. The lit station grows about its ground point, so every step slide has one size event and the arrival is the
//     biggest object in the piece: lit bubbles and the lit disc at 1.15× (bubbles keep their outer edge on the 72 px
//     margin; 1.15 keeps 43 px between slide 6's call bubble and the door), and the open door on slide 5 at 1.4×
//     about its own ground point (x 295–531, apex 795; was 329–497, apex 888).
//     Station x positions, the dot phase and the ground line y 1120 do not move. The door's keep-out now follows its
//     threshold, so no road dot sits 9 px from the threshold's end (the dot at x 548 is gone on every slide).
//  2. Slide 7 (CSS): licence line 48 → 42, sign-off 48 → 42, so the slide runs three sizes, 42 / 60 / 96; the stack
//     starts 24 px lower (clear space under the wordmark: ink gap 31 → 52), paid for by the question's leading
//     (1.4 → 1.3), the smaller licence box and 4 px off the licence→question gap, so the CTA stays where it was.
//  3. Cover (CSS): hook 120 → 136, sub-line 52 → 48 (2.83:1); the sub-line moves down 40 (680 → 720) with the hook.
//  Also: slide 2's queue now starts and ends inside the 72 px margins; step numerals 56 → 64.
// Copy notes: the cover hook has no " / " in the copy; it breaks after «شنو يصير» (open with the Copywriter since r1).
// Slide 2's third line breaks before «شگد تطول.» (r1 fix 3a; pending Copywriter confirmation; fallback in checks/).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { doorSVG } from './door.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const S2_BREAK = process.env.S2_BREAK !== '0';   // S2_BREAK=0 builds the no-break fallback (copy's own break, inner slides at 80 px)

const BLUE = '#1B9CCE', NAVY = '#181943';
const SW = 12;            // stroke weight of every line in the band (the week's line language)
const G = 1120;           // ground line (the route), y
const DOT_R = 8, DOT_GAP = 36;

// ---- band components ---------------------------------------------------------------------------
// Round 3: the lit station grows about its ground point. Lit bubbles and the lit disc at LIT; the open door (the arrival)
// at DOOR_OPEN, so it is the biggest object in the piece. Resting stations stay at 1×.
const LIT = 1.15, DOOR_OPEN = 1.4;
const fx = (n) => +n.toFixed(2);

// Bubble: rounded body 176×128 (× s), tail drops to touch the ground line. side 'r' = tail at bottom-right
// (your message, start of the route), 'l' = tail at bottom-left (our call back, end of the route).
// `edge` is the bubble's outer side on the column grid (x 1008 for 'r', 72 for 'l'); it grows from that edge and the ground.
function bubble(edge, side, state, s = 1) {
  const w = 176 * s, h = 128 * s, r = 36 * s, y0 = G - 176 * s, y1 = y0 + h;
  const x0 = side === 'r' ? edge - w : edge, x1 = x0 + w, cx = (x0 + x1) / 2, cy = y0 + h / 2;
  const tipY = G - SW / 2 - 4;
  const [tA, tB, tipX] = side === 'r' ? [x1 - 44 * s, x1 - 92 * s, x1 - 28 * s] : [x0 + 92 * s, x0 + 44 * s, x0 + 28 * s];
  const d = `M${fx(x0 + r)} ${fx(y0)} H${fx(x1 - r)} A${fx(r)} ${fx(r)} 0 0 1 ${fx(x1)} ${fx(y0 + r)} V${fx(y1 - r)} A${fx(r)} ${fx(r)} 0 0 1 ${fx(x1 - r)} ${fx(y1)}` +
    ` H${fx(tA)} L${fx(tipX)} ${tipY} L${fx(tB)} ${fx(y1)} H${fx(x0 + r)} A${fx(r)} ${fx(r)} 0 0 1 ${fx(x0)} ${fx(y1 - r)} V${fx(y0 + r)} A${fx(r)} ${fx(r)} 0 0 1 ${fx(x0 + r)} ${fx(y0)} Z`;
  // state: 'idle' (outline, three blue dots: a message) · 'lit' (filled, navy dots) · 'call' (filled, navy handset)
  const on = state !== 'idle';
  const dots3 = (c) => [-36, 0, 36].map((dx) => `<circle cx="${fx(cx + dx * s)}" cy="${fx(cy)}" r="${fx(DOT_R * s)}" fill="${c}"/>`).join('');
  const inner = state === 'call' ? handset(cx, cy, s) : dots3(on ? NAVY : BLUE);
  return `<path d="${d}" fill="${on ? BLUE : NAVY}" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>${inner}`;
}
// Classic receiver, navy on blue (5.3:1), about 72×87 px at 1× (90×109 lit), drawn here (not a stock icon).
function handset(cx, cy, s = 1) {
  return `<path transform="translate(${fx(cx)} ${fx(cy)}) scale(${fx(1.5 * s)}) translate(2 -1) translate(4 -6)" fill="${NAVY}" ` +
    `d="M-30 -14 Q-30 -22 -22 -22 L-12 -22 Q-6 -22 -6 -16 L-6 -6 Q-6 -2 -10 -2 L-14 -2 Q-14 10 -6 18 Q-2 14 2 14 L12 14 Q18 14 18 20 L18 28 Q18 36 10 36 L4 36 Q-30 30 -30 -14 Z"/>`;
}
// The disc: at rest a small ring on the road; lit, a large disc with a navy tick ("confirmed"), r 62 × LIT.
const DISC_LIT_R = 62 * LIT;
function disc(cx, lit) {
  const k = LIT;
  return lit
    ? `<circle cx="${cx}" cy="${G}" r="${fx(DISC_LIT_R)}" fill="${BLUE}"/>` +
      `<path d="M${fx(cx - 26 * k)} ${fx(G + 2 * k)} L${fx(cx - 8 * k)} ${fx(G + 20 * k)} L${fx(cx + 28 * k)} ${fx(G - 18 * k)}" fill="none" stroke="${NAVY}" stroke-width="${fx(16 * k)}" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${cx}" cy="${G}" r="22" fill="${NAVY}" stroke="${BLUE}" stroke-width="${SW}"/>`;
}

// Station anchors (x) on the ground line, right to left: your bubble, confirm, door, our bubble.
// Bubbles are placed by their outer edge on the margin (centres 920 and 160 at 1×).
const X = { b1: 920, d2: 667, door: 413, b4: 160 }, EDGE_R = 1008, EDGE_L = 72;
// The road runs from your bubble's tail (right) to our bubble's tail (left). Its dot phase is fixed on every slide.
const RIGHT = X.b1 + 88 - 28, LEFT = X.b4 - 88 + 28;
// The door: 168 wide, 232 tall at rest; scaled about its ground point (x 413, y 1120) when open.
const doorGeom = (k) => { const R = Math.round(84 * k); return { xl: X.door - R, xr: X.door + R, apex: Math.round(G - 232 * k), R }; };

// active: 0 = none (map), 1..4 = that step; 'start' = the CTA slide (your bubble lit, nothing travelled)
function band(active) {
  const lit1 = active === 1 || active === 'start', lit4 = active === 4, open = active === 3;
  const tipR = EDGE_R - 28 * (lit1 ? LIT : 1), tipL = EDGE_L + 28 * (lit4 ? LIT : 1);   // where each bubble's tail meets the road
  const anchor = { 1: RIGHT, 2: X.d2, 3: X.door, 4: tipL }[active] ?? RIGHT;
  const travelledTo = typeof active === 'number' && active > 0 ? anchor : RIGHT;
  const door = doorGeom(open ? DOOR_OPEN : 1);
  // keep-outs on the ground line where a component sits (dot centres); the door's follows its threshold (R + 28 + cap 6)
  const doorKeep = door.R + 28 + SW / 2 + DOT_R + 16;
  const discKeep = active === 2 ? DISC_LIT_R + DOT_R + 16 : 70;
  const keep = [[X.d2 - discKeep, X.d2 + discKeep], [X.door - doorKeep, X.door + doorKeep], [RIGHT - 20, RIGHT + 20], [LEFT - 20, LEFT + 20]];
  let dots = '';
  for (let x = RIGHT; x >= LEFT; x -= DOT_GAP) {
    if (x >= travelledTo && travelledTo < RIGHT) continue;  // already travelled: drawn as a solid line
    if (keep.some(([a, b]) => x > a && x < b)) continue;
    dots += `<circle cx="${x}" cy="${G}" r="${DOT_R}" fill="${BLUE}"/>`;
  }
  const solid = travelledTo < RIGHT
    ? `<line x1="${RIGHT}" y1="${G}" x2="${fx(travelledTo)}" y2="${G}" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round"/>` : '';
  return `<svg class="abs band" width="1080" height="1350" viewBox="0 0 1080 1350" aria-hidden="true">
  ${dots}
  ${solid}
  ${disc(X.d2, active === 2)}
  ${doorSVG({ xl: door.xl, xr: door.xr, apex: door.apex, ground: G, sw: SW, state: open ? 'open' : 'closed' })}
  ${bubble(EDGE_R, 'r', lit1 ? 'lit' : 'idle', lit1 ? LIT : 1)}
  ${bubble(EDGE_L, 'l', lit4 ? 'call' : 'idle', lit4 ? LIT : 1)}
</svg>`;
}

// Slide 2: the same dots as a serpentine queue that never reaches a door. Round 3: it starts at the right margin and
// ends at the left margin on the ground line (dot ink inside x 72–1008). Five rows, 56 px apart, top row at y 896.
function queue() {
  const step = 56, rows = [0, 1, 2, 3, 4].map((i) => G - (4 - i) * step), rad = step / 2;
  const xl = 72 + DOT_R + rad, xr = 1008 - DOT_R - rad, xStart = 1008 - DOT_R, xEnd = 72 + DOT_R;
  const segs = [];
  segs.push({ type: 'line', x0: xStart, x1: xl, y: rows[0] });
  for (let i = 0; i < rows.length - 1; i++) {
    const leftTurn = i % 2 === 0;
    segs.push({ type: 'arc', cx: leftTurn ? xl : xr, cy: (rows[i] + rows[i + 1]) / 2, left: leftTurn });
    if (i + 1 < rows.length - 1) segs.push({ type: 'line', x0: leftTurn ? xl : xr, x1: leftTurn ? xr : xl, y: rows[i + 1] });
  }
  segs.push({ type: 'line', x0: xr, x1: xEnd, y: rows[rows.length - 1] });
  // walk the path at equal spacing
  const pts = [];
  let carry = 0;
  for (const s of segs) {
    if (s.type === 'line') {
      const len = Math.abs(s.x1 - s.x0), dir = Math.sign(s.x1 - s.x0);
      for (let d = carry; d <= len; d += DOT_GAP) pts.push([s.x0 + dir * d, s.y]);
      carry = DOT_GAP - ((len - carry) % DOT_GAP); if (carry === DOT_GAP) carry = 0;
    } else {
      const len = Math.PI * rad;
      for (let d = carry; d <= len; d += DOT_GAP) {
        const t = d / rad; // 0..π
        const a = s.left ? -Math.PI / 2 - t : -Math.PI / 2 + t; // from top of the turn to its bottom
        pts.push([s.cx + rad * Math.cos(a), s.cy + rad * Math.sin(a)]);
      }
      carry = DOT_GAP - ((len - carry) % DOT_GAP); if (carry === DOT_GAP) carry = 0;
    }
  }
  const dots = pts.filter(([x]) => x >= xEnd - 0.5 && x <= xStart + 0.5)
    .map(([x, y]) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${DOT_R}" fill="${BLUE}"/>`).join('');
  return `<svg class="abs band" width="1080" height="1350" viewBox="0 0 1080 1350" aria-hidden="true">${dots}</svg>`;
}

// Official logo, unaltered: the white-wordmark file for navy (decision #66). Ink snapped to columns 1–3 (x 72–288).
const logo = `<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX">`;
// Step label (the copy's `label:` key): navy numeral in a blue disc, top right, where the cover's series pill sits.
const step = (n) => `<div class="abs step"><span>${n}</span></div>`;
const A = (s) => `<span class="accent">${s}</span>`;

// Words exactly as in pieces/01-ig-carousel-message-to-door.md (## Copy). " / " = <br>, *stars* = .accent
const slides = {
  '01': `
<div class="abs series"><span>شوف بعينك</span></div>
${logo}
<h1 class="abs hook">شنو يصير<br>من تدزلنا ${A('رسالة؟')}</h1>
<p class="abs sub">زيارة لبيتك ببغداد، خطوة بخطوة.</p>
${band(0)}`,
  '02': `
<h2 class="abs hero">كلنا مرّينا بيها:<br>طريق، وسرة طويلة،<br>ونطرة ما تعرف${S2_BREAK ? '<br>' : ' '}${A('شگد تطول.')}</h2>
${queue()}`,
  '03': `
${step('١')}
<h2 class="abs hero">أول شي،<br>تدزلنا ${A('رسالة واتساب.')}</h2>
${band(1)}`,
  '04': `
${step('٢')}
<h2 class="abs hero">تگولنا شنو تحتاج،<br>ونثبّتلك ${A('الموعد.')}</h2>
${band(2)}`,
  '05': `
${step('٣')}
<div class="abs hero">
  <h2>ونجيك ${A('للبيت:')}</h2>
  <p class="list">دكتور، ممرض أو ممرضة،<br>تحليل، أشعة، سونار،<br>تخطيط قلب، وعلاج طبيعي.</p>
  <p class="punch">بلا سرة ولا طريق.</p>
</div>
${band(3)}`,
  '06': `
${step('٤')}
<h2 class="abs hero">وبعد الزيارة،<br>نتصل بيك خلال ${A('٢٤ ساعة')}<br>نتطمن عليك.</h2>
${band(4)}`,
  '07': `
${logo}
<div class="abs close-stack">
  <p class="proof"><bdi>TabeebX</bdi> · مرخّصين من وزارة الصحة العراقية</p>
  <p class="question">تحتاج زيارة لبيتك،<br>أو لبيت أهلك؟</p>
  <p class="cta">${A('رابط الواتساب بالبايو.')}</p>
</div>
${band('start')}
<p class="abs closing">لا تصدگنا. شوف بعينك.</p>`,
};

const page = (id, body) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-01 slide ${id}</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<link rel="stylesheet" href="carousel.css">
</head><body class="s${id}${S2_BREAK ? '' : ' nobreak'}">
${body.trim()}
</body></html>
`;

// S2_BREAK=0 writes slide-0N-nobreak.html beside the real sources (house size 80 px on slides 2–6), for the fallback check only.
const suffix = S2_BREAK ? '' : '-nobreak';
for (const [id, body] of Object.entries(slides)) writeFileSync(path.join(here, `slide-${id}${suffix}.html`), page(id, body));
console.log(`built slide-01${suffix} … slide-07${suffix}`);

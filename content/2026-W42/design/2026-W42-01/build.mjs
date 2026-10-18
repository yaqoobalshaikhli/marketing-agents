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
// Bubble: rounded body 176×128, tail drops to touch the ground line. side 'r' = tail at bottom-right
// (your message, start of the route), 'l' = tail at bottom-left (our call back, end of the route).
function bubble(cx, side, state) {
  const w = 176, h = 128, r = 36, y0 = G - 176, y1 = y0 + h, x0 = cx - w / 2, x1 = cx + w / 2, cy = y0 + h / 2;
  const tipY = G - SW / 2 - 4;
  const [tA, tB, tipX] = side === 'r' ? [x1 - 44, x1 - 92, x1 - 28] : [x0 + 92, x0 + 44, x0 + 28];
  const d = `M${x0 + r} ${y0} H${x1 - r} A${r} ${r} 0 0 1 ${x1} ${y0 + r} V${y1 - r} A${r} ${r} 0 0 1 ${x1 - r} ${y1}` +
    ` H${tA} L${tipX} ${tipY} L${tB} ${y1} H${x0 + r} A${r} ${r} 0 0 1 ${x0} ${y1 - r} V${y0 + r} A${r} ${r} 0 0 1 ${x0 + r} ${y0} Z`;
  // state: 'idle' (outline, three blue dots: a message) · 'lit' (filled, navy dots) · 'call' (filled, navy handset)
  const on = state !== 'idle';
  const dots3 = (c) => [-36, 0, 36].map((dx) => `<circle cx="${cx + dx}" cy="${cy}" r="${DOT_R}" fill="${c}"/>`).join('');
  const inner = state === 'call' ? handset(cx, cy) : dots3(on ? NAVY : BLUE);
  return `<path d="${d}" fill="${on ? BLUE : NAVY}" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>${inner}`;
}
// Classic receiver, navy on blue (5.3:1), about 72×87 px, drawn here (not a stock icon).
function handset(cx, cy) {
  return `<path transform="translate(${cx} ${cy}) scale(1.5) translate(2 -1) translate(4 -6)" fill="${NAVY}" ` +
    `d="M-30 -14 Q-30 -22 -22 -22 L-12 -22 Q-6 -22 -6 -16 L-6 -6 Q-6 -2 -10 -2 L-14 -2 Q-14 10 -6 18 Q-2 14 2 14 L12 14 Q18 14 18 20 L18 28 Q18 36 10 36 L4 36 Q-30 30 -30 -14 Z"/>`;
}
// The disc: at rest a small ring on the road; lit, a large disc with a navy tick ("confirmed").
function disc(cx, lit) {
  return lit
    ? `<circle cx="${cx}" cy="${G}" r="62" fill="${BLUE}"/>` +
      `<path d="M${cx - 26} ${G + 2} L${cx - 8} ${G + 20} L${cx + 28} ${G - 18}" fill="none" stroke="${NAVY}" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<circle cx="${cx}" cy="${G}" r="22" fill="${NAVY}" stroke="${BLUE}" stroke-width="${SW}"/>`;
}

// Station anchors (x) on the ground line, right to left: your bubble, confirm, door, our bubble.
const X = { b1: 920, d2: 667, door: 413, b4: 160 };
// The route runs from your bubble's tail (right) to our bubble's tail (left).
const RIGHT = X.b1 + 88 - 28, LEFT = X.b4 - 88 + 28;

// active: 0 = none (map), 1..4 = that step; 'start' = the CTA slide (your bubble lit, nothing travelled)
function band(active) {
  const anchor = { 1: RIGHT, 2: X.d2, 3: X.door, 4: LEFT }[active] ?? RIGHT;
  const travelledTo = typeof active === 'number' && active > 0 ? anchor : RIGHT;
  // keep-outs on the ground line where a component sits
  const keep = [[X.d2 - 70, X.d2 + 70], [X.door - 120, X.door + 120], [RIGHT - 20, RIGHT + 20], [LEFT - 20, LEFT + 20]];
  let dots = '';
  for (let x = RIGHT; x >= LEFT; x -= DOT_GAP) {
    if (x >= travelledTo && travelledTo < RIGHT) continue;  // already travelled: drawn as a solid line
    if (keep.some(([a, b]) => x > a && x < b)) continue;
    dots += `<circle cx="${x}" cy="${G}" r="${DOT_R}" fill="${BLUE}"/>`;
  }
  const solid = travelledTo < RIGHT
    ? `<line x1="${RIGHT}" y1="${G}" x2="${travelledTo}" y2="${G}" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round"/>` : '';
  return `<svg class="abs band" width="1080" height="1350" viewBox="0 0 1080 1350" aria-hidden="true">
  ${dots}
  ${solid}
  ${disc(X.d2, active === 2)}
  ${doorSVG({ xl: X.door - 84, xr: X.door + 84, apex: G - 232, ground: G, sw: SW, state: active === 3 ? 'open' : 'closed' })}
  ${bubble(X.b1, 'r', active === 1 || active === 'start' ? 'lit' : 'idle')}
  ${bubble(X.b4, 'l', active === 4 ? 'call' : 'idle')}
</svg>`;
}

// Slide 2: the same dots as an endless serpentine queue: enters from off-canvas right, never reaches a door,
// and leaves off-canvas left on the ground line. Five rows, 56 px apart, top row at y 896 (≥ 76 px clear of the pink line).
function queue() {
  const step = 56, rows = [0, 1, 2, 3, 4].map((i) => G - (4 - i) * step), rad = step / 2, xl = 72 + rad, xr = 1008 - rad;
  const segs = [];
  segs.push({ type: 'line', x0: 1140, x1: xl, y: rows[0] });
  for (let i = 0; i < rows.length - 1; i++) {
    const leftTurn = i % 2 === 0;
    segs.push({ type: 'arc', cx: leftTurn ? xl : xr, cy: (rows[i] + rows[i + 1]) / 2, left: leftTurn });
    if (i + 1 < rows.length - 1) segs.push({ type: 'line', x0: leftTurn ? xl : xr, x1: leftTurn ? xr : xl, y: rows[i + 1] });
  }
  segs.push({ type: 'line', x0: xr, x1: -60, y: rows[rows.length - 1] });
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
  const dots = pts.filter(([x]) => x > -20 && x < 1100)
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

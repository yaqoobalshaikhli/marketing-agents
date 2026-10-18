// Builds the HTML sources for 2026-W42-01 (Instagram carousel, 7 slides, 1080×1350) from one template,
// so the grid, the route band and the type sizes cannot drift between slides.
//   node build.mjs            → slide-01.html … slide-07.html
// Render each with design-studio/scripts/render.mjs (still, --w 1080 --h 1350).
//
// The device: one street line ("the route") at the foot of every slide, drawn in the same blue line
// language as piece 02's doorway. Right to left: your message (bubble) → we confirm (disc) →
// the door (round-headed arch, as in 02) → our call back (bubble). Dots are the road still to travel;
// a solid line is the road already travelled; the lit station carries the slide's step numeral, and a dotted
// callout rises from it to the slide's words. Slide 2 is the same dots as an endless queue.
// Copy note: the cover hook has no " / " in the copy; it breaks after «شنو يصير» (flagged to the Copywriter).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';

const BLUE = '#1B9CCE', NAVY = '#181943';
const SW = 12;            // stroke weight of every line in the band (same as piece 02's doorway)
const G = 1120;           // ground line (the route), y
const DOT_R = 8, DOT_GAP = 36;

// ---- band components ---------------------------------------------------------------------------
// Bubble: rounded body 176×128, tail drops to touch the ground line. side 'r' = tail at bottom-right
// (your message, start of the route), 'l' = tail at bottom-left (our call back, end of the route).
function bubble(cx, side, state) {
  const w = 176, h = 128, r = 36, y0 = G - 176, y1 = y0 + h, x0 = cx - w / 2, x1 = cx + w / 2;
  const tipY = G - SW / 2 - 4;
  let d;
  if (side === 'r') {
    const tL = x1 - 92, tR = x1 - 44, tipX = x1 - 28;
    d = `M${x0 + r} ${y0} H${x1 - r} A${r} ${r} 0 0 1 ${x1} ${y0 + r} V${y1 - r} A${r} ${r} 0 0 1 ${x1 - r} ${y1}` +
        ` H${tR} L${tipX} ${tipY} L${tL} ${y1} H${x0 + r} A${r} ${r} 0 0 1 ${x0} ${y1 - r} V${y0 + r} A${r} ${r} 0 0 1 ${x0 + r} ${y0} Z`;
  } else {
    const tR = x0 + 92, tL = x0 + 44, tipX = x0 + 28;
    d = `M${x0 + r} ${y0} H${x1 - r} A${r} ${r} 0 0 1 ${x1} ${y0 + r} V${y1 - r} A${r} ${r} 0 0 1 ${x1 - r} ${y1}` +
        ` H${tR} L${tipX} ${tipY} L${tL} ${y1} H${x0 + r} A${r} ${r} 0 0 1 ${x0} ${y1 - r} V${y0 + r} A${r} ${r} 0 0 1 ${x0 + r} ${y0} Z`;
  }
  // state: 'idle' (outline, three blue dots: a message), 'start' (lit, navy dots: "start here"), {n} (lit, step numeral)
  const on = state === 'start' || typeof state === 'object';
  const dots3 = (c) => [-36, 0, 36].map((dx) => `<circle cx="${cx + dx}" cy="${y0 + h / 2}" r="${DOT_R}" fill="${c}"/>`).join('');
  const inner = typeof state === 'object' ? num(cx, y0 + h / 2, state.n) : dots3(on ? NAVY : BLUE);
  return `<path d="${d}" fill="${on ? BLUE : NAVY}" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>${inner}`;
}
// Door: round-headed arch 168 wide, 232 tall, standing on the ground line (same form as piece 02's doorway).
function door(cx, lit, n) {
  const w = 168, R = w / 2, top = G - 232, spring = top + R, x0 = cx - R, x1 = cx + R;
  const arch = `M${x1} ${G} L${x1} ${spring} A${R} ${R} 0 0 0 ${x0} ${spring} L${x0} ${G}`;
  const ins = 22, Ri = R - ins;
  const litPath = `M${x1 - ins} ${G} L${x1 - ins} ${spring} A${Ri} ${Ri} 0 0 0 ${x0 + ins} ${spring} L${x0 + ins} ${G} Z`;
  return `${lit ? `<path d="${litPath}" fill="${BLUE}"/>` : ''}` +
    `<path d="${arch}" fill="none" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>` +
    `<line x1="${x0 - 28}" y1="${G}" x2="${x1 + 28}" y2="${G}" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round"/>` +
    (n ? num(cx, (spring + G) / 2 + 4, n) : '');
}
function disc(cx, n) {
  return n
    ? `<circle cx="${cx}" cy="${G}" r="62" fill="${BLUE}"/>${num(cx, G, n)}`
    : `<circle cx="${cx}" cy="${G}" r="22" fill="${NAVY}" stroke="${BLUE}" stroke-width="${SW}"/>`;
}
// Step numeral: navy on blue (5.3:1), Cairo Bold 72 px. Eastern Arabic digits, as in the copy's labels.
function num(cx, cy, n) {
  return `<text x="${cx}" y="${cy}" dy="0.02em" text-anchor="middle" dominant-baseline="central" ` +
    `font-family="Cairo" font-weight="800" font-size="72" fill="${NAVY}">${n}</text>`;
}

// Station anchors (x) on the ground line, right to left: your bubble, confirm, door, our bubble.
const X = { b1: 920, d2: 667, door: 413, b4: 160 };
// The route runs from your bubble's tail (right) to our bubble's tail (left).
const RIGHT = X.b1 + 88 - 28, LEFT = X.b4 - 88 + 28;

// active: 0 = none (map), 1..4 = that step; 'start' = the CTA slide (your bubble lit, nothing travelled)
// leaderTop: optional y where a dotted callout, rising from the lit station, stops under the slide's words.
function band(active, leaderTop) {
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
  let leader = '';
  if (leaderTop) {
    const lx = { 1: X.b1, 2: X.d2, 3: X.door, 4: X.b4 }[active];
    const top = { 1: G - 176, 2: G - 62, 3: G - 232, 4: G - 176 }[active];   // top edge of the lit station
    for (let y = top - 32; y >= leaderTop; y -= 28) leader += `<circle cx="${lx}" cy="${y}" r="6" fill="${BLUE}"/>`;
  }
  return `<svg class="abs band" width="1080" height="1350" viewBox="0 0 1080 1350" aria-hidden="true">
  ${leader}
  ${dots}
  ${solid}
  ${disc(X.d2, active === 2 ? '٢' : null)}
  ${door(X.door, active === 3 || active === 4, active === 3 ? '٣' : null)}
  ${bubble(X.b1, 'r', active === 1 ? { n: '١' } : active === 'start' ? 'start' : 'idle')}
  ${bubble(X.b4, 'l', active === 4 ? { n: '٤' } : 'idle')}
</svg>`;
}

// Slide 2: the same dots as an endless serpentine queue: enters from off-canvas right, never reaches a door,
// and leaves off-canvas left on the ground line.
function queue() {
  const rows = [G - 352, G - 264, G - 176, G - 88, G], rad = 44, xl = 72 + rad, xr = 1008 - rad;
  const segs = [];
  segs.push({ type: 'line', x0: 1140, x1: xl, y: rows[0] });
  for (let i = 0; i < rows.length - 1; i++) {
    const leftTurn = i % 2 === 0;
    segs.push({ type: 'arc', cx: leftTurn ? xl : xr, cy: (rows[i] + rows[i + 1]) / 2, left: leftTurn });
    if (i + 1 < rows.length - 1) segs.push({ type: 'line', x0: leftTurn ? xl : xr, x1: leftTurn ? xr : xl, y: rows[i + 1] });
  }
  segs.push({ type: 'line', x0: rows.length % 2 === 0 ? xl : xr, x1: -60, y: rows[rows.length - 1] });
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

const logoSlot = `<div class="abs logo-slot">[LOGO: official file needed]</div>`;
const A = (s) => `<span class="accent">${s}</span>`;

// Words exactly as in pieces/01-ig-carousel-message-to-door.md (## Copy). " / " = <br>, *stars* = .accent
const slides = {
  '01': `
<div class="abs series"><span>شوف بعينك</span></div>
${logoSlot}
<h1 class="abs hook">شنو يصير<br>من تدزلنا ${A('رسالة؟')}</h1>
<p class="abs sub">زيارة لبيتك ببغداد، خطوة بخطوة.</p>
${band(0)}`,
  '02': `
<h2 class="abs hero">كلنا مرّينا بيها:<br>طريق، وسرة طويلة،<br>ونطرة ما تعرف ${A('شگد تطول.')}</h2>
${queue()}`,
  '03': `
<h2 class="abs hero">أول شي،<br>تدزلنا ${A('رسالة واتساب.')}</h2>
${band(1, 640)}`,
  '04': `
<h2 class="abs hero">تگولنا شنو تحتاج،<br>ونثبّتلك ${A('الموعد.')}</h2>
${band(2, 640)}`,
  '05': `
<div class="abs hero">
  <h2>ونجيك ${A('للبيت:')}</h2>
  <p class="list">دكتور، ممرض أو ممرضة،<br>تحليل، أشعة، سونار،<br>تخطيط قلب، وعلاج طبيعي.</p>
  <p class="punch">بلا سرة ولا طريق.</p>
</div>
${band(3)}`,
  '06': `
<h2 class="abs hero">وبعد الزيارة،<br>نتصل بيك خلال ${A('٢٤ ساعة')}<br>نتطمن عليك.</h2>
${band(4, 760)}`,
  '07': `
${logoSlot}
<div class="abs hero">
  <h2>تحتاج زيارة لبيتك،<br>أو لبيت أهلك؟</h2>
  <p class="cta">${A('رابط الواتساب بالبايو.')}</p>
  <p class="proof"><bdi>TabeebX</bdi> · مرخّصين من وزارة الصحة العراقية</p>
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
</head><body class="s${id}">
${body.trim()}
</body></html>
`;

for (const [id, body] of Object.entries(slides)) writeFileSync(path.join(here, `slide-${id}.html`), page(id, body));
console.log('built slide-01 … slide-07');

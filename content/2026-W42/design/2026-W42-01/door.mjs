// The W42 front door: one drawing for the week, so the doorway stays one symbol across pieces 01, 02 and 03.
// This is piece 02's round-2 door (design/2026-W42-02/build.mjs, frames 1 and 2), turned into a function of the
// door's own geometry so it can be drawn at any size. At 02's numbers (xl 426, xr 974, apex 782, ground 1548)
// it returns 02's paths exactly; smaller doors keep the same construction, with floors on the details that would
// otherwise vanish on a phone (leaf line, knob, the light's navy margin).
//   import { doorSVG } from '../2026-W42-01/door.mjs';
//   doorSVG({ xl: 329, xr: 497, apex: 888, ground: 1120, state: 'open' })
//
// Construction (12 px blue stroke, round joins and caps, palette only; no number or text ever inside the door):
//   frame      round-headed arch on the jamb centrelines xl–xr, apex to ground (piece 01's proportions, ~1 : 1.4)
//   threshold  the ground line, 28 px past each jamb
//   closed     a thin leaf line inset inside the frame, and a knob on the free (right) edge:
//              the hinge is on the left, so the door opens right to left, in reading direction
//   open       the light (blue) fills the doorway, inset so a navy margin keeps the frame reading as a frame;
//              the leaf has swung inward on its left hinge and is seen as a narrow navy panel whose free edge is
//              shorter (further away) and whose foot rises off the floor line, with the knob on it.
//              The leaf's head rises behind the wall; it is navy, so it shows only through the opening.
const BLUE = '#1B9CCE', NAVY = '#181943';

export function doorSVG({ xl, xr, apex, ground: G, sw = 12, state = 'closed' }) {
  const s = (xr - xl) / 548;                       // 1 at piece 02's size
  const R = (xr - xl) / 2, YS = apex + R, H = G - YS;
  const f = (n) => +n.toFixed(2);
  const frame = `<path d="M${xr} ${G} L${xr} ${YS} A${R} ${R} 0 0 0 ${xl} ${YS} L${xl} ${G}" fill="none" stroke="${BLUE}" stroke-width="${sw}" stroke-linejoin="round"/>`;
  const threshold = `<line x1="${xl - 34 + sw / 2}" y1="${G}" x2="${xr + 34 - sw / 2}" y2="${G}" stroke="${BLUE}" stroke-width="${sw}" stroke-linecap="round"/>`;

  if (state !== 'open') {
    const LI = Math.max(30 * s, sw / 2 + 10), lw = Math.max(6 * s, 4);
    const leaf = `M${f(xr - LI)} ${G - sw / 2} L${f(xr - LI)} ${f(YS)} A${f(R - LI)} ${f(R - LI)} 0 0 0 ${f(xl + LI)} ${f(YS)} L${f(xl + LI)} ${G - sw / 2}`;
    const knob = { x: xr - LI - Math.max(46 * s, 18), y: YS + (196 / 492) * H, r: Math.max(16 * s, 9) };
    return `<path d="${leaf}" fill="none" stroke="${BLUE}" stroke-width="${f(lw)}" stroke-linejoin="round"/>` +
      `<circle cx="${f(knob.x)}" cy="${f(knob.y)}" r="${f(knob.r)}" fill="${BLUE}"/>${frame}${threshold}`;
  }
  const LT = Math.max(24 * s, sw / 2 + 6);         // light inset: at least a 6 px navy margin inside the stroke
  const light = `M${f(xr - LT)} ${G - sw / 2} L${f(xr - LT)} ${f(YS)} A${f(R - LT)} ${f(R - LT)} 0 0 0 ${f(xl + LT)} ${f(YS)} L${f(xl + LT)} ${G - sw / 2} Z`;
  const HX = xl + LT, FX = HX + 128 * s;
  const leaf = `M${f(HX - 40 * s)} ${G - sw / 2} L${f(HX - 40 * s)} ${f(YS - 300 * s)} L${f(FX - 40 * s)} ${f(YS - 300 * s)} ` +
    `C${f(FX - 6 * s)} ${f(YS - 220 * s)} ${f(FX)} ${f(YS - 100 * s)} ${f(FX)} ${f(YS + 34 * s)} L${f(FX)} ${f(G - 30 * s)} Z`;
  const knob = { x: FX - Math.max(30 * s, 12), y: YS + (180 / 492) * H, r: Math.max(13 * s, 7) };
  return `<path d="${light}" fill="${BLUE}"/><path d="${leaf}" fill="${NAVY}"/>` +
    `<circle cx="${f(knob.x)}" cy="${f(knob.y)}" r="${f(knob.r)}" fill="${BLUE}"/>${frame}${threshold}`;
}

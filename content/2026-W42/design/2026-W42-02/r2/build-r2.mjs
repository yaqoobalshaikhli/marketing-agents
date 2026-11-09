// Builds the HTML sources for 2026-W42-02 (two story frames + placement guides) from one template,
// so the clean frames and the guides can never drift apart.
//   node build.mjs            → frame-01.html, frame-02.html, frame-01-guide.html, frame-02-guide.html
// Render with design-studio/scripts/render.mjs (still, 1080×1920).
//
// Round 2 (2026-10-18): official on-navy logo placed (bottom-left signature, same size and place on both frames);
// the doorway is now a front door (piece 01's proportions, about 1:1.38, with a leaf and a knob) that is shut on
// frame 1 and swung open on frame 2; the key words lead by size (104 px against 72 px), not by colour alone.
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const BLUE = '#1B9CCE', NAVY = '#181943';

// ── Door geometry (all y in canvas px). Grid: 12 columns, 72 px margins, 24 px gutters, 8 px unit.
// Threshold runs on the column-5 and column-12 edges (x 392–1008); the frame stands 28 px in from each end,
// as piece 01's doors do. Frame ink: x 420–980 (560 wide), y 776–1554 (778 tall): 1 : 1.39, piece 01's 168 : 232.
const SW = 12;                    // stroke weight, same as piece 01
const G = 1548;                   // ground / threshold line (centre)
const XL = 426, XR = 974;         // frame jamb centrelines
const R = (XR - XL) / 2;          // round head, radius 274
const APEX = 782;                 // frame apex centreline (ink top 776)
const YS = APEX + R;              // springline 1056
const CX = (XL + XR) / 2;         // door centre x 700
const frame = `M${XR} ${G} L${XR} ${YS} A${R} ${R} 0 0 0 ${XL} ${YS} L${XL} ${G}`;
const threshold = `<line x1="${392 + SW / 2}" y1="${G}" x2="${1008 - SW / 2}" y2="${G}" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round"/>`;

// Frame 1 · shut. The leaf is a thin inset line inside the frame; the knob sits on the free (right) edge,
// so the hinge is on the left and the door opens right to left, in reading direction.
const LI = 30;                    // leaf inset from the frame centreline
const leafShut = `M${XR - LI} ${G - SW / 2} L${XR - LI} ${YS} A${R - LI} ${R - LI} 0 0 0 ${XL + LI} ${YS} L${XL + LI} ${G - SW / 2}`;
const KNOB = { x: XR - LI - 46, y: 1252, r: 16 };

// Frame 2 · open. Light fills the doorway (inset so the frame still reads as a frame); the leaf has swung inward
// on its left hinge and is seen edge-on as a narrow dark panel: its free edge is shorter (further away) and its
// foot rises off the floor line, which is what makes it read as "opened", not "coloured in".
const LT = 24;                    // light inset from the frame centreline
const light = `M${XR - LT} ${G - SW / 2} L${XR - LT} ${YS} A${R - LT} ${R - LT} 0 0 0 ${XL + LT} ${YS} L${XL + LT} ${G - SW / 2} Z`;
const HX = XL + LT;               // hinge x 450
const FX = HX + 128;              // free edge x 578
// The leaf's round head rises above the opening's arch, as a real arched leaf swung inward passes behind the
// wall. The leaf is navy, so outside the light it is invisible, and the frame and threshold are drawn after it:
// we see the leaf only through the opening, never over the frame (no clip, so no anti-aliased seam).
const leafOpen = `M${HX - 40} ${G - SW / 2} L${HX - 40} ${YS - 300} ` +          // hinge side (beyond the clip)
  `L${FX - 40} ${YS - 300} ` +
  `C${FX - 6} ${YS - 220} ${FX} ${YS - 100} ${FX} ${YS + 34} ` +              // head curving down to the free edge
  `L${FX} ${G - 30} Z`;                                                       // shorter free edge; foot rises
const KNOB_OPEN = { x: FX - 30, y: 1236, r: 13 };

const door = (open) => `
<svg class="abs door" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  ${open
    ? `<path d="${light}" fill="${BLUE}"/>
  <path d="${leafOpen}" fill="${NAVY}"/>
  <circle cx="${KNOB_OPEN.x}" cy="${KNOB_OPEN.y}" r="${KNOB_OPEN.r}" fill="${BLUE}"/>`
    : `<path d="${leafShut}" fill="none" stroke="${BLUE}" stroke-width="6" stroke-linejoin="round"/>
  <circle cx="${KNOB.x}" cy="${KNOB.y}" r="${KNOB.r}" fill="${BLUE}"/>`}
  <path d="${frame}" fill="none" stroke="${BLUE}" stroke-width="${SW}" stroke-linejoin="round"/>
  ${threshold}
</svg>`;

// ── Logo: the official stacked lockup with the white wordmark for navy (decision #66), unaltered.
// File 520×530; its ink is x 25–494, y 32–503. Drawn 239 px wide (scale 0.4596, under the ~300 px limit),
// so the ink is 216 px wide: columns 1–3 exactly (x 72–288). The wordmark is 216×37 px. The wordmark's foot
// sits on the threshold's bottom edge (y 1554), so the signature and the door stand on one line.
const LOGO_W = 239, LOGO_S = LOGO_W / 520;
const logoLeft = +(72 - 25 * LOGO_S).toFixed(2);
const logoTop = +(G + SW / 2 - 503 * LOGO_S).toFixed(2);
const logo = `<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX" ` +
  `style="left:${logoLeft}px;top:${logoTop}px;width:${LOGO_W}px">`;

// Words exactly as in pieces/02-ig-story-before-the-visit.md (## Copy). " / " = a new line, *stars* = .accent
const frames = {
  '01': {
    open: false,
    body: `
<div class="abs label"><span>سؤال</span></div>
<h1 class="abs headline"><span class="ln setup">شنو أكثر شي تريد تعرفه</span><span class="ln">قبل لا يجيك دكتور <span class="key accent">للبيت؟</span></span></h1>
<p class="abs sub small">لا تكتب اسمك ولا شي عن صحتك.</p>
__DOOR__
${logo}`,
    // Mock of Instagram's native Question sticker (white variant), pinned on the shut door, centred on the door (x 700)
    guide: `
<div class="abs mock-card" style="left:${CX - 240}px;top:880px;width:480px;height:256px">
  <div class="mock-avatar"></div>
  <div class="mock-prompt">prompt: wording from the Copywriter</div>
  <div class="mock-field">Type something…</div>
</div>
<div class="abs guide-note" style="top:1178px;left:${CX - 240}px;width:480px;right:auto">Question sticker, white variant, ~45% of screen width, centred on the door, above the knob</div>`,
  },
  '02': {
    open: true,
    body: `
<h1 class="abs headline"><span class="ln setup">وإذا تريد تحجز زيارة هسه:</span><span class="ln"><span class="key accent">دزلنا رسالة واتساب.</span></span></h1>
<p class="abs sub closing">لا تصدگنا. شوف بعينك.</p>
__DOOR__
${logo}`,
    // Mock of Instagram's native link sticker (white variant), in the open doorway's light
    guide: `
<div class="abs mock-link" style="left:${FX + 22}px;top:1020px;width:${XR - LT - FX - 44}px;height:96px"><span class="mock-link-icon"></span>احجز بالواتساب</div>
<div class="abs guide-note" style="top:1132px;left:${FX + 22}px;width:${XR - LT - FX - 44}px;right:auto;color:${NAVY}">link sticker, white variant, in the light, clear of the leaf<br>link: [AT POSTING: wa.me]</div>`,
  },
};

const page = (id, f, withGuide) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-02 frame ${id}${withGuide ? ' (placement guide, not for posting)' : ''}</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<link rel="stylesheet" href="story.css">
</head><body>
${f.body.replace('__DOOR__', door(f.open)).trim()}
${withGuide ? `
<div class="abs guide-band" style="top:0;height:250px;border-bottom-width:4px">Instagram UI: keep clear (top 250 px)</div>
<div class="abs guide-band" style="bottom:0;height:340px;border-top-width:4px">Instagram UI: keep clear (bottom 340 px)</div>
${f.guide.trim()}
<div class="abs guide-tag">PLACEMENT GUIDE, NOT FOR POSTING · frame ${id}</div>` : ''}
</body></html>
`;

for (const [id, f] of Object.entries(frames)) {
  writeFileSync(path.join(here, `frame-${id}.html`), page(id, f, false));
  writeFileSync(path.join(here, `frame-${id}-guide.html`), page(id, f, true));
}
console.log(`built frame-01/02 (+ guides) · logo at left ${logoLeft}, top ${logoTop}, width ${LOGO_W}`);

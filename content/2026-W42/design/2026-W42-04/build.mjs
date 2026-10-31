// Builds the HTML sources for 2026-W42-04 (WhatsApp broadcast image, 1080×1080) and its phone check.
//   node build.mjs    → whatsapp-image.html, checks/phone-preview.html
// Render with design-studio/scripts/render.mjs (see the piece file's ## Design section for the commands).
//
// The image is piece 01's cover, re-laid out as a square for WhatsApp (brief: "01's cover slide, resized").
// Its words are piece 01's frame 1 words and are read from piece 01's own cover file, so the two can't drift.
// The route band is piece 01's slide 7 band (your bubble lit: "it starts with your message"), copied from
// slide-07.html and moved up 144 px with its viewBox, so the geometry is piece 01's to the pixel.
//
// Round 2 (Design Critic r1: REVISE 6.95). What changed:
//  1. The official on-navy logo (decision #66), unaltered, replaces the placeholder: piece 01's round-2 size and column
//     (238 px wide, ink x 72–288 = columns 1–3), its rule moved up 112 like the rest of the top block. Every row is back
//     on the 8 px unit: header 72, hook 232, sub 568, band apex 744, ground line 976 (was 980).
//  2. Hierarchy by weight, not colour alone: white setup words Medium 500, only «رسالة؟» Bold 800 (piece 01's fix 2).
//     Piece 01's hook markup did not change in its round 2 (only its CSS did), so WORDS is the same; the check now also
//     compares the hook, accent and logo rules with piece 01's carousel.css and stops if they differ.
//  3b. The door: piece 01's round 2 drew the week's door (door.mjs) into every band, so slide 7's outlined door now has
//     its leaf line and knob. The check below stops if slide 7's band no longer carries that closed door.
//  Round 1's three thumbnails stay in thumbs/ as the record of the choice; they are no longer rebuilt here.
//
// Round 3 (Design Critic r2: REVISE 7.45, lowest 6.5 Glaser). What changed here:
//  2. Poster scale, one clear type step: piece 01's round 3 set the cover hook 136 and the sub-line 48 (the pill
//     label's size) in carousel.css; this image follows (whatsapp.css), and the checks below still lock size, weight
//     and line-height to piece 01. Header, logo and hook keep the 112 px shift. The sub-line moves 128 (16 more):
//     the square is 270 px shorter than the cover, so the cover's 96 px sub-line→apex gap can't be kept, and at the
//     cover's spacing the sub-line would sit as close to the band as to the hook (ink 67 / 60). At 592 it groups
//     with the hook (ink gap 44) and clears the arch apex by 83.
//     The band now carries piece 01's round-3 lit bubble (1.15×, grown about its ground point; top 912 → 768 here).
//  1, 3. The Copywriter's (cut the `ask` line; WhatsApp bold on the `cta` line). Not done by the Designer. The phone
//     check shows them as a labelled proposal and renders WhatsApp *bold* as bold, so it follows the copy once changed.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { doorSVG } from '../2026-W42-01/door.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const p01 = path.join(here, '../2026-W42-01');
const piece04 = path.join(here, '../../pieces/04-whatsapp-broadcast-home-visit.md');
const assets = '../../../../.claude/skills/design-studio/assets';
const fail = (msg) => { throw new Error(`${msg}: rebuild this image from piece 01 (see ## Design in piece 04)`); };

// ---- words: from piece 01's cover, checked against what this image expects ----------------------
const cover = readFileSync(path.join(p01, 'slide-01.html'), 'utf8');
const WORDS = {
  series: 'شوف بعينك',
  hook: 'شنو يصير<br>من تدزلنا <span class="accent">رسالة؟</span>',
  sub: 'زيارة لبيتك ببغداد، خطوة بخطوة.',
};
for (const [k, v] of Object.entries(WORDS)) {
  if (!cover.includes(v)) fail(`piece 01's cover no longer contains the ${k} line`);
}

// ---- type weights and logo: this image's CSS must match piece 01's cover CSS -----------------------
const rule = (css, sel) => {
  const m = css.match(new RegExp(`(^|\\n)${sel.replace('.', '\\.')}\\s*\\{([^}]*)\\}`));
  if (!m) fail(`no ${sel} rule found`);
  return Object.fromEntries(m[2].split(';').map((d) => d.split(':').map((s) => s.trim())).filter(([k, v]) => k && v));
};
const css01 = readFileSync(path.join(p01, 'carousel.css'), 'utf8');
const css04 = readFileSync(path.join(here, 'whatsapp.css'), 'utf8');
// Vertical moves from piece 01's cover into the square, all whole units: header row 184 → 72 (14 units), so the logo,
// pill and hook keep the cover's 48 px header→hook gap; the sub-line moves 16 px more (16 units: 720 → 592), so it
// groups with the hook in the shorter square (see the round-3 note above).
const SHIFT_FROM_01 = { '.logo': 112, '.series': 112, '.hook': 112, '.sub': 128 };
for (const [sel, props] of [['.hook', ['font-weight', 'font-size', 'line-height']], ['.sub', ['font-weight', 'font-size', 'line-height']],
  ['.accent', ['color', 'font-weight']], ['.series', ['font-weight', 'font-size', 'height', 'right']], ['.logo', ['left', 'width']]]) {
  const a = rule(css01, sel), b = rule(css04, sel);
  for (const p of props) if (a[p] !== b[p]) fail(`${sel} ${p} differs: piece 01 has ${a[p]}, this image ${b[p]}`);
}
for (const [sel, shift] of Object.entries(SHIFT_FROM_01)) {
  const t01 = parseFloat(rule(css01, sel).top), t04 = parseFloat(rule(css04, sel).top);
  if (t01 - t04 !== shift) fail(`${sel} top is ${t04}, expected piece 01's ${t01} − ${shift}`);
}

// ---- route band: piece 01's COVER band (every station at rest), moved into the square ----------------
// Round 4: built from the cover, not slide 7, then three swaps so the route decodes in one frame (below). Every swap
// looks for piece 01's exact markup and stops if it has changed. Numbers are piece 01's (slide coordinates, ground 1120).
const BLUE = '#1B9CCE', NAVY = '#181943', G = 1120, SW = 12;
const s04 = readFileSync(path.join(p01, 'slide-04.html'), 'utf8');
const s06 = readFileSync(path.join(p01, 'slide-06.html'), 'utf8');
const m = cover.match(/<svg class="abs band"[\s\S]*?<\/svg>/);
if (!m) fail('band not found in piece 01 slide-01.html');
// The week's closed door (leaf line and knob), at piece 01's numbers: station x 413, 168 wide, apex 888, ground 1120.
if (!m[0].includes(doorSVG({ xl: 329, xr: 497, apex: 888, ground: G, sw: SW, state: 'closed' }))) {
  fail("the cover's band no longer carries the week's closed door from door.mjs");
}
const swap = (svg, re, to, what) => {
  const hits = svg.match(new RegExp(re.source, 'g')) || [];
  if (hits.length !== 1) fail(`the cover's band: expected one ${what}, found ${hits.length}`);
  return svg.replace(re, typeof to === 'function' ? to(hits[0]) : to);
};
// The series' grammar (piece 01): a station at rest is a navy outline with its meaning in blue; the lit station is filled
// blue with its meaning in navy. Round 4 gives every resting station its meaning, using piece 01's own glyphs:
//   your message (start)  three dots              lit: filled blue, navy dots, at the COVER's 1.0× (critic note: mass)
//   the appointment       slide 4's tick          at rest: navy disc, 12 px blue ring, the tick in 12 px blue
//   the door              the week's door         unchanged
//   our call (end)        slide 6's handset       at rest: blue handset in the outlined bubble (was three dots)
// (a) Your message, lit at 1.0×: the cover's own bubble path, filled. Slide 7 draws it at 1.15×; in one still frame the
//     fill alone says "this step", and 1.0× takes about a fifth off the solid blue so «رسالة؟» stays the heavier pull.
let band = swap(m[0],
  /<path d="M868 944 [^"]*" fill="#181943" stroke="#1B9CCE" stroke-width="12" stroke-linejoin="round"\/>(<circle cx="(884|920|956)" cy="1008" r="8" fill="#1B9CCE"\/>){3}/,
  (s) => s.replace(`fill="${NAVY}" stroke`, `fill="${BLUE}" stroke`).replaceAll(`r="8" fill="${BLUE}"`, `r="8" fill="${NAVY}"`),
  'resting start bubble');
// (b) The appointment: slide 4's tick (its lit disc carries it at 1.15×, stroke 16 × 1.15) drawn at 1× in the 12 px line,
//     inside a ring of the cover's construction (navy fill, 12 px blue stroke). A tick needs a ring of r 56 (ink r 62, the
//     disc's 1× size in piece 01); centred on the road that would cross the 72 px bottom margin of the square (ink to 1040),
//     so the ring STANDS on the road like the other three stations: its stroke meets the ground line at x 667, no dot moves.
const TICK = (cx, cy, k) => `M${+(cx - 26 * k).toFixed(2)} ${+(cy + 2 * k).toFixed(2)} L${+(cx - 8 * k).toFixed(2)} ${+(cy + 20 * k).toFixed(2)} L${+(cx + 28 * k).toFixed(2)} ${+(cy - 18 * k).toFixed(2)}`;
if (!s04.includes(`<path d="${TICK(667, G, 1.15)}" fill="none" stroke="${NAVY}" stroke-width="18.4" stroke-linecap="round" stroke-linejoin="round"/>`)) {
  fail("piece 01's slide 4 no longer carries the appointment tick this ring borrows");
}
const RING_R = 56, RING_CY = G - RING_R;
band = swap(band, /<circle cx="667" cy="1120" r="22" fill="#181943" stroke="#1B9CCE" stroke-width="12"\/>/,
  `<circle cx="667" cy="${RING_CY}" r="${RING_R}" fill="${NAVY}" stroke="${BLUE}" stroke-width="${SW}"/>` +
  `<path d="${TICK(667, RING_CY, 1)}" fill="none" stroke="${BLUE}" stroke-width="${SW}" stroke-linecap="round" stroke-linejoin="round"/>`,
  'resting appointment ring');
// (c) Our call: slide 6's handset (its lit bubble carries it in navy at scale 1.72), here at the bubble's 1× (scale 1.5) in
//     blue, centred where the three dots were (160, 1008). Not mirrored: a phone is not a direction (design-studio).
const HANDSET_D = 'M-30 -14 Q-30 -22 -22 -22 L-12 -22 Q-6 -22 -6 -16 L-6 -6 Q-6 -2 -10 -2 L-14 -2 Q-14 10 -6 18 Q-2 14 2 14 L12 14 Q18 14 18 20 L18 28 Q18 36 10 36 L4 36 Q-30 30 -30 -14 Z';
if (!s06.includes(`fill="${NAVY}" d="${HANDSET_D}"`)) fail("piece 01's slide 6 no longer carries the handset this bubble borrows");
band = swap(band, /(<circle cx="(124|160|196)" cy="1008" r="8" fill="#1B9CCE"\/>){3}/,
  `<path transform="translate(160 1008) scale(1.5) translate(2 -1) translate(4 -6)" fill="${BLUE}" d="${HANDSET_D}"/>`,
  'resting end bubble');
const SHIFT = 144; // ground line 1120 → 976 (18 units); ink bottom 1004 (the road's dots and the bubbles' tails), inside the margin
const svgHead = 'width="1080" height="1350" viewBox="0 0 1080 1350"';
if (!band.includes(svgHead)) fail('band svg header changed in piece 01');
band = band.replace(svgHead, `width="1080" height="1080" viewBox="0 ${SHIFT} 1080 1080"`);

const head = (title, rel, css) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>${title}</title>
<link rel="stylesheet" href="${rel}${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${rel}${assets}/tabeebx.css">
${css}
</head>`;
// Official logo, unaltered: the white-wordmark file for navy (decision #66), as on piece 01's slides 1 and 7.
const logo = `<img class="abs logo" src="${assets}/brand/tabeebx-logo-stacked-on-navy.png" alt="TabeebX">`;

// ---- the image to send ----------------------------------------------------------------------------
writeFileSync(path.join(here, 'whatsapp-image.html'), `${head('2026-W42-04 WhatsApp image', '', '<link rel="stylesheet" href="whatsapp.css">')}<body>
<div class="abs series"><span>${WORDS.series}</span></div>
${logo}
<h1 class="abs hook">${WORDS.hook}</h1>
<p class="abs sub">${WORDS.sub}</p>
${band}
</body></html>
`);

// ---- phone check: the message as received, with this image ----------------------------------------
// Round 4: the Copywriter applied the critic's fixes 1 and 2 (no `ask` line; the `cta` line in WhatsApp *bold*), so both
// phones show the copy as it stands (51 words). They differ only in the caption size the receiver's phone uses:
// right, about 15 sp (44 px on a 1080 px screen, as in rounds 1–3); left, about 17 sp (50 px), a larger phone font.
// The message is read from piece 04's ## Copy: one paragraph per `### Frame`, one line per keyed line. The image's own three
// strings sit above `### Frame 1` (series, hook, small) and are checked here against WORDS, so the copy file, this image and
// piece 01's cover can't drift apart; they never enter the message.
const md = readFileSync(piece04, 'utf8');
const copy = md.split('\n## Copy')[1].split('\n## ')[0];
const [imageLines, ...frames] = copy.split(/^### /m);
const onImage = Object.fromEntries([...imageLines.matchAll(/^(series|hook|small): (.+)$/gm)].map((x) => [x[1], x[2].trim()]));
const asCopy = { series: WORDS.series, hook: WORDS.hook.replace('<br>', ' / ').replace(/<span class="accent">(.+?)<\/span>/, '*$1*'), small: WORDS.sub };
for (const k of ['series', 'hook', 'small']) {
  if (onImage[k] !== asCopy[k]) fail(`piece 04's ## Copy lists the image's ${k} line as «${onImage[k]}», the image sets «${asCopy[k]}»`);
}
const paras = frames.map((f) =>
  f.split('\n').map((l) => l.match(/^([a-z]+): (.+)$/)).filter(Boolean).map((x) => ({ key: x[1], text: x[2] })));
if (paras.length !== 5) fail(`expected 5 paragraphs in piece 04's copy, found ${paras.length}`);
if (paras.flat().some((l) => l.key === 'ask')) console.warn('note: piece 04 has an `ask` line again (the image asks the question; the critic asked for it once)');
if (!paras.flat().some((l) => l.key === 'cta' && /^\*[^*]+\*$/.test(l.text))) console.warn('note: the `cta` line is not WhatsApp bold');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
// WhatsApp formatting: *text* shows as bold on the phone, so the mock shows it bold too.
const wa = (s) => esc(s).replace(/\*([^*\n]+)\*/g, '<b>$1</b>');
const msg = paras.map((p) => `<p>${p.map((l) => wa(l.text)).join('<br>')}</p>`).join('\n');
const words = (html) => html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter((w) => /[؀-ۿA-Za-z]/.test(w)).length;

const phone = (cls, label) => `<section class="${cls}">
  <div class="label">${label}</div>
  <div class="phone">
    <div class="bar">TabeebX</div>
    <div class="chat"><div class="bubble"><img src="../whatsapp-image.png"><div class="text">${msg}</div></div></div>
    <div class="input"><div class="field"></div></div>
    <div class="fold"></div>
  </div>
  <div class="note"></div>
</section>`;
mkdirSync(path.join(here, 'checks'), { recursive: true });
writeFileSync(path.join(here, 'checks/phone-preview.html'), `<!doctype html>
<html><head><meta charset="utf-8"><link rel="stylesheet" href="../${assets}/fonts/fonts.css">
<style>
  /* Neutral chat mock at a 1080×2340 phone (360 dp × 3). Not WhatsApp's UI or colours: grey only.
     Bubble 800 px wide (≈ 267 dp), image 784 px (≈ 261 dp). Caption 44 px (≈ 15 sp) or 50 px (≈ 17 sp, a larger phone
     font). The caption is set in Cairo because it is the only Arabic font here; the phone uses its system Arabic font, so
     its line breaks will differ. WhatsApp shows a square image whole (uncropped) in the bubble; the script checks the mock. */
  html, body { margin: 0; width: 2400px; height: 2780px; background: #FFFFFF; font-family: Cairo, sans-serif; }
  .wrap { display: flex; flex-direction: row-reverse; gap: 120px; padding: 40px 60px; }
  .label { font-size: 40px; font-weight: 800; color: #222; height: 110px; width: 1080px; line-height: 1.35; }
  .note  { font-size: 32px; font-weight: 500; color: #222; margin-top: 16px; width: 1080px; line-height: 1.4; white-space: pre-line; }
  .phone { position: relative; width: 1080px; height: 2340px; background: #E4E4E4; overflow: hidden; outline: 4px solid #999; }
  .bar   { position: absolute; top: 0; left: 0; right: 0; height: 200px; background: #6B6B6B; color: #fff;
           font-size: 48px; font-weight: 800; display: flex; align-items: flex-end; padding: 0 48px 40px; direction: rtl; }
  .chat  { position: absolute; top: 236px; right: 36px; direction: rtl; }
  .bubble { width: 800px; background: #fff; border-radius: 24px; padding: 8px; box-sizing: border-box; }
  .bubble img { width: 784px; aspect-ratio: 1 / 1; display: block; border-radius: 18px; }
  .text  { direction: rtl; text-align: right; font-size: 44px; line-height: 1.45; color: #111; font-weight: 500; padding: 12px 24px 20px; }
  .large .text { font-size: 50px; }
  .text p { margin: 0 0 1.45em; } .text p:last-child { margin: 0; }
  .text b { font-weight: 800; }
  .input { position: absolute; bottom: 0; left: 0; right: 0; height: 180px; background: #F4F4F4; }
  .field { position: absolute; left: 32px; right: 32px; top: 36px; height: 108px; border-radius: 54px; background: #fff; }
  .fold  { position: absolute; left: 0; right: 0; bottom: 180px; border-top: 6px dashed #444; }
</style></head><body><div class="wrap">
${phone('default', `The copy as it stands (${words(msg)} words), caption about 15 sp`)}
${phone('large', `The same message, caption about 17 sp (a larger phone font)`)}
</div>
<script>
document.fonts.ready.then(() => Promise.all([...document.images].map((i) => i.decode()))).then(() => {
  for (const s of document.querySelectorAll('section')) {
    const phone = s.querySelector('.phone').getBoundingClientRect();
    const img = s.querySelector('.bubble img'), r = img.getBoundingClientRect();
    const b = s.querySelector('.bubble').getBoundingClientRect();
    const end = Math.round(b.bottom - phone.top), visible = 2340 - 180;
    const ps = [...s.querySelectorAll('.text p')];
    const cut = ps.findIndex((p) => p.getBoundingClientRect().bottom - phone.top > visible);
    // Whole image: the file's own ratio is kept (no crop) and the shown box lies inside the screen, under the top bar.
    const ratio = (img.naturalWidth / img.naturalHeight) / (r.width / r.height);
    const top = Math.round(r.top - phone.top), bottom = Math.round(r.bottom - phone.top);
    const whole = Math.abs(ratio - 1) < 0.001 && top >= 200 && bottom <= visible;
    s.querySelector('.note').textContent =
      (whole ? 'Image shown whole: ' : 'IMAGE NOT WHOLE: ') + img.naturalWidth + '×' + img.naturalHeight + ' file in a ' +
      Math.round(r.width) + '×' + Math.round(r.height) + ' box (ratio kept), y ' + top + '–' + bottom + ', below the top bar (200).\\n' +
      (end <= visible
        ? 'Whole message on one screen: the bubble ends at y ' + end + ', ' + (visible - end) + ' px above the input bar (dashed line).'
        : 'The bubble runs ' + (end - visible) + ' px past the input bar (dashed line): paragraph ' + (cut + 1) + ' of ' + ps.length +
          ' and anything after it need a scroll.');
  }
});
</script>
</body></html>
`);
console.log(`built: whatsapp-image.html, checks/phone-preview.html (message: ${words(msg)} words)`);

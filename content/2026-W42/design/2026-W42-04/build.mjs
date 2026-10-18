// Builds the HTML sources for 2026-W42-04 (WhatsApp broadcast image, 1080×1080), its three thumbnails
// and its phone check.
//   node build.mjs    → whatsapp-image.html, thumbs/*.html, checks/phone-preview.html
// Render with design-studio/scripts/render.mjs (see the piece file's ## Design section for the commands).
//
// The image is piece 01's cover, re-laid out as a square for WhatsApp (brief: "01's cover slide, resized").
// Its words are piece 01's frame 1 words and are read from piece 01's own cover file, so the two can't drift.
// The route band is piece 01's slide 7 band (your bubble lit: "it starts with your message"), copied from
// slide-07.html and moved up 140 px with its viewBox, so the geometry is piece 01's to the pixel.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const p01 = path.join(here, '../2026-W42-01');
const piece04 = path.join(here, '../../pieces/04-whatsapp-broadcast-home-visit.md');
const assets = '../../../../.claude/skills/design-studio/assets';

// ---- words: from piece 01's cover, checked against what this image expects ----------------------
const cover = readFileSync(path.join(p01, 'slide-01.html'), 'utf8');
const WORDS = {
  series: 'شوف بعينك',
  hook: 'شنو يصير<br>من تدزلنا <span class="accent">رسالة؟</span>',
  sub: 'زيارة لبيتك ببغداد، خطوة بخطوة.',
};
for (const [k, v] of Object.entries(WORDS)) {
  if (!cover.includes(v)) throw new Error(`piece 01's cover no longer contains the ${k} line: rebuild this image from it`);
}

// ---- route band: piece 01's slide 7 (start state), moved into the square ---------------------------
const s07 = readFileSync(path.join(p01, 'slide-07.html'), 'utf8');
const m = s07.match(/<svg class="abs band"[\s\S]*?<\/svg>/);
if (!m) throw new Error('band not found in piece 01 slide-07.html');
const SHIFT = 140; // ground line 1120 → 980: the disc (r 22 + stroke) then ends at 1008, inside the 72 px margin
const band = m[0].replace('width="1080" height="1350" viewBox="0 0 1080 1350"',
  `width="1080" height="1080" viewBox="0 ${SHIFT} 1080 1080"`);
if (band === m[0]) throw new Error('band svg header changed in piece 01');

const head = (title, rel, css) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>${title}</title>
<link rel="stylesheet" href="${rel}${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${rel}${assets}/tabeebx.css">
${css}
</head>`;
const logoSlot = `<div class="abs logo-slot">[LOGO: official file needed]</div>`;

// ---- the image to send ----------------------------------------------------------------------------
const image = (rel = '') => `${head('2026-W42-04 WhatsApp image', rel, `<link rel="stylesheet" href="${rel}whatsapp.css">`)}<body>
<div class="abs series"><span>${WORDS.series}</span></div>
${logoSlot}
<h1 class="abs hook">${WORDS.hook}</h1>
<p class="abs sub">${WORDS.sub}</p>
${band}
</body></html>
`;
writeFileSync(path.join(here, 'whatsapp-image.html'), image());

// ---- thumbnails (not for sending) -----------------------------------------------------------------
mkdirSync(path.join(here, 'thumbs'), { recursive: true });
writeFileSync(path.join(here, 'thumbs/a-square-cover.html'), image('../'));

// (b) Reply card: type only, the copy's cta and options lines as the image.
writeFileSync(path.join(here, 'thumbs/b-reply-card.html'), `${head('04 thumb b', '../', `<link rel="stylesheet" href="../whatsapp.css">
<style>
  .q   { top: 240px; right: 72px; left: 72px; text-align: right; font-weight: 800; font-size: 72px; line-height: 1.35; white-space: nowrap; }
  .opt { top: 488px; right: 72px; left: 72px; text-align: right; font-weight: 800; font-size: 104px; line-height: 1.3; color: var(--pink); white-space: nowrap; }
</style>`)}<body>
<div class="abs series"><span>${WORDS.series}</span></div>
${logoSlot}
<h1 class="abs q">تحتاج زيارة؟<br>رد على هالرسالة بكلمة وحدة:</h1>
<p class="abs opt">دكتور، ممرض،<br>ممرضة، أو تحليل.</p>
</body></html>
`);

// (c) Route as hero: the band enlarged 1.1× across the lower half (it then breaks the 72 px side margins), the hook at 88.
const bigBand = m[0].replace('width="1080" height="1350" viewBox="0 0 1080 1350"',
  'width="1080" height="390" viewBox="52 860 976 352" style="top:600px"');
writeFileSync(path.join(here, 'thumbs/c-route-hero.html'), `${head('04 thumb c', '../', `<link rel="stylesheet" href="../whatsapp.css">
<style>.hook2 { top: 232px; right: 72px; left: 72px; text-align: right; font-weight: 800; font-size: 88px; line-height: 1.3; white-space: nowrap; }</style>`)}<body>
<div class="abs series"><span>${WORDS.series}</span></div>
${logoSlot}
<h1 class="abs hook2">${WORDS.hook}</h1>
${bigBand}
</body></html>
`);

writeFileSync(path.join(here, 'thumbs/contact-sheet.html'), `<!doctype html>
<html><head><meta charset="utf-8"><link rel="stylesheet" href="../${assets}/fonts/fonts.css">
<style>
  html, body { margin: 0; width: 1260px; height: 520px; background: #FFFEFF; font-family: Cairo, sans-serif; }
  .row { display: flex; flex-direction: row-reverse; gap: 36px; padding: 48px 48px 0; }
  figure { margin: 0; width: 360px; }
  img { width: 360px; height: 360px; display: block; }
  figcaption { font-size: 22px; line-height: 1.4; color: #181943; margin-top: 12px; font-weight: 500; }
  b { font-weight: 800; }
</style></head><body><div class="row">
  <figure><img src="a-square-cover.png"><figcaption><b>(a) chosen</b> · 01's cover, re-laid out square; your bubble lit</figcaption></figure>
  <figure><img src="b-reply-card.png"><figcaption><b>(b)</b> · reply card: the cta and options lines as the image</figcaption></figure>
  <figure><img src="c-route-hero.png"><figcaption><b>(c)</b> · route as hero, hook at 88</figcaption></figure>
</div></body></html>
`);

// ---- phone check: the message as received, 4:5 (01's cover as-is) beside 1:1 (this image) ----------
// The message text is read from piece 04's ## Copy: one paragraph per frame, one line per keyed line.
const md = readFileSync(piece04, 'utf8');
const copy = md.split('## Copy')[1].split('\n## ')[0];
const paras = copy.split(/^### /m).slice(1).map((f) =>
  f.split('\n').map((l) => l.match(/^[a-z]+: (.+)$/)).filter(Boolean).map((x) => x[1]));
if (paras.length !== 5) throw new Error(`expected 5 paragraphs in piece 04's copy, found ${paras.length}`);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const msg = paras.map((p) => `<p>${p.map(esc).join('<br>')}</p>`).join('\n');

const phone = (img, ratio, label) => `<section>
  <div class="label">${label}</div>
  <div class="phone">
    <div class="bar">TabeebX</div>
    <div class="chat"><div class="bubble"><img src="${img}" style="aspect-ratio:${ratio}"><div class="text">${msg}</div></div></div>
    <div class="input"><div class="field"></div></div>
    <div class="fold"></div>
  </div>
  <div class="note" data-ratio="${ratio}"></div>
</section>`;
mkdirSync(path.join(here, 'checks'), { recursive: true });
writeFileSync(path.join(here, 'checks/phone-preview.html'), `<!doctype html>
<html><head><meta charset="utf-8"><link rel="stylesheet" href="../${assets}/fonts/fonts.css">
<style>
  /* Neutral chat mock at a 1080×2340 phone (360 dp × 3). Not WhatsApp's UI or colours: grey only.
     Bubble 800 px wide (≈ 267 dp), caption 44 px (≈ 15 sp). The caption is set in Cairo because it is the
     only Arabic font here; the phone uses its system Arabic font, so its line breaks will differ a little. */
  html, body { margin: 0; width: 2400px; height: 2660px; background: #FFFFFF; font-family: Cairo, sans-serif; }
  .wrap { display: flex; flex-direction: row-reverse; gap: 120px; padding: 40px 60px; }
  .label { font-size: 40px; font-weight: 800; color: #222; height: 70px; }
  .note  { font-size: 32px; font-weight: 500; color: #222; margin-top: 16px; width: 1080px; line-height: 1.4; }
  .phone { position: relative; width: 1080px; height: 2340px; background: #E4E4E4; overflow: hidden; outline: 4px solid #999; }
  .bar   { position: absolute; top: 0; left: 0; right: 0; height: 200px; background: #6B6B6B; color: #fff;
           font-size: 48px; font-weight: 800; display: flex; align-items: flex-end; padding: 0 48px 40px; direction: rtl; }
  .chat  { position: absolute; top: 236px; right: 36px; direction: rtl; }
  .bubble { width: 800px; background: #fff; border-radius: 24px; padding: 8px; box-sizing: border-box; }
  .bubble img { width: 784px; display: block; border-radius: 18px; object-fit: cover; }
  .text  { direction: rtl; text-align: right; font-size: 44px; line-height: 1.45; color: #111; font-weight: 500; padding: 12px 24px 20px; }
  .text p { margin: 0 0 1.45em; } .text p:last-child { margin: 0; }
  .input { position: absolute; bottom: 0; left: 0; right: 0; height: 180px; background: #F4F4F4; }
  .field { position: absolute; left: 32px; right: 32px; top: 36px; height: 108px; border-radius: 54px; background: #fff; }
  .fold  { position: absolute; left: 0; right: 0; bottom: 180px; border-top: 6px dashed #444; }
</style></head><body><div class="wrap">
${phone('../whatsapp-image.png', '1 / 1', 'This image (1:1)')}
${phone('../../2026-W42-01/slide-01.png', '4 / 5', "Piece 01's cover as-is (4:5), for comparison")}
</div>
<script>
document.fonts.ready.then(() => {
  for (const s of document.querySelectorAll('section')) {
    const phone = s.querySelector('.phone').getBoundingClientRect();
    const b = s.querySelector('.bubble').getBoundingClientRect();
    const end = Math.round(b.bottom - phone.top), visible = 2340 - 180;
    const ps = [...s.querySelectorAll('.text p')];
    const cut = ps.findIndex((p) => p.getBoundingClientRect().bottom - phone.top > visible);
    s.querySelector('.note').textContent = end <= visible
      ? 'Whole message on one screen: the bubble ends at y ' + end + ', ' + (visible - end) + ' px above the input bar (dashed line).'
      : 'The bubble runs ' + (end - visible) + ' px past the input bar (dashed line): paragraph ' + (cut + 1) + ' of ' + ps.length +
        ' and anything after it need a scroll.';
  }
});
</script>
</body></html>
`);
console.log('built: whatsapp-image.html, thumbs/{a,b,c,contact-sheet}.html, checks/phone-preview.html');

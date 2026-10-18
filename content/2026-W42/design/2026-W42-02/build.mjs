// Builds the HTML sources for 2026-W42-02 (two story frames + placement guides) from one template,
// so the clean frames and the guides can never drift apart.
//   node build.mjs            → frame-01.html, frame-02.html, frame-01-guide.html, frame-02-guide.html
// Render with design-studio/scripts/render.mjs (still, 1080×1920).
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';

// Door geometry (see story.css header): round-headed arch, span x 128–952, springline 1148, threshold 1448.
const ARCH = 'M952 1448 L952 1148 A412 412 0 0 0 128 1148 L128 1448';
// Frame 2 only: the doorway "lit" (filled blue), inset 32 px inside the frame so the frame still reads.
const LIT = 'M920 1442 L920 1148 A380 380 0 0 0 160 1148 L160 1442 Z';
const door = (filled) => `
<svg class="abs door" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  ${filled ? `<path d="${LIT}" fill="#1B9CCE"/>` : ''}
  <path d="${ARCH}" fill="none" stroke="#1B9CCE" stroke-width="12" stroke-linejoin="round"/>
  <line x1="72" y1="1448" x2="1008" y2="1448" stroke="#1B9CCE" stroke-width="12" stroke-linecap="round"/>
</svg>`;

const logoSlot = `<div class="abs logo-slot">[LOGO: official file needed]</div>`;

// Words exactly as in pieces/02-ig-story-before-the-visit.md (## Copy). " / " = <br>, *stars* = .accent
const frames = {
  '01': {
    filled: false,
    body: `
<div class="abs label"><span>سؤال</span></div>
${logoSlot}
<h1 class="abs headline">شنو أكثر شي تريد تعرفه<br>قبل لا يجيك دكتور <span class="accent">للبيت؟</span></h1>
__DOOR__
<p class="abs foot small">لا تكتب اسمك ولا شي عن صحتك.</p>`,
    // Mock of Instagram's native Question sticker (white variant), centred on x 540, centre y 1220
    guide: `
<div class="abs mock-card" style="left:220px;top:1050px;width:640px;height:340px">
  <div class="mock-avatar"></div>
  <div class="mock-prompt">Question sticker: prompt typed at posting</div>
  <div class="mock-field">Type something…</div>
</div>
<div class="abs guide-note" style="top:1404px">mock: Instagram Question sticker, white or blue variant, never pink</div>`,
  },
  '02': {
    filled: true,
    body: `
${logoSlot}
<h1 class="abs headline">وإذا تريد تحجز زيارة هسه:<br><span class="accent">دزلنا رسالة واتساب.</span></h1>
__DOOR__
<p class="abs foot closing">لا تصدگنا. شوف بعينك.</p>`,
    // Mock of Instagram's native link sticker (white variant), centred on x 540, centre y 1220
    guide: `
<div class="abs mock-link" style="left:270px;top:1164px;width:540px;height:112px"><span class="mock-link-icon"></span>احجز بالواتساب</div>
<div class="abs guide-note" style="top:1300px;left:200px;right:200px;color:#181943">mock: Instagram link sticker, white variant<br>link: [AT POSTING: wa.me]</div>`,
  },
};

const page = (id, f, withGuide) => `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-02 frame ${id}${withGuide ? ' (placement guide, not for posting)' : ''}</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<link rel="stylesheet" href="story.css">
</head><body>
${f.body.replace('__DOOR__', door(f.filled)).trim()}
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
console.log('built frame-01/02 (+ guides)');

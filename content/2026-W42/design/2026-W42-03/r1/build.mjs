// Builds video.html for 2026-W42-03 (19.2 s, 1080×1920, silent kinetic typography) from one timeline,
// so every hold in the piece file's copy is enforced in code.
//   node build.mjs   → video.html
// Render: node .claude/skills/design-studio/scripts/render.mjs video video.html video.mp4 --w 1080 --h 1920 --fps 30 --dur 19.2
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = '../../../../.claude/skills/design-studio/assets';
const D = 19.2;                                   // seconds
const OUT = 'cubic-bezier(.16,.84,.3,1)';         // ease-out (enter, 0.3–0.4 s)
const IN = 'cubic-bezier(.55,0,.85,.4)';          // ease-in (exit, 0.2 s)

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
// a card that enters over [a, a+inDur] from `from`, holds still, and leaves over [b-0.2, b] toward `to`
const card = (name, a, b, from, to = hidden(-32, 0), inDur = 0.3) =>
  kf(name, [[a, from, OUT], [a + inDur, shown], ...(b < D ? [[b - 0.2, shown, IN], [b, to]] : [])]);

// ---- timeline (seconds), exactly as in pieces/03-tiktok-home-lab-door-to-result.md
// F1 0–2.5 · F2 2.5–4.9 · F3 4.9–7.7 · F4 7.7–10.1 · F5 10.1–12.5 · F6 12.5–15.2 · F7 15.2–19.2
kf('f1', [[0, shown], [2.3, shown, IN], [2.5, hidden(-32, 0)]]);           // hook: on screen at 0.0 s, no fade-in
card('f2a', 2.5, 4.9, hidden(48, 0));
card('f2k', 2.5, 4.9, hidden(96, 0));                                       // sent: slides in right → left
card('f3a', 4.9, 7.7, hidden(48, 0));
card('f3k', 4.9, 7.7, hidden(0, 0));                                        // «نثبّت»: fixed, it doesn't travel
card('f4a', 7.7, 10.1, hidden(48, 0));
card('f4k', 7.7, 10.1, hidden(0, -44));                                     // moves down, toward the door
card('f5a', 10.1, 12.5, hidden(48, 0));
card('f5k', 10.1, 12.5, hidden(0, 44));                                     // arrives from below, like an incoming message
card('f6a', 12.5, 15.2, hidden(32, 0), undefined, 0.4);
card('f6k', 12.5, 15.2, hidden(32, 0), undefined, 0.4);                     // the slowest, calmest beat
card('f7k', 15.2, D, hidden(48, 0));
card('f7b', 15.2, D, hidden(48, 0));
card('tag', 4.9, 15.2, hidden(0, 0), hidden(0, 0));                         // series tag: with F3, leaves with F6
card('logo', 4.9, D, hidden(0, 0));                                         // logo slot: from 4.9 s to the end
// picture zone
card('bubOut', 2.5, 4.9, hidden(80, 0), hidden(0, -48));                    // your message: in R→L, then "sent" upward
card('cal', 4.9, 7.7, hidden(0, 0), hidden(0, 0));
kf('tick', [[0, { extra: 'stroke-dashoffset:150' }], [5.05, { extra: 'stroke-dashoffset:150' }, OUT], [5.35, { extra: 'stroke-dashoffset:0' }]]);
card('knocker', 0, 7.95, shown, hidden(0, 0));                              // the knocker goes with the leaf as it swings
kf('leaf', [[0, { extra: 'transform:scaleX(1)' }], [7.8, { extra: 'transform:scaleX(1)' }, 'cubic-bezier(.45,0,.2,1)'], [8.2, { extra: 'transform:scaleX(.1)' }]]); // the door opens: hinge on the left, so the light appears right → left
kf('res', [[0, hidden(0, -64)], [10.1, hidden(0, -64), OUT], [10.4, shown], [12.5, shown, OUT], [12.9, { o: 1, x: 0, y: -70 }]]);
kf('talk', [[0, hidden(0, 40)], [12.5, hidden(0, 40), OUT], [12.9, shown]]);

// ---- geometry
// Safe band: x 180–900, y 220–1420. Text right edge x 898 (2 px inside, for glyph overhang).
// Door: round-headed arch (same form as piece 02), span x 200–880 (r 340), springline 1120, apex 780, threshold 1380 (x 186–894, round caps end at 180 and 900).
// Inside it, inset 24 px: the light (blue). In front of it, the door leaf (navy, 3 px larger so no seam shows),
// hinged on the left, with a ring knocker on the right (a detail of older Baghdad front doors; a visual cue, not a claim).
const ARCH = 'M880 1380 L880 1120 A340 340 0 0 0 200 1120 L200 1380';
const INNER = 'M856 1374 L856 1120 A316 316 0 0 0 224 1120 L224 1374 Z';
const LEAF = 'M859 1374 L859 1120 A319 319 0 0 0 221 1120 L221 1374 Z';

const html = `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8">
<title>2026-W42-03 · تحليل بالبيت (video, 19.2 s)</title>
<link rel="stylesheet" href="${assets}/fonts/fonts.css">
<link rel="stylesheet" href="${assets}/tabeebx.css">
<style>
html, body { width: 1080px; height: 1920px; overflow: hidden; }
body { position: relative; background: var(--navy); }
.abs { position: absolute; }
svg.abs { left: 0; top: 0; }
/* Type: two sizes + one label. Key (pink) 104 Bold · lead (white) 64 Medium · label 44 Bold. Ratio 1.63. */
.ln { right: 182px; white-space: nowrap; text-align: right; }
.key { font-weight: 800; font-size: 104px; line-height: 1.3; color: var(--pink); }
.lead { font-weight: 500; font-size: 64px; line-height: 1.5; color: var(--white); }
.cta { font-weight: 800; font-size: 84px; line-height: 1.3; color: var(--pink); }
.sign { font-weight: 500; font-size: 52px; line-height: 1.5; color: var(--white); }
.rowA { top: 384px; }   /* lead line above the key */
.rowK { top: 476px; }   /* the pink key line always lands here */
.rowB { top: 611px; }   /* line under the key (frame 1, frame 7) */
/* Header row: series tag right, logo slot left, y 236–316 */
.tag { top: 236px; right: 182px; height: 80px; padding: 0 32px; border-radius: 40px; background: var(--blue); color: var(--navy);
  display: flex; align-items: center; font-weight: 800; font-size: 44px; line-height: 1; }
.tag span { position: relative; top: -3px; }
.logo { top: 236px; left: 180px; width: 248px; height: 80px; border: 3px dashed var(--white); border-radius: 14px;
  display: flex; align-items: center; justify-content: center; text-align: center; direction: ltr;
  font-weight: 500; font-size: 26px; line-height: 1.2; color: var(--white); }
${css.join('\n')}
</style></head><body>

<!-- the door: on screen from 0.0 s to the end -->
<svg class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="${INNER}" fill="#1B9CCE"/>
</svg>
<svg class="abs leaf" style="transform-origin:221px 0" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="${LEAF}" fill="#181943"/>
</svg>
<svg class="abs knocker" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <circle cx="796" cy="1176" r="8" fill="#1B9CCE"/>
  <circle cx="796" cy="1206" r="22" fill="none" stroke="#1B9CCE" stroke-width="8"/>
</svg>
<svg class="abs" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true">
  <path d="${ARCH}" fill="none" stroke="#1B9CCE" stroke-width="12" stroke-linejoin="round"/>
  <line x1="186" y1="1380" x2="894" y2="1380" stroke="#1B9CCE" stroke-width="12" stroke-linecap="round"/>
</svg>

<!-- F2: your message (outgoing bubble; in an Arabic chat, sent messages sit left with the tail left) -->
<svg class="abs bubOut" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"><g transform="translate(0 -20)">
  <path d="M424 1080 H676 A44 44 0 0 1 720 1124 V1212 A44 44 0 0 1 676 1256 H400 L376 1280 L380 1236 V1124 A44 44 0 0 1 424 1080 Z" fill="#181943" stroke="#1B9CCE" stroke-width="10" stroke-linejoin="round"/>
  <g stroke="#FFFEFF" stroke-width="12" stroke-linecap="round"><line x1="672" y1="1132" x2="440" y2="1132"/><line x1="672" y1="1168" x2="472" y2="1168"/><line x1="672" y1="1204" x2="560" y2="1204"/></g>
</g></svg>

<!-- F3: the appointment (calendar, tick drawn in) -->
<svg class="abs cal" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"><g transform="translate(0 -20)">
  <rect x="404" y="1024" width="272" height="252" rx="28" fill="#181943" stroke="#1B9CCE" stroke-width="10"/>
  <line x1="404" y1="1092" x2="676" y2="1092" stroke="#1B9CCE" stroke-width="10"/>
  <g stroke="#1B9CCE" stroke-width="12" stroke-linecap="round"><line x1="470" y1="1000" x2="470" y2="1046"/><line x1="610" y1="1000" x2="610" y2="1046"/></g>
  <path class="tick" d="M488 1184 L524 1220 L596 1144" fill="none" stroke="#FFFEFF" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="150"/>
</g></svg>

<!-- F5: the result arrives (incoming file bubble; incoming sits right with the tail right). Nothing legible on it. -->
<svg class="abs res" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"><g transform="translate(0 -20)">
  <path d="M380 1040 H700 L726 1016 L722 1060 V1190 A40 40 0 0 1 682 1230 H380 A40 40 0 0 1 340 1190 V1080 A40 40 0 0 1 380 1040 Z" fill="#FFFEFF"/>
  <path d="M610 1076 H660 A10 10 0 0 1 670 1086 V1184 A10 10 0 0 1 660 1194 H588 A10 10 0 0 1 578 1184 V1108 Z" fill="none" stroke="#181943" stroke-width="8" stroke-linejoin="round"/>
  <path d="M610 1076 V1108 H578" fill="none" stroke="#181943" stroke-width="8" stroke-linejoin="round"/>
  <g stroke="#181943" stroke-width="14" stroke-linecap="round"><line x1="534" y1="1120" x2="394" y2="1120"/><line x1="534" y1="1156" x2="442" y2="1156"/></g>
</g></svg>

<!-- F6: a doctor explains it (speech balloon under the result) -->
<svg class="abs talk" width="1080" height="1920" viewBox="0 0 1080 1920" aria-hidden="true"><g transform="translate(0 -20)">
  <rect x="350" y="1190" width="280" height="110" rx="55" fill="#FFFEFF"/>
  <path d="M372 1278 L336 1330 L420 1292 Z" fill="#FFFEFF" stroke="#FFFEFF" stroke-width="4" stroke-linejoin="round"/>
  <g fill="#181943"><circle cx="430" cy="1245" r="13"/><circle cx="490" cy="1245" r="13"/><circle cx="550" cy="1245" r="13"/></g>
</g></svg>

<!-- header -->
<div class="abs tag"><span>شوف بعينك</span></div>
<div class="abs logo">[LOGO: official file needed]</div>

<!-- words, exactly as in the piece file -->
<div class="f1">
  <p class="abs ln key rowK">تحليل بالبيت؟</p>
  <p class="abs ln lead rowB">هيچ يصير.</p>
</div>
<p class="abs ln lead rowA f2a">تدزلنا</p>
<p class="abs ln key rowK f2k">رسالة واتساب،</p>
<p class="abs ln lead rowA f3a">ونثبّتلك</p>
<p class="abs ln key rowK f3k">الموعد.</p>
<p class="abs ln lead rowA f4a">ونجيك</p>
<p class="abs ln key rowK f4k">لحد البيت.</p>
<p class="abs ln lead rowA f5a">والنتيجة توصلك</p>
<p class="abs ln key rowK f5k">بالواتساب.</p>
<p class="abs ln lead rowA f6a">ودكتور</p>
<p class="abs ln key rowK f6k">يشرحها إلك.</p>
<p class="abs ln cta rowK f7k" style="top:488px">دزها لكروب العائلة.</p>
<p class="abs ln sign rowB f7b" style="top:616px">لا تصدگنا. شوف بعينك.</p>

</body></html>
`;
writeFileSync(path.join(here, 'video.html'), html);
console.log('wrote video.html');

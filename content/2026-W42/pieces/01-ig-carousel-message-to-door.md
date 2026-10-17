---
id: 2026-W42-01
channel: instagram-carousel   # + facebook cross-post, same slot, same slides (caption below)
style: A
goal: bookings
publish: Fri 23 Oct 20:30     # brief Q6-A default; if Q6-B: Tue 20 Oct 20:30
status: draft
---

**Needs Yaqoob:** Q2-a (slide 5: keep or delete) · Q2-b (slide 7: keep or delete) · slide 4 facts: who replies to a booking message and what we ask (optional: a reply time, only if you want to promise one) · Q3 (cover `series` line and slide 8 `closing` line: keep only if this piece folds into the "see for yourself" trust campaign) · Q6 (slot) · the wa.me link for the Facebook caption. Guard blocks this piece while any `[bracket]` is unfilled.

<!-- principle (marketing-psychology): Status-quo bias. Each step makes the switch from "clinic + queue" to "message + home visit" feel small and safe. Carousel shape: the brief's own 8-slide plan (closest vendored framework: E, Demo Walkthrough). -->

## Copy (Iraqi dialect)

Line keys follow the trust campaign's `campaign.json` (`hook`, `series`, `label`, `text`, `small`, `cta`, `closing`). ` / ` is a line break on screen; `*stars*` mark the one pink group per slide. Step numbers assume both pending slides stay; renumber if one is deleted.

### Slide 1 · cover

PENDING Q3-A only (delete the series line otherwise):

series: [شوف بعينك]

hook: شنو يصير بعد ما *تحجز؟*

small: زيارة بالبيت ببغداد، خطوة بخطوة.

### Slide 2 · shared pain

text: كلنا مرّينا بيها: / طريق، وسرة طويلة، / وانتظار ما تعرف *شگد يطول.*

### Slide 3 · step 1

label: ١

text: ويا TabeebX، / كلشي يبدي *برسالة واتساب.*

### Slide 4 · step 2 (two facts missing)

label: ٢

text: يرد عليك [منو يرد]، / يسألك [شنو نسأل]، / ونتفق وياك على *الموعد.*

### Slide 5 · step 3 (PENDING Q2-a: delete this slide unless the promise is still kept on every visit)

label: ٣

text: [تعرف *اسم وصورة* اللي جايك / قبل لا يدگ الباب.]

### Slide 6 · step 4

label: ٤

text: والزيارة *ببيتك:* / دكتور، تمريض، تحليل، / أشعة، سونار، تخطيط قلب، / وعلاج طبيعي.

small: بلا سرة ولا طريق.

### Slide 7 · step 5 (PENDING Q2-b: delete this slide unless the follow-up call is still kept)

label: ٥

text: [وبعد الزيارة، / نتصل بيك خلال *٢٤ ساعة* / نتطمن عليك.]

### Slide 8 · proof + CTA

small: مرخّصين من وزارة الصحة العراقية

text: تحتاج زيارة لبيتك، / أو لبيت أهلك؟

cta: *رابط الواتساب بالبايو.*

PENDING Q3-A only (delete the closing line otherwise):

closing: [لا تصدگنا. شوف بعينك.]

## Caption

Instagram:

شنو يصير من تدزلنا رسالة واتساب، لحد ما نوصل لباب بيتك؟

حطّينا الخطوات بهالبوست، وحدة وحدة.

نجيك للبيت ببغداد: دكتور، تمريض، تحليل، أشعة، سونار، تخطيط قلب، وعلاج طبيعي.

تحتاج زيارة لبيتك أو لبيت أهلك؟

رابط الواتساب بالبايو.

Facebook cross-post (same slides; Facebook has no bio link, so the last line changes):

شنو يصير من تدزلنا رسالة واتساب، لحد ما نوصل لباب بيتك؟

حطّينا الخطوات بهالبوست، وحدة وحدة.

نجيك للبيت ببغداد: دكتور، تمريض، تحليل، أشعة، سونار، تخطيط قلب، وعلاج طبيعي.

تحتاج زيارة لبيتك أو لبيت أهلك؟ دزلنا رسالة واتساب:

[wa.me link]

## Variant hook

For testing against the slide 1 hook (statement instead of question):

hook: من رسالة لحد *باب بيتك.*

## Visual brief

Style A: flat icons and typography only. No people, no photos, no AI-generated imagery, so no AI label is needed and no Canva AI credits are used (0 of about 20 a month).

**Canvas:** 8 PNG slides, 1080×1350 (Instagram feed 4:5), right-to-left with right-aligned text. The Facebook cross-post uses the same 8 files.

**Colour roles, identical on every slide:**

- Background: Navy #181943, flat. No gradient, no photo.
- Text: #FFFEFF (white).
- Pink #EE396B: the `*starred*` group of the slide, and nothing else. It sits in `hook`, `text` or `cta`, always at 72 px Bold or larger (pink on navy is only 4.3:1, so it never goes on small text). No pink in icons, badges, dividers or arrows.
- Blue #1B9CCE: icon strokes, dashed paths, the swipe chevron and the `series` line (blue on navy is 5.3:1).
- Step badge (slides 3 to 7): #FFFEFF circle, 140 px across, with the `label` digit in navy Cairo Bold at 84 px, top right (x 850 to 990, y 110 to 250).
- No logo on any slide. See producer notes.

**Type:** Cairo only. Cairo Bold: `hook` 112 px on the cover, `text` 72 px, `cta` 80 px. Cairo Medium: `small` 42 px, `series` 44 px, `closing` 52 px. Line height 1.4 (Arabic in Cairo needs it). Every ` / ` in the copy is a hard line break. Where the copy has no break (the cover `hook`, the `cta`), wrap into balanced lines and keep the starred group on one line. If a line is wider than 900 px, step the size down in 4 px steps to a floor of 60 px for `text`; below that, send it back to the Copywriter instead of shrinking.

**Layout grid (px):** margin 90 left and right, text right-aligned at x=990.

- Cover (slide 1): keep everything inside y=135 to 1215. `series` y=150; graphic y=230 to 620; `hook` y=680 to 1010; `small` y=1080 to 1140. No swipe chevron on the cover.
- Slides 2 to 7: graphic 360 px square, centred, y=270 to 630; `text` y=720 to 1130; `small` (slide 6 only) y=1160 to 1220; swipe chevron (Blue, pointing left, the reading direction) at bottom left, x=90, y=1240 to 1290.
- Slide 8: `small` (the licence line) y=130; graphic y=250 to 560; `text` y=640 to 900; `cta` y=960 to 1080; `closing`, if kept, y=1180 to 1240. No chevron.

**Graphics.** Blue #1B9CCE line icons, one family: 8 px stroke, rounded caps and joins, no fills. The `art` id is used in the job spec.

| Slide | `art` id | Drawing |
|---|---|---|
| 1 cover | `path-bubble-door` | A dashed path (12 px dash, 16 px gap) from a plain speech bubble at top right, curving down to a front door at bottom left. The bubble is generic, not the WhatsApp logo. Drawn 800 by 390 px. |
| 2 pain | `chairs-clock` | Three empty waiting-room chairs in a row, a wall clock above them. |
| 3 step 1 | `phone-bubble` | Phone outline with one speech bubble on its screen. |
| 4 step 2 | `bubbles-calendar` | Two speech bubbles facing each other, and a calendar page with a tick. |
| 5 step 3 | `id-badge` | ID badge: rounded rectangle with a blank circle and two text lines. Blank circle only. A head-and-shoulders shape would echo the logo figure. |
| 6 step 4 | `house-pulse` | House outline with a pulse (heartbeat) line running through it. |
| 7 step 5 | `handset-arcs` | Phone handset with three signal arcs. |
| 8 close | `path-bubble-door-small` | The slide 1 path, drawn small (240 px), as a closing mark. |

**Never on any slide:** syringe, needle, test tube, blood drop, hospital bed, pills, any body or person shape; the WhatsApp logo or its green; the Ministry of Health emblem or any official logo (the licence is text only).

**Producer notes**

- Logo (for Yaqoob [confirm]): the logo figure is pink and blue. If it counts as a slide's pink element, every slide with a starred group would have two, so no logo is placed. If Yaqoob rules the logo exempt, add it at 96 px high, bottom right, on slides 2 to 8.
- The cover is square-safe on purpose (everything inside y=135 to 1215): the Instagram grid and WhatsApp previews can crop, and piece 04 reuses this cover unchanged.
- Deleting slide 5 or 7 needs no re-layout; each slide stands alone. The step digits renumber in the Copywriter's text, not here.
- The brackets in `series`, slide 4, slide 5, slide 7 and `closing` are pending facts. Never render with a bracket on screen.

## Production

**Tool:** style A, code-rendered motion system. **Rendering happens in the `yaqoobalshaikhli/EMR` repo (`marketing/motion`), not in this repo.** This spec was written without access to `marketing/motion/content/campaign.json`. Only the template name `carousel` (from the Creative Producer definition) and the line keys (`hook`, `series`, `label`, `text`, `small`, `cta`, `closing`, as used in the Copy section and the approved lines) are known. Every other field is a guess at the same shape and is listed in `_unsure`. Keys that start with `_` are for reviewers: strip them before copying the job into `campaign.json`.

**Blocked until** every `[bracket]` is filled or its slide or key is deleted: Q3 (`series`, `closing`), slide 4 facts, Q2-a (slide 5), Q2-b (slide 7). The Arabic strings below are copied verbatim from the Copy section above, which stays the source of truth: if the copy changes, regenerate this spec.

```json
{
  "_unsure": [
    "Known: template \"carousel\" (creative-producer definition) and the line keys hook, series, label, text, small, cta, closing (Copy section, approved lines).",
    "Guessed: id and its naming, size, dir, publish, status, the \"slides\" array and \"n\", art (icon ids from the Visual brief; the real template may have no icon slot), pending.",
    "If the template has no icon slot, the icons are separate SVG assets in the EMR repo; where they live is unknown."
  ],
  "id": "2026-W42-01",
  "template": "carousel",
  "size": {
    "w": 1080,
    "h": 1350
  },
  "dir": "rtl",
  "publish": "Fri 23 Oct 20:30",
  "status": "blocked: brackets unfilled (Q3, slide 4 facts, Q2-a, Q2-b)",
  "slides": [
    {
      "n": 1,
      "series": "[شوف بعينك]",
      "hook": "شنو يصير بعد ما *تحجز؟*",
      "small": "زيارة بالبيت ببغداد، خطوة بخطوة.",
      "art": "path-bubble-door",
      "pending": [
        "Q3-A: delete the series key unless the piece folds into the trust campaign"
      ]
    },
    {
      "n": 2,
      "text": "كلنا مرّينا بيها: / طريق، وسرة طويلة، / وانتظار ما تعرف *شگد يطول.*",
      "art": "chairs-clock"
    },
    {
      "n": 3,
      "label": "١",
      "text": "ويا TabeebX، / كلشي يبدي *برسالة واتساب.*",
      "art": "phone-bubble"
    },
    {
      "n": 4,
      "label": "٢",
      "text": "يرد عليك [منو يرد]، / يسألك [شنو نسأل]، / ونتفق وياك على *الموعد.*",
      "art": "bubbles-calendar",
      "pending": [
        "facts: who replies and what we ask (inline brackets in text)"
      ]
    },
    {
      "n": 5,
      "label": "٣",
      "text": "[تعرف *اسم وصورة* اللي جايك / قبل لا يدگ الباب.]",
      "art": "id-badge",
      "pending": [
        "Q2-a: delete the whole slide unless the promise is still kept on every visit"
      ]
    },
    {
      "n": 6,
      "label": "٤",
      "text": "والزيارة *ببيتك:* / دكتور، تمريض، تحليل، / أشعة، سونار، تخطيط قلب، / وعلاج طبيعي.",
      "small": "بلا سرة ولا طريق.",
      "art": "house-pulse"
    },
    {
      "n": 7,
      "label": "٥",
      "text": "[وبعد الزيارة، / نتصل بيك خلال *٢٤ ساعة* / نتطمن عليك.]",
      "art": "handset-arcs",
      "pending": [
        "Q2-b: delete the whole slide unless the follow-up call is still kept"
      ]
    },
    {
      "n": 8,
      "small": "مرخّصين من وزارة الصحة العراقية",
      "text": "تحتاج زيارة لبيتك، / أو لبيت أهلك؟",
      "cta": "*رابط الواتساب بالبايو.*",
      "closing": "[لا تصدگنا. شوف بعينك.]",
      "art": "path-bubble-door-small",
      "pending": [
        "Q3-A: delete the closing key unless the piece folds into the trust campaign"
      ]
    }
  ]
}
```

**Render steps**

1. Resolve the blockers above, then add the job to `campaign.json` in the EMR repo and render all 8 slides to 1080×1350 PNG.
2. Name the files `2026-W42-01-s01.png` to `-s08.png` (renumber if a slide is deleted) [naming and output folder unsure].
3. Check each slide before Guard sees it: exactly one pink group, text inside the margins, Eastern Arabic digits, Cairo loaded (no fallback font), the cover readable at 300 px wide, none of the "never on any slide" items.
4. Send Yaqoob the 8 files as a contact sheet with Guard's verdict. Nothing is posted until he approves.

**If the EMR render cannot be run:** build the same 8 slides in Canva Free. Use a custom size of 1080×1350 px (not the Resize tool, which is a Pro feature), pick Cairo from the font list [check it is there], and enter the four hex codes by hand [unsure whether Canva Free keeps a brand kit]. Use only elements without the crown mark (a crown means paid) and no Magic or AI tools. The layout table above applies. Cost: 0.

**AI credits used:** 0.

## Dialect doubts

- «يبدي» (slide 3, "it starts"): I believe Baghdad says «يبدي/نبدي», but it is also Levantine. If it reads Levantine, use «تبدي» or rephrase as «أول خطوة: رسالة واتساب.»
- «ونتفق وياك على الموعد» (slide 4): natural to me, but Baghdad may say «نثبّتلك موعد» or «نحجزلك موعد». Pick whichever your WhatsApp staff actually say.
- «تمريض» (slide 6, caption): a service noun that reads slightly formal in a spoken list. Avoided «ممرض/ممرضة» on purpose because the gender and district coverage of nurses is still Q2-c.
- «سونار» for ultrasound (slide 6, caption): what I expect Baghdad families to say; «إيكو» is the alternative.

## Copy check

Linter final line (2026-10-17): `Copy check passed: 29 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` No warnings to justify. Per-slide totals checked by hand (the linter counts per line): at most 19 words and exactly one pink group per slide.

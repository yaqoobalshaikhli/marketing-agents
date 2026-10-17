---
id: 2026-W42-02
channel: instagram-story
style: A
goal: awareness
publish: Fri 23 Oct 10:00     # brief Q6-A default; if Q6-B: Tue 20 Oct 10:00
status: guard-pass
---

**Needs Yaqoob:** Q6 (slot) · the wa.me link for the frame 2 link sticker. No Q2 fact is stated in this piece.

<!-- principle (marketing-psychology): Commitment & consistency. A one-question answer is a small first step; frame 2 offers the next one (a WhatsApp message) to anyone ready now. -->

## Copy (Iraqi dialect)

Two story frames. Line keys follow the trust campaign's `campaign.json`. ` / ` is a line break on screen; `*stars*` mark the one pink group per frame. The question asks about the service, never about the viewer's health (brief, piece 02).

### Frame 1 · question box

label: سؤال

question: شنو أكثر شي تحب تعرفه / قبل لا يجيك دكتور *للبيت؟*

small: اكتب سؤالك، بلا أسماء ولا تفاصيل صحية.

### Frame 2 · WhatsApp link

text: وإذا تريد تحجز زيارة هسه: / *دزلنا رسالة واتساب.*

sticker: احجز بالواتساب

link: [AT POSTING: wa.me link]

## Caption

None: Instagram stories have no caption.

## Variant hook

Not applicable: a story is not a feed piece (copywriter.md, step 6).

## Visual brief

Style A: typography only. No imagery, no people, no AI, so no AI label and no Canva AI credits (0 used).

**Canvas:** two story frames, 1080×1920, right-to-left, right-aligned text. Flat Navy #181943 on both. Keep text and key shapes inside x=90 to 990, y=250 to 1670 [unsure: 250 px top and bottom is Meta's story guidance as I remember it, not checked; the same 250 px also keeps clear of the reply bar].

**Colour roles (same rules as piece 01):** text #FFFEFF; Pink #EE396B only on the `*starred*` group, at 76 px Bold or larger (pink on navy is 4.3:1, large text only); Blue #1B9CCE for the label and the arrow; nothing else pink; no logo (see piece 01 producer notes).

**Frame 1, question box**

- `label`: Cairo Medium 48 px, Blue, inside a dashed Blue rounded outline (echoes the dashed highlight icons). Right edge x=990, y=300 to 390.
- `question`: Cairo Bold 80 px, #FFFEFF, starred group Pink. Breaks as in the copy. y=450 to 800, three lines at most.
- `small`: Cairo Medium 42 px, #FFFEFF. y=880 to 970.
- y=1060 to 1560 stays empty navy. The native Question sticker goes here; Yaqoob adds it in the Instagram app.

**Frame 2, WhatsApp link**

- `text`: Cairo Bold 76 px, #FFFEFF, starred group Pink. y=400 to 680.
- Blue down arrow, line icon in the same family as piece 01 (8 px stroke, rounded), 160 px, centred, y=760 to 920, pointing at the sticker.
- y=980 to 1180 stays empty navy. The native link sticker goes here.

**Sticker colours (the second-pink trap).** Instagram stickers come in colour variants. Use the white or light variant for the link sticker and a white or blue variant for the Question sticker. Never a pink variant: it would be a second pink element in the frame.

**Motion:** lines fade up 0.4 s apart, then hold. No loop, no flashing [unsure what `story-question` does by default; keep its default if it already animates].

## Production

**Tool:** style A, code-rendered motion system. **Rendering happens in the `yaqoobalshaikhli/EMR` repo (`marketing/motion`), not in this repo.** As in piece 01, `campaign.json` could not be read in this run. Known: the template names from the Creative Producer definition, and the line keys from the Copy section and the approved lines. Everything else is a guess at the same shape and is listed in `_unsure`. Keys that start with `_` are for reviewers: strip them before copying the jobs into `campaign.json`.

**Template choice**

- Frame 1 uses `story-question`. Its `label` and `question` keys match the approved question-box story, so this is the safest field in the spec.
- Frame 2 has no matching template: none of the seven is a link frame. `story-teaser` is the closest (it has `text`), but the approved teasers also carry a `kicker` that this frame does not have [unsure whether `kicker` is required]. If the renderer needs one, ask Yaqoob. Do not invent a kicker.
- The `native` block is not rendered. The sticker text and the link are added in the Instagram app when Yaqoob posts. The renderer must ignore that block.

**Blocked until:** the wa.me link is supplied (`native.link`, needed at posting time, not at render time). The frames themselves have no brackets and can be rendered now.

```json
{
  "_unsure": [
    "Known: template names (creative-producer definition) and the line keys label, question, small, text (Copy section, approved lines 02d and 01).",
    "Guessed: id and its naming, size, dir, publish, the \"frames\" array and \"frame\", which template frame 2 should use (no listed template is a link frame; story-teaser is the closest), the \"native\" block.",
    "Unsure whether story-teaser needs a kicker; none is supplied."
  ],
  "id": "2026-W42-02",
  "size": {
    "w": 1080,
    "h": 1920
  },
  "dir": "rtl",
  "publish": "Fri 23 Oct 10:00",
  "frames": [
    {
      "frame": 1,
      "template": "story-question",
      "label": "سؤال",
      "question": "شنو أكثر شي تحب تعرفه / قبل لا يجيك دكتور *للبيت؟*",
      "small": "اكتب سؤالك، بلا أسماء ولا تفاصيل صحية."
    },
    {
      "frame": 2,
      "template": "story-teaser",
      "text": "وإذا تريد تحجز زيارة هسه: / *دزلنا رسالة واتساب.*",
      "native": {
        "sticker": "احجز بالواتساب",
        "link": "[wa.me link]"
      }
    }
  ]
}
```

**Output:** one 1080×1920 PNG still per frame is preferred; a 5 to 7 s MP4 if the template only renders video [unsure]. Files `2026-W42-02-f1` and `-f2` [naming unsure].

**Posting (Yaqoob, by hand)**

1. Frame 1: add the Question sticker in a non-pink variant. Set the sticker's own prompt to the `label` word so the question is not printed twice [unsure how the trust campaign did it].
2. Frame 2: add a link sticker with the text from `native.sticker` and the wa.me link, in a non-pink variant.
3. Afterwards, read the answers in the app and pass on only the themes. Copy no answer, name or handle into the repo or any tool.

**Checks before Guard:** one pink group per frame, no pink in the stickers, empty sticker zones really empty, Cairo loaded.

**AI credits used:** 0.

## Dialect doubts

- «تحب تعرفه» (frame 1): Baghdad also says «تريد تعرفه». I kept «تحب» because the approved story «شنو أكثر شي / تحبه بالعراق؟» uses it.
- «بلا أسماء ولا تفاصيل صحية» (frame 1, small line): «تفاصيل صحية» sounds a little written. A spoken alternative is «لا تكتب اسمك ولا شي عن صحتك.» This line is my own addition, to keep names and health details out of the answers; delete it if you think it costs answers.
- «احجز بالواتساب» (sticker): «احجز» reads close to MSA; «احچي ويانا بالواتساب» is the warmer option if it fits the sticker.

## Copy check

Linter final line (2026-10-17): `Copy check passed: 5 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` No warnings to justify. Per-frame totals checked by hand (the linter counts per line): at most 18 words and exactly one pink group per frame.

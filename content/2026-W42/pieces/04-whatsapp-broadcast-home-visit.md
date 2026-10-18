---
id: 2026-W42-04
channel: [whatsapp-broadcast]             # the existing opted-in list on the TabeebX WhatsApp Business number (decision #54)
style: A                                  # reuses piece 01's cover; leave out of the style comparison (brief)
goal: [bookings]
publish: Wed 21 Oct [AT POSTING: send time, with WhatsApp answered for the 3 hours after it; proposed 11:00]   # brief's "review Mon 19" slot (decision #64)
status: draft
consents: []                              # no people
---
Needs Yaqoob: [PENDING Q4-optout: who removes anyone who replies «توقف» or STOP, and how soon? A) you, from the broadcast list, the same day and before any next broadcast; B) whoever answers WhatsApp, the same day, and they tell you; C) other: ___]. This doesn't change the copy, but the opt-out line promises it, so answer before sending. Not blocking the copy: the official logo file (it sits on piece 01's cover); the send time is an at-posting value.
Psychology: Hick's law. One idea, then one action with four one-word replies, so answering takes a single word.

## Copy (Iraqi dialect)

> One WhatsApp message, sent by Yaqoob by hand from WhatsApp Business to the opted-in broadcast list only (decision #54), as the caption of piece 01's cover image. The frames below are the message's paragraphs, in order: leave one blank line between them. Each keyed line is one line of the message; the keys are labels, not text to send. 59 words in total (brief: under about 60).
>
> Changes from the first draft: the name-and-photo line is gone (decisions #59, #63); the reply line no longer depends on who answers; the call within ٢٤ ساعة (#52 b) and male and female nurses (#52 c) are in; Guard's dialect notes are applied («وتريد زيارة للبيت», «ممرض، ممرضة», STOP beside «توقف»); the campaign sign-off bridges to the reply (#53).

### Frame 1 · paragraph 1: greeting and question

greet: هلا بيك، وياك TabeebX.

ask: شنو يصير من تدزلنا رسالة وتريد زيارة للبيت؟

### Frame 2 · paragraph 2: the steps

steps: تگولنا شنو تحتاج، ونثبّتلك الموعد، ونجيك لحد البيت ببغداد، بلا سرة ولا طريق.

### Frame 3 · paragraph 3: after the visit, and the sign-off

call: وبعد الزيارة، نتصل بيك خلال ٢٤ ساعة نتطمن عليك.

closing: لا تصدگنا. شوف بعينك.

### Frame 4 · paragraph 4: the one action

cta: تحتاج زيارة؟ رد على هالرسالة بكلمة وحدة:

options: دكتور، ممرض، ممرضة، أو تحليل.

### Frame 5 · paragraph 5: opt-out

optout: وإذا ما تريد توصلك رسائلنا، اكتبلنا «توقف» أو STOP.

## Caption

None separate: the message above is the caption of the cover image (one message, not two).

## Copy check

Checker's last line (2026-10-18): `Copy check passed: 8 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` No open placeholders in the copy. The one pending item (who handles opt-outs) is in the Needs Yaqoob line because it is about sending, not wording. No warnings to justify.

Per paragraph, with the checker's tokenizer: 12, 13, 13, 12, 9 = 59 words. No pink in a text message; the image's pink is on piece 01's cover.

Facts, each against its source:
- Opted-in list, sent by Yaqoob: decision #54.
- Booking by WhatsApp message: decision #13.
- Home visit in Baghdad, and doctor, nurse and lab as services: `tabeebx-brand`.
- Male and female nurses: decision #52 (c).
- Call within ٢٤ ساعة after the visit: decision #52 (b).
- Not stated, by design: the visitor's name and photo (#59, #63); who replies or how fast; Health 360.

## Design

**Round 1** · Designer, 2026-10-18 · Design Critic: **not yet scored** (round 1 goes to the critic next).

**The one idea:** it all starts with your message. The image asks the campaign's question («شنو يصير من تدزلنا رسالة؟»), and the message below answers it step by step, then asks for one reply. The receiver should recognise Tuesday's carousel, read the steps and reply with one word.

**What it is:** piece 01's cover, re-laid out as a **square** for WhatsApp, not cropped. This follows the brief's "01's cover slide, resized". The words, type sizes, header row, pink group and route are the same. Two things change:
- **1080×1080 instead of 4:5.** In the phone check (`checks/phone-preview.png`), the square image and the whole message fit on one 1080×2340 screen, with the bubble ending 71 px above the input bar. With the 4:5 cover, the bubble runs 125 px past the input bar, and the opt-out paragraph needs a scroll. A square image also has no crop for WhatsApp to apply.
- **Your bubble is lit** (solid blue, navy dots). This is piece 01's slide 7 state: "your message, the start of the route". The receiver is already in the thread and the action is a reply, so the first station is lit, and it echoes the pink «رسالة؟» above it. Nothing is travelled, and no step numbers are added.

**References learned from (`design-studio/references/library.md`):**
- **The New York Times on Instagram slides:** "For WhatsApp, make one self-contained image rather than a cut-down carousel slide." The square card stands alone: question, promise («خطوة بخطوة») and the whole route are on it, and the message carries the steps.
- **Piece 01 of this pack:** the same grid, header row, route band and logo slot, so Wednesday's broadcast reads as Tuesday's carousel.

**Three thumbnails** (`thumbs/contact-sheet.png`, right to left):
- (a) Square cover, your bubble lit: **chosen.** It keeps the series' question and symbol, the image asks, the text answers and the reply ends it, in that order.
- (b) Reply card: the copy's `cta` and `options` lines as the image. It's a strong Hick's-law poster, but the reader meets the action before knowing what happens, then reads it again word for word in paragraph 4. It also loses the link to Tuesday's carousel.
- (c) Route as hero, hook at 88: at 1.1× the route breaks the 72 px side margins, and in a chat bubble it reads as four icons with a smaller question.

**Grid and type:**
- 12 columns, 72 px margins on all four sides, 24 px gutters, 8 px unit (piece 01's).
- Rows:
  - header: 72–184. Logo slot 304×112 on the left; series pill 88 tall on the right, centred on the slot.
  - hook: 224–524.
  - sub-line: 560–643.
  - route: 742–1008, ground line at y 980.
- Moved from the cover: header up 112, hook and sub-line up 120, route up 140. Gaps: header to hook 40 (cover 48), sub-line to route 99 (cover 119).
- Measured content box:
  - top 72, bottom 72: the confirm disc's edge.
  - sides 66: the two bubbles' 12 px strokes are centred on the 72 px line, as in piece 01.
  - The ground line ends 92 px above the foot, so the bottom margin is slightly deeper, which reads as balanced.
- Cairo only, no tracking. Hook 120 Bold, sub-line 52 Medium, series label 48 Bold (navy on blue, 5.3:1).
- **Pink:** one group, «رسالة؟», 120 Bold on navy (4.3:1, display size), away from all blue.

**Pixel check** on `whatsapp-image.png`:
- 98.6% of pixels are exact palette colours; the rest is anti-aliasing.
- Pink pixels sit only inside the hook group's box (x 142–496, y 406–522). Pink-like pixels anywhere else: 0.

**Words:** a script compared the image's three strings with piece 01's `### Frame 1` (series, hook, small). All three are identical. `build.mjs` reads them from piece 01's cover file and stops if they change. The copy checker on this file still passes: `Copy check passed: 8 Arabic line(s), 0 warning(s), 0 correction(s) loaded.`

**Files** in `design/2026-W42-04/`:
- `whatsapp-image.png`: **the file to send**, 1080×1080, with the message as its caption.
- Sources: `whatsapp-image.html`, `whatsapp.css` and `build.mjs`.
  - `build.mjs` takes the words from piece 01's `slide-01.html` and the route from piece 01's `slide-07.html`.
  - **If piece 01 changes in its critic rounds**, rebuild before sending: `node build.mjs`, then `node .claude/skills/design-studio/scripts/render.mjs still whatsapp-image.html whatsapp-image.png --w 1080 --h 1080`.
- `checks/phone-preview.png`: **not for sending.** The message as received at phone size: the 4:5 cover beside this square, in a neutral grey chat mock, not WhatsApp's UI. The caption is set in Cairo because it's the only Arabic font here; the phone uses its own font, so its line breaks will differ a little.
- `thumbs/`: the three compositions and the contact sheet. **Not for sending.**

**Open items (not blocking):**
1. **Fit on one screen.** The 71 px to spare is about one line. With a larger phone font, the opt-out line may still need a scroll; step 1 of Sending checks this.
2. **Logo.** As in piece 01: the slot `[LOGO: official file needed]` is top left. The standard lockup's navy wordmark disappears on navy, so Yaqoob needs to send a reversed (white wordmark) lockup or approve a white plate behind it. The logo is never redrawn.
3. **Optional, for the Copywriter (formatting only, no word changes):** WhatsApp bold (`*…*`) on paragraph 4's `cta` line would make the one action the only bold line in the message. It isn't applied.
4. **Fallback:** if Yaqoob would rather send exactly the carousel's file, `design/2026-W42-01/slide-01.png` still works, at the cost of the scroll above.

Sending (Yaqoob, by hand, from WhatsApp Business):

1. Send `whatsapp-image.png` with the message to your own number first. On the phone, check that the image and all five paragraphs read after WhatsApp's compression, and that the opt-out line is visible without scrolling, or close to it.
2. Send it as one message (image plus caption), to the opted-in broadcast list only.
3. The list and every reply stay on the phone: not in this repo, not in any tool (CLAUDE.md rule 6).
4. Log each booking that follows in `data/bookings-log.csv`, with the answer to «منين سمعت بينا؟».

## Dialect doubts

- «ونثبّتلك الموعد» (frame 2): same doubt as piece 01. «نحجزلك موعد» is the alternative.
- «توقف» (frame 5): an MSA imperative; spoken Baghdadi would say «وگّف» or «بس». As an opt-out keyword the MSA form is less ambiguous, so I kept it, with STOP beside it. Change the word if you prefer another.

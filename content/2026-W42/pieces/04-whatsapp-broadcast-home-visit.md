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

**Round 3** · Designer, 2026-10-18 · Round 2: Design Critic **REVISE**, average 7.45, lowest 6.5 (Glaser), `design-review/2026-W42-04-r2.md`. Round 1 was REVISE 6.95. Round 3 goes to the critic next; it is the last round before escalation.

**The one idea:** it all starts with your message. The image asks the campaign's question («شنو يصير من تدزلنا رسالة؟») and shows the route from your lit message to the door. The receiver should recognise Tuesday's carousel, see that one message starts it, and reply with one word.

**References learned from (`design-studio/references/library.md`):**
- **The New York Times on Instagram slides:** "For WhatsApp, make one self-contained image rather than a cut-down carousel slide." The card carries its own logo, because a forwarded broadcast loses the sender's name.
- **Piece 01's round-3 cover:** the same type sizes and weights, logo, header row and route band, so Wednesday's broadcast reads as Tuesday's carousel.

**What changed in round 3 (the critic's top 3, in order):**
1. **Cut the repeated question (Copywriter): not done here.** The Designer doesn't edit the Arabic, and no Copywriter session could be reached in this run (no other session was running). The request is open item 1. The left phone in `checks/phone-preview.png` shows the result as a labelled proposal, not approved copy.
2. **Poster scale and one clear type step (Designer): done.**
   - Piece 01's round 3 already made the change in `carousel.css` (cover hook 136, sub-line 48). This image follows it. `build.mjs` still stops if a size, weight, line-height, logo rule or row move drifts from piece 01.
   - **Hook:** 120 → 136 px. Line 2's ink now runs x 85–997, which is 912 of the 936 px measure (round 2: about 809). «رسالة؟» grows to 17,618 pink pixels, 2.8 times the logo figure's 6,236 (round 2: 2.2 times).
   - **Sub-line:** 52 → 48 px, the same size as the pill label. The image now has two type sizes, 136 and 48 (2.83:1, the same as piece 01's cover).
   - **Sub-line row, re-planned for the square:**
     - At the cover's spacing (top block up 112, sub-line top 608), the sub-line sat as close to the band as to the hook: ink gaps 67 below and 60 above. That reads as a line between groups.
     - So the sub-line moves up 16 px more than the top block (box top 592, on the unit), and it groups with the hook. Ink gaps: hook to sub-line 44, sub-line to band 81.
     - The critic's budget expected about 59 px from the sub-line to the arch apex. The square keeps 81 px clear between them (round 2: 100).
   - **Band:** it is still piece 01's slide 7 band, so it now carries piece 01's round-3 lit bubble. "Your message" is drawn at 1.15× and grown about its ground point, with its ink top at y 768. The road dot that sat 9 px from the door's threshold (x 548) is gone, as in piece 01.
   - **Rows:** row tops and the ground line are on the 8 px unit: 72, 184, 232, 592, 744 (apex), 976 (ground). Box bottoms follow from the line-heights.
3. **Give the action an anchor (Copywriter, formatting only): not done here.** This is open item 1, part b. The phone check now shows WhatsApp `*bold*` as bold, so it will follow the copy once the Copywriter applies it.

**Kept from round 2:**
- The words on the image: piece 01's `### Frame 1`, checked by `build.mjs`.
- The official on-navy logo, unaltered: 238 px wide, ink x 72–286, y 76–291.
- Weight hierarchy: setup words Medium 500, «رسالة؟» Bold 800, the label navy on blue Bold 800.
- The pill at 84–172, centred on the header row as on piece 01's cover.
- One pink group.
- Cairo only, with no tracking.

**Checks run on `whatsapp-image.png`** (scripts in the session scratchpad, not in the pack):
- **Palette:** outside the logo, 98.71% of pixels are exact palette colours. The rest are within 2.05 RGB units of a two-colour blend (anti-aliasing).
- **Pink:** outside the logo, pink sits only in the «رسالة؟» box (x 85–486, y 439–570). The nearest blue is 171 px away outside the logo, and the logo's own blue is 208 px away.
- **Clear space, ink to ink:**
  - pill to hook line 1: 85
  - logo to hook line 2: 148 (round 2: 123)
  - hook to sub-line: 44
  - sub-line to band: 81
- **Extents:** all ink is within x 66–1013 and y 76–1003. As in rounds 1 and 2, the bubbles' 12 px strokes are centred on the 72 px side lines.
- **Text:** `lint-copy.mjs` on this file gives `Copy check passed: 8 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` The copy is unchanged in round 3.
- **Renders:** rendered twice with identical output (md5).
- **Greyscale:** «رسالة؟» is the largest and heaviest word, but still dimmer than the white words. No palette colour can change that.
- **Viewing:** full size; greyscale; bubble size (261 px) after JPEG q60; squint blur; 100 px notification; a 2× crop of the hook, sub-line and band; and the phone mock. At every size the hook and the pink word lead. The lit bubble is the second mass, as on piece 01's slide 7.

**Not acted on (the critic's smaller notes):**
- **The ring's meaning:** the band is piece 01's, so a change there would start in piece 01.
- **The pill:** the top right isn't crowded after fix 2 (85 px from the pill to hook line 1), so it stays for series recognition.

**Files** in `design/2026-W42-04/`:
- `whatsapp-image.png`: **the file to send**, 1080×1080, with the message as its caption.
- Sources: `whatsapp-image.html`, `whatsapp.css` and `build.mjs`.
  - `build.mjs` takes the words from piece 01's `slide-01.html` and the band from piece 01's `slide-07.html`. It checks both against piece 01's `carousel.css` and `door.mjs`, and builds the phone check from this file's `## Copy`.
  - **If piece 01 or this copy changes**, rebuild before sending:
    1. `node build.mjs`
    2. `node .claude/skills/design-studio/scripts/render.mjs still whatsapp-image.html whatsapp-image.png --w 1080 --h 1080`
    3. `render.mjs still checks/phone-preview.html checks/phone-preview.png --w 2400 --h 2700`
    4. `python3 -I make-legibility.py`, run in `checks/`.
- `checks/`, **not for sending:**
  - `phone-preview.png`: two phones in a neutral grey chat mock, not WhatsApp's UI. The caption is set in Cairo, so a phone's own font will break lines differently.
    - Right: the message as the copy stands (59 words). It fits on one screen with 71 px to spare.
    - Left: the critic's fixes 1 and 3 as a **proposal, not approved copy**: no `ask` line, and the `cta` line in WhatsApp bold (51 words). It fits with 135 px to spare; the bold line wraps to two lines in Cairo 800.
  - `r2-vs-r3.png`: round 2 beside round 3.
  - `greyscale.png` and `small-sizes.png`, made by `make-legibility.py`.
- `thumbs/`: round 1's three compositions, kept as the record of the choice (a chosen). They show the old placeholder. **Not for sending.**

**Open items:**
1. **Copywriter: the critic's fixes 1 and 3. They are needed for round 3 to clear Glaser (6.5), Cooper and AbiFarès.** Both are copy changes, so the linter and Guard run again. No layout change is needed.
   - (a) **Fix 1:** cut the `ask` line «شنو يصير من تدزلنا رسالة وتريد زيارة للبيت؟» from paragraph 1 (the critic's option A). Paragraph 1 becomes the greeting, and «تگولنا شنو تحتاج…» then answers the image's question. Option B, the same paragraph reworded so it opens with the answer, has the same effect. 59 → 51 words.
   - (b) **Fix 3:** WhatsApp bold on paragraph 4's `cta` line: `*تحتاج زيارة؟ رد على هالرسالة بكلمة وحدة:*`. It is formatting only, and WhatsApp needs the stars touching the text.
   - (c) After either change, update the word count in the copy note and in `## Copy check`.
2. **Hook line break:** the break after «شنو يصير» is still piece 01's open Copywriter item. If it changes there, `build.mjs` stops until this image is rebuilt.
3. **Fit on one screen:** with the copy as it stands, 71 px are left, about one line. With a larger phone font, the opt-out line may need a scroll. Step 1 of Sending checks this, and also whether WhatsApp folds the caption behind "Read more".
4. **Fallback:** piece 01's `slide-01.png` (4:5) still works if Yaqoob would rather send the carousel's own file. Round 1's check showed its bubble then runs 125 px past the input bar.

Sending (Yaqoob, by hand, from WhatsApp Business):

1. Send `whatsapp-image.png` with the message to your own number first. On the phone, check four things after WhatsApp's compression:
   - the image and the logo's wordmark read
   - all five paragraphs read
   - the opt-out line is visible without scrolling, or close to it
   - the caption isn't folded behind "Read more"
2. Send it as one message (image plus caption), to the opted-in broadcast list only.
3. The list and every reply stay on the phone: not in this repo, not in any tool (CLAUDE.md rule 6).
4. Log each booking that follows in `data/bookings-log.csv`, with the answer to «منين سمعت بينا؟».

## Dialect doubts

- «ونثبّتلك الموعد» (frame 2): same doubt as piece 01. «نحجزلك موعد» is the alternative.
- «توقف» (frame 5): an MSA imperative; spoken Baghdadi would say «وگّف» or «بس». As an opt-out keyword the MSA form is less ambiguous, so I kept it, with STOP beside it. Change the word if you prefer another.

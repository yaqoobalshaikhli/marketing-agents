---
id: 2026-W42-02
channel: [instagram-story]
style: A
goal: [awareness]
publish: Tue 20 Oct 10:00                 # brief's "review Mon 19" slot (decision #64); the campaign's morning-question slot, the same day as piece 01 at 20:30
status: draft                             # back to draft: the copy changed after Guard's PASS of 17 Oct
consents: []                              # no people
---
Needs Yaqoob: none in the copy. Not blocking the copy: the official logo file (marked slot on both frames); the wa.me link for the frame 2 link sticker is an at-posting value; frame 2 says «هسه», so make sure someone answers WhatsApp for the three hours after 10:00 that Tuesday.
Psychology: Commitment and consistency. Frame 1 asks for a small, easy first step (type one question); frame 2 offers the next step, a WhatsApp message, to anyone who is already ready.

## Copy (Iraqi dialect)

> Two story frames. Line keys follow the trust campaign's morning questions (`label`, `question`). ` / ` is a line break on screen; `*stars*` mark the one pink group per frame. The question is about the service, never about the viewer's health (brief, piece 02). `sticker:` and `link:` are typed into Instagram's native stickers at posting, not rendered.
>
> Changes from the first draft: «تحب تعرفه» → «تريد تعرفه» and the `small` line rewritten in spoken Baghdadi (Guard's dialect notes); frame 2 now closes with the campaign sign-off (decision #53).

### Frame 1 · question box

label: سؤال

question: شنو أكثر شي تريد تعرفه / قبل لا يجيك دكتور *للبيت؟*

small: لا تكتب اسمك ولا شي عن صحتك.

logo: LOGO SLOT, official file needed

### Frame 2 · WhatsApp link

text: وإذا تريد تحجز زيارة هسه: / *دزلنا رسالة واتساب.*

sticker: احجز بالواتساب

link: [AT POSTING: wa.me link]

closing: لا تصدگنا. شوف بعينك.

logo: LOGO SLOT, official file needed

## Caption

None: Instagram stories have no caption.

## Copy check

Checker's last line (2026-10-18): `Copy check passed: 6 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` No open placeholders; the wa.me link is `[AT POSTING]`. No warnings to justify.

Per frame, with the checker's tokenizer: 18 and 14 words (limit 20), counting the sticker text; one pink group each.

Facts: a doctor's home visit (`tabeebx-brand`) and booking by WhatsApp message (decision #13). Nothing from decisions #52 or #59 is stated, and nothing about the viewer's health is asked. The sign-off is the campaign's approved closing line.

## Design

**Round 1** · Designer, 2026-10-18 · Design Critic: **not yet scored** (round 1 goes to the critic next).

**The one idea:** your question gets to the door before the doctor does. The viewer should feel heard, not sold to, and type one question. On frame 2, anyone who is already ready messages us on WhatsApp.

**Device:** one round-headed doorway (blue line, threshold on the margins) holds the native sticker on both frames.
- Frame 1: the doorway is dark and empty, and the Question sticker stands in it, directly under the pink «للبيت؟».
- Frame 2: the same doorway is lit (filled blue inside its frame), and the WhatsApp link sticker sits in it.
- Swiping right to left, the door "opens" from frame 1 to frame 2.
- The head is round on purpose. A pointed arch reads as a mihrab, and we shouldn't borrow a religious form for an ad.

**References learned from (`design-studio/references/library.md`):**
- **Spotify Wrapped 2024:** type as the main graphic on 9:16, built as a system. Here that means one grid, two type sizes, and a fixed header row and doorway on both frames, so frame 2 visibly belongs with frame 1.
- **Missing Type:** one ownable graphic gesture carries the message instead of decoration. The doorway can also run through piece 01 (from the message to the knock on the door).
- **Ruby Blooms:** calm, low-surprise design for a health topic. A navy field, one accent, no medical icons and no people.

**Three thumbnails** (`thumbs/contact-sheet.png`, right to left):
- (a) Poster: type only, with an empty sticker zone. Clean, but nothing says "home".
- (b) Doorway: chosen. The picture completes the headline instead of repeating it, and it carries across both frames.
- (c) Navy/blue split screen: a template look, and it fails the swap test.

**Grid and type:**
- 12 columns, 72 px outer margins, 24 px gutters, 8 px unit.
- Rows on both frames:
  - header: 272–384
  - headline: from 432
  - door apex: 736
  - threshold: 1448
  - foot line: 1480–1557
- The door's jambs sit on the column-1 and column-12 edges (x 128 / 952); the threshold runs margin to margin.
- Story UI kept clear: top 250 px and bottom 340 px, 72 px sides.
- Cairo Bold 82 px for the headline. That is the largest size at which each copy line (` / `) still fits on one line in 936 px; I didn't re-break the copy.
- 48 px for the label (Bold, navy on blue), the `small` line (Medium) and the closing line (Bold), so there are 2 sizes per frame (ratio 1.7).
- One pink group per frame («للبيت؟» / «دزلنا رسالة واتساب.»), on navy only and never touching blue.
- Pixel check: 99.2% of frame 1's pixels and 99.3% of frame 2's are exact palette colours; the rest is anti-aliasing.

**Files** in `design/2026-W42-02/`:
- `frame-01.png`, `frame-02.png`: **the files to post**, 1080×1920.
- `frame-01-guide.png`, `frame-02-guide.png`: placement guides showing mock stickers and the Instagram UI bands. **Not for posting.**
- `preview-sequence.png`: both frames as they will look with stickers, in swipe order.
- Sources: `frame-01.html`, `frame-02.html`, `frame-0N-guide.html`, `story.css` and `build.mjs`. To change them, edit `build.mjs`, run `node build.mjs`, then `render.mjs still … --w 1080 --h 1920`.
- `thumbs/`: the three compositions.

**At posting (Yaqoob):**
- **Frame 1:** add the Question sticker, centred on the screen's centre guide, about 60% of the screen width, inside the doorway above the threshold (see the guide). Use the white or blue variant, never pink.
- **Frame 2:** add the link sticker, white variant, with the text «احجز بالواتساب» and the `[AT POSTING: wa.me link]`. Centre it in the lit doorway at the same height as frame 1's sticker.

**Open items for the design (not blocking the critic):**
1. **Logo:** the slot is marked `[LOGO: official file needed]`, top left, 304×112, in the same place on both frames. The standard lockup has a navy wordmark, which disappears on navy. Yaqoob needs to send a reversed lockup (white wordmark), or approve a white plate behind it.
2. **The Question sticker's own prompt line** isn't in the copy. If nothing is typed, Instagram shows its default prompt. The Copywriter should supply the wording, or say that the sticker repeats «سؤال». I haven't written any Arabic.

Hand-off from the copy (facts and policy only; layout is the Designer's):

- Two frames at 1080×1920. The first draft's visual brief and EMR render spec are withdrawn (old "no logo" rule, old render route).
- Style A: type and simple shapes only. No people or faces, real or AI.
- Leave empty zones for Instagram's native Question sticker (frame 1) and link sticker (frame 2). Yaqoob picks a white, light or blue sticker variant at posting, never pink, so the starred words stay the frame's only pink.
- Logo: `[LOGO: official file needed]` on both frames. Its pink figure doesn't count as the frame's pink (decision #39). Never redraw or trace it.

After posting, Yaqoob reads the answers in the Instagram app and passes on only the themes for the W44 brief: no names, handles or health details, and no answer copied into the repo or any tool (CLAUDE.md rule 6).

## Dialect doubts

none

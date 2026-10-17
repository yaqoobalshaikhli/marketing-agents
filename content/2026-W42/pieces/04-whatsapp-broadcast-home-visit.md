---
id: 2026-W42-04
channel: whatsapp-broadcast   # if Q4-B this becomes whatsapp-reply; if Q4-C the piece is dropped
style: A                      # reuses 01's cover, resized; leave out of the style comparison (brief)
goal: bookings
publish: Sat 24 Oct [11:00 proposed]   # a time WhatsApp is staffed for the next 3 hours; if Q6-B: Wed 21 Oct, same rule
status: draft
---

**Needs Yaqoob:** Q4 (A: send to the existing opted-in list, size [___]; B: rewrite as a reply template for incoming home-visit enquiries, the `ask` to `options` lines carry over; C: drop this piece) · `reply` line fact: who replies to a booking message · Q2-a (`who` line: keep or delete) · the send time, when someone can answer for the next 3 hours · who removes contacts that send the opt-out word in the `optout` line · Q6 (date). Guard blocks this piece while any `[bracket]` is unfilled.

<!-- principle (marketing-psychology): Hick's law. One idea and one reply with three fixed choices, so answering takes a single word. -->

## Copy (Iraqi dialect)

One WhatsApp message, sent by hand from WhatsApp Business to opted-in contacts only, as the caption of 01's cover image. Each keyed line below is one line of the message, in order (the keys are labels, not text to send); leave a blank line after `greet`, `visit` and `options`. About 52 words.

greet: هلا بيك، وياك TabeebX.

ask: شنو يصير من تدزلنا رسالة لزيارة بالبيت ببغداد؟

reply: يرد عليك [منو يرد]، ونتفق وياك على الموعد.

PENDING Q2-a (delete the `who` line unless the promise is still kept on every visit):

who: [وتعرف اسم وصورة اللي جايك قبل لا يدگ الباب.]

visit: والزيارة ببيتك، بلا سرة ولا طريق.

cta: تحتاج زيارة؟ رد على هالرسالة بكلمة وحدة:

options: دكتور، تمريض، أو تحليل.

optout: وإذا ما تريد توصلك رسائلنا، اكتبلنا «توقف».

## Caption

None separate: the message above is the caption of the cover image (one message, not two).

## Variant hook

Not applicable: a WhatsApp broadcast is not a feed piece (copywriter.md, step 6).

## Visual brief

Style A, reused: **no new design.** The image is the cover (slide 1) of piece 01, unchanged: Navy #181943 background, the `hook` in Cairo Bold with its one Pink #EE396B group, a Blue #1B9CCE dashed path from a speech bubble to a front door, the `small` line in Cairo Medium. The full layout is in piece 01's Visual brief. No people, no AI, no AI label, 0 credits.

WhatsApp-specific checks:

- Size: 1080×1350 as exported. The brief says "resized", but piece 01's cover keeps everything inside the central 1080×1080 (y=135 to 1215), so no re-layout is needed. If WhatsApp crops the portrait preview, crop to that square [unsure how WhatsApp crops a 4:5 image; verify on a phone].
- WhatsApp compresses images. The smallest text on the cover is the 42 px `small` line and the 44 px `series` line (if kept), which should survive; check it on the phone.
- Image and message are one message: the text in the Copy section is the image caption.
- If the cover changes in piece 01 (for example the `series` line is dropped under Q3), export the final cover, not an earlier one.

## Production

**Tool:** style A, reuse. **Rendering happens in the `yaqoobalshaikhli/EMR` repo (`marketing/motion`), not in this repo**, as part of piece 01's job. There is no render job of its own. The job below only records the dependency; it is a guess at the shape, because `campaign.json` could not be read in this run. Everything in it except the template name `carousel` is listed in `_unsure`. Keys that start with `_` are for reviewers.

```json
{
  "_unsure": [
    "every field except template",
    "whether a single slide can be selected from another job (from, slides)",
    "id naming and output file name"
  ],
  "id": "2026-W42-04",
  "template": "carousel",
  "from": "2026-W42-01",
  "slides": [1],
  "size": { "w": 1080, "h": 1350 },
  "out": "2026-W42-04-wa-cover.png"
}
```

If the renderer cannot select one slide, skip the job: take `2026-W42-01-s01.png` from piece 01's render and copy it as `2026-W42-04-wa-cover.png`.

**Blocked until:** piece 01 is rendered and its cover is final (Q3 decides the `series` line), and Q4 is answered.

**Steps (Yaqoob, by hand, from WhatsApp Business)**

1. Send the image to your own number first. Check on the phone that the `hook` and `small` line are readable and nothing is cropped.
2. Send as an image with the Copy-section text as its caption: one message, not two. Opted-in contacts only (Q4-A).
3. The contact list and the replies stay on the phone. Neither goes into this repo or any tool (CLAUDE.md rule 6).

**If Q4 is:** B (reply template): the cover can be attached to the template, or the template can go text-only; no extra production either way. C (skip): nothing to produce.

**AI credits used:** 0.

## Dialect doubts

- «هلا بيك» (`greet`): I hear it in Baghdad, but it is also very Gulf. If it reads Gulf to you, «أهلاً بيك» or «مساء الخير» (time-dependent) are safer.
- «وياك TabeebX» (`greet`): the Iraqi phone-call way to say who is speaking. It may feel odd in a written message; «هذا TabeebX» is the plain alternative.
- «تمريض» (`options`): as a one-word reply option it may be clearer as «ممرضة». I avoided gendering it because nurse coverage is still Q2-c.
- «اكتبلنا «توقف»» (`optout`): the opt-out word. Check that «توقف» is the word you want people to send; an English STOP could sit beside it.

## Copy check

Linter final line (2026-10-17): `Copy check passed: 8 Arabic line(s), 0 warning(s), 0 correction(s) loaded.` No warnings to justify. Message length: about 52 words, under the brief's 60.

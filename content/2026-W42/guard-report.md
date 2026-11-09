# Guard report: 2026-W42

Brand & Policy Guard · Sat 17 Oct 2026 · test run, 4 pieces.

Checked against: `health-ad-policy`, `iraqi-dialect` (with `approved-lines.md`; `data/dialect-corrections.csv` has 0 rows), `tabeebx-brand` and its references (the account copy `tabeebx-context` is identical on every point below), `CLAUDE.md`, the brief and `docs/decisions.md`.

**Summary:** 1 pass with notes (02) and 3 fails (01, 03, 04). Most of the fails come from facts Yaqoob hasn't confirmed yet (Q2, Q3, Q4, Q5). The copy in all four pieces breaks no policy rule: no health attributes, cure claims, prices, fear hooks, AI people or emergency symptoms.

## Verdicts

| Piece | Verdict | `status:` |
|---|---|---|
| **01** IG carousel + FB cross-post (A) | FAIL: unfilled placeholders (brief Q2-f; the piece's own block rule) → Yaqoob answers Q3, Q2-a, Q2-b and the slide 4 facts. Then: slide 1 `series` and slide 8 `closing` keep their text without brackets (Q3-A) or are deleted. Slide 4 [منو يرد] and [شنو نسأل] are filled. Slide 5 (Q2-a) and slide 7 (Q2-b) lose their brackets or are deleted, and the step `label` digits are renumbered in both the Copy section and the JSON. Re-lint, then back to Guard.<br>FAIL: fact not in `tabeebx-brand` (slide 8 `small` «مرخّصين من وزارة الصحة العراقية»). Neither brand copy has any Ministry of Health licence wording: `health360.md` only says "licensed healthcare provider" in GlobeMed's network, and approved lines are a voice source, not a fact source. → Yaqoob confirms the line is true today for home visits and the wording is added to `tabeebx-brand`, or the `small` key is deleted from slide 8 in Copy and JSON. | draft |
| **02** IG story, question box (A) | PASS with note: copy, policy, facts and brand all pass. (1) The wa.me link goes in the link sticker at posting; it's Yaqoob's input, not copy. (2) Frame 2 says «هسه» on Fri 10:00, a weekend morning, so make sure WhatsApp is staffed for the next 3 hours (the brief's rule for 04 fits here too). (3) Dialect opinions on «تحب تعرفه» and «تفاصيل صحية» are below. | guard-pass |
| **03** TikTok + IG Reel, home lab (D) | FAIL: no consent record ([consent ref] unfilled; nothing in `data/`) → Yaqoob gives a consent reference for A, B and C (and for the 30 Sep footage if Q5-D), covering at least organic posting, before anything is filmed or reused.<br>FAIL: the disclosure may be false. The persistent label «فيديو توضيحي · الأشخاص من فريق TabeebX» and the caption line «الأشخاص بالفيديو من فريق TabeebX.» say everyone on screen is staff, but Production → Who → **B** allows "a consenting family member". → Change B to "a staff member" only (delete "or a consenting family member [name]"). If a non-staff person must appear, Yaqoob approves new label and caption wording first.<br>FAIL: unfilled placeholders → Q2-d (frame 3, vo 4, shot S3) and Q2-a (frame 4, vo 5, shot S4): keep each without brackets, or delete the frame, shot and `vo` line together. Q2-e (frame 6, vo 7) must be answered or the piece can't post, because that frame carries the door-to-result arc. Q3 decides `closing`. vo 1 needs [الاسم].<br>FAIL: on-screen copy not written. The S2 staged chat text ("[typed message text: …]") and A's staged message in S4 will be legible on screen. → Copywriter writes both in dialect (Eastern digits, no patient data), adds them to the Copy section and lints them.<br>FAIL: this is a plan, not footage (Q5 open). → Guard re-checks the exported MP4 before posting: label on every frame, one pink per frame, no pink clothing or visible kit logo, no needle, tube, blood or opened kit, no house numbers, plates, family photos or real chats. | draft |
| **04** WhatsApp broadcast (A, reuses 01 cover) | FAIL: Q4 unanswered, so there is no confirmed opted-in list (the brief says Q4 blocks drafting; broadcasts go to opted-in contacts only) → Q4-A: Yaqoob confirms the list and its size. Q4-B: rewrite as a `whatsapp-reply` template and never broadcast it. Q4-C: drop the piece.<br>FAIL: unfilled placeholders → fill `reply` [منو يرد]. For Q2-a, keep `who` without brackets or delete the line. Replace `publish` [11:00 proposed] with a confirmed time that has 3 staffed hours after it.<br>FAIL: opt-out promise with no owner. The `optout` line tells people «توقف» stops our messages, but nobody is named to remove them. → Before sending, Yaqoob names who removes opt-outs and how soon.<br>FAIL: the image depends on 01, which fails → re-check after 01 passes, using the final exported cover (Q3 decides its `series` line). | draft |

## Checklist, line by line (`health-ad-policy` → Guard's pass/fail checklist)

| Checklist line | 01 | 02 | 03 | 04 |
|---|---|---|---|---|
| `lint-copy.mjs` exits 0; warnings fixed or justified | ok: 29 lines, 0 warnings. Extracted JSON: 19 lines, 0 warnings | ok: 5 lines. JSON: 5 lines, 0 warnings | ok: 25 lines, 0 warnings. No JSON block | ok: 8 lines. JSON: no Arabic strings |
| No implied personal health attribute (copy or visual text) | ok. «تحتاج زيارة لبيتك، أو لبيت أهلك؟» asks about the service | ok. The question is about the visit, and the `small` line keeps health details out | ok | ok. «تحتاج زيارة؟» asks about the service |
| No cure claim, guarantee, unproven superlative or price | ok | ok | ok. «٦٣١» is a brand fact | ok |
| Any person shown is real and consented, or labeled AI | ok: icons only, no people | ok: no people | **FAIL**: no consent record | ok: no people (01 cover) |
| No testimonial or review without a consent record | ok | ok | ok: staged and labeled illustrative | ok |
| Emergency symptom → emergency-services line | n/a: no symptom named (ECG is named as a service) | n/a | n/a | n/a |
| Facts match `tabeebx-brand`; nothing invented | **FAIL**: licence line. Service list, Baghdad and WhatsApp booking (decision 13) ok | ok: home doctor visit (brand); WhatsApp booking (decision 13) | ok: 631 tests, Baghdad. **FAIL**: label truth depends on who B is | ok: doctor / nursing / lab, Baghdad |
| Platform fit (TikTok ad not teleconsult; clean Meta audience names) | ok: organic, not an ad | ok: organic | ok: organic. See the paid-use note | **FAIL**: opt-in not confirmed (Q4) |
| Dialect doubts listed | ok (4) | ok (3) | ok (3) | ok (4) |
| Brief Q2-f: no unfilled placeholder | **FAIL** | ok (only the posting-time wa.me link) | **FAIL** | **FAIL** |

I also confirmed that the Arabic strings in the JSON specs for 01 and 02 match their Copy sections exactly. The extracted specs are in `/tmp/claude-0/-home-user-EMR/9d3990a5-1540-5f92-9cfa-2c80a13d522d/scratchpad/guard-w42/`.

## Brand check

| Item | 01 | 02 | 03 | 04 |
|---|---|---|---|---|
| Colours | ok: Navy #181943, Pink #EE396B, Blue #1B9CCE, White #FFFEFF (exact hex) | ok | ok (plate is Navy at 92%) | ok (01 cover) |
| One pink per frame | ok: one starred group on each of the 8 slides; no pink in icons, badges or chevron | ok: one per frame; stickers in non-pink variants | ok in copy; clothing, kit and logo rules are written but can only be checked on footage | ok (01 cover; caption is plain text) |
| Cairo | ok: Bold for headlines, Medium for body | ok | ok, with no fallback font allowed | ok |
| Logo | none on any slide (see system issue 2) | none | none; kit logo hidden | none |
| AI label | n/a: no AI, no people | n/a | n/a (style D); the illustrative label is used instead, see the FAIL | n/a |
| Contrast (verified) | pink/navy 4.32:1, blue/navy 5.32:1, white/navy 16.58:1, as claimed | same | pink on the 92% plate drops to 3.47:1 over bright footage (the piece says 4.3:1); still above 3:1 at 44–76 px | — |
| Words per frame (≤ 20) | max 18 (slide 8) | max 18 (frame 1) | max 20 (frame 5 with the label: no room left) | message is 44–53 words (brief: under about 60) |

## Non-blocking notes

- **01:** No brand mark appears anywhere. There's no logo, and slide 8 dropped the «TabeebX ·» prefix of the approved trust strip, so "TabeebX" appears only in slide 3's text. Yaqoob's logo ruling (system issue 2) decides this. The Facebook caption still needs the wa.me link at posting. A 20:30 slot may clash with the trust campaign's nightly post (Q3).
- **03:** «٦٣١ تحليل، تگدر تسويها بالبيت» matches `tabeebx-brand`. But `corporate-packages.md` says all lab work needs a TabeebX doctor's authorization; if Q2-d confirms that for home bookings, keep frame 3 so the 631 line doesn't read as self-ordering. On screen «ويوصلك الفريق» (the team) doesn't match the VO's «أجي لبيتك» (one person): pick one. On paid use later, the consent asks to cover it, but TikTok doesn't allow ads for remote diagnosis (`health-ad-policy`, 55%), so frame 3 («يشوف طلب التحليل أونلاين») would likely have to go from any paid TikTok cut, and home-visit ads need Ministry of Health licence proof.
- **04:** WhatsApp compression of the 42 px `small` line: check it on a phone first, as the piece already says.

## Dialect notes for Yaqoob

These are my opinions as a Baghdadi reader, for your call. They are not corrections, and I have added nothing to `data/dialect-corrections.csv`. The linter found no Gulf, Levantine or Egyptian blocklist words. My concerns are MSA-stiff or translated phrasing.

**Would change before posting**

| Where | Phrase | My read | Option |
|---|---|---|---|
| 01 slide 3 | «ويا TabeebX، كلشي يبدي برسالة واتساب.» | «ويا X، كلشي…» is the English "With X, it all starts with…" translated. In Baghdad «ويا» means "with (someone)", not "in the case of". «يبدي» itself is Baghdadi (Levantine says «بلّش»), so the Copywriter's doubt about it can be closed. | «ويانا، أول شي تدزلنا رسالة واتساب.» or «كلشي يبدي من رسالة واتساب.» |
| 01 slide 4, 04 `reply`, 03 vo 3 | «يرد عليك [منو]، يسألك [شنو نسأل]، ونتفق وياك على الموعد.» | The subject jumps from "he" (يرد، يسألك) to "we" (نسأل، نتفق) in one sentence, so it reads assembled. «نتفق على الموعد» is office Arabic. | «ونثبّتلك الموعد» or «ونحجزلك موعد» (agrees with the Copywriter's doubt). Keep one subject once [منو يرد] is known. |
| 02 frame 1 | «شنو أكثر شي تحب تعرفه» | «تحب» + verb for "would like to" leans Levantine/Egyptian («بتحب تعرف؟»). The approved «تحبه بالعراق» uses «تحب» to mean "love", a different sense, so it doesn't support this use. | «شنو أكثر شي تريد تعرفه» or «…يهمك تعرفه» |
| 03 vo 8 | «إذا عجبك، دزها لكروب العائلة.» | «عجبك» (masculine, the video) followed by «دزها» (feminine) in one breath; you hear it when it's spoken. «دزها» on its own (frame 7, caption) is fine Baghdadi as a generic "it". | VO only: «إذا عجبك، دزّه لكروب العائلة.» |

**Lighter**

| Where | Phrase | My read | Option |
|---|---|---|---|
| 01 slide 2 | «وانتظار ما تعرف شگد يطول» | «انتظار» is MSA; Baghdad says «نطرة» (compare the approved «لا تنطر العطش») | «ونطرة ما تعرف شگد تطول» |
| 02 frame 1 `small` | «بلا أسماء ولا تفاصيل صحية» | «تفاصيل صحية» is written Arabic | The Copywriter's «لا تكتب اسمك ولا شي عن صحتك.» |
| 01 slide 6 + caption, 04 `options` | «تمريض» | A department noun. Spoken Baghdadi names the person («ممرضة / ممرض») or the job («زرق، مغذي، تضميد»). It's stiffest as a one-word reply option in 04. | «ممرضة» once Q2-c settles gender |
| 03 frame 5, vo 6 | «العدّة» | Sounds like a mechanic's or barber's kit | «الجنطة» (agrees with the Copywriter) |
| 04 `ask` | «رسالة لزيارة بالبيت ببغداد» | Three stacked prepositions read written | «…من تدزلنا رسالة وتريد زيارة للبيت؟», with «ببغداد» moved to the `visit` line |
| 04 `optout` | «توقف» | MSA imperative; Baghdad would say «وگّف» or «بس». As a keyword, MSA is less ambiguous, so it's acceptable. | Keep, and add English STOP beside it (agrees with the Copywriter) |

**Copywriter doubts I would close with no change:** «سونار» is right for Baghdad (I'd avoid «إيكو», which Baghdad mostly uses for a heart echo). «هلا بيك»: «بيك» is the Iraqi marker (Gulf says «فيك»). «وياك TabeebX» is the real Iraqi phone opener and works in a one-to-one WhatsApp. «احجز بالواتساب» is everyday Baghdad ad wording. «يبدي» is Baghdadi.

## Issues found in the system itself

1. **`tabeebx-brand` hex and RGB values disagree.** The account skill `tabeebx-context`, which the repo copy says wins, has the same errors. Verified:

   | Colour | Hex | Hex → RGB | Skill says | Skill's RGB as hex |
   |---|---|---|---|---|
   | Navy | #181943 | 24,25,67 | 24,25,68 | #181944 |
   | Pink | #EE396B | 238,57,107 | 238,83,107 | #EE536B |
   | Blue | #1B9CCE | 27,156,206 | 29,157,208 | #1D9DD0 |

   Navy is off by one too; the brief for this run didn't mention it. The pink difference is visible (green channel 57 vs 83 gives a lighter, coral pink, at 4.83:1 on navy instead of 4.32:1). All four pieces use hex only, so they agree with each other. If the RGB values are what was meant, every pink and blue is wrong. Fix: Yaqoob confirms the values from the logo master file, and both skill copies are corrected in the same commit.
2. **The logo conflicts with "one pink element per frame".** The logo figure is pink, so a logo plus a starred group makes two pinks. `tabeebx-brand` titles its table "non-negotiable in every design", which leaves it unclear whether the logo is mandatory. Guard's definition says to check "logo"; `creative-producer` only says never to recolour or stretch it. As a result, no piece this week carries the logo. A rule is needed: the logo is exempt from the pink count, the logo goes only on frames with no starred group, or no logo by default.
3. **The licence check has nothing to check against.** The checklist says "Facts match `tabeebx-brand` (services, areas, licence wording)", but neither brand copy contains licence wording. The only source is the approved trust strip, and `approved-lines.md` says not to reuse factual claims from it without checking. The TikTok row in `health-ad-policy` also implies Ministry of Health licence proof isn't on file.
4. **Drafting order vs the Guard gate.** The brief says Q2, Q4 and Q5 block drafting, yet the pieces were drafted with placeholders. Brief Q2-f and the pieces say Guard blocks any unfilled placeholder, while this run's instructions exempt placeholders from the fact check. So 3 of 4 pieces reach Yaqoob as FAIL by construction, and Guard needs a second pass after his answers. «[brackets]» also mark three different things the same way: missing facts, posting-time inputs (the wa.me link, the send time) and producer notes («[unsure]», «[confirm]»). Suggestion: a status such as `pending-facts`, and separate marks for the three kinds.
5. **"PASS with note" has no status mapping.** The agent definition only maps PASS → `guard-pass` and FAIL → `draft`. I set 02 to `guard-pass` because its notes are advisory. Please confirm that's intended.
6. **AI label scope disagrees.** `health-ad-policy` non-negotiable 2 says to label all AI-generated people. The `content-system` style table, `creative-producer` and Guard's definition say style C only, while the `content-system` piece template says "B/C". Style B (AI families) shows AI people, so it needs the label. There's also no approved Arabic AI-label line yet; `health-ad-policy` offers «صورة توضيحية بالذكاء الاصطناعي» "or similar".
7. **Consent records have no home.** The checklist says a consent record must exist "in `data/`". The brief and piece 03 say signed forms stay out of the repo and Guard gets only "a reference", but no file or format exists for references. `creative-producer` also allows a "consenting family" in style D, while the only approved disclosure label says everyone on screen is staff. That combination caused piece 03's label FAIL.
8. **Approved lines are used as facts.** `approved-lines.md` is a voice source only, but the brief cites lines from it as "Fact" (03a «تحجز برسالة واتساب», the trust strip). The WhatsApp booking channel is recorded in decision 13 and `content-system`, but not in `tabeebx-brand`; add it there. It's also unclear whether teleconsultation is live for consumers: the app is "in development", but approved line 03a says «استشارة أونلاين» and the corporate packages offer "24/7 online consultations". That matters for 03 frame 3 and any TikTok ad.
9. **Linter gaps:**
   - It counts words and pink groups per line, not per frame, so two starred groups on separate lines of one slide would pass.
   - It skips fenced blocks, so the JSON render specs (what actually gets rendered) are never linted unless someone extracts them, as I did.
   - It skips blockquotes, so the second copy of 03's `vo` lines in the Production section is never linted.
   - It skips lines with no Arabic, so a Latin-only price line such as "25,000 IQD" passes.
   - Its dialect check is a blocklist of about 20 words; it caught none of the phrasing in the dialect notes above.
   - The rules don't say whether a persistent label counts toward the 20-word limit (03 frame 5 is exactly 20 with it).
10. **Unclear voice examples in `tabeebx-brand` (both copies).** «يعلّك» and «فتشي عامية وبروفشنل» are listed as correct register, but neither appears in the approved lines and I can't tell what either means. Ask Yaqoob before a Copywriter imitates them.

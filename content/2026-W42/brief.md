# Weekly brief: 2026-W42 pack (posts in W43, 19–25 Oct 2026)

Director · written Sat 17 Oct 2026 · **Test run: 4 pieces.** This overrides the usual 10+ for this run only; decision 12 still applies to normal weeks.

---

## Decisions for Yaqoob (answer these first)

Q2, Q4 and Q5 block drafting. The others can wait until review.

**Q1. Saleem سليم (Page ID 105161715872501): add it to the weekly competitor watch list?**
- **A)** Approve for weekly tracking. ← my recommendation (moderate confidence): it has 15 active ads covering home doctor visits, home nursing and app downloads, which overlap our offers, and tracking it costs about one Ad Library call a week.
- **B)** Keep it as `proposed` for one more run. Two of its nursing link titles mention الحلة, so it may not be focused on Baghdad.
- **C)** Reject.

**Q2. Which of these facts can pieces 01, 03 and 04 state? Tick every one that is true today.**
- [ ] **a)** «تعرف اسم وصورة اللي جايك قبل لا يدگ الباب»: the trust-campaign promise (approved line, `09-sun04`). Is it still kept on every visit?
- [ ] **b)** A follow-up call within ٢٤ ساعة after the visit (`10-nov01` scorecard line). Is it still kept?
- [ ] **c)** Male and female nurses in all Baghdad districts. The source is `corporate-packages.md`, which was written for B2B. Is it true for home bookings?
- [ ] **d)** A TabeebX doctor authorizes home-lab requests online before the blood draw. The source is also B2B (`corporate-packages.md`). Is it true for home bookings?
- [ ] **e)** How home-lab results reach the family: [___]
- [ ] **f)** None confirmed. They stay as `[placeholders]`, and Guard blocks any piece where one is still unfilled.

**Q3. Is the «شوف بعينك» trust campaign (26 Sep – 1 Nov, nightly ٨:٣٠) still running in W43?** I couldn't read its schedule because it lives in the EMR repo, which this run can't access.
- **A)** Yes. Fold these 4 pieces into it: 20:30 slots, its sign-off and its series names. ← default, because piece 01 delivers the campaign's own promise «وشنو يصير من تدزلنا رسالة / لحد ما الدكتور يدگ باب بيتك».
- **B)** Yes, but keep these pieces separate. I'll move 01 and 03 to nights with no campaign post (tell me which nights).
- **C)** It has stopped. The slots stand as written, with no campaign branding.

**Q4. Who gets the WhatsApp broadcast (04)?**
- **A)** An opted-in broadcast list already exists on the TabeebX WhatsApp Business number. Send it to that list (size: [___]). You send it yourself, and the list never leaves the phone.
- **B)** There is no opted-in list yet. Replace 04 with a WhatsApp **reply template** for incoming home-visit enquiries (channel `whatsapp-reply`).
- **C)** Skip 04 this week.

**Q5. Piece 03 is a real-shoot video (style D). Can a phone shoot happen by Sat 24 Oct?**
- **A)** Yes, with [staff name/role] at [a staff member's home / a consenting family's home]. You keep the signed consent forms and give Guard the reference: [___].
- **B)** Not this week. 03 stays a shoot plan and posts in W44.
- **C)** Not this week. Switch 03 to style B (AI lifestyle, no clinicians; uses about 4 Canva AI credits). I advise against this; the reasons are under piece 03.
- **D)** Footage from the 30 Sep video «شنو يصير بعد ما تحجز؟» exists. Reuse it and shoot only what's missing.

**Q6. When do you review this pack?**
- **A)** Thursday 22 Oct, as usual. Pieces post Fri 23 – Sun 25. ← default
- **B)** Earlier, on Mon 19 Oct (it's only 4 pieces). I'll use the "review Mon 19" slots in the piece list, which spread across the week.

**Q7. Is the Facebook Page "Tabeebx" (Page ID 102936468976144, one ad running since 2026-09-05) ours?**
- **A)** Yes **B)** No **C)** Don't know

Competitor Intel logged it as unverified. Your answer goes in `docs/decisions.md`.

---

## Inputs read

| Input | Status | Effect on this brief |
|---|---|---|
| `reports/analyst/` | **There is no analyst report yet** (README only). | No winner from last week, no timing data and no style ranking. The slots below are proposals, not findings. |
| `reports/competitor-intel/2026-W42.md` | Present. Test run with fewer calls: 4 of about 15 Ad Library calls. Ad text and images were not reviewed; only link titles and dates came back. | Source for themes T1 and T2. Every competitor claim below rests on link titles and dates only. |
| `data/bookings-log.csv` | Header only, 0 rows. | No bookings and no «منين سمعت بينا؟» answers, so there is no numeric target and no proof numbers from our own records. |
| `data/dialect-corrections.csv` | Header only, 0 rows. | The Copywriter works from `approved-lines.md` and the copy checker. |
| `docs/decisions.md` (open questions) | 3 open. | How to name Health 360 is unresolved, so Health 360 and insurance stay out. The visit-count question is B2B only and isn't touched here. Competitor handles aren't needed this week. |
| Trust campaign schedule (`marketing/motion/content/campaign.json`, EMR repo) | Not read. | See Q3. |

---

## Goal for the week

Get Baghdad families to start **WhatsApp booking conversations** for home visits by showing, specifically and truthfully, what happens from the first message to the knock on the door, and log every booking that follows with its source.

There's no numeric target because there's no baseline: the bookings log has 0 rows and there's no analyst report. One ask for W43: whoever answers WhatsApp adds every booking to `data/bookings-log.csv`, with the answer to «منين سمعت بينا؟», so W44 starts with real data.

---

## Themes and evidence

### T1. Be specific where others are generic: from the message to the knock on the door (pieces 01, 04)

- **Evidence (competitor brief, observation 1):** Saleem runs 15 active ads in Iraq covering home doctor visits, home nursing and app downloads. The link titles that came back are generic: «خدمة زيارة الطبيب المنزلية», «حمل التطبيق الآن», and «احجز هسة» plus a phone number. Ten of them were created together on 2026-09-28 and have run for 19 days.
- **Evidence (our approved copy):** the trust campaign's launch reel promised to show «وشنو يصير من تدزلنا رسالة / لحد ما الدكتور يدگ باب بيتك» (`02-sun27`). This theme delivers on that promise.
- **Inference, confidence low-to-medium (~40%):** a step-by-step message that says who comes and what happens will stand out next to a generic competitor in the same feeds. We have only seen Saleem's link titles, not its visuals. Open links 3–5 in the competitor brief before review to check whether its visuals are as generic.

### T2. «تحليل بالبيت»: a home lab visit from the door to the result (piece 03)

- **Evidence (competitor brief, observation 3):** on 2026-10-17, the phrase «تحليل بالبيت» returned only 3 active ads in Iraq, none from a home-health competitor. They came from an herbal/fertility page, a urology doctor and a page called "Online store".
- **Supporting (observation 2):** Majestic Lab ran home blood-draw ads for about 155–165 days (log of 2026-10-08), and 15 new ad IDs from Majestic started running 15–17 Oct. The brief reads the long run as a sign of demand, which is a heuristic, not proof. It says the new batch is too young (0–2 days) to copy anything from.
- **Our facts (`tabeebx-brand`):** home lab blood draws, 631 tests in 18 categories, delivered across Baghdad.
- **Inference, confidence low (~30%):** few paid ads use this phrase right now. One keyword on one day is thin evidence. Using it organically costs nothing. Re-check it in the next full competitor run before any budget goes behind it.

### T3. Ask families what they want to know before a visit (piece 02)

- **Evidence:** we have no first-party signal yet: no analyst report, 0 bookings logged, 0 dialect corrections. The trust campaign's question-box format is already approved (`02d`: «شنو أكثر شي يضوّجك / من تراجع طبيب؟»).
- **Purpose:** gives the W44 brief a real question families asked instead of our guesses. This piece collects data rather than betting on performance, so it carries no confidence figure.

---

## Piece list

Nothing posts before Yaqoob approves it. There's no timing data yet, so the times are proposals. The 20:30 slot follows the trust campaign's nightly ٨:٣٠ post, which Yaqoob approved for that campaign.

| id | Channel / format | Style | Goal | Theme | Slot (review Thu 22, default) | Slot (review Mon 19) | File |
|---|---|---|---|---|---|---|---|
| 2026-W42-01 | Instagram carousel, plus a Facebook cross-post in the same slot | A | bookings | T1 | Fri 23 Oct 20:30 | Tue 20 Oct 20:30 | `pieces/01-ig-carousel-message-to-door.md` |
| 2026-W42-02 | Instagram story: question box, then a WhatsApp link frame | A | awareness | T3 | Fri 23 Oct 10:00 | Tue 20 Oct 10:00 | `pieces/02-ig-story-before-the-visit.md` |
| 2026-W42-03 | TikTok and Instagram Reel (same video) | D | awareness (share) | T2 | Sun 25 Oct 20:30 | Fri 23 Oct 20:30 | `pieces/03-tiktok-home-lab-door-to-result.md` |
| 2026-W42-04 | WhatsApp broadcast, opted-in contacts only | A (reuses 01's cover) | bookings | T1 | Sat 24 Oct, at a time WhatsApp is staffed for the next 3 hours: [proposed 11:00] | Wed 21 Oct, same rule | `pieces/04-whatsapp-broadcast-home-visit.md` |

**Order:** the morning question opens the day and the carousel follows the same evening. The broadcast goes out a day later, to people who already know us. The video goes last because it depends on the shoot (Q5).

**Style mix:** three style A pieces and one style D. Styles B and C are left out because of the test scope. The Analyst should treat W43 as a test of the workflow, not a style comparison, and should leave 04 out of any style comparison, since its image is reused and WhatsApp results aren't comparable with feed results.

### 01: Instagram carousel, from your message to the knock on the door (style A, bookings)

- **Angle:** T1. The steps of a home doctor or nurse visit in Baghdad, each told as a benefit to the family.
- **Shape (carousel formula, 7–8 slides):**
  - **Hook:** a question of 5 words or fewer. The approved hook «شنو يصير بعد ما تحجز؟» (`05-wed30`) is available.
  - **Shared pain:** not knowing who's coming, and the queue. Use the approved «سرة» lines for voice.
  - **Steps:**
    1. Send a WhatsApp message. Fact: approved «تحجز برسالة واتساب» (`03a`).
    2. [What happens next: who confirms, what we ask, how long until a slot.] This stays a placeholder, with no timing promise unless Yaqoob gives one.
    3. [The name and photo of who's coming.] Only if Q2-a is ticked.
    4. The visit at home, and what can come to the house: doctor, nurse, lab draw, X-ray, ultrasound, ECG, physio (`tabeebx-brand`).
    5. [A follow-up call within ٢٤ ساعة.] Only if Q2-b is ticked.
  - **Proof:** the licence line «مرخّصين من وزارة الصحة العراقية» (approved trust strip).
  - **CTA:** «رابط الواتساب بالبايو» (approved).
- **Visual:** style A, built with the motion system or a Canva Free template.
  - Navy background, Pink on one word group per slide, Blue icons, Cairo font.
  - Step numbers in Eastern Arabic digits.
  - Icons and illustration only, with no people, so no AI label is needed.
- **Caption:** short, in dialect, ending with the WhatsApp CTA. The Facebook cross-post uses the same slides with an adjusted caption and doesn't count as a separate piece.
- **Measure:** saves, shares, and WhatsApp chats where the answer to «منين سمعت بينا؟» names Instagram.

### 02: Instagram story, question box (style A, awareness)

- **Angle:** T3. One open question about the **service**, roughly: "what would you want to know before a doctor or nurse comes to your house?" The Copywriter writes the wording, using `02d` as the voice reference.
- **Frames:**
  1. The question box, with the approved label «سؤال».
  2. A WhatsApp link sticker for anyone who wants to book now. `content-system` requires every piece to end in an action that leads to WhatsApp or a share.
- **Must not** ask about the viewer's health or conditions (Meta's personal-attributes rule in `health-ad-policy`).
- **Visual:** Navy card, Cairo font, one Pink element.
- **Afterwards:** Yaqoob reads the answers in the Instagram app and passes on only the themes for the W44 brief, with no names, handles or health details. Answers are never copied into the repo or into any tool.
- **Measure:** the number of answers and their themes.

### 03: TikTok and Reel, «تحليل بالبيت» from the door to the result (style D, awareness and share)

- **Why style D and not B:**
  1. This week is about who actually comes. Style B can't show clinicians, so a style B home-lab video could show the family and the door but not the visit itself.
  2. The trust campaign's line is «لا تصدگنا. شوف بعينك.» ("don't believe us, see for yourself"). AI-generated homes and families in the middle of that campaign would undercut it.
  3. Style D uses no Canva AI credits. Canva Free gives about 20 a month (decision 15).
  4. Approved on-screen wording already exists for an explainer that uses team members: «فيديو توضيحي · الأشخاص من فريق TabeebX» (`05-wed30`).
- **Cost of choosing D:** it needs a shoot with real staff and their consent by Sat 24 Oct. Until footage exists, style D produces a plan, not a post (Q5).
- **Check first:** the trust campaign had a 30 Sep video «شنو يصير بعد ما تحجز؟» and a teaser promising «من الباب للنتيجة» (`04c`). If that footage exists, plan around reusing it instead of reshooting (Q5-D).
- **Beats.** The Creative Producer turns these into a shot list. The Copywriter writes the on-screen lines and an optional voice-over by a staff member.
  - **Hook:** 5 words or fewer, using the phrase «تحليل بالبيت».
  - The WhatsApp message on a phone.
  - [The doctor's authorization.] Only if Q2-d is ticked.
  - [The name and photo before arrival.] Only if Q2-a is ticked.
  - A staff member arriving at the door with the kit.
  - [How results reach the family.] From Q2-e.
  - **CTA:** «دزها لكروب العائلة» or the WhatsApp link.
- **Format:** vertical 9:16, about 20–30 seconds, at most 20 words of on-screen text per frame. The phrase «تحليل بالبيت» also goes in the caption.
- **Shoot rules:**
  - Only real TabeebX staff, with their consent. No real patients this week.
  - Film at a staff member's home or a consenting family's home.
  - Put the label on screen if staff play the family.
  - No needles, tubes or blood on camera. Show the arrival, the kit and the phone (`health-ad-policy` imagery rule; confidence 60%, verify before any ad use).
  - No children on camera without a parent's written consent.
  - The consent reference goes to Guard.
- **Posting:** Yaqoob posts to TikTok by hand. Organic only.
- **Measure:** watch time and shares.

### 04: WhatsApp broadcast to opted-in contacts (style A, bookings)

- **Audience:** opted-in contacts only (Q4). Yaqoob sends it by hand from WhatsApp Business. The contact list and the replies stay on the phone: not in this repo, not in any tool (CLAUDE.md rule 6).
- **Angle:** T1 in short form: what happens when you message us for a home visit. Then one action: reply with the service you need [doctor / nurse / home lab]. Keep it under about 60 words, with one idea, one action, and a line explaining how to opt out.
- **Image:** 01's cover slide, resized. No new design work.
- **Timing:** send when someone can answer replies for the next 3 hours. A slow reply wastes the conversation.
- **Measure:** replies within 48 hours, and bookings logged with a `source_answer` that names the broadcast.

---

## What NOT to do this week

| Don't | Why |
|---|---|
| Mention Health 360, «تأمين», insurance or "coverage" in any piece | It's an open question in `docs/decisions.md`, and «تأمين» is banned in consumer copy. |
| Mention the corporate packages, companies or HR | B2C is the only focus right now (decision 3), and the corporate packages are never mixed with Health 360. |
| Put a price, discount, «دينار» or IQD anywhere | The copy checker treats it as an error, and it breaks `health-ad-policy` rule 6. |
| Tell people to download the app, or echo Saleem's «حمل التطبيق الآن» | Our consumer app is still in development (`tabeebx-brand`). Bookings come in on WhatsApp (decision 13). |
| Name or hint at Saleem, Majestic or any other competitor, or copy Majestic's new ads | We win by being specific, not by attacking. Majestic's new batch is 0–2 days old; the competitor brief says to wait until it has run 14+ days. |
| Invent proof: testimonials, patient stories, doctor names, ratings, visit counts, response times, "within an hour" | There are no consent records and 0 bookings logged. Leave `[placeholders]` (CLAUDE.md rule 3). |
| Claim service outside Baghdad | `tabeebx-brand` says "across Baghdad". Saleem's Hilla ads are not our territory. |
| Name a condition or ask about the viewer's health («عندك…؟», «تعاني من…؟») | Breaks Meta's personal-attributes rule. Better to name no symptoms at all this week. If an emergency symptom does appear, the approved emergency line must go with it. |
| Use fear hooks («ما تدري», «قبل لا يفوت») or guarantees («مضمون») | Breaks `health-ad-policy` non-negotiables 3 and 4. |
| Show needles, blood tubes or hospital beds | Restricted imagery on Meta (confidence 60%; verify). |
| Use AI-generated people of any kind, including AI clinicians | This pack has no style B or C piece, and the real people shown need consent. |
| Boost, promote or spend anything, or run TikTok ads | Weeks 1–3 are organic only (decision 10), TikTok doesn't allow paid ads for online consultations, and nothing spends without approval. |
| Treat «تحليل بالبيت» as proven to be uncontested | It's one keyword on one day. Re-check it in the next full run. |
| Ask agents for several drafts | We share a limited Pro plan: one version per piece, plus at most one hook variant. |
| Copy story answers or WhatsApp replies into the repo or any tool | CLAUDE.md rule 6. |

---

## Hand-off

1. **Yaqoob:** answer Q2, Q4 and Q5 before drafting starts. Q1, Q3, Q6 and Q7 can wait until review.
2. **Copywriter:** writes 01–04, one version each with at most one hook variant.
   - Reads `data/dialect-corrections.csv` (empty) and `approved-lines.md` first.
   - Runs `lint-copy.mjs` and lists any dialect doubts.
   - Placeholders stay as `[placeholders]` until Q2 is answered.
3. **Creative Producer:** prepares the visuals.
   - 01: Canva or motion spec.
   - 02: story spec.
   - 03: shoot plan with a shot list and a consent step, or a plan for reusing the 30 Sep footage.
   - 04: 01's cover, resized.
4. **Guard:** runs the `health-ad-policy` checklist on all 4 pieces and writes `guard-report.md`.
5. **Director:** assembles `review.md` with the decisions at the top, for Thu 22 Oct (or Mon 19 if Q6 is B).

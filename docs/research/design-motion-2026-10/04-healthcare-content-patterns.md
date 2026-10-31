# Healthcare social content: what works, what backfires (research, 2026-10-20)

Researcher: topic 04 of the design and motion programme (decision #69). Reader: Yaqoob. Every claim has a source, an evidence type and a confidence. Where I could not find something it says "not found". STATUS: partial draft, written in stages; the final version replaces this header.

## Scope and method

(Filled in at the end.)

## Findings

### F1. Benchmarks: carousels and Reels lead on Instagram, static images fall (VENDOR DATA, cross-industry, not healthcare)

- **Claim:** Social Insider's 2026 Instagram benchmark (35M posts, 447,613 pages, Jan to Dec 2025, worldwide brands of all sizes, all industries) gives average engagement rate per post by followers (likes + comments only, no saves or shares): carousels 0.55%, Reels 0.52%, images 0.37% for 2025. The same page also prints quarterly figures for "Q3 2026" of carousels 0.50%, Reels 0.48%, images 0.35%, and its own note says the 2025 values are presented as 2026. The page contradicts itself on labels (2025 vs Q3 2026), so treat the ordering (carousel above Reels above image) as usable and the decimals as approximate. Static images fell 17% year on year; overall engagement fell about 24% year on year; brands posted 33% more Reels.
- **Why it matters:** the format ordering supports a carousel-first plan for education content, with Reels for reach. It says nothing about healthcare.
- **Vendor flag:** Socialinsider sells social analytics. Cross-industry, mostly Western and large-brand data. Healthcare breakdown: **not found** (two searches, both returned only the cross-industry page).
- **Application for TabeebX:** none of the engagement numbers should be used as a TabeebX target. Use only the ordering: build the weekly mix so carousels (1080x1350, 4:5) carry the "save-worthy" education pieces and Reels (1080x1920) carry the reach pieces.
- **Source:** https://socialinsider.io/blog/instagram-carousel-research (page_read via curl, 2026-10-20)
- **Evidence type:** page_read. **Confidence:** ordering 70%, decimals 50% (internal label contradiction, vendor).

### F2. Rival IQ does not publish a healthcare category in the editions I could reach

- **Claim:** a healthcare agency blog states Rival IQ's nearest category is "Health & Beauty" (which it describes as cosmetics-focused). Rival IQ's 2024 edition covers 14 industries, 2,100 brands, more than 5 million posts on Facebook, Instagram, TikTok and Twitter. The 2019 edition put Health & Beauty among the lowest on engagement (under 1%). I did not obtain a 2025 or 2026 Health & Beauty figure.
- **Vendor flag:** Rival IQ sells social analytics. The healthcare blog (apaya.com) is an agency.
- **Source:** https://apaya.com/blog/social-media-benchmarks-healthcare ; https://www.rivaliq.com/?p=34960 (both search_snippet)
- **Evidence type:** search_snippet. **Confidence:** 55%.

### F3. White coat, stethoscope and clinic background raise engagement and believability for physician creators, which is a risk, not a recipe

- **Claim:** a Virginia Commonwealth University team led by Dr. Suzanne Makarem analysed 330 videos from doctors with 100,000+ TikTok followers and interviewed 26 Gen Z users. Doctors in medical attire got significantly more comments than doctors in casual clothes, and a medical background (hospital or clinic) beat a "personal" setting. Interviewees said "looking the part" made a doctor more believable and that the doctor "is only going to promote something that actually works". Some respondents saw physician influencers as well-meaning and real-life doctors as chasing profit. Reported by Tubefilter (2026-10-07); I did not find the paper, so the journal, effect sizes and peer-review status are **unverified**. The sample is US, Gen Z, TikTok, 26 interviews: not Iraqi, not family audiences.
- **Why it matters for us:** this is a visual authority cue that works because viewers do not check. Using it with an invented or AI person would be exactly the deception CLAUDE.md rule 3 and `health-ad-policy` forbid.
- **Application for TabeebX:** do not copy the white-coat cue with a fake doctor. A legitimate version is real, consented footage of a real TabeebX clinician in a real setting, with the clinician's real credential as a lower-third (not available in the repo today; ask Yaqoob). For code-rendered pieces, the equivalent is a credential line set in Cairo Bold 40 px under the setup line ("[الاسم] [الاختصاص] [رقم الترخيص]" as placeholders), never a drawn doctor figure that could be mistaken for a real person.
- **Source:** https://www.tubefilter.com/2026/10/07/tiktok-study-vcu-medical-misinformation-doctors/
- **Evidence type:** article (page_read via curl of a news report of a study). **Confidence:** 65% that the study found this; 40% that it generalises to Iraq.

### F4. Doctor authority is not evidence: weakly supported claims often win views

- **Claim:** a study of 309 popular YouTube videos on cancer and diabetes by health professionals (at least 10,000 views each, 75% by physicians), led by Dr. EunKyo Kang (South Korea National Cancer Center), found fewer than 1 in 5 backed by high-quality evidence and about two thirds with low, very low or no evidence. Videos with weaker evidence often drew more viewers. The authors call this a "credibility-evidence gap" and used a new scoring system called E-GRADE. Reported by HealthDay (2026-01-30). An earlier search summary of mine attached this study to TikTok; the HealthDay copy says YouTube, so I use YouTube.
- **Application for TabeebX:** the opportunity is the gap. A piece that cites its source on the slide (one line, Cairo Regular 30 px, white at 70% opacity on navy is NOT allowed as an extra colour; use white at full colour in a 28 px line) is rarer than it should be. Add a "المصدر" (source) line to every health-fact slide: it costs one line and it is the cheapest trust cue that needs no doctor.
- **Source:** https://www.healthday.com/health-news/general-health/most-doctor-made-youtube-health-videos-lack-strong-proof-study-finds (search_snippet, relayed by pharmacy sites; the JAMA Network Open paper itself: not found)
- **Evidence type:** article / search_snippet. **Confidence:** 70% on the figures, 50% on journal attribution.


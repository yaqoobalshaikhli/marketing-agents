# Bold single-idea social design: type as the image, ownable symbols (research, 2026-10-20)

Researcher: topic 01 of the design and motion programme (decision #69). Reader: Yaqoob. Every claim has a source, an evidence type and a confidence. Where I could not find something it says "not found".

**Bottom line (what is strong, what is weak)**
- Strongest finding: the type-led look the critic wants is checkable. Blur the render and see whether the key words are still the biggest mass (Nielsen Norman Group method), and measure the key-to-setup size ratio. Measured with our own Cairo file, a 3:1 ratio over a 46 px setup line means key words of at least 138 px, and a 3-to-7-letter Arabic word fills the 936 px text width at about 280 to 385 px.
- Strongest evidence on branding from the first frame: Google/Kantar (ABCD, n=11,000 ads) and TikTok's own deck. Both are platform-published marketing research, not independent studies.
- Ownable symbol: the theory is solid (uniqueness and fame, Romaniuk/Ipsos), but I found no measured recipe for "how many exposures make a symbol famous". A map pin should score low on uniqueness (my reasoning, no source tested it). The concrete proposal (a derived "head and raised arms" gesture) is my design reasoning from the logo and a few precedent articles, not a tested method.
- **Reddit: zero evidence.** Question (4) of the brief is not answered. See Scope.

---

## Scope and method

- Date 2026-10-20. Topic: bold single-idea social design. Question as given: type as the image, payoff symbols only the brand could show, carousel structure, Reddit critiques.
- **Searches:** 22 WebSearch calls (21 standard, 1 extended). **Page and PDF reads:** about 16, all by `curl` through the proxy with a local text extractor, because WebFetch failed on DNS for `wise.design`, `business.google.com` and `thinkwithgoogle.com` (error "getaddrinfo ENOTFOUND"). Four WebFetch attempts in total, all failed (three DNS, one Reddit refusal). I went over the 25 to 35 budget by roughly a third because the Reddit and WebFetch attempts failed and had to be retried another way.
- **Reddit, blocked:** the search tool rejected `allowed_domains ["reddit.com"]` with a 400 error ("domains not accessible"). Searches with `site:reddit.com/r/design_critiques`, `site:reddit.com/r/brandidentity` and Reddit sub-names in the query returned no Reddit URLs at all (only Dribbble, blogs, template sites). One WebFetch of a Reddit search page returned "unable to fetch from www.reddit.com". I tried no workaround (decision #69). **So there is no Reddit snippet, title or critique in this file, and I do not paraphrase what Reddit users "usually say".** r/graphic_design, r/design_critiques, r/brandidentity and r/socialmedia: not covered.
- **Platforms (facebook, instagram, tiktok):** no profile was viewed. Not needed for this topic and I was over budget.
- **Images viewed (image_viewed):** three Wise brand images from the typeface studio's case-study page (downloaded one per directory under `scratchpad/research/01-concept-type/1`, `/2`, `/3`, not committed, not executed) and the official TabeebX stacked logo from the repo.
- **Local measurement (my own, not a source type in the brief):** I rendered sample Arabic words with the repo's vendored Cairo (`design-studio/assets/fonts`) in Chromium via Playwright 1.56.1 to get real widths. The sample words were chosen only to measure widths; they are not proposed copy. Script and output are in the scratchpad, not the repo.
- **Evidence types used:** page_read (fetched and read), search_snippet (only the search summary seen), article, image_viewed, plus local_measurement.
- **Preference 2023 to 2026:** mostly met. Exceptions, flagged where used: Ipsos paper (Dec 2017), TikTok Creative Codes (2022), Socialinsider carousel data (2017 to 2020), ABCD data (2021).

---

## Findings

### Part A. Type-led layouts: how big, how many levels, how to check

#### A1. The blur (squint) test is the cheapest way to prove "the key words are the heaviest mass"
- **Technique:** blur the finished design and see what survives. Nielsen Norman Group describes blurring "with a radius of 5 or 10 pixels" to see the real hierarchy even when text is unreadable, and shows that at 20 px a strongly coloured item can hijack the hierarchy.
- **Why it works:** it removes content and leaves size, contrast and colour, which are what a thumb-scrolling viewer sees first. It tests hierarchy, not legibility (secondary sources say this; NN/g does not state it).
- **How TabeebX would apply (my calibration, not NN/g's):** the designer renders each slide or reel frame, then makes two blurred copies, Gaussian radius 10 px and 20 px on the 1080 px canvas (NN/g did not say what canvas size its screenshot was, so the radii are scaled by judgment). Pass if at 20 px the biggest blob is the key-word block, and the white (or pink) mass of the key words is at least 3 times the combined white mass of every other text element, counted in pixels. The critic can script this in a few lines. The pink payoff symbol is the only other thing allowed to compete.
- **Source:** https://www.nngroup.com/articles/visual-hierarchy-ux-definition/
- **Evidence type:** page_read. **Confidence:** 95% that NN/g describes this method and the 5/10/20 px figures; 55% that my radii and the 3:1 pixel-mass target are the right calibration for 1080 px social frames.

#### A2. Make the size jump dramatic: 3:1 minimum, and here are the real pixel sizes for Arabic
- **Claim:** scale contrast is the main tool for hierarchy. Ellen Lupton's *Thinking with Type* (2nd ed. sample pages) contrasts a design with small size steps, which looks tentative, with one using strong size contrast, which looks decisive. A ratio is not given in what I could see.
- **Why it works:** a viewer reads in the first fraction of a second only what is large and high-contrast; small steps force a second look.
- **How TabeebX would apply:** measured with the repo's Cairo (local_measurement, Chromium, weight 800, width at 100 px font size; max size = text width / measured width):

  | Sample (letters) | Width at 100 px | Max size to fill 936 px | Max size to fill 720 px |
  |---|---|---|---|
  | 3-letter word | 253 px | 370 px | 285 px |
  | 4-letter word (two samples) | 253 / 243 px | 370 / 385 px | 285 / 296 px |
  | 4-letter word, wide letters | 298 px | 314 px | 242 px |
  | 5-letter word (two samples) | 261 / 324 px | 359 / 289 px | 276 / 222 px |
  | 6-letter word | 274 px | 342 px | 263 px |
  | 7-letter word | 333 px | 281 px | 217 px |
  | two words, 9 letters | 521 / 584 px | 180 / 160 px | 138 / 123 px |

  Ink height above the baseline is 0.71 to 0.74 em for words with tall letters (0.51 em for one without), and 0.23 to 0.26 em below it (0.47 em for one two-word line), so a word with descenders is about 1 em tall. Widths vary 15 to 20% between words, so the designer must measure the real line, not reuse this table.
  - Our floor for the setup line is 46 px (design-studio minimum body). 3:1 over 46 px means key words **at least 138 px**. 6:1 is 276 px.
  - Suggested tiers on 1080 px, all Cairo ExtraBold (800) for key words and Medium (500) for the setup line: **hero word** (one 3-to-7-letter word) 280 to 370 px; **key line** (two words, one line) 150 to 200 px; **setup line** 48 to 56 px; **label or sign-off** 40 to 44 px. Key-to-setup ratio 3:1 to 6:1. Text levels on the frame: two (key, setup) plus the logo. A third level only if it is the label.
  - Weight 900 is not in our font file (it has weights 400, 500, 600, 700 and 800 only), so "heaviest" means 800.
  - On a 720 px text width (the current 9:16 video margin) a two-word, 9-letter line tops out at about 123 to 138 px, which is at or below the 138 px floor above. For video at that margin, one hero word is the better choice than a two-word line.
- **Source:** Lupton sample pages https://www.issuu.com/elupton/docs/sample_pages ; measurement is mine.
- **Evidence type:** search_snippet (Lupton, the search tool's summary of the sample pages); local_measurement (table). **Confidence:** 70% that Lupton says this; 90% that the table is correct for those sample words and our Cairo file; 50% that 3:1 is the right floor (it comes from the critic's Scher note and from the viewed Wise examples below, not from a measured study).

#### A3. A fintech type-led reference, viewed: one heavy face, key words 4 to 10 times the smallest line, small logo, one device
- **What I saw (three images from the Wise rebrand case study by Ragged Edge and the type studio NaN, 2023; these are agency presentation mockups of a billboard, a tote bag and an Underground poster, not social posts):**
  1. Billboard (1920x1080 image). Dark green ground. Two heavy light-green capital words with a pill-shaped toggle between them (an arrow in a dark circle on a multicolour textured pill). By eye the key words span about 90% of the board's width in a single line and about a quarter to a third of its height (the board is photographed at an angle). The tagline at bottom left is roughly 8 to 10 times smaller than the key words. Logo top left, about 9 to 10% of the board's width. Only light and dark green plus the one textured pill.
  2. Tote bag (1170x1463). Four or five stacked heavy lines, leading so tight that lines nearly touch, mixed scripts in the same block. The block is about 43% of the bag's width and about a third of its height. Logo small below the block, about 14% of the bag's width.
  3. Underground poster (1920x1080). Five stacked heavy dark-green lines in a tall column on bright green, about a fifth of the width and over half the height of the panel. Smallest copy line about 4 times smaller than the headline. Logo sits on the card image, small.
  - All estimates by eye from the images, about plus or minus 10 points.
- **Why it works:** the type is the picture. The block of words is the largest, darkest or brightest shape; everything else (logo, store badges, CTA) is deliberately tiny; the one non-type device (the toggle pill) is the memory hook.
- **How TabeebX would apply:** a key block that spans at least 85% of the text width (800 px or more on 936 px) when single-line, or takes 25 to 40% of the canvas height when stacked in 2 to 3 lines (on 1080x1350 that is 340 to 540 px of block height). Logo on slide 1 at 200 to 240 px (19 to 22% of width), larger than Wise's roughly 9 to 14% of the surface width, because TabeebX is not yet known (my judgment, no source gives a logo size); the end card at up to 300 px (source file limit). Do **not** copy the textured pill (gradient-like texture, not in our palette) or the tight leading (see Conflicts).
- **Sources:** case study page https://www.nan.xyz/custom/wise/ ; images https://www.nan.xyz/wp-content/uploads/06_Wise_OOH_SF.jpg , https://www.nan.xyz/wp-content/uploads/31-Wise_RaggedEdge-LDN.jpg , https://www.nan.xyz/wp-content/uploads/Wise-changed-how-the-world-moves-its-money.-But-that-was-just-the-start.This-is-a-rebrand-to-tak-2.jpg
- **Evidence type:** image_viewed (3 images) and page_read. **Confidence:** 85% on the qualitative description; 55% on the percentages (by eye); 90% that the case is a 2023 Ragged Edge and NaN project (page text). Relevance to Arabic social: medium (Latin capitals, mockups).
- **A warning about third-party "Wise design system" write-ups:** several sites claim Wise Sans runs at weight 900 with line-height 0.85 and sizes up to 562 px. These pages are third-party and probably machine-written (one is a package file in an AI-tool bundle). I could not confirm them in any Wise or NaN source. 0.85 is consistent with what I saw in the tote image, but I did not measure it. Confidence 45%.

#### A4. Google/Kantar ABCD: show the brand early and often, emphasise key points with text and audio, avoid competing elements
- **Claim:** Google's ABCD guide (Attention, Branding, Connection, Direction), built from a Google/Kantar analysis of 11,000 ads, says "Brand early, often, and richly" and, for attention, "Emphasise key points" with audio and text while avoiding competing elements. Google reports a 30% lift in short-term sales likelihood and a 17% lift in long-term brand contribution for ads that follow the principles.
- **Why it works:** it is an association between following the principles and effectiveness; it is a platform owner's analysis, not an experiment. Google sells the ad inventory.
- **How TabeebX would apply:** this is the evidence behind the critic's Rand note (logo scale, signing from the first frame, 7.0). Put the official logo in frame 0.0 s at 200 to 240 px wide, inside the safe zone, as part of the layout (not a sting), and keep it on screen or return to it. Keep one key-word block and one device per frame, no competing third element. Currently design-studio allows the logo "within about 5 s".
- **Source:** https://business.google.com/en-all/resources/articles/abcds-of-effective-video-ads/ (page dated May 2023; stat footnote "Google/Kantar, The Short & the Long of ABCDs Effectiveness, Global, Apr 2021. n=11,000 ads").
- **Evidence type:** page_read. **Confidence:** 90% that the page says this; 55% that the lift is caused by the principles; 55% that logo-at-0.0 s at 200 to 240 px is the right size (no source gives a logo size).

#### A5. TikTok's own deck: land the value proposition in the first six seconds, brand "subtle" inside the hook, text pop-ups sustain attention
- **Claim:** TikTok's *Creative Codes* says to "Land the content value proposition early and in the first six seconds", reports that 90% of ad-recall impact and 80% of awareness impact is captured within 6 seconds (TikTok "Value of View" analysis, 2020), and says branding in the first few seconds "should be subtle and not compromise the hook". It lists text pop-ups among its "stimulation" techniques as a way to "sustain high engagement" (no separate source is given for that table cell). It also claims sound-on is dominant on TikTok (90% of users say sound is vital to the experience, cited to a 2021 Kantar cross-platform sound study; the sample base is not clear from the text).
- **Why it works / limits:** TikTok-authored marketing research; 2020 to 2022 data. The sound-on claim conflicts with our sound-off assumption for Meta, where captions carry the message.
- **How TabeebX would apply:** for 15 to 20 s reels: the key-word hook is fully on screen at 0.0 s (our rule); the payoff of the idea lands by 6 s; the logo is present from frame 0 at small scale (A4), enlarged only on the end card. Design every reel to work muted (key words burned in), and let Yaqoob add a sound layer when posting to TikTok, where the deck says it pays off. Note the tension with A4: "subtle" branding in the hook means the logo stays at 200 to 240 px, it does not become the hero.
- **Source:** https://ads.tiktok.com/business/library/Creative_Codes_ENG.pdf (9 pages)
- **Evidence type:** page_read (PDF text). **Confidence:** 90% that the deck says this; 50% that the percentages transfer to Iraqi health content (no Iraq data found).

#### A6. Safe zones decide how big the key words can be (our rules are stricter and inconsistent with each other)
- **Claim:** third-party tools attribute to Meta's Ads Guide a Reels-ad safe area of 14% top, 35% bottom and 6% each side, which is about 269 px top, 672 px bottom and 65 px each side on 1080x1920. They say Meta publishes it only for ads, not organic Reels, that the bottom figure is the least settled (other articles give 20 to 35%), and that one guide says 40% when a disclaimer is shown. A claim that Meta merged all four 9:16 placements into one zone in March 2026 is unverified.
- **How TabeebX would apply:** if a reel might become an ad, keep key words between y=269 and y=1248 (979 px tall) and x=65 to 1015. Our design-studio rule for 9:16 video is y 220 to 1420 and 180 px side margins (a 720x1200 box), while its Stories rule is 65 px sides, top 250, bottom 340. The 180 px side margin shrinks the text width to 720 px and the biggest 4-letter word from about 370 px to about 285 px (table in A2). See Conflicts, item 2.
- **Sources (search results; I did not determine which page carried which figure):** https://www.inro.social/tools/instagram-reels-safe-zone-checker , https://www.socialync.io/tools/safe-zones/instagram-reels , https://billo.app/blog/meta-ads-safe-zones
- **Evidence type:** search_snippet. **Confidence:** 55% for the 14/35/6 split as Meta's own; 35% for the March 2026 unification claim. No TikTok safe-zone figures found.

---

### Part B. Ownable symbols

#### B1. "Ownable" means unique and famous; the map pin probably fails the first test
- **Claim:** a distinctive brand asset (Jenni Romaniuk's concept) is "a non-brand-name trigger for a brand name in category buyer memory" (quote as given by the Hamerlinck article, attributed there to WARC). Assets are scored on uniqueness (how easily recognised against competitors) and fame (how many people recognise it); high on both is the most valuable. Ipsos's paper (2017) says assets "can be legally owned" unlike a differentiating benefit, and that an asset need not carry meaning to work, though it helps if it supports what the brand stands for. Ipsos scores an asset on four measures: Brand Linkage (does it intuitively evoke the brand, measured by implicit reaction time), Brand Uniqueness (its association with the brand compared with other brands; an asset that too often evokes competitors is more useful to them than to you), Sentiment and Brand Alignment. Ipsos uses "uniqueness" and "linkage", not "fame"; "fame" is the Romaniuk term as the Hamerlinck article gives it. The article also cites an Ipsos finding that only 15% of assets are truly distinctive; that figure is not in the Ipsos paper I read.
- **Why it works:** it separates two jobs the current map pin mixes up: a symbol that explains ("a place, a visit") and a symbol that identifies ("this is TabeebX"). A map pin is used by many delivery and navigation brands, so by this logic its uniqueness is low whatever its meaning (my reasoning; no source measured the pin). Fame can only come from repetition.
- **How TabeebX would apply:** (1) score each candidate symbol before design, 0 to 10, on two questions: "would a competitor's post look wrong with this?" (uniqueness) and "have Iraqi viewers seen it often enough to link it to us?" (fame, which starts at zero and rises with use); (2) the "hide-the-logo" check: cover the logo; could a Baghdad viewer name TabeebX from the symbol, the colours and the layout? (3) we are limited to Cairo and four colours, and Cairo is a free font any competitor can use, so **ownership has to come from a device, a layout and a motion move**, not the typeface or palette (the Volkswagen GTI custom Arabic typeface by Cheil Dubai, 2025, is a typeface-as-asset example we cannot follow under "Cairo only").
- **Sources:** https://letstalkbranding.substack.com/p/15-surprising-distinctive-brand-assets (Aug 2024) ; https://www.ipsos.com/sites/default/files/ct/publication/documents/2018-01/getting_brand_assets_right.pdf (Dec 2017) ; GTI typeface https://www.dandad.org/work/annual/behind-the-work/creating-a-typeface-inspired-by-the-design-aesthetics-of-the-volkswagen-golf-gti
- **Evidence type:** page_read (article, Ipsos PDF); search_snippet (GTI typeface). **Confidence:** 90% on the definition and the uniqueness idea (two sources); 85% on Ipsos's four measures; 40% on the 15% figure (one secondary source, not in the Ipsos paper); 50% that my two-question score is a usable shortcut for a survey-based method.

#### B2. Precedent for building a device from the brand's own mark: Swapfiets' tyre from the logo circle
- **Claim:** Swapfiets (Dutch bike subscription) owns a blue front tyre; the blue circle also appears in its logo and is used as an abstract graphic element, and the tyre is visible in public (cycling-team sponsorship). The same article lists Alan (a French health insurer) using a marmot character in a category full of banks and insurers (author works for Alan, so he is not neutral), and a YouTube channel owning bold type plus a yellow highlight (the author himself calls this "highly debatable" as ownable). An agency portfolio page (Freezil, for Ooredoo Qatar, 2021) describes a four-character cast where "difference carried by silhouette, colour, and one signature prop each".
- **Why it works:** the device is a piece of the identity people already see, so repetition builds fame for the whole brand at once; it costs no new colours or fonts.
- **How TabeebX would apply, from the logo I viewed (512 px stacked logo):** a pink circle head; two blue arms rising from a base in a V that cradles the head; a pink cross-shaped torso with rounded concave corners; blue quarter-shapes at the bottom corners; a white curved channel between arms and torso. Candidate derived devices (new geometry; the official logo file is never cropped, recoloured, re-drawn or animated):
  1. **Dot and arc ("lift"):** a flat pink circle that rises into a blue arc (arms-up V), replacing the map pin at the end of the door animation. Size 160 to 220 px on 1080 px. The door opens, the dot rises into the arms, then the official lockup takes its place or sits beneath. Pink is the frame's single pink group, so the key words stay white.
  2. **Arms-up V as a bracket:** two blue strokes at about the logo's arm angle (by eye roughly 40 to 50 degrees off vertical; measure the PNG before building) framing the key word from below, used the same way in every slide.
  3. The rounded cross is the least ownable (generic medical plus); avoid.
  - Fame comes from showing the same device in the same position (for example the same last-frame spot) in every piece for weeks. I found no number for how many exposures; see Gaps.
  - Risk: a derived gesture that looks like a recoloured logo breaks "logo unaltered". See Conflicts, item 3.
- **Sources:** https://letstalkbranding.substack.com/p/15-surprising-distinctive-brand-assets ; https://freezil-website-wjfnk.kinsta.page/work/ooredoo-characters ; logo `.claude/skills/design-studio/assets/brand/tabeebx-logo-stacked.png` (repo)
- **Evidence type:** page_read (article, agency page); image_viewed (logo). **Confidence:** 80% on the Swapfiets example as described; 40% on the Ooredoo page (a studio's own "from the archive" portfolio on a staging-like host, figures unverified); 50% on the dot-and-arc proposal as a good ownable symbol (design reasoning; no test); 45% on the arm-angle estimate.

#### B3. Characters ("fluent devices") are a known ownable-asset route, but they do not fit our rules unchanged
- **Claim:** Orlando Wood's term "fluent devices" covers recurring characters (human, animal, fantastical). System1 reports that Aldi UK's Kevin the Carrot Christmas ads have increased in tested effectiveness year on year, reaching the maximum 5.9 stars two years running. The Hamerlinck article says mascots are "actually the most powerful assets together with sonic assets", citing science without naming a study.
- **How TabeebX would apply:** not recommended now. A person-like character risks looking like invented staff (rule 3). Listed only so Yaqoob sees the option (Conflicts, item 6).
- **Source:** https://system1group.com/blog/leveraging-the-magic-of-memorable-characters-in-advertising
- **Evidence type:** search_snippet. **Confidence:** 65% that System1 reports this; 40% on the "most powerful" claim (uncited).

---

### Part C. Carousel structure

#### C1. Slide 2 must work as a standalone hook, because Instagram may show the carousel again starting there
- **Claim:** Adam Mosseri is reported to have said carousels often get more reach for two reasons: more interactions, and that if someone does not swipe, Instagram will "often give that carousel a second chance" (as quoted by Pulse Advertising). Planoly's write-up (28 April 2025) says the second showing may start on slide 2. Other sources say slide 2 or 3. This is reported, not a confirmed platform rule, and I did not find the original video.
- **Why it works:** a second impression from a different slide is a second chance with a different first view.
- **How TabeebX would apply:** structure every carousel as: **S1 hook** (key words 85%+ of width, setup line, logo 200 to 240 px); **S2 a second hook, not a continuation** (restates the one idea in different words, carries the logo and the device small, makes sense with no slide 1); **S3 to S(n-1) progression**, one idea per slide, key words per slide at hero or key-line tier (A2), same grid and device position as S1; **S(n) action**: one verb-led line as the key words, the dot-and-arc device, the official lockup at up to 300 px. Slide count: no measured optimum found; suggest testing 5 against 8 (Gaps).
- **Sources:** https://planoly.com/blog/instagram-carousels-are-making-a-comeback (page_read) ; https://www.pulse-advertising.com/?p=18822 (search_snippet quoting Mosseri)
- **Evidence type:** page_read (Planoly); search_snippet (Pulse). **Confidence:** 70% that Mosseri said the second-chance part; 40% that the second view starts on slide 2 specifically.

#### C2. Carousels outperform single images on engagement and saves (2026 data, reported second-hand)
- **Claim:** Metricool's 2026 Instagram study (24,364,803 posts from 375,118 accounts, January to February 2026 against 2025), as reported by t3n: engagement rate 1.99% for single images, 3.08% for carousels, 4.30% for Reels; carousels get nine times the saves of single-image posts; single-image posts lost about 22% of reach and over 25% of their interaction rate year on year. I read the German summary, not the Metricool report.
- **Why it matters:** if the goal is saves and shares, the carousel is the format; single-image feed posts are the weakest. It also argues for a Reel alongside rather than instead of carousels.
- **How TabeebX would apply:** use carousels for save-worthy, single-takeaway sets, and put the "save" action on the last slide as the key words. Do not claim these rates for TabeebX; they are global averages across account sizes.
- **Source:** https://t3n.de/news/instagram-formate-beste-performance-metricool-studie-1751388/
- **Evidence type:** page_read (article). **Confidence:** 75% that the figures are as the article reports; 50% that they transfer to a new Iraqi health account.

#### C3. Older, vendor-sourced slide-count data: weak, do not rely on it
- **Claim (search snippet):** Socialinsider's Instagram carousel study (posts from 2017 to 2020, nearly 3 million carousels) found 10-slide carousels had the highest engagement rate; most carousels have 2 to 4 slides; only about 6 to 7% use all 10. Blogs say 7 to 10 slides for education and 3 to 5 for product showcases, 5 to 10 words on the cover, and "under 30% of the slide as text". These are rules of thumb with no stated method.
- **How TabeebX would apply:** none directly. The 30% text-area rule of thumb contradicts a type-led design, so I do not adopt it; the blur test (A1) replaces it.
- **Source:** https://www.socialinsider.io/data-geeks/Instagram-Carousel-Study.pdf (my download was not a readable PDF) ; https://nealschaffer.com/instagram-carousel/
- **Evidence type:** search_snippet. **Confidence:** 45% for the Socialinsider numbers; 30% for the blog rules.

#### C4. Last-slide action and swipe cue: argued, not measured
- **Claim:** blogs recommend a visible swipe cue on slide 1 (arrow or page count) and judging carousels by swipe-through rate, last-slide-reached rate and saves. No measured test of last-slide calls to action found.
- **How TabeebX would apply:** cue on S1 only if it does not become a third text level; check the cue's direction in an Arabic-language Instagram app (Gaps). Track per-slide reach in Instagram insights after posting.
- **Source:** https://nealschaffer.com/instagram-carousel/ (search_snippet)
- **Evidence type:** search_snippet. **Confidence:** 35%.

---

### Part D. Rhythm: timing and easing values that code can use

#### D1. Material 3 motion tokens give a ready, documented set of durations and cubic-bezier curves
- **Claim:** the Material Web token file (copyright 2023) defines durations short 50/100/150/200 ms, medium 250/300/350/400 ms, long 450/500/550/600 ms, and easings: standard `cubic-bezier(0.2, 0, 0, 1)`, emphasized-decelerate `cubic-bezier(0.05, 0.7, 0.1, 1)`, emphasized-accelerate `cubic-bezier(0.3, 0, 0.8, 0.15)`, standard-decelerate `cubic-bezier(0, 0, 0, 1)`, standard-accelerate `cubic-bezier(0.3, 0, 1, 1)`.
- **Why it works / limits:** UI motion tokens, not social video; they are widely used and tested for UI comfort, not for kinetic Arabic type. They match our existing rules (enter 250 to 400 ms ease-out, exit 150 to 200 ms ease-in).
- **How TabeebX would apply:**
  - Key words in: whole-word or whole-line mask reveal in reading direction (right to left), 350 to 400 ms, `cubic-bezier(0.05, 0.7, 0.1, 1)` (fast start, long soft landing). No letter-by-letter.
  - Setup line in: same curve, 300 ms, starts 120 ms after the key words (my proposal), or is already there at 0.0 s if the hook is a still.
  - Exit: 150 to 200 ms, `cubic-bezier(0.3, 0, 0.8, 0.15)`.
  - Payoff symbol in: 400 to 500 ms, the same decelerate curve, a 40 px rise plus opacity, no bounce; hold at least 1500 ms (our minimum) before the lockup.
  - Cut rhythm: the reading-time rule in design-studio stays (0.45 s per word plus 0.5 s, minimum 1.5 s). The critic's Cooper 7.0 to 7.5 note is about holds; I found no external study giving better hold times for Arabic, so keep that rule.
- **Source:** https://raw.githubusercontent.com/material-components/material-web/main/tokens/versions/v0_192/_md-sys-motion.scss
- **Evidence type:** page_read (source file). **Confidence:** 95% that the values are as listed; 60% that they are the right feel for kinetic type; 50% on the 120 ms stagger (my proposal).

---

### Part E. One concrete recipe to test (proposal, not a finding)

Built from A1 to A6, B2, C1 and D1. Confidence 50%: nothing here has been tested on TabeebX content.
- **Hook slide 1080x1350:** navy ground; margins 72 px (text width 936 px); key block Cairo 800 white, two lines, longer line fitted to 880 to 936 px (typically 150 to 200 px), line-height 1.25; setup line Cairo 500, 50 to 56 px, above the key block (ratio about 3:1); logo (white-wordmark version) 200 to 240 px at the bottom, centred; no pink on the slide except one pink group (either one key word or the device, not both); device small and in the same corner on every slide. Inside the 1012 px centred crop for the profile grid.
- **Reel frame 1080x1920:** key block between y 330 and y 1200 (inside both our 220 to 1420 and the third-party Meta 269 to 1248); width 936 px if Yaqoob approves 72 px side margins (a two-word 9-letter line then fits at about 160 to 180 px), else 720 px (the same line drops to about 123 to 138 px, so a single hero word is the better choice).
- **Checks before the critic:** three thumbnails; blur at 10 and 20 px; key-to-other pixel-mass 3 or more; hide-the-logo test; phone-size look.

---

## Conflicts with our rules (proposals for Yaqoob)

1. **Studio guidance "headline about 1.6 to 2 times the body" versus a 3:1 or more target.** design-studio says headline about 1.6 to 2 times body; the critic's Scher note and the viewed Wise examples want 3:1 or more. With the 46 px body minimum, 3:1 means 138 px or more. Not in CLAUDE.md as a hard rule, but it is studio guidance. Proposal: change it to "key words 3:1 to 6:1 over the setup line, 138 px minimum".
2. **180 px side margins for 9:16 video versus 65 px for Stories and Meta's reported 6%.** The 180 px margin cuts text width from 936 to 720 px and the largest fitting word by about 23%. This touches the hard rule "text stays in the platform safe zones", so it needs your choice. Proposal: use 65 to 72 px side margins for key words on 9:16 (as for Stories), and keep the bottom key-word edge at y 1248 or higher up if the piece may become an ad (Meta's reported 35% bottom band is about 170 px deeper than our Stories band). TikTok's own side-rail zone: not found.
3. **A derived "dot and arms" device versus "the logo is used unaltered".** The proposal draws new geometry; it never crops, recolours or animates the official logo file. A close look-alike could be read as an altered logo. Needs your yes or no, and your choice of whether it may appear before the official lockup in the same shot.
4. **Wise-style tight leading versus our Arabic line-height of 1.25 to 1.4.** Latin capitals tolerate 0.85. Cairo's ink height is about 1 em with descenders and dots, so tight leading would collide. We keep the hard rule; density comes from size, not leading. No change proposed; recorded so nobody copies it.
5. **Wise's textured gradient-like pill versus "no gradients".** Not copied. Our device must be flat in navy, white, pink or blue.
6. **A recurring character (Alan's marmot, Ooredoo's cast) versus rule 3 (no invented doctors or staff) and the one-pink-group rule.** A non-person, palette-only character is technically possible but is a new element and a new risk. Not recommended now. Only your decision.
7. **TikTok's sound-on claim versus sound-off design.** Not a rule conflict. Proposal: keep reels fully readable muted and add a sound layer in the app for TikTok posts.

---

## Gaps (not found)

- **Reddit evidence for all four subreddits (r/graphic_design, r/design_critiques, r/brandidentity, r/socialmedia):** not found. The search tool refused the domain and returned no Reddit pages; WebFetch was refused. Recurring critiques on type-led social posts are therefore not documented here.
- **A measured share of the frame the key words should fill, and a measured key-to-support size ratio:** not found. The 3:1 floor and the 85% width target come from the critic's note, the viewed Wise images (by eye) and our own measurement, not a study.
- **Analysis of individual health, fintech or telecom Instagram, TikTok or Facebook posts:** none done (no profile viewed). The viewed Wise examples are agency mockups, not social posts.
- **Arabic-language type-led case studies from a health, bank or telecom brand:** not found. The only Arabic example found was the Volkswagen GTI custom typeface (Cheil Dubai, 2025), which is a car launch, and the Ooredoo Qatar character page (unverified).
- **How many exposures make a symbol "famous":** not found; fame is only a score in the theory.
- **Ipsos "15% of assets are truly distinctive" primary source:** not found. The Ipsos paper I read (2017, 4 pages of text) does not contain that figure; the only source is the 2024 Hamerlinck article.
- **Original Mosseri video; original Metricool and Buffer reports; Mentionlytics "80% of carousel engagement on the first slide" figure (seen only in a search summary, not used):** not found.
- **Carousel slide-count optimum, last-slide call-to-action performance, swipe direction and cue direction in an Arabic-language Instagram app:** not found.
- **Meta's own safe-zone page and TikTok's safe-zone numbers:** not found; Meta figures are third-party.
- **Iraq-specific sound-on versus sound-off share:** not found.
- **Wise's official brand guidelines:** `wise.design` is a script-rendered shell my reader could not parse; its pages were not read.
- **Whether the Socialinsider PDF numbers are right:** the file I downloaded was not a valid PDF, so only the search summary was seen.

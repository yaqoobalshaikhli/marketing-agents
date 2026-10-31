# Focus competitor: Saleem (سليم), week 44

Run date: 2026-10-28. Researcher: competitor-intel (focus run). Iraq, Baghdad focus.

**How to read the evidence in this file.** No web page could be fetched this run: apps.apple.com, play.google.com, appgoblin.info and mwm.ai all failed DNS resolution (`ENOTFOUND`), which means those hosts are outside the session's allowed network domains. Every web fact below therefore comes from WebSearch results, which the tool returned as short summaries of the pages, not as raw page text. Evidence type is `search_snippet` throughout, so nothing here is `page_read` or a first-hand `app_store_page` read. Figures from third-party app trackers are estimates, not store numbers. Ad facts come from `data/competitors/ad-log.csv` and `watchlist.csv` (Ad Library link titles, last seen 2026-10-17); no new Ad Library calls were made.

## 1. Summary table

| Fact | Value | Source | Evidence | Confidence |
|---|---|---|---|---|
| What it is | Iraqi app and service for booking home healthcare: doctor visits, nursing, physiotherapy, home lab, imaging, wound care | https://apps.apple.com/app/id6474654440 | search_snippet of app_store_page | 85% |
| Website | not found | several searches, see section 14 | n/a | n/a |
| Coverage per store listings | Baghdad only (directory and home services both named for Baghdad) | https://play.google.com/store/apps/details?id=com.saleemiq.android&hl=en | search_snippet | 70% |
| Hilla (الحلة) | Appears only in ad link titles for home nursing; no web source confirms Hilla service | ad-log rows 3273547716369347, 1649473036888477 | ad-log (Ad Library link title) | 85% that the ads mention Hilla; 25% that other services are offered there |
| Published prices | not found | n/a | n/a | n/a |
| Booking | In-app booking with in-app electronic payment; a phone number appears in some ad link titles; WhatsApp not found | App Store and Play listings (snippets); ad-log | search_snippet; ad-log | 70% app, 60% phone, WhatsApp not found |
| Android app | 4.2 stars, 51 ratings, about 59.6K installs (tracker estimate), last update 2026-04-13, version 100 | https://appgoblin.info/apps/com.saleemiq.android | search_snippet of tracker | 55% |
| iOS app | Seller Seniorplus LLC; rating figures conflict (4.7 from 23, 4.31 from 26, 5.0 from 3 on a stale copy) | see section 8 | search_snippet | 50% |
| Scale claim (self-reported) | 350+ providers, 15,000+ patients served in Baghdad, 30+ partner companies and institutions | https://village.ai/person/taha-ayad-NjIwMDU0MTE2 | search_snippet of a directory profile written by the person himself | 35% |
| Founded / size | 2023; 30+ employees (directory profile) | https://village.ai/company/saleemapp | search_snippet | 50% |
| Press | Named a finalist of Zain Great Idea (Oct 2025) | https://meatechwatch.com/2025/10/27/zain-great-idea-sends-13-regional-startups-to-silicon-valley-for-global-acceleration-program/ | search_snippet | 70% that a startup called Saleem was listed; 65% that it is this company |
| Ad activity | 45 Library IDs logged, all active at last sight (2026-10-17); about 120 active estimated | `data/competitors/ad-log.csv`, `reports/competitor-intel/2026-W42.md` | ad-log | 100% for 45 logged; 70% for ~120 |
| Threat level | High for consumer home care in Baghdad | section 13 | n/a | 65% |

## 2. Who they are

- A home-healthcare booking platform in Iraq. The App Store listing describes it as an app that connects patients with vetted providers for home medical services. Source: https://apps.apple.com/app/id6474654440 (search_snippet, 85%).
- Founded 2023, 30+ employees, "home health care services" industry, per a business-directory profile. Source: https://village.ai/company/saleemapp (search_snippet, 50%). This is the company's own listing, not independent.
- Founder: Zain Iraq's press release (Dec 2025) names the Saleem founder as Taha Ayad and describes Saleem as a health-tech venture covering telemedicine and homecare applications. Source: https://www.iq.zain.com/en/about-us/media-coverage/baghdad-silicon-valley-zain-iraq-selects-two-innovators-advance-zain-great-idea (search_snippet, 65% that this is the same company as the home-care app; the release text I saw is the tool's summary). I recorded only this business-role fact from a company press page and nothing else about any individual.
- Operator names on the stores: iOS seller "Seniorplus LLC" (multiple search results agree, 80%). One tracker lists the Android developer as "Saleem Health" (search_snippet, 45%).
- A separate provider-side app exists, "Saleem Team" (`com.saleemiq_team.android`), about 164 installs, last update 2024-04-28. Source: https://appgoblin.info/apps/com.saleemiq_team.android (search_snippet of tracker, 55%).
- Facebook username `saleemapp.iq` and Instagram `saleem.app` are on file in `watchlist.csv`; neither was opened.
- **Do not confuse with:** Saleem Telemedicine (Bahrain, NHRA-licensed, https://startupbahrain.com/blog/saleem-how-saleem-is-connecting-gulf-patients-to-specialist-care-across-borders), "Saleem Habits", "Saleem HC" (mental health), "Saleem | سليم" (diabetes) and "Saleem Memorial Hospital". None of these is the Baghdad home-care company.
- An earlier search result claimed an Iraqi college news page says the platform was "created and managed by doctors". I could not reproduce that on a second search, so it is not used (see section 14).

## 3. Services and coverage

**Services, from the store listings (search_snippet, 75% to 85%):**
- Doctor visits, general practitioners and specialists.
- Home nursing.
- Physiotherapy sessions.
- Lab tests with home sample collection.
- Imaging at home: echo, ultrasound, Doppler named in the Play snippet.
- Eye exams and wound care.
- Family profiles, saved addresses, tracking of current and past requests.
- A directory of hospitals, clinics, pharmacies and labs, named as Baghdad.
- A provider side to manage visits and create orders for their patients.
- Remote consultations by voice and video, described as added in a more recent version (Play snippet, 60%). Sources: https://play.google.com/store/apps/details?id=com.saleemiq.android&hl=en and https://apps.apple.com/app/id6474654440.
- Directory profile adds that it serves individuals, companies and foreign citizens (https://village.ai/company/saleemapp, search_snippet, 40%). This would be a B2B hint, but no corporate package was found.

**Baghdad versus Hilla.**

| | Baghdad | Hilla |
|---|---|---|
| Store listings | Named: home services and the medical directory (Play and App Store snippets, 70%) | Not named in any listing or web result (several searches, 75% that nothing is published) |
| Ads (ad-log) | The 10 «خدمة زيارة الطبيب المنزلية» / «احجز هسة» ads (created 2026-09-28), 18 + 4 «سوي تقييمج المجاني هسه» ads and 8 «طبيبك على بعد مكالمة» ads carry no city in the link title | Two of three home-nursing ads started 2026-10-06 name Hilla: «تمريض منزلي بمستوى المستشفى — الحلة» (3273547716369347) and «تمريض منزلي أسهل — الحلة» (1649473036888477). The third, «خدمة التمريض المنزلي من سليم» (1701502414281336), names no city |
| What is sold | Doctor visits, nursing, lab, physio, imaging per listings. Which of these are sold in Baghdad only is not stated | Home nursing is the only service advertised with the city name. Doctor visits, lab and physio in Hilla: not found |

- Reading: Saleem appears to have started selling home nursing in Hilla in October 2026 through ads, while its store listings still describe Baghdad. Confidence 55%, because it rests on two link titles and my inability to open the ads. Whether there is a team on the ground in Hilla is not found.
- Districts within Baghdad: not found.
- Other cities (Basra, Erbil, Najaf, Mosul): not found.

## 4. How booking works

- **App (iOS and Android):** book in the app, add family members, save addresses, pay electronically in the app, track visit status. Source: https://apps.apple.com/app/id6474654440 (search_snippet, 70%). Payment methods and whether cash on visit is accepted: not found.
- **Phone:** the ad-log notes that some 2026-09-28 ads (1865682404400406, 1639283474514079) have link titles of «احجز هسة» plus a phone number. The number is not recorded in the log and was not looked up. Confidence 60% that these ads send people to a phone line; 85% that a phone number is in the title.
- **WhatsApp:** not found. One search specifically for it returned nothing about Saleem.
- **Website booking:** website not found.
- **Opening hours:** not found. The listings do not say 24 hours (search_snippet, 65%).
- **Free assessment offer:** 22 ads use the link title «سوي تقييمج المجاني هسه» (18 created 2026-10-11, 4 created 2026-10-13, ad-log). What the assessment is and where it leads: not found (ad content not reviewed).

## 5. Published prices

| Service | Price | Currency | Source | Date seen |
|---|---|---|---|---|
| Doctor visit | not found | n/a | store listings and web searches show features only | 2026-10-28 |
| Home nursing | not found | n/a | same | 2026-10-28 |
| Lab, physio, imaging | not found | n/a | same | 2026-10-28 |
| Free assessment | free per the ad link title «سوي تقييمج المجاني هسه» (what it covers is not found) | n/a | ad-log | seen 2026-10-17 |

No price was found on any page I could reach. The Play and App Store listings and the directory profile mention no prices. The in-app price list can only be seen by installing the app.

## 6. Claims they make

| Claim (as shown) | Where | Confidence |
|---|---|---|
| «خدمة زيارة الطبيب المنزلية» | link title, 8 ads from 2026-09-28 (ad-log) | 90% (ad-log, link title only) |
| «احجز هسة» | link title, 2 ads from 2026-09-28 (ad-log) | 90% |
| «حمل التطبيق الآن» | link title, 2 ads from 2026-08-20 (ad-log) | 90% |
| «تمريض منزلي بمستوى المستشفى — الحلة» | link title, ad 3273547716369347 (ad-log) | 90% |
| «تمريض منزلي أسهل — الحلة» | link title, ad 1649473036888477 (ad-log) | 90% |
| «سوي تقييمج المجاني هسه» | link title, 22 ads from 2026-10-11 and 2026-10-13 (ad-log) | 90% |
| «طبيبك على بعد مكالمة» | link title, 8 ads from 2026-10-06 (ad-log) | 90% |
| Providers are "vetted for quality" | a localized store page, as paraphrased by the search tool; exact wording not seen | 50% |
| 350+ providers, 15,000+ patients in Baghdad, 30+ partnerships | self-reported on a person's directory profile, https://village.ai/person/taha-ayad-NjIwMDU0MTE2 | 35% |

Notes: the tone of the ads is Iraqi dialect («هسة», «سوي», «هسه»), the same register TabeebX uses. Ad body text and visuals were not reviewed.

## 7. Trust cues

- **Licence from the Ministry of Health:** not found.
- **Named doctors:** not found.
- **Insurers or TPAs:** not found.
- **Partners:** a self-reported "30+ companies and institutions" (35%). Names not found.
- **Certifications:** not found.
- **Press and programmes:** finalist in Zain Great Idea 2025 (see section 10). This is the only third-party signal found.
- **Provider vetting:** claimed on store pages (50%), no standard or body named.
- A university page in the search results said home healthcare in Iraq has no comprehensive law or organized government system (https://www.uomus.edu.iq/CollegeEn/Details/102220, search_snippet, 60%). So an absent licence is not unusual for this segment, and it does not show Saleem lacks one.

## 8. App listing

All figures are second-hand (search_snippet). Store pages could not be fetched.

| Item | Android (Google Play) | iOS (App Store) |
|---|---|---|
| Package / id | `com.saleemiq.android` | id6474654440 |
| Store | https://play.google.com/store/apps/details?id=com.saleemiq.android&hl=en | https://apps.apple.com/app/id6474654440 |
| Rating | 4.2 (tracker) | 4.7 (App Store snippet); 4.31 (tracker); 5.0 on an old Iraq-storefront copy |
| Number of ratings | 51 (tracker) | 23 (App Store snippet); 26 (tracker); 3 (old copy, about 998 days stale) |
| Downloads | about 59.6K installs and about 5.9K monthly active users, both tracker estimates; Google Play's own range band not seen | about 1.3K installs (tracker estimate) |
| Last update / version | 2026-04-13, version 100 (tracker); first released Apr 2024 | version 3.68.1 dated 2024-02-21 on a mirror, probably stale |
| Seller / developer | "Saleem Health" per one tracker (45%) | Seniorplus LLC (80%) |
| Category, age, price | Medical | Medical, age 17+, free, iOS 13.4 or later |

Sources for the table: https://appgoblin.info/apps/com.saleemiq.android, https://appgoblin.info/apps/6474654440, https://mwm.ai/apps/saleem/6474654440, https://apps.apple.com/iq/app/saleem-%D8%B3%D9%84%D9%8A%D9%85/id6474654440. Overall confidence for this section: 50%. The Android install estimate is the biggest figure here and the least certain; treat it as "tens of thousands, not verified". The Android app had no store update for about six months as of today if the tracker date is right (55%).

## 9. What reviewers say

Not found. No review text from either store, and no Reddit, forum or news complaint or praise, appeared in any search (about 4 searches aimed at this). Only the star averages and counts in section 8 are available, and the rating counts are small (23 to 51), so the star averages say little.

## 10. News, funding, hiring

| Date | Item | Source | Evidence | Confidence |
|---|---|---|---|---|
| 2025-10-27 | Zain Group announces 13 startups for its Great Idea Global Acceleration Program in Palo Alto. Iraqi names listed: Andalusi, Jaamila, Saleem | https://meatechwatch.com/2025/10/27/zain-great-idea-sends-13-regional-startups-to-silicon-valley-for-global-acceleration-program/ | search_snippet | 70% (65% that it is this Saleem) |
| 2025-12 | Zain Iraq press release: two Iraqi innovators, Jaamila and Saleem, advance to the programme stage with mentorship and Silicon Valley training; Saleem described as health-tech | https://www.iq.zain.com/en/about-us/media-coverage/baghdad-silicon-valley-zain-iraq-selects-two-innovators-advance-zain-great-idea | search_snippet | 65% |
| 2026-01-14 | Programme completed with 11 startups in the Global Acceleration phase, two fewer than the 13 announced. Whether Saleem was among the 11: not found | https://meatechwatch.com/2026/01/14/zain-great-idea-takes-11-regional-tech-startups-to-silicon-valley/ | search_snippet | 60% |
| 2026-02 | A Zain Iraq article refers to Demo Day for the Iraqi startups. Saleem's role on it was cut off in the result | https://www.iq.zain.com/en/about-us/media-coverage/zain-iraq-continues-support-enable-and-empower-local-innovation | search_snippet | 40% |

- **Funding:** no funding for the Baghdad company found. A $435k angel figure turned up, but it belongs to Saleem Telemedicine in Bahrain and does not apply here. Zain's accelerator is mentorship and exposure; a cash investment from it was not found.
- **Hiring:** no job listing found (one search).
- **Launch date:** not found. Android release April 2024 per tracker (55%); directory says founded 2023 (50%).

## 11. Ads on file

From `data/competitors/ad-log.csv` and `watchlist.csv`. Ad Library Page ID 105161715872501, Iraq, active ads, last seen 2026-10-17. Ad body text and visuals were not reviewed by anyone; only link titles exist. Days running = last-seen date minus start date.

- **45 Library IDs logged** (the W42 first run saw 15; the re-check added 30). Meta's own estimate for the 7 watched pages was 140 ads, of which only 50 were returned; W42 estimates Saleem at about 120 active ads (70%). The "about 15 ads" in the brief is the first-run count and is now out of date.
- The Ad Library returns 0 ads under the Facebook profile ID 100091483862574, so ads are filed under the Library Page ID.

| Batch | Start date | Ads logged | Days at last seen | Link title | Label |
|---|---|---|---|---|---|
| Home doctor visit | 2026-09-28 | 10 | 19 | «خدمة زيارة الطبيب المنزلية» (8), «احجز هسة» plus a phone number (2) | campaign push, running |
| App download | 2026-08-20 | 2 | 58 | «حمل التطبيق الآن» | oldest Saleem ads seen, 2 days under the 60-day long-runner line; by 2026-10-28 they would be 69 days if still active (not re-checked) |
| Home nursing | 2026-10-06 | 3 | 11 | two name Hilla, one names no city | test |
| Doctor-call push | 2026-10-06 | 8 | 11 | «طبيبك على بعد مكالمة» | campaign push, created within 6 minutes |
| Free assessment | 2026-10-11 | 18 | 6 | «سوي تقييمج المجاني هسه» | campaign push, created within 40 minutes |
| Free assessment | 2026-10-13 | 4 | 4 | «سوي تقييمج المجاني هسه» | campaign push |

- Pattern: Saleem launches ads in large same-day batches, four batches (33 ads) between 2026-10-06 and 2026-10-13, an 8-day span. The ads were in the log as `active` at last sight; they were not re-checked this week, so today's status is unknown.
- Our own page «Tabeebx» (Page 102936468976144) had one ad at the same time (ad-log, own). Comparison only.

## 12. Strengths and weaknesses against TabeebX

TabeebX facts used here come only from `tabeebx-brand/SKILL.md`.

**Saleem strengths (where TabeebX is behind or equal)**
- **A live app with a user base.** Android about 59.6K installs by tracker estimate, iOS rated in two storefronts (section 8). The brand skill lists TabeebX's consumer app as "in development". Confidence 60%, driven by the install estimate.
- **Ad volume and speed.** 45 logged Library IDs and about 120 estimated active, with batches of 8 to 18 ads launched on one day (ad-log). Confidence 70%.
- **Full home-care menu in one app.** Doctor, nursing, physio, lab, imaging, wound care and family profiles (store snippets). This overlaps TabeebX's home visits, nursing, lab, physio and ultrasound. Confidence 75%.
- **In-app payment and tracking** are described in the listing (70%). TabeebX's own payment flow is not stated in the brand skill, so I make no comparison.
- **Telehealth added** to the same app (Play snippet, 60%), which overlaps TabeebX's telehealth layer.
- **Dialect marketing.** Iraqi-dialect link titles («احجز هسة», «سوي تقييمج المجاني هسه») and a free-assessment hook (ad-log, 90% that the titles are as quoted).
- **Third-party recognition:** Zain Great Idea finalist (70%).
- **Moving into a second city:** Hilla nursing ads from 2026-10-06 (55% that this means real service there).

**Saleem weaknesses (where TabeebX can compete)**
- **No published prices found** anywhere I could look (section 5). A price-transparent offer from TabeebX would stand out only if TabeebX publishes one; I make no claim about TabeebX prices in consumer offers.
- **No licence, doctor names, insurer or partner names found** (section 7). The brand skill states TabeebX is licensed by the Iraqi Ministry of Health and may say so in consumer copy. Saleem's licence status is unknown, not shown to be absent.
- **Small, inconsistent rating samples** (23 to 51 ratings; conflicting figures across sources), so the 4.2 to 4.7 stars is weak proof of quality (50%).
- **Android app not updated for about six months** if the tracker date is right (55%).
- **No B2B product found.** TabeebX sells four in-house corporate tiers and Health 360 insurance (brand skill). I found no Saleem corporate package or insurance; the directory's "companies" mention (40%) is the only hint. Absence in search is not proof.
- **No WhatsApp channel found** (section 4); not proof that none exists.
- **No visible customer proof.** No reviews or testimonials found anywhere (section 9).

## 13. Threat level

**High, for consumer home care in Baghdad. Confidence 65%.**

Reasons:
1. It is the heaviest advertiser among the watched competitors by Library IDs on file (45 logged, about 120 estimated; ad-log and W42), with new same-day batches through mid-October.
2. Its service menu overlaps TabeebX's home-visit, nursing, lab, physio and telehealth layers in the same city (store snippets, 75%).
3. It has a live app with tens of thousands of estimated installs, while TabeebX's consumer app is in development (tracker estimate 55%; brand skill).
4. It has outside recognition (Zain Great Idea finalist, 65% that it is the same company) and a self-reported 2023 start with 30+ staff (50%).
5. It is testing Hilla nursing, so it is widening coverage (55%).

What lowers the rating: no prices, licence, reviews or B2B offer found; ad performance is unknown (link titles only); the install and rating numbers are tracker estimates; the scale claims are self-reported. For TabeebX's B2B corporate packages and Health 360 insurance, the threat is **low to unknown** (no Saleem equivalent found, 45%).

## 14. Gaps (not found)

- **Website:** not found after searches for the brand name, `saleem.iq`, `saleemiq` and `saleemapp.com`. One search summary said the directory profile lists `saleemapp.com`; I could not reproduce that and could not open the page, so it is an unverified lead (25%), not a finding.
- **Store pages not read directly.** apps.apple.com and play.google.com did not resolve in this session (also appgoblin.info and mwm.ai), so the rating, count, download range, version and "what's new" fields are second-hand and some conflict. Allowing those hosts in the session's network settings would let a re-run read them first-hand. Only after that should the section 8 numbers go into any decision.
- **Prices** for any service, in any city: not found. Needs the app or a call.
- **Hilla:** which services, which team, since when: not found. Only two ad link titles mention it. Opening ads 3273547716369347 and 1649473036888477 in the Ad Library (for Yaqoob, not opened by me) would show the creative and the destination.
- **Baghdad districts covered, opening hours, response time:** not found.
- **Phone number and WhatsApp:** the phone number in the «احجز هسة» ad titles was not recorded in the log. WhatsApp booking not found.
- **Reviews:** no review text found in any source.
- **Licence, named doctors, insurers, partner names:** not found.
- **Funding, hiring:** none found for this company.
- **Zain link:** the two Zain items rest on search summaries that match on the name "Saleem" and a health-tech description; the match to this exact company is 65%. Whether Saleem was among the 11 startups that attended the Silicon Valley phase is not found.
- **An unverified claim, not used:** an earlier search summary said a college news page called the platform "created and managed by doctors and registered in Baghdad". A direct follow-up search on that site found nothing, so I dropped it.
- **Self-reported scale** (350+ providers, 15,000+ patients, 30+ partners) comes from a person's own directory profile, not from the company site or press. Treat as a claim only.
- **Ad content** (body text, images, destination) not reviewed by anyone; today's status of the 45 logged ads not re-checked (no new Ad Library calls this run).

Searches used: 24 WebSearch calls plus 4 failed WebFetch calls. Compliance: no facebook.com, instagram.com or tiktok.com page was opened; no one was contacted; Perplexity not used.

## Verification (2026-10-28)

Independent fact-check run the same day. Method: WebSearch only (about 63 calls across all six files, 2 "extended"), no fetches made. Evidence is a search-tool summary of a store page, press release or aggregator, never a page read. "Confirmed" means reproduced from the primary page in a fresh search. Ad Library facts (45 IDs, Hilla ads) cannot be tested with web search and are marked unverifiable.

| # | Claim | Verdict | Independent evidence | Corrected value |
|---|---|---|---|---|
| 1 | AppGoblin shows Android 59.6K installs, 51 ratings, updated 2026-04-13, version 100, released Apr 2024 | confirmed | https://appgoblin.info/apps/com.saleemiq.android (same tracker as the original, so not independent of it) | none, but see rows 2 and 3 |
| 2 | Android rating 4.2 from 51 ratings | contradicted | A Google Play snapshot summary shows 4.1 from roughly 65 to 74 reviews (https://play.google.com/store/apps/details?id=com.saleemiq.android&hl=en) | about 4.1, 65 to 74 reviews on a Play snapshot; counts differ by snapshot |
| 3 | About 59.6K Android installs (tracker estimate) | unverifiable | The Play snapshot summaries gave a 50K+ band in one and 100K+ in a newer one; a follow-up search could not support 100K+. The mwm.ai aggregator (https://mwm.ai/apps/saleem/6474654440) shows "24K+" for iOS | do not quote 59.6K as a store number. Play band is 50K+, possibly 100K+ |
| 4 | iOS ratings conflict: 4.7 from 23, 4.31 from 26, 5.0 from 3 (stale) | confirmed | App Store snapshots: US 4.3 from 28, a later US snapshot 4.7 from 23, Jordan 5.0 from 1, Iraq 5.0 from 2 (https://apps.apple.com/us/app/saleem-%D8%B3%D9%84%D9%8A%D9%85/id6474654440) | same picture: 1 to 28 ratings, small and inconsistent |
| 5 | About 1.3K iOS installs (tracker) | unverifiable | mwm.ai lists "24K+ downloads" for the iOS app (rating 4.6 with 0 ratings counted). The two aggregators differ by about 18 times and Apple publishes no figure | unresolved, do not use |
| 6 | iOS seller is Seniorplus LLC | confirmed | App Store pages in two searches (row 4 link) | none |
| 7 | Services: doctor visits, nursing, physiotherapy, home lab draws, imaging (echo, ultrasound, Doppler), eye exams, wound care, family profiles, Baghdad directory | confirmed | Play and App Store summaries (https://play.google.com/store/apps/details?id=com.saleemiq.android&hl=en_US , https://apps.apple.com/app/id6474654440). Baghdad is named | none |
| 8 | In-app electronic payment; methods and cash on visit not named | confirmed | App Store summary says in-app electronic payment, no methods named | none (see the discovery file row on FastPay and ZainCash, which conflicts) |
| 9 | Providers "vetted for quality" | confirmed | App Store text "every provider is vetted for quality" (summary) | upgrade from 50% to about 75% |
| 10 | Zain Great Idea finalist (Oct 2025) | confirmed | Regional list of 13 startups, Iraqi names Andalusi, Jaamila, Saleem: https://menastartupdigest.com/?p=20100 and https://www.zawya.com/en/press-release/companies-news/zain-great-idea-13-regional-tech-startups-to-embark-on-the-global-acceleration-program-in-silicon-valley-mygm4f4c | the Zain Iraq release names only two Iraqi startups (Jaamila and Saleem), the regional list names three; this does not touch Saleem |
| 11 | Zain Iraq press release (Dec 2025) names Saleem's founder as Taha Ayad and calls Saleem a health-tech venture (telemedicine, homecare apps) | confirmed | https://www.iq.zain.com/en/about-us/media-coverage/baghdad-silicon-valley-zain-iraq-selects-two-innovators-advance-zain-great-idea . The same founder name is on the Village profile of the Saleem home-care company (https://village.ai/person/taha-ayad-NjIwMDU0MTE2 and https://village.ai/company/saleemapp) | identity with the home-care app rises from 65% to about 80%. Zain's wording also says "medical devices", which the app listing does not |
| 12 | Founded 2023, 30+ employees | unverifiable | Only the Village company profile says so (self-reported, reproduced). The April 2024 Play release is consistent with a 2023 start | staff count unverified |
| 13 | 350+ providers, 15,000+ patients in Baghdad, 30+ partners | unverifiable | Only the CEO's own Village profile | claim only |
| 14 | Whether Saleem was among the 11 startups in the Silicon Valley phase | unverifiable | No final results found in two searches | not changed |
| 15 | Website not found; saleemapp.com is an unverified lead (25%) | unverifiable | The Village company page is keyed to saleemapp.com, but the site itself did not appear. A different "Saleem App" at saleemtech.com is a Jordanian GP home-visit service, not this one | lead raised to about 40%, still unread |
| 16 | Provider app "Saleem Team" (com.saleemiq_team.android), about 164 installs, last update 2024-04-28 | unverifiable | Only the AppGoblin URL surfaced (https://appgoblin.info/apps/com.saleemiq_team.android); the figures were not visible | not changed |
| 17 | "Do not confuse": Saleem Telemedicine (Bahrain, NHRA) is a different company | confirmed | https://startupbahrain.com/blog/saleem-how-saleem-is-connecting-gulf-patients-to-specialist-care-across-borders ; also the Jordanian "Saleem App" in row 15 | add the Jordanian namesake |
| 18 | Hilla nursing ads, 45 logged Ad Library IDs, batch dates | unverifiable | Meta Ad Library is outside this check | on-file facts only |
| 19 | No published prices found | confirmed | No price in any listing summary or profile | none |
| 20 | Reviews: "not found" | contradicted | The App Store reviews page shows a few reviews: one praises convenient services and an approachable call center, an Iraqi reviewer welcomed the app (https://apps.apple.com/us/app/saleem-%D8%B3%D9%84%D9%8A%D9%85/id6474654440?see-all=reviews&platform=iphone , summary) | a few positive reviews exist; one mentions a call center. Sample is tiny |

### Corrections that matter
1. **Android numbers are snapshot-dependent.** Use "Play band 50K+, possibly 100K+; rating about 4.1; 65 to 74 reviews" instead of "59.6K and 4.2 from 51". The 59.6K is a tracker estimate and iOS install figures conflict by about 18 times (1.3K vs 24K+).
2. **The Zain finalist claim holds**, and the founder-name match makes the link to the home-care company about 80%.
3. **Founding year, staff and scale claims remain self-reported** (company directory profile and the CEO's own profile). Do not state them as facts.
4. **"No reviews found" is wrong**: a handful of App Store reviews exist, with one mention of a call center. Booking by phone is plausible, still unconfirmed.
5. saleemapp.com is more likely to be the company site than the original 25% suggested, but no page was read.

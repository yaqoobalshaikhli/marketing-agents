# Focus competitor: Hayat (Hayat platform), week 44

Run date: 2026-10-28. Iraq only. Researcher: competitor-intel, W44 focus run.

**Read this first: how solid is this file.**
- I could not open any Hayat page. `hayatdhs.com`, `play.google.com` and `apps.apple.com` all failed to resolve in this session (`getaddrinfo ENOTFOUND`). Those three hosts have to be allowed in the session's network settings before a `page_read` is possible. I stopped fetching after the third failure, as the tool instructed.
- Every fact below comes from `WebSearch` results. The search tool returns a summary it wrote itself, not the raw page text. I label every item `search_snippet`, and the URL is the page the snippet was taken from. Nothing here is a `page_read`.
- The search tool was inconsistent: it found `hayatdhs.com` in some queries and missed it in others (for example `"hayatdhs.com"` alone returned nothing). So a miss in one search is not evidence that something does not exist.
- No facebook.com, instagram.com or tiktok.com page was opened. No new Ad Library call was made. Perplexity was not used.

## 1. Summary table

| Fact | Value | Evidence | Confidence |
|---|---|---|---|
| Same business as the watchlist handle (FB Hayatdhs, IG hayatdhs) | The Iraqi platform "Hayat Platform" at `hayatdhs.com`, app developer "Gula DHS" | search_snippet (see section 2 for the link and the namesakes I excluded) | 80% |
| Operator and base | Gula LLC, Baghdad; store developer name "GULA DHS, CO." | search_snippet, `hayatdhs.com/about` and both store listings | 80% |
| Founded | 2025, in Baghdad (self-stated) | search_snippet, `hayatdhs.com/about` | 75% |
| What it is | Marketplace linking patients with doctors and care providers: video consultation, clinic booking, home visit | search_snippet, `hayatdhs.com/about` | 80% |
| Services seen | Video consultation, clinic booking, home visits, home lab tests, care packages, vouchers, product store, file sharing with doctors | search_snippet, About page, Play and App Store listings | 75% |
| Cities covered | Baghdad is the base. Any other city: not found | n/a | 80% that nothing is published in what I could see |
| Booking channel | In-app (iOS and Android), video call inside the app. WhatsApp: not found. Phone listed: +964 781 855 2172 | search_snippet | 75% |
| Published prices | Not found anywhere. App is free to download | search_snippet | 70% |
| Google Play | 1K+ downloads; star rating and number of ratings not found | search_snippet, two queries agree | 80% (downloads) |
| App Store | Free, Health & Fitness, no rating overview shown | search_snippet | 65% |
| Last store update seen | Play release note dated 12 Oct 2026 | search_snippet, one query only | 60% |
| Ads on file | None. Zero ad-log rows. Profile ID returned 0 ads on 2026-10-17 | ad-log.csv, watchlist.csv, W42 report | 90% that the file holds none; coverage is weak |
| Threat level | Medium | my judgement, section 13 | 55% |

## 2. Who they are

**What the business is.** Hayat Platform (Arabic site name «منصة حياة» is not confirmed; see exclusions) is a health platform that describes itself as a hybrid care marketplace in Iraq. The About page says patients are connected to doctors and care providers by video consultation, clinic booking or home visit, and that the platform covers booking, payment, home lab tests, home visits, follow-up and encrypted records. The English wording is the search tool's translation of an Arabic page. The word "first" in "first integrated hybrid care platform in Iraq" is their own claim, and I did not verify it.
- Source: https://www.hayatdhs.com/about, evidence `search_snippet`, 2026-10-28, confidence 75%.

**Since when.** The About page says it was founded in Baghdad in 2025. Source as above, `search_snippet`, 70%. I found no independent source for the founding date.

**Who runs it.** The site footer names the operator as Gula LLC, Baghdad (https://www.hayatdhs.com/about, `search_snippet`, 75%). The Google Play developer is "Gula DHS" and the App Store provider is "GULA DHS, CO." (https://play.google.com/store/apps/details?id=com.gula.hayat, https://apps.apple.com/no/app/hayat-platform/id6758530740, `search_snippet`, 70%). No founder or executive is named by the company or by any article I found. Not found.
- One search summary said the Play listing shows a developer address in Canton, Michigan. That appeared in one query only and conflicts with the Baghdad operator line. Treat it as unverified (40%). It may just be a registration address, but I cannot say.

**How I know it is the same business as the watchlist handle (80%).**
1. The watchlist handle is `Hayatdhs` (Facebook) and `hayatdhs` (Instagram). The website domain is `hayatdhs.com`, which is the same string.
2. The Google Play listing gives its support contact on the `hayatdhs.com` domain (`admin@hayatdhs.com`), and the About page lists `contact@hayatdhs.com` (`search_snippet`, two queries).
3. The business is Iraqi (Baghdad operator, +964 phone number), which fits a platform Yaqoob watches for the Iraqi market. Decision #41 records it as "Hayat platform".
4. What is missing: I could not see the website footer linking to the Facebook or Instagram pages, and I did not open those pages (rule 5). So the link is by identical handle and domain, not by a page that points to the other.

**Namesakes I excluded (not this business).** Do not mix these up with Hayat. Two of them appeared in search summaries attached to the Iraqi platform by mistake.

| Namesake | Why it is not Hayat | Source |
|---|---|---|
| X account `@_HayatPlatform` "منصة حياة" | A Saudi knowledge portal for people with disabilities, linked to `hayat.tawasal.org.sa`. One search summary wrongly offered it as ours. | https://x.com/_HayatPlatform |
| App Store `id6738328977` "حياة / Hayat" | A residential community app (developer Albarmajat Al-Sakniyeh). One search summary wrongly offered it as ours. | https://apps.apple.com/us/app/%D8%AD%D9%8A%D8%A7%D8%A9-hayat/id6738328977 |
| "Hayat Hospitals" / "Hayat Healthcare" apps | Al-Hayat National Hospital booking app (a hospital, not a platform) | https://apps.apple.com/app/id6745420865 |
| Hayat ISP (`hayat-isp.net`), Hayat Telecommunications, Hayat Mall, Hayat Travel | Baghdad internet, telecom, retail and travel businesses | https://hayat-isp.net/about-us |
| "Hyat - حياة" (developer Mujtama Hayat Alraqmiy) | A wellness support app, different developer | https://apps.apple.com/us/app/hyat-%D8%AD%D9%8A%D8%A7%D8%A9/id6754280923 |
| Hayat (Aga Khan University mHealth, Afghanistan and Pakistan); Hayat Health (UAE); Hayat Health (US); Hayah (Oman) | Other countries and models | https://www.akdn.org/project/hayat-–-digital-health-technologies-improved-access-and-coverage-mnch-services |

I also checked whether Hayat is linked to Saleem (a different watchlist competitor) after a search surfaced both. I found no link: Saleem's App Store seller is named as Seniorplus LLC, not Gula (`search_snippet`, 65%).

## 3. Services and coverage

| Service | What was seen | Source (all `search_snippet`) | Confidence |
|---|---|---|---|
| Video consultation | Yes, in the app; the user "securely enters" the consultation at the booked time | App Store listing | 75% |
| Clinic booking | Yes, choose doctor or service and a time slot | About page; App Store listing | 75% |
| Home visits | Yes, stated; which professionals visit (doctor, nurse, other) is not stated in what I saw | About page; Play listing mentions paying for home visits | 70% |
| Home lab tests | Yes, stated on the About page; test list not found | https://www.hayatdhs.com/about | 70% |
| Care packages | Browse, buy and track packages; a "My Packages" area shows remaining benefits | App Store version history | 60% |
| Vouchers and benefit redemption | Voucher field, voucher scanner, benefit redemption flow | App Store version history | 55% |
| Physical products store | Mentioned in the version history | App Store listing | 55% |
| Doctor file sharing, queue, session timer | Files grouped (uploads, doctor files, Hayat files), shared with several doctors; queue status on lock screen; automatic reconnection of video calls | Play release note, 12 Oct 2026 | 60% |
| Nursing, physiotherapy, X-ray, ultrasound, ECG | Not found | n/a | not found |
| Insurance or corporate packages | Not found | n/a | not found |

**Cities and districts.** Baghdad is where the company says it was founded. No list of cities, districts or service areas was found. Not found.

## 4. How booking works

- **App:** iOS and Android. The user browses doctors and services, picks a slot, pays in the app (the Play listing mentions saving a card for appointments, store orders, care packages and home visits). `search_snippet`, 70%.
- **Video call:** inside the app, with a doctor queue and automatic reconnection (Play release note, 12 Oct 2026). 60%.
- **Cancellation:** the App Store version history mentions cancelling an appointment up to 12 hours before the visit. `search_snippet`, 50%.
- **Web:** the site exists (`hayatdhs.com`). Whether you can book on the web: not found.
- **Phone:** +964 781 855 2172 is listed as the support contact on the About page. Whether it takes bookings: not found. `search_snippet`, 70%.
- **WhatsApp:** not found.
- **Email:** `contact@hayatdhs.com` (About page) and `admin@hayatdhs.com` (Play listing). 70%.
- **Opening hours:** not found.

## 5. Published prices

| Service | Price | Currency | Source | Date seen |
|---|---|---|---|---|
| Any consultation, home visit, lab test or package | not found | n/a | n/a | 2026-10-28 |
| App download | Free; in-app purchases offered | n/a | Play listing and App Store listing (`search_snippet`) | 2026-10-28 |

No price list, IQD amount or package price appeared in any search result. A price may exist inside the app, which I could not open.

## 6. Claims they make

Wording is as relayed by the search tool. I have not seen the pages, so a quote could be shortened or translated.

| Claim | Source | Evidence | Confidence |
|---|---|---|---|
| «استشارة فيديو، أو حجز في العيادة، أو زيارة منزلية» (video consultation, clinic booking, or home visit) | https://www.hayatdhs.com/about | search_snippet | 70% |
| «الحجز، والدفع، والفحوصات المختبرية المنزلية، والزيارات المنزلية، والمتابعة، والسجلات المشفّرة» (booking, payment, home lab tests, home visits, follow-up, encrypted records) | https://www.hayatdhs.com/about | search_snippet | 70% |
| "Hayat by Gula is a privacy-first health companion" | https://play.google.com/store/apps/details?id=com.gula.hayat | search_snippet, two queries agree | 80% |
| First integrated hybrid care platform in Iraq (paraphrase of an Arabic line, not a quote) | https://www.hayatdhs.com/about | search_snippet | 65% |
| Homepage theme: one connected care journey from booking to follow-up (paraphrase, not a quote) | https://www.hayatdhs.com/ | search_snippet | 60% |

All five are self-claims. None is backed by a third party in what I found.

## 7. Trust cues

| Cue | Finding | Confidence |
|---|---|---|
| Licence (Ministry of Health or other) | Not found | not found |
| Named doctors | Not found | not found |
| Partners, hospitals, labs | Not found | not found |
| Insurers | Not found | not found |
| Certifications | Not found | not found |
| Press | Not found (searches in English and Arabic for news, funding and launch returned nothing about Hayat or Gula) | 70% |
| Privacy posture | Developer says records are encrypted (About page). The Play data-safety summary, as relayed, says data is encrypted in transit and users can request deletion. A release note says the team stopped collecting advertising identifiers and health details in analytics. Developer-declared only. | 60% |
| Terms of service | The About page links to one; text not seen | 50% |

The absence of a licence or doctor names in a search summary does not show they have none. It shows I could not see them.

## 8. App listing

**Google Play** (https://play.google.com/store/apps/details?id=com.gula.hayat), `search_snippet`, 2026-10-28

| Field | Value | Confidence |
|---|---|---|
| Title and package | "Hayat Platform", `com.gula.hayat` | 85% |
| Developer | Gula DHS | 80% |
| Price | Free, offers in-app purchases | 70% |
| Content rating | Everyone | 60% |
| Downloads | 1K+ | 80% |
| Rating and number of ratings | not found | n/a |
| Last update | Release note dated 12 Oct 2026 (one query only) | 60% |
| Version number | not found | n/a |

**Apple App Store** (https://apps.apple.com/no/app/hayat-platform/id6758530740), `search_snippet`, 2026-10-28. This is the right listing. Do not confuse it with `id6738328977`, which is a different app (see section 2).

| Field | Value | Confidence |
|---|---|---|
| Title and provider | "Hayat Platform", GULA DHS, CO. | 80% |
| Category, age, size | Health & Fitness, 16+, 69.6 MB, needs iOS 16.0 or later | 70% |
| Price | Free | 70% |
| Rating and number of ratings | No overview shown; one summary said there were not enough ratings to display one | 60% |
| Downloads | Apple does not publish | n/a |
| Version and update | Version history mentions fixes "1.0.8" (14 May) and "1.0.81" (15 May), year not shown; a newer entry covers care packages and vouchers. Current version: not found | 50% |

## 9. What reviewers say

Not found. Google Play shows only "1K+" in what I could see, with no star rating or review count. The App Store shows no rating overview. No review text reached me. I found no Reddit, press or other public review of the app. Reddit cannot be fetched and a search restricted to Reddit was rejected by the search tool, so absence there is untested.

## 10. News, funding, hiring

- **2026-10-12:** Google Play release note: file grouping, sharing files with several doctors, queue status on the lock screen, automatic video-call reconnection (`search_snippet`, 60%). The only dated item. It shows the app is still being worked on 16 days before this run.
- **News, funding, hiring:** nothing found. Searches tried: "Gula Hayat" startup and funding, "Hayat Iraq hybrid care platform" news and launch, "Gula LLC" Baghdad. They returned other companies (Tabib Baghdad, a 2020 round; the national Dhamani system; others), none about Hayat. Hiring: not found. Confidence that no coverage exists in the sources I could search: 65%.

## 11. Ads on file

From `data/competitors/watchlist.csv`, `data/competitors/ad-log.csv` and `reports/competitor-intel/2026-W42.md`. No new Ad Library call was made.

- Watchlist row: "Hayat (Hayat platform)", platform `facebook+instagram`, tier `local-health-platform`, status `approved`, added 2026-10-17, Facebook username `Hayatdhs`, profile ID `61586540104919`, Instagram `hayatdhs`. **No Ad Library Page ID is on file.**
- Ad-log: **0 rows** for Hayat.
- W42: the profile ID returned 0 ads twice on 2026-10-17 (once with the `ALL` filter in the main session, once with `ACTIVE` in re-check call B). The same call returned ads for Saleem and Healder under their Ad Library Page IDs and none under their profile IDs. So "0 ads" for Hayat fits two readings: Hayat runs no ads, or its ads sit under a Page ID we do not have. W42 judged the second reading plausible (about 70%). Hayat is listed as "not covered" in W42.
- The keyword search "Hayat" in the Ad Library (main session, W42) did not produce a Page ID.
- **Not found by me:** a Page ID. I found no source outside facebook.com that gives it.

## 12. Strengths and weaknesses against TabeebX

TabeebX facts below are from `tabeebx-brand/SKILL.md` only.

**Hayat strengths**
1. **A live consumer app on both stores.** Play shows 1K+ downloads and the App Store lists a free app (both `search_snippet`). SKILL.md says the TabeebX consumer app is "in development". On this point Hayat is ahead. Confidence 75%.
2. **The same pitch shape as ours: video plus home care.** The About page lists video consultation, clinic booking, home visits and home lab tests. SKILL.md lists teleconsultation, home visits and home lab draws for TabeebX. Confidence 70%.
3. **Shipping often.** A 12 Oct 2026 release note, plus version history with several fixes. Confidence 60%.
4. **Packages and vouchers inside the app** (App Store version history), which is a way to sell bundles. Whether any are for employers: not found. Confidence 55% that packages exist; 0% evidence on corporate use.

**Hayat weaknesses (what I saw, or did not see)**
1. **Small reach so far.** "1K+" on Google Play and no rating overview on the App Store. No ads found (section 11, weak coverage). Confidence 65%.
2. **No public price.** None found anywhere. TabeebX publishes corporate package prices in its own materials (SKILL.md), but I did not see any TabeebX consumer price list, so I make no comparison on consumer pricing. Confidence 70% that Hayat prices are not visible without opening the app.
3. **No visible trust proof.** No licence, doctor names, partners, insurers or press found. TabeebX holds a Ministry of Health licence (SKILL.md, confirmed by Yaqoob 2026-10-17). Not-found is not proof that Hayat lacks these. Confidence 60%.
4. **Narrower service list in what I saw.** No nursing, physiotherapy, X-ray, ultrasound or ECG found, against TabeebX's list in SKILL.md. Again, not found is not "does not offer". Confidence 55%.
5. **No insurance or unified corporate package found.** SKILL.md calls the unified B2B package the white space. I found nothing showing Hayat sells one. Confidence 60%.

## 13. Threat level

**Medium** (confidence 55%).

Reasons for medium:
- Product overlap is close: video consultation, home visits and home lab tests, in an app, from a Baghdad company (About page, store listings).
- It has a working app on both stores and was updated 16 days ago, while the TabeebX consumer app is still in development (SKILL.md).

Reasons it is not high:
- Only 1K+ Google Play downloads, no rating shown, and no ads found.
- No price, no named doctors, no licence, no press found.
- I could not open the pages, so I may be missing most of what the app and site show.

What would move it:
- **Up to high:** ads appear under a Hayat Page ID; downloads reach 10K+; a corporate or employer package appears; named hospital, lab or insurer partners appear.
- **Down to low:** the app stays at 1K+ with no ads and no new releases for a month.

## 14. Gaps (not found)

1. **No page was opened.** `hayatdhs.com`, `play.google.com` and `apps.apple.com` do not resolve in this session. Allow those hosts and re-run to get real `page_read` evidence on: prices, the city list, ratings and review counts, version and update dates, the full site and the terms page, and the footer social links that would confirm the Facebook and Instagram match.
2. Ad Library Page ID: not found (Yaqoob or a Meta Ads connector lookup by page name is the way).
3. Prices of any service: not found.
4. Cities and districts beyond Baghdad: not found.
5. Opening hours, WhatsApp number, whether the phone number takes bookings: not found.
6. Which professionals do home visits, and which lab tests are offered: not found.
7. Licence, named doctors, partners, insurers, press: not found.
8. Play star rating, number of ratings, version number; App Store rating count: not found.
9. Reviewer comments: not found.
10. Founder, team size, funding, hiring: not found.
11. Unverified: the Michigan developer address (40%); the 12 Oct 2026 update date (one query only, 60%); the year of the App Store hot-fix dates.
12. Organic Facebook and Instagram posts: not covered (organic is not connected, and those pages are off limits for this work).

## Verification (2026-10-28)

Independent fact-check run the same day. Method: WebSearch only (about 63 calls across all six files, 2 "extended"), no fetches made. Evidence is a search-tool summary of a store page or company page, never a page read. Every Hayat source below (site, Play, App Store) is controlled by the company, so no row here has third-party support. Rows are worded "page says X" where only the company states it.

| # | Claim | Verdict | Independent evidence | Corrected value |
|---|---|---|---|---|
| 1 | "Hayat Platform" exists on both stores: Play com.gula.hayat, developer Gula DHS; App Store id6758530740, provider GULA DHS, CO. | confirmed | https://play.google.com/store/apps/details?id=com.gula.hayat&hl=en_US ; https://apps.apple.com/no/app/hayat-platform/id6758530740 | none |
| 2 | hayatdhs.com is the company site; the About page (Arabic) describes a hybrid care marketplace | confirmed | A search restricted to hayatdhs.com returned https://www.hayatdhs.com/ and https://www.hayatdhs.com/about (company's own pages) | none |
| 3 | Operator is Gula LLC, Baghdad | unverifiable | The site footer says Gula LLC, Baghdad, copyright 2026 (company's own page). The Play listing shows admin@hayatdhs.com and a Canton, Michigan, US address (seen in two searches). Two searches, one extended, found no third-party record of a Gula LLC or Gula DHS in Iraq | do not call the Baghdad operator independently confirmed |
| 4 | Founded in Baghdad in 2025 (self-stated) | unverifiable | Only the About page | not changed |
| 5 | The site and listings say: video consultation, clinic booking, home visits, home lab tests, encrypted records; the app has browsing of doctors and services, time slots and video consultations | confirmed | About page and store summaries (rows 1 and 2). Home visits and home labs appear only on the About page, not in the store text I saw | self-claims only |
| 6 | Google Play 1K+ downloads | confirmed | https://play.google.com/store/apps/details?id=com.gula.hayat | none |
| 7 | Play release note dated 12 Oct 2026 (file grouping, sharing with several doctors, queue on lock screen) | confirmed | Same Play listing; reproduced in a second search | upgrade confidence from 60% to about 80% |
| 8 | App Store: Health & Fitness, 16+, 69.6 MB, iOS 16.0 or later, free | confirmed | https://apps.apple.com/no/app/hayat-platform/id6758530740 | none |
| 9 | App Store versions "1.0.8" and "1.0.81", current version not found | unverifiable | The App Store summary lists 1.0.97 as the latest entry (general performance improvements) and an earlier entry with a live queue position. Year of the old entries still not shown | latest listed version 1.0.97 |
| 10 | Support phone +964 781 855 2172 on the About page | unverifiable | Not surfaced in any of my searches | not changed |
| 11 | Play developer address in Canton, Michigan (file said 40%, one query) | confirmed | The Play listing summary shows it again in a second search (https://play.google.com/store/apps/details?id=com.gula.hayat) | upgrade to about 80% that the Play page shows it; it conflicts with the Baghdad operator line |
| 12 | Same business as watchlist handles Hayatdhs (Facebook) and hayatdhs (Instagram), 80% | unverifiable | Only the identical string. The Play contact is admin@hayatdhs.com, which ties the app to the domain, but no page links the social accounts. Social pages not opened | lower to about 65% |
| 13 | App Store id6738328977 "حياة / Hayat" is a different app (residential community) | confirmed | The listing appears in results as a separate app (https://apps.apple.com/us/app/%D8%AD%D9%8A%D8%A7%D8%A9-hayat/id6738328977). New namesake seen, relation unverified: "Hayat Online" (https://hayat-online-website.pages.dev/privacypolicy.html), a privacy policy dated January 2025 governed by Iraqi law | do not attribute Hayat Online to Gula |
| 14 | No link between Hayat and Saleem (Seniorplus LLC) | confirmed | Saleem seller is Seniorplus LLC in two searches; nothing links Gula to it | none |
| 15 | No press, funding or launch news for Hayat or Gula | confirmed | Reproduced, including one extended search. It returned only unrelated Gula entities (a Berlin company Gula Holistic Health with an Iraqi-born founder, a US fund, a Facebook page "Gula Medical Tourism" in Baghdad with 25 likes). No source links any of them to Hayat | do not assume a link to any of these |
| 16 | "First integrated hybrid care platform in Iraq" | unverifiable | Self-claim on the About page, no third party | not changed |
| 17 | No ads and no Ad Library Page ID | unverifiable | Ad Library is outside this check | on-file only |

### Corrections that matter
1. **"Baghdad operator" rests on the company's own site only.** The Play page shows a US (Michigan) address, now seen twice. State "says it is Baghdad-based" in anything that leaves this repo.
2. **Watchlist link is by identical handle and domain only**, lower to about 65% until the website's social links or the Page's website field is seen.
3. Latest App Store version is 1.0.97 (not 1.0.81). The 12 Oct 2026 Play update is solid.
4. The Gula namesakes (Berlin, Baghdad Facebook page) were surfaced but are not linked to Hayat by any source. Treat as a lead for Yaqoob only if he can open the pages.

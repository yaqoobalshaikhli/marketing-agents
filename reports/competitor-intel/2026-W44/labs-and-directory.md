# Home labs and directory: web-presence pass (W44, run date 2026-10-28)

Scope: the five home-lab pages on the watchlist (مختبر سحر بغداد / Majestic Lab, مختبر النخبة النموذجي, مختبر الثناء الطبي, مختبر هورمون حي العامل, مختبر الصدى حي العامل) and دليل صحتي. Lighter pass than the four focus competitors.

**Bottom line: the open web told us almost nothing about these six.** None of the five labs surfaced under any name, spelling or Page ID I searched. No services, areas, hours, prices, claims, licences or ratings were found for any of them. The few concrete findings are about two other entities that surfaced (a similarly named lab and one non-watchlist provider), and both are low-confidence because I could not open their pages.

## How this was done, and its limits

- 26 WebSearch calls (24 standard, 2 extended) in Arabic and English: each lab name, name variants, the district, the Page IDs as numbers, "Majestic Lab", generic Baghdad home-draw and price queries, and the directory name. 3 WebFetch attempts, all failed (see Gaps).
- **Every finding below is evidence type `search_snippet`. There is no `page_read` in this file.** The search tool returns a written summary of its hits, not raw snippets, so even the snippet-level facts are second-hand and could be garbled. I have capped confidence accordingly.
- No facebook.com, instagram.com or tiktok.com page was opened. Two such URLs appear in results for a name-similar lab (below); they are listed as surfaced, not opened.
- Ad facts about the five labs come from files already on the repo (`data/competitors/watchlist.csv`, `data/competitors/ad-log.csv`, `reports/competitor-intel/2026-W42.md`). I did not re-query the Ad Library in this task, so ad status below is as of 2026-10-17, 11 days old.

## Comparison table

| Lab (as on file) | Services | Areas | Prices | Claims | Booking | Evidence strength |
|---|---|---|---|---|---|---|
| مختبر سحر بغداد / Majestic Lab | not found (on file only: ads matched the keyword «سحب دم منزلي»; ad content not reviewed) | not found | not found | not found | not found | **Very weak.** Ad Library keyword match on file; no web presence found outside social media (not opened). |
| مختبر النخبة النموذجي | not found (same ad-keyword note) | not found | not found | not found | not found | **Very weak.** Same. A similarly named lab surfaced but is not confirmed to be this page (see section). |
| مختبر الثناء الطبي | not found (same ad-keyword note) | not found | not found | not found | not found | **Very weak.** Same. No active ad as of 2026-10-17. |
| مختبر هورمون حي العامل | not found (same ad-keyword note) | حي العامل appears only in the page name | not found | not found | not found | **Very weak.** Same. |
| مختبر الصدى حي العامل | not found (same ad-keyword note) | حي العامل appears only in the page name | not found | not found | not found | **Very weak.** Same. |
| دليل صحتي (directory) | not found | not found | not found | not found | not found | **None.** Three searches returned no page for it. Kept on the list, no ads check, per Yaqoob 2026-10-17. |

For every row, open web: "no web presence found outside social media (not opened)".

### Cross-lab checks you asked for

| Check | Result for the five labs | Confidence that this was searched properly |
|---|---|---|
| Home draw priced separately from tests | not found for any lab | 90% that nothing was surfaced; the real answer is unknown |
| Free home-draw promise | not found for any of the five. The only free-home-draw promise surfaced in this run is from a non-watchlist provider (nass-iq.com, below, 45%) | 90% / 45% |
| Minimum order | not found for any lab | 90% |
| Results-turnaround claim | not found for any of the five. The name-similar lab is paraphrased as claiming «نتائج سريعة ودقيقة» (fast, accurate results) with no hours or days (below, 50%) | 90% / 50% |

## Per-lab sections

### مختبر سحر بغداد / Majestic Lab (Page ID 123080957435022)

- **Web search:** nothing. Searches tried: Arabic name, «ماجستيك لاب», "Majestic Lab Baghdad home blood draw", "Majestic Lab" Iraq, the Page ID as a number, and one extended search combining the names. Results were unrelated (job ads, university pages, a Saudi lab, US home-draw services). Evidence: `search_snippet`, 0 relevant hits. Confidence that the search tool surfaced nothing: 95%. Confidence that no web presence exists: about 50%, because this search tool is weak on local Arabic business pages.
- **Result:** no web presence found outside social media (not opened). Services, areas, hours, booking, prices, claims, licence and ratings: not found.
- **Correction to the brief you were given.** The task text calls this the "longest-running home blood-draw advertiser: 6 ads since late April to early May 2026". That was true on 2026-10-08 (6 ads logged, start dates 2026-04-25 to 2026-05-06, per `ad-log.csv`). By 2026-10-17 all 6 were `not_seen` and 15 ads with new Library IDs had appeared, all created in the same minute on 2026-10-15 (per W42). W42 already said the 5-month longevity cannot be carried forward. I have not re-checked today. Treat "longest-running" as unproven.

### مختبر النخبة النموذجي (Page ID 109357471357057)

- **Web search:** nothing under this exact name. Searches tried: the Arabic name, the Page ID as a number, and an extended combined search.
- **Result:** no web presence found outside social media (not opened) for this exact name.
- **A similarly named lab did surface: مختبرات النخبة للتحليلات المرضية المتقدمة (Al-Nokhba Laboratories for Advanced Pathology), Baghdad. I do not treat it as the same business.** The name differs, and the Facebook ID in a directory URL it appeared under (1477079455939722) is not the watchlist Page ID (109357471357057). I put about 75% on it being a different business, but I cannot confirm either way without opening the Facebook page. Facts below belong to that entity only and must not be attached to the watchlist lab.
  - Surfaced pages (not opened): alnokhbalab.com, a directory listing at daliliraq.net/guide?id=6341, a findhealthclinics.com listing, plus facebook.com/ALNOKHBA2, instagram.com/alnokhbalab, x.com/alnokhbalab and a YouTube video (the last four not opened).
  - Paraphrased by the search tool, so confidence 50% each: the official site offers home-visit appointment booking through an app and advertises «نتائج سريعة ودقيقة»; branches listed in a directory include بغداد الجديدة, مدينة الصدر, الجادرية and الكاظمية, and one Iraqi directory says one branch is open 24 hours; a directory page shows a periodic check-up offer at "30 ألف" covering full blood count, sugar, lipids, liver and kidney function. **Currency and date of that offer were not visible, so it is not recorded as a price.** Two phone numbers were relayed; I did not copy them because the digits came through a summary. A Facebook page rating was described as high with no number or count, so no rating is recorded.
  - Source for the above: the second extended WebSearch of 2026-10-28 (the query joins the four lab names with OR). The details came from a mix of the pages listed above, and I cannot say which page each detail came from. The findhealthclinics.com URL starts https://www.findhealthclinics.com/IQ/Baghdad/1477079455939722/ (rest of the path is an Arabic slug, not copied). Evidence type `search_snippet`.
- **On file only:** 1 ad from 2026-10-08, still active on 2026-10-17 (the only watched-lab ad that persisted, per W42). Content not reviewed.

### مختبر الثناء الطبي (Page ID 1258270820694336)

- **Web search:** nothing. Searches tried: the Arabic name with and without quotes, the extended combined search. Results unrelated (a radiation-protection centre accreditation news item, a Kimadia tender).
- **Result:** no web presence found outside social media (not opened). All other fields: not found.
- **On file only:** 1 ad started 2026-10-06; not returned on 2026-10-17, and none among the 50 returned in the later W42 call. No active ad as of 2026-10-17.

### مختبر هورمون حي العامل (Page ID 1289714667551522)

- **Web search:** nothing. Searches tried: Arabic name with district, quoted name, district plus "تحاليل", extended combined search. Results were unrelated academic hormone studies and Iraq weapons-inspection news.
- **Result:** no web presence found outside social media (not opened). All other fields: not found.
- **On file only:** 1 ad started 2026-10-04; on 2026-10-17 that ad was `not_seen` and one new ID (started 2026-10-15) was active.

### مختبر الصدى حي العامل (Page ID 1167984273068960)

- **Web search:** nothing. Same query pattern as above. Results unrelated (university waste-management study, a conformity-assessment body list).
- **Result:** no web presence found outside social media (not opened). All other fields: not found.
- **On file only:** 1 ad started 2026-10-04, the same day as مختبر هورمون, same district; on 2026-10-17 the old ad was `not_seen` and one new ID (started 2026-10-16) was active.

### دليل صحتي (directory, no Page ID)

- **Web search:** three searches (name in Arabic, name with "مختبرات أطباء" in quotes, directory wording). No page for it. Adjacent results are other directories and must not be confused with it: Altibbi's Arab-world doctor directory (altibbi.com), Tabibiraq.com (Iraq doctors, centres and hospitals, also an app), the Shifa app, and an Iraqi drug guide. None is named دليل صحتي.
- **Result:** no web presence found outside social media (not opened). Kept on the watchlist, no ads check (Yaqoob, 2026-10-17). Whether it lists labs, home draws or prices: not found.

### Incidental, not on the watchlist: nass-iq.com (خدمات ناس للرعاية الصحية)

- Surfaced only in the first extended search (2026-10-28) and could not be re-surfaced by a follow-up search or opened (host did not resolve). As paraphrased by the search tool: it offers lab tests "in cooperation with laboratories inside and outside Iraq"; it advertises **free home blood draws**, booked through WhatsApp after the customer gives name, age, phone, governorate and address; staff then arrange the appointment. Prices, minimum order, turnaround, areas: not found.
- Evidence: `search_snippet`, paraphrased. Confidence 45%. Whether it is a lab, a broker, or a competitor of TabeebX in Baghdad: not found.
- Not added to the watchlist (I only edit this file). Decision for Yaqoob: (a) add it and check it next week, (b) leave it off, (c) first allow the host and let me open the page.

## What the labs tell us about the home-lab market in Baghdad

Only what the evidence supports:

1. **All five pages ran Meta ads matched to «سحب دم منزلي» in Iraq (on file, 2026-10-08 and 2026-10-17).** That is the only evidence in this repo that they sell at-home blood draws. The match could come from ad text or link title, and neither run reviewed the ad content. So even "they offer home draws" is unconfirmed by anything I read. Confidence 70% that the match reflects a real home-draw offer.
2. **None of the five is findable on the open web by name.** This is consistent with labs that sell mainly through Facebook and Instagram, but I did not open those pages, so I cannot say that is where they sell. Confidence 55% that the open web is not their main channel; the search tool is US-only and weak on local Arabic pages.
3. **No published price, minimum order, free-draw promise or turnaround time was found for any of the five.** The market gives no price benchmark from this run. Do not quote a competitor price anywhere. Confidence 90% that nothing was surfaced; unknown whether the information exists in their social pages or DMs.
4. **Ad behaviour changed between 2026-10-08 and 2026-10-17 on three of five pages.** Majestic's six April-May ads were replaced by 15 new IDs created in one minute on 2026-10-15; مختبر هورمون and مختبر الصدى (same district, same start day) each show a new ID started 2026-10-15 and 2026-10-16. The cause is unknown (W42 also left it open). I would not read it as one operator or one agency; there is no evidence either way.
5. **An established multi-branch Baghdad lab (مختبرات النخبة للتحليلات المرضية المتقدمة) appears to take home-visit bookings through an app,** per a paraphrased snippet. It is not confirmed to be the watchlist lab. If it is a separate business, it would show that web-visible Baghdad labs exist and are not among the five. Confidence 50% on the home-visit claim, 75% that it is a different business from مختبر النخبة النموذجي.
6. **One free-home-draw promise surfaced anywhere (nass-iq.com),** and it is from a non-watchlist provider at 45% confidence. It is a lead, not a finding.

## Gaps (not found)

- For all five labs: services, tests, packages, areas served, opening hours, how to book, published prices, claims, licence or accreditation, review ratings and counts. Not found.
- Any Google Business or map listing text for any of the five: none surfaced by search.
- Home draw priced separately, free-draw promise, minimum order, results turnaround: not found for the five.
- Whether مختبر النخبة النموذجي and مختبرات النخبة للتحليلات المرضية المتقدمة are the same business: not resolved. It needs the Facebook page name for Page ID 109357471357057, which I may not open.
- **Blocked fetches.** `alnokhbalab.com`, `daliliraq.net` and `nass-iq.com` all failed with a DNS error (`getaddrinfo ENOTFOUND`), which in this session means the host is outside the allowed network domains or does not exist. Per the error guidance I stopped trying other sites, so findhealthclinics.com was never fetched either. To read these pages, the hosts have to be allowed in the session's network settings (alnokhbalab.com, daliliraq.net, nass-iq.com, findhealthclinics.com); I have not retried.
- The search tool gives written summaries rather than raw snippets. All the paraphrased details above (branches, offer, app booking, free draw) need a `page_read` before anyone relies on them.
- Ad content of all five labs never reviewed (W42 gap, still open); ad status after 2026-10-17 not re-checked in this task.
- Not checked: the Iraqi Ministry of Health licence lists or any licensing register, so no licence or accreditation could be confirmed for any lab.
- دليل صحتي: no Page ID, no web page, no ads check (by decision).

## Verification (2026-10-28)

Independent fact-check run the same day. Method: WebSearch only (about 63 calls across all six files, 2 "extended"), no fetches made. One fresh Arabic-name search per lab plus targeted searches for Al-Nokhba, nass-iq.com and the directory name. Evidence is a search-tool summary, never a page read. Ad Library facts cannot be tested with web search.

| # | Claim | Verdict | Independent evidence | Corrected value |
|---|---|---|---|---|
| 1 | مختبر سحر بغداد / Majestic Lab: no web presence found | unverifiable | Search "مختبر سحر بغداد تحاليل سحب دم منزلي" returned only Saudi job ads and a Webteb article. Reproduced absence, which does not prove none exists | claim should read "none found", not "none" |
| 2 | مختبر النخبة النموذجي: no web presence found | unverifiable | Nothing under this name. The only similar result was a Riyadh lab, مختبرات النخبة المعتمدة (https://www.zavis.ai/ar/sa/directory/riyadh/labs-diagnostics/al-nakhbah-muatamadah), a different business | same |
| 3 | مختبر الثناء الطبي: no web presence found | unverifiable | Results were a radiation-lab accreditation news item and a Kimadia tender, as in the original | same |
| 4 | مختبر هورمون حي العامل: no web presence found | unverifiable | Results were academic papers on hormones | same |
| 5 | مختبر الصدى حي العامل: no web presence found | unverifiable | Results were university and job pages | same |
| 6 | Al-Nokhba Laboratories (Baghdad): home-visit booking through an app, «نتائج سريعة ودقيقة», branches, 24 h branch, "30 ألف" offer | unverifiable | An Arabic search for مختبرات النخبة للتحليلات المرضية المتقدمة did not surface this lab at all (results were Saudi labs and university pages). Not refuted, not reproduced | still a paraphrase needing a page read |
| 7 | nass-iq.com (خدمات ناس للرعاية الصحية) offers free home blood draws booked on WhatsApp | unverifiable | Two searches found no page for it. Only a RIPE registry entry for "Nass Al Iraq Company for General Trading and Technical Solution and Training Ltd", Baghdad (https://www.ripe.net/membership/indices/data/iq.nass.html), which reads as a general trading and training firm, not a health provider. "Nass Al Iraq" also co-led the Tabib Baghdad seed round (https://www.wamda.com/2020/11/tabib-baghdad-raises-seed-round). No source ties nass-iq.com to either | stays a 45% lead at most, do not quote a free-draw promise |
| 8 | دليل صحتي (directory): "three searches returned no page for it", "none" | contradicted | An app titled exactly "Sehty Guide - دليل صحتي" exists on Play (https://play.google.com/store/apps/details?id=net.healder.sehty&hl=en_US) and the App Store (https://apps.apple.com/us/app/sehty-guide-%D8%AF%D9%84%D9%8A%D9%84-%D8%B5%D8%AD%D8%AA%D9%8A/id6472179725), developer Tech Ball, support domain healder.net | the name does have a store presence. Whether the watchlist row is this app: about 70%, unconfirmed |
| 9 | Adjacent directory Tabibiraq.com exists (Iraq doctors, centres, hospitals) | confirmed | https://mwm.ai/apps/tabibiraq-com/1384311003 ; Play listing tabibiraq.com (Baghdad, Erbil, Kurdistan Region) | none |
| 10 | Correction that "longest-running" Majestic claim is unproven | unverifiable | Depends on Ad Library data, outside this check | on-file only |

### Corrections that matter
1. **Do not write "no web presence"** for the five labs. The accurate line is "not found by a US-based search tool in Arabic and English", which my fresh searches reproduce. Absence here is weak evidence, as the file already says.
2. **دليل صحتي is not web-less.** It is an app title with a store listing (see the Sehty file Verification for the Tech Ball and healder.net link).
3. nass-iq.com and the Al-Nokhba details stay unverified paraphrases. Neither should reach a brief as a competitor fact.

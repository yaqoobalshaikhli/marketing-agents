# Competitor intel, week 44: Ad Library

Run date: Wednesday 2026-10-28 (ISO week 44). Iraq only, active ads only, 8 Ad Library calls. Ad content was not reviewed: the tool returns no ad text or image, only a link-title field on some ads, so every statement about what an ad says is "content not reviewed". Longevity labels are a heuristic, never proof. This file is the Ad Library part of the brief. Organic posts are not connected (see Sources and limits).

## Read this first

- **The Saleem call was cut off.** It returned 50 ads against Meta's estimate of 105 (limit reached, no paging, decision #47). Every Saleem count below is a lower bound. Results come newest-created first, so the cut-off only hides older ads. The oldest ad returned was created 2026-09-28 11:23 UTC.
- **The «استشارة طبية» discovery search was also cut off** (50 of an estimated 142). It is a newest-first sample back to 2026-10-19, not the whole market.
- The other 6 calls returned their full estimate, so nothing else was truncated.

## What changed since W42 (2026-10-17, 11 days ago)

- **Majestic held steady; the small labs turned over again.** Majestic Lab shows the same 15 Library IDs as W42, now 11 to 13 days old (**test** by age), still one campaign push (created within 46 seconds on 2026-10-15). مختبر النخبة النموذجي's single ad is gone, so it has 0 active ads, like مختبر الثناء الطبي. مختبر هورمون and مختبر الصدى (حي العامل) each have another new Library ID (started 2026-10-24 and 2026-10-26) and W42's IDs were not returned. Both pages have now changed ID about every 9 to 12 days. A new Library ID does not show whether the creative is new.
- **Hayat has a candidate Page ID and 8 active ads in one push; Healder moved to a new ID.** A keyword hit showed a page named exactly "Hayat Platform" (Page ID 995546460299732). A page-scoped call returned 8 of 8 active ads, all created within about 6 minutes on 2026-10-26 and started that day (**test**, **campaign push**). Only the page name links it to the watch-list Hayat, so it needs Yaqoob's confirmation (see Proposed watch-list changes). Healder's W42 ad (started 2026-10-13) is gone and one new ID started 2026-10-21 (7 days, **test**).
- **Saleem launched nothing new since 2026-10-13, and 2 of its W42 nursing ads look stopped.** The newest Saleem ad in the newest-first sample was created 2026-10-13 17:31 UTC. Ad 3273547716369347 (created 2026-10-06, inside the sampled window) was not returned, so it probably stopped (about 85% confidence); 1649473036888477 probably stopped too (about 70%). Four Saleem «حمل التطبيق الآن» ads that started 2026-08-20 are confirmed active at 69 days: **long-runners** by age (likely working for them; heuristic). They surfaced through keyword searches because the page call is capped.

## Watch list

Dates are the UTC date of `ad_delivery_start_time`; days running = 2026-10-28 minus that date. "New" means a Library ID not in `ad-log.csv` before this run. "Capped" means the call returned its limit while Meta's estimate was higher.

| Competitor | Active ads | New this week | Long-runners | Campaign push | Capped | Notes |
|---|---|---|---|---|---|---|
| مختبر سحر بغداد / Majestic Lab | 15 | 0 | 0 | Yes: 15 created 12:11:08 to 12:11:54 UTC on 2026-10-15 | No (17 of 17 across the 5 labs) | Same IDs as W42. Started 2026-10-15 (6), 10-16 (8), 10-17 (1): 11 to 13 days = test. Still 0 of the 6 former 155 to 165 day ads. |
| مختبر النخبة النموذجي | 0 | 0 | 0 | No | No | W42's ad 2183465305920307 (started 2026-10-08) not returned: `not_seen`. |
| مختبر الثناء الطبي | 0 | 0 | 0 | No | No | No active ad (also 0 in W42). |
| مختبر هورمون حي العامل | 1 | 1 | 0 | No | No | 949916971171601, started 2026-10-24 (4 days, test). 2026-10-15 ID `not_seen`. |
| مختبر الصدى حي العامل | 1 | 1 | 0 | No | No | 2309469583227250, started 2026-10-26 (2 days, test). 2026-10-16 ID `not_seen`. Not the same page as مختبر الصدى التخصصي (see discovery). |
| Saleem سليم | at least 57 seen: 50 in the capped page call + 7 older ads found by keyword searches (Meta's estimate for the page call: 105) | 17 new IDs, 0 launched since W42 | 4 (started 2026-08-20, 69 days) | Yes: 5 batches, see below | **Yes** (50 of est. 105) | All counts are lower bounds. Age mix of the 57: 0 test, 53 running (15 to 36 days), 4 long-runners. Profile ID 100091483862574 returned no ads. |
| Healder | 1 | 1 | 0 | No | No (1 of 1) | 1691823529126691, started 2026-10-21 (7 days, test). 2026-10-13 ID `not_seen`. Profile ID 61580044359286 returned no ads. |
| Hayat (Hayat platform) | 8, Page ID unverified | 8 | 0 | Yes: 8 created 08:05 to 08:11 UTC on 2026-10-26 | No (8 of 8) | All started 2026-10-26 (2 days, test). Matched by exact page name "Hayat Platform" only. Profile ID 61586540104919 returned no ads. |
| Sehty (sehty_net) | not covered | n/a | n/a | n/a | n/a | No Page ID. Profile ID 61552852785388 returned no ads, which does not show it runs none. No page named Sehty appeared in the 4 keyword searches. |
| دليل صحتي | not covered | n/a | n/a | n/a | n/a | No Page ID or profile ID. Not asking for its link (Yaqoob decided 2026-10-17). |

**Our own account** (Tabeebx, Page 102936468976144, logged `own`, excluded from every competitor figure): the keyword «علاج طبيعي بالبيت» returned 1 active ad of ours (2603610453396172, started 2026-10-27, link title «علاج طبيعي بالبيت»). Our page was not queried directly, so this is not a full count of our ads.

### Since W42

| Competitor | W42 (2026-10-17) | W44 (2026-10-28) | Change |
|---|---|---|---|
| Majestic Lab | 15 | 15 | Same 15 IDs |
| مختبر النخبة النموذجي | 1 | 0 | Ad gone |
| مختبر الثناء الطبي | 0 | 0 | None |
| مختبر هورمون | 1 | 1 | New ID (2026-10-24) |
| مختبر الصدى (حي العامل) | 1 | 1 | New ID (2026-10-26) |
| Saleem | 45 distinct IDs seen that day (31 in the capped re-check) | at least 57 distinct IDs seen | No launches since 2026-10-13; samples differ in cut-off and keyword coverage, so the two numbers are not like for like |
| Healder | 1 | 1 | New ID (2026-10-21) |
| Hayat | not covered | 8 (unverified Page ID) | New coverage via a name match |
| Sehty, دليل صحتي | not covered | not covered | No change |

### Saleem in more detail

Meta's estimate for the Saleem-only call is 105. W42's "about 120" was derived from a mixed 7-page call, so do not read a trend into the difference.

| Batch | Ads seen | Started | Days | Label | Link title as returned |
|---|---|---|---|---|---|
| A | 18 | 2026-10-11 | 17 | running, campaign push (created 09:10 to 09:50 UTC) | «سوي تقييمج المجاني هسه» |
| B | 4 | 2026-10-13 | 15 | running (just past 14 days), campaign push (created about 17:31 UTC) | «سوي تقييمج المجاني هسه» |
| C | 8 | 2026-10-06 | 22 | running, campaign push (created 14:02 to 14:08 UTC) | «طبيبك على بعد مكالمة» |
| Home nursing | 10 | 2026-10-06 | 22 | running, campaign push (created within 17 seconds at 07:27 UTC). 9 of the 10 are new to the log but not new launches: they were older than W42's capped sample | «خدمة التمريض المنزلي من سليم» and «احجز زيارة ممرض هسة» (followed by a phone number, not repeated here) |
| Home doctor visit | 10 | 2026-09-28 | 30 | running, campaign push (created 11:23:49 to 11:23:51 UTC); an 11th ad of the push, 4115531415406434, is `beyond_sample` | «خدمة زيارة الطبيب المنزلية» and «احجز هسة» (followed by a phone number) |
| Found by keyword | 1 | 2026-09-28 | 30 | running | «استعيد حركتك من راحة بيتك» |
| Found by keyword | 2 | 2026-09-22 | 36 | running | «حمل التطبيق الآن» |
| Found by keyword | 4 | 2026-08-20 | 69 | **long-runner** (heuristic) | «حمل التطبيق الآن» |

Log rows for Saleem not returned by the capped call (5):
- `not_seen`: 3273547716369347 (home nursing, created 2026-10-06 09:28 UTC, inferred from the W42 re-check, newer than the oldest ad returned, so the cut-off does not explain it) and 1649473036888477 (creation time not logged; start date 2026-10-06, so the cut-off probably does not explain it).
- `beyond_sample`: 4115531415406434 (same push as the 10 home-visit ads; the cut-off fell inside that minute) and the two 2026-08-20 ads 1051182970996423 and 1077269081655907 (created before the oldest ad returned, so we cannot tell if they still run). `last_seen` was kept for these three.

### Profile IDs, third test

None of the 4 share-link profile IDs (Saleem, Healder, Hayat, Sehty) returned any ads in this run. Every ad that came back was filed under an Ad Library Page ID. That fits Meta filing ads under the Ad Library Page ID, not the profile ID (confidence about 80% now, up from about 70% in W42). For Hayat and Sehty the profile-ID result says nothing about whether they run ads, because the watch list has no Page ID for them. Keep querying both IDs.

## Ads worth opening (5 links for Yaqoob)

I did not open these. They are Ad Library snapshot links for you to open. English glosses of Arabic link titles are mine, not checked with you.

1. https://www.facebook.com/ads/library/?id=1476986184040710 : مختبر نبض السيدية (new, see discovery), the oldest of its 4 active ads that matched «سحب دم منزلي». Started 2026-03-24, 218 days: **long-runner** by age (heuristic). Check what it offers and whether the 4 ads look alike.
2. https://www.facebook.com/ads/library/?id=4651974365127843 : Majestic Lab, one of the 15 push ads, started 2026-10-15 (13 days). The offer and visuals are still unseen. The Library drops inactive ads, so you cannot compare with the older ads that ran 5 months.
3. https://www.facebook.com/ads/library/?id=4368474040083930 : Saleem, link title «حمل التطبيق الآن» (download the app now), started 2026-08-20, 69 days: **long-runner** by age. The tool matched «علاج طبيعي بالبيت» in its ad text, so check whether home physiotherapy is the offer.
4. https://www.facebook.com/ads/library/?id=2034386103884581 : Saleem, link title «استعيد حركتك من راحة بيتك» (regain your movement from the comfort of your home), started 2026-09-28 (30 days). The only Saleem ad whose link title points at physiotherapy or mobility, and it matched «علاج طبيعي بالبيت».
5. https://www.facebook.com/ads/library/?id=1141612468393725 : Hayat Platform, one of the 8 ads from 2026-10-26. Opening it shows the page name, so you can confirm it is the Hayat you meant before we add its Page ID.

## Discovery

Keywords chosen from the rotation list. W42 used تحليل بالبيت, زيارة طبيب للبيت and تمريض منزلي, so W44 used the other four. Every search used `countries=["IQ"]`, `ACTIVE`, `limit=50`.

| Keyword | Est. | Returned | Capped | What came back |
|---|---|---|---|---|
| سحب دم منزلي | 12 | 12 | No | Watched labs 3 (Majestic 1, Hormone 1, Sada 1). Others 9: مختبر نبض السيدية 4, مختبر لؤلؤة بغداد 1, مختبر الصدى التخصصي 1, مختبر الصـدى للتحليلات المرضية 1, مختبر بروتين 1, خدمة التمريض المنزلي 1. |
| علاج طبيعي بالبيت | 44 | 44 | No | Saleem 5, our own page 1, two article-promotion pages 25 (Global Vision Hub 15, Light Peace 10), individual doctors, clinics and a product ad 13. |
| طبيب اونلاين | 34 | 34 | No | Saleem 12, a manpower agency 6, other pages 9 (doctor-led programmes, training pages, alain.app, a clinic), Dalil iraq 3, Arab Therapy 2, Afea.iq / عافية 2. |
| استشارة طبية | 142 | 50 | **Yes** | Newest-first sample back to 2026-10-19: Hayat Platform 3, مركز الشفاء للسياحة العلاجية 10 (link title «استشارة طبية فورية»), Dalil iraq 3, 34 ads from about 30 hospitals, doctors, hair-transplant clinics and other pages. |

### Proposed watch-list rows (not added; `watchlist.csv` was not changed)

| Name | Platform | Page ID | Tier | Status | Evidence |
|---|---|---|---|---|---|
| مختبر نبض السيدية الطبي للتحليلات المرضية | facebook (Instagram not checked) | 159597903909090 | local-home-lab | proposed | 4 active ads on «سحب دم منزلي» (12 of 12 returned, not capped), started 2026-03-24, 03-26, 04-02 and 05-14 (218, 216, 209 and 167 days): all four **long-runners** by age (heuristic). Older than any Majestic ad we have seen. One ad's link title is the page name. The keyword is in the ad text per the tool; what the ads say is content not reviewed. |
| مختبر لؤلؤة بغداد | facebook (Instagram not checked) | 630490956807601 | local-home-lab | proposed (optional) | 1 active ad on «سحب دم منزلي», started 2026-05-19 (162 days), long-runner by age. Weaker evidence: a single ad. Content not reviewed. |

Your decision, Yaqoob, for each lab: **A)** approve for weekly tracking, **B)** keep as proposed for one more run, **C)** reject.

**Change to an existing row, needs your confirmation:** Hayat (Hayat platform) has no Page ID. The Ad Library page "Hayat Platform" (995546460299732) matches its name exactly and runs 8 active ads. The playbook counts an exact page-name match as identifying a page, but I could not check it against the Hayatdhs profile (opening Facebook is not allowed). Your decision: **A)** yes, that is Hayat, add the Page ID; **B)** no, a different page; **C)** not sure, open link 5 above first. Until you answer, the 8 ads are logged `on_watchlist=yes` with a note saying the match is unconfirmed.

### Noted, not proposed

- مختبر الصدى التخصصي (1307719245759541): 1 ad started today. Not the watched مختبر الصدى حي العامل (different Page ID).
- مختبر الصـدى للتحليلات المرضية (1028834566987154): 1 ad, started 2026-10-26.
- مختبر بروتين (109149110973938): 1 ad, started 2026-10-23.
- مختبر ابن النفيس (890439947490941): 1 ad, started 2026-10-25, found by «استشارة طبية».
- خدمة التمريض المنزلي (568959839645333): 1 home-nursing ad, started 2026-10-26.
- Afea.iq / عافية (498691173323497) and alain.app (541705792368222): app-like names that matched «طبيب اونلاين». Afea has 2 ads, one started 2026-01-24 (277 days). I could not classify either from the data. Do you know them?
- مركز الشفاء للسياحة العلاجية (132111407645899): 10 ads with link title «استشارة طبية فورية» in the capped sample; a medical-tourism page by name.
- Arab Therapy (466028537123187): online therapy sessions, a different vertical.

### Not competitors, logged only

Global Vision Hub and Light Peace (25 article-promotion ads from 2 pages, all created within 4 minutes on 2026-10-27, same link title «اقرأ المقال قبل فوات الأوان»), Dalil iraq (directory, 5 active ads seen across the keywords), a manpower agency, training academies, individual doctors, hospitals, hair-transplant clinics and a pharmacy.

## Sources and limits

**Calls made: 8 (`ads_library_search`), 7 planned plus 1 extra, within the 15-call weekly cap; no errors, no retries, no paging.**

| # | Scope | Est. | Returned | Capped |
|---|---|---|---|---|
| 1 | `page_ids` = the 5 labs together | 17 | 17 | No |
| 2 | `page_ids` = Saleem 105161715872501 + its profile ID 100091483862574, alone | 105 | 50 | **Yes** |
| 3 | `page_ids` = Healder 792564193937642 + profile IDs of Healder, Hayat, Sehty | 1 | 1 | No |
| 4 | `search_terms` = سحب دم منزلي | 12 | 12 | No |
| 5 | `search_terms` = علاج طبيعي بالبيت | 44 | 44 | No |
| 6 | `search_terms` = طبيب اونلاين | 34 | 34 | No |
| 7 | `search_terms` = استشارة طبية | 142 | 50 | **Yes** |
| 8 | `page_ids` = Hayat Platform 995546460299732 (the extra call, to count the candidate page's ads) | 8 | 8 | No |

Every call used `countries=["IQ"]`, `ad_active_status="ACTIVE"`, `limit=50`, `advertiser_request` "run competitor analysis on all labs and health service providers as well the ones we highlighted to focus on", `advertiser_job` `report_measure_or_look_up`, `client_model` `claude-sonnet-5-5` and `client_conversation_id` `tabeebx-w44-2026-10-28`. The tool accepted and echoed that ID, but its schema describes a 20-character letters-and-digits ID and this one has 22 characters with hyphens. If Meta-side validation matters, use a compliant ID next run. No page was looked up by name with `search_terms`.

**Log result (`data/competitors/ad-log.csv`, 79 rows before, 223 after).**
- 144 new rows: 28 on watched pages or Hayat Platform, 1 of our own (`own`), 115 other keyword hits (non-competitors and unclassified pages, logged per the data README).
- 55 rows seen again (15 Majestic, 40 Saleem), `last_seen` set to 2026-10-28.
- 11 rows now `not_seen`: 4 on pages covered by complete calls (Nokhba, Hormone, Sada, Healder), 2 Saleem nursing ads (probably stopped, see above), and 5 rows that are only "not covered" because their keyword or page was not re-run (3 «تحليل بالبيت» ads, the Hussein nursing clinic ad, our own 2026-09-05 ad).
- 3 rows now `beyond_sample` (all Saleem, `last_seen` kept).
- Final status counts: 199 active, 21 not_seen, 3 beyond_sample.
- The old Dalil iraq row (not returned) got a note: its keyword was re-run this week and it did not come back.

**Not covered.**
- Saleem: about 55 of the estimated 105 ads (the older ones), cut off by the 50 limit and not paged.
- The «استشارة طبية» market: about 92 of the estimated 142 ads (older than 2026-10-19).
- Sehty and دليل صحتي: no Page ID. Hayat's Page ID is a name match, not verified.
- Keywords «تحليل بالبيت», «زيارة طبيب للبيت», «تمريض منزلي»: not re-run this week, so W42 rows found only by them are "not covered", not "gone".
- No GCC/MENA country checks (no such rows on the watch list).
- **Organic Instagram and Facebook posts: not connected.** Coupler has no credentials and Metricool is not connected, so post rhythm, formats and engagement are skipped. Stories: skipped by decision on 2026-10-08.
- Inactive ads are invisible (`ACTIVE` filter, and the Library drops them outside the EU), so `not_seen` means "not returned today", not "stopped".
- Perplexity was not used (its key is rejected today). No web search was done for this file.

**Data caveats.**
- The tool returns no ad body text or image. Link titles are the only text seen, quoted as returned with emoji and phone numbers left out. Pipe-separated link titles are repeated values of the same text. Everything else is content not reviewed.
- A keyword hit means the term is in the ad's text (per the tool's description), but what the ad says around it is unknown.
- Start dates are UTC dates from `ad_delivery_start_time`; Baghdad is UTC+3. Creation times from `ad_creation_time` are used only for campaign-push grouping and capped-call reasoning.
- Ad longevity is a heuristic. A new Library ID does not tell us whether the creative is new.
- Results came newest-created first (creation times non-increasing in the 2 capped calls, apart from a 2-second tie in the keyword call), which is what the capped-call reasoning rests on.

**Compliance.** No facebook.com, instagram.com or tiktok.com page and no snapshot link was opened or fetched. Snapshot links above are for Yaqoob to open. `watchlist.csv` was not changed. Nothing was committed or pushed.

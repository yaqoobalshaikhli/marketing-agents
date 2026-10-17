---
name: competitor-intel-playbook
description: The weekly competitor-intelligence routine for TabeebX — which sources are allowed (Meta Ad Library via the Meta Ads connector, Coupler.io or Metricool for organic Instagram/Facebook posts), how to log ads with first/last-seen dates, the ad-longevity heuristic, competitor discovery, and the brief format. Use for any competitor, market or "what are others doing" question.
---

# Competitor intel playbook

Research on 2026-10-08 settled what is possible and what is allowed. The details are in `docs/research/competitor-monitoring-2026-10.md`.

## Allowed sources

| Source | Gives | How | Status |
|---|---|---|---|
| **Meta Ad Library** (Meta Ads connector, `ads_library_search`) | Competitors' **active** Facebook/Instagram ads in Iraq: page, Library ID, start date, link. **No ad text or image** comes back | Tool call, below | ✅ Tested 2026-10-08: returned 11 ads for «سحب دم منزلي» in IQ |
| Coupler.io "Instagram Public Data" | Competitors' public posts (captions, likes, comments, reel views, dates) and follower counts, **Business/Creator accounts only**, with history if "track changes" is on | Coupler connector | ⏳ Free-tier test pending (setup guide in `docs/setup/`) |
| Metricool Free (5 fixed competitors) | Competitors' Instagram/Facebook posts | Metricool connector | ⏳ Free-tier test pending (setup guide in `docs/setup/`) |
| Web search | News, launches, prices on public websites | `WebSearch` | ✅ |
| Yaqoob | TikTok video links; screenshots of anything else | He pastes them in | Manual |

## Not allowed

- Fetching, browsing or scraping facebook.com, instagram.com or tiktok.com pages, including the Ad Library website. Instagram's Terms ban automated collection "regardless of whether" logged in. Ad snapshot links are for Yaqoob to open.
- Third-party scraper services (Apify and similar).
- Stories: skipped by decision on 2026-10-08. No official route exists, and viewing shows our account in their viewer list.

## Weekly run (Tuesday)

1. **Watched ads.** For each `approved` row in `data/competitors/watchlist.csv`, call `ads_library_search` with `page_ids=[page_id]`, `countries=["IQ"]`, `ad_active_status="ACTIVE"`, `limit=50`. Several page IDs can go in one call. GCC/MENA players: use their country (`AE`, `SA`, `EG`, `JO`) once a month.
   - **Include each row's `facebook_profile_id` in the same call.** That's the ID a Facebook share link resolves to; on 2026-10-17 it returned no ads while the Ad Library's own `page_id` did, so we query both until we know which one Meta uses. If an ad comes back under a profile ID, note it in the brief.
   - **Rows with neither ID** (e.g. Instagram-only competitors) are skipped for ads. List them under "Sources and limits" as not covered, and ask Yaqoob for the Page ID or link.
   - **Don't look up a page by name with `search_terms`.** It matches words in the ad text, not page names. A name like "Hayat" returned unrelated advertisers on 2026-10-17. Only an exact `page_name` match in the results counts as identifying a page.
2. **Discovery.** Run 3–4 keyword searches in `IQ`, rotating through: سحب دم منزلي · تحليل بالبيت · زيارة طبيب للبيت · تمريض منزلي · علاج طبيعي بالبيت · طبيب اونلاين · استشارة طبية. **Keep the week to about 15 calls in total.** The tool forbids bulk extraction.
3. **Every call** sends `advertiser_request` (Yaqoob's own words for the request, e.g. "i need you to put an agent that could scan other competitors posts and stories and strategy as well") and one `client_conversation_id` per run. These go to Meta against TabeebX's ad account.
4. **Update `data/competitors/ad-log.csv`.** Ads from our own accounts (Page `102936468976144`, see `tabeebx-brand` → "Our own accounts") are logged with `on_watchlist=own`. Never report them as competitor activity.
   - New Library ID → add a row: `first_seen` = today, `last_seen` = today, `status` = active.
   - Seen again → `last_seen` = today.
   - Not returned this week → `status` = not_seen. Inactive ads disappear from the Library outside the EU, so this log is our only history.
5. **Longevity, a heuristic and never proof.** Days running = today − `ad_start_date`.
   - Under 14 days: **test**
   - 14–59 days: **running**
   - 60 days or more: **long-runner** ("likely working for them; heuristic")
   - Several active ads from one page that started together: **campaign push**
6. **Organic posts.** If Coupler or Metricool is connected, read the competitor dataset: post rhythm, format mix (reel / carousel / image), top posts by engagement relative to follower count, and repeated themes and offers. If neither is connected, write "organic: not connected" and skip.
7. **New competitors** found in discovery go into the brief as *proposed* watch-list rows with a reason. Yaqoob approves them; only then change `status` to `approved`.

## Brief: `reports/competitor-intel/<YYYY>-W<ww>.md`

```markdown
# Competitor intel, week <ww>
## What changed (3 bullets max)
## Watch list
| Competitor | Active ads | New this week | Long-runners | Notes |
## Ads worth opening (3–5 links for Yaqoob)
<snapshot links + why each matters>
## Organic (if connected)
## Angles for us
<2–3 concrete ideas for the Director, each tied to an observation; e.g. "Majestic Lab has run 6 home-blood-draw ads for 5 months → home lab demand is proven; our angle: know your nurse's name before she knocks">
## Proposed watch-list changes
## Sources and limits
<calls made, what wasn't covered>
```

Write only what the data shows. If an ad's content wasn't seen (the tool returns no text), say "content not reviewed" and don't guess at it.

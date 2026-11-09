# What competitor monitoring is possible (research, 2026-10-08)

**Method:** four parallel researchers, plus an adversarial fact-checker per topic. The fact-checkers for **TikTok** and **third-party tools** did not run (the Pro session limit was reached), so those findings are researched but not double-checked. Several Meta pages could not be opened from the research environment; those findings rest on search excerpts.

## Instagram

| Finding | Confidence | Source |
|---|---|---|
| Business Discovery (Graph API) reads another **Business/Creator** account's public profile and posts: captions, like and comment counts, reel views, timestamps, follower count. Queried through your own IG professional account | 85–88% | [Meta: Business Discovery](https://developers.facebook.com/docs/instagram-platform/instagram-api-with-facebook-login/business-discovery) |
| Not available for competitors: saves, shares, reach, demographics, follower history (so snapshots must be stored), personal accounts | 78–85% | [Meta: IG Media reference](https://developers.facebook.com/docs/instagram-platform/reference/instagram-media/) |
| **No official API returns another account's Stories** | 85% | Same |
| An app used only for your own business needs no App Review (Standard Access) | 72% | [Meta: App Review](https://developers.facebook.com/docs/instagram-platform/app-review) |
| Instagram's Terms ban automated collection without permission "regardless of whether" logged in | 93% | [Instagram Terms of Use](https://help.instagram.com/581066165581870) |
| Graph API v26.0: from 2026-10-27, `?ids=` multi-ID batching is rejected on all versions. Use one call per competitor | 78% | [Graph API v26.0 changelog](https://developers.facebook.com/docs/graph-api/changelog/version26.0) |
| Coupler.io has an "Instagram Public Data" source with a "track changes over time" option (confirmed through the connector) | 78% | [Coupler.io source page](https://www.coupler.io/sources/instagram-public-data-connector) |

## Meta Ad Library

| Finding | Confidence | Source |
|---|---|---|
| The Ad Library website shows all **active** ads of every type, searchable by country including Iraq | 80% | [Meta Ad Library help](https://www.facebook.com/help/259468828226154) |
| Outside the EU/UK, non-political ads **disappear when they stop**. Keep our own log | 80% | Same |
| No spend, impressions or targeting for commercial ads in Iraq | 75% | [Ad Library API](https://www.facebook.com/ads/library/api) |
| The public Ad Library **API** returns only political ads plus EU/UK ads, but **the Meta Ads connector's `ads_library_search` did return 11 Iraq-only commercial ads** in a live test | Tested | Live test, 2026-10-08 |
| The connector returns page, Library ID, start date and link, **not ad text or images** | Tested | Same |
| Ad longevity as a "winning ad" signal is a practitioner heuristic, not endorsed by Meta | 70% | Practitioner guides (secondary) |
| Reading other businesses' Facebook Page posts via the API needs Page Public Content Access (business verification + App Review). Skipped | 85% | [Meta: PPCA](https://developers.facebook.com/docs/features-reference/page-public-content-access) |

## TikTok (not double-checked)

| Finding | Confidence | Source |
|---|---|---|
| No official, affordable API reads competitors' TikTok videos or ads for Iraq. The Commercial Content Library covers the EU only; the Research API is for academics | 75–90% | [TikTok Commercial Content API](https://developers.tiktok.com/products/commercial-content-api), [Research API](https://developers.tiktok.com/products/research-api/) |
| Creative Center "Top Ads" shows only ads whose owners opted in. Category inspiration, not competitor tracking | 80% | [TikTok Top Ads](https://ads.tiktok.com/help/article/top-ads) |
| TikTok reaches about 40.1M adults in Iraq (end of 2025), likely the biggest ad-reachable platform | 65% | [DataReportal Digital 2026: Iraq](https://datareportal.com/reports/digital-2026-iraq) |
| Paid TikTok ads for remote diagnosis/telehealth are likely not allowed in Iraq's policy group | 55% | [TikTok healthcare ad policy](https://ads.tiktok.com/help/article/tiktok-ads-policy-healthcare-pharmaceuticals) |

## Third-party tools (not double-checked)

| Tool | Competitor posts | Competitor stories | Price | Notes |
|---|---|---|---|---|
| Metricool | IG, FB (not TikTok) | No | Free: 5 fixed competitors; Starter about $20–25/mo | Official connector reported to work on all plans ([help](https://help.metricool.com/how-to-connect-metricools-mcp-with-claude-0l84v)) |
| Fanpage Karma | IG, FB, TikTok | No | about €29/mo | API/connector metered per profile |
| Socialinsider | IG, TikTok, FB | No | about $82/mo | |
| Storyclash | Influencer focus | Yes | about €499+/mo, 12-month contract | Over budget |
| Postiz | Own posts only (publishing) | — | Cloud from $29/mo; self-host free (AGPL) | Candidate publishing layer |

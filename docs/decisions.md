# Decisions

Newest at the bottom. Every row is something Yaqoob decided, or a fact the decision rests on, with its source.

## 2026-10-08: Phase 0 planning session

| # | Decision | Notes / source |
|---|---|---|
| 1 | Build "mods" as Claude Code agents and skills in a git repo (plugin format), with recurring jobs as Routines | Per-agent model pinning is documented only for Claude Code ([sub-agents docs](https://code.claude.com/docs/en/sub-agents)); claude.ai Projects document no per-project model; uploaded claude.ai skills reject a `model` field ([skills docs](https://code.claude.com/docs/en/skills)) |
| 2 | Plan: Claude **Pro** | Shared 5-hour and weekly limits ([help article](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan)). Fable 5.1 is not on Yaqoob's plan |
| 3 | First focus: **B2C home bookings + brand awareness**. B2B and Health 360 later | |
| 4 | Agency jobs covered: strategy, content production, paid ads, B2B enablement (B2B later) | |
| 5 | Operator: **Yaqoob alone** | |
| 6 | Autonomy: **draft and prepare; Yaqoob approves** before anything publishes or any money is spent | |
| 7 | Channels: Instagram, TikTok, Facebook, WhatsApp | |
| 8 | Paid budget: **under $500/month** | |
| 9 | Real-world assets: none yet → test 4 visual styles (motion, AI lifestyle, labeled AI people, real-shoot plan) | Guardrails: no fabricated testimonials; AI people labeled |
| 10 | Test design: **organic first** (3 weeks), then paid behind the top 2 styles | |
| 11 | Review: weekly review page; **Thursday** | Phase 0 uses `content/<week>/review.md`; the page comes in Phase 1 |
| 12 | Volume: **10+ pieces/week** | |
| 13 | Bookings arrive on **WhatsApp** | Paid objective = WhatsApp conversations; bookings logged in `data/bookings-log.csv` |
| 14 | Repo: new private **tabeebx-marketing** | Keeps marketing automation away from the EMR (patient records) codebase |
| 15 | **No Higgsfield** (no credits). **Canva Free** for templates and limited AI images | Canva Free gives "up to 20 uses" of AI per Canva's [pricing page](https://www.canva.com/en_us/pricing/); third-party figures conflict |
| 16 | Add a **Competitor Intel** agent (posts, ads, strategy) | Replaces the earlier "Scout" |
| 17 | Competitor watch list: local Baghdad + MENA | |
| 18 | TabeebX Instagram is a Business account linked to its Facebook Page; Meta ad account is active | Yaqoob's answers |
| 19 | Competitor organic posts: **test Coupler.io and Metricool free tiers** | See `docs/setup/` |
| 20 | Competitor **stories: skipped** for now | No official API; viewing shows in their viewer list ([research](research/competitor-monitoring-2026-10.md)) |
| 21 | Meta Ad Library via the connector works for Iraq | Live test: 11 active ads for «سحب دم منزلي» in IQ |
| 22 | Watch list: **Majestic Lab + 4 labs** (Al-Nukhba, Al-Thanaa, Hormone, Al-Sada) + agent-proposed discoveries | Dalil Iraq excluded (directory) |
| 23 | Work mode: **lean** (single agent; multi-agent checks only for big, risky decisions) | An 8-agent research run hit the Pro session limit |
| 24 | PostZen instagram-agent-skill: **not used** | Its competitor skill is manual browsing ("There is no API for this"); new vendor; would need DM access |
| 25 | Vendor **12 skills** from coreyhaines31/marketingskills (MIT, 53.7k stars) | social, ads, ad-creative, competitor-profiling, content-strategy, copywriting, marketing-psychology, offers, analytics, video, image, marketing-plan |
| 26 | Postiz (publishing/scheduling): **decide after Phase 0** | 36.9k stars, AGPL; cloud from $29/mo per Postiz docs (unverified on their live page) |
| 27 | Iraqi dialect sources: **Yaqoob's approved copy + the existing checker + a correction log** | No usable high-quality open Iraqi corpus found; the best lexicons (LDC, MADAR) are research-only |
| 28 | Copywriter model: **opus, provisional** until the blind test (opus vs sonnet) | `copywriter-blind-test` skill |

## 2026-10-17: first test run and fixes

| # | Decision | Notes / source |
|---|---|---|
| 29 | Repo is **yaqoobalshaikhli/marketing-agents** (not EMR) | Yaqoob; the EMR repo is no longer touched for marketing work |
| 30 | First test: 6 agents on a 4-piece pack | Results: `docs/test-runs/2026-10-17-first-test.md` |
| 31 | Facebook Page "Tabeebx" (`102936468976144`) **is ours** | Yaqoob. Recorded in `tabeebx-brand` → "Our own accounts"; logged as `own` in the ad log |
| 32 | Fix the 15 problems the test found | Yaqoob. Fixed in the commit after this table |
| 33 | Brand colours: the **hex codes are used** (they're what the approved trust campaign's code uses); the RGB numbers in the brand file don't match and are marked unverified | Yaqoob was not sure; evidence: EMR `marketing/motion/src/brand.css`. Final call still his |
| 34 | AI label applies to **any AI image with people** (styles B and C) | Resolves a conflict between `health-ad-policy` and `content-system` |
| 35 | Consent references go in `data/consents.csv` (initials, scope, where the form is kept); **signed forms never in the repo** | |
| 36 | ~~Until Yaqoob decides about the logo: no logo on frames~~ (replaced by #39) | Interim rule |
| 37 | Brand colours: **the hex codes are correct** (#181943, #EE396B, #1B9CCE); RGB numbers corrected to match | Yaqoob. The account skill `tabeebx-context` still needs the same fix |
| 38 | **Saleem** (Page `105161715872501`) is an approved, watched competitor | Yaqoob |
| 39 | The logo's pink figure **doesn't count** as the frame's one pink element | Yaqoob |
| 40 | «مرخّصين من وزارة الصحة العراقية» is a **confirmed fact**, usable in consumer posts | Yaqoob |
| 41 | New watched competitors: **Hayat** (IG @hayatdhs, FB "Hayat platform"), **Healder** (FB + IG; Page `792564193937642`), **Sehty** (IG @sehty_net), **دليل صحتي** (FB) | Yaqoob. Hayat and دليل صحتي Page IDs, and Healder's Instagram handle, still needed |
| 42 | Instagram handles recorded: Healder @healder.ai, Saleem @saleem.app, Sehty @sehty_net, Hayat @hayatdhs | Yaqoob's links, tracking parameters removed |
| 43 | One-time exception: resolve 4 Facebook share links by redirect only. The first try was blocked (proxy 403). **Done after Yaqoob changed the environment's network setting**: only the redirect headers were read, each ended at Facebook's login page, and no page content was read | Yaqoob approved the exception |
| 44 | Facebook pages: Sehty = facebook.com/sehtynet, Healder = facebook.com/healdernet, Saleem = facebook.com/saleemapp.iq, Hayat = facebook.com/Hayatdhs. Their share-link profile IDs return **0 ads** in the Ad Library, while Healder's and Saleem's Ad Library page IDs do return ads, so both IDs are queried weekly | Redirects + one read-only Ad Library call |
| 45 | **دليل صحتي** stays on the watch list with **no ads check** (no Facebook link). Weekly reports list it as not covered and don't ask for the link again | Yaqoob |
| 46 | **Multi-agent runs for every real task in this session**, accepting the Pro-limit cost (CLAUDE.md rule 7 otherwise says not to fan out agents for small tasks; the rule text is unchanged) | Yaqoob, multiple-choice answer |
| 47 | **Saleem: keep the newest-50 sample.** No paging through its ads (it probably runs about 120 in Iraq, about 70% confidence). Its totals are reported as estimates, and its older ads that a capped call doesn't reach are logged `beyond_sample`, not `not_seen` | Yaqoob, multiple-choice answer |
| 48 | **Saleem gets its own Ad Library call every week** (still the newest 50), so its batches can't crowd the labs' and Healder's ads out of a shared 50-ad call. Costs 1 extra call a week | Yaqoob, multiple-choice answer |
| 49 | **«تأمين» is allowed in consumer copy when it refers to Health 360.** TabeebX has signed with an insurance company, a TPA (GlobeMed Iraq) and an insurance broker platform, inana, whose API it has. The insurer's name isn't recorded yet. The copy checker no longer blocks the word | Yaqoob |
| 50 | **Corporate-package visit counts are per year.** The "شهرياً" on two detail pages of the source deck is wrong | Yaqoob |
| 51 | **Brand guide recorded** in `tabeebx-brand`: HEX, RGB, CMYK and LAB for navy, pink, blue and white; 3 logo lockups; Cairo Bold and Medium; 6 highlight covers. The guide's own HEX and RGB differ by 1–4 points per channel; HEX stays the screen master until Yaqoob picks | Yaqoob's brand-guide image |
| 52 | **W42 brief Q2 (facts):** true today for home bookings: (b) a follow-up call within ٢٤ ساعة after the visit, and (c) male and female nurses in all Baghdad districts. (a) name and photo before the visit and (d) a doctor approving home-lab requests online were not ticked, so pieces can't state them (meaning still to confirm). (e) how lab results reach the family wasn't asked yet | Yaqoob, multiple-choice answer |
| 53 | **W42 brief Q3:** the «شوف بعينك» trust campaign is still running in W43. Fold the pieces into it (20:30 slots, its sign-off and series names) | Yaqoob, multiple-choice answer |
| 54 | **W42 brief Q4:** an opted-in broadcast list exists on the TabeebX WhatsApp Business number. Piece 04 goes to it; Yaqoob sends it and the list never leaves the phone | Yaqoob, multiple-choice answer |
| 55 | **W42 brief Q5:** piece 03 is **not** a real shoot. It becomes an animated video: strong on-screen words, hooks that keep viewers watching, in/out transitions and fades, and an elaborate narrative | Yaqoob, in his words |
| 56 | **Design quality:** Yaqoob judged the test designs poor. He wants Photoshop (Adobe), Claude Design and Canva used, and a professional design agent that scores work with critique lenses drawn from 10 of the world's best designers and learns from researched reference designs. The Adobe plugin is installed but needs Yaqoob to sign in to Adobe in his claude.ai connector settings | Yaqoob |
| 57 | **Design team setup:** a new **Designer** agent replaces the Creative Producer, and a separate **Design Critic** scores its work, so no agent grades its own. The critique panel has 10 lenses: 7 world designers and 3 Arabic type/design experts, each grounded in their published principles (no impersonation, no invented quotes). **Pass: an average of at least 8/10 with no lens below 6**, with up to 3 revision rounds, before the Guard and Yaqoob. The bad designs Yaqoob saw were made on 9 May, before this system | Yaqoob, multiple-choice answers |
| 58 | **AI labels: only where the platform requires them.** TikTok: realistic AI people or scenes (organic and ads). Meta: photoreal AI video and realistic AI voice-overs. No label on Meta still images or illustrated/motion work. Never present an AI person as real TabeebX staff, patients or customers | Yaqoob, after `docs/research/platform-policy-2026-10.md` |
| 59 | **Not true today:** (a) the family sees the visitor's name and photo before the visit; (d) a doctor approves home-lab requests online. Posts must not state them. ⚠️ (a) is the trust campaign's approved promise «تعرف اسم وصورة اللي جايك قبل لا يدگ الباب»; it is now flagged in `approved-lines.md` | Yaqoob, multiple-choice answer |
| 60 | **Home-lab results** reach the family on WhatsApp (PDF or photo) and in the TabeebX app, and a doctor explains them | Yaqoob, multiple-choice answer |
| 61 | **Piece 03 animation: 15–20 seconds** | Yaqoob, multiple-choice answer |
| 62 | **HEX is the colour master:** #181943, #EE396B, #1B9CCE (#37 stands). Yaqoob's account skill `tabeebx-context` should use RGB 24,25,67 / 238,57,107 / 27,156,206 | Yaqoob, multiple-choice answer |
| 63 | **Name-and-photo promise:** Yaqoob says TabeebX never made it. The line is in the trust campaign's `09-sun04-promise-reel` job (`approved-lines.md`), so whether it was posted is unconfirmed; it stays blocked. **New, in progress:** contracting many doctors as service providers, and clinic-appointment booking in the app alongside home services | Yaqoob, in his words |
| 64 | **W42 pack review: Monday 19 Oct** (the earlier slots in the brief) | Yaqoob, multiple-choice answer |
| 65 | **Design team built:** `designer` and `design-critic` agents (Opus), `design-studio` (code-rendered HTML → PNG/MP4 with vendored Cairo) and `design-critique` (10 lenses) skills. The Creative Producer is removed. The fact-checks on the designer research run afterwards | Yaqoob chose "build now, check after" |
| 66 | **Official logo received** (stacked lockup, 1080 px JPG on white). **On navy backgrounds the "TabeebX" wordmark is white** instead of navy; the figure keeps its pink and blue. Transparent versions are in `design-studio/assets/brand/` | Yaqoob, in his words |
| 67 | **The Design Critic runs on Sonnet** (was Opus) to save Pro usage; **the bar stays: average ≥ 8/10, no lens below 6**. In W42, round-1 scores came from the Opus critic and later rounds from Sonnet | Yaqoob, in his words |
| 68 | **Rule 5 relaxed for influencer research only (2026-10-20):** Claude may view individual public influencer and creator profiles on facebook.com, instagram.com and tiktok.com, read-only, one profile at a time, with no login and no bulk collection. **Scraper services stay banned.** Competitor data still comes only from the `competitor-intel-playbook` sources. Platform terms may restrict automated access to these sites (about 90% confident, Meta's terms), so volume stays low and anything blocked is reported, not worked around | Yaqoob, multiple-choice answer |
| 69 | **Research programme (2026-10-20):** healthcare influencers and design/motion learning, **design first, then the influencer list**. Market: **Iraq first, then the wider Arabic world**. Sources: web search, Reddit threads found by search (Reddit returns 403 when fetched directly; there is no Perplexity connector in the session), and public profiles under #68. Research cannot override the hard brand and design rules; anything that conflicts goes to Yaqoob as a proposal. **Order:** research, then the final W42 design rounds on 02, 03 and 04, then Guard and the Director | Yaqoob, multiple-choice answers |
| 70 | **Competitor run, W44 (2026-10-28):** scope is all 10 watchlist rows (5 labs, Saleem, Hayat, Healder, Sehty, دليل صحتي) **plus Iraq discovery** (new labs and providers come back only as proposed rows). **Deepest look at the four Yaqoob named on 17 Oct: Saleem, Hayat, Healder, Sehty.** **Perplexity is now an allowed competitor source** (plugin installed 2026-10-20 from Perplexity's official marketplace) for public websites, app stores, news and price pages; it is never asked to open or summarise facebook.com, instagram.com or tiktok.com pages. Organic Instagram stays "not connected": Coupler has no credentials and Metricool is not connected | Yaqoob, multiple-choice answers |
| 71 | **W44 competitor brief, Yaqoob's answers (2026-10-31):** (a) **Add مختبر نبض السيدية الطبي للتحليلات المرضية** (Page 159597903909090) to the watchlist as `approved`; مختبر لؤلؤة بغداد stays out. (b) **Hayat Platform page (995546460299732): open the ad first.** Yaqoob compares ad 1141612468393725 with facebook.com/Hayatdhs; the Page ID is NOT added until he answers. (c) **Healder, Sehty and دليل صحتي: re-check first.** Rows stay separate until Yaqoob opens the `sehty_net` bio link or the destination of Healder's ad 1691823529126691. (d) **Network access: allow specific hosts** (play.google.com, apps.apple.com, hayatdhs.com, healder.net, sehty.net) in the environment settings; only Yaqoob can change this, and a new session picks it up | Yaqoob, multiple-choice answers |

## Open questions for Yaqoob

- **W44, Hayat Platform page (#71b):** open Ad Library ad 1141612468393725 (https://www.facebook.com/ads/library/?id=1141612468393725), compare it with facebook.com/Hayatdhs, and say whether it is the same Hayat (yes adds Page ID 995546460299732).
- **W44, Healder / Sehty / دليل صحتي (#71c):** open the `sehty_net` Instagram bio link, or the destination of Healder's current ad (Library ID 1691823529126691), then choose one row or three.
- **Network access (#71d):** add play.google.com, apps.apple.com, hayatdhs.com, healder.net and sehty.net under Allowed domains in the environment settings (cloud environment menu in the session title bar, then Edit; keep the Allow package managers box ticked), then start a new session.
- **Perplexity:** its API key was rejected (401). Add a valid `PERPLEXITY_API_KEY` in the same settings (never in chat), or drop Perplexity.

- **Facebook network access:** facebook.com is now reachable from this environment (it was blocked earlier on 2026-10-17). Rule 5 still holds: the agents never browse Facebook. If you opened it only for this lookup, you can close it again.
- **Competitor Instagram/TikTok handles.** Saleem, Hayat, Healder and Sehty have Instagram handles. The 5 labs and دليل صحتي have none, and no competitor has a TikTok handle; Coupler and Metricool need handles.
- **Account skill (#62):** update your Claude account skill `tabeebx-context` to RGB 24,25,67 / 238,57,107 / 27,156,206. Only you can edit it.
- **Logo, optional upgrade:** an SVG, or a larger transparent PNG, of the stacked and horizontal lockups would allow sizes above about 300 px and the horizontal layout.
- **Clinic booking in the app (#63):** is it live now, or coming soon? Posts can mention it only once it's live.
- **Staff + family label:** the who-is-on-screen label for a shoot with staff and a consenting family still needs approved Arabic wording.
- **Voice examples.** What do «يعلّك» and «فتشي عامية وبروفشنل» in the brand voice notes mean? Keep them or remove them?

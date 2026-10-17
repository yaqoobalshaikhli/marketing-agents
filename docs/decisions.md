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

## Open questions for Yaqoob

- **Health 360 in consumer copy.** «تأمين» is banned in consumer content by the campaign copy rules, but Health 360 is insurance. How should consumer posts name it?
- **Competitor Instagram/TikTok handles.** The watch list has Page IDs but no handles yet; Coupler and Metricool need handles.
- **Visit counts.** Corporate packages list visits per year in the table but "monthly" on two detail pages (noted in `tabeebx-brand`). Which is correct?
- **Account skill.** Fix the RGB numbers in your Claude account skill `tabeebx-context` to match the hex codes (#37).
- **Two labels need approved Arabic wording:** the AI label, and the who-is-on-screen label for staff + family.
- **Week 42 brief.** Its 7 questions are in `content/2026-W42/brief.md`.
- **Voice examples.** What do «يعلّك» and «فتشي عامية وبروفشنل» in the brand voice notes mean? Keep them or remove them?

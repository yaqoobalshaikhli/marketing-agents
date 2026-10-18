# TabeebX marketing mods

This repo is TabeebX's in-house marketing team, built as Claude Code agents and skills. Yaqoob, the founder, runs it alone and approves everything.

## Team (`.claude/agents/`)

| Agent | Model | Job |
|---|---|---|
| director | opus | Weekly brief, review pack, strategy |
| competitor-intel | sonnet | Tuesday competitor run (Meta Ad Library, Coupler/Metricool) |
| copywriter | opus (provisional until the blind test) | Iraqi-dialect consumer copy |
| designer | opus | Finished, rendered designs (PNG, MP4): carousels, stories, 15–20 s animations |
| design-critic | sonnet | Scores every design on 10 lenses; passes at avg ≥ 8, none < 6 |
| brand-policy-guard | opus | Quality gate on every piece and ad |
| ads-manager | sonnet | Paid Meta tests after approval; creates ads paused |
| ads-pulse | haiku | Daily read-only ad check while paid is live |
| analyst | sonnet | Weekly report, style test, bookings |

## Rules for every session in this repo

1. **Nothing publishes and no money is spent without Yaqoob's explicit approval.** Ads are created PAUSED.
2. **Consumer Arabic copy follows the `iraqi-dialect` skill** and must pass `node .claude/skills/iraqi-dialect/scripts/lint-copy.mjs <file>` before review.
3. **Facts come from `tabeebx-brand`, our data files, or a cited source.** Never invent services, numbers, doctors, testimonials or results. Mark anything uncertain with a confidence, and leave `[placeholders]` rather than guessing.
4. **Every piece passes `design-critic`** (average ≥ 8/10, no lens below 6) **and then `brand-policy-guard`** (the `health-ad-policy` checklist) before Yaqoob sees it.
5. **No scraping** of facebook.com, instagram.com or tiktok.com, and no scraper services. Competitor data comes only from the sources in `competitor-intel-playbook`.
6. **Patient messages (DMs, WhatsApp) never go to third-party tools.**
7. **The Pro plan is shared and limited.** Prefer one good draft over many. Don't fan out agents for small tasks.
8. **Yaqoob prefers multiple-choice questions** when a decision is his. Ask; don't assume.

## Where things go

- `content/<YYYY>-W<ww>/`: weekly pack (brief, pieces, guard report, review). See `content-system`.
- `reports/competitor-intel/`, `reports/analyst/`, `reports/ads/`: reports.
- `data/`:
  - `competitors/watchlist.csv`, `competitors/ad-log.csv`
  - `dialect-corrections.csv`: Yaqoob's corrections only
  - `bookings-log.csv`
- `docs/decisions.md`: every decision, dated, with its source. Add to it when Yaqoob decides something.
- `.claude/skills/`: our skills (`tabeebx-brand`, `iraqi-dialect`, `health-ad-policy`, `content-system`, `design-studio`, `design-critique`, `competitor-intel-playbook`, `copywriter-blind-test`) and 12 vendored from coreyhaines31/marketingskills (MIT; see `THIRD_PARTY_NOTICES.md`). Where vendored guidance conflicts with ours, ours wins.

# TabeebX marketing mods

TabeebX's in-house marketing team, built as Claude Code agents ("mods"), each pinned to the model that fits its job, plus the skills that hold TabeebX's brand, Iraqi-dialect voice and health-ad rules. Nothing publishes and no money is spent without Yaqoob's approval.

## The team

| Mod | Model | Does | When |
|---|---|---|---|
| `competitor-intel` | Sonnet | Logs competitors' active Meta ads in Iraq; reads competitor posts once Coupler or Metricool is connected; writes the weekly intel brief | Tuesday |
| `director` | Opus | Weekly brief: themes, 10+ pieces, visual-style allocation; assembles the Thursday review | Wednesday, Thursday |
| `copywriter` | Opus (provisional) | Baghdadi-dialect copy for posts, reels, stories, captions, WhatsApp | Wednesday |
| `creative-producer` | Sonnet | Visual briefs: motion-graphics specs, Canva templates, Canva AI prompts, shoot plans | Wednesday |
| `brand-policy-guard` | Opus | Runs the copy checker and health-ad checklist; PASS/FAIL with fixes | Before review |
| `analyst` | Sonnet | Weekly results, the 4-style test, WhatsApp bookings | End of week |
| `ads-manager` | Sonnet | Paid Meta tests after approval; creates everything **paused** | From week 4 |
| `ads-pulse` | Haiku | Daily read-only ad check | While ads run |

## How to use it now (Phase 0: manual runs)

1. Open a Claude Code session on this repo: claude.ai/code (pick `tabeebx-marketing`), the desktop app's Code tab, or `claude` in a terminal inside the repo.
2. Ask in plain words, naming the mod:
   - **Tuesday:** "Run competitor-intel for this week."
   - **Wednesday:** "Director: write this week's brief. Then copywriter and creative-producer produce the pieces, and brand-policy-guard checks them."
   - **Thursday:** open `content/<week>/review.md`, tick approve or write your change, then say "Process my review." Your wording fixes go into the dialect correction log automatically.
   - **Any time:** "Analyst: how did this week do?"
3. **Week 1 only:** run the Copywriter blind test ("Run the copywriter blind test"). It decides Opus vs Sonnet for copy using your scores.

## Your to-do list

- [ ] Fill Instagram handles in `data/competitors/watchlist.csv` for the 5 labs.
- [ ] Week A: Coupler.io free test. Week B: Metricool free test. See `docs/setup/competitor-organic-posts.md`.
- [ ] Log every WhatsApp booking in `data/bookings-log.csv`, including «منين سمعت بينا؟».
- [ ] Answer the open questions at the bottom of `docs/decisions.md`.

## Roadmap

- **Phase 0 (this repo):** agents, skills, data, setup guides.
- **Phase 1:**
  - Routines: Tuesday intel, Wednesday production, Thursday review pack, split across days to respect Pro limits.
  - Phone-friendly review page with Approve / Change buttons.
  - Postiz decision for scheduling.
- **Phase 2 (week 4):** paid Meta tests behind the top 2 visual styles; daily ads pulse.
- **Later:** B2B mods (proposals, HR and school outreach) and Health 360.

## What's inside

- `.claude/agents/`: the 8 mods.
- `.claude/skills/`:
  - **Ours:** `tabeebx-brand` (copy of your account skill), `iraqi-dialect` (rules, 129 approved lines, copy checker), `health-ad-policy`, `content-system`, `competitor-intel-playbook`, `copywriter-blind-test`.
  - **Vendored from coreyhaines31/marketingskills (MIT):** `social`, `ads`, `ad-creative`, `competitor-profiling`, `content-strategy`, `copywriting`, `marketing-psychology`, `offers`, `analytics`, `video`, `image`, `marketing-plan`. Ours override them where they conflict.
- `data/`: watch list, ad log (seeded with the 2026-10-08 Ad Library test), dialect corrections, bookings.
- `docs/`: decisions, research, setup guides.
- `.claude-plugin/plugin.json`: lets the same agents and skills install as a plugin. `claude plugin validate` passes; installing it in Cowork hasn't been tested yet.

Check copy by hand at any time:

```
node .claude/skills/iraqi-dialect/scripts/lint-copy.mjs path/to/piece.md
```

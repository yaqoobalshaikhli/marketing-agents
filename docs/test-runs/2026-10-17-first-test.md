# First test run: 2026-10-17 (week 2026-W42)

**Scope:** 6 of the 8 agents ran on real inputs, with a reduced pack of 4 pieces (normal: 10+). Ads Manager and Ads Pulse were skipped: no paid plan is approved and nothing is live. Nothing was published, no ad was created or changed, and no Canva credits were used.

**How they ran:** each agent ran as a sub-agent on its own model (Opus or Sonnet as in its file), reading its definition and skills from this repo. This tests the instructions and the skills. It does not test Claude Code auto-loading the files from `.claude/agents/`, which happens when a session opens inside this repo.

## Results

| Step | Agent (model) | Output | Verdict |
|---|---|---|---|
| 1 | competitor-intel (Sonnet) | 4 live Ad Library calls; `ad-log.csv` now 48 rows; 1 competitor proposed (Saleem); `reports/competitor-intel/2026-W42.md` | ✅ Followed the playbook. Did not guess ad content. Proposed rather than approved. |
| 2 | director (Opus) | `content/2026-W42/brief.md`: 4 pieces, themes tied to evidence with confidence, 7 multiple-choice questions for Yaqoob | ✅ Invented no facts. Chose a real shoot over AI people to stay consistent with «شوف بعينك». |
| 3 | copywriter (Opus) | 4 piece files, every unknown left as `[placeholder]` + "Needs Yaqoob" | ✅ 0 checker errors or warnings. Reported 10 system frictions (below). |
| 4 | creative-producer (Sonnet) | Visual briefs and production plans for all 4; 0 credits used | ✅ Found the brand colour-code error. |
| 5 | brand-policy-guard (Opus) | `content/2026-W42/guard-report.md`: 1 PASS-with-note, 3 FAIL | ✅ Strict as designed. The fails are for unconfirmed facts, missing consent and one possibly untrue label, not policy breaches. |
| 6 | analyst (Sonnet) | `reports/analyst/2026-W42.md`: every metric "not available", with reasons | ✅ Did not estimate. Found the Instagram account @tabeebx.iq via the connector. |

**Usage:** about 1.0M sub-agent tokens for this 4-piece test (per-agent: 134k, 148k, 186k, 199k, 205k, 125k). What share of the Pro allowance that is isn't visible from here; check `/usage` in Claude Code. A full 10+ piece week will cost more, so trimming what each agent reads (below) matters.

## Problems found in the system (to fix)

| # | Problem | Found by | Proposed fix |
|---|---|---|---|
| 1 | Checker lints every Arabic line, including English notes, so it raises false warnings | copywriter | Lint only the `## Copy` and `## Caption` sections and fenced JSON specs |
| 2 | Checker counts words and pink groups per line; the rules are per frame | copywriter, guard | Count per frame (each `###` block) |
| 3 | Hook-length check only fires on `hook:` lines | copywriter | Also match `- \`hook\`` and frame-1 lines |
| 4 | JSON job specs inside code fences aren't linted | creative, guard | Lint fenced JSON automatically |
| 5 | Western-digit rule blocks labels such as `Q2-a` beside Arabic | copywriter | Define a standard pending marker `[PENDING Q2-a: …]`, exempt from the digit rule |
| 6 | Piece template lacks slots: variant hook, Needs Yaqoob, psychology note, warning justifications; `channel`/`goal` allow only one value | copywriter | Add the slots; allow lists |
| 7 | Vendored English skills contradict the approved voice (they ban contrast reveals, negation lists, short broken lines) | copywriter | Add a "known overrides" list to `copywriter.md` |
| 8 | Copywriter doesn't preload `health-ad-policy` | copywriter | Add it |
| 9 | AI-label rule is inconsistent: `health-ad-policy` labels all AI people; `content-system` labels style C only (style B has AI families too) | guard | Label any AI image with people (B and C) |
| 10 | Style D label «الأشخاص من فريق TabeebX» can be untrue if a family member appears | guard | Two approved label variants: staff-only / staff + family |
| 11 | No consent-record format or location; checklist says `data/`, brief says keep forms out of the repo | guard | `data/consents.csv` with reference IDs only; forms stored offline |
| 12 | "PASS with note" has no status mapping | guard | Map to `guard-pass` |
| 13 | Logo vs the one-pink-element rule unclear | creative, guard | Yaqoob decides (question below) |
| 14 | Creative Producer can't see `campaign.json` field shapes (in the EMR repo) or safe zones | creative | Copy the template field shapes and safe zones into `content-system` |
| 15 | TabeebX's own Facebook Page ID isn't recorded, so our own ads can't be told apart from competitors' | competitor-intel, analyst | Record our Page ID and IG id (`17841447680118496`) in the brand files |

## Decisions only Yaqoob can make

- **Brand colours:** the hex and RGB values in `tabeebx-brand` (and in the account skill `tabeebx-context`) disagree:
  - Pink #EE396B = RGB 238,57,107, but the skill says 238,83,107
  - Blue #1B9CCE = RGB 27,156,206, but the skill says 29,157,208
  - Navy #181943 = RGB 24,25,67, but the skill says 24,25,68

  Which values are correct?
- **Brief questions:** the 7 questions at the top of `content/2026-W42/brief.md`. Three block drafting: which facts we may state, the broadcast audience, and the shoot timing.
- **Saleem:** approve, keep as proposed, or reject as a watched competitor.
- **"Tabeebx" Page:** is the Facebook Page named "Tabeebx", with an ad running about 42 days, ours?
- **Licence line:** may we use «مرخّصين من وزارة الصحة العراقية» as a fact? It isn't in the brand file.
- **Logo:** does the logo's pink figure count as the one pink element?
- **Dialect notes:** judge the Guard's notes, e.g. «تحب تعرفه» (Levantine-leaning; «تريد» is Baghdadi). Your answers become the first rows of `data/dialect-corrections.csv`.

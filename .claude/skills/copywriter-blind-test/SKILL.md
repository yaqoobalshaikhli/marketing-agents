---
name: copywriter-blind-test
description: Runs the blind test that decides which model writes TabeebX's Iraqi-dialect copy (Opus vs Sonnet), with Yaqoob judging without knowing which model wrote what. Use once in week 1, and again when a new model is released or dialect quality drops.
---

# Copywriter blind test

There is no published benchmark for Iraqi-dialect marketing copy, so we measure it on our own briefs, with the only judge who matters: Yaqoob.

## Steps

1. **Briefs.** Take 5 briefs from this week's `brief.md`, covering: a story question, a carousel hook plus 3 slides, a reel hook plus a 15-second script, a WhatsApp broadcast, and a caption.
2. **Generate.** For each brief, invoke the `copywriter` agent twice with the same prompt: once with `model: opus`, once with `model: sonnet` (per-call model override on the Agent tool). Run the checker on both.
3. **Blind.** Write `content/<week>/blind-test.md`. For each brief, show the two versions as **A** and **B**, alternating which model is A (brief 1: opus = A, brief 2: sonnet = A, and so on). Put the key in `content/<week>/blind-test-key.md` and tell Yaqoob not to open it until he has scored.
4. **Score.** Yaqoob gives each version 1–5 on three questions:
   - **Baghdadi?** Would a Baghdadi think a Baghdadi wrote it?
   - **Hook:** would you stop scrolling?
   - **Clear:** is it obvious what to do next?
5. **Decide.** Average per model. If one model wins Baghdadi by 0.5 or more, it writes the copy. Otherwise use Sonnet, which uses less of the Pro plan. Update `model:` in `.claude/agents/copywriter.md` and record the scores and the decision in `docs/decisions.md`.
6. **Corrections.** Every wording fix Yaqoob makes during the test goes into `data/dialect-corrections.csv`, whichever model it was for.

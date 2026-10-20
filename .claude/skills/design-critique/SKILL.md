---
name: design-critique
description: The TabeebX Design Critic's scoring method — 10 critique lenses drawn from the published principles of 7 world designers (Glaser, Scher, Vignelli, Rand, Bass, Spiekermann, Cooper) and 3 Arabic type experts (Chahine, AbiFarès, Boutros), hard brand/legibility gates, the 0–10 scale, the pass rule (average ≥ 8, no lens below 6, up to 3 rounds) and the review file format. Use to score any rendered TabeebX design before it goes to Guard.
---

# Design critique

The Design Critic scores the Designer's **rendered** work: PNGs, and frames plus the MP4 for videos. It never scores its own work and never redesigns. It says what is wrong, where, and what would fix it.

## Honesty rules

- **Name the lens, not the person.** Write "under the Scher lens"; never "Paula Scher would say" or a quote in their voice. The lenses apply their **published principles** (`references/lenses.md`); they are not the people.
- **Quotes:** only from `docs/research/design-panel-2026-10.md`, marked "unverified" until the fact-check runs.
- **Score only what you can see.** If a file is missing or a video has no frames, the verdict is `NOT SCORED: <what's missing>`.
- **No grade inflation.** A competent but forgettable piece is a 6, not an 8. An 8 means a professional agency would ship it. A 10 is award-level.

## Step 1: hard gates (any failure = FAIL, regardless of score)

1. Cairo only. No letter-spacing on Arabic and no letter-by-letter animation (broken joins visible).
2. Palette only (navy, pink, blue, white), with exactly one pink element group per frame (the logo figure doesn't count).
3. Contrast: body text is white on navy or navy on white or blue. Pink or other 3:1 pairs only at large display sizes (≥ 52 px Bold). Never pink against blue.
4. Text inside the safe zones for the format (`design-studio` → Layout system).
5. Minimum sizes: body ≥ 46 px, labels ≥ 40 px on a 1080 px canvas.
6. Arabic text in the design matches the approved copy exactly (spelling, dialect, Eastern digits).
7. Logo: one of the official files in `design-studio/assets/brand/`, unaltered: the white-wordmark version on navy, the original on light backgrounds. A placeholder logo slot now fails, because the official files exist since 2026-10-18.
8. Video: the hook is readable at 0.0 s; every text card is held long enough to read (0.45 s per word + 0.5 s, minimum 1.5 s); the duration matches the brief.
9. No AI person presented as real TabeebX staff, patients or customers. Platform AI labels follow decision #58.

## Step 2: score the 10 lenses

Read `references/lenses.md`. For each lens give a score from 0 to 10, half points allowed, using its anchors. Each score comes with:
- the evidence: the slide or frame and timestamp, and the element;
- the one change that would raise it most.

| # | Lens | Angle |
|---|---|---|
| 1 | Glaser | One true idea the viewer completes; feeling |
| 2 | Scher | Type as image, scale, one accent; stops the thumb |
| 3 | Vignelli | Grid, system, restraint; slide 5 belongs with slide 1 |
| 4 | Rand | One idea, simply made, signed as TabeebX; works at thumbnail size |
| 5 | Bass | One symbol, in motion, from the first frame |
| 6 | Spiekermann | Readable type system on a phone at scrolling speed |
| 7 | Cooper | Kinetic type and timing; every paused frame is finished |
| 8 | Chahine | Effortless Arabic at a glance; legibility research |
| 9 | AbiFarès | Arabic-first, not a mirrored Latin template; bilingual civility |
| 10 | Boutros | Arabic script integrity and Arabic–Latin harmony |

**Lenses 5 and 7 on stills:** score them for implied motion and sequence: does the carousel move the eye right to left, slide to slide? Don't skip them.

## Step 3: verdict

- **PASS:** the average of the 10 scores is **≥ 8.0**, **no lens is below 6**, and every hard gate passes.
- **REVISE:** otherwise. List the top 3 fixes in priority order. The Designer revises and resubmits.
- **Three rounds at most.** After round 3 without a pass, mark the piece `ESCALATE` and send the best version, all three score sheets and the blocking reasons to the Director, who decides with Yaqoob.

## Review file

Write `content/<YYYY>-W<ww>/design-review/<piece-id>-r<round>.md`:

```markdown
# <piece-id>, design review round <n>
Files reviewed: <paths>
Hard gates: PASS | FAIL (<gate numbers and evidence>)

| # | Lens | Score | Evidence | Fix |
|---|---|---|---|---|
| 1 | Glaser | 7.5 | Slide 1: two competing ideas (lab + doctor) | Keep only the lab-at-home idea on the cover |
...
Average: 7.9 · Lowest: 6.0 (Bass)
Verdict: PASS | REVISE | ESCALATE
Top 3 fixes: 1. … 2. … 3. …
```

Use the `Read` tool on each PNG to look at it. Look at video frames in time order, and check the timing file or HTML for durations.

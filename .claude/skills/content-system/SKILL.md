---
name: content-system
description: How TabeebX's weekly B2C/awareness content is planned, produced and handed to Yaqoob — the weekly mix (10+ pieces across Instagram, TikTok, Facebook, WhatsApp), the four-visual-style test, file layout of a weekly pack, production tools (motion system, Canva Free), and the Thursday review. Use when planning, producing, packaging or reporting on weekly content.
---

# TabeebX content system

## Goals (decided 2026-10-08)

- **First focus:** B2C home-service bookings and brand awareness in Baghdad. B2B and Health 360 come later.
- **Bookings arrive on WhatsApp.** Every consumer piece ends in an action that leads there, or in a share action («دزها لكروب العائلة»).
- **Approval:** the mods draft and prepare. Yaqoob approves every piece before it goes out, and approves any spend.
- **Review day:** Thursday.

## Weekly mix (10+ pieces)

A starting mix; the Director adjusts it from last week's report.

| Channel | Pieces | Notes |
|---|---|---|
| Instagram feed | 3 (2 carousels + 1 reel) | Carousel formula below |
| Instagram stories | 4–6 | Morning question (poll/quiz/question box) + evening «باچر» teaser, as in the trust campaign |
| TikTok | 2 | Short vertical video; Yaqoob posts manually (no publishing connector for TikTok without Higgsfield credits) |
| Facebook | Cross-post the 3 feed pieces | Adjust caption length |
| WhatsApp | 1 broadcast + reply templates | Broadcast to opted-in contacts only |

## Carousel formula (from `tabeebx-brand`)

Hook question (stop the scroll) → shared pain → TabeebX as the answer → features as human benefits → proof → CTA. **Proof must be real**: a named doctor, a number from our own records, a licence. Never invent it.

## Four-visual-style test (organic first)

Decided 2026-10-08: test all four styles, organic first, then put paid budget behind the top two.

| Style | Tool | Rule |
|---|---|---|
| A. Motion graphics / illustration | Code-rendered motion system in `marketing/motion` of `yaqoobalshaikhli/EMR`; Canva Free templates | Free, unlimited |
| B. AI lifestyle scenes (families, homes, Baghdad streets), no clinicians | Canva AI image generator (Canva Free: limited monthly allowance, about 20 premium AI uses per Canva's pricing page; check the counter in Canva) | Budget about 4–5 AI images a week |
| C. AI people including clinicians | Canva AI | **Always labeled AI** on the piece; never a real doctor's name or credentials |
| D. Real-shoot plan | Shot list and brief for a phone shoot with real TabeebX staff and consenting families | Produces a plan, not images, until footage exists |

**Weeks 1–3:** every style appears at least twice a week. Tag every piece with its style letter. The Analyst compares reach, saves, shares and watch time per style, adjusted for channel and format; with this little data the comparison is directional, not statistically significant.

**Week 4:** the Director proposes paid tests for the top two styles. The Ads Manager drafts paused Meta ads aimed at WhatsApp conversations.

## Weekly pack layout

```
content/2026-W42/
  brief.md          ← Director: goals, themes, competitor angles, style allocation
  pieces/
    01-ig-carousel-<slug>.md   ← one file per piece (template below)
    ...
  guard-report.md   ← Brand & Policy Guard: PASS/FAIL per piece
  review.md         ← the pack Yaqoob reads on Thursday: every piece, in order, with checkboxes
```

### Piece file template

```markdown
---
id: 2026-W42-01
channel: instagram-carousel   # instagram-reel | instagram-story | tiktok | facebook | whatsapp-broadcast | whatsapp-reply
style: A                      # A B C D (visual test)
goal: bookings                # bookings | awareness | trust | share
publish: Sun 18 Oct 20:30
status: draft                 # draft → guard-pass → approved | changes
---
## Copy (Iraqi dialect)
<on-screen text per frame / slide, one block per frame>

## Caption
<caption>

## Visual brief
<per-slide: layout, colours (Navy #181943, Pink #EE396B one element, Blue #1B9CCE), Cairo font, imagery, AI label if style B/C>

## Production
<tool: motion job spec | Canva template | Canva AI prompt | shoot plan>

## Dialect doubts
<words the Copywriter was unsure of, or "none">
```

## Thursday review (Phase 0: Markdown; Phase 1: review page)

1. The Director assembles `review.md`: every piece in posting order, with Guard's verdict and a checkbox: `[ ] approve  [ ] change: ___`.
2. Yaqoob marks it, either in GitHub (edit the file in the browser or phone app) or by replying in a Claude session.
3. For each change Yaqoob makes to the wording, the session that processes the review appends a row to `data/dialect-corrections.csv` (`kind` word, phrase or style) and updates the piece's status.
4. Approved pieces become the posting list in `review.md`. Posting is manual until a publishing tool is chosen (Postiz decision pending).

## Measuring bookings

Meta reports WhatsApp conversations started, not bookings. Yaqoob, or whoever answers WhatsApp, adds one row per booking to `data/bookings-log.csv`, including the answer to «منين سمعت بينا؟». That is the only link from posts to revenue, so the Analyst reports on it every week.

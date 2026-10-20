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
| A. Motion graphics / illustration | The Designer's code-rendered HTML → PNG/MP4 (`design-studio`); Canva Free; the older EMR motion system (`references/motion-templates.md`) only when Yaqoob asks for it | Free, unlimited |
| B. AI lifestyle scenes (families, homes, Baghdad streets), no clinicians | Canva AI image generator (Canva Free: limited monthly allowance, about 20 premium AI uses per Canva's pricing page; check the counter in Canva) | Budget about 4–5 AI images a week. **Any AI image showing people is labeled AI**, same as C |
| C. AI people including clinicians | Canva AI | **Always labeled AI** on the piece; never a real doctor's name or credentials |
| D. Real shoot | Shot list and brief for a phone shoot with real TabeebX staff and consenting families | Produces a plan, not images, until footage exists. Everyone on camera needs a row in `data/consents.csv` |

### Rules that apply to every style

- **AI label:** any AI-generated image or video that shows people (style B or C) carries the AI label from `health-ad-policy`.
- **Who-is-on-screen label (style D)** must match who actually appears:
  - Staff only: «الأشخاص من فريق TabeebX». This is approved; it was used in the trust campaign.
  - Staff + a consenting family: `[PENDING: label wording for staff + family, Yaqoob to approve]`. Until he approves a wording, a shoot that includes family members can't pass Guard.
- **Logo:** may appear on frames. Its pink figure **does not count** as the frame's one pink element (Yaqoob, 2026-10-17), so a frame may carry the logo plus one pink highlight. Never recolour, stretch or crop the logo.

**Weeks 1–3:** every style appears at least twice a week. Tag every piece with its style letter. The Analyst compares reach, saves, shares and watch time per style, adjusted for channel and format; with this little data the comparison is directional, not statistically significant.

**Week 4:** the Director proposes paid tests for the top two styles. The Ads Manager drafts paused Meta ads aimed at WhatsApp conversations.

## Weekly pack layout

```
content/2026-W42/
  brief.md          ← Director: goals, themes, competitor angles, style allocation
  pieces/
    01-ig-carousel-<slug>.md   ← one file per piece (template below)
    ...
  design/<piece-id>/        ← Designer: HTML sources and rendered PNG / MP4
  design-review/<piece-id>-r<n>.md ← Design Critic: 10-lens scores per round
  guard-report.md   ← Brand & Policy Guard: PASS/FAIL per piece
  review.md         ← the pack Yaqoob reads on Thursday: every piece, in order, with checkboxes
```

### Piece file template

```markdown
---
id: 2026-W42-01
channel: [instagram-carousel, facebook]   # one or more: instagram-carousel | instagram-reel | instagram-story | tiktok | facebook | whatsapp-broadcast | whatsapp-reply
style: A                                  # A B C D (visual test)
goal: [bookings]                          # one or more: bookings | awareness | trust | share
publish: Sun 18 Oct 20:30
status: draft                             # draft → guard-pass → approved | changes
consents: []                              # consent_ids from data/consents.csv for everyone on camera (style D)
---
Needs Yaqoob: <every [PENDING …] in this file, in one line; or "none">
Psychology: <the one marketing-psychology principle used, and where>

## Copy (Iraqi dialect)
### Frame 1
key: <on-screen text>
### Frame 2
...
### Voice-over (spoken)
<spoken lines; exempt from the 20-word on-screen limit>

## Caption
<caption>

## Variant hook
<one alternative hook, for feed pieces (Instagram feed carousel, reel, TikTok, Facebook post); omit for stories and WhatsApp>

## Copy check
<the checker's last line, plus one line per warning: fixed, or why it stays>

## Design
<Designer: the one idea, the reference learned from, output files in design/<piece-id>/, round number and the Design Critic's verdict and average score>

## Dialect doubts
<words the Copywriter was unsure of, or "none">
```

### Conventions the checker understands

- `### Frame N` headings in `## Copy` mark frames. The 20-word and one-pink limits apply per frame. A frame whose heading says *voice-over*, *VO* or *spoken* is exempt from the word limit.
- **Placeholders:**
  - `[PENDING Q2-a: …]` (or any `[…]`) means the piece needs Yaqoob and isn't ready for review.
  - `[AT POSTING: wa.me link]` marks a value filled in when posting and doesn't block.
  - Text in brackets is ignored by every copy rule, so labels like `Q2-a` are safe inside them.
- Only `## Copy`, `## Caption`, `## Variant hook` and fenced ```json specs are checked. Notes elsewhere may quote Arabic freely.

## Production order

Director brief → Copywriter (copy checker passes) → **Designer** renders → **Design Critic** scores; the piece passes at an average of ≥ 8/10 with no lens below 6, with up to 3 rounds, otherwise it is escalated → Guard → Yaqoob.

## Thursday review (Phase 0: Markdown; Phase 1: review page)

1. The Director assembles `review.md`: every piece in posting order, with its rendered files, the Design Critic's average score, Guard's verdict and a checkbox: `[ ] approve  [ ] change: ___`. Guard's verdicts map to `status:` like this:
   - `PASS` → `guard-pass`
   - `PASS with note` → `guard-pass` (the note goes into `review.md`)
   - `FAIL` → stays `draft`
2. Yaqoob marks it, either in GitHub (edit the file in the browser or phone app) or by replying in a Claude session.
3. For each change Yaqoob makes to the wording, the session that processes the review appends a row to `data/dialect-corrections.csv` (`kind` word, phrase or style) and updates the piece's status.
4. Approved pieces become the posting list in `review.md`. Posting is manual until a publishing tool is chosen (Postiz decision pending).

## Measuring bookings

Meta reports WhatsApp conversations started, not bookings. Yaqoob, or whoever answers WhatsApp, adds one row per booking to `data/bookings-log.csv`, including the answer to «منين سمعت بينا؟». That is the only link from posts to revenue, so the Analyst reports on it every week.

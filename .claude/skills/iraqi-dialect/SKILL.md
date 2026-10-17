---
name: iraqi-dialect
description: TabeebX's Iraqi (Baghdadi) Arabic voice for consumer content — word choice, spelling, rhythm, banned words, and the correction log Yaqoob builds in review. Use for ANY Arabic consumer copy (posts, carousels, reel scripts, stories, captions, WhatsApp broadcasts and replies), and to check or fix copy someone else wrote. Not for B2B proposals or HR decks, which use Modern Standard Arabic.
---

# Iraqi dialect — TabeebX voice

This skill exists because generic "Arabic" from a model drifts toward Gulf, Levantine or Egyptian forms, and Baghdad audiences notice in one word. Everything below comes from three places, in this order of authority:

1. **`data/dialect-corrections.csv`**: Yaqoob's own corrections from review. Newest wins. Read it every time.
2. **`references/approved-lines.md`**: 129 lines Yaqoob approved for the September 2026 trust campaign.
3. The rules in the copy checker (`scripts/lint-copy.mjs`), carried over from the campaign's copy linter.

If a rule here and a correction in the CSV disagree, follow the CSV and flag the conflict in your output so the rule can be fixed.

The voice notes in `tabeebx-brand` (e.g. «يعلّك», «فتشي عامية وبروفشنل») are background only. They rank below all three sources above. Two of their examples have no agreed meaning yet (open question in `docs/decisions.md`), so don't imitate them.

## Where dialect applies

| Content | Register |
|---|---|
| Instagram, TikTok and Facebook posts, reels, stories, carousels, captions | Iraqi colloquial |
| WhatsApp broadcasts and reply templates to families | Iraqi colloquial |
| B2B proposals, HR decks, contracts, insurance documents | Modern Standard Arabic or English, never dialect |
| Doctor's credentials, licence lines, legal disclaimers | MSA is fine inside dialect posts (e.g. «مرخّصين من وزارة الصحة العراقية») |

## Spelling: write the sounds Baghdad says

From the approved lines:

- **گ** for the hard g (the Baghdadi qāf): تصدگنا، نگدر، نگولك، يدگ، شگد، لحگت، گدامكم، الجگارة، الرگبة.
- **چ** for ch: حچي، باچر، تحچي.
- Eastern Arabic digits in Arabic copy: ٨:٣٠، ٢٤، ٤. Western digits only in phone numbers and handles (enforced by the checker).

## Words that mark the voice

All of these appear in approved lines:

| Use | Meaning | Approved example |
|---|---|---|
| آني | I | «آني الدكتور يعقوب.» |
| شنو / شلون / منو / ليش / شگد | what / how / who / why / how much | «شنو يصير بعد ما *تحجز؟*» |
| هسه | now | «إذا هسه تحس بألم بالصدر» |
| هواية | a lot | «لأن الضغط هواية.» |
| باچر | tomorrow | «باچر» (story kicker) |
| دز / تدزلنا | send / send us | «دزها لكروب العائلة.» |
| ويا | with | «دقايق ويا الدكتور» |
| مو | not | «مو لأن الدكتور ما يريد...» |
| راح | will | «راح نفتحلك الباب» |
| حچي | talk, just words | «بس هذا يبقى حچي.» |
| يضوّجك | bothers you | «شنو أكثر شي يضوّجك من تراجع طبيب؟» |
| سرة | queue | «بلا سرة ولا طريق.» |
| الماي | water | «الماي ما يصفّي السموم» |
| لحد | until, all the way to | «لحد ما الدكتور يدگ باب بيتك.» |
| إلك | to you | «نعلن وعدنا إلك» |
| كروب | (WhatsApp) group | «دزها لكروب إخوانك.» |

## Never: other dialects

The checker flags these. The left column is not Iraqi; write the right column.

| Not Iraqi | Write |
|---|---|
| شو، إيش | شنو |
| هلق، دلوقتي، الحين | هسه |
| كتير، وايد | هواية |
| هيك، كده | هيچ |
| بكرة، بكره | باچر |
| بدّي، عايز | أريد |
| ازاي | شلون |
| حكي | حچي |
| ابعت | دز |

## Rhythm and shape

Again from the approved lines:

- **Short lines, broken where a person would breathe.** «كلنا مرّينا بيها: / سرة طويلة، / دقايق ويا الدكتور، / وترجع للبيت وعندك أسئلة ما لحگت تسألها.»
- **Admit before you claim.** «نگدر نگولك إن خدمتنا أحسن... بس هذا يبقى حچي.» Then show proof.
- **Respect doctors; blame the system.** «مو لأن الدكتور ما يريد... لأن الضغط هواية.»
- **Hooks of five words or fewer.** «لا تصدگنا.» «وعدنا...» «شگد *التزمنا؟*»
- **One pink group per frame**, marked `*like this*`.
- **At most 20 words of on-screen text per frame.**
- **The CTA is an action a person does today:** «دزها لكروب العائلة.» «اكتبه بالتعليقات.» «رابط الواتساب بالبايو.»
- **Sign-off:** «لا تصدگنا. شوف بعينك.»

## Banned in consumer content

From the campaign copy rules (errors stop a piece):

- «تأمين» in consumer content
- «الأفضل». Replace the adjective with a name, a number or a picture.
- «مضمون», «علاج نهائي»
- Any price: «دينار», «د.ع», «IQD»

Warnings (allowed only with proof beside them): «أفضل», «أسرع», «موثوق».

Fear hooks are out: «ما تدري», «فوات الأوان», «قبل لا يفوت». Inform and invite instead.

> Open question for Yaqoob, recorded 2026-10-08: «تأمين» is banned in consumer copy, but Health 360 is an insurance product. Health 360 consumer posts need an approved way to name it before the Copywriter writes any.

## How to write a piece

1. Read `data/dialect-corrections.csv`, then skim `references/approved-lines.md` for the closest piece type (story question, carousel, reel hook).
2. Draft in dialect directly. Do not write MSA and "translate" it; translated copy keeps MSA word order.
3. Run the checker on your file: `node .claude/skills/iraqi-dialect/scripts/lint-copy.mjs <file>`. Fix every error; fix every warning, or justify it under `## Copy check`.
   - In piece files it checks only `## Copy` (per `### Frame`), `## Caption`, `## Variant hook` and fenced JSON specs, so notes elsewhere can quote Arabic freely.
   - Text inside `[brackets]` is ignored. Open `[PENDING …]` placeholders are counted on the last line and mean the piece isn't ready.
   - The checker has tests: `node --test .claude/skills/iraqi-dialect/scripts/lint-copy.test.mjs`. Run them after changing the checker.
4. Next to each piece, list any word you were unsure is Baghdadi, under **"Dialect doubts"**. Yaqoob's answer becomes a correction-log row. Never hide a doubt.

## The correction log

`data/dialect-corrections.csv` columns: `date,wrong,right,kind,note,piece`.

- `kind` = `word` (always replace; the checker enforces it), `phrase` (prefer the right phrase), or `style` (a rule about rhythm or tone, applied by judgment).
- When Yaqoob marks a change in review, the agent that handles the review adds a row. Do not invent rows; only Yaqoob's corrections go in.
- Every few weeks, Guard proposes promoting repeated corrections into this SKILL.md, and Yaqoob approves the edit.

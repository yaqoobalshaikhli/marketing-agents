---
name: tabeebx-brand
description: Company brain for TabeebX — Iraqi digital health platform (telehealth app, home visits, home diagnostics, physiotherapy, Health 360 insurance with GlobeMed TPA). ALWAYS use this skill for ANY task involving TabeebX, tabeebx, طبيب اكس, Health 360, or Yaqoob's company — social media posts, carousels, infographics, proposals, decks, outreach messages, prospect lists, competitor analysis, pricing questions, or any content in Iraqi Arabic dialect for the brand. Use it even if the user doesn't name the company but is clearly working on their healthcare business, B2B corporate health packages, or Baghdad/Iraq health market tasks.
---

# TabeebX Company Context

> Repo copy of the `tabeebx-context` skill from Yaqoob's Claude account, taken 2026-10-08 so cloud runs (Routines) can read it. If the two disagree, the account skill wins: update this copy and say so in the commit.

This skill exists so that every output — a post, a proposal, a deck, a WhatsApp message — starts from the real company, not from guesses. Read the section relevant to the task; read `references/corporate-packages.md` for B2B proposals and in-house package pricing; `references/health360.md` for the insurance product; `references/competitors.md` for positioning and battlecards.

## What TabeebX is

TabeebX (legal entity: **Baru Medical Ltd**, Baghdad) is an Iraqi digital health platform. One brand, four layers:

1. **Consumer app** (in development): teleconsultation with any specialist, personal medical records, e-prescriptions with medicine delivery. Arabic-first with an Iraqi-dialect AI voice agent.
2. **Home healthcare services**: specialist doctor home/worksite visits, nursing visits, home lab blood draws (631 tests, 18 categories), mobile X-ray, ultrasound, 12-lead ECG, and home physiotherapy — delivered across Baghdad, Iraq-wide as the network grows.
3. **In-house B2B corporate packages** (primary commercial engine, sold directly — no insurer): four tiers per employee per month — Economy 18,000 / Essential 25,000 / Standard 30,000 / Premium 50,000 IQD — combining unlimited teleconsultation, doctor + nursing visits, labs, and PAYG corporate discounts. Full details in `references/corporate-packages.md`. An admin-fee model (~25,000 IQD/user/YEAR, teleconsult only + discounted PAYG) is under internal study — not yet launched.
4. **Health 360 insurance program**: individual + family health insurance administered with **GlobeMed Iraq** as TPA; TabeebX sits inside GlobeMed's provider network. In-hospital coverage runs through GlobeMed's Class A private hospital network. Details in `references/health360.md`.

The in-house packages and Health 360 are **separate offerings — never mix them in one quote**.

Strategic positioning: TabeebX is building toward the **unified B2B corporate health package** — telehealth + home visits + lab + physio + insurance in one tiered offering — which competitive research (April 2026) confirmed **no GCC/Iraq competitor currently offers as a single product**. This is the white space; protect it in all positioning.

## Who we sell to

- **B2B (primary revenue focus)**: HR managers and admin directors at Baghdad companies (construction, retail/hypermarkets, banking, holding groups) and private schools/kindergartens in affluent districts (Mansour, Karrada, Jadriya, Zayouna). Live pipeline exists — top prospects include Baghdad Engineering Co., Waffir, Al-Burhan, Al Mouyasser, EISB, BBI, Maarif schools, CADMUS, Maple Bear.
- **B2C**: Baghdad families and young professionals who are tired of clinic queues; entry via teleconsultation and home services, upsell to Health 360 family plans.
- **Insurers/TPAs**: GlobeMed relationship is the template for future payer partnerships.

## Our own accounts (recorded 2026-10-17)

| What | Value | Source |
|---|---|---|
| Facebook Page "Tabeebx" | Page ID `102936468976144` | Confirmed as ours by Yaqoob, 2026-10-17 |
| Instagram | @tabeebx.iq, IG user ID `17841447680118496` | Meta Ads connector (`ads_get_ig_accounts`), 2026-10-17 |
| Meta ad account linked to that Instagram | `1904494880402733` (one of 3 active ad accounts on the login; which one is primary is unconfirmed) | Meta Ads connector, 2026-10-17 |

Ads from these accounts are ours. Competitor intel logs them with `on_watchlist=own` and never counts them as competitor activity.

## Brand identity — non-negotiable in every design

> **Colour values, recorded 2026-10-17.** The hex codes below are the ones in production: the approved trust campaign's `marketing/motion/src/brand.css` (EMR repo) uses #181943, #EE396B and #1B9CCE, taken from the campaign's Design guideline. The RGB numbers in this table **don't match** those hex codes:
> - Pink #EE396B is RGB 238,57,107, not 238,83,107
> - Blue #1B9CCE is RGB 27,156,206, not 29,157,208
> - Navy #181943 is RGB 24,25,67, not 24,25,68
>
> **Use the hex codes.** Treat the RGB numbers as unverified until Yaqoob confirms which is right. The same mismatch is in the `tabeebx-context` skill on his Claude account.

| Element | Value |
|---|---|
| Navy (primary dark) | `#181943` — RGB 24,25,68. Backgrounds, wordmark text |
| Pink (accent) | `#EE396B` — RGB 238,83,107. CTAs, highlights, logo figure |
| Blue (secondary) | `#1B9CCE` — RGB 29,157,208. Supporting graphics, icons |
| White | `#FFFEFF` — clean space; use generously |
| Font | **Cairo** (Bold for headlines, Medium for body) — both Arabic and Latin |
| Logo | Abstract human figure with raised arms (pink head/torso + blue arms/base) above the "TabeebX" wordmark in navy. Never recolor, stretch, or place on clashing backgrounds |

Design language: rounded, human, optimistic, medical-but-not-clinical. Instagram highlight icons use navy circles with dashed borders. Avoid stock-photo sterility; prefer warm lifestyle imagery of Iraqi families and real doctors.

## Voice and dialect rules

- **Consumer social media**: Iraqi colloquial Arabic (اللهجة العراقية) — natural, warm, direct. Words like هسه، شنو، وين ما كنت، يعلّك are correct register. Professional but close to the viewer ("فتشي عامية وبروفشنل"). Hook-first carousels: stop-the-scroll question → pain → TabeebX as answer → features as human benefits → trust proof → CTA. Emojis in moderation.
- **B2B and formal**: Modern Standard Arabic or English, clean and confident. No dialect in proposals, agreements, or HR-facing decks.
- **Bilingual documents**: follow the Health 360 TOB pattern — English left, Arabic right.
- Core message: "صحتك مو رفاهية، صحتك أولوية" — health is a priority, not a luxury. We sell peace of mind (راحة بال), not medicine.

## Company facts and current state (July 2026)

- Founder: Yaqoob (Arabic + English fluent). Lean team; sales currently relationship-driven — a stated goal is reducing dependency on single connections by building repeatable outreach systems.
- Native app: delayed ~1 year with an external developer; App Store / Google Play submission requires a **company developer account** for healthcare apps (Apple guideline 5.1.1 — health apps must be submitted by the legal entity providing the service, not an individual). A parallel rebuild is underway in Lovable; voice agent uses OpenAI Realtime (mini). Iraqi-dialect quality of the voice agent is a known gap to work around with heavy dialect few-shot examples.
- Markets: Iraq (Baghdad) live focus; GCC (Saudi/UAE) is the expansion thesis.
- Related asset: "Basra Airlines" animation exists in brand materials (partnership/side project — confirm with Yaqoob before referencing it publicly).

## How to use this context

- **Social content**: apply dialect rules + brand colors + Cairo font specs; give designers exact hex codes and slide-by-slide layout notes.
- **Proposals/decks for a company or school**: use the in-house packages from `references/corporate-packages.md` (pricing, comparison table, terms, and the proposal format conventions). Lead with the corporate white-space pitch; tailor the cover and pricing table to the prospect's headcount; keep Arabic-first.
- **Pricing questions**: never invent numbers — corporate packages from `references/corporate-packages.md`, insurance from `references/health360.md`, exactly as written.
- **Competitive positioning**: read `references/competitors.md`; the one-line answer to "why TabeebX?" is: the only unified telehealth + home care + insurance package in the market, in Iraqi Arabic, with a real provider network behind it.

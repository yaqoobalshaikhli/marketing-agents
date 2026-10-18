---
name: health-ad-policy
description: Policy and safety checklist for TabeebX health marketing on Meta (Facebook/Instagram) and TikTok, plus TabeebX's own non-negotiables (no fabricated testimonials, no AI people passed off as real staff or patients, no cure claims; platform AI-label rules). Use before any piece goes to Yaqoob for review, before any ad is drafted, and whenever copy mentions symptoms, conditions, doctors or results.
---

# Health ad policy: TabeebX checklist

Platforms reject health ads for wording, not intent, and a rejected ad can restrict the ad account. The checklist below is what Guard runs on every piece. Each external rule shows its source and how sure we are. Rules marked **verify** were taken from secondary sources during research on 2026-10-08 and must be checked against the platform's own page before the first paid campaign.

## TabeebX non-negotiables (our rules, not platform rules)

These hold even when a platform would allow more.

1. **No fabricated testimonials, reviews, patient stories or "results" presented as real.** A testimonial needs a real person who agreed in writing to its use, recorded in `data/consents.csv`. Illustrative scenarios must say so on screen.
2. **AI labels:** TabeebX's own rule (label every AI image with people) was dropped by Yaqoob on 2026-10-17. Platform rules still apply (table rows marked *AI*, and `docs/research/platform-policy-2026-10.md`); decision #58: **label only where the platform requires it**: on TikTok, realistic-looking AI people or scenes (organic: the AIGC label or a clear caption; ads: the mandatory disclaimer); on Meta, photoreal AI video and realistic AI voice-overs. No label on Meta still images or on illustrated/motion work. Never, labelled or not: an AI person presented as a real TabeebX doctor, nurse, patient or customer (CLAUDE.md rule 3).
2a. **Real people on camera need consent.** Everyone filmed (staff, family, patient) has a row in `data/consents.csv` covering the use, organic or paid. The signed forms stay offline, never in this repo; the CSV holds only a reference. The on-screen label must match who appears: «الأشخاص من فريق TabeebX» is approved for staff only, and staff + family needs a label Yaqoob approves.
3. **No cure claims and no guaranteed outcomes** (the checker blocks «يشفي», «علاج نهائي», «مضمون»).
4. **No fear hooks.** Inform and invite.
5. **Emergencies go to emergency services, not to TabeebX.** Any piece that names a symptom of a possible emergency (chest pain, stroke signs, severe breathing trouble) says to call emergency services and not to message us. The approved model is the heart carousel: «لا تفتح تطبيق، ولا تدزلنا رسالة. اتصل بالطوارئ ٩١١ فوراً، ولا تسوق بنفسك.» Use the number Yaqoob approved there unless he changes it.
6. **No prices in consumer content** (campaign rule; the checker blocks it).
7. **Nothing publishes and no money is spent without Yaqoob's approval.** Ads are created paused.

## Meta (Facebook, Instagram)

| Rule | What it means for copy | Source | Confidence |
|---|---|---|---|
| **Personal attributes**: ads must not assert or imply knowledge of the viewer's health, including medical conditions, mental health, and so on | ❌ «عندك سكري؟» «تعاني من الضغط؟» ✅ «فحص السكر يوصلك للبيت.» «تعبت من سرة العيادة؟» Talk about the service or a shared situation, never about the viewer's body | [Accelerated Digital Media guide, 2026](https://www.accelerateddigitalmedia.com/insights/guide-to-social-media-health-ad-restrictions-2026/) (secondary). **Verify** on [Meta Ad Standards](https://transparency.meta.com/policies/ad-standards/) | 80% |
| Implication counts, including second-person wording aimed at a condition | The checker warns on «عندك/تعاني من» + a condition word; Guard decides | Same | 80% |
| **Health & wellness**: no negative self-perception to sell health products; no cure claims for incurable diseases (symptom management is allowed) | Positive framing; describe what the visit includes, not outcomes | Same | 75% |
| Some imagery is restricted, e.g. graphic medical images, people in hospital beds; the source also lists blood tests and X-rays | Home lab visits: show the nurse arriving, the kit, the result arriving on the phone, not needles in arms or blood tubes. **Verify** before using any lab imagery in ads | Same | 60% |
| Ad audiences and custom conversions must not be named after conditions | Name audiences by service or area ("home-lab-mansour"), never "diabetics" | Same | 70% |
| *AI*: a label is required for organic photorealistic AI **video** and realistic AI **voice-over**; not for still images or cartoon-style video | Motion graphics and stills need no label on Meta. A reel with a realistic AI voice needs Meta's AI label | [Meta Help Centre](https://www.meta.com/en-gb/help/artificial-intelligence/1783222608822690/), research 2026-10-17 | 88% |
| **Insurance ads (Health 360)**: 18+ targeting; legally required disclosures; no direct request for personal or financial info; lead forms never ask health or current-insurance questions; Meta may ask for verification and proof of authorization. No special ad category for Iraq-only targeting | Geo-lock to Iraq. Lead forms: name, phone, governorate. Copy describes the plan, not the viewer's age, family or finances | `docs/research/platform-policy-2026-10.md` rows 12–17 | 80% |
| Instagram's Terms ban automated collection of Instagram data without permission, logged in or not | Agents never scrape Instagram or facebook.com, including the Ad Library website. Use official APIs and connectors only | [Instagram Terms of Use](https://help.instagram.com/581066165581870) | 93% |

## TikTok

| Rule | What it means | Source | Confidence |
|---|---|---|---|
| Healthcare ads: Iraq sits in a market group where medical institutions "may be allowed" with local regulator approval and 18+ targeting; "medical services provided online or through apps that include remote diagnosis and remote treatment" are listed as not allowed | **Do not run paid TikTok ads for teleconsultation.** Home-visit ads might be possible with Ministry of Health licence proof; check before spending | [TikTok Healthcare & Pharmaceuticals ad policy](https://ads.tiktok.com/help/article/tiktok-ads-policy-healthcare-pharmaceuticals) (not double-checked) | 55% |
| Organic posts are not ads | Organic TikTok content is fine within community guidelines; the paid restriction does not apply | General platform structure | 80% |
| *AI*: realistic-looking AI people or scenes must be labelled, in organic posts (TikTok's AIGC label or a clear caption/sticker) and in ads (mandatory disclaimer). Illustrated or cartoon styles are exempt. Unlabelled posts may be removed or restricted; repeat cases risk the account | Photoreal Canva/AI images on TikTok carry the label. Motion graphics don't | `docs/research/platform-policy-2026-10.md` rows 1–4 | 75–90% |
| Ads must not show false endorsement by, or impersonate, health professionals | No AI "doctor" endorsing or advising in a TikTok ad | Row 5 | 60% |
| Insurance ads in Iraq: **unconfirmed** | No TikTok Health 360 ads until TikTok's Iraq representative confirms in writing | Row 18 | 25–60% |

## Guard's pass/fail checklist

For each piece, write `PASS`, or `FAIL: <rule>` with the fix:

- [ ] `lint-copy.mjs` exits 0 (no errors); every warning is fixed or justified in one line.
- [ ] No implied personal health attribute, in copy or in the visual's text.
- [ ] No cure claim, guarantee, superlative without proof, or price.
- [ ] Any person shown is either real and consented (its `consent_id` is in the piece's `consents:` and in `data/consents.csv`, with a scope that covers this use) or AI-generated and never presented as real TabeebX staff, patients or customers. Platform AI labels follow decision #58 (label only where the platform requires it).
- [ ] The who-is-on-screen label matches who actually appears (style D).
- [ ] No testimonial or review unless a consent record covers it.
- [ ] Emergency symptoms → emergency-services line present.
- [ ] Facts match `tabeebx-brand` (services, areas, the licence line «مرخّصين من وزارة الصحة العراقية», confirmed 2026-10-17). No facts invented.
- [ ] No `[PENDING …]` placeholders left. The checker's last line reports them; `[AT POSTING: …]` is fine.
- [ ] Platform fit: if destined for a TikTok **ad**, not teleconsultation; if a Meta ad, audience names are clean.
- [ ] Dialect doubts listed (or "none").

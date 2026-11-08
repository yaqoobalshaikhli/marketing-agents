# Family plan launch plan (DRAFT for Yaqoob, 2026-11-08)

Nothing here is published, sent or spent (rule 1). Every number carries its source. A percentage is my confidence in the claim as written. "Placeholder" means a number I did not get from you or a source: it is marked red in the model and must be replaced before anyone relies on it.

Sources, all in this repo: decisions #73 to #80 (`docs/decisions.md`), the model `docs/launch/tele-consult-plan-model.xlsx`, and the research in `docs/research/tele-consult-launch-2026-11/` (01 Iraq offers, 02 benchmarks, 03 regulation and payments, 04 Doctorly when it lands).

## 1. The offer, as you defined it

| Term | Value | Source |
|---|---|---|
| Price | 50,000 IQD per family per year | #73 |
| Who is a family | up to 6 people | #74 |
| Teleconsultations | truly unlimited (no cap, no fair-use rule) | #74 |
| Lab tests | 15% off all lab tests | #77 |
| Home draw | free (already free for everyone today) | #80 |
| Card | one printed card per family, about 500 IQD each | #75 |
| Delivery at launch | WhatsApp, no app yet (#73). Later answers conflict: "WhatsApp for booking only" (#81, first answer), then consultations "through WhatsApp calls as we are doing now" with a possible Google Meet link (#81, last answer). **Unresolved, see section 4** | #73, #81 |
| Doctors | 5, salaried, 500,000 IQD per month each, about 160 hours a month each (#74, #75). Then: "3 GPs around the clock 24h ... they are all present in the 24-hour period and would pump their salaries to 750K" (#81). **Whether the 3 replace the 5, and how the shifts work, is unconfirmed.** The doctors will also do other company work (#81) | #74, #75, #81 |
| Other costs | advertising and acquisition only | #75 |
| Launch date | none yet | #74 |
| Price in public content | undecided ("decide later"); rule 6 of `health-ad-policy` blocks prices today | #73 |

## 2. Competitor

**Doctorly (doctorlyiq.com)**, confirmed by you as the competitor. Read from the site, its images and promo video and the store listings on 2026-11-08 (`04-doctorly.md`; 85% on what they say). Only the media files show the card details; the page text does not.
- **What the card is:** a "Doctorly Gold Card" for "you and your family", valid one year, tied to **Middle East Hospital (مستشفى الشرق الأوسط الأهلي)** (named in the promo video and the app's hospital screen; 90%). It gives appointment-booking priority, **free access to consultation clinics and a free emergency check-up all year (in person)**, and discounts by department: **lab 15%**, radiology and sonar 20%, inpatient rooms 15%, surgery 15%, intensive care 15%, pharmacy 10%, dental 10%. The home page text says "up to 30%" while the card and video say up to 20% (conflict).
- **What it is not, on the evidence:** the card text shows **no teleconsultation benefit** (80%). The site and the Apple listing sell video and voice consultations, but the Play listing says the app provides none; I found nothing that settles which is true. Your plan is a different product: unlimited teleconsultation plus a lab discount, with no hospital.
- **The 100,000 IQD price is not on the site, video, card or listings** (90%). The video says to message "دكتورلي" on 0775 000 7505 or 0785 000 7505 for "details and prices". Only you or a human message to those numbers can confirm the price, the family size, the number of free visits and how the card is bought.
- **How big it looks:** domain registered 2025-12-15; Play release 2026-04-05 (1K+ downloads, no rating); iOS release 2026-08-02 (no ratings). The site claims "50k+" users and HIPAA alignment, and no store data supports either. The developer is ETANA SOFTWARE FZCO (Dubai, with an Erbil branch); who runs the Baghdad card business is not found. The site links to no social profile, and the privacy-policy link in both store listings does not load.
- **No Iraqi flat-fee unlimited family teleconsultation plan was found** (80%; Facebook, Instagram and WhatsApp sellers could not be checked). "Unlimited" appears on no Iraqi consumer page read.
- **Published Iraqi prices that your plan will be compared with** (Saleem, saleemapp.com/ar/pricing, 90% on the numbers): online GP 15,000 IQD (struck through from 25,000), nutrition doctor 20,000, psychiatrist 35,000, home GP visit 80,000 to 99,000. So 50,000 IQD for a family for a year is about 3 of Saleem's discounted GP consultations. Hayat, MedGate, Sehty Guide, Doctoury and others publish no subscription price.
- **What to ask you for:** the post or message where you saw 100,000 IQD, and a WhatsApp reply from the Doctorly numbers on price, number of family members, free visits, whether teleconsultation is included and which labs honour the 15%.

## 3. Economics (model results; placeholders are flagged)

From your inputs only (decisions #73 to #75):
- Payroll: 30,000,000 IQD a year. Each family brings 49,500 IQD after the card. **Break-even: 607 families** on payroll and cards alone.
- Each additional doctor (6,000,000 IQD a year) needs **122 more families**.
- **Staffing readings** (you have not yet said which is right): 5 doctors at 500,000 IQD = 30,000,000 a year, break-even **607 families**; 3 doctors at 750,000 = 27,000,000, break-even **546**; 5 doctors at 750,000 = 45,000,000, break-even **910**. All three assume the whole payroll belongs to the plan; the doctors will also do other company work, so the plan's share is lower and not yet known.
- With a placeholder acquisition cost of 15,000 IQD per family, break-even is **870 families**. It is 1,539 at 30,000 and 3,158 at 40,000. Your real acquisition cost is the single biggest unknown.

Capacity (placeholders: 15-minute consultations, 60% of doctor time in consultations):
- Five doctors give about 1,920 consultations a month, enough for about 2,880 families at 8 consultations per family per year, and about 960 families at 24. Break-even (607 families) uses about 21% of capacity at 8 a year.
- The research found **no Iraqi usage data and no usage data for any flat-fee unlimited family plan**. Foreign per-person rates are about 0.01 to 0.4 visits a year (a family of 6: about 0.08 to 2.4), with about 15% confidence that they predict Iraq. The heavy-user tail matters: in one US study 18.4% of users had 5 or more visits and carried at least a third of all visits.
- **Every comparable "unlimited" plan found has a cap** (Beam 30 visits a year, Altibbi Weqaya up to 30 consultations a month). I found no truly uncapped family plan. That is a risk signal, not a verdict. You chose truly unlimited.

Lab discount (your numbers, decision #80): orders of 40,000 to 80,000 IQD at a 20% to 40% margin. After a 15% discount you keep 2,000 to 20,000 IQD per order (against 8,000 to 32,000 today), and the discount costs 6,000 to 12,000 IQD on each order that would have happened anyway. The net effect per family needs two numbers you have not given: lab orders per family that would happen anyway, and extra orders the plan causes.

**300-family simulation** (`docs/launch/simulation-300-families.md`, code in `docs/launch/simulation/`): capacity is not the limit at 300 families. One doctor on duty round the clock gives a 6.8-minute 95th-percentile wait at 8 consultations per family per year (22 minutes at 24); two or three on duty give almost none. Waits pass 15 minutes only past about 600 families with one doctor on duty, 2,700 with two, 5,000 with three (at 8 a year, 15 minutes each). **The money is the limit:** 300 families bring 14.85 million IQD after cards, below every payroll reading above. Staffing arithmetic: one doctor on duty 24/7 is 720 hours a month (4.5 doctors at 160 hours); three on duty at once is 2,160 hours (13.5 doctors), which your five doctors cannot cover. "3 GPs around the clock" works only as three 8-hour shifts (3 x 240 hours = 720); that needs your confirmation. All usage inputs are scenarios, not data.

Not in the model: renewals in year two, refunds, payment fees (you did not select them as costs), WhatsApp fees, support staff. Cash arrives up front and doctors are paid monthly, so the plan carries a service obligation for the whole year.

## 4. The biggest delivery risk: WhatsApp's own policy

You chose WhatsApp at launch. WhatsApp's Business policy (whatsappbusiness.com/policy, updated 2026-09-23; 95% on the text, about 40% on how it applies to TabeebX, `03-regulation-and-payments.md`):
- Section 3: "Don't use WhatsApp for telemedicine or to send or request any health related information". It is written as conditional on regulations that bar sending health data to systems without heightened protection. No such Iraqi rule was found.
- Section 4 lists "Medical and healthcare products" as restricted at WhatsApp's sole discretion. No Iraq exception is listed.
- Regulated-vertical messaging is banned on the Business App. Card and ID numbers cannot be asked for in chat, so payments need a hosted link. Broadcasts need recipient opt-in.

**Your latest answer makes this sharper.** You first chose "WhatsApp for booking only", then said consultations will go "through WhatsApp calls as we are doing now" with a possible Google Meet link. WhatsApp calls are WhatsApp use for telemedicine, which section 3 of the policy names, so the two answers conflict and the risk above applies to the calls. A Google Meet link or an ordinary phone call keeps the consultation off WhatsApp; Google Meet's own terms for health information in Iraq were not researched.

Why it matters: your bookings already arrive on WhatsApp (decision #13) and home-lab results go to families on WhatsApp (decision #60). If WhatsApp restricts the number, bookings stop as well, not only this plan. I cannot tell from public pages whether a consultation subscription counts as a restricted product. **Get the answer in writing from Meta or your Business API provider before launch.**

## 5. Payments

- No merchant fee schedule is published for ZainCash, FastPay, Qi Card or AsiaPay; onboarding is by contacting each. Only low-confidence fee figures exist (a ZainCash CEO interview: "1 percent is on the high end", 40%).
- **Annual auto-renewal is unconfirmed anywhere.** A vendor page says FastPay does not support recurring payments; Qi lists no recurring billing. The safe design (60%) is a one-off payment link plus a manual WhatsApp renewal reminder.
- Payment aggregators for links exist (Wayl, SwiftPayIQ). Wallet limits are far above 50,000 IQD.
- The printed card needs an activation flow (card code to a family record) and a distribution channel. Neither is defined yet.

## 6. Legal and regulatory (needs a local lawyer; this is not legal advice)

- **No Iraqi telemedicine law, Ministry of Health instruction or Medical Syndicate rule was found** (60% that none is published; official sites could not be read). One university page and a 2025 Kurdistan review both say a framework is missing. Absence of a specific rule does not mean nothing applies.
- **Consumer Protection Law No. 1 of 2010** (80%): bans fraud and misleading practice in services and ads, requires the business name and address on ads, and gives consumers a right to full service information; fines start at 1,000,000 IQD. The exposure is an "unlimited" claim with an undisclosed limit, or an unkept refund promise.
- **Insurance boundary**: Law 10 of 2005 (Insurance Diwan) may matter; keep the plan clearly a service subscription, never insurance, and never mixed with Health 360 in one quote.
- The Communications and Media Commission has a digital-platforms regulation (30% that it applies to TabeebX; not read in full).
- The research file lists 12 questions for a lawyer. Get them answered before launch.

## 7. Content and advertising constraints

- **Rule 6** (no prices in consumer content, enforced by the copy checker) must be lifted for this offer, or the price stays out of posts and is given only when someone asks. You chose "decide later", so no priced content is written yet.
- Meta: no rule specific to naming a price or "unlimited" was found (65%), but misleading pricing, recurring plans without clear disclosure and unkept refund promises are covered. Telehealth ads in general need no written permission; avoid naming medicines.
- Everything from `health-ad-policy` still applies: no cure claims, no invented numbers or doctors, nothing about a visitor's name or photo (#59, #63).
- The service promise must match capacity. The corporate packages mention 24/7 online consultations; five doctors at 160 hours each cannot cover 24/7 for thousands of families. Decide the hours of service before any copy is written.

## 8. Operations to settle before launch

- Doctor rota: which specialties the 5 doctors cover (not stated), hours of service, response-time promise, what happens when everyone is busy.
- Triage, emergencies and referral wording; prescriptions and medical records (no Iraqi rule found; ask the lawyer).
- Card printing and activation, renewal reminders, complaints and refunds.
- Consent and privacy wording for health information sent over messaging.

## 9. Milestones (no dates; a calendar waits for your launch date)

1. **Decisions** from section 12.
2. **Written answers** from Meta or the Business API provider on healthcare messaging, and from a lawyer on section 6.
3. **Payments**: merchant onboarding with one provider and a payment-link flow.
4. **Cards and activation**: design, print a small batch, test the activation flow.
5. **Pilot**: a small number of families, with usage and wait times measured. This turns the placeholders into real numbers before the public launch.
6. **Content**: Copywriter, Designer, Design Critic and Guard on every piece, after rule 6 is decided.
7. **Public launch**, then a **30-day review** of: consultations per family, share of consultations from the top 10% of families, doctor utilisation, wait time to first answer, lab orders and margin, acquisition cost per family, complaints and refunds.
8. **Stop rules** agreed in advance (for example, pause sales when doctor utilisation passes a level you choose).

## 10. Top risks

| Risk | Evidence | What reduces it |
|---|---|---|
| WhatsApp restricts the number | policy text, section 4 above | written answer first; a fallback channel |
| Heavy users exhaust five doctors | no cap; no Iraqi usage data; 18.4% of US users had 5+ visits | pilot; capacity alarm; hire the sixth doctor when utilisation says so |
| Acquisition cost is higher than the 49,500 IQD a family brings | break-even rises steeply with it | small paid tests first; measure before scaling |
| "Unlimited" wording meets consumer law | Law No. 1 of 2010 | lawyer review of terms and every ad |
| B2B overlap: the plan is much cheaper than your corporate tiers | Economy 18,000 IQD per employee per month, 216,000 a year, includes unlimited teleconsultation (`corporate-packages.md`); the admin-fee model under study is 25,000 IQD per user per year | decide whether companies may buy the plan for staff |
| Renewals fail without auto-renew | no recurring payment found | reminder flow; measure renewal intent in the pilot |

## 11. What I could not verify

The Doctorly price and its Middle East Hospital link; any Iraqi usage or doctor-cost data; payment fees and recurring options; whether any Iraqi telemedicine rule exists beyond what web search showed; whether WhatsApp's policy applies to TabeebX; Facebook, Instagram, TikTok and WhatsApp sellers (not opened).

## 12. Decisions for you

Open: (1) staffing: 3 doctors on 8-hour shifts, 5 doctors, or another pattern, and how much of their time belongs to this plan; (2) the consultation channel: WhatsApp calls, Google Meet link or phone call, given the policy risk; (3) who may buy the plan (decided: "decide later"); (4) rule 6 on prices in content ("decide later"); (5) the launch date (none yet). Settled: the simulation replaces a live pilot, then straight to launch (#81).

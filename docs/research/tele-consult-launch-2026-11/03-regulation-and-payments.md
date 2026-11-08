# Regulation, platform rules and payments for the 50,000 IQD family plan (Iraq, WhatsApp first)

Researched 2026-11-08. This is research, not legal advice. Every item below needs checking by an Iraqi lawyer before launch; the "Needs a local lawyer" list is the starting question set.

**Plan being researched** (from Yaqoob, per the launch brief): 50,000 IQD per family per year, unlimited teleconsultations, delivered by WhatsApp at first, no app yet. Facts about TabeebX used here come only from `.claude/skills/tabeebx-brand/SKILL.md`: legal entity Baru Medical Ltd, Baghdad; "licensed by the Iraqi Ministry of Health" (confirmed by Yaqoob 2026-10-17); Health 360 insurance is a separate product and never mixed into one quote. No patient data appears anywhere in this file.

**Evidence types:** `page_read` (page or PDF fetched and read), `search_snippet` (only a search result summary seen), `article` (news or blog read), `app_store_page`, `study`. A tool-generated summary of a page counts as `page_read` only where I say "verbatim check" in the note. Confidence is my confidence that the statement is true as written, not that the underlying rule is good or in force.

## Summary: the findings that decide the most

1. **No Iraqi telemedicine law, Ministry of Health instruction or Medical Syndicate rule was found, federal or Kurdistan.** One Iraqi university page and one 2025 peer-reviewed review both say the legal framework is missing. This is absence of evidence from web search; I could not read moh.gov.iq or the Iraqi legislation database. Confidence that no *published, specific* telemedicine instrument exists: 60%. Confidence it is safe to assume nothing applies: low (general medical-practice, health-institution, communications, consumer and insurance laws still apply).
2. **WhatsApp's own policy is the sharpest rule found.** Its Business Messaging Policy (last updated 2026-09-23) says not to use WhatsApp for telemedicine or health information *if* applicable regulations prohibit sending it to systems without heightened health-data protection. It also lists "Medical and healthcare products" as restricted, with no Iraq exception listed. Whether a consultation subscription is caught is unclear. Confidence in the quoted text: 95%. Confidence on how it applies to TabeebX: 40%.
3. **The Communications and Media Commission (CMC) has a framework regulation for digital platforms** that covers e-commerce, on-demand, fintech and online advertising platforms serving users in Iraq, and requires a licence, registration or notification by type. Telemedicine is not named. Whether TabeebX falls inside, and whether the regulation is in force, is unknown. Confidence in the description: 75%; on applicability: 30%.
4. **Iraqi Consumer Protection Law No. 1 of 2010 bans fraud, deception and misleading advertising and puts penalties on them, but says nothing I could find about subscriptions, auto-renewal, refunds, cooling-off or the word "unlimited".** The main practical risk is that "unlimited" must be true in practice or any limit must be stated. Confidence in the law's content: 80%.
5. **Meta ads: no rule specific to ads that name a price or say "unlimited" was found.** The relevant Meta rules are general: deceptive pricing, undisclosed subscription terms, unkept refund promises, and the Drugs rule that ties telehealth providers to LegitScript for *prescription-drug* ads. The Meta page says general telehealth ads need no written permission. Confidence: 70%. Note that TabeebX's own `health-ad-policy` rule "no prices in consumer content" is an internal campaign rule, not a Meta rule, so this launch needs a decision from Yaqoob on it.
6. **Payments: no merchant fee schedule was published for ZainCash, FastPay, Qi Card or AsiaPay.** Onboarding is by contacting each provider. No source confirms automatic recurring or annual auto-renew billing in IQD wallets; the ones that say anything say it is not supported (FastPay, per a vendor) or do not mention it. For a 50,000 IQD yearly payment, a one-off payment link with a manual renewal reminder is the only flow the evidence supports. Confidence: 60%.

---

## 1. Telemedicine and medical-practice rules in Iraq

### 1.1 No specific federal telemedicine law found

- **R1.** An Al-Mustaqbal University (Iraq) web page dated 2025-02-02, on telemedicine contracts, states: "In Iraq, there is no specific legislation that directly regulates telemedicine." It adds that physicians can be held liable under general civil law, and suggests the Medical Practice Law, the Health Institutions Law and the Communications Law may apply (law numbers not given).
  - Source: https://uomus.edu.iq/CollegeEn/Details/66059
  - Evidence: page_read (summary of the page; quote not independently verified). Confidence: 70% that this was true in Feb 2025; 55% that it is still true on 2026-11-08.
- **R2.** A search for Iraqi Ministry of Health (MoH) instructions on telemedicine, in Arabic and English, returned only other countries (UAE, Qatar, Saudi Arabia, Bahrain, Oman, Turkey, Tunisia). Nothing Iraqi.
  - Source: web searches 2026-11-08 (queries "طب عن بعد العراق وزارة الصحة تعليمات", "Iraq Ministry of Health telemedicine regulation", "التطبيب عن بعد وزارة الصحة العراقية").
  - Evidence: search_snippet. Confidence: 60% that nothing published exists; the result is limited by what the search tool indexes.
- **R3.** A 2019 al-Nahrain University law-journal article on civil liability for telemedicine exists (title «المسؤولية المدنية لممارسة خدمة التطبيب عن بعد»). Only the listing was seen, not the text.
  - Source: https://search.emarefa.net/en/detail/BIM-1200408-المسؤولية-المدنية-لممارسة-خدمة-التطبيب-عن-بعد
  - Evidence: search_snippet. Confidence it exists: 85%; contents unknown.

### 1.2 Kurdistan Region

- **R4.** A 2025 narrative review of digital health in the Kurdistan Region (Othman et al., *Discover Public Health* 22:227, DOI 10.1186/s12982-025-00648-w) names "the lack of a comprehensive regulatory and legal framework" as a key barrier. It also reports a Kurdistan study where the absence of clear frameworks discouraged professionals from adopting telemedicine.
  - Source: https://researchonline.lshtm.ac.uk/4676077/1/Othman-etal-2025-Digital-health-technologies-in-Kurdistan.pdf (PDF text extracted and read).
  - Evidence: study. Confidence: 85% that the authors say this. It does not prove no KRG Ministry of Health rule exists.
- **R5.** Kurdistan Ministry of Health news seen only as search results: it launched a region-wide digital hospital system (reported May 2026, Shafaq News) and warned in January 2025 against buying medicines online, saying online sellers lack Ministry licences (Kurdistan24). Neither is a telemedicine rule.
  - Sources: https://shafaq.com/en/Kurdistan/Kurdistan-unveils-first-Region-wide-digital-hospital-system ; https://www.kurdistan24.net/en/story/820356
  - Evidence: search_snippet. Confidence: 55%.

### 1.3 What the Medical Syndicate and the Ministry have said publicly

- **R6.** Al-Araby Al-Jadeed, 2026-08-05 (Safaa al-Kubaisi, Baghdad), on influencers acting as "virtual doctors". The Iraqi Medical Syndicate urged reliance on specialist consultation and warned against getting treatment or diagnosis information from unqualified people: «محذرة من خطورة الحصول على معلومات خاصة بالعلاج أو التشخيص من أشخاص غير مؤهلين علمياً». The Ministry told citizens not to buy medicines or health products from unapproved sources. The article describes no rules on online consultations by licensed doctors. The reporter says Iraq lacks clear laws criminalising promotion of such products; calls to make advertisers show official approvals and to fine accounts are demands, not existing rules.
  - Source: https://www.alaraby.co.uk/society/العراق-مؤثرو-الإنترنت-أطباء-افتراضيون (URL as returned by search; the percent-encoded form was fetched).
  - Evidence: article (page_read). Confidence: 85%.
  - Why it matters: public attention is on unlicensed advice and health-product ads. A licensed-doctor service is on the right side of that line, but the same scrutiny will apply to its advertising.

### 1.4 Platform and company licensing

- **R7. CMC framework regulation for digital platforms and services** («اللائحة الإطارية للمنصات والخدمات الرقمية», هيئة الإعلام والاتصالات, Baghdad). The PDF is on the CMC site under an upload path dated 2025/03. Its scope (Article 4) is all digital platforms and providers that operate, distribute or give access to digital services or content to users inside Iraq, local or international, including those that earn revenue from Iraqi users. Listed platform types: video, audio, social media, gaming, e-commerce, app stores, on-demand services, fintech, online advertising, AI, and others the Commission adds later. Telemedicine and health platforms are not named. Providers must obtain the instrument (licence, registration or notification, by type and by local or foreign) before serving users in Iraq. In the table as extracted, e-commerce is licence for local providers and registration for foreign ones (table order was ambiguous in the text extraction). Licence applicants must show financial stability (audited accounts), data-protection measures including data localisation "when necessary", and pay application and annual fees; the Commission may require a local entity. Article 6.1.3 tells providers to comply with Iraqi data-protection laws and says the Commission "will publish" a personal data protection law in due course.
  - Definitions read: "e-commerce platforms" = platforms that facilitate buying and selling goods and services online with features such as payment processing and customer support. "On-demand platforms" = instant access to physical, non-digital services such as ride-sharing or food delivery.
  - Source: https://cmc.iq/ar/wp-content/uploads/2025/03/Framework-regulations-for-digital-platforms-and-services-ar.pdf (PDF text extracted and read).
  - Evidence: page_read. Confidence: 75% on the description; 30% that it applies to TabeebX as a teleconsultation seller; the PDF text gives no issuance date or in-force date, and a search snippet describes it as a general framework that complements existing laws.
- **R8. TabeebX's own licence.** The brand skill records the Ministry of Health licence as a fact. No public document was found describing which licence class covers remote consultation, or what a licence for a teleconsultation service requires. The scope of TabeebX's licence is not in any source I have.
  - Evidence: n/a (not found). Source for the licence fact: `.claude/skills/tabeebx-brand/SKILL.md`.
- **R9. Insurance-law boundary.** Iraq's Insurance Business Regulation Law No. 10 of 2005 makes the Insurance Diwan (under the Ministry of Finance) the regulator; insurers need authorisation, and policies need Diwan approval. A life licence also covers health and personal-accident cover. Whether a prepaid "unlimited consultation" membership counts as insurance business was not found in any source.
  - Source: https://www.tamimi.com/law-update-articles/iraq-insurance-regulation-law-no-10-of-2005 (search result summary; Al Tamimi is a law firm publishing a legal update).
  - Evidence: search_snippet. Confidence: 65% on the law's content; question of characterisation open.
  - Why it matters: Health 360 is TabeebX's insurance product and runs through a licensed insurer and TPA. The 50,000 IQD plan should be worded and sold as a separate service plan, never as «تأمين» (a wording choice for Yaqoob and the lawyer).

### 1.5 Doctors practising remotely, e-prescriptions, medical records

- **R10. Doctors practising remotely.** No Iraqi rule found on whether a registered doctor may consult remotely, from where, or with which registration. Evidence: not found.
- **R11. E-prescriptions.** No Iraqi rule found on electronic prescriptions, controlled drugs or pharmacy delivery from a remote consultation. Evidence: not found. TabeebX's planned app includes e-prescriptions with medicine delivery (brand skill), so this matters later even if not in the WhatsApp phase.
- **R12. Medical records and state systems.** The MoH digital items found are national systems, not private-platform rules: WHO-backed DHIS2 health data, and the Dhamani digital health insurance platform (reported by industry news, 2026). Neither sets rules for a private teleconsultation seller.
  - Sources: https://www.who.int/countries/country-presence/reports/2025/case-studies/iraq ; https://meatechwatch.com/?p=45400
  - Evidence: search_snippet. Confidence: 60%.
- **R13. Professional secrecy.** Iraq's Penal Code (Articles 437 and 438) criminalises disclosing a secret learned through one's profession, including medical professions. The penalty and exceptions were not verified.
  - Source: law-research pages (e.g. https://www.mohamah.net/law/?p=133463) via search summary.
  - Evidence: search_snippet. Confidence: 65%.

### 1.6 Data protection

- **R14. No comprehensive personal data protection law in force was found.** A draft was approved by the cabinet in 2019 and re-sent to parliament in 2021 and was still unenacted in early-2026 sources; a draft IT Crimes law had its first reading on 2026-07-06; the CMC says in its own framework (R7) that it "will publish" a data protection law. I could not confirm whether anything changed after early 2026.
  - Sources: https://www.tamimi.com/our-knowledge/publications/eyes-on-2026/articles/iraqs-right-to-access-information-law-outlook-for-2026/ (could not be fetched; seen in search results) ; CMC PDF in R7.
  - Evidence: search_snippet plus page_read (CMC). Confidence: 60%.
- **R15. Kurdistan.** The 2025 review (R4) says health-data privacy concerns and the absence of clear frameworks are open problems there. No KRG data law was found. Confidence: 55%.

---

## 2. Advertising and consumer rules

### 2.1 Iraqi Consumer Protection Law No. 1 of 2010 (قانون حماية المستهلك)

Source for all points in 2.1: FAOLEX copy of the law, https://faolex.fao.org/docs/pdf/irq149741.pdf, listed as in force (page_read, Arabic text extracted; digits in the extraction were garbled, so article numbers below are counted by position and must be confirmed; the ESCWA copy was blocked by a bot challenge and was not used).

- **R16. Scope.** Applies to anyone who manufactures, supplies, sells, markets, imports, *provides services* or *advertises* them. "Service" is any work or activity a party provides, with or without a fee. A "supplier" includes an intermediary or agent. (Articles 1 and 3.) Confidence: 85%.
- **R17. Consumer rights.** Consumers are entitled to full information on how to receive the service "in the official form and language", and to proof showing value, date, specifications and price. If this information is withheld the consumer may return the goods and claim compensation in civil court. (Article 6.) Confidence: 80%.
- **R18. Supplier and advertiser duties.** Register a trade name and address, keep sales records, and print the trade name and address on all correspondence, publications and advertisements. Appear before the authorities within 7 days of being summoned. (Article 7.) The supplier is fully responsible to consumers for goods and services. (Article 8.) Confidence: 80%.
- **R19. Prohibitions.** Suppliers and advertisers may not practise «الغش والتضليل والتدليس» (fraud, deception, misleading) in goods *and services*. (Article 9.) Confidence: 85%.
- **R20. Penalties.** Breach of the prohibitions: jail of not less than 3 months or a fine of not less than 1,000,000 IQD, or both. Breach of the duties and liability articles: jail of up to 3 months or a fine of up to 1,000,000 IQD, or both. A person who reports an offence that ends in conviction gets a reward of 100,000 to 1,000,000 IQD. (Article 10.) Confidence: 75% (amounts are written in words in the text; article numbering unconfirmed).
- **R21. Not in the law text: subscriptions, auto-renewal, refunds, cooling-off, "unlimited".** The 7-page text has no provision on any of these. The Prime Minister may issue implementing instructions (Article 17); I did not find any. An Iraqi university journal article (via search snippet) argues the law handles false advertising poorly, which suggests enforcement is thin, not that the rule is absent. Confidence: 80% that the statute is silent on these; 40% that no implementing instruction covers them.
  - Practical reading (not legal advice): the general ban on misleading practice is the hook. A plan advertised as "unlimited" with an undisclosed cap, or a refund promise that is not kept, is the exposure.
- **R22. Kurdistan Region.** No KRG consumer-protection text was checked. Evidence: not found.

### 2.2 Advertising medical services in Iraq

- **R23.** No Iraqi MoH, Medical Syndicate or Pharmacists' Syndicate instruction on advertising health services or doctors was found. Searches returned UAE, Saudi, Kuwait and Egyptian rules only. The only Iraqi items are warnings about medicines and health products sold online (R5, R6).
  - Evidence: search_snippet (not found). Confidence: 60% that no published rule is easy to find; a rule may exist in syndicate bylaws or MoH circulars not indexed.

### 2.3 Meta rules for the launch ads (official policy pages on transparency.meta.com, read 2026-11-08)

- **R24. Health and Wellness policy.** Versions on the page: Jul 23, 2026; Dec 27, 2024; and an undated "Today" entry; the page does not say which is in force. Prohibited: ads that create negative self-perception; side-by-side before/after for weight loss and wrinkle treatments; claims that a product cures listed incurable conditions (diabetes, cancer, autism, HIV and others); and health clickbait such as promised outcomes within a set timeframe without qualifiers. Weight-loss, cosmetic and sexual or reproductive health ads must target 18+. General teleconsultation is not listed as restricted. Symptom management claims are not covered by the cure ban.
  - Source: https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness
  - Evidence: page_read (summary). Confidence: 75%.
- **R25. Drugs and Pharmaceuticals policy: telehealth.** "Meta requires online pharmacies and telehealth providers to be actively certified with LegitScript." This sits in the *prescription drug* ad rules: after certification they must request authorisation, and prescription-drug ads can only target the US, Canada and New Zealand. The same page says ads that "Promote telehealth services generally" need no written permission. Reading: a general teleconsultation ad is allowed; an ad naming prescription medicines (including an e-prescription or medicine-delivery pitch) is the risk.
  - Source: https://transparency.meta.com/policies/ad-standards/restricted-goods-services/drugs-pharmaceuticals/
  - Evidence: page_read (summary). Confidence: 70% on the reading; 85% that the LegitScript sentence is on the page.
- **R26. Commercial practices (misleading pricing, subscriptions, refunds).** The Ad Standards require compliance with the Community Standard on Prohibited Commercial Practices. That standard lists: "Misleading or unreasonable pricing"; unauthorised charges (charging without prior authorisation or clear disclosure); deceptive subscription practices, "enrolling customers in recurring payment plans or subscription services without clear disclosure of terms"; failure to honour stated refund or return policies; products that "materially differ from what was advertised"; and non-delivery after payment. Enforcement is by patterns of negative feedback, then restriction of accounts.
  - Sources: https://transparency.meta.com/policies/community-standards/prohibited-commercial-practices/ ; https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-commercial-practices/ (the ad-standards page itself only names "deceptive pricing, unauthorized endorsements" and links to the community standard).
  - Evidence: page_read (summary). Confidence: 80%.
- **R27. Naming a price or saying "unlimited" in an ad.** Not found. Neither the Ad Standards index nor the two pages above has a rule on price display or on the word "unlimited". The closest rules are R26 (misleading pricing; ad must match what is delivered). Confidence that Meta has no *specific* rule on these words: 65%. The "Personal health and appearance" page returned 404 and a secondary source says it was merged into Health and Wellness. The "Privacy Violations and Personal Attributes" page (implying knowledge of a viewer's health) was not opened here; the repo's `health-ad-policy` skill covers it from a secondary source and marks it "verify".
- **R28. Internal rule to reconcile.** `.claude/skills/health-ad-policy/SKILL.md` lists "No prices in consumer content" as TabeebX's own campaign rule, and the copy checker blocks it. A public 50,000 IQD plan contradicts that rule. Nothing found from Meta requires the rule. This is a decision for Yaqoob (and the repo's checker would need an approved exception).

### 2.4 WhatsApp Business policy on health, opt-in and commerce

All from the WhatsApp Business Messaging Policy, "Last updated: September 23, 2026", fetched and read in full text: https://whatsappbusiness.com/policy/ (business.whatsapp.com/policy redirects here). Evidence: page_read (verbatim check). Confidence in each quote: 95%.

- **R29. Telemedicine and health information (Section 3).** "Don’t use WhatsApp for telemedicine or to send or request any health related information". The sentence continues with a condition: it applies "if applicable regulations prohibit distribution of such information to systems that do not meet heightened requirements to handle health related information". Section 3 also says messages must be gated "per legal age, geographic requirements" and comply with local laws, industry codes, guidelines and licences.
  - What I could not settle: no Iraqi rule setting "heightened requirements" for health data was found (R14), so the condition may not be triggered. WhatsApp can still enforce its own reading. Confidence on applicability: 40%.
- **R30. Restricted goods and services (Section 4).** "Medical and healthcare products" is on the list of regulated or restricted goods and services "as determined in our sole discretion". Section 5 gives country exceptions for over-the-counter drugs, alcohol and online gambling only; Iraq is not on any list (the word "Iraq" does not appear on the policy page). Section 5 also says: "You are prohibited from messaging about any Regulated Verticals on the WhatsApp Business App", and that regulated-vertical messaging on the Platform is only allowed in listed countries and not to under-18s. The policy does not define whether a teleconsultation subscription is a "healthcare product". Confidence on risk: 45%.
- **R31. Payment and ID data (Section 3).** "Don’t share or ask people to share full length individual payment card numbers", nor financial account numbers or personal ID card numbers. So card details and ID numbers cannot be collected in chat; a hosted payment link is needed. Other Section 3 duties: a published privacy policy; do not forward information from one customer chat to another customer.
- **R32. Opt-in for broadcasts (Section 1).** A business may contact people only if they gave their number and the business has "received opt-in permission" confirming they want later messages. The business is solely responsible for the opt-in method and for any notices required by law. Best practice: opt-in that covers each message category, a separate opt-in per category, and clear opt-out instructions that are honoured.
- **R33. Commerce.** A business selling goods or services through WhatsApp commerce features must also follow the Meta Commerce Policy and is "solely responsible" for its transactions and sales terms. I did not read the Meta Commerce Policy itself.
- **R34. Business App versus Business Platform (API).** The only app/API rule found is R30 (regulated verticals not allowed on the app). Pricing: the Business Platform charges per message by category (marketing, utility, authentication) and service messages inside the 24-hour customer-service window "at no charge"; Iraq is a listed market, but the rate table loads by script and I did not read the figures. Source: https://whatsappbusiness.com/products/platform-pricing/ (page_read, 2026-11-08). Confidence: 85% on structure.
  - Not verified: broadcast-list limits and saved-contact requirements on the WhatsApp Business App.

---

## 3. Payments: how an Iraqi family could pay 50,000 IQD a year

**What I could confirm about fees: nothing published by any provider.** No merchant rate card was found for ZainCash, FastPay, Qi Card or AsiaPay. The few numbers below come from news, interviews or vendor pages and are low confidence.

| Method | What the evidence shows | Fees | Onboarding | Recurring / annual | Source, evidence, confidence |
|---|---|---|---|---|---|
| **ZainCash** (wallet) | Merchant Payment Gateway v2: redirect flow, status API and webhooks, test and production credentials issued at onboarding, IQD only. 8,000+ cash agents in 2021. | Not published. CEO interview (June 2026): "1 percent is on the high end" (not a rate card). Comparison sites say "custom pricing". | Contact ZainCash; credentials issued during onboarding; no documents list found. | No recurring feature found. A third-party Odoo module says saved wallets are not reused, each payment starts fresh, refunds are full only and partial refunds "depend on your ZainCash commercial agreement". | Docs: https://docs.zaincash.iq/ (blocked by a bot challenge, seen only as search summary; search_snippet; 55%). Odoo vendor listing: https://apps.odoo.com/apps/modules/18.0/eh_payment_zaincash/ (page_read, vendor; 65%). CEO: https://www.agbi.com/banking-finance/2026/06/zaincash-ceo-iraq-is-5-years-behind-in-digital-payments/ (403 on fetch; search_snippet; 40%). Agents: https://iraqtech.io/mobile-payment-services-in-iraq/ (article, dated 2021-08-14; 50%). |
| **FastPay** (wallet) | Mobile wallet; Iraq only; IQD; strong in the Kurdish region per a 2021 blog. | Not published. | Not published. | A Shopify-integration vendor says recurring payments and one-click checkout are **not supported**, and refund details are unavailable. | https://cartdna.com/en/shopify-payment-methods/fastpay (page_read, vendor selling integrations; 55%). Blog: https://iraqtech.io/mobile-payment-services-in-iraq/ (2021; 40%). |
| **Qi Card / Qi Services / SuperQi** | Online payment gateway for Visa and Mastercard, linked to Central Bank of Iraq systems, 3D Secure password check on each payment. Developer docs list create payment, status, refund, webhooks, 3D Secure, "payment tokenization" and "Pay with SuperQi", plus mobile SDKs. | Not shown. | Request an account via qi.iq; contact qicard@qi.iq (Karrada, Baghdad). Eligibility and documents not listed (a separate "Integration Requirements" page was not read). | Recurring/subscription not mentioned. "Payment tokenization" is listed with no detail, so ask Qi whether it supports card-on-file renewal. 3D Secure on each payment suggests customer action at renewal (my inference). | https://www.qi.iq/en/merchants/online-payment-gateway and https://developers-gate.qi.iq/docs/ (page_read, Qi's own pages; 80%). |
| **AsiaPay** (AsiaHawala wallet) | App listing: licensed by the Central Bank of Iraq; e-wallet, merchant payments, bill payments, online shopping. Standard wallet (obtained at an agent after registration): 2,000,000 IQD daily and 10,000,000 IQD monthly limits. 38 ratings, 3.2 average; version 1.2.7. | Not shown. | Standard wallet via agent; merchant onboarding not described. | Not mentioned. | https://apps.apple.com/iq/app/asiapay/id6444766446?l=ar (app_store_page; 75%). |
| **Switch** | No "Switch" online gateway found. A 2023 blog says Switch partners with Rafidain Bank to distribute POS devices. | Not found. | Not found. | Not found. | https://iraqtech.io/iraqs-electronic-payment-acceptance-landscape/ (article, Wedo founder, dated 2023-06-01, partly a company-promotion piece; 45%). |
| **Bank cards (Visa / Mastercard)** | Accepted through licensed gateways such as Qi (above). Tabadul and Areeba describe themselves as licensed payment service providers with online gateways. Central Bank of Iraq licenses payment service providers; one 2023 blog counts 17. | Not found. | Gateway-specific. | Not found. | Qi (above). Areeba: https://areeba.iq/english/iraq/about-us (search_snippet; 55%). |
| **Payment aggregators and payment-link tools** | *Wayl* (Baghdad): says it acts as aggregator, facilitator and merchant of record; WooCommerce plugin supports Visa and Mastercard; fees "apply" with no amounts. *SwiftPayIQ* (Palace Tech, Baghdad, article 2026-08-13): "a technical intermediary platform and not a payment gateway"; offers merchant onboarding, e-invoicing and payment links and connects to a licensed gateway (Al-Qassa) that does KYC; 300 businesses onboarded and 34 active in its first month. | Not stated for either. | Wayl: claims no direct gateway agreement needed (aggregator profile; vendor claim). SwiftPayIQ: onboarding via the licensed gateway's KYC. | Not stated for either. | Wayl: https://www.iraq-businessnews.com/2026/02/25/moneyhash-partners-with-wayl-to-enter-iraqi-payments-market/ (article, search_snippet; 55%). SwiftPayIQ: https://www.iraq-businessnews.com/2026/08/13/new-card-payment-access-for-iraqi-online-merchants/ (page_read; 80%). |
| **Cash agents** | ZainCash and AsiaPay list agent networks (cash-in to a wallet). Direct cash collection by TabeebX staff was not researched. | n/a | n/a | n/a | iraqtech blog (2021) and AsiaPay listing above. |

- **R35. Government e-payment commission cut.** The Ministerial Council for Economy (21st session) announced cutting the deducted e-payment commission to "5 per mille" (0.5%) and halving card issuance cost (capped at 5,000 IQD), with payment companies to comply from 2026-01-01. The statement frames this around fuel-station purchases and e-payment collection generally; whether 0.5% is a merchant ceiling for all merchants is not clear. Publication date of the news item was not shown. Source: https://mutalee-media.iq/news/pdf/123229 (Al-Mutalee news agency; PDF text read). Evidence: article. Confidence: 50%.
- **R36. Arithmetic only, not a quote:** at 0.5% a 50,000 IQD payment costs 250 IQD; at 1% it costs 500 IQD. No provider has been shown to charge either.
- **R37. Can a business like TabeebX take recurring or annual payments?** One-off payment of the yearly amount by link or hosted checkout is supported by the gateways that document create-payment flows (Qi, ZainCash). Automatic yearly renewal from a wallet or card was not confirmed for any provider; FastPay is reported as unsupported (vendor). The safe plan from this evidence is a manual renewal: a WhatsApp reminder with a new payment link. Confidence: 60%. The central bank licences payment service providers; whether a medical company needs any licence of its own to *accept* payment through a licensed provider was not found (probably not, but unconfirmed).
- **R38. Payment cap check.** Every consumer wallet limit found (AsiaPay Standard: 2,000,000 IQD a day) is far above 50,000 IQD, so limits are not a barrier for this price. Confidence: 75%.
- **R39. Moving money via WhatsApp.** WhatsApp's policy bars asking users to send full card numbers in chat (R31); I found no WhatsApp in-app payments option for Iraq. Payments therefore have to run through a link to a provider page. Confidence: 70% (I did not check a WhatsApp Pay country list).

---

## 4. Running consultations over WhatsApp

- **R40. Policy position (summary of R29 to R32).** The Business Messaging Policy puts "telemedicine" and "health related information" in the same sentence as a conditional ban, restricts "Medical and healthcare products", forbids regulated-vertical messaging on the Business App, forbids card and ID numbers in chat, and requires opt-in per message category. Using the Business App rather than the API does not remove these rules.
- **R41. Data-protection expectations in Iraq.** No data protection statute was found (R14). The expectations that do exist: professional secrecy in the Penal Code (R13), the Consumer Protection Law's duty of full information (R17), the CMC framework's call to follow Iraqi data-protection rules and localise data "when necessary" (R7), and the academic view that health-data privacy rules in Kurdistan are weak (R4). There is no Iraqi rule found that either permits or forbids sending health information over WhatsApp.
- **R42. What is stored where.** WhatsApp messages sit on Meta's infrastructure and on the Business API provider's systems. Whether that counts as sending data abroad under any Iraqi rule was not found.

---

## Needs a local lawyer

Questions for an Iraqi healthcare or technology lawyer, not answers:

1. Does Baru Medical Ltd's current Ministry of Health licence cover remote consultations and selling annual memberships for them, or does the Ministry (or the Medical Syndicate) need to approve teleconsultation, or a licence variation, first?
2. May registered doctors consult by chat, voice or video across governorates and into the Kurdistan Region, and what registration or contract do they need? Do the Kurdistan Ministry of Health's rules differ for families in Erbil, Sulaymaniyah and Duhok?
3. Is the CMC framework regulation for digital platforms in force, does it apply to a company selling a health service through WhatsApp and a website, and which instrument (licence, registration, notification) and fees would apply?
4. Could an unlimited-consultation annual membership be treated as insurance business under Law No. 10 of 2005 (Insurance Diwan approval), and what wording keeps it clearly separate from Health 360?
5. What does Consumer Protection Law No. 1 of 2010, with any implementing instructions, require for contract terms, receipts, Arabic wording, refunds, cancellation, renewal reminders, "unlimited" claims and fair-use limits? Is there a Kurdistan consumer law that also applies?
6. Do the Ministry or the Medical Syndicate restrict advertising of medical services (naming doctors, quoting prices, claims about speed or availability), and is advance approval of adverts needed?
7. How should health information be handled: lawful basis and consent wording, the Penal Code secrecy duty, retention, access by non-doctor staff, and whether Meta-hosted chat storage creates any cross-border issue?
8. What is the legal status of electronic prescriptions, and of delivering prescription medicines after a remote consultation (for the later app phase)?
9. Is acceptance of terms by WhatsApp message or a payment-link click valid and provable as a contract in Iraq (electronic transactions and signature rules were not verified)?
10. Who can buy, consent and be covered for a family plan (head of household, minors, elderly), and who bears liability for remote advice limits and for emergencies?
11. Does WhatsApp's telemedicine and "Medical and healthcare products" wording create a real risk for this plan in Iraq? This one is for the lawyer and a written answer from Meta or the chosen Business API provider.
12. Receipts, taxes and accounting treatment of prepaid annual revenue (for the accountant).

---

## Gaps (not found)

- Any Iraqi federal or Kurdistan Ministry of Health instruction, Medical Syndicate decision, or law that names telemedicine, tele-consultation platforms, platform licensing, remote practice or e-prescriptions. Not found in web search; the official sites (moh.gov.iq, the Medical Syndicate, the KRG Ministry of Health, the Iraqi legislation database) were not read.
- The text or numbers of the "Medical Practice Law" and "Health Institutions Law" the university page mentions.
- Which licence class TabeebX holds and what it covers.
- Iraqi rules on advertising medical services; Kurdistan consumer-protection law; any implementing instructions to Law No. 1 of 2010; Iraq's electronic transactions and signature law.
- Whether the CMC framework regulation is in force, its issuance date, and whether telemedicine is within its scope.
- Current status of the personal data protection draft after early 2026.
- Any Meta rule specific to price display or the word "unlimited" in ads; the text of the Meta "Privacy Violations and Personal Attributes" and Commerce policies.
- WhatsApp Business App broadcast limits; WhatsApp Business Platform per-message rates for Iraq (table not readable); whether WhatsApp enforces the telemedicine clause in Iraq.
- Any merchant fee schedule, onboarding document list or recurring-billing statement from ZainCash, FastPay, Qi Card, AsiaPay or any bank. ZainCash's developer site (docs.zaincash.iq) and the ESCWA law copy returned bot-challenge or 403 pages and were not worked around; agbi.com returned 403.
- A "Switch" online payment gateway for Iraq.
- Data on how many Iraqi families can pay by wallet or card online versus cash.
- The "Doctorly / Middle East Hospital" competitor claim (outside this file's scope; another file covers it).

## Method note

About 55 searches and fetches were used, above the 25 to 35 guide, because the brief covers four separate areas. Roughly half were searches whose summaries I could not verify against the page; those are marked search_snippet. No Facebook, Instagram or TikTok page was opened. Downloaded PDFs were text-extracted into the session scratchpad and nothing was run from them.

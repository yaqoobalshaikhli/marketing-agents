# 02. Benchmarks and utilization for an unlimited teleconsultation plan

Prepared 2026-11-08 for Yaqoob. Question: what do published numbers say about a plan of "unlimited teleconsultation for 50,000 IQD per family per year", sold first over WhatsApp?

Short answer: no source found gives a usage rate for Iraq, a doctor cost per teleconsultation in Iraq, or a usage rate for a flat-fee unlimited family plan anywhere. The sourced numbers below bound the problem (how skewed use is, how long consultations are, what fair-use rules others set, what others charge). They do not tell you whether 50,000 IQD covers the cost. Section 4 shows the arithmetic and what you have to supply.

How to read this file:
- Evidence types: page_read (I opened the page), search_snippet (only a search-result summary, page not opened or not openable), study (peer-reviewed abstract or paper via PubMed), article, app_store_page.
- Confidence (Conf.) = my confidence that the number is transcribed correctly and is what I say it is. It is NOT confidence that it applies to Iraq. Transfer to Iraq is a separate column or note.
- Prices are shown in the currency on the source, with the date seen. Nothing is converted. No exchange rate is sourced in this research, so none is used.
- Vendor sources (a company describing its own product) are marked "vendor".
- Dates seen: all pages below were read on 2026-11-08 unless another date is given.

---

## 1. Utilization

### 1.1 What share of members use the service, and how often

| # | Number | Source, year, sample, country | Evidence | Conf. | Transfer to Iraq |
|---|---|---|---|---|---|
| U1 | 3,043 of 233,915 enrollees offered Teladoc used it (1.3%). They made 4,657 visits (1.53 per user) between April 2012 and October 2013 (about 19 months). Adults 18-64 only. Visits were fee-per-visit, not unlimited. | Uscher-Pines et al., Telemedicine Journal and e-Health 2015, CalPERS HMO, USA. https://doi.org/10.1089/tmj.2015.0079 (PubMed 26488151) | study | 90% | Poor. Early market (2012-13), adults only, per-visit fee, US. Useful only as a floor on how many eligible people use a service in its first year and a half. |
| U2 | Teladoc 2025: 17.1 million total visits (2024: 17.3 million). U.S. Integrated Care members: 101.8 million at 31 Dec 2025, 93.8 million at 31 Dec 2024. Average monthly revenue per U.S. Integrated Care member: USD 1.29 in FY2025 (1.37 in FY2024). | Teladoc Health Q4 and FY2025 results release, 2026, page tables 7 onward. https://s21.q4cdn.com/672268105/files/doc_news/Teladoc-Health-Reports-Fourth-Quarter-and-Full-Year-2025-Results-2026.pdf | page_read (PDF text extracted with pdftotext) | 85% for the figures. Teladoc defines members as people with paid access or visit-fee-only access. "Total Visits" sits in the consolidated table; I could not confirm it counts only U.S. Integrated Care visits. | Poor to medium. Employer-paid access fee, mostly adults, USA. Company report (vendor). Ratio in section 4. |
| U3 | 7% of eligible employees used telemedicine at least once, average across employer programs running in 2016. | Mercer, US employer survey. https://www.mercer.com/en-us/insights/us-health-news/everyone-wants-telemedicine-so-why-arent-your-employees-using-it/ | search_snippet (page not opened; the date 2016 comes from the snippet summary) | 55% | Poor. Employer benefit, 2016, USA. |
| U4 | "8% of employees use telemedicine services included in wellness programs" (Becker's headline). | https://beckershospitalreview.com/healthcare-information-technology/8-of-employees-use-telemedicine-services-included-in-wellness-programs-18-insights.html | search_snippet (headline only; year and sample not seen) | 50% | Poor. Same caveats as U3. |
| U5 | Vendor blog claims "10-15%" industry utilization (EZaccessMD) and "13%" (HealthJoy). Neither cites a source. | https://www.ezaccessmd.com/blog/telehealth-utilization-rate-81-percent ; https://healthjoy.com/blog/driving-50-percent-higher-telemedicine-utilization | search_snippet, vendor marketing | 25% | Do not rely on these. Listed so you know they exist. |
| U6 | Babyl Rwanda: 3,899,788 consultations between 2019 and September 2023. 2 million patients enrolled by the time it halted in September 2023. 75.4% of consultations were covered by community-based health insurance. | Rubuga et al., BMC Primary Care 2026 (administrative data) https://doi.org/10.1186/s12875-026-03179-8 (PubMed 41559605); Musange Furere et al., JMIR 2026 (enrolment figure) https://doi.org/10.2196/84832 (PubMed 41920583) | study (abstracts read via PubMed) | 85% for the two figures; the per-enrollee ratio is my arithmetic from two different papers, see section 4 | Medium. Low-income country, national platform, nurse-led triage, insurance-paid, not a flat unlimited fee. Closest to a low-income setting among the sources. |
| U7 | Altibbi (Jordan-founded, MENA): "three million consultations a year" (Mar 2022); 4.5 million consultations to date and 5,000 to 6,000 a day (May 2022); "10M+ consultations delivered" and "68,000+ verified physicians" (undated company text file). | Wamda, 28 Mar 2022 https://www.wamda.com/index.php/2022/03/digital-health-platform-altibbi-raises-44-million-series-b (page_read for the 3 million). The National, May 2022 (search_snippet only, page returned 403/not retrievable). https://altibbi.com/llms.txt (page_read, undated). | page_read for 3M/yr and 10M+; search_snippet for 4.5M and 5-6k/day | 60% | Medium in culture (Arabic, MENA), but all figures are vendor-reported, include free and paid consultations, and give no per-subscriber rate. The figures conflict: 5,000 to 6,000 a day is 1.8 to 2.2 million a year, against 3 million a year in the same year. |
| U8 | Altibbi subscription: "50K subscribers in 5 countries", USD 5 per month for unlimited calls to doctors, 200 new subscribers a day. | Twilio customer case study (vendor-written, undated; Altibbi launch given as January 2016; page shows a 2026 copyright). https://customers.twilio.com/en-us/altibbi | page_read | 60% (figures as written; no date, so may be old) | Medium in culture. This is the only unlimited-subscription figure I found in MENA, but it gives no consultations per subscriber. |

Never-users: from U1, 98.7% of offered adults did not use the service in about 19 months. From U3, 93% of eligible employees did not use it in a year. These are per-visit-fee or employer-benefit settings. No source found gives "share of members who never use" for a flat-fee unlimited plan.

### 1.2 Heavy-user tail and repeat use

| # | Number | Source | Evidence | Conf. | Transfer |
|---|---|---|---|---|---|
| H1 | Among 17,941 commercially insured adults with at least one virtual visit in 2022 at one US national virtual practice: 46.2% had 1 visit, 35.4% had 2 to 4, 18.4% had 5 or more. Frequent users (5+) were mostly mental-health chronic care: top five diagnoses were all mental health and made up 54.3% of their visits. | Marshall et al., Preventive Medicine Reports 2024, 46:102871. https://pmc.ncbi.nlm.nih.gov/articles/PMC11388715/ | study (page_read) | 90% | Poor to medium. Measures users only (people with at least one visit). Mental-health-heavy practice, USA. The article does not report the share of total visits by frequent users or the top-10% share. |
| H2 | 46% of telehealth patients had only one visit, 14% had seven or more (insured claims, 1 Mar 2020 to 30 Nov 2021). | Trilliant Health press release, 23 Feb 2022. https://www.trillianthealth.com/press/trilliant-healths-national-study-finds-46-of-americans-who-used-telehealth-during-the-pandemic-were-single-utilizers-suggesting-forced-adoption-of-technology | page_read, press release (vendor, no sample size given) | 70% | Poor. Pandemic period, USA, mixed visit types. |
| H3 | Share of consultations from the top 10% of users: not found in any source. | n/a | not found | n/a | n/a |

### 1.3 Age and children

| # | Number | Source | Evidence | Conf. | Transfer |
|---|---|---|---|---|---|
| A1 | Mean age of frequent users 37.2 years vs 40.4 for minimal users; each extra year of age lowers the chance of being a frequent user by 0.4 percentage points. Adults only. | Marshall et al. 2024 (same as H1). | study | 90% | Poor. Adults only; says nothing about children. |
| A2 | Pediatric DTC telemedicine visits rose from 38 (2011) to 24,409 (2016) a year in one national health plan. The abstract gives no per-child rate. | Ray et al., Academic Pediatrics 2019. https://doi.org/10.1016/j.acap.2018.11.016 (PubMed 30639759) | study (abstract) | 90% | Poor. Shows growth, not frequency per child. |

I found no source that supports "children use it more than adults" for telemedicine. A search summary mentioned a comparison where adults used commercial virtual care more than children aged 12 and under, but I could not trace it to a page, so I do not use it. Treat "children use more" as an open question, not a finding.

### 1.4 Free or cheap access creates new demand

| # | Number | Source | Evidence | Conf. | Transfer |
|---|---|---|---|---|---|
| D1 | Of direct-to-consumer telehealth visits for acute respiratory illness, an estimated 12% replaced visits to other providers and 88% were new utilization. Net annual spending on acute respiratory illness rose USD 45 per telehealth user. | Ashwood et al., Health Affairs 2017, claims for over 300,000 patients, 2011-13, CalPERS, USA. https://doi.org/10.1377/hlthaff.2016.1130 (PubMed 28264950) | study (abstract) | 90% | Medium on the direction (convenience adds demand), poor on the size. US insured adults. |

---

## 2. Cost drivers

### 2.1 Cost per teleconsultation

No source found gives a true cost per teleconsultation (doctor time plus platform plus support) in a MENA or lower-income market. What exists is the price patients pay, which is a proxy for a floor on platform revenue per consultation, not cost.

| # | Number | Source | Evidence | Conf. |
|---|---|---|---|---|
| C1 | Altibbi average fee per consultation: USD 1.80 in Saudi Arabia, about USD 0.70 in Egypt (January 2021 survey of consultations the doctor labelled as not needing a clinic visit; Egypt 4,103, Saudi Arabia 14,874). Same paper puts the average family doctor visit at EGP 168.18 in Egypt and SAR 103.6 for a general practitioner in Saudi Arabia. | Altibbi white paper, January 2021 data. https://cdn.altibbi.com/cdn/doc/2021/06/13/81b6510cf0652bff495e03f5cf955c09.pdf | page_read (PDF text extracted). Vendor marketing paper, no authors named. | 75% |
| C2 | Indonesia: GP teleconsultation fees roughly USD 0.50 to 4.45, specialists USD 1.59 to 22.24; doctors received 70 to 80% of the fee. | Indonesian policy analysis, found via search. https://perpustakaan.sso.unan.ac.id/app/files/buku/1780537637c208ed.pdf | search_snippet (PDF not opened) | 35% |

### 2.2 Doctor pay per teleconsultation

| # | Number | Source | Evidence | Conf. |
|---|---|---|---|---|
| P1 | Iraq: not found. | n/a | not found | n/a |
| P2 | Egypt: a freelance telemedicine doctor job post by Reliance Health advertised "30 EGP per consultation" with about 20 consultations a month to start (posting dated May 2026). The posting is now gone (Workable returned 404, Remotive 410), so I could not re-read it. | Search results listing https://apply.workable.com/get-reliance-health/jobs/view/DCFEA7CBAB.md and https://remoteleaf.com/company/reliance-health/freelance-doctor-egypt-egypt/ | search_snippet from job board (one company's offer, advertised, not a confirmed payment; Reliance Health operates in Africa, so not a MENA benchmark in general) | 35% |
| P3 | Lebanon: the platform DRAPP "reportedly" takes 20% of the consultation fee. | Mentioned in search summary, no page opened | search_snippet | 25% |
| P4 | Jordan, Saudi Arabia, Gulf, Altibbi: no doctor pay per consultation found. | n/a | not found | n/a |

The only Iraqi money anchor I found is what a patient pays for an in-person private clinic visit: the Iraqi Medical Association circular set 10,000 to 40,000 IQD, depending on doctor age, specialty, experience and certificates, and the article says clinics in Kirkuk and other provinces had charged 15,000 to 25,000 IQD over the previous ten years. The Kirkuk branch refused the circular. KirkukNow, 7 June 2022. https://kirkuknow.com/en/news/68274 (page_read, news, 85%). It is from 2022 and is not Baghdad-specific. It is a patient price for an in-person visit, not what a doctor earns for a teleconsultation.

### 2.3 Consultation length

| # | Number | Source | Evidence | Conf. |
|---|---|---|---|---|
| L1 | Mean visit length 6.6 minutes when an antibiotic was prescribed, 7.5 minutes when nothing was prescribed, 8.0 minutes when a non-antibiotic was prescribed. 13,438 virtual visits, about 12,000 patients, 2013-2016, USA (Cleveland Clinic team, published 2018). The overall mean is not reported on the page. | https://www.contagionlive.com/view/telemedicine-visit-length-is-it-linked-to-antibiotic-prescribing | page_read, trade news article | 70% |
| L2 | Mean visit length 5.8 minutes across 102,664 visits with 405 physicians (visits of 1 to 20 minutes only). | BMC Health Services Research 2022, link in the search result: https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-022-08566-2 . The page redirected to a login handshake and I could not open it. | search_snippet | 50% |
| L3 | WhatsApp text or voice consultation length: not found. The US numbers are video and phone, in a US urgent-care style setting. | n/a | not found | n/a |

### 2.4 Skill mix as a cost lever

Babyl Rwanda: triage nurses handled 44.2% of consultations, senior nurses 25.6%, and general practitioners 30.2%. Source: Rubuga et al. 2026 (U6). Evidence: study, 85%. This is a documented way a low-income-country service kept doctor time per consultation down. Whether this is legal or acceptable under the Iraqi Ministry of Health licence for TabeebX is not something these sources can answer.

### 2.5 Misuse patterns and fair-use rules

I found no study measuring abuse of unlimited telemedicine plans. What follows are the rules companies publish, which show what operators fear.

| # | Rule | Company, country | Source | Evidence | Conf. |
|---|---|---|---|---|---|
| F1 | "we limit the number of visits to 30 per year" per team member; people who need frequent visits may be steered to on-site providers. | Teams By Beam, US employer program | https://intercom.help/beam-healthcare-3c33671d81ee/en/articles/6181453-is-there-a-maximum-number-of-visits-a-team-member-can-have-per-month | page_read | 85% |
| F2 | Weqaya plan: monthly or weekly subscription with "up to 30 consultations monthly". Price not stated in the release. | Altibbi, launched November 2022 | https://www.zawya.com/en/press-release/companies-news/altibbi-the-middle-easts-largest-digital-health-platform-launches-new-mens-health-plan-l0ibby2a | page_read, vendor press release | 80% |
| F3 | Three annual subscription plans tiered by number of video consultations and number of people covered. Numbers not given. | KonsultaMD (Globe Telecom), Philippines | https://analysysmason.com/research/content/articles/consumer-digital-healthcare-rdmy0 | page_read, analyst article | 80% |
| F4 | Individual and family monthly plans; in-home and specialist remote consultations cost extra per consultation on top of the subscription. | Movistar Salud (Telefonica) | same Analysys Mason page | page_read | 80% |
| F5 | Standard tier shares four GP consultations across the member and family; premium tier is unlimited GP consultations for member and family. | Greenshield, Canada (insurer) | https://greenshieldplus.zendesk.com/hc/en-ca/articles/26181141476500-Check-your-Telemedicine-coverage | search_snippet | 50% |
| F6 | "Fair usage policy applicable" to unlimited online consultations. Limits not stated. | Practo Plus, India | archived Practo About page, found by search | search_snippet | 35% |
| F7 | One app-store review dated 2023-06-13 complains about a consultation limit in a subscription that was not stated. The summary was ambiguous. | Altibbi iOS listing (2.8K ratings, 4.5 average) https://apps.apple.com/us/app/altibbi-online-doctors-24-7/id1065353019 | app_store_page | 30% as evidence that "unlimited" has hidden limits; 90% that the listing shows 2.8K ratings |
| F8 | One patient per account / one WhatsApp number per family / repeat-consult windows: no company rule found for any of these. | n/a | not found | n/a |

Pattern across F1 to F6: published unlimited plans are either capped (30 a month, 30 a year, 4 shared, or counted tiers) or carry a "fair use" clause without numbers. A truly uncapped flat-fee family plan was not found among the sources, with one exception to check: Altibbi's site and Twilio case study call it "unlimited" at USD 5 a month, but Altibbi's own newer plan has a 30-a-month cap, so I cannot say whether the USD 5 plan is uncapped in practice.

---

## 3. MENA and comparison price benchmarks

Currency as shown. Not converted. Date seen 2026-11-08 unless noted. These are prices some page shows, not what the company earns.

| # | Company | Product | Price as shown | Source page | Evidence | Conf. |
|---|---|---|---|---|---|---|
| B1 | Altibbi | Unlimited calls to doctors, subscription | USD 5 per month | Twilio case study (vendor, undated) https://customers.twilio.com/en-us/altibbi | page_read | 60% (may be old) |
| B2 | Altibbi (Saudi landing page) | FAQ text | "starting from just 3 SAR per day for you or your family" | https://get.altibbi.com/en/altibbi-instant-medical-gcc | page_read. The same page also shows template-style prices (Business USD 20 per month billed annually, Enterprise USD 40 per month) that look unrelated to consumer consultations. | 45% |
| B3 | Altibbi | Weqaya, monthly or weekly subscription, up to 30 consultations monthly | price not stated | Zawya press release, November 2022 | page_read | 80% (no price) |
| B4 | Altibbi (Egypt) | 1130 hotline | EGP 5 per minute, charged to mobile credit or bill | search summary of Altibbi/Zawya hotline releases. https://www.zawya.com/en/business/altibbi-hotline-to-transform-access-to-healthcare-in-egypt-ny38xuyr (not opened) | search_snippet | 45% |
| B5 | Altibbi (Saudi and Egypt) | Average fee per consultation, January 2021 | USD 1.80 (Saudi Arabia), about USD 0.70 (Egypt) | Altibbi white paper (C1) | page_read | 75% |
| B6 | Altibbi | Current consumer plan prices | not found. altibbi.com/subscribe shows no prices in text; the App Store listing shows no in-app purchases. | https://altibbi.com/subscribe ; App Store listing above | page_read | n/a |
| B7 | Vezeeta (Egypt) | Telehealth consultation with a general practice doctor, 10 doctor listings on page 1 | 50 EGP to 400 EGP (50, 50, 100, 100, 100, 120, 150, 250, 300, 400) | https://www.vezeeta.com/en/tele-health/general-practice/egypt | page_read. Each doctor sets own fee; this is not a Vezeeta tariff. | 80% |
| B8 | Vezeeta (Egypt) | Telehealth consultation with a pediatrics doctor, 10 listings on page 1 | 100 EGP to 600 EGP (100, 150, 150, 150, 150, 200, 200, 350, 600, 600) | https://www.vezeeta.com/en/tele-health/pediatrics-and-new-born/egypt | page_read | 80% |
| B9 | Vezeeta | Subscription or unlimited plan | not found | n/a | not found | n/a |
| B10 | Okadoc (UAE) | Video consultation fee | not found. The GP teleconsultation profile page shows "Video Consultation" and "Private Payment Methods" headings but collapsed fee sections. | https://www.okadoc.com/en-sa/doctor/family-medicine-and-general-medicine-gp/dubai/gp-teleconsultation | page_read | n/a |
| B11 | Okadoc | Third-party listing "AED 150" for GP video or phone consultation | AED 150 | https://medcall-life.pages.dev/services/consultations (not Okadoc, not an official source) | search_snippet | 20% |
| B12 | Health at Hand (UAE) | Pay-as-you-go consultation | AED 100 | techradar article found by search (https://techradar.com/news/health-at-hand-app-brings-video-based-telemedicine-to-the-uae), date not seen | search_snippet | 40% |
| B13 | Tabeeby | App store listing shows the app as free to download. No consultation or subscription price found. | https://apps.apple.com/us/app/tabeeby/id1492303341 | app_store_page (via search listing) | 60% for "free to download"; price not found |
| B14 | Abdali Hospital (Jordan) | Telehealth payments in Jordanian dinars, full refund if cancelled 24 hours ahead. Fee not shown. | https://www.abdalihospital.com/department/telehealth-terms-and-conditions | page_read | 85% |
| B15 | Practo Plus (India), comparison outside MENA | Launched March 2020 as a monthly subscription for unlimited online consultations across 20+ specialities; the BioSpectrum article dated 13 March 2020 does not state a price. | https://biospectrumindia.com/news/98/15950/practo-launches-health-plan-for-unlimited-consultations.html | page_read | 80% for the plan existing; price not verified |
| B16 | Iraq, in-person private clinic visit (not teleconsultation) | 10,000 to 40,000 IQD (Iraqi Medical Association circular); typical 15,000 to 25,000 IQD in provinces | KirkukNow, 7 June 2022 (see 2.2) | page_read | 85% |
| B17 | Teladoc (US) | Average monthly revenue per U.S. Integrated Care member | USD 1.29 in FY2025 | Teladoc results release (U2) | page_read | 85% |
| B18 | "Doctorly" with Middle East Hospital, 100,000 IQD per family per year (Yaqoob's claim) | not verified. I did not search for it in this task; see the other research files. | n/a | n/a | n/a |

---

## 4. What these numbers imply for a 50,000 IQD per family per year unlimited plan

Only arithmetic from the sourced numbers above. Every line shows its inputs. None of these is an Iraqi usage rate or an Iraqi cost. P = 50,000 IQD per family per year, as given by Yaqoob.

### 4.1 What 50,000 IQD buys at different doctor costs (formula, not an estimate)

Break-even consultations per family per year = 50,000 / cost per consultation, ignoring every other cost (WhatsApp operations, support staff, payment fees, marketing, partner margins, prescriptions, follow-ups).

| Cost per consultation to you (IQD), a placeholder value | Consultations per family per year at which the 50,000 IQD is used up |
|---|---|
| 1,000 | 50 |
| 2,000 | 25 |
| 3,000 | 16.7 |
| 5,000 | 10 |
| 7,500 | 6.7 |
| 10,000 | 5 |
| 15,000 | 3.3 |
| 25,000 | 2 |
| 40,000 | 1.25 |

The first column is a grid of placeholder values, not a claim about what a doctor costs. The last four rows use the Iraqi in-person clinic range from KirkukNow (10,000 to 40,000 IQD, typical 15,000 to 25,000) only to show the scale: if a teleconsultation cost as much as a clinic visit, the plan is used up after 1.25 to 5 consultations per family per year. Whether a teleconsultation costs you that much is exactly the number nobody has published for Iraq: cannot be estimated from these sources. Yaqoob has to supply it.

Per-person view: 50,000 / 4 people = 12,500 IQD, / 5 = 10,000, / 6 = 8,333 per person per year. Family size is not defined in the brief; Yaqoob has to say who counts as the family and the maximum number of members.

### 4.2 What sourced usage rates would imply if they carried over (they probably do not)

Rates per person per year, from other countries and other plan designs, multiplied by a 4-person family (the 4 is my assumption for illustration only):

| Input rate | Source and arithmetic | Per 4-person family per year | Cost per consultation at which 50,000 IQD is exactly used up |
|---|---|---|---|
| Teladoc 2025: about 0.17 to 0.18 visits per member per year | 17.1 million visits / average of 93.8 and 101.8 million members (97.8 million) = 0.175; / 101.8 million = 0.168 | 0.67 to 0.70 | about 71,000 to 74,000 IQD |
| Babyl Rwanda: at least about 0.4 consultations per enrolled person per year | 3,899,788 consultations / 2,000,000 enrolled = 1.95 over about 4.75 years (Jan 2019 to Sep 2023) = 0.41. Enrolment grew over the period, so the true rate per enrolled-year is higher | at least 1.6 | at most about 30,500 IQD, lower if the true rate is higher |
| CalPERS 2012-13: 0.0126 visits per eligible adult per year | 4,657 visits / 233,915 eligible = 0.0199 over 19 months; x 12/19 = 0.0126 | 0.05 | about 990,000 IQD (not meaningful: per-visit-fee setting, early market) |

Caveats that all of these share:
- Teladoc's visits figure may include visits outside the U.S. while members are U.S. only, so the ratio may be overstated. Members are mostly adults in employer plans.
- None of the three is a flat-fee unlimited family plan. D1 (Ashwood) shows 88% of DTC visits were new use, so a prepaid unlimited plan can push use above these rates; by how much cannot be estimated from these sources.
- Babyl was nurse-triaged and insurance-paid; Teladoc is employer-paid. Neither is WhatsApp.

### 4.3 How many families would use the service at all, and how many times

If a share u of individuals uses telemedicine in a year and members are independent, the share of 4-person families with at least one user is 1 - (1 - u)^4:
- u = 1.3% (CalPERS, 19 months): 5.1%
- u = 7% (Mercer, 2016, snippet only): 25.2%

Independence is certainly wrong (illness clusters in a household, so the true family-level share is lower than this for the same individual rate, and a child's illness brings other members in). Use these as an upper bound for the "at least one user" count given the individual rates, not as a forecast.

Among users, the Included Health 2022 distribution (H1) gives: 17,941 users in the study were split 46.2% / 35.4% / 18.4% across 1 / 2-4 / 5+ visits (8,284 / 6,358 / 3,299 patients). From those counts:
- The mean is at least 2.09 visits per user: (3,299 x 5 + 6,358 x 2 + 8,284 x 1) / 17,941 = 37,495 / 17,941.
- Users with 5 or more visits (18.4% of users) account for at least 32.9% of visits: 16,495 / (16,495 + 33,716), taking the most generous case for the other groups (every 2-to-4-visit user at 4). The real share is higher because many frequent users have more than 5.
- The top-10% share of visits cannot be estimated from these sources.

Expected consultations per family per year then = (share of families who use) x (mean consultations per using family). With the numbers above, no single sourced pair is appropriate for a flat-fee unlimited family plan in Iraq, so the product cannot be estimated from these sources.

### 4.4 Internal reference points (Yaqoob's own figures, not external evidence)

From the tabeebx-brand skill and corporate-packages.md:
- All four corporate packages include unlimited teleconsultation and are priced 18,000, 25,000, 30,000 and 50,000 IQD per employee per MONTH. The packages also bundle visits and discounts, so the teleconsult cannot be separated out.
- An admin-fee model of about 25,000 IQD per user per YEAR for teleconsultation only, with discounted pay-as-you-go for everything else, is described as under internal study and not launched (do not put it in customer proposals). On that per-user figure, 50,000 IQD is the price of two users. A 4-person family would be 100,000 IQD at the same per-user price.
- Your corporate teleconsultation logs (consultations per employee per month, per age group, per dependent) are the only Iraqi usage data I know of that could replace the foreign rates in 4.2.

### 4.5 What Yaqoob would have to supply

1. His real cost per teleconsultation: doctor pay per consultation or per hour (or monthly salary and consultations per doctor-hour), plus whatever he pays for WhatsApp operations and support staff per consultation.
2. Whether nurses or general practitioners triage first (Babyl split is in 2.4) and whether specialists are included in the 50,000.
3. The definition of "family": maximum members, relationships, ages, and whether adult children or in-laws count.
4. The fair-use design he intends: a monthly or yearly cap, one WhatsApp number per family, a repeat-consultation window, hours of service. The sources show others cap at 30 a month, 30 a year, or a few shared (section 2.5).
5. Whether the 50,000 includes prescriptions, lab requests, follow-up consultations and referrals, which are the downstream costs the sources do not cover.
6. His own usage data from the corporate packages (consultations per employee per month, share of employees with zero consultations in a year, top-10% share), if any exists.
7. Payment collection cost, refund and chargeback rate, and the cost of acquiring one family.

---

## 5. Gaps (not found)

- Any usage rate (consultations per member per year, share who never use, top-10% share) for Iraq: not found.
- Any usage rate for a flat-fee unlimited plan anywhere, including Altibbi's USD 5 plan: not found. Altibbi publishes totals (3 million a year, 10M+ cumulative), not per-subscriber use.
- Top 10% share of consultations: not found; the nearest is the lower bound in 4.3 from H1.
- Share of members who never use an unlimited plan: not found. Only per-visit and employer-benefit figures (U1, U3).
- Children vs adults frequency on a subscription: not found. A1 and A2 do not answer it.
- Kaiser Permanente, MDLIVE, Amwell, Doctor On Demand, Babylon UK: not found. I ran no dedicated search on each of these, because the Teladoc and PubMed results used up the search budget. I exceeded the 25 to 35 call budget already, so I stopped.
- True cost per teleconsultation (doctor time plus platform plus support) in MENA or any lower-income market: not found.
- Doctor pay per teleconsultation in Iraq, Jordan, Saudi Arabia or the Gulf: not found. Egypt: one job-board figure at low confidence (P2).
- Teleconsultation length over WhatsApp, and length in MENA: not found.
- Abuse measurement for unlimited telemedicine (account sharing, serial use, call splitting): not found, only rules (2.5).
- Published prices: Altibbi's current consumer plans (page shows no text prices), Okadoc's video fee, Vezeeta subscription plans, Tabeeby's fees, Iraqi platform prices: not found.
- Exchange rate: none sourced, so no foreign price is compared to IQD anywhere in this file.
- Altibbi's 5,000 to 6,000 a day, 4.5 million to date, and the USD 5 in The National interview: I could only see search snippets (the page returned 403).

Source conflicts to keep in mind: Altibbi volume (3 million a year vs 5,000 to 6,000 a day), Altibbi price (USD 5 per month in the Twilio study, 3 SAR per day on a Saudi landing page, a 30-a-month cap in the newer Weqaya plan), and Teladoc visits (consolidated table, member count US only).

## Overall confidence

About 60% that the individual numbers are transcribed correctly (most are page_read or PubMed abstracts). About 15% that any utilization number here predicts Iraqi usage of a flat-fee unlimited family plan. That second figure is the core reason Section 4 gives formulas and ranges and no forecast.

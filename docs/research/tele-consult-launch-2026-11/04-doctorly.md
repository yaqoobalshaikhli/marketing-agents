# 04 - Doctorly (doctorlyiq.com): what the site, the card, the promo video and the app listings say

Date of research: 2026-11-08 (every "seen" date is this date). Researcher: Claude research agent. This file corrects part of `01-iraq-offers.md` (see "Correction to file 01" below). No TabeebX claims are made here except Yaqoob's own plan terms, copied as he gave them.

Evidence types: page_read (I read the page HTML), media_read (I read an image or video frame the site itself serves, by eye), app_store_page (store listing), api_lookup (Apple iTunes lookup or RDAP registry record), search_snippet (search summary only, page not read). Confidence is my confidence that the statement is accurate as written. Doctorly is a vendor selling a product: every "benefit" below is its own marketing claim, not verified service.

## Headline findings

1. The Doctorly card is real, family-oriented, valid one year, and tied to a named hospital, but the proof is in media files, not in the page text. The site's Gold Card picture (https://doctorlyiq.com/card0.png) and the autoplaying promo video (https://doctorlyiq.com/vd1.mp4) carry the details. The video opens on a building sign reading "مستشفى الشرق الأوسط الأهلي" in cooperation with Hôtel-Dieu de France Beirut. Text-only reads of the site (including mine in file 01) miss all of this. Confidence 90% (media_read of the site's own files).
2. What the card shows (from the card image): you and your family; valid one year; free access to consultation clinics; free emergency check-up all year; booking priority; discounts by department of 10% to 20% (list in section 1). Confidence 85% on the wording (read by eye from rendered Arabic), 90% on the percentages (read twice at zoom).
3. The 100,000 IQD per family per year price is NOT on the site, the video, the card image or either store listing. The video says to write "دكتورلي" and the "medical team will explain all details and prices". So the price Yaqoob quotes can only be confirmed by a human message or a social post. Confidence that no price is on the site or listings: 90%.
4. Teleconsultation is not part of the card as shown. The card's free benefit is an in-person exam at consultation clinics plus emergency (video says "فحص العيادات الاستشارية والطوارئ مجانا"). The site and the Apple listing claim video/voice consultations in the app, but the Google Play listing says the app provides no medical consultations. The two store listings contradict each other. Confidence 80% that the card has no teleconsultation benefit; 90% on the contradiction.
5. The "up to 30%" discount on the home page text conflicts with the card image and video, where the top figure is 20% (radiology and sonar). The 30% text is generic ("network of medical centers and pharmacies"); the card discounts look hospital-department-specific (video: "على أقسام المستشفى", i.e. on hospital departments). Confidence 85%.
6. The operation is young and small on the evidence: domain registered 2025-12-15; site media files stamped 2026-01-30/31; Play release 2026-04-05 (1K+ downloads, no rating); iOS release 2026-08-02 (no ratings). The home page claims "50k+" users; no store figure supports that. Developer ETANA SOFTWARE FZCO is a software vendor (Dubai HQ, Erbil branch) whose own site never mentions Doctorly. Who operates the card business in Baghdad: not found.
7. The site links to no social profile. Its four social icons (Facebook, Instagram, Twitter, LinkedIn) point to "#". The only external link is a WhatsApp number.

Overall confidence in this file: 85% on what the site, media and listings say; 40% that the card in these materials is the same offer Yaqoob saw priced at 100,000 IQD (it matches on family, hospital, lab discount and one-year validity, but the price is unsourced).

## Correction to file 01

File 01 (A1, A3, headline 1 and 2) said no Middle East Hospital mention exists on doctorlyiq.com and that the Gold Card has no family wording. That was true of the page text only. The site's own image and video, and the Apple listing screenshots, show Middle East Hospital and "you and your family". File 01's statements that the site has no price, no named labs and no redemption method still hold.

## 0. What I read and how

- Raw HTML via curl (WebFetch summaries hide images, video and link targets; the raw page is a complete 80 KB Next.js prerender). Seen 2026-11-08, all page_read.
- Pages that exist (HTTP 200): `/` (80,566 bytes), `/services`, `/about`, `/contact`, `/book`; `www.doctorlyiq.com/` serves the same home page. Everything else I tried returned the same 404 page ("This page could not be found"): `/sitemap.xml`, `/robots.txt`, `/plans`, `/pricing`, `/card`, `/gold-card`, `/network`, `/partners`, `/hospitals`, `/labs`, `/pharmacies`, `/faq`, `/terms`, `/privacy`, `/blog`, `/privacy-policy`, `/terms-of-service`, `/download`, `/app`, `/doctors`, `/login`, `/register`, `/signup`, `/ar`, `/en`, `/llms.txt`, `/manifest.json`. No English version exists (`/en` is 404). The page is `lang="ar" dir="rtl"`. HTML title "Doctorly - Medical App"; meta description "Advanced medical application for doctors and patients."
- Media the pages load, downloaded and read by eye: `/card0.png` (2560x1599), `/vd1.mp4` (47.6 s, 720x1280, audio track present; muted autoplay on the site), `/d11.png`, `/d22.png`, `/poster.png`, `/logo.png`. I could not transcribe the audio (no speech tool); I read the burned-in subtitles frame by frame. The subtitles are probably the spoken text but I could not confirm.
- All 18 JavaScript chunks the pages load were downloaded and searched for URLs, IP addresses, and the Arabic and English terms for price, dinar, IQD, plan, subscription, family, discount, hospital and Middle East: no hits (the one "Middle" match is a framework error name "MiddlewareNotFoundError"). The only external links are `wa.me/9647850007505` and a noise-texture URL.
- Not opened by rule: facebook.com, instagram.com, tiktok.com.
- Failed hosts: the privacy-policy URL in both store listings (`http://72.62.59.111:3001/privacy-policy.html`) did not connect from my environment (cannot tell whether the network blocks it or the server is down); `hdf.usj.edu.lb` returned HTTP 503 to WebFetch twice and a certificate-chain error to curl (I did not bypass it); `doctorly.com` (the domain in the site's contact email) returned a self-signed certificate error, so I did not read it. No DNS ENOTFOUND failures.

## 1. Plans and cards

The site sells one thing it calls a card. No other plan, tier, price table or subscription page exists on the site (section 0).

| Item | What is published | Source, evidence, confidence |
|---|---|---|
| Name | Page text: "بطاقة دكتورلي الذهبية" (Doctorly Gold Card). Video subtitle: "بطاقة دكتورلي". The card picture's signature panel appears to read "ضمان دكتورلي" ("Doctorly guarantee"); the card body text spells it "دكتوري". The app's home screen has a tile "Warranty Application" | Home page, card0.png, vd1.mp4, Apple screenshot 1. media_read, 75% that these are all the same product (the card picture sits directly under the Gold Card heading in the page HTML) |
| Price | Not found. Video: write "دكتورلي" and the team explains "كل التفاصيل والأسعار" (all details and prices) | vd1.mp4 subtitles, media_read, 90% |
| Who it covers | "You and your family" ("إلك ولعائلتك" in the video; "ولعائلتك" on the card). How many people, which relatives, age limits: not found | media_read, 85% |
| Validity | One year ("لمدة سنة" on the card picture). Start date, renewal terms, refund: not found | card0.png, media_read, 90% |
| Included, free | Card picture: free access to consultation clinics ("لعيادات الاستشارية"; the word for "free" before it is rendered ambiguously in the image, 70%) and "كشفية طوارئ مجانية طوال العام" (free emergency exam all year). Video: "فحص العيادات الاستشارية والطوارئ مجانا". Number of visits, whether unlimited, which clinics: not found | card0.png + vd1.mp4, media_read, 80% |
| Priority | "أولوية حجز المواعيد" (appointment-booking priority) | card0.png, 85% |
| Discounts (card picture) | 15% غرف الرقود (inpatient rooms); 20% الأشعة والسونار (radiology and sonar); 15% المختبر (laboratory); 10% الصيدلية (pharmacy); 10% الاسنان (dental); 15% العمليات الجراحية (surgery); 15% العناية المركزة (intensive care) | card0.png, media_read, 90% |
| Discount headline in video | Subtitle: "بالإضافة لخصم يوصل لـ 20 بالمئة على أقسام المستشفى" (plus a discount up to 20% on the hospital's departments) | vd1.mp4, media_read, 85% |
| Discount headline on page text | "توفير يصل إلى 30% على الفحوصات والأدوية" (savings up to 30% on tests and medications); "خصومات حصرية في شبكة واسعة من المراكز الطبية والصيدليات" (exclusive discounts in a wide network of medical centers and pharmacies) | https://doctorlyiq.com/ , page_read, 95%. Conflicts with 20% max on the card |
| Character | Video: "مو عرض مؤقت ولا كوبون" (not a temporary offer or coupon) and "بطاقة ثابتة بخدمة عائلتك" (a fixed card serving your family) | vd1.mp4, media_read, 85% |
| Value claim | "والبطاقة تعوّض قيمتها من أول ظرف" (the card pays back its value from the first [situation]); the last word is partly obscured, 70% | vd1.mp4, media_read |
| How bought and activated | Not found. Only route shown: message "دكتورلي" to the numbers on the end card. Website has no purchase button; the home page "احجز موعدك" button goes to `/book`, a doctor-appointment form (steps: service, data, confirmation; specialties general consultation, pediatrics, dental, cardiology, dermatology, internal medicine, orthopedics, ophthalmology), not a card purchase | `/book`, home, vd1.mp4. page_read, 90% |
| Physical form | A printed card with a magnetic stripe panel and a QR code (QR not decoded; no decoder available). Customer-service numbers printed: 07750007505 and 07850007505; "Doctorlyiq.com" printed | card0.png, media_read, 90% |
| Home-page sentence | "احصل على بطاقة دكتورلي الموحدة" with instant access to medical history, e-prescriptions and exclusive discounts; "أمان تام"; "خصومات حصرية" | https://doctorlyiq.com/ , page_read |

Gold-Card image note: the card in the picture is teal and blue, not gold. Whether "Gold" is a tier name, a decoration or a different card: not found.

## 2. Partner network

- Number of partners, cities, named labs, clinics or pharmacies in the card network: not found. No page lists them.
- Named hospital: Middle East Hospital (مستشفى الشرق الأوسط الأهلي), found in three places that Doctorly itself serves:
  1. Promo video first frame: building sign reads "مستشفى الشرق الأوسط الأهلي بالتعاون مع مستشفى أوتيل ديو دو فرانس بيروت" with a "ME+" logo and a "Hôtel-Dieu de France" logo (media_read, 90%). Subtitles at about 7 to 10 s: "هي أمان صحي إلك ولعائلتك داخل مستشفى" then "الشرق الأوسط الأهلي" (it is a health safety for you and your family inside [Middle East Private] hospital). This is the strongest link between Doctorly and the hospital that I found. The video shows the hospital's premises and presenter; it does not say the hospital co-issues the card, only that the card applies "inside" the hospital (85%).
  2. Apple App Store screenshot 5 (Hospitals screen of the app): one hospital listed, "Middle East Hospital", address "بغداد، شارع الربيع، مجاور محكمة استئناف الكرخ" (Baghdad, Al-Rabie Street, next to Karkh Appeals Court), rating shown as 0 (media_read of https://apps.apple.com/iq/app/doctorly/id6794924195 screenshots, 85%).
  3. Nothing in the site text, Play listing or Play screenshots (screenshots not viewed) names it.
- Three different Middle East Hospital addresses now exist across sources, unresolved: Al-Hurriya (a directory, file 01), Al-Rabie Street next to Karkh Appeals Court (Apple screenshot), and "المنصور الداودي شارع التانكي" (video end card, under the label "العنوان" with no owner named). I cannot tell which is the hospital and which is a Doctorly office. Ask Yaqoob (section 8).
- Discounts by partner: all discounts on the card picture are by department (section 1), and the video ties the 20% to "hospital departments". I infer (70%) that the card's lab 15% applies at the hospital's own laboratory, not at an outside lab network. Not stated anywhere.
- Hospital background (search_snippet, 60%): a search returned the Hôtel-Dieu de France site (hdf.usj.edu.lb, "Visit to the Middle East Hospital (MEH) in Baghdad" and "USJ-HDF Hospital Network"). The search summary says HDF describes a strategic partnership with the Middle East Hospital in Baghdad, supervises staff recruitment there, and led a delegation visit in June 2024. I could not read those pages (HTTP 503 and a certificate error). It agrees with the sign in the video. No page I found links the hospital to a card, family plan or Doctorly. Three searches on the card, Doctorly and the hospital (Arabic and English) found nothing about the card.
- App listing sample data: the Apple screenshots show a Labs list (Erbil Advanced Medical Lab, Ankawa, Erbil, 4.6; Basra Central Laboratory, Al-Ashar, Basra, 4.8; Al-Noor Diagnostic Center, Al-Mansour, Baghdad, 4.5; Baghdad Medical Labs, Al-Karrada, Baghdad, 4.8) and a doctor with "4.9 (287)" reviews. A brand-new app with 0 store ratings showing these scores suggests demo data. I treat these as unverified, not as partners (70%). The home-page mockups (`/d11.png`, `/d22.png`) show "Apollo hospital", "First Dental Clinic, Erbil" and "$25.00 Hourly Rate", also generic mockups, not Doctorly prices. The video poster (`/poster.png`) shows the name "MEDISYNC", another brand, so the site reuses template art (80%).
- Any pharmacies named: not found.

## 3. Consultations

What the sources say, and who says it:

| Source | Claim | Evidence, confidence |
|---|---|---|
| Home page text | "استشارات عن بعد: تواصل مع طبيبك عبر مكالمات الفيديو والصوت" (remote consultations by video and voice); "محادثات فورية مع الأطباء" (instant chats with doctors); "تشخيص أولي ذكي ومساعد افتراضي متاح 24/7" (AI preliminary diagnosis, virtual assistant 24/7) | https://doctorlyiq.com/ , page_read, 95% |
| /services | "استشارات طبية: احصل على استشارة طبية دقيقة من نخبة من الأطباء المتخصصين" (specialist doctors); also e-pharmacy with home delivery, emergency ambulance transport, lab tests, home nursing, surgery booking | https://doctorlyiq.com/services , page_read, 95% |
| Apple listing (v1.0.2, Arabic text) | "استشارات طبية عن بُعد... الاستشارات المرئية والصوتية المباشرة"; also says the app is for "الاستشارات العامة" (general consultations) and family-file management | https://apps.apple.com/iq/app/doctorly/id6794924195 , app_store_page, 95% |
| Google Play listing | Disclaimer: "does not provide medical consultations or diagnoses" (Arabic: "لا يقدم استشارات طبية أو تشخيصاً طبياً"); the app only books appointments with doctors, clinics and labs | https://play.google.com/store/apps/details?id=com.doctorly.app , app_store_page, 95% |
| Card picture and video | Free "consultation clinics" check-up and emergency check-up; no word of video, voice or text consultation | card0.png, vd1.mp4, media_read, 80% |

The contradiction: the site and the Apple listing sell remote video and voice consultations; the Play listing for the same app and the same developer says the app provides no consultations. The Play description does use "book a medical consultation", so it means booking an appointment. My reading: the in-app teleconsultation feature is either not live or not licensed on Android, or the Play text is a policy-driven disclaimer. Not found which (confidence 45% on any one explanation, so I do not rely on one).

Not found anywhere: whether consultations are video, voice or text in practice; GP versus specialist; hours (the site says only "available 24/7" for the AI assistant); whether any consultation is included in the card or paid per use; any consultation price. The mockup screens show an "Hourly Rate $25.00", which I treat as a placeholder.

## 4. The app

| Field | Google Play | Apple App Store (Iraq storefront) |
|---|---|---|
| URL | https://play.google.com/store/apps/details?id=com.doctorly.app | https://apps.apple.com/iq/app/doctorly/id6794924195 |
| Listing name | Doctorly App | Doctorly - دكتورلي |
| Developer | Etana Software; legal line "ETANA SOFTWARE - FZCO", Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai | ETANA SOFTWARE (developer id1845223540) |
| Released | Apr 5, 2026 | Aug 2, 2026 (api_lookup) |
| Last update | Oct 18, 2026; version 1.0.1; release note "تحسينات" (improvements); needs Android 7.0 | Nov 2, 2026; version 1.0.2; release note "تحسينات"; needs iOS 15.0 |
| Installs | "1K+ downloads" (1,000+). The page data also holds the number 1043 beside it; unlabelled, so I do not use it | Not shown |
| Rating, reviews | None shown, no reviews | "not enough ratings or reviews"; API: 0 ratings |
| Price, in-app purchases | Free; no in-app purchase or ads label found on the page | Free; the page lists no in-app purchase price; I did not find a price list. Size 58.9 MB |
| Privacy policy | `http://72.62.59.111:3001/privacy-policy.html` (an IP address and port, unreachable from my environment) | same URL |
| Data safety / privacy | "No data collected"; "No data shared with third parties" (developer-declared) | "Data Not Collected" (developer-declared) |
| Contact on listing | Website doctorlyiq.com; email doctorly271@gmail.com; developer email info@etanasoftware.com; phone +964 783 300 0259 | same developer; sellerUrl not set |
| Age rating | Everyone | 16+ on page (API says 17+) |
| Listing text | Booking of doctors, clinics and labs; also for doctors, clinics and labs to manage profiles and branches | Booking, remote consultations, e-medical record, reminders, family file management |

Observations (not conclusions): "No data collected" sits oddly beside an app that holds appointments, family files and medical records; the declaration is the developer's and unverified. Apple's listing language is English only while its text is Arabic. The site claims "50k+" users and "HIPAA" alignment; the stores show 1K+ downloads and zero ratings, and I found no HIPAA evidence (HIPAA is a US law).

Apple screenshots (6, media_read): home tiles Doctors, Hospitals, Labs, Consultation, Clinics, "Warranty Application"; specialties; a doctor profile; a labs list; a lab detail page with clinic schedule (Sunday to Thursday 08:00 to 20:00); a hospitals list with Middle East Hospital; a dermatology search. No price or card page is visible in them.

## 5. The company and launch evidence

- Who runs it, per the site: nobody named. About page: "نسعى لجعل الرعاية الصحية في متناول الجميع" and a story paragraph; counters "0+" patients, doctors, cities and consultations (animated counters that show zero in the HTML; the real numbers are not published). Footer: "© 2026 دكتورلي"; "العراق-بغداد"; phone 07850007505; email info@doctorly.com; WhatsApp link wa.me/9647850007505 (page_read, 95%). The email domain doctorly.com is not the site domain (doctorlyiq.com) and presented a self-signed certificate, so I did not read it.
- Registration: the site states none (no company name, license number or Iraqi registration). Play and Apple name the developer ETANA SOFTWARE - FZCO (Dubai Silicon Oasis free-zone company). ETANA's own site (https://www.etanasoftware.com/en , page_read) describes a "digital transformation partner", with HQ in Dubai Digital Park, Dubai Silicon Oasis and an "Iraq - Erbil Branch" at Villa 294, English Village, Erbil; its listed Iraq branch phones include +964 783 300 0259, the same number as the Doctorly Play listing. The ETANA page never mentions Doctorly (0 hits). ETANA publishes other apps on Apple (Istisharah - استشارة, ابتكار للطاقة الذكية, Livan), so it looks like a build agency or a multi-product developer. Whether ETANA owns Doctorly or builds it for a client, and who runs the Baghdad card business and holds the contract with the hospital: not found.
- Iraqi licensing, Ministry of Health approval, insurance license for a prepaid card: not found. (Regulation is out of scope here; see file 03.)
- Launch-date evidence:
  - Domain doctorlyiq.com registered 2025-12-15, expires 2026-12-15, registrar Hostinger (RDAP via https://rdap.org/domain/doctorlyiq.com, api_lookup, 95%). It expires in about five weeks from today; renewal status unknown.
  - Server file dates (HTTP Last-Modified): `vd1.mp4` 2026-01-30 14:18 GMT, `card0.png` 2026-01-30 14:48, `d11.png` and `d22.png` 2026-01-31, `poster.png` 2026-01-30 (media_read; these are server file dates, so the card video and card picture were on the server by 2026-01-31, 70% that they were public then).
  - Play release Apr 5, 2026; Apple release Aug 2, 2026; footer copyright 2026.
  - archive.org: the availability API returned no snapshots for doctorlyiq.com; the CDX search reset the connection. So no archived history (api_lookup, 70%).
  - Earliest public mention of the card or of a price: not found.
- Server: nginx on Ubuntu, Next.js (page_read of response headers).

## 6. Social profiles the site links to

None. The home page footer has four icons (Facebook, Instagram, Twitter, LinkedIn) and each link is `href="#"`. The App Store and Google Play buttons are `href="#"`. "سياسة الخصوصية" and "شروط الاستخدام" are `href="#"`. The only external link is WhatsApp: https://wa.me/9647850007505 (page_read, 95%). The store listings give no social links. The video end card shows no handles. I did not search Facebook, Instagram or TikTok. Yaqoob can look for the pages by name ("دكتورلي", "Doctorly", "مستشفى الشرق الأوسط الأهلي") and by the phone numbers 0775 000 7505 and 0785 000 7505.

## 7. Comparison table

Left column: only what my sources support. Right column: Yaqoob's plan terms exactly as he gave them to me; I add nothing about TabeebX. No price arithmetic, because the Doctorly price is not found.

| Dimension | Doctorly card (as the site's card picture and video show) | Yaqoob's proposed plan (terms he gave; not verified by me) |
|---|---|---|
| Price per year | Not found (video says "ask us"). Yaqoob reports 100,000 IQD per family per year; no source found | 50,000 IQD per family per year |
| Covers | "You and your family"; number of people not found | Per family |
| Validity | One year | Per year |
| Teleconsultations | Not part of the card as shown. Site and Apple claim video/voice consultations in the app; Play says none. Per-use or included: not found | Unlimited teleconsultations |
| In-person doctor visit | Free access to consultation clinics and free emergency check-up, all year; count and limits not found; at the hospital (inferred, 70%) | not stated |
| Lab discount | 15% on "المختبر" (card picture); which lab: not found (probably the hospital lab, 70%). Home page text says up to 30% on tests and medications | 15 percent off all lab tests |
| Home sample draw | Not found | Free home draw |
| Other discounts | Radiology and sonar 20%, inpatient rooms 15%, surgery 15%, intensive care 15%, pharmacy 10%, dental 10% | not stated |
| Named partners | Middle East Hospital (video sign, Apple screenshot). Labs, pharmacies, clinics: not found (screenshot lab names look like demo data) | not stated |
| Emergency | Free emergency exam (hospital) | not stated |
| Booking priority | Yes, appointment-booking priority | not stated |
| How bought | Not found; message "دكتورلي" to the phone numbers | Delivered by WhatsApp at first, no app (as Yaqoob told me) |
| Activation | Not found | not stated |
| Physical item | Printed card with QR code | not stated |
| Evidence strength | media_read of the vendor's own marketing; no terms and conditions found | n/a |

## 8. What to ask Yaqoob to send

Only a human can fetch these. I did not contact anyone and did not open Facebook, Instagram or TikTok.

1. The social post, story or ad where the 100,000 IQD per family per year figure appears: a screenshot with the page name, date and post link. Also the comments, since people often ask the price there.
2. The source of his 100,000 IQD figure: who told him, when, and in which words. If a sales person quoted it by WhatsApp or phone, the exact message and date.
3. A WhatsApp enquiry result, if he chooses to ask. The video tells people to message "دكتورلي" to 0775 000 7505 or 0785 000 7505. The questions that would close my gaps: the price, how many family members, which relatives and ages, how many free consultation-clinic visits (and whether they are unlimited), whether any video or voice consultation is included, which labs honour the 15%, whether it covers home sampling, where to buy, how it is activated, refund and renewal terms. A screenshot of the reply, with date.
4. A photo of the front of the physical card (my image shows only the back) and any printed terms or leaflet that comes with it.
5. A screenshot of the card or "Warranty Application" screen inside the Doctorly app (iOS or Android): the form fields, any price or payment step, any terms text.
6. The official Facebook, Instagram and TikTok pages of Doctorly and of Middle East Hospital (مستشفى الشرق الأوسط الأهلي): the page creation date, pinned posts, "about" text, and whether the hospital posts the card itself. If the hospital's page announces it, that confirms co-issuing.
7. The correct address of the hospital branch the card is used at (three conflicting addresses in section 2), and the address "المنصور الداودي شارع التانكي" on the video end card: is it a sales office?
8. If the competitor-intel routine already has Meta Ad Library access, a search of ads by page name "دكتورلي" and "مستشفى الشرق الأوسط الأهلي" would date the campaign; I did not use it for this file.
9. Whether the Google Play app lets a user buy or use teleconsultations (install and try, on a test device), to settle the Play versus Apple contradiction.

## 9. Gaps (not found)

- Any price for the card, any family-plan price, and the 100,000 IQD figure: not found anywhere I could read.
- Number of people covered per card, and whether it is per family or per person: not found.
- Terms and conditions, refund, renewal, cancellation, waiting period, exclusions, annual caps: not found (site has no terms page; privacy policy is on an unreachable IP address).
- How to buy and activate the card, and who sells it (Doctorly, the hospital or ETANA): not found.
- The list of partner clinics, labs and pharmacies, their number and cities: not found.
- Whether Middle East Hospital co-issues or only honours the card: not found. Any statement from the hospital or from Hôtel-Dieu de France about the card: not found.
- Whether the card's discounts apply only inside the hospital: not stated (my inference only).
- Discounts for named labs outside the hospital: not found.
- Home sample collection with the card: not found.
- Teleconsultation details (type, hours, doctors, price, inclusion in the card): not found; store listings contradict each other.
- Company registration of the Iraqi operation, the owner or founders, an Iraqi license: not found.
- Date the card was first offered or priced: not found (best evidence: media files dated 2026-01-30/31; domain registered 2025-12-15).
- Reviews or ratings of the app: none exist on either store.
- Archive.org history: no snapshots; CDX lookup failed.
- Doctorly social profiles: the site links none; I did not search for them.
- QR code destination on the card: not decoded.
- Audio of the video: not transcribed (subtitles only).
- The HDF (Hôtel-Dieu de France) pages about the Middle East Hospital: not read (HTTP 503 and a certificate error); the partnership comes from search summaries only.
- Google Play screenshots of the app: not viewed.

## Appendix A. Promo video subtitles (my reading, translated)

Source: https://doctorlyiq.com/vd1.mp4, media_read, 85%. Subtitles are Iraqi dialect; 15 words or fewer per quote. Times are approximate (about 2 seconds either way; I sampled one frame per second).

- 1 s: building sign "مستشفى الشرق الأوسط الأهلي بالتعاون مع مستشفى أوتيل ديو دو فرانس بيروت".
- 2 to 6 s: "شنو يعني بطاقة دكتورلي؟" then "وليش أحتاجها؟" (What is the Doctorly card, and why do I need it?).
- 7 to 10 s: "هي أمان صحي إلك ولعائلتك داخل مستشفى الشرق الأوسط الأهلي" (it is health security for you and your family inside Middle East Private Hospital).
- 11 to 14 s: "مو عرض مؤقت ولا كوبون" / "بطاقة ثابتة بخدمة عائلتك".
- 15 to 18 s: "تقدملك فحص العيادات الاستشارية والطوارئ مجانا" (it gives you free consultation-clinic exams and emergency).
- 19 to 23 s: "بالإضافة لخصم يوصل لـ 20 بالمئة على أقسام المستشفى" (plus a discount up to 20% on hospital departments).
- 24 to 31 s: "وأهم شي الراحة نفسية... لأنك حتعرف وين تروح وقت الحاجة بدون حيرة ولا قلق حتى لو صحتك زينة".
- 32 to 36 s: "العائلة راح تمر بطوارئ خلال السنة والبطاقة تعوّض قيمتها من أول ظرف" (the family will meet emergencies during the year and the card repays its value from the first [one]).
- 37 to 41 s: "إذا تحب ترتب وضعك الصحي أكتب لنا 'دكتورلي' وفريقنا الطبي راح يشرحلك كل التفاصيل والأسعار".
- 42 to 47 s end card: "للتواصل والاستفسار" 0775 000 7505 and 0785 000 7505; "العنوان" "المنصور الداودي شارع التانكي".

No price appears in the video. The presenter, the actors and the hospital premises are not identified; I make no claim about who they are.

## Appendix B. Site text, page by page (Arabic, translated)

- Home: hero "الخيار الأول في العراق" (first choice in Iraq) and "احجز طبيبك بكل سهولة"; badges "آمن" and "موافق لـ HIPAA" and "حماية بيانات 100%"; "الأعلى تقييماً من قبل 50k+ مستخدم"; six benefits (appointment booking, remote consultations, secure data, reminders, vitals follow-up, e-medical file); Gold Card block; four steps (find, book, get care in clinic or by video call, records); technology block (AI preliminary diagnosis 24/7, full encryption, instant booking). Download buttons point nowhere (`#`).
- /services: consultations, e-pharmacy, emergency transport, lab tests (book lab appointments and get results electronically), home care, surgery booking. No prices.
- /about: mission sentence, story paragraph, counters at "0+", "انضم إلى آلاف الأطباء والمرضى" (join thousands of doctors and patients).
- /contact: phone 07850007505, email info@doctorly.com, address "العراق-بغداد", a contact form.
- /book: appointment wizard (service, data, confirmation).

Raw copies of the downloaded pages, images, frames and the Apple lookup JSON are in `/tmp/claude-0/-home-user/9d3990a5-1540-5f92-9cfa-2c80a13d522d/scratchpad/doctorly/` (scratch, not part of the repo).

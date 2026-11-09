# Platform rules: AI labels and insurance ads (checked 2026-10-17)

Two research agents, each followed by a separate fact-checker. Confidence is the checker's adjusted figure. **Limits:** tiktok.com, facebook.com and instagram.com pages were not fetched (TabeebX rule). TikTok's Community Guidelines were read from Open Terms Archive's verbatim copy on GitHub. Most other quotes come from search snippets or from Meta Business Help articles returned by the Meta Ads connector. WebFetch failed on DNS for most sites in this session, so several pages were read through search summaries only. One agent mistakenly sent WebFetch requests to developers.facebook.com and ads.tiktok.com; both failed at DNS and returned nothing. Re-check exact wording in a browser before quoting a rule to a platform.

## AI-generated content

| # | Platform | Rule | Applies to | Confidence | Source |
|---|---|---|---|---|---|
| 1 | TikTok | Creators must label AI-generated or significantly edited content that shows **realistic-looking people or scenes**. Guidelines released 2026-08-25, effective 2026-09-24 | organic | 90% | [OTA copy of TikTok Community Guidelines](https://raw.githubusercontent.com/OpenTermsArchive/pga-versions/main/TikTok/Community%20Guidelines.md) |
| 2 | TikTok | Unlabelled content "may be removed, restricted, or labeled by our team". Repeated violations can lead to feature or account restriction, up to a ban | organic | 85% | same |
| 3 | TikTok | Clearly artistic styles (illustration, cartoon, anime) and small edits are exempt; photoreal AI is not (2025 text; the 2026 copy didn't capture the details panel) | organic | 70% | [OTA 2025 copy](https://raw.githubusercontent.com/OpenTermsArchive/contrib-versions/main/TikTok/Community%20Guidelines.md) |
| 4 | TikTok | An AI-generated-content disclaimer is **mandatory** in ads whose media is fully AI-generated or significantly AI-edited | ads | 75% | ads.tiktok.com/help/article/about-ad-disclaimers-in-tiktok-ads-manager (snippet) |
| 5 | TikTok | Ads must not falsely show endorsement by, or impersonate, health professionals, labelled or not | ads | 60% | ads.tiktok.com/help/article/tiktok-ads-policy-misinformation (snippet) |
| 6 | TikTok | Health content is a named focus of TikTok's July 2026 work on repeated AI-generated spam | organic | 70% | TikTok newsroom, July 2026 (reported by Philstar Tech) |
| 7 | Meta | A label is required for organic **photorealistic video** or **realistic audio** made or changed with AI, e.g. a realistic AI voice-over on a reel. **Not required for still images.** Cartoon-style video needs none | organic | 88% | [Meta Help Centre](https://www.meta.com/en-gb/help/artificial-intelligence/1783222608822690/) |
| 8 | Meta | Meta auto-labels "AI info" when it detects C2PA/IPTC AI metadata. Whether Canva writes that metadata is **unknown** | organic | 85% | [Meta newsroom, Feb 2024](https://about.fb.com/news/2024/02/labeling-ai-generated-images-on-facebook-instagram-and-threads/) |
| 9 | Meta | Advertiser self-disclosure of AI is required only for political and social-issue ads. Meta has been auto-labelling detected third-party AI in "About this ad" since June 2026; availability by region (Iraq) is unclear | ads | 62–75% | Meta Business Help 1486382031937045 (connector) |
| 10 | Instagram | Since 2026-08-31, profiles built around an **AI-generated person** without the "AI-generated profile" label may have reduced reach. Using AI only as a production tool doesn't trigger this | organic | 70% | [TechCrunch, 2026-08-31](https://techcrunch.com/2026/08/31/instagram-puts-new-limits-on-undisclosed-ai-profiles/) |
| 11 | Canva | Canva's AI Product Terms (effective 2026-06-26) forbid using Canva AI to mislead anyone that output is human-made, and forbid stripping provenance (C2PA) metadata | both | 88% | [Canva AI Product Terms](https://www.canva.com/policies/ai-product-terms/) |

**What this means for "don't label AI":**
- **No label needed:**
  - Meta still images.
  - Illustrated or motion-graphics work on either platform, including piece 03's animation, unless it uses a realistic AI voice on Meta.
- **Label still required:**
  - TikTok: realistic AI people or scenes, organic or ads.
  - Meta: photoreal AI video and realistic AI voice-overs.
- **Never, labelled or not:** AI people presented as real TabeebX staff, patients or customers. This is CLAUDE.md rule 3, and it also breaks Canva's terms and TikTok's fake-review and impersonation rules.

## Insurance (Health 360, «تأمين») ads

| # | Platform | Rule | Confidence | Source |
|---|---|---|---|---|
| 12 | Meta | The "Financial products and services" special ad category is **not required** for an Iraq-based advertiser targeting only Iraq. Insurance is in scope only in the US; credit in the US, Canada and listed European countries. Keep Health 360 ad sets geo-locked to Iraq, because reaching the US, Canada or Europe could trigger it | 82% | Meta Business Help 567423788405762 (connector) |
| 13 | Meta | Insurance ads must target 18+, carry legally required disclosures, and must not directly ask for personal or financial information. Meta may ask for business or identity verification and proof of regulatory authorization | 80–85% | Meta Advertising Standards via [ConductAtlas copy, 2026-07-23](https://conductatlas.com/platform/meta-ads/meta-advertising-policies/provision/CA-P-053215/financial-advertisers-must-demonstrate-regulatory-authorization/) |
| 14 | Meta | Lead forms must not ask for health information (conditions, treatments) or current insurance or policy details without Meta's permission. Collect name, phone and governorate only | 80% | ConductAtlas CA-P-053242 / CA-P-053243 |
| 15 | Meta | Personal attributes also cover age, family status and financial vulnerability. Avoid «انت أب جديد؟», «إذا عمرك فوق ٤٠», «ما تكدر تتحمل مصاريف المستشفى؟». Describe the plan («خطة للعائلة»), not the viewer | 85% | Meta Business Help 2557868957763449 |
| 16 | Meta | An insurance ad with a clear call to action ("learn more about our insurance programs") is a service ad, not a social-issue ad. Advocacy framing ("healthcare access should be affordable") without a call to action can be pulled into social-issue review | 85% | Meta Business Help 287622936276216 |
| 17 | Meta | Telemedicine platforms and health-insurance marketplaces are listed examples of the restricted "health and wellness" data category. Pixel/CAPI conversion events may be limited, so plan on lead-form or messaging objectives | 80% | Meta Business Help 511197658391698 |
| 18 | TikTok | Whether insurance ads may be delivered in Iraq is **unconfirmed**. The financial-services policy requires local licensing and disclaimers. Ask TikTok's Iraq representative in writing | 25–60% | ads.tiktok.com/help/article/tiktok-ads-policy-financial-services (snippets) |
| 19 | Both | No rule was found restricting the word «تأمين» in **organic** posts | n/a | Gap noted by both agents |

**Open legal question, not for us to answer:** does Iraq's Insurance Business Regulation Law (2005) require TabeebX itself to hold an agent or broker authorization to advertise Health 360? Or must the licensed insurer be the named advertiser? That decides whose licence a platform would accept. Ask your lawyer or the insurer.

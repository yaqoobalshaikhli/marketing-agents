# Arabic typography in motion and Arabic social design (research, 2026-10-20) - DRAFT, STAGE 1

Researcher: topic 03 of the design and motion programme (decision #69). Reader: Yaqoob. Every claim has a source, an evidence type and a confidence. Where I could not find something it says "not found".

(Stage 1 notes, being written in stages. Findings so far are the joined-letter mechanics. Sections for pairing and weights, dialect on screen, the Iraqi scene and Reddit follow.)

## Findings so far

### F1. Move a mask over intact text; never split Arabic into per-letter boxes
- Claim: most text-animation tools wrap each character in its own element, which breaks cursive joining. The working alternative is one intact text node with a mask or clip moving across it. Source: Framer Marketplace listing for Shape-Safe Reveal (vendor marketing, tested by the vendor in Chrome, Firefox, Safari on 14 scripts; unverified by me beyond my own Chromium test).
- My own Chromium 141 test (local_measurement, Cairo 800, 150 px, repo's vendored font): per-letter `display:inline-block` spans produced isolated, disconnected letterforms and overflowed the line (broken). Per-letter plain inline spans kept the joins in Chromium (but I would not trust that in Safari, Canva or After Effects). Per-WORD inline-block spans kept all joins. Intact text under `clip-path` kept the joins at every reveal position.
- Source: https://www.framer.com/marketplace/components/shape-safe-reveal/ and https://www.framer.com/marketplace/components/shape-safe-text-kit/ ; evidence page_read plus local_measurement. Confidence 90% for the mechanism (my test confirms it), 60% for the vendor's cross-browser claims.

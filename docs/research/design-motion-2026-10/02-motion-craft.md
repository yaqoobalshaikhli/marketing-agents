# Motion craft for 15 to 20 second vertical explainers and kinetic type

Research date: 2026-10-20. Status: complete.

Evidence types used: page_read (I read the page text), search_snippet (search-result summary only), article, image_viewed, profile_viewed. One extra type is added and labelled: tested_locally (I ran the code in this environment's Chromium). Confidence is my confidence that the claim is true AND usable for TabeebX, not a measure of how popular it is.

## Scope and method

Researcher: Claude (Sonnet 5.5), for Yaqoob. Evidence is labelled per finding; where a number is my own design proposal rather than a source's, the finding says "proposal" and gives a low confidence.

What I searched (12 WebSearch calls, standard mode):
- Material 3 easing and duration tokens (3 queries), Material duration guidance, Apple Human Interface motion, TikTok creative best practices, Meta Reels creative best practices, the Facebook and Nielsen first-three-seconds study, Netflix Arabic timed text reading speed, kinetic type hold times, 2.5D parallax on flat art, Arabic text and per-letter splitting, seamless loops.

What I read in full or in part (21 page fetches with curl through the allowed proxy, each saved to its own directory in the session scratchpad and treated as untrusted data):
- web.dev animations guide; MDN `Animation.currentTime`, `d`, `counter`, `@property`; Material Components Android `Motion.md` (M3 tokens); Material 1 duration and easing page and choreography page; TikTok Ads creative best practices (last updated June 2025); Wikipedia "Twelve basic principles of animation"; CSS-Tricks "SVG line animation"; Netflix Backlot Arabic Timed Text Style Guide and General Requirements; Tiger Pistol vertical-video guide (2026) and Adsmurai Reels page; GSAP `splitArabicText` page; easings.net data file.
- Local file read: `.claude/skills/design-studio/SKILL.md` and `scripts/render.mjs` (the renderer's seek loop).

What I tested locally (Chromium through Playwright, using the project's own `render.mjs frames` command and small scripts; test pages and frames are in the session scratchpad, not in the repo; I viewed 5 of my own renders): fill-mode and seek behaviour, WAAPI seek, a right-to-left clip-path wipe on Cairo Arabic, an `@property` integer counter with Eastern Arabic digits, an SVG `stroke-dashoffset` draw, a `d: path()` morph with matched and mismatched start nodes, Cairo digit widths and Arabic word widths, and the cubic-bezier maths.

What was blocked or failed:
- The WebFetch tool returned a DNS error (ENOTFOUND) for every host I tried (m3.material.io, ads.tiktok.com, web.dev, MDN, api.flutter.dev, schoolofmotion.com). I used curl on the same hosts instead; they returned HTTP 200 except one School of Motion URL (404, a URL I guessed).
- A Bash call to read the proxy's README and status page was denied by the permission system; I did not retry or work around it.
- Reddit: WebSearch with `allowed_domains: ["reddit.com"]` failed twice with a 400 error (domain not accessible to the search agent). One plain query naming r/MotionDesign returned no Reddit threads. So there is NO Reddit evidence in this file, and I did not attempt a thread fetch because no thread URL surfaced and I will not guess one. There is no Perplexity connector.
- m3.material.io is a script-rendered page (its text is empty without a browser); the Material 3 numbers come from the Android library's copy of the tokens.
- The Apple HIG page via curl was an empty shell; Apple's guidance is from search snippets only.
- facebook.com, instagram.com and tiktok.com were not visited: this topic did not need creator profiles. Meta's official creative guidance sits on facebook.com, so Meta claims in this file come from vendor blogs and are marked as such.
- No video was rendered or watched. All motion judgements are from maths, seek tests and still frames; they need a rendered clip checked at phone size before anyone treats them as proven.

## Findings

### F1. Easing curves: the cubic-bezier values from Material 3 (and the older Material 1 set)

- Claim: Material's Android library documents these as the Material 3 easing tokens, with CSS-ready values.
  - Standard: `cubic-bezier(0.2, 0, 0, 1)` (animations that begin and end on screen).
  - Standard decelerate: `cubic-bezier(0, 0, 0, 1)` (enter).
  - Standard accelerate: `cubic-bezier(0.3, 0, 1, 1)` (exit).
  - Emphasized decelerate: `cubic-bezier(0.05, 0.7, 0.1, 1)` (enter, expressive).
  - Emphasized accelerate: `cubic-bezier(0.3, 0, 0.8, 0.15)` (exit, expressive).
  - Linear: `cubic-bezier(0, 0, 1, 1)`.
  - Material 1 (older) set, with CSS values printed on the page: standard `cubic-bezier(0.4, 0, 0.2, 1)`, deceleration (ease out, for entering) `cubic-bezier(0, 0, 0.2, 1)`, acceleration (ease in, for leaving) `cubic-bezier(0.4, 0, 1, 1)`, sharp `cubic-bezier(0.4, 0, 0.6, 1)`.
- Why it works: motion should accelerate and decelerate asymmetrically, so it does not look mechanical (Material 1 page). Entering things arrive at full speed and settle slowly; leaving things speed up and are gone (Material 1 page).
- How TabeebX applies it (1080 x 1920, 30 fps, so one frame is 33.3 ms):
  - Define five CSS variables once and use only these. Enter: `--ease-in-view: cubic-bezier(0.05, 0.7, 0.1, 1)` (emphasized decelerate; it has a fast start and a long soft landing, which suits big headline words). Exit: `--ease-out-view: cubic-bezier(0.3, 0, 0.8, 0.15)` (emphasized accelerate). Reposition of something already on screen: `--ease-move: cubic-bezier(0.2, 0, 0, 1)`. Utility fades: `cubic-bezier(0, 0, 0.2, 1)` enter, `cubic-bezier(0.4, 0, 1, 1)` exit.
  - Never use the CSS keyword `ease`, `ease-in-out` or `linear` for text or shapes. Use `linear` only for counters, progress bars and continuous camera drift.
  - Gotcha for a code-rendered designer: in CSS `@keyframes`, the `animation-timing-function` applies to each keyframe interval, not to the whole animation. A 3-keyframe animation (0%, 50%, 100%) eases twice. For one curve across the whole move, use two keyframes only (`from` and `to`) or the Web Animations API with `easing` set on the effect.
- Source: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md (M3 tokens, GitHub copy of the Android docs) and https://m1.material.io/motion/duration-easing.html (M1 curves with CSS values).
- Evidence type: page_read (both).
- Confidence: 92% that the values are what Material publishes (two pages agree with each other where they overlap; I could not open m3.material.io itself because it is a script-rendered page, so the M3 numbers come from the Android docs copy). 70% that they are the best curves for a video (they were designed for touch UI, not for video; the transfer is my judgement).

### F2. Duration scale: how long things take (Material 3 tokens and Material 1 mobile numbers)

- Claim (M3 duration tokens, Android docs): short1 50 ms, short2 100, short3 150, short4 200, medium1 250, medium2 300, medium3 350, medium4 400, long1 450, long2 500, long3 550, long4 600, extra-long1 700, extra-long2 800, extra-long3 900, extra-long4 1000 ms. The docs say duration should increase as the area or travel distance of the animation increases.
- Claim (Material 1, mobile): transitions on mobile typically take 300 ms; large, complex full-screen transitions up to 375 ms; elements entering the screen 225 ms; elements leaving 195 ms; transitions over 400 ms "may feel too slow"; tablet about 30% longer; wearables about 30% shorter; entering is slower than leaving.
- Why it works: leaving motion is shorter because the viewer's attention has already moved on; entering motion is longer because the eye must find the new object.
- How TabeebX applies it (a video viewer is passive and watching a full-screen canvas, so I scale up from phone-UI numbers; this scaling is my inference, see confidence):
  - Headline or key word enters: 400 ms (12 frames) with emphasized decelerate. Allowed range 300 to 500 ms. A move of 200 px or more uses the 500 ms standard curve instead (see F4).
  - Supporting line enters: 300 ms (9 frames), starting 100 ms after the key word begins (see F7). F4 explains when to use a 500 ms standard curve instead of the 400 ms emphasized one.
  - Anything exits: 200 ms (6 frames) with emphasized accelerate. Range 150 to 200 ms (this matches the existing design-studio rule of 150 to 200 ms).
  - Icons, ticks, small shapes under 200 px: 150 to 250 ms.
  - Nothing that carries meaning longer than 600 ms to arrive, except one planned hero move per video (up to 800 ms).
  - At 30 fps prefer durations that are whole frames: 200, 300, 400, 500 ms (6, 9, 12, 15 frames). 150 ms is 4.5 frames and ends between frames, so use 133 ms (4 frames) or 167 ms (5 frames) if you need the short exit.
- Source: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md and https://m1.material.io/motion/duration-easing.html
- Evidence type: page_read (both).
- Confidence: 93% for the published numbers. 65% that the scaled-up video values are right; they agree with our existing rule (enter 250 to 400 ms, exit 150 to 200 ms) and need a test on real renders.

### F3. Build rule for the deterministic renderer: how the page gets seeked

- Claim: our renderer (`.claude/skills/design-studio/scripts/render.mjs`, Chromium through Playwright) does `for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; }`, then calls `window.__seek(t)` if it exists, then takes a screenshot at t = i * 1000 / fps. MDN confirms `Animation.currentTime` is in milliseconds, readable and settable, running or paused, and for an animation with a delay it includes the delay (the generic 50% seek is `effect.getComputedTiming().delay + activeDuration / 2`).
- Why it matters: anything that is not a CSS animation or a Web Animation is invisible to the seek and will not move (JS timers, `requestAnimationFrame`, `setTimeout`, class changes made by script while the page runs, `<video>` elements, and SMIL `<animate>`; I did not test SMIL, but as far as I know `getAnimations()` does not return it). Animations that are finished and have no fill are no longer returned by `getAnimations()`, so a later seek cannot bring them back.
- How TabeebX applies it (rules for every motion page):
  1. Every animation uses `animation-fill-mode: both` (or `fill: 'both'` in WAAPI). This holds the first keyframe during the delay and the last keyframe after the end, so a frame at any t is complete.
  2. Put all timing in one place: a `--t0` offset per element as `animation-delay` in ms, and a duration. Do not use `animation-iteration-count: infinite` except for loops that are meant to run through the whole video.
  3. Animate only `transform`, `opacity`, `clip-path` and (for SVG) `stroke-dashoffset` and `d`. web.dev advises restricting animation to `opacity` and `transform` to stay on the compositor; for a screenshot-per-frame renderer performance matters less, but these properties also have the least surprising interpolation.
  4. For anything that needs script (a counter, a text swap), write the page so a pure function `render(tMs)` sets everything, and export `window.__seek = (ms) => render(ms)`. Call `render(0)` on load so a still at 0.0 s is complete.
  5. The renderer already waits for `document.fonts.ready`. Link fonts and images by local path only; nothing that loads late.
  6. Check list for a designer: render `frames --at 0,0.5,1,2,...` and confirm that t = 0.0 shows the hook fully formed.
- Local test (Chromium through Playwright, the same engine and the same seek loop as `render.mjs`; test pages are in the session scratchpad, not in the repo):
  - A CSS animation with no fill and a short duration (50 ms) had already finished 500 ms after load and was no longer returned by `document.getAnimations()`: the list held `a:finished` (fill `both`), `c` and `d` (running), and not `b` (fill none). So `b` was never seeked and stayed at its start position in every frame, i.e. its motion is lost.
  - With fill none, an animation seeked past its end also drops out of the list, so a later seek back to an earlier time does not rewind it (x stayed 0 where fill `both` gave 107 px at t = 1000 ms). Fill `both` animations rewound correctly.
  - WAAPI works the same way: `el.animate(keyframes, { duration, delay, fill: 'both', easing })` created synchronously at load is returned by `getAnimations()`, and `currentTime` includes the delay (an animation with 200 ms delay and 1000 ms duration, seeked to 700 ms, showed the 500 ms point of its curve: 351 px of 400 px with `cubic-bezier(0.2, 0, 0, 1)`, as the maths predicts). Before the delay the first keyframe is held. Per-effect `easing` applies to the whole animation, not per keyframe.
  - CSS `@property` custom properties animated in `@keyframes` are seeked too (see the counter finding).
- Source: /home/user/marketing-agents/.claude/skills/design-studio/scripts/render.mjs (lines 33 to 36), https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime and https://web.dev/articles/animations-guide
- Evidence type: page_read (MDN, web.dev), file read (render.mjs), tested_locally (the fill-mode and WAAPI results above).
- Confidence: 95% for what the renderer does, what `currentTime` means and the fill-mode result (I observed it). 90% that fill `both` on every animation is enough to make any frame time correct; I did not test every property type.

### F4. What the curves actually do at 30 fps (computed, not quoted)

- Claim: I solved the cubic-bezier curves numerically (script in the session scratchpad, not in the repo). Share of the duration at which the move reaches 50%, 90% and 98% of its distance:

  | Curve | 50% | 90% | 98% | Peak |
  |---|---|---|---|---|
  | Emphasized decelerate `0.05, 0.7, 0.1, 1` | 6% | 36% | 65% | 1.000 |
  | Standard `0.2, 0, 0, 1` | 20% | 54% | 77% | 1.000 |
  | Standard decelerate `0, 0, 0, 1` | 13% | 52% | 77% | 1.000 |
  | easeOutQuart `0.25, 1, 0.5, 1` | 16% | 44% | 64% | 1.000 |
  | Emphasized accelerate `0.3, 0, 0.8, 0.15` | 81% | 97% | 99.5% | 1.000 |
  | Standard accelerate `0.3, 0, 1, 1` | 61% | 93% | 99% | 1.000 |
  | easeOutBack `0.34, 1.56, 0.64, 1` | 13% | 30% | 35% | 1.098 |

- Why it matters: on a 400 ms emphasized-decelerate enter, half the distance is covered in about 25 ms, which is less than one frame at 30 fps (33.3 ms). The first rendered frame after the start already shows the object about 55 to 60% of the way there. A 500 px move therefore looks like a snap plus a long settle, not like a glide. That can be right for a punchy word, but it can read as a jump cut for a big travel.
- Exits are back-loaded: with emphasized accelerate, an object has covered only 50% of its distance at 81% of the exit time. A 200 ms exit is visually still for about 160 ms and then leaves in 1 to 2 frames. A fade-out with this curve stays near full opacity and then vanishes.
- How TabeebX applies it:
  - Travel of 200 px or more (a card or a whole line sliding in): use standard `cubic-bezier(0.2, 0, 0, 1)` at 500 ms (15 frames; 90% in place by 270 ms). Travel under 200 px, plain fades and scale-ins under 15%: emphasized decelerate at 400 ms (90% in place by 144 ms, soft tail to 260 ms).
  - Exits: if the exit is meant to be seen, use `cubic-bezier(0.4, 0, 0.6, 1)` (Material 1 "sharp") for 200 ms, which is symmetrical, instead of the back-loaded accelerate curves. If the exit is only a clean-up before the next beat, use `cubic-bezier(0.3, 0, 1, 1)` for 150 ms.
  - Count a line as "readable" from the time its main move reaches 98% (65 to 77% of the enter duration), so hold time starts there: 400 ms enter, readable at about 260 ms; 500 ms enter, readable at about 385 ms.
  - The renderer takes `--fps`. Higher fps (for example 60) would smooth fast snaps but doubles render time and I have not verified which fps each platform keeps; treat 30 fps as default.
- Source: computed from the cubic-bezier values in F1 (script: scratchpad `scripts/bez.mjs`); the sharp curve value `cubic-bezier(0.4, 0.0, 0.6, 1)` is on https://m1.material.io/motion/duration-easing.html.
- Evidence type: tested_locally (computation) plus page_read for the curve values.
- Confidence: 95% that the numbers are right (they are maths). 70% that the recommended splits (200 px threshold, 500 ms) look right on screen; they need one render and a look.

### F5. Hook: what is on screen at 0.0 s, and when the proposition arrives

- Claim A (official, TikTok Ads help, last updated June 2025): put the hook within the first 6 seconds, introduce the content proposition within the first 3 seconds "for better recall and awareness", use captions or text overlays, follow the structure hook, unique selling points, clear call to action, and use "transitions, stickers, and graphics" to keep engagement.
- Claim B (secondary, 2016): Facebook with Nielsen reported that up to 47% of a video campaign's value is delivered in the first three seconds and up to 74% in the first ten (Facebook's Spanish newsroom post and Marketing Dive's report of it; I did not read the study itself, and it is self-interested and 10 years old).
- Claim C (vendor blog, Tiger Pistol; undated, but it cites a March 2026 Meta change): hooks open with motion, a tight face, an unexpected visual or a direct claim naming the viewer's situation; they "place branding inside the action rather than ahead of it"; a logo card, a slow zoom or a brand reveal in the first second "loses the impression"; lead with the payoff; on-screen text that lands the value in five words or fewer. It also says 9 to 15 seconds performs best for in-feed TikTok and Reels ads (no data shown).
- Why it works: a still frame has to carry the idea because people decide fast and the sound is off.
- How TabeebX applies it (all numbers are my design proposal built on A to C; 1080 x 1920):
  - Frame at 0.0 s is the finished hook composition, not a build-up: setup line 72 px, key word 216 px (a 3:1 size ratio, which is what the Scher lens asks for; I treat 3:1 in type size as the target and 2.5:1 as the lowest I would accept, because area grows with the square of size), key word Cairo 800, setup line Cairo 700, white on navy `#181943`. Text fully visible at t = 0, as the design-studio skill already requires.
  - The static logo is on screen from 0.0 s, at about 280 px wide (our file is a 1080 px JPG so do not go past about 300 px), inside the safe band, never animated in, never a sting. This answers the Rand lens ("sign from the first frame") and also respects Claim C because the logo is part of the layout, not a card in front of it.
  - Something is already moving at frame 1 so the first second is not dead: a continuous linear camera push (see the camera finding) from `scale(1)` that never eases in, or a looping pulse on the payoff symbol. The motion carries no meaning; the words do.
  - First change at 1.8 to 2.4 s (after the hook words have been held long enough to read, see the reading-time finding), not earlier. The proposition (what TabeebX does) must be visible by 3.0 s. The hook word group must be 5 words or fewer in total.
  - Never open on black, a fade-in from black or an empty frame.
- Source: https://ads.tiktok.com/help/article/creative-best-practices (A); https://about.fb.com/es/news/2016/02/capta-la-atencion-con-nuevas-funcionalidades-para-anuncios-de-video/ and https://www.marketingdive.com/news/facebook-offers-tips-for-converting-tv-ads-to-mobile/448510/ (B, via search snippets; note that a separate Nielsen brand-lift stat of 47% for ad recall at three seconds or fewer is a different number and easy to confuse with this one); https://tigerpistol.com/vertical-video-ad-best-practices/ (C).
- Evidence type: page_read (A, C), search_snippet (B).
- Confidence: A 92% (official, I read it). B 55% as a current truth (old, self-interested, not read). C 50% (vendor opinion without shown data). The TabeebX numbers (216 px / 72 px, first change 1.8 to 2.4 s) are my proposal at 60%.

### F6. Reading time and hold times for Arabic on screen

- Claim: Netflix's Arabic timed text guide gives a reading speed limit of up to 20 characters per second for adult programmes (17 for children's) and 42 characters per line; Netflix's general requirements set a minimum of 5/6 of a second (about 830 ms) and a maximum of 7 seconds per subtitle event. These are ceilings for subtitles read while watching, not targets.
- Why it works: it is the nearest published, tested limit for Arabic reading speed on screen.
- How TabeebX applies it:
  - Keep the existing formula as the default: hold = 500 ms + 450 ms per word, minimum 1.5 s. Examples: 3 words 1.85 s, 4 words 2.3 s, 5 words 2.75 s, 6 words 3.2 s. For a 4-word line of about 20 characters that is about 9 characters per second, which is under half of Netflix's ceiling. This is deliberately generous, because sound-off viewers also have to read the picture.
  - Measure hold from "readable" (see the curve finding: main move at 98%) to the start of the exit, and add the 150 to 200 ms exit time outside it.
  - A flash of 1 to 2 words (emphasis only) may be shorter than the formula but never under 830 ms from fully entered (Netflix minimum event), so 1 word = 900 ms, 2 words = 1200 ms.
  - Ceiling rule for QA: characters in the line divided by hold in seconds must not exceed 20; target 8 to 12.
  - For the hook, if a test shows 2.3 s is too slow, the floor for a 4-word hook is 1.6 s (about 12.5 characters per second); do not go lower.
- Source: https://backlothelp.netflix.com/hc/en-us/articles/215517947 (Arabic guide, section 15 Reading Speed Limits) and https://backlothelp.netflix.com/hc/en-us/articles/215758617 (general requirements).
- Evidence type: page_read (both).
- Confidence: 90% for the published Netflix numbers. 65% that 20 characters per second transfers to a 15 to 20 s explainer (different task: Netflix viewers also listen). The TabeebX hold table is the existing skill rule plus my arithmetic; the conversion of words to characters assumes about 5 characters per Arabic word, which I did not source (50%).

### F7. Stagger offsets between elements

- Claim: Material 1 choreography says that when several new surfaces appear at once they should be quickly staggered along one direction to make a clear focal path, that grid items populate left to right and top to bottom, that items should not all appear at once, and that you "do not wait for each item to fully animate" before the next, beginning each staggered entrance "no more than 20ms apart" (a UI list rule).
- Why it works: a short offset sets a reading order and gives a sense of one gesture instead of a flash.
- How TabeebX applies it: 20 ms is under one frame at 30 fps, so for video translate it into frames. Stagger whole elements (a line, a word group, an icon) by 3 frames = 100 ms; range 2 to 4 frames (67 to 133 ms). Never stagger letters. Order follows reading direction: first element on the right, the next to its left, or top to bottom. Maximum 3 staggered items per beat and the last item must start within 300 ms of the first. For a headline plus a supporting line plus a symbol: key word at +0 ms, supporting line at +100 ms, symbol at +200 ms, all with the same enter duration.
- Source: https://m1.material.io/motion/choreography.html
- Evidence type: page_read.
- Confidence: 90% for the quoted Material 1 principle. 55% that 100 ms is the best video stagger (my translation).

### F8. Anticipation and overshoot, and what is safe for Arabic

- Claim: Disney's twelve principles (Thomas and Johnston, 1981, as summarised on Wikipedia): anticipation prepares the audience for an action, staging directs attention to what matters most ("completely and unmistakably clear"), follow-through and overlapping action let parts continue after the body stops, and slow in and slow out gives natural acceleration. Apple's Human Interface Guidelines say motion should be purposeful, brief and precise, and not the only carrier of important information. The standard overshoot easing is `cubic-bezier(0.34, 1.56, 0.64, 1)` (easeOutBack), which I computed overshoots by 9.8% of the distance and settles by about 35% of its duration.
- Why it works: a small anticipation before a pop and a small overshoot after give a symbol weight, so the "payoff symbol" moment feels designed.
- How TabeebX applies it:
  - Payoff symbol or other non-text shape (the symbol must be ownable, not a map pin; see Gaps): enter with opacity 0 to 1 and `scale(0.6)` to `scale(1)` over 400 ms with `cubic-bezier(0.34, 1.56, 0.64, 1)`. Overshoot is 9.8% of the 0.4 travel, so the peak is about `scale(1.04)` and it is within 2% of final by about 140 ms (35% of 400 ms). Optional anticipation: 150 ms of `scale(1)` to `scale(0.94)` with `cubic-bezier(0.4, 0, 0.6, 1)` immediately before a pop of an object already on screen. Cap overshoot at about 6% of size or 24 px of travel on a 1080 canvas. (A smaller start such as 0.94 to 1 would overshoot by only 0.6%, which is invisible; the overshoot is a share of the distance travelled.)
  - Arabic words and lines: no anticipation, no overshoot, no bounce, no scale-pop. Use a decelerate-only enter (F1 curves) so the word lands without crossing its final position. This matches the existing design-studio rule ("No bounces, spins or scale-pops on Arabic"). Follow-through is allowed only on a different element: for example the supporting line starting 100 ms after the key word (F7).
  - If an Arabic line must scale, keep it between `scale(0.96)` and `scale(1)` so it reads as a settle, not a pop.
- Source: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation (principles, page_read), https://developer-mdn.apple.com/design/human-interface-guidelines/foundations/motion and https://developer.apple.com/tutorials/data/design/human-interface-guidelines/motion.json (Apple, via search snippet), https://raw.githubusercontent.com/ai/easings.net/master/src/easings.yml (easeOutBack value, page_read).
- Evidence type: page_read (Wikipedia, easings.yml), search_snippet (Apple).
- Confidence: 85% for the principles and the easing value. The pixel and scale numbers are my proposal at 55%.

### F9. Mask and wipe reveals of Arabic text (the Arabic-safe way to "write on" a line)

- Claim: per-letter splitting breaks Arabic. GSAP's own Arabic helper page says a letter has up to four shapes (isolated, initial, medial, final) and that when text is split into characters each one loses its neighbours and is drawn in its isolated form, which makes the text look broken; GSAP's fix is to split by word. Framer's marketplace describes a mask-based reveal over unsplit text as the shape-safe alternative (search snippet). Our design-studio skill already allows "reveal intact text with a mask".
- Why it works: the browser shapes the whole line once; the mask only decides which part is visible, so joins are never touched.
- How TabeebX applies it (tested in Chromium; frames viewed, see Scope):
  - One Arabic line per element (`white-space: nowrap; width: fit-content; direction: rtl`), never one element per letter. Lines that wrap are separate elements.
  - Right-to-left wipe with a hard edge: `@keyframes wipe { from { clip-path: inset(-0.3em 0 -0.3em 100%) } to { clip-path: inset(-0.3em 0 -0.3em 0) } }`. The first value is top, then right, bottom, left, so `left: 100%` hides everything and the visible region grows from the right edge towards the left. The `-0.3em` top and bottom keep dots and descenders from being cut. In the viewed frame the join shapes stayed intact and the dots survived.
  - Use `fit-content`, not a wide fixed box: in my first test the box was 900 px wide and the text 665 px, so the clip swept 234 px of empty space and the text looked finished at 33% of the time. A wipe is perceived in the time it crosses ink.
  - Timing: 500 ms for a key word or line up to 720 px wide, with `cubic-bezier(0.4, 0, 0.2, 1)` (Material 1 standard) so the sweep is visible; the sharper `0.2, 0, 0, 1` front-loads it (50% of the sweep in the first 20% of the time). Line 2 starts 100 ms after line 1 (see stagger finding). Use `animation-fill-mode: both` and a `--t` delay variable.
  - Hard edge only. A soft edge would need an alpha gradient mask; the palette rule says no gradients, so I keep to a hard edge and list the soft edge as a question for Yaqoob.
  - The same technique works on a pink bar or underline: `transform: scaleX(0)` to `scaleX(1)` with `transform-origin: right center` (right-to-left).
  - Size fit for a 720 px safe width (Cairo 800 measured in Chromium): about 0.42 to 0.46 em per letter, so 216 px fits 7 letters on one line (measured: 5 letters = 495 px, 6 letters = 603 to 642 px, 7 letters = 640 px). An 11-letter phrase measured 1152 px at 216 px, which does not fit; stack two lines of at most 7 letters or reduce the size, keeping at least 2.5:1 over the setup line.
- Source: https://gsap.com/docs/v3/HelperFunctions/helpers/splitArabicText (page_read); https://www.framer.com/marketplace/components/shape-safe-reveal/ (search snippet); local test pages and frames in the session scratchpad.
- Evidence type: page_read (GSAP), search_snippet (Framer), tested_locally plus image_viewed (my own render).
- Confidence: 93% that splitting by letter breaks joins and that a mask over whole lines is safe (GSAP states it, my frame confirms the joins). 80% that 500 ms with M1 standard looks right (not seen in motion).

### F10. Number counters

- Claim: CSS can animate an integer through `@property`, and `counter(name, arabic-indic)` prints it as Eastern Arabic digits, which our skill requires for copy. I built `@property --n { syntax: '<integer>'; initial-value: 0; inherits: false }`, `.cnt { counter-reset: n var(--n); animation: count 1200ms linear 300ms both }`, `.cnt::after { content: counter(n, arabic-indic) }` and `@keyframes count { from { --n: 0 } to { --n: 100 } }`. Seeked by the project renderer: t = 0.5 s showed "١٧" (16.7 expected at 200 ms of 1200 ms) and t = 3 s showed "١٠٠". In the vendored Cairo, all ten Eastern Arabic digits have the same advance (53.7 px at 100 px, 0.537 em), so a counter does not jitter sideways when digits change (width differs only when the digit count changes).
- Why it works: a count-up makes a number feel earned and gives the eye something to follow while the sound is off.
- How TabeebX applies it:
  - Only for a real figure from `tabeebx-brand` or a data file, written as a `[number]` placeholder until Yaqoob confirms it. A count-up must never present an invented figure. The 0 to 100 above is a test value only.
  - 900 to 1200 ms, `cubic-bezier(0.2, 0, 0, 1)` (reaches 98% at 77% of the time, so the last digits settle slowly and the final value is readable early), then hold the final value for at least 1.5 s. Start no earlier than the hook is read.
  - At t = 0 the counter shows "٠", an Eastern Arabic zero, drawn as a dot. If the number is the hook, show the final number at 0.0 s and animate something else (a ring or bar) instead of counting.
  - Size: 216 px Cairo 800 for the number if it is the key word, with a 72 px unit line, which keeps the 3:1 ratio. Latin digits only for phone numbers and handles (skill rule).
  - Alternative for a text swap: a pure function in `window.__seek(ms)` that sets `textContent` from `Math.round(lerp(...))` and formats it with `new Intl.NumberFormat('ar-IQ-u-nu-arab', { useGrouping: false }).format(n)`. I checked in Node 22 only (not in Chromium) that `ar-IQ` prints Eastern Arabic digits (it printed "١٬٢٣٤" for 1234, with an Arabic thousands comma, hence `useGrouping: false`).
- Source: https://developer.mozilla.org/en-US/docs/Web/CSS/@property and https://developer.mozilla.org/en-US/docs/Web/CSS/counter (page_read: `@property` syntax and counters); local test (frames viewed, digit widths measured).
- Evidence type: page_read (MDN, general), tested_locally plus image_viewed (the counter behaviour and digit widths).
- Confidence: 92% that the technique works in our renderer (I ran it). 55% that a counter is a good idea for TabeebX; it depends on having a real number to show.

### F11. SVG path drawing (a line that draws itself)

- Claim: the standard technique is `stroke-dasharray` set to the path length and `stroke-dashoffset` animated from that length to 0; CSS-Tricks measures the length with JS `getTotalLength()` and shows `path.animate({ strokeDashoffset: 0 }, 1000)`. Setting `pathLength="1"` on the path so the dash values are just 1 is my variant (not on that page); it avoids measuring and worked in my test.
- Why it works: it reads as "someone is drawing this", which carries a sequence (step 1, step 2, step 3) without words.
- How TabeebX applies it (tested, frames viewed):
  - `<path pathLength="1" d="...">` with `stroke-dasharray: 1; stroke-dashoffset: 1; animation: dash 800ms cubic-bezier(0.2, 0, 0, 1) var(--t) both` and `@keyframes dash { to { stroke-dashoffset: 0 } }`. At t = 0 nothing is visible, even with `stroke-linecap: round` (no stray dot in my render). At 0.5 s the first stroke of my test check mark was finished and the second half drawn; at 3 s it was complete.
  - 600 to 900 ms per path. For a 3-step explainer use three short connector paths, each drawn in 600 ms just before its step appears (so the line leads the eye to the step), instead of one long stroke that finishes in the first second and leaves the rest of the beat static.
  - Draw direction follows reading direction: author the path so it starts at the right and moves left, or top to bottom. Do not mirror a check mark, number or clock.
  - Stroke 12 to 18 px at 1080 wide, `stroke-linecap: round`, `stroke-linejoin: round`, navy, white or blue only. For an outline that then fills, animate `fill-opacity` from 0 to 1 over 200 ms after the stroke ends.
  - If the page uses WAAPI: `path.animate({ strokeDashoffset: [1, 0] }, { duration: 800, fill: 'both', easing: 'cubic-bezier(0.2, 0, 0, 1)' })`; the CSS-Tricks page shows the same call.
- Source: https://css-tricks.com/svg-line-animation-works/
- Evidence type: page_read (the dash technique), tested_locally plus image_viewed (the `pathLength` variant).
- Confidence: 93%.

### F12. Shape morphs and match cuts

- Claim: the CSS `d` property accepts `d: path("...")` and animates between two paths when they have the same number and types of commands (MDN's example notes that its second path has the same number of data points as the first, which is what makes it animatable). In my test, Chromium animated it under the renderer's seek loop.
- What I saw (frames viewed): a circle-like path morphing to a rounded square. When the two paths started at different nodes (circle at the top centre, square at the top-left corner), the middle frames were twisted and lopsided. When both started at the top centre and ran clockwise with the same four curve segments, the middle frames were a clean, evenly growing rounded square.
- Why it works: a morph links two ideas in one gesture (a pin becomes a tick; a circle becomes the app card), and a match cut (the next card starts from the same shape, in the same place, at the same size) hides the edit.
- How TabeebX applies it:
  - Author both shapes with identical command lists and the same start node and winding, in one SVG file; keep to 4 to 8 cubic segments. 600 to 800 ms, `cubic-bezier(0.2, 0, 0, 1)`. Animate only `d` and, if needed, `transform`. No colour change mid-morph other than navy to white, blue to white, or the one pink group.
  - Match cut between two cards: the last 300 ms of card A scales or morphs one persistent element (for example the payoff symbol's outline) to the exact position and size it has in card B; then card B's other elements enter around it. This makes the symbol the "ownable" thread of the video (the Glaser and Bass lenses ask for an ownable payoff symbol, not a generic pin).
  - Browser note: the CSS `d` property is for Chromium, which our renderer uses. It is a render-time choice, not a deliverable concern, because the output is an MP4.
- Source: https://developer.mozilla.org/en-US/docs/Web/CSS/d (page_read); local test frames.
- Evidence type: page_read (MDN), tested_locally plus image_viewed.
- Confidence: 92% for the mechanics. 60% that a morph is the right ownable-symbol device for TabeebX (a design judgement that needs a thumbnail test).

### F13. Transitions between cards

- Claim: Material's Android docs give the defaults for its shared-axis and fade-through transitions as 300 ms (`motionDurationLong1` in the doc's table), using the standard easing; the fade-through pattern fades the outgoing content out and then the incoming content in. The Material 1 duration page says transitions over 400 ms may feel too slow and that leaving elements should be shorter than entering ones (195 ms vs 225 ms).
- Why it works: a consistent, short transition keeps the video reading as one object instead of five slides.
- How TabeebX applies it (my numbers):
  - One transition grammar per video. Default "shared axis X": outgoing card exits in 200 ms (`cubic-bezier(0.4, 0, 0.6, 1)`) with a 96 px move to the left; incoming card enters 100 ms before the outgoing is fully gone (overlap of about 100 ms), moving 96 px from the right with `cubic-bezier(0.2, 0, 0, 1)` over 500 ms, its elements staggered 100 ms. Total from first exit frame to readable new card: about 600 ms. Never leave more than 100 ms of empty navy between cards.
  - Content that persists (logo, progress bar, the payoff symbol) does not move or fade during the transition; this is what makes it a transition and not a cut to a new slide.
  - Optional fade-through: outgoing 150 ms fade out, then incoming 300 ms fade in with `scale(0.96)` to `scale(1)`; use it for the CTA card only.
  - A progress bar along the top inside the safe band (4 to 6 px high, blue) fills right to left across the whole duration with `linear` easing; it gives a rhythm cue at no cost. This is a proposal.
- Source: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md and https://m1.material.io/motion/duration-easing.html
- Evidence type: page_read.
- Confidence: 90% for the Material numbers (note: the Android doc is internally inconsistent, which looks like version drift: it lists the standard curve as `0.2, 0, 0, 1` in its token table but `0.4, 0, 0.2, 1` in its transition default tables, and its token table gives Long1 = 450 ms while the transition tables call 300 ms `motionDurationLong1`; I use 300 ms and the M1 curve for transitions because those tables state them as the defaults). 55% that my 96 px / 100 ms overlap values are best.

### F14. Camera pushes and parallax on flat artwork

- Claim: parallax on flat artwork works by splitting artwork into layers and moving each layer at a different rate (a Motion Array guide calls it 2.5D and contrasts it with a Ken Burns move of the whole image). I found no source with numeric values for a push-in on flat vector art.
- Why it works: a slow continuous push keeps the frame alive during holds, so a held text card is not a dead still, and different layer speeds give depth for free.
- How TabeebX applies it (my proposal, not sourced; confidence is low):
  - Put artwork (background shapes, symbol, icons) in a `.world` group and text in a separate `.type` layer. Animate `.world` only, so Arabic text is never scaled and always sits on the pixel grid and inside the safe zone.
  - Continuous push: `transform: scale(1) to scale(1.05)` over the whole duration, `linear`, `fill: both`, with `transform-origin` at the symbol's centre. At 18 s that is 0.28% per second and about 27 px of edge growth per side at 1080 wide, which stays inside the safe margins. One WAAPI call: `world.animate([{transform:'scale(1)'},{transform:'scale(1.05)'}],{duration:18000,fill:'both',easing:'linear'})`. I ran the same call with an end value of 1.06 under the seek loop and got scale 1.0300 at 9 s and 1.0600 at 18 s, so it seeks correctly.
  - Parallax: three layers (far, mid, near) pushed 1.02 : 1.04 : 1.06 (a 1:2:3 ratio) instead of one group. Do not exceed 1.08 on any layer.
  - Beat push: at the payoff, an extra `scale(1)` to `scale(1.08)` of the symbol's layer over 600 ms with `cubic-bezier(0.2, 0, 0, 1)`.
  - Risk: one vendor says a "slow zoom" in the first second loses the impression (Tiger Pistol, see F5). The 0.28%-per-second drift is far slower than a deliberate zoom, but test it on a phone.
- Source: https://blog.motionarray.com/learn/after-effects/animate-flat-2d-images-after-effects/ (concept, search snippet); https://tigerpistol.com/vertical-video-ad-best-practices/ (risk); local WAAPI seek test.
- Evidence type: search_snippet (Motion Array), page_read (Tiger Pistol), tested_locally for the seek only (not viewed as motion).
- Confidence: 80% for the technique in principle; 40% for the numbers (1.05, 1:2:3, 1.08), which are my choices.

### F15. Sound-off design and captions

- Claim: TikTok's official page advises captions or text overlays for context, and the vendor sources agree the ad must work with the sound off (Tiger Pistol: text that lands the value in 5 words or fewer; benly.ai via snippet: roughly 70 to 80% of Reels viewers have audio on, so design for both). The only published Arabic reading limit I found is Netflix's 20 characters per second (F6).
- Why it works: the sound is added (or not) by the viewer; the picture and the words must carry the full message.
- How TabeebX applies it:
  - Every key line is burned in as Cairo text (the design-studio skill already says so); no meaning is carried by sound.
  - Line length: at most 5 words per hook line, at most 7 words per other line, and at most 2 lines on screen at once.
  - Captions sit inside the safe band; contrast white on navy (16.7:1 in the skill).
  - Reading order is right to left, top to bottom; the first thing the eye lands on must be the key word (F5).
- Source: https://ads.tiktok.com/help/article/creative-best-practices; https://tigerpistol.com/vertical-video-ad-best-practices/; https://backlothelp.netflix.com/hc/en-us/articles/215517947; https://benly.ai/learn/meta-ads/meta-ads-reels-ads-guide (snippet only).
- Evidence type: page_read (TikTok, Tiger Pistol, Netflix), search_snippet (benly.ai).
- Confidence: TikTok 90%, Netflix 90%, Tiger Pistol 50%, benly.ai 35% (snippet of a vendor page). The line-length caps are my proposal at 55%.

### F16. Safe zones for text in 9:16 video (numbers to check, not to adopt yet)

- Claim (vendor, March 2026): Meta unified its Reels and Stories safe zones on a 1440 x 2560 canvas: keep critical elements outside the top 14%, the bottom 20 to 35% and 6% on each side; the bottom range is wider for Reels because captions and audio overlays vary. The same vendor says an on-creative CTA should clear the bottom 35% or it vanishes under the engagement stack, and that TikTok publishes no fixed safe zone (the usable area shifts), while TikTok's own page says to keep content visible within the UI safe zone "as per ad specifications".
- Converted to our 1080 x 1920 canvas: top 14% = 269 px; bottom 20% = 384 px and 35% = 672 px (content must end at y = 1536 or at y = 1248); sides 6% = 65 px.
- Compare with our rule (design-studio): text and key visuals inside y = 220 to y = 1420 and 180 px each side. The sides are safer than the vendor figure. The top (220 px) is 49 px less than the vendor's 269 px. The bottom (500 px = 26%) sits inside the vendor's 20 to 35% band but 172 px short of the strictest value for a CTA.
- How TabeebX applies it: leave the rule as it is for body text, but for the CTA and the logo on the end card keep everything above y = 1248, and keep the hook inside y = 269 or lower until Yaqoob confirms against Meta's own spec (which I could not read because facebook.com and instagram.com are off limits for this research).
- Source: https://tigerpistol.com/vertical-video-ad-best-practices/ and https://www.adsmurai.com/en/articles/meta-reels-ads (states the same 14% top / 35% bottom / 6% sides split).
- Evidence type: page_read (Tiger Pistol and Adsmurai; Adsmurai gives 14% / 35% / 6% without a canvas size or date).
- Confidence: 55% that the numbers match Meta's real spec (two vendors agree, no official page read).

### F17. End-card call to action

- Claim: TikTok says to end with a strong call to action ("Guide your audience on what to think, feel, or do with a strong CTA"). Tiger Pistol (vendor) says to reinforce the ask in the final 2 to 4 seconds, that specific verbs outperform generic ones, and that an on-creative CTA must clear the bottom 35%. Our skill already says: one call to action held for at least 2 s inside the safe band.
- Why it works: the last thing seen is the action; if the platform's own button or caption covers it, the video has no ask.
- How TabeebX applies it (18 s example; scale the times for 15 or 20 s):
  - CTA card enters at 15.0 s (500 ms, shared-axis enter from F13), is readable by about 15.4 s and then holds still to 18.0 s (2.6 s, more than the 2 s minimum). No exit animation on the last card unless the 200 ms loop exit from F18 is used, which still leaves a 2.4 s hold.
  - Structure on the card, top to bottom, all above y = 1248: payoff key words in 160 to 216 px; CTA line in Cairo 800 at 96 to 120 px (one verb phrase, 5 words or fewer, wording from the copywriter); the one pink element on this card is the CTA pill or underline; the logo at about 280 px wide in a fixed position (the same place as on every frame since 0.0 s); a WhatsApp or app handle in Western digits at 56 px or larger. All placeholders until Yaqoob confirms the actual contact and offer.
  - A single CTA only, not app + WhatsApp + website.
- Source: https://ads.tiktok.com/help/article/creative-best-practices and https://tigerpistol.com/vertical-video-ad-best-practices/
- Evidence type: page_read (both).
- Confidence: TikTok 90%; Tiger Pistol 50%; the sizes and times are my proposal at 55%.

### F18. Loop endings

- Claim: creator and vendor guides (search snippets) describe loops by exact-frame matching, a very short cross-dissolve (10 to 15 frames), a movement that hides the seam, or a script that reads as one continuous sentence; they say a loop needs a reason to restart and that claimed watch-time gains are unverified; typical loop length is 3 to 15 s.
- Why it matters: Reels and TikTok videos restart by themselves, so the last frame leads straight into the hook. A bad seam (the CTA card cut to the hook with no logic) reads as a glitch.
- How TabeebX applies it (proposal):
  - Make the loop an ordinary card transition: logo, background and any progress bar are on the same position at 17.9 s and 0.0 s; the CTA card's last 200 ms exit moves 96 px left (F13) and the hook composition at 0.0 s is already fully drawn, so the cut reads as "next card" with continuity.
  - Do not blend CTA text and hook text in a cross-dissolve (two Arabic lines on top of each other is illegible); use the exit move.
  - On an 18 s timeline the CTA holds 2.6 s and the 200 ms exit starts at 17.8 s, so the 2 s minimum hold from the skill is still met (2.4 s). If a piece cannot afford that, drop the exit and let the platform restart the video.
  - The first 0.0 s frame stays a finished still (F5), which also makes it a good cover frame.
- Source: https://project-aeon.com/blogs/make-a-video-loop, https://faceless.so/blog/seamless-loop-video-tutorial-for-short-form-content (search snippets, creator-marketing blogs).
- Evidence type: search_snippet.
- Confidence: 40% for the guidance (blogs, no data); 60% that treating the loop as a card transition is the safest design for Arabic text.

### F19. Putting it together: an 18 s beat sheet that answers the four critic weaknesses

- Claim: this is a synthesis of F1 to F18, not a finding from one source. Times in seconds on an 18 s timeline at 30 fps. Hold times follow F6 (500 ms + 450 ms per word, counted from readable). All figures are proposals for the designer to try and the critic to score.

  | Beat | Time | Content | Motion |
  |---|---|---|---|
  | 1 Hook | 0.0 to 2.5 | Setup line 72 px and key word 216 px (3:1), logo 280 px, all visible at 0.0 s | No entrance. Linear world push from frame 1. Exit 2.3 to 2.5 s |
  | 2 Situation | 2.4 to 6.0 | One line of up to 5 words (2.75 s hold), 96 px, plus a small symbol | Enter 500 ms shared-axis; line wipe 500 ms; symbol at +200 ms; exit 5.8 to 6.0 s |
  | 3 How it works | 6.0 to 11.6 | Three steps of 2 words each, joined by drawn connectors | Steps at 6.0, 7.7 and 9.4 s, each with its connector drawn 600 ms before it; number and word of a step staggered 100 ms; all stay; hold 1.6 s after the last is readable; exit 11.4 to 11.6 s |
  | 4 Payoff | 11.5 to 15.0 | The ownable symbol and 2 to 3 key words at 3:1 | Symbol pop 400 ms with `0.34, 1.56, 0.64, 1`; beat push 600 ms; hold at least 2.0 s; exit 14.8 to 15.0 s |
  | 5 CTA | 15.0 to 18.0 | CTA line, pill, logo, handle, all above y = 1248 | Enter 500 ms; still for 2.6 s |

- Why it works, mapped to the critic's weak lenses:
  - Scher (type is the image, 6.5 to 7.5): key word 3x the setup line, heaviest weight, enters first and alone; sizes in F5 and F9 (measured fit: 7 letters at 216 px in 720 px).
  - Glaser and Bass (payoff symbol generic, 7.0 to 7.5): the symbol is drawn on (F11), morphs from the first beat's shape (F12), and pops once with overshoot (F8); the same symbol returns in the CTA card, so it becomes the memorable object. Which symbol is a design decision outside this file (see Gaps).
  - Rand (logo scale and signing from first frame, 7.0): logo static at 280 px from 0.0 s to the end, never animated (F5, F17).
  - Cooper (rhythm and hold times, 7.0 to 7.5): uneven beat lengths (about 2.5, 3.6, 5.6, 3.5 and 3.0 s), every hold computed from word counts, one transition grammar, and something new on screen at least every 2 s (steps and connectors in beat 3 arrive 1.7 s apart).
- Source: derived; each element cites its own finding above.
- Evidence type: synthesis (no external source).
- Confidence: 55%. Treat as a hypothesis to be rendered and scored, not as a rule.

<!-- APPEND-FINDINGS-ABOVE -->

## Conflicts with our rules (proposals for Yaqoob)

Each item names the rule it touches, what the research suggests, and options for Yaqoob. Nothing here is applied; the designer should keep following the current rules until he decides.

1. Text speed on screen (design-studio: at most about 2.5 words a second; hold = 0.45 s per word + 0.5 s).
   - The research: TikTok's official page recommends "5-10 words per second when using text". That is about two to four times faster than our rule and than Netflix's Arabic ceiling (20 characters per second, roughly 3.5 words a second by my estimate). I think TikTok's figure describes how much text an ad can carry in total, not a comfortable reading speed for Arabic, but I could not confirm it.
   - Options: A) Keep our rule (my recommendation). B) Allow the hook only to go down to 1.6 s for 4 words (about 12.5 characters per second, still well under Netflix's ceiling). C) Follow TikTok's number (not recommended).
2. Polish level and people (TikTok official: "DIY or not overly polished", "featuring people such as creators, employees, or customers").
   - Conflicts with our designed, polished motion pieces and with the rule against invented or AI-presented people. Options: A) Ignore for motion-graphic pieces. B) Test one rougher, real-staff piece in a later week, with consent and the health-ad-policy check. C) Drop.
3. Logo timing (design-studio: logo appears within about 5 s).
   - The Rand lens asks for signing from the first frame; Tiger Pistol says to place branding inside the action and not to open on a logo card. My proposal in F5: the logo is on screen, static and 280 px wide, from 0.0 s (not a card, not animated). Options: A) Update the skill to "logo present and static from frame 1" (my recommendation). B) Keep 5 s. C) Static logo from 0.0 s only on pieces that open with a face-free typographic hook.
4. Motion at frame 1 (design-studio: second 0 must work as a still).
   - My proposal has a continuous, very slow camera push (0.28% per second) running from frame 1, still a finished composition at any paused frame. One vendor says a slow zoom in the first second "loses the impression". It is a vendor opinion without data. Options: A) Allow the push (and test it). B) No motion in the first 0.5 s except the payoff symbol's idle pulse. 
5. Enter durations above the skill's range (design-studio: enter 250 to 400 ms, exit 150 to 200 ms).
   - F4 suggests 500 ms with the standard curve for moves over 200 px, and F13 uses 500 ms for card transitions. Options: A) Allow up to 500 ms for large moves only (my recommendation). B) Keep 400 ms as the cap.
6. Safe-zone numbers (design-studio: y = 220 to 1420, 180 px sides).
   - A vendor's reading of Meta's March 2026 unified safe zone gives a top of 269 px and a bottom of 384 to 672 px on a 1080 x 1920 canvas (F16). Our top is 49 px smaller and our bottom limit is 172 px below the strictest value. Options: A) Keep 220 to 1420 for body text and apply y <= 1248 to the end-card CTA and logo only (my recommendation until Meta's official spec is checked). B) Adopt top 269 and bottom 1248 for everything. C) Keep as is.
7. Soft-edged masks (hard rule: no gradients).
   - A soft wipe edge would use an alpha gradient mask. It is not a colour gradient between brand colours, but it is a gradient. I used hard edges only. Options: A) Hard edges only (my recommendation). B) Allow alpha-gradient mask edges.
8. Overshoot and anticipation on Arabic (design-studio: no bounces, spins or scale-pops on Arabic).
   - Disney's principles and the overshoot curve would add energy, but I recommend them only for shapes and the payoff symbol (F8). Options: A) Keep the ban on Arabic (my recommendation). B) Allow a settle under 2% on whole Arabic words after a test. 
9. Unverified fact risk in counters (rule 3: no invented numbers).
   - Counters are only safe with a figure from our data. Every counter example in this file uses a test value and must be replaced with a confirmed `[number]`.

Nothing found conflicts with the palette, Cairo-only, one-pink-group, no-letter-spacing, no-letter-by-letter, logo-unaltered or the no-invented-people rules. Where I propose pink (the CTA pill), it is the single pink group on that frame.

## Gaps (not found)

- Reddit evidence (r/MotionDesign, r/AfterEffects, r/Design_Critiques): not found. The search tool refused the reddit.com domain, and a plain search returned no threads. Practitioner opinion on hold times, easing taste and "what looks cheap" is therefore missing; every such judgement here is from published guidance or my own reasoning.
- School of Motion articles: not read (one guessed URL returned 404; I did not spend a search on it).
- Meta's own creative guidance and Meta's official safe-zone spec: not read (facebook.com and instagram.com are off limits). Safe-zone numbers and Reels advice come from two vendor blogs.
- Official Material 3 page (m3.material.io): could not be rendered; one Android doc copy used, which contains two different "standard" curves (`0.2, 0, 0, 1` and `0.4, 0, 0.2, 1`).
- Apple Human Interface motion page: search snippet only.
- Independent evidence on the first 1 to 2 seconds: not found beyond TikTok's "first 3 seconds" and "first 6 seconds" lines, the 2016 Facebook and Nielsen figure (not read at source) and vendor claims ("Shorts viewers commit or swipe within 2 seconds", "hook rate above 30%"); I did not open those vendor claims' sources.
- Numeric guidance for camera pushes and parallax on flat vector artwork: not found. My 1.05 / 1:2:3 values are untested design choices.
- Best number of beats or cuts for a 15 to 20 s explainer: not found. One vendor says 9 to 15 s performs best on TikTok and Reels in-feed; no data shown. Our 15 to 20 s brief is longer than that, so the first 6 s have to do more work.
- Arabic-specific kinetic-type research (reading speed for animated Arabic, effect of mask wipes on reading): not found. The Netflix 20 characters per second limit is for subtitles; the characters-per-word figure I used (about 5) is unsourced.
- Which frame rates (30 vs 60 fps) Instagram, TikTok and Facebook preserve after upload: not found.
- Whether Chromium's `d: path()` morph, `@property` counters and `clip-path` wipes stay frame-exact across very long renders: only a handful of frames were checked; a full 18 s render has not been made.
- The ownable payoff symbol: this research does not choose one. The Glaser and Bass lenses need a design decision (a candidate set to compare), not motion research.
- Real-world look of any of the timing numbers: no clip was rendered or watched.

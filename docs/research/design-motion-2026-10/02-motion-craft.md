# Motion craft for 15 to 20 second vertical explainers and kinetic type

Research date: 2026-10-20. Status: STAGE 1 of a staged write (partial work survives a session limit). Sections marked PENDING are not yet filled.

Evidence types used: page_read (I read the page text), search_snippet (search-result summary only), article, image_viewed, profile_viewed. One extra type is added and labelled: tested_locally (I ran the code in this environment's Chromium). Confidence is my confidence that the claim is true AND usable for TabeebX, not a measure of how popular it is.

## Scope and method

PENDING (filled at the end).

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
  - Headline or key word enters: 400 ms (12 frames) with emphasized decelerate. Allowed range 300 to 500 ms. A move across more than half the canvas (over 540 px) may use 500 ms.
  - Supporting line enters: 300 ms (9 frames), starting 120 ms after the key word begins (see stagger finding when written).
  - Anything exits: 200 ms (6 frames) with emphasized accelerate. Range 150 to 200 ms (this matches the existing design-studio rule of 150 to 200 ms).
  - Icons, ticks, small shapes under 200 px: 150 to 250 ms.
  - Nothing that carries meaning longer than 600 ms to arrive, except one planned hero move per video (up to 800 ms).
  - Duration is multiples of 33.3 ms in practice: use 300, 400, 500 ms (9, 12, 15 frames) so no animation ends between frames.
- Source: https://raw.githubusercontent.com/material-components/material-components-android/master/docs/theming/Motion.md and https://m1.material.io/motion/duration-easing.html
- Evidence type: page_read (both).
- Confidence: 93% for the published numbers. 65% that the scaled-up video values are right; they agree with our existing rule (enter 250 to 400 ms, exit 150 to 200 ms) and need a test on real renders.

### F3. Build rule for the deterministic renderer: how the page gets seeked

- Claim: our renderer (`.claude/skills/design-studio/scripts/render.mjs`, Chromium through Playwright) does `for (const a of document.getAnimations()) { a.pause(); a.currentTime = t; }`, then calls `window.__seek(t)` if it exists, then takes a screenshot at t = i * 1000 / fps. MDN confirms `Animation.currentTime` is in milliseconds, readable and settable, running or paused, and for an animation with a delay it includes the delay (the generic 50% seek is `effect.getComputedTiming().delay + activeDuration / 2`).
- Why it matters: anything that is not a CSS animation or a Web Animation is invisible to the seek and will not move (JS timers, `requestAnimationFrame`, `setTimeout`, CSS transitions that need a class change, video elements, SMIL `<animate>`). Animations that are finished and have no fill are no longer returned by `getAnimations()`, so a later seek cannot bring them back.
- How TabeebX applies it (rules for every motion page):
  1. Every animation uses `animation-fill-mode: both` (or `fill: 'both'` in WAAPI). This holds the first keyframe during the delay and the last keyframe after the end, so a frame at any t is complete.
  2. Put all timing in one place: a `--t0` offset per element as `animation-delay` in ms, and a duration. Do not use `animation-iteration-count: infinite` except for loops that are meant to run through the whole video.
  3. Animate only `transform`, `opacity`, `clip-path` and (for SVG) `stroke-dashoffset` and `d`. web.dev advises restricting animation to `opacity` and `transform` to stay on the compositor; for a screenshot-per-frame renderer performance matters less, but these properties also have the least surprising interpolation.
  4. For anything that needs script (a counter, a text swap), write the page so a pure function `render(tMs)` sets everything, and export `window.__seek = (ms) => render(ms)`. Call `render(0)` on load so a still at 0.0 s is complete.
  5. Add `await document.fonts.ready` is already done by the renderer; never animate font loading.
  6. Check list for a designer: render `frames --at 0,0.5,1,2,...` and confirm that t = 0.0 shows the hook fully formed.
- Source: /home/user/marketing-agents/.claude/skills/design-studio/scripts/render.mjs (lines 33 to 36), https://developer.mozilla.org/en-US/docs/Web/API/Animation/currentTime and https://web.dev/articles/animations-guide
- Evidence type: page_read (MDN, web.dev), file read (render.mjs). Point 1's claim about finished animations being dropped is from my knowledge of the Web Animations spec ("relevant animations") and will be confirmed in the local test later; until then 80%.
- Confidence: 95% for what the renderer does and what `currentTime` means; 80% for the fill-mode advice until tested.

<!-- APPEND-FINDINGS-ABOVE -->

## Conflicts with our rules (proposals for Yaqoob)

PENDING.

## Gaps (not found)

PENDING.

---
name: design-studio
description: How TabeebX's Designer makes finished visuals — carousels, stories, feed posts and short animated videos (kinetic typography) — as real rendered files (PNG, MP4), not descriptions. Covers the tools (code-rendered HTML with Cairo, Claude Design, Canva, Adobe once signed in), the layout and Arabic-typography rules, motion timing for 15–20 s videos, the reference library, and the hand-off to the Design Critic. Use for any TabeebX visual.
---

# TabeebX design studio

The Designer turns the Copywriter's approved words into finished, rendered designs. Every piece goes to the **Design Critic** before Guard (see `design-critique`). The standard is a professional agency's, and Yaqoob judged earlier AI-made designs poor, so "acceptable" is not the bar.

## Tools, in order of preference

| Tool | Use for | How |
|---|---|---|
| **Code-rendered HTML** (default) | Carousels, stories, feed posts, animated videos, any Arabic-heavy layout | Write one HTML page per slide or video using `assets/fonts/fonts.css` and `assets/tabeebx.css`, then render with `scripts/render.mjs` (below). Full control of Arabic shaping, the grid and timing. Free and unlimited |
| **Claude Design** (the Design artifact type) | Exploring layouts on a canvas with Yaqoob, design-system work | Only when the main session asks for it; sub-agents may not have the Artifact tool |
| **Canva** (connector, Free plan) | Photo-based layouts, resizing, a design Yaqoob wants to edit himself | Free plan: AI generation is limited (about 20 premium AI uses a month); count every use |
| **Adobe** (plugin installed) | Photo retouching, social variations, Photoshop work | **Not usable until Yaqoob signs in to Adobe** in his claude.ai connector settings |

## Rendering

```bash
S=.claude/skills/design-studio/scripts/render.mjs
node $S still  page.html out.png  --w 1080 --h 1350          # carousel slide / feed post
node $S still  page.html out.png  --w 1080 --h 1920          # story
node $S video  page.html out.mp4  --w 1080 --h 1920 --fps 30 --dur 18
node $S frames page.html frames/  --at 0,1,3,6,10,15 --w 1080 --h 1920   # stills of a video, for the critic
```

- Animate with CSS `@keyframes` and transitions; the renderer pauses and seeks every animation, so frames are exact. For script-driven motion, define `window.__seek(ms)`.
- Link fonts by absolute path, or relative to the HTML file: `<link rel="stylesheet" href="…/design-studio/assets/fonts/fonts.css">`. Cairo is vendored (SIL OFL, `assets/fonts/OFL.txt`), so rendering needs no network.
- **Videos are silent.** Music or voice is added in the app at posting. Burn in Arabic captions for every key line, because most people watch with the sound off.
- **Logo:** use only the official file. `assets/brand/` holds no logo yet: until Yaqoob sends the official files, leave a marked logo slot (`[LOGO: official file needed]`) and say so in the piece. Never redraw, trace or recolour the logo.

Output goes in `content/<YYYY>-W<ww>/design/<piece-id>/`: the HTML sources, `slide-01.png`…, or `video.mp4` plus `frames/`.

## Process for every piece

1. **Read** the piece file (copy, goal, channel), the brief, `tabeebx-brand`, and the relevant part of `references/library.md`. Name the reference you are learning from.
2. **One idea.** Write a single sentence: what the viewer should feel and do. The Glaser, Rand and Bass lenses mark down pieces with more than one idea.
3. **Three thumbnails.** Sketch three different compositions in HTML at quarter size (or describe them precisely), pick one, and say why. This is the cheapest place to be bold.
4. **Build** at full size on the grid below. Render.
5. **Self-check** against the hard rules below and the 10 lenses in `design-critique`. Fix what you can see before handing over.
6. **Hand to the Design Critic** with the rendered files. Revise on its notes, up to 3 rounds.

## Layout system

- **Formats:** feed and carousel 1080×1350 (4:5, every slide the same). Stories, Reels and TikTok 1080×1920.
- **Safe zones (9:16 video):** keep text and key visuals inside 720×1200, from y=220 to y=1420, with 180 px each side. **Stories:** keep the top ~250 px and the bottom ~340 px clear, with at least 65 px side margins.
- **Carousel cover:** headline and key visual inside the centred 1012×1350 area, because the profile grid previews posts at 3:4.
- **Grid:** 12 columns, 72 px outer margin on 1080 wide, an 8 px spacing unit. Align everything to it. One grid per series, so slide 5 visibly belongs with slide 1.
- **Hierarchy:** at most three text levels per frame (headline, body, label). The headline is about 1.6–2× the body. Hierarchy comes from size and weight, never from colour alone.

## Arabic typography (hard rules)

- **Cairo only**, Bold (700–800) for headlines and Medium (500) for body. Never lighter weights.
- **Never letter-space Arabic, and never animate it letter by letter.** It breaks the joins. Animate whole words or lines, or reveal intact text with a mask.
- **Line height:** about 1.25–1.4 for headlines and 1.6–1.8 for body. Check that dots don't collide between lines.
- **Minimum sizes on a 1080 px canvas:** body ≥ 46 px, labels ≥ 40 px, headlines ≥ 72 px.
- **Alignment:** right-aligned and ragged. Never justified, and never stretched with tatweel (ـ).
- **Digits:** Eastern Arabic (٠١٢٣٤٥٦٧٨٩) in copy; Western only in phone numbers and handles.
- **Latin inside Arabic** (TabeebX, URLs) stays left-to-right. Check that punctuation didn't jump sides.
- **Direction:** sequence, progress bars, arrows and wipes run right to left. Don't mirror the logo, numbers or clocks.

## Colour (hard rules)

- **Palette:** navy `#181943`, pink `#EE396B`, blue `#1B9CCE`, white `#FFFEFF`. No other colours, no gradients between brand colours, no drop-shadow glows.
- **Exactly one pink element group per frame** (the logo's pink figure doesn't count).
- **Contrast:**
  - White on navy (16.7:1) is the default for anything that must be read.
  - Pink on navy (4.3:1) is for large display words only, at least 52 px in Bold.
  - White on blue fails for body text (3.1:1); use navy on blue (5.3:1).
  - **Never** set pink against blue, or blue against pink (1.2:1).

## Motion (15–20 s videos)

- **Second 0 must work as a still.** The hook text is fully visible at 0.0 s: no fade from black and no logo sting. The hook lands within 1–2 s.
- **Reading time:** hold each text card for at least 0.45 s per word plus 0.5 s, and at least 1.5 s in total. Never more than about 2.5 words a second. Quick 1–3-word flashes are for emphasis only.
- **In and out:** enter in 250–400 ms with ease-out, sit completely still while it is read, then exit in 150–200 ms with ease-in. Prefer a fade or a short slide in reading direction (right to left). No bounces, spins or scale-pops on Arabic.
- **Every paused frame should be a finished composition** (the Cooper lens checks this).
- **Brand:** the palette and Cairo appear from frame 1, and the logo appears within ~5 s as part of the content.
- **End:** one call to action held for ≥ 2 s, inside the safe band.

## People and AI imagery

- **AI images:** people in AI images are never presented as real TabeebX staff, patients or customers. Label only where the platform requires it (decision #58): on TikTok, realistic AI people or scenes; on Meta, photoreal AI video or a realistic AI voice. Illustrated and motion work needs no label.
- **Imagery restrictions:** no needles in arms, blood tubes or hospital beds in anything that may become an ad.

## Never

- Invent a logo, a doctor, a result or a number.
- Spend money on paid stock, paid Canva features or Adobe credits without Yaqoob's approval.
- Hand over a design that hasn't been rendered and looked at at phone size.

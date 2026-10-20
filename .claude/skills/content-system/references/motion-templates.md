# Motion system: template field shapes and safe zones

The code-rendered motion system lives in `marketing/motion` of the `yaqoobalshaikhli/EMR` repo. A job there is one entry in `content/campaign.json`:

```
{ "id": "...", "template": "...", "when": "...", "params": { ... }, "extends": "...", "range": ..., "draftLabel": ... }
```

Each template below lists the `params` keys used by the approved trust campaign (extracted 2026-10-17). A key listed here is known to work. A key not listed may be ignored by the renderer, so check the template file in `marketing/motion/src/compositions/` before inventing one.

| Template | `params` keys | Example job |
|---|---|---|
| `carousel` | `series`, `slides[]` with: `type`, `bg`, `top`, `title`, `text`, `textClass`, `textTop`, `lead`, `body`, `small`, `label`, `label1`, `label2`, `name`, `role`, `photo`, `quote`, `signed`, `origin`, `claim`, `explain`, `stamp`, `promise`, `items`, `rows[]` (`icon`, `text`), `cta`, `ctaTop`, `closing`, `swipe`, `flag`, `flagTop`, `art`, `artTop`, `artLeft`, `artRight`, `artHeight`, `zoom` | `03a-mon28-doctor-carousel` |
| `story-question` | `label`, `question`, `sub`, `icon` | `02c-sun27-morning-question` |
| `story-teaser` | `kicker`, `text`, `note`, `signed` | `01-sat26-teaser-story` |
| `reel-opener` | `series`, `hook`, `label` | `02a-sun27-founder-opener` |
| `launch-reel` | `series`, `hook`, `intro`, `card` (`name`, `role`, `team`, `photo`), `shared` (`title`, `queue`, `minutes`, `questions`, `respect`), `talk` (`lead`, `claim`, `admit`), `door` (`lead`, `ritual`, `open`, `rows`, `arrive`), `promise` (`lead`, `day`, `date`, `month`, `time`, `announce`, `numbers`, `accountable`) | `02-sun27-launch-reel` |
| `promise-reveal` | `series`, `hook`, `labels`, `promises[]` (`complaint`, `promise`, `hero`, `n`, `unit`), `monthly`, `closing` | `09-sun04-promise-reel` |
| `scorecard` | `series`, `hook`, `threshold`, `verdicts`, `fixLabel`, `promises[]` (`title`, `hit`, `of`, `fix`), `closing` | `10-nov01-scorecard-template` |
| `reel-endcard` | none (fixed end card) | `90-reel-endcard` |
| `highlights` | `covers[]` (`icon`, `name`) | `91-highlight-covers` |

**No template covers a story frame with a link sticker.** Use `story-teaser` with the sticker area left empty, and say so in the piece. Instagram's link sticker is added in the app when posting.

## Safe zones (vertical 1080×1920)

From the vendored `ad-creative` skill (`references/short-form-video-specs.md`), a cross-platform worst case for TikTok and Instagram Reels:

| Edge | Keep clear |
|---|---|
| Top | 220 px |
| Bottom | 500 px |
| Left | 180 px |
| Right | 180 px |

That leaves a centred text band 720×1200 px, from y=220 to y=1420. **Stories** use the same band in our work as a conservative choice. No sourced Stories-specific figure was found (unverified).

The vendored spec's caption style (white text with a black outline) does **not** apply to TabeebX. Captions use a navy plate with Cairo, per brand.

## Feed sizes

- Instagram feed: 1080×1350.
- Stories, Reels and TikTok: 1080×1920.
- WhatsApp broadcast image: no sourced spec. Keep the cover square-safe (the key content within a centred 1080×1080) and check it on a phone before sending.

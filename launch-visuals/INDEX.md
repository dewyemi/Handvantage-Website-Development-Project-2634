# Vantage Workspace — Launch Visuals

Three motion pieces built with HyperFrames (HeyGen's HTML-based video framework) for the May 2026 Vantage Workspace launch. Source files live in `hero-loop/`, `compliance-launch/`, `architecture-sequence/`. Rendered MP4s sit alongside (`hero-loop.mp4`, `compliance-launch.mp4`, `architecture-sequence.mp4`).

The MP4s are **not committed to git** — they're large binaries that belong on a CDN or in Netlify static. Pick a destination per piece (see "Where to use" below).

---

## 1. `hero-loop.mp4` — 1920×1080, ~8s

**What it is.** A drop-in replacement for the home-page hero. Workspace stack illustration rises in, headline reveals word-by-word, eyebrow + tagline + framework ticker fade in beneath. Ends with a gentle ambient breath that loops cleanly back to the start.

**Where to use.**
- Replace the static hero image at `workspace-handvantage-com/app/page.tsx` line 76 with a `<video autoPlay muted loop playsInline>` tag pointing at this MP4. Keep the static stack image as the `poster` so SSR + slow connections still see something.
- Also works as a LinkedIn launch post (post the 8s clip directly).

**Files.** `hero-loop/index.html` is the composition source. Edit copy or timing there, run `npm run check` then `npm run render` to regenerate.

---

## 2. `compliance-launch.mp4` — 1920×1080, ~6s

**What it is.** Single-frame proof piece. The big italic *A* enters first, the percentage counter ticks 0% → 100% in real time, then a thin gold rule draws across, the pull quote settles, and eleven framework names cascade in.

**Where to use.**
- LinkedIn / X launch post — this is the headline proof for the launch announcement.
- OG / social share card for `/compliance`. Convert the final frame to a static PNG (`ffmpeg -i compliance-launch.mp4 -ss 5.5 -frames:v 1 og-compliance.png`) and wire it into the metadata.
- Sales deck cover slide.

**Files.** `compliance-launch/index.html`. The framework list is hard-coded; swap the eleven `<span>` entries if any framework changes.

---

## 3. `architecture-sequence.mp4` — 1920×1080, ~12s

**What it is.** Sequential reveal of the seven defence layers. Title column on the left holds steady ("Seven layers, one stack"). Layer rows on the right enter one at a time with a momentary gold highlight, then settle. After the seventh layer, a closing card overlays: *"Built like a rack. Audited like a kernel."*

**Where to use.**
- Architecture page hero (replace the current `nemoclaw-atlas.jpg`).
- Sales-deck centre piece — the architecture story in 12 seconds.
- Conference talk lower-third or interstitial.

**Files.** `architecture-sequence/index.html`. The layer descriptions match the spec on `/architecture` so they stay in sync editorially.

---

## How to regenerate / edit

Each piece is a standalone HyperFrames project. Standard loop:

```bash
cd launch-visuals/<project>
npm run dev          # preview in browser
npm run check        # lint + visual inspect
npm run render       # render to MP4 (5-15 min on this machine)
```

The compositions use the same design tokens as the website:

- **Display type**: Source Serif 4 (light weight + italic for emphasis)
- **UI / mono**: IBM Plex Mono for eyebrows, captions, framework labels
- **Palette**: Paper `#F5F1EA`, ink `#1A1F1B`, midnight `#0F1A1F`, oxblood `#722F37`, gold `#C9A36A`

To brand-swap colors, edit the inline `<style>` block at the top of each `index.html`. There's no shared theme file by design — each piece is self-contained so you can render any one without the others.

---

## Render parameters

Standard quality, 30 fps, default codec (H.264 mp4). For higher fidelity (file-size cost):

```bash
npx hyperframes render --quality high --fps 60
```

For social-platform compatibility (square / vertical), edit the `data-width` and `data-height` on `#root` in the composition HTML, then re-render.

---

## What was deliberately not done

- **No voiceover / TTS.** All three pieces are silent and read on type alone — the motion does the storytelling, no audio asset to maintain.
- **No third party assets.** Only your in-house illustrations, the H-mark logo, and webfonts.
- **No music.** Add yours later if needed.
- **No motion blur or shader passes.** Light, fast, render-friendly. You can add HyperFrames shader transitions later if you want more drama; the source HTML is already structured for it.

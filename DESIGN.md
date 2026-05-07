# Handvantage Design Baseline

**Status**: living document. Last revised 2026-05-07.
**Scope**: covers both `workspace.handvantage.com` (the product site, Next.js) and `pages.handvantage.com` / `handvantage.co` (the consulting site, Vite + React). They share a brand and a voice; they don't share a stack or a palette by design.

This is the reference for future work. When the next page is added, the next OG card is generated, or the next launch announcement is written, it should follow what's here. When something here is wrong, edit the doc — it's not sacred, it's just the current canon.

---

## 1. The two sites and why they look different

| | **Workspace** (`workspace.handvantage.com`) | **Main / Consulting** (`handvantage.co`) |
|---|---|---|
| Stack | Next.js 14 App Router, TypeScript, Tailwind | Vite + React, JSX, Tailwind |
| Tone | Editorial, FT/McKinsey-grade | Operator, dark, terminal-style |
| Background | Paper `#F5F1EA` | Void `#020617` |
| Display type | Source Serif 4 | font-editorial (system serif fallback) |
| UI type | Inter Tight | system-ui |
| Mono | IBM Plex Mono | JetBrains Mono / SF Mono |
| Voice | "Audited like a kernel" | "Stop buying tools. Start deploying agents." |

**Why the split**: the consulting site sells human judgment for high-pressure security work; it leans dark and aggressive on purpose. The workspace site sells a product whose claim is *evidence and structure*; it earns trust by looking restrained, edited, peer-reviewed.

**When to bridge**: when one site references the other (cross-promo, OG cards, launch banners). The workspace launch banner on the main site uses the workspace's oxblood `#722F37` and gold `#C9A36A` accents to create a "this is the product" cue without shouting.

---

## 2. Workspace site design tokens

Source of truth: `workspace-handvantage-com/lib/data-tokens.ts` + `workspace-handvantage-com/tailwind.config.ts`.

### Palette
```
paper          #F5F1EA   default body background
paper.deep     #EAE3D5   secondary section bands
paper.rich     #E5DDC9   rare third tone (use sparingly)
ink            #1A1F1B   default text
ink.soft       #4A4F4B   secondary text, captions
ink.hairline   #D2C9B7   hairline borders, divider lines
midnight       #0F1A1F   dark section bands (compliance, runtime, OWASP)
midnight.deep  ~          even darker variant for layering
midnight.hairline rgba(245,241,234,0.18) hairlines on dark
oxblood        #722F37   brand accent, links, eyebrow underlines
oxblood.soft   #8B4A52   subtle oxblood
gold           #A16207   accent on midnight (compliance highlights)
gold.soft      #C9A36A   gentler gold for body emphasis on dark
```

**Rule**: oxblood on paper. Gold on midnight. Don't cross them — gold on paper looks bilious; oxblood on midnight loses contrast.

### Typography
- **Display**: `Source Serif 4` via `next/font/google`. Sizes use `clamp(min, vw+rem, max)` for fluid scaling.
- **UI**: `Inter Tight` (500/600 weights for buttons, labels).
- **Mono**: `IBM Plex Mono` for eyebrows, monospace runs (`/assess`, control IDs), captions, framework chips.
- **Italic in display**: reserved for accent fragments (`audited like a kernel`, `one stack.`). Italic body is reserved for editorial asides.
- **Tracking**:
  - Eyebrows: `letter-spacing: 0.12em`–`0.18em`, all-caps, mono.
  - Display: `letter-spacing: -0.025em` to `-0.02em` (slight negative for big serif type).
  - Body: default.
- **Drop cap**: only on `/insights/[slug]` first paragraph (the `.lede::first-letter` rule in `globals.css`).

### Layout
- Container max-width: `max-w-[1440px]` for hero/wide sections, `max-w-narrow` (~720px) for prose, `max-w-default` (~1200px) for general.
- Side padding: `px-6 md:px-12 lg:px-20`.
- Section padding: `py-16 md:py-24` (default), `py-20 md:py-32` for hero/feature.
- Section bands alternate `bg-paper`, `bg-paper-deep`, `bg-midnight` for visual rhythm. Don't run two consecutive paper bands — break with paper-deep or a `<SectionDivider />`.

### Section pattern
```
<section className="py-16 md:py-24 bg-paper">
  <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
    <SectionEyebrow>EYEBROW LABEL</SectionEyebrow>
    <h2 className="font-display text-h2 text-ink mb-8">...</h2>
    <div className="font-display text-body text-ink leading-relaxed max-w-[720px]">...</div>
  </div>
</section>
```

### Hero pattern
Split layout, 5/7 or 7/5 grid, headline left, image right (or vice versa).
```
<section className="pt-12 md:pt-20 pb-20 bg-paper">
  <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-5">{copy block}</div>
      <div className="lg:col-span-7">{image block}</div>
    </div>
  </div>
</section>
```
Headline size: `text-[clamp(2.25rem,4vw+1rem,4rem)] leading-[0.98] tracking-[-0.02em]`.

---

## 3. Image discipline

Three rules learned the hard way:

1. **Use the image's native aspect ratio.** Don't force `aspect-[16/10]` with `object-cover` on screenshots — it crops 30–40% off product UI. Read the actual pixel dimensions and pass `ratio` to `<ProductShot>`.
2. **Use `object-contain` for product screenshots, `object-cover` only for editorial/portrait photography.** Screenshots have UI you don't want to lose; photography is composed to bleed.
3. **Each image earns its place once.** Reusing the same screenshot on four pages is wallpaper, not evidence. If it's worth showing, it's worth captioning.

### `<ProductShot>` component
Path: `workspace-handvantage-com/components/ProductShot.tsx`

```tsx
<ProductShot
  src="/images/product/policy-management.jpg"
  alt="Policy Management UI — every agent action governed by a versioned policy."
  ratio={1.333}            // = native pixel width / height
  url="workspace.local / engine / policy"
  caption="Every action governed by a versioned, signed policy."
  tone="paper"             // or "midnight"
  priority                 // for above-fold
/>
```

What it does: renders the screenshot with `object-contain` inside a macOS browser-window chrome (traffic-light dots + URL pill), with a mono caption underneath. Caption is optional but encouraged — say what's in the screenshot, where it lives in the platform.

### Image inventory by purpose
- `vantage-workspace-stack.png` — the iconic 3D stack illustration. **Home hero only.**
- `vantage-workspace-rack.png` — the on-prem deployment rack. Used in product runtime + home architecture preview.
- `dashboard.jpg` — workspace home canvas. Home product showcase.
- `compliance-dashboard.jpg` — A grade dashboard. Compliance hero + home compliance section.
- `nemoclaw-firewall.jpg` — firewall UI. Home NemoClaw section.
- `nemoclaw-atlas.jpg` — topology view. **Architecture hero.**
- `policy-management.jpg` — policy editor. **Product hero.**
- `infrastructure-overview.jpg` — wide topology strip (4:1 ratio). Product deployment.
- `sin-blocked.jpg` — PII detection in flight. Product evidence.
- `redacted.jpg` — audit log redaction. Compliance methodology.
- `owasp-coverage.jpg` — OWASP coverage map. Compliance OWASP spotlight.
- `skills-analytics.png` — skills usage. Architecture inline evidence.
- Founder demo photos (`josh-demo-*.jpg`) — hero on `/philosophy`, mid-essay break.

When adding a new screenshot, add it here.

---

## 4. Open Graph + AEO

### Dynamic OG images
File-based convention (Next.js 14): `app/{route}/opengraph-image.tsx`.
- Uses `renderOgCard()` from `lib/og-card.tsx` for consistency.
- Always 1200×630, runtime "nodejs", contentType "image/png".
- Each card has: brand chrome (H + HANDVANTAGE + VANTAGE WORKSPACE), eyebrow, headline (with optional italic accent line), tagline, hairline-divided footer with URL + meta.
- Tone `"paper"` or `"midnight"`. Accent `"oxblood"` (paper) or `"gold"` (midnight).

When you add a route, add its `opengraph-image.tsx`. The fallback is the root `app/opengraph-image.tsx`.

### `llms.txt`
Path: `workspace-handvantage-com/public/llms.txt` (workspace) and `public/llms.txt` (main).
- Markdown-formatted content map for AI crawlers (ChatGPT, Perplexity, Claude, Mistral).
- Top: TL;DR description.
- Sections: core pages, featured editorial, reference, key facts.
- Update when major pages are added or the compliance posture changes.

### Schema.org JSON-LD
Already on the workspace site:
- `Organization` (root layout)
- `SoftwareApplication` (`/product`) — full feature list
- `FAQPage` (`/compliance`) — 7 Q&A pairs
- `Article` (`/insights/[slug]`)
- `WebSite` (main site) and `Person` (`/about`)

When adding a marketing page, attach the matching schema. The rule of thumb: if the page makes a claim a search engine could surface in a rich result, give it the structured markup.

### Meta tags expected on every page
Already in `layout.tsx`:
- `description`, `keywords`, `category`, canonical
- `openGraph` block (type, locale, url, siteName, title, description; images auto-injected)
- `twitter` block (card, site, creator, title, description)
- `ai:*` tags (`ai:title`, `ai:description`, `ai:keywords`, `ai:category`, `ai:industry`, `ai:audience`, `ai:human-authored`, `ai:last-reviewed`)
- `robots` directive with `max-image-preview: large`

Per-page metadata exports override these where needed (e.g. `/insights/[slug]` sets `og:type: "article"`).

---

## 5. Voice and tone

### Workspace site
- **Direct, edited, peer-reviewed.** Never marketing-grade. Every claim should survive a CISO's read-through.
- **Concrete over abstract.** "168 automated tests" beats "comprehensive testing." "RFC 3161 timestamps" beats "secure timestamps."
- **Show the gaps.** The compliance page lists open issues alongside certifications. The architecture page lists trade-offs. The philosophy essay names the customers we lost. *That* is what builds engineer-grade trust.
- **Pull-quotes are italic, oxblood, and sparingly used** — reserved for one-line theses ("Audited like a kernel").
- **Numbers without units feel cheap.** "100% pass rate across 11 frameworks" not "100%."
- **No emoji. No "🚀". No "transformative."**

### Main site
- **Operator vocabulary.** "The Pilot. The Fleet. 15-minute response SLA. Zero data leakage."
- **Terminal aesthetic** carried in copy: monospace stat readouts, `[BRACKETED]` tags, lowercase command-style references.
- **Threats and stakes named directly.** "Stop buying tools. Start deploying agents."

### Cross-site rules
- **Founder name**: Josh Olayemi (full name in formal contexts; "Josh" in casual contexts within editorial).
- **Email**: `hello@handvantage.com` (never `josh@`, `info@`, `contact@`).
- **City**: Toronto (only in legitimate contexts: schema.org Organization address, philosophy essay narrative). Removed from prominent UI per 2026-05 decision.
- **Domain mentions**: write `workspace.handvantage.com` (lowercase, no protocol) in copy. Same for `handvantage.co`.

---

## 6. Components — workspace site

| Component | Path | Use |
|---|---|---|
| `<HeaderNav />` | `components/HeaderNav.tsx` | Sticky top nav, paper bg |
| `<FooterStrip />` | `components/FooterStrip.tsx` | Minimal footer, two columns |
| `<HMark />` | `components/HMark.tsx` | The H-mark logo (real PNG, not SVG) |
| `<SectionDivider />` | `components/SectionDivider.tsx` | Hairline divider between sections |
| `<SectionEyebrow>` | `components/SectionDivider.tsx` | Mono uppercase label above section headlines |
| `<ProductShot />` | `components/ProductShot.tsx` | Product UI screenshot with browser chrome |
| `<ArticleCard />` | `components/ArticleCard.tsx` | Type-only editorial card for `/insights` |
| `<FrameworkGrid />` | `components/FrameworkGrid.tsx` | The 11-framework grid for `/compliance` |
| `<ComplianceBadge />` | `components/ComplianceBadge.tsx` | The big "A" grade badge |
| `<FactStack />` | `components/FactStack.tsx` | Numbered fact list with mono labels |
| `<CTABlock />` | `components/CTABlock.tsx` | End-of-page CTA in midnight or paper |
| `<FounderPortraitSection />` | `components/FounderPortraitSection.tsx` | Black-and-white portrait + bio block |

When adding a new component, place it in `components/`, give it a JSDoc-style header comment if its purpose isn't obvious from the name, and try to compose existing components rather than re-inventing the eyebrow/section pattern.

---

## 7. Components — main site cross-promo

Added 2026-05-07 to bridge the two sites.

| Component | Path | Use |
|---|---|---|
| `<AnnouncementBar />` | `src/components/AnnouncementBar.jsx` | Sitewide oxblood top bar, dismissible per session |
| `<VantageWorkspacePage />` | `src/components/VantageWorkspacePage.jsx` | Full landing page at `/vantage-workspace` |

The Hero CTA on the consulting site has a third gold-accented callout pointing to `/vantage-workspace`. Footer Navigation lists Vantage Workspace as the first item with a NEW badge.

---

## 8. Animation discipline

- **CSS-only for ambient page motion.** The hero stack on the workspace home uses `hero-stack-anim` in `globals.css` — `transform` + `opacity` only so the browser composites it. No JS for breathing animations.
- **Framer Motion** on the main site for page transitions and viewport-triggered reveals (already in place).
- **No GSAP at runtime on the websites** — heavy. GSAP lives in HyperFrames compositions only (`launch-visuals/*`).
- **`prefers-reduced-motion`**: respected globally via `globals.css` (animation-duration: 0.01ms).
- **No autoplay video on the home hero.** We tried it, it was slow, we reverted. If we ever try again, lazy-load below the fold and keep the static image as poster.

---

## 9. SEO/AEO operations

### Sitemap
- Workspace: `workspace-handvantage-com/app/sitemap.ts` (auto-generated from `INSIGHTS` data + static page list).
- Main: `public/sitemap.xml` (manual edit when pages change).

### `robots.txt`
- Workspace: auto-generated from `app/robots.ts`. Allow all + sitemap reference.
- Main: `public/robots.txt`.

### Verifying SEO is live after a deploy
```bash
# Workspace site
curl -sI https://workspace.handvantage.com/opengraph-image          # expect 200 image/png
curl -s  https://workspace.handvantage.com/llms.txt | head -5       # expect # Handvantage
curl -s  https://workspace.handvantage.com/sitemap.xml | grep "<url>" | wc -l  # expect ~14
curl -s  https://workspace.handvantage.com/ | grep -oE 'og:image[^"]*"[^"]*"' | head -1
```
If any of those return 404, the deploy didn't pick up the latest commit.

---

## 10. Contact form (operations)

### How it works now
Path: `workspace-handvantage-com/app/api/contact/route.ts`
- Validates name/email/message (server-side).
- Rate-limits per IP (5/min).
- Honeypot field (`website`): bots fill it, humans don't. Silent 200.
- Delivers via Resend to `hello@handvantage.com` (or whatever `CONTACT_TO_EMAIL` says).
- Pings Slack webhook in parallel (non-blocking).
- Falls back to console.log if env vars are missing — won't crash, just won't deliver.

### Required environment variables (Netlify dashboard)
| Var | Required | Used for |
|---|---|---|
| `RESEND_API_KEY` | Yes for email delivery | Resend SDK auth |
| `CONTACT_TO_EMAIL` | No (defaults to `hello@handvantage.com`) | Where leads land |
| `CONTACT_FROM_EMAIL` | No (defaults to `Handvantage <hello@handvantage.com>`) | The From: header — must be on a Resend-verified domain |
| `SLACK_WEBHOOK_URL` | No | Slack channel for real-time pings |

### One-time setup
1. **Resend**: sign up at resend.com → Domains → add `handvantage.com` → add the DNS records they show → wait for verification → API Keys → create one → copy.
2. **Slack**: workspace → Apps → Incoming Webhooks → add → pick channel (e.g. `#leads`) → copy URL.
3. **Netlify**: dashboard → workspace site → Environment variables → add the four above.
4. Trigger a redeploy (or push any commit) so the function picks them up.
5. **Test**: submit the form on `/contact` — expect an email + Slack ping within ~2s.

### Future extensions (don't ship until needed)
- Cloudflare Turnstile if the honeypot stops being enough.
- HubSpot CRM via API if email becomes too noisy as a lead-tracking system.
- Newsletter capture via Resend Audiences if we start an editorial mailing list.

---

## 11. Build, deploy, and verification

### Workspace site (Next.js → Netlify)
```bash
cd workspace-handvantage-com
npx next build              # full build, expect 28+ routes
npm run dev                 # local dev at :3000
```
Netlify is configured with publish dir `.next` (set manually in dashboard, not netlify.toml — see commit history for the why). The site auto-deploys on push to `main`.

### Main site (Vite → Netlify)
```bash
npm run dev                 # local dev at :5173
npm run build               # lint + vite build, output to dist/
```
ESLint ignores: `dist`, `node_modules`, `workspace-handvantage-com`, `launch-visuals`, `**/.next/**`. The lint scope is `src/**/*.{js,jsx}`.

### Launch visuals (HyperFrames → MP4)
```bash
cd launch-visuals/{project}
npx hyperframes lint        # 0 errors expected
npx hyperframes render      # ~1 min per piece
```
MP4s are gitignored — host on a CDN.

---

## 12. Decisions worth remembering

These are the calls we made, the trade-offs we accepted, and the ones not to re-litigate without a reason.

- **Single-tenant only on the product side.** SaaS is faster, but our buyers (regulated enterprises) have a structural objection to multi-tenant data. We're closer to "structural engineer" than "vendor."
- **Compliance grade computed from runtime evidence, not attestation.** Every page in the compliance section reflects this.
- **Editorial voice over marketing voice.** Don't ship a sentence the founder wouldn't say in a sales call.
- **Numbers anchor every claim.** If a sentence sounds vague, it probably needs a number.
- **OG images are dynamically generated, not static PNGs.** Cheaper to maintain, can't go stale.
- **`pages.handvantage.com` and `workspace.handvantage.com` cross-link bidirectionally.** The product site links to the consulting site (footer); the consulting site links to the product site (announcement bar + hero CTA + dedicated `/vantage-workspace` page).
- **No autoplay video, no captchas, no marketing popups.** None of these earn engineer-grade trust.

---

## 13. Where to put new things

- New product page → `workspace-handvantage-com/app/{name}/page.tsx` + `opengraph-image.tsx` + sitemap entry + (if applicable) schema.org block.
- New component → `workspace-handvantage-com/components/`. If it'll be reused across pages, add it to §6.
- New main-site marketing page → `src/components/{Name}Page.jsx` + lazy-loaded route in `App.jsx` + `seoConfig.js` entry + `public/sitemap.xml` entry.
- New data token → `workspace-handvantage-com/lib/data-tokens.ts`.
- New launch visual → `launch-visuals/{name}/` as its own HyperFrames project.
- New entry in this doc → here. Keep it under 500 lines so it stays a reference, not a novel.

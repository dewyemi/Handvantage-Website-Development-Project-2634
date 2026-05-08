# Handvantage / Vantage Workspace

The repository for the Handvantage public web presence. Two sites + supporting projects, in one monorepo.

## What lives where

```
.                                        ← repo root
├── src/                                 ← pages.handvantage.com / handvantage.co (Vite + React)
├── public/                              ← static assets for the consulting site
├── workspace-handvantage-com/           ← workspace.handvantage.com (Next.js 14)
│   ├── app/                             ← App Router routes
│   ├── components/                      ← React components
│   ├── lib/                             ← data tokens, OG card template, insights data
│   └── public/                          ← static assets (incl. llms.txt, images)
├── launch-visuals/                      ← HyperFrames video compositions
└── content-department/                  ← legacy content drafts
```

## The canonical reference docs

If you only read three files, read these:

1. **[DESIGN.md](./DESIGN.md)** — design tokens, components, image discipline, OG/AEO patterns, voice rules, contact form ops, deploy verification. Start here for any UI / SEO / front-end work.
2. **[EDITORIAL.md](./EDITORIAL.md)** — blog cadence, the four article categories, the 20-topic seed queue, article structure template, the publish workflow, the monthly newsletter plan ("The Vantage Pilot"). Start here for any editorial work.
3. **[launch-visuals/INDEX.md](./launch-visuals/INDEX.md)** — the three motion pieces built for the May 2026 launch and how to regenerate them.

## Running things locally

### Workspace site (`workspace.handvantage.com`)
```bash
cd workspace-handvantage-com
npm install
npm run dev               # → http://localhost:3000
npx next build            # production build (28+ routes)
```

### Consulting site (`pages.handvantage.com` / `handvantage.co`)
```bash
npm install
npm run dev               # → http://localhost:5173
npm run build             # lint + vite build → dist/
```

### Launch visuals
```bash
cd launch-visuals/{project}    # hero-loop, compliance-launch, architecture-sequence
npx hyperframes lint
npx hyperframes render         # → ../{project}.mp4
```

## Deploys

Both sites auto-deploy from `main` to Netlify.

- Workspace site: Netlify publish dir is `.next` (Next.js plugin handles the rest).
- Consulting site: Netlify publish dir is `dist/`.

After a deploy that changes SEO / OG / schema, verify with:
```bash
curl -sI https://workspace.handvantage.com/opengraph-image
curl -s  https://workspace.handvantage.com/llms.txt | head -5
curl -s  https://workspace.handvantage.com/insights/rss.xml | head -8
```

## Required env vars (Netlify dashboard, workspace site)

| Var | Why |
|---|---|
| `RESEND_API_KEY` | Contact form email delivery (verified domain: `mss.handvantage.com`) |
| `CONTACT_TO_EMAIL` | optional — defaults to `hello@handvantage.com` |
| `CONTACT_FROM_EMAIL` | optional — defaults to `hello@mss.handvantage.com` |
| `SLACK_WEBHOOK_URL` | optional — real-time `#leads` ping |

Full operational notes: [DESIGN.md §10](./DESIGN.md#10-contact-form-operations).

## What's currently live

- **Workspace site**: 8 routes (home, product, architecture, compliance, philosophy, insights, contact, colophon) + 3 insights articles + dynamic OG image generator + RSS feed at `/insights/rss.xml` + FAQPage / SoftwareApplication / Article schema + `/llms.txt`.
- **Consulting site**: full route map + sitewide announcement bar + dedicated `/vantage-workspace` landing page + cross-promo from hero, footer, and `/llms.txt`.
- **Launch visuals**: hero loop, compliance launch, architecture sequence (8s / 6s / 12s @ 1920×1080).

## Working agreements

- Don't add a feature flag, fallback, or backwards-compat shim that isn't needed today.
- Don't duplicate prose between sites — link instead.
- Don't ship a screenshot whose native ratio is forced into a different one (it crops; use `<ProductShot ratio={…}>`).
- Don't write marketing voice. See [DESIGN.md §5](./DESIGN.md#5-voice-and-tone).

## Contact

Editorial / partnership / general: `hello@handvantage.com`

# Editorial Plan — Insights & Newsletter

**Status**: living plan. Last revised 2026-05-07.
**Goal**: build domain authority and earn organic traffic from search engines and AI platforms by publishing genuinely useful, peer-reviewable writing on a credible cadence. Not content marketing. Not SEO bait. Editorial that survives a CISO's read-through.

This document is the canon for what we publish, when, why, and how. When the cadence drifts or the voice drifts, come back here.

---

## 1. Why we publish (the strategic case)

The Vantage Workspace product page makes claims. The compliance page makes claims. The architecture page makes claims. **The insights archive is what makes the claims credible.** It's where we publish:

- The methodology behind each compliance grade move
- The trade-offs we made in the architecture and what they cost us
- Sector dossiers that let buyers see we actually understand their world
- Field notes that read like an engineer talking to another engineer

Three reads on the same body of work:
1. **Search engines** see fresh, deeply-linked, structured content on regulatory + technical topics nobody else writes about credibly.
2. **AI platforms** (ChatGPT, Perplexity, Claude, Mistral) ingest this through `/llms.txt` and individual articles → cite us when answering questions about the EU AI Act, agentic AI compliance, etc.
3. **Buyers** read it, recognize that the writing is from people who actually do the work, and respond differently in the first sales call.

The third audience is the one we optimize for. The first two follow from the third.

---

## 2. The cadence

| Output | Frequency | First publish |
|---|---|---|
| **Insights article** (workspace site) | 1 per week | Already 3 published; aim for May 14 next |
| **Newsletter — "The Vantage Pilot"** | 1 per month | First issue: end of June 2026 |
| **Field notes** (short, ad hoc) | 0–2 per month | As things happen |

**Why weekly for articles, not bi-weekly:** weekly is the floor for being seen as an active site by Google + AI crawlers. Going below that loses ranking momentum. Going above it (e.g. daily) requires a content team we don't have.

**Why monthly for the newsletter:** it gives us a month of articles to digest into one issue. Pushing out a newsletter every two weeks dilutes each one. Monthly is the cadence at which the newsletter is "an event."

**Failure mode to avoid:** publishing 5 articles in two weeks then nothing for a month. Rhythm matters more than volume. If a week is genuinely impossible, **publish a field note** (500 words, one observation) instead of skipping.

---

## 3. The four article categories

Defined in `workspace-handvantage-com/lib/insights.ts` as `ArticleCategory`. Each has a distinct purpose, structure, and target reader.

### BRIEFING — for the regulatory and industry analyst
- **Length**: 1,500–2,500 words
- **Reader**: CISO, compliance officer, AI governance lead in an enterprise that has to act on a regulation
- **Structure**: dek → context → what the regulation/standard actually says → what the platform's response is → what you (the reader) should do
- **Voice**: clear, direct, no marketing overlay. Quote source documents. Link to primary sources.
- **Cadence**: 2 per month
- **Examples**: "The EU AI Act deadline your CISO is ignoring", "What ISO 42001 actually requires"

### RETROSPECTIVE — for the engineer who wants to see how the sausage is made
- **Length**: 1,200–2,000 words
- **Reader**: security architect, SRE, engineering leader who's evaluating whether to trust the platform
- **Structure**: what changed → why we changed it → what it cost us → what we'll catch next time
- **Voice**: technical, blameless, specific. Name the failure mode. Cite the commit if helpful. Say what the post-mortem found.
- **Cadence**: 1 per month
- **Examples**: "From B to A: the discipline behind the upgrade"

### DOSSIER — for the sector buyer
- **Length**: 2,000–3,500 words
- **Reader**: buyer in a specific industry (financial services, healthcare, public sector, legal)
- **Structure**: industry-specific regulatory landscape → typical agentic AI use cases in this sector → where they break against the regulations → how the platform's posture maps
- **Voice**: respectful of the sector's vocabulary, evidence-driven, never generic
- **Cadence**: 1 per month
- **Examples**: "Agentic AI in financial services: what FINRA's RAGNet update means" (proposed)

### FIELD NOTE — for everyone, briefly
- **Length**: 400–800 words
- **Reader**: anyone scrolling the insights index who wants a quick read
- **Structure**: one observation, one supporting argument, one practical take
- **Voice**: conversational but still edited. The kind of thing a senior engineer might message a peer.
- **Cadence**: 0–2 per month, ad hoc — written in response to news, an interesting question on a sales call, or a sharp observation in a sprint retro
- **Examples**: "Three questions to ask a vendor about their audit log"

---

## 4. The seed queue (interleaved by category)

The auto-routine picks the lowest-numbered item that is not yet published. The queue is interleaved by category so the published archive maintains a balanced mix (BRIEFING → RETROSPECTIVE → DOSSIER → FIELD NOTE → repeat) rather than running all eight briefings in a row. Each entry: category, working title, search/topic angle, one-line brief.

**Already published from the original queue** (do not re-pick):
- BRIEFING — EU AI Act Annex IV technical documentation → published as `eu-ai-act-annex-iv-technical-documentation`
- BRIEFING — ISO/IEC 42001 audit checklist → published as `iso-42001-audit-checklist-2026`
- DOSSIER — Agentic AI in financial services / FINRA → published as `agentic-ai-financial-services-finra-audit-trail`
- FIELD NOTE — What "continuous compliance" actually means → published as `what-continuous-compliance-actually-means`
- FIELD NOTE — Vendor consolidation math: replacing eight productivity tools with one → published as `vendor-consolidation-math-eight-tools-to-one`
- FIELD NOTE — How to brief your CFO on agentic AI without overpromising → published as `brief-your-cfo-on-agentic-ai-without-overpromising`
- FIELD NOTE — What agentic AI actually does for sales velocity → published as `what-agentic-ai-does-for-sales-velocity`
- DOSSIER — Healthcare and agentic AI: HIPAA, FDA SaMD, and the supervision question → published as `healthcare-agentic-ai-hipaa-fda-supervision`

**Active queue (15 topics, interleaved)**:

The 2026-05-09 acceleration shipped the three business-value field notes + the healthcare dossier immediately so the persona-coverage and sector-coverage gaps closed before the next auto-publish cycle. The remaining queue continues to interleave by category.

1. **BRIEFING — AIDA explained: what Canadian enterprises need to do before enactment** · Targets: "AIDA Canada", "AI and Data Act". *AIDA's current draft, the high-impact AI definition, and what the proposed ISED powers mean for procurement.*
2. **RETROSPECTIVE — Why we ripped out configurable defence layers** · Targets: "agentic AI architecture", "secure by design". *The early version of the 7-Layer Defence let operators turn layers off. The audit log was contestable. We rebuilt as structural. Here's what it cost.*
3. **FIELD NOTE — Why we stopped saying "AI agents" in security reviews** · Targets: vocabulary essay; trust signal. *The vocabulary we use in vendor reviews and why it changed.*
4. **BRIEFING — NIST AI RMF Govern function: the controls most platforms skip** · Targets: "NIST AI RMF Govern", "NIST AI RMF compliance". *The Govern function's six categories and which ones get systematically ignored in vendor self-attestation.*
5. **RETROSPECTIVE — From SaaS to single-tenant: the deployment decision** · Targets: "single-tenant AI platform", "data sovereignty AI". *Why we don't run a multi-tenant data lake — and what we lose by not running one.*
6. **DOSSIER — Public sector AI procurement: GSA, FedRAMP, and the EU GovTech corridor** · Targets: "AI procurement government", "FedRAMP government AI". *Two procurement paths (US federal + EU public sector) and how they shape what we have to ship.*
7. **FIELD NOTE — Three questions to ask a vendor about their audit log** · Targets: "AI vendor due diligence", "AI audit log questions". *A short pre-flight checklist a CISO can run on any agentic AI vendor in 10 minutes.*
8. **BRIEFING — OWASP Top 10 for Agentic Applications: a security architect's reading guide** · Targets: "OWASP agentic AI", "OWASP LLM Top 10". *Each category translated into "what this looks like in production" and "what controls actually catch it."*
9. **RETROSPECTIVE — Pilot + Fleet at runtime: what we changed after the first three deployments** · Targets: "Pilot Fleet model", "agentic AI permission model". *Three customer deployments, three changes to how Pilot delegates and how the Fleet declares scope.*
10. **DOSSIER — Legal services and agentic AI: ABA Model Rule 1.1 and the supervision standard** · Targets: "AI legal compliance", "ABA Model Rule AI". *The ABA's competence rule + the State Bar guidance, read against agentic AI deployment in BigLaw.*
11. **FIELD NOTE — Reading the FTC's AI guidance like a CISO would** · Targets: "FTC AI guidance", "AI deceptive practices". *The FTC's 2025–2026 enforcement pattern (Rytr, DoNotPay, Workado) and what it means for procurement language.*
12. **BRIEFING — PCI DSS v4.0 and agentic AI: where the controls don't map cleanly** · Targets: "PCI DSS AI", "PCI DSS v4.0 LLM". *The three v4.0 controls (8.6, 11.5.1, 12.10.5) that have non-obvious implications for agentic AI environments.*
13. **RETROSPECTIVE — A Layer 4 false positive in the embedding-inversion probe** · Targets: "embedding inversion", "memory safety AI". *A real false positive we caught in pre-prod, what triggered it, and how we tightened the probe corpus without losing detection rate.*
14. **BRIEFING — FedRAMP for AI workloads: what's different about high-risk agents** · Targets: "FedRAMP AI", "FedRAMP agentic". *FedRAMP Moderate baseline + the 2025 Emerging Technology Security Requirements update for AI workloads.*
15. **BRIEFING — The HIPAA "minimum necessary" standard and AI agents** · Targets: "HIPAA AI", "HIPAA minimum necessary AI". *Complements the broader healthcare dossier: what "minimum necessary" means specifically when the agent is an autonomous decision-maker, not a human operator.*

After this queue runs out, we generate the next 16 from: (a) regulatory updates, (b) sprint retros, (c) customer deployment learnings, (d) news the team wants to react to. The queue should never go below 8 — refill when it hits that floor.

The category mix targets ~40% BRIEFING, ~25% RETROSPECTIVE, ~20% DOSSIER, ~15% FIELD NOTE over any rolling 12-article window. The interleaved order produces this naturally for the next ~16 weeks.

---

## 5. Article structure (the template)

Every article follows the same skeleton, executed differently per category. New articles live as TypeScript objects in `workspace-handvantage-com/lib/insights.ts`.

```ts
{
  slug: "kebab-case-slug-matching-headline",
  category: "BRIEFING",                       // | "RETROSPECTIVE" | "DOSSIER" | "FIELD NOTE"
  headline: "The headline. Sentence-case. End with a period.",
  dek: "1–2 sentences. The promise of the article. What you'll know after reading.",
  date: "2026-05-14",                          // ISO; drives sitemap lastmod + sort
  dateHuman: "May 14, 2026",                   // for the byline
  readingTime: "8 min read",                   // calculate at ~225 wpm
  author: "Josh Olayemi",                      // optional; defaults to founder
  body: [
    "Opening paragraph — the lede. Short. Concrete.",
    "Second paragraph — context the reader needs.",
    "Third paragraph onwards — the body of the argument.",
    // ... each paragraph is a string in this array
    "Closing paragraph — what the reader should do next, or what we publish next.",
  ],
}
```

The renderer (`app/insights/[slug]/page.tsx`) handles drop cap on the first paragraph, breadcrumb, byline, related-article block, and the Article JSON-LD schema. **Add nothing to the renderer for a normal article — just add the data.**

### Voice rules (cross-reference DESIGN.md §5)
- Direct, edited, peer-reviewed. Never marketing-grade.
- Concrete over abstract. "168 automated tests" beats "comprehensive testing."
- Show the gaps. Open issues. Trade-offs. Failures we caught.
- Numbers anchor every claim. If a sentence is vague, give it a number.
- No emoji, no rocket emojis, no "transformative", no "leverage", no "synergy".

### Headline rules
- **Sentence-case**, not Title Case. "What EU AI Act Annex IV technical documentation actually requires" — not "What EU AI Act Annex IV Technical Documentation Actually Requires".
- End with a period. Headlines on this site are statements, not labels.
- No clickbait. The article's promise should be exactly what the headline says.

### Dek rules
- 1–2 sentences. Maximum 220 characters.
- The dek is what shows in the OG card. Write it for the share preview as much as for the article.
- Concrete. "Less novel methodology than you'd expect." beats "A deep dive into our process."

### Length rules
- Briefings: 1,500–2,500 words.
- Retrospectives: 1,200–2,000 words.
- Dossiers: 2,000–3,500 words.
- Field notes: 400–800 words.
- If your draft is 30%+ longer than the upper bound, it's probably two articles.
- If your draft is 30%+ shorter than the lower bound, it's probably a field note.

---

## 6. The publish workflow

```
[draft]                                  [edit]                               [publish]
─ pick from queue ───→ write body ───→ self-review against ──→ open PR ──→  merge → Netlify ──→ ping
                       (markdown or     this doc + DESIGN.md   adds         redeploys auto      newsletter
                        directly into                          INSIGHTS                         queue
                        TS)                                    entry
```

### Step 1 — Draft (the hybrid model)

Drafts come from one of two sources:

1. **Founder-original**: Josh writes the draft start-to-finish. Default for articles where the angle requires lived experience (sales calls, customer deployments, sprint retros, founder essays).
2. **AI-assisted draft + human review**: Claude drafts a first pass against this doc + DESIGN.md + the queue. Josh reviews substantively — kills paragraphs, changes angles, adds the customer anecdote, rewrites the closing. The result is published under Josh's byline because by the time it ships, he has shaped it. Default for articles that lean heavily on regulatory analysis or technical reference (briefings, dossiers).

The hybrid model is honest. It's how a senior writer would use a research assistant, and the published result is what *Josh signed his name to*, not what the assistant produced. The not-list (§10) draws the line: AI-generated prose shipped without human review, under a fake byline, is not okay; AI-assisted drafting under a real review pass and a real byline is.

Either way, **block out the structure first**: dek → 4–6 section headings → fill each. Don't write linearly from the top.

### Step 2 — Self-review checklist
Before opening the PR, read the article twice and check:
- [ ] **Lede passes the "first 50 words" test:** if the reader stops there, do they still know what the article is about?
- [ ] **Every claim has a number, a citation, or a concrete example.** Vague sentences get a `[concrete?]` flag.
- [ ] **No marketing voice.** Search the draft for "leverage", "transform", "synergy", "robust", "best-in-class", "cutting-edge". Delete or rewrite.
- [ ] **One link to a primary source per ~500 words.** Regulations, standards docs, OWASP entries, NIST publications — these earn the article's authority.
- [ ] **Cross-link to related insights articles where natural.** Builds internal link graph.
- [ ] **OG card preview**: imagine the dek as a LinkedIn share card. Does it earn the click?
- [ ] **Length is in band** for the category.
- [ ] **Reading time is honest** (~225 wpm — count the body words and divide).

### Step 3 — Add to `INSIGHTS`
Edit `workspace-handvantage-com/lib/insights.ts`. The `body` field is an array of paragraph strings. Render order is array order. Markdown isn't supported — keep paragraphs prose, no lists or headings inside (yet).

If the article needs structural elements (a list, a sub-heading, a code block), the renderer needs to be extended. For v1, write around it: turn lists into prose paragraphs ("First, …. Second, …. Third, …."), turn sub-headings into bold lead-in sentences.

### Step 4 — Build + verify
```bash
cd workspace-handvantage-com
npx next build         # confirm sitemap, schema, OG image all generate
```

### Step 5 — Push
Commit with a message like `Insights: <slug>`. Netlify deploys automatically. Within 2–3 min the article is live, in the sitemap, with a freshly-generated OG image.

### Step 6 — Promote (light touch)
- LinkedIn: a 2–3 sentence post linking to the article. Not the full article. Make the click earn the read.
- The newsletter (monthly) summarizes the month's articles.
- Don't cross-post the full text anywhere — keeps the canonical home as `workspace.handvantage.com`.

---

## 7. The newsletter — "The Vantage Pilot"

The name ties directly to the platform's Pilot + Fleet model (the Pilot orchestrates, the Fleet executes). The newsletter is the Pilot — a senior person navigating the month for the reader. Distinctive in search, no conflict with the unrelated Trustpilot.com review platform, and consistent with product nomenclature.

The earlier working name was "The Trust Report" — but that conflicts with our own product feature (the signed compliance export). Calling the newsletter the same thing was always going to confuse readers and customers.

### Cadence
- **Monthly**, last business day of each month.
- First issue: **June 26, 2026**.
- Skip a month rather than send a half-baked issue — but skipping is a flag, not a habit.

### Format (target ~1,200 words, ~5 min read)
1. **From the founder** (200–300 words). One observation, one short essay. The kind of thing Josh would write at 11 PM after thinking about a customer call.
2. **What we published this month** (300–400 words). Three to five articles, each with: headline + 2-sentence summary + link.
3. **What we're watching** (200–300 words). Three to five links to *external* primary sources we read this month — regulatory updates, technical papers, industry posts. Treat readers as adults who read other things.
4. **What's coming next month** (100–150 words). One paragraph teasing the next month's planned articles. Builds anticipation, signals editorial discipline.
5. **Footer**: contact, unsubscribe, RSS link.

### Distribution
- **MVP path (recommended for first 3–6 issues)**: send via Resend Broadcasts (the same Resend account already configured). Resend's broadcast feature handles audiences, list management, unsubscribe links, deliverability. No new vendor.
- **Subscribe form**: a small form on `/insights` that posts to a new `/api/subscribe` route. Adds the email to a Resend Audience. (To build when the queue has 4+ ready issues.)
- **RSS feed**: `/insights/rss.xml` (built today — see §8). For readers who don't want email but want to follow.

### Tone vs. articles
The newsletter is more personal than the articles. The articles are edited. The newsletter is *correspondence* — written like Josh is writing to a peer. It's the only place where first-person feels appropriate.

### What the newsletter is NOT
- A drip campaign. There's no funnel. Nobody gets emailed differently based on whether they've opened past issues.
- A sales channel. CTAs are limited to "talk to us if useful" at the very bottom. No "book a demo" buttons.
- A republishing of articles. The newsletter summarizes; the articles live on the site.

---

## 8. Practical infrastructure (to ship now)

A few small pieces that make the cadence sustainable. These ship today.

### RSS feed at `/insights/rss.xml`
Generated from the same `INSIGHTS` data the index page uses. Lets readers follow without committing to the email list. Indexed by Google + AI crawlers as a freshness signal.

### `Subscribe` stub on `/insights`
A small section that says "We send a monthly digest when there's something worth saying. The Vantage Pilot — first issue June 2026. RSS available now: [link]." Captures intent ahead of building the full form.

### Article authoring template
Path: `workspace-handvantage-com/lib/insights-template.ts.example`. Copy-paste skeleton with comment annotations matching §5 above. Speeds up "I have an idea, let me draft it" → "I have a draft."

These are scoped for the next commit, not later.

---

## 9. Metrics worth tracking

Don't optimize for these — they're checkpoints, not goals.

- **Articles published per month** (target: 4)
- **Newsletter open rate** (industry baseline ~25%; we should beat that because the audience opted in deliberately)
- **Click-through to articles from the newsletter** (target: 30% of opens click at least one link)
- **Unique organic search visits to `/insights/*`** (track in Netlify analytics or GA — directional, not gospel)
- **Citations in AI platform answers** — search "vantage workspace" / "handvantage" in ChatGPT, Perplexity, Claude monthly and screenshot. Qualitative but tells us if `/llms.txt` and our schema are doing their job.
- **Sales conversations that reference an article** — this is the highest-signal metric. Track in CRM or anywhere reliable.

If these stay flat for 3 months while we publish on cadence, something is off — re-read this doc and figure out what.

---

## 10. The not-list

Things we are deliberately not doing. Resist the urge.

- **No paid SEO content production.** Every article comes from the founding team or a named guest. Outsourcing kills the voice that's the whole point.
- **No unreviewed AI articles.** AI-assisted drafting under named human authorship is fine — it's how this archive is produced. The line is *who is accountable for the published result*. The byline is the human, who has read every paragraph and edited the shape, the angles, and the closings before it shipped. AI generating the full prose with no human review and shipping it under a fake byline — not fine, ever. The trust positioning ("we publish failures, we cite primary sources, we don't write marketing-grade") only works if the human owns the result.
- **No clickbait headlines.** "You won't believe…" / "10 things…" / "Why X is dead." If the article wouldn't survive a peer review, the headline shouldn't either.
- **No comments section.** Email replies + LinkedIn DMs are the conversation.
- **No popups, no exit-intent overlays, no scroll-triggered subscribe modals.** None of these earn trust. The subscribe form is in one place, opt-in, no theatrics.
- **No A/B testing on the prose.** The voice is the voice. Test layout if you must; don't test rhetoric.

---

## Quick links
- Articles data: `workspace-handvantage-com/lib/insights.ts`
- Insights index: `workspace-handvantage-com/app/insights/page.tsx`
- Article renderer: `workspace-handvantage-com/app/insights/[slug]/page.tsx`
- OG image template: `workspace-handvantage-com/lib/og-card.tsx`
- Voice rules canon: `DESIGN.md` §5
- Site SEO/AEO ops: `DESIGN.md` §9

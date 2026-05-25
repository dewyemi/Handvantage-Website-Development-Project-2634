# Implementation Brief for Claude Code — Visby.ai AI-SEO Recommendations 1–5

**Target site:** `workspace.handvantage.com`
**Prepared:** 2026-05-24 · **Source:** Visby.ai AI-SEO/GEO audit (recommendations 1–5 of 10)
**For:** the Claude Code agent maintaining the marketing website.

---

## Why this work matters (read first)

Visby.ai analysed how AI engines (ChatGPT, Gemini, Claude, Perplexity, Copilot) currently describe Handvantage. The finding: **AI models mis-describe the brand** — they think Handvantage is a generic SMB IT-services and cybersecurity consultancy. They have almost no idea Vantage Workspace exists or what it is.

Two root causes, both fixable on the site:

1. **The content doesn't clearly state what the product is.** The pages need to say, plainly and in crawlable text, that Handvantage builds **Vantage Workspace — a self-hosted, sovereign AI workspace for regulated organizations.**
2. **AI crawlers can't read the site.** Cloudflare / bot protection is blocking the crawlers that feed AI models (Visby itself was blocked). If GPTBot, ClaudeBot, PerplexityBot and Common Crawl can't read the page, AI models never learn the accurate brand — no amount of good copy fixes that.

This brief covers recommendations 1–5. Everything below is the work.

---

## Non-negotiable content rules (apply to every text change)

These are Handvantage brand canon. Do not deviate:

- **Never** put pricing, price ranges, or "starting at" anywhere on the public site.
- **Never** use the word **"multi-tenant."** The product is **single-tenant** — one isolated instance per customer. White-label does not change this.
- **Banned words** — do not use: leverage, transform, robust, synergy, best-in-class, cutting-edge, unleash, empower, revolutionary, game-changing, premier, paradigm shift.
- **Contact routes to `hello@handvantage.com`** for any commercial enquiry.
- **Deployment time is "about an hour" / "under an hour."** Never "ten minutes."
- Compliance: **"A-grade compliance posture across eleven regulatory frameworks"** — verified, may be used confidently. Do **not** resurrect the old "168 tests" claim (retired).
- Security proof: **"10/10 coverage of the OWASP Top 10 for Agentic Applications,"** and the product **ships with an OWASP red-team suite the customer can run against their own deployment.**
- If a claim is not in this brief and you are not certain it is true, **leave it out** — do not invent capabilities or numbers.

---

# Recommendation 1 — Make the site clearly describe the sovereign, self-hosted AI workspace

**Goal:** every key page states, in plain crawlable text, what Vantage Workspace is. Use the approved copy below — it is canon-correct. Place it as real HTML body text, not inside images or JS-only components.

### 1a. One-line definition (use near the top of the home page, in the hero or just below it)

> Vantage Workspace is a self-hosted, sovereign AI workspace for regulated organizations — a complete productivity suite plus AI that takes real action, all running on infrastructure the customer owns.

### 1b. "What it is" paragraph (home page intro / product page lead)

> Handvantage builds Vantage Workspace, a self-hosted, sovereign AI workspace for regulated organizations. It runs a complete productivity suite — email, files, chat, meetings, documents, document signing, and identity — plus AI operators that take real action: composing and sending email, scheduling meetings, managing files and project boards. It is single-tenant by design: one isolated instance per customer, deployed on infrastructure the customer owns. Nothing routes through a third party.

### 1c. Feature blocks (use as a "What you get" / features section — each is a heading + body)

**AI that acts, not just answers.** The AI composes and sends email, schedules meetings, manages files and project boards, and posts to team channels. Every action that changes something waits for a human's approval first.

**Your data stays yours.** Self-hosted on the customer's own infrastructure. Files, email, chat, even AI web search — nothing routes through a third party.

**Provable governance.** Every AI prompt is firewalled before it reaches the model. Every action is signed to a named person and logged. The audit trail maps to eleven regulatory frameworks, so "were the controls running?" is answered with evidence, not a policy document.

**One platform instead of a dozen.** Email, files, chat, meetings, documents, document signing, and identity — consolidated, with single sign-on included.

**Single-tenant by design.** One isolated instance per customer. Never a shared cloud.

**Proven security.** 10/10 coverage of the OWASP Top 10 for Agentic Applications, and an OWASP red-team suite that ships with the product — the customer can run it against their own deployment, any time.

**Fast to deploy.** A standard deployment stands up in about an hour.

### 1d. Audience line (use on home and/or an "industries" section)

> Built for regulated mid-to-large organizations — financial services, healthcare, public sector, legal, manufacturing and energy — and for the MSPs, MSSPs, and vCISO practices that serve them.

### 1e. Structured data — add these JSON-LD blocks

Add the following `<script type="application/ld+json">` blocks. Put Organization + SoftwareApplication site-wide (or at least on the home page); FAQPage is covered in Recommendation 5. Fill the `TODO` placeholders from the real site (logo path, social URLs).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Handvantage",
  "url": "https://workspace.handvantage.com",
  "logo": "https://workspace.handvantage.com/TODO-logo.png",
  "description": "Handvantage builds Vantage Workspace, a self-hosted, sovereign AI workspace for regulated organizations.",
  "email": "hello@handvantage.com",
  "sameAs": [
    "TODO-LinkedIn-company-URL",
    "TODO-X-URL"
  ]
}
</script>
```

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vantage Workspace",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Self-hosted (Linux)",
  "description": "A self-hosted, sovereign AI workspace for regulated organizations. A complete productivity suite — email, files, chat, meetings, documents, signing, identity — plus AI operators that take real action, with every action firewalled, signed, and logged across eleven regulatory frameworks. Single-tenant: one isolated instance per customer.",
  "featureList": [
    "Self-hosted, single-tenant deployment on the customer's own infrastructure",
    "AI operators that take real action, with human approval before anything changes",
    "Every AI action firewalled, signed to a named person, and logged",
    "Audit trail mapped to eleven regulatory frameworks",
    "10/10 coverage of the OWASP Top 10 for Agentic Applications",
    "Ships with an OWASP red-team suite the customer can run themselves",
    "Email, files, chat, meetings, documents, signing, and identity in one platform",
    "Deploys in about an hour"
  ],
  "provider": {
    "@type": "Organization",
    "name": "Handvantage",
    "url": "https://workspace.handvantage.com"
  }
}
</script>
```

Note: do **not** add an `offers`/price field to the SoftwareApplication block. A validator may warn that price is missing — that warning is expected and acceptable; pricing never goes on the public site.

### Acceptance criteria (Rec 1)
- Home and product pages explicitly state the self-hosted, single-tenant, sovereign nature of Vantage Workspace, in crawlable body text.
- The seven feature blocks and the compliance/security claims appear as real HTML text.
- Organization and SoftwareApplication JSON-LD validate in Google's Rich Results Test.
- No banned words, no pricing, no "multi-tenant."

---

# Recommendation 2 — Two technical blog posts on AI action logging & compliance

**Goal:** publish two in-depth technical posts. Detailed, factual content is exactly what AI models learn from — it corrects the brand misconception at the source.

**Division of work:** the Handvantage marketing engine will supply the finished, brand-voiced drafts. Claude Code's job is to **publish them properly**: clean semantic HTML, server-side rendered, correct heading hierarchy, `Article` schema, and internal links to the product pages. The two briefs below define each post so the page scaffolding can be prepared now.

### Post A — "Inside the Audit Trail: How Vantage Workspace Signs and Logs Every AI Action"
- **Audience:** CISOs, compliance/GRC leads, technical evaluators.
- **Covers:** the AI action workflow end to end — prompt firewalled → action proposed by the AI → human approval → action executed → action cryptographically signed to a named person → logged → mapped to regulatory frameworks. Include a workflow diagram. Explain what an auditor sees and the exportable Trust Report.
- **Target terms:** sovereign AI, AI audit trail, AI action logging, agentic AI governance, AI compliance evidence.
- **Length:** ~1,200–1,600 words.

### Post B — "One Tenant, One Instance: The Sovereign Architecture Behind Vantage Workspace"
- **Audience:** CTOs, infrastructure and security architects.
- **Covers:** the single-tenant, self-hosted model — one isolated instance per customer; what runs where; the OWASP Top 10 for Agentic Applications coverage; the red-team suite the customer can run themselves; bring-your-own-model and identity-provider federation; deploys in about an hour. Include an architecture diagram.
- **Target terms:** self-hosted AI workspace, single-tenant AI, sovereign AI architecture, OWASP agentic AI security, self-hosted alternative to cloud AI.
- **Length:** ~1,200–1,600 words.

### Acceptance criteria (Rec 2)
- Two technical posts live, server-side rendered, indexed by search engines.
- Each post: one H1, logical H2/H3 hierarchy, `Article` JSON-LD, internal links to the product page.
- Terminology matches this brief's canon exactly.

---

# Recommendation 3 — Make the site crawlable (this is the highest-priority fix)

**Goal:** AI crawlers and search engines can read the full content in raw HTML, without executing JavaScript, and are not blocked by Cloudflare.

### 3a. Server-side rendering / static HTML — Claude Code
- Audit how the site renders. If key content (the product description, feature blocks, compliance text, FAQ) only appears after client-side JavaScript runs, **fix it** — use SSR or static pre-rendering so the content is present in the initial HTML response.
- Verify: `curl https://workspace.handvantage.com` (or "View Source") must show the actual headline, product description, feature text, and FAQ — not an empty `<div id="root">`.
- Ensure `<title>`, `<meta name="description">`, Open Graph tags, and all JSON-LD are in the server-rendered `<head>`.

### 3b. robots.txt — allow AI crawlers — Claude Code
Many sites unintentionally block the bots that feed AI models. Ensure `robots.txt` explicitly **allows** these user-agents (do not `Disallow` them):

```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://workspace.handvantage.com/sitemap.xml
```

`CCBot` (Common Crawl) matters — a large share of LLM training data flows through it. Confirm a valid `sitemap.xml` exists and is referenced.

### 3c. Cloudflare settings — JOSH must do this in the Cloudflare dashboard (not code)
Visby's audit explicitly flagged Cloudflare/bot protection as blocking access. In the Cloudflare dashboard for `handvantage.com`:
- **Turn OFF "Block AI bots / Block AI Scrapers and Crawlers."** Cloudflare often enables this by default. For a marketing site whose entire goal is AI visibility, this setting is working directly against you.
- **Review "Bot Fight Mode."** If on, it challenges legitimate crawlers. Either disable it for this hostname or add a WAF exception for the AI/search user-agents listed above.
- Check WAF / firewall rules for anything blocking those user-agents or by region.

> Claude Code: flag section 3c clearly to Josh — it is a dashboard change, not a code change, and the content fixes are wasted if the crawlers stay blocked.

### Acceptance criteria (Rec 3)
- "View Source" / `curl` shows the full product content and JSON-LD in raw HTML.
- robots.txt allows all AI and search crawlers; sitemap.xml is valid and linked.
- Cloudflare no longer blocks AI crawler user-agents (Josh confirms).
- A re-scan in Visby successfully reads the site.

---

# Recommendation 4 — Exactly one H1, clean heading hierarchy

**Goal:** one `<h1>` on the page, at the top of the main content, stating the value proposition; clean H1 → H2 → H3 nesting.

### Tasks — Claude Code
- The current H1 — **"Your team will use agentic AI. The platform underneath them should be yours."** — is a strong value-proposition headline. Keep it.
- Confirm it is a single `<h1>` at the start of `<main id="main-content">`.
- Scan the whole page: there must be **no second `<h1>`** anywhere (check headers, hero variants, embedded components).
- Verify the rest of the page steps down logically — section titles `<h2>`, sub-points `<h3>` — with no skipped levels.

### Acceptance criteria (Rec 4)
- Exactly one `<h1>` in the rendered HTML, at the top of main content.
- Heading order is semantically correct (H1 → H2 → H3, no jumps).

---

# Recommendation 5 — FAQ structured data (FAQPage JSON-LD)

**Goal:** add a visible FAQ section **and** matching `FAQPage` JSON-LD. Generative engines lift Q&A content directly into answers — this is one of the highest-leverage GEO moves.

**Important:** the JSON-LD must mirror **visible** on-page FAQ content (Google requires the schema to match what users see). So: render the Q&A as a real FAQ section on the page, then mirror it in JSON-LD.

### 5a. FAQ content (canon-correct — use verbatim as the visible FAQ and in the schema)

**What is Vantage Workspace?**
Vantage Workspace is a self-hosted, sovereign AI workspace for regulated organizations. It combines a full productivity suite — email, files, chat, meetings, documents — with AI operators that take real action, all running on infrastructure the customer owns.

**Is Vantage Workspace cloud-based or self-hosted?**
Self-hosted. It runs on the customer's own infrastructure, and it is single-tenant — one isolated instance per customer. It is never a shared cloud.

**What can the AI actually do?**
The AI takes real action: it composes and sends email, schedules meetings, manages files and project boards, and posts to team channels. Every action that changes something waits for a human's approval first.

**How does Vantage Workspace handle compliance?**
Every AI prompt is firewalled before it reaches the model, and every action is signed to a named person and logged. The audit trail maps to eleven regulatory frameworks, including the EU AI Act, NIST AI RMF, ISO 42001, and Canada's TBSDADM. The platform holds an A-grade compliance posture.

**How is Vantage Workspace secured?**
It has 10/10 coverage of the OWASP Top 10 for Agentic Applications, and it ships with an OWASP red-team suite the customer can run against their own deployment at any time.

**What is included in the platform?**
Email, files, chat, meetings, documents, document signing, and identity — one platform, with single sign-on included rather than bought separately.

**How long does deployment take?**
A standard deployment stands up in about an hour.

**Who is Vantage Workspace for?**
Regulated mid-to-large organizations — financial services, healthcare, public sector, legal, manufacturing and energy — and the MSPs, MSSPs, and vCISO practices that serve them.

**Can we use our own AI model and identity provider?**
Yes. Customers can bring their own model and federate to their existing identity provider.

### 5b. FAQPage JSON-LD (embed before `</body>` or in `<head>`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Vantage Workspace?",
      "acceptedAnswer": { "@type": "Answer", "text": "Vantage Workspace is a self-hosted, sovereign AI workspace for regulated organizations. It combines a full productivity suite — email, files, chat, meetings, documents — with AI operators that take real action, all running on infrastructure the customer owns." }
    },
    {
      "@type": "Question",
      "name": "Is Vantage Workspace cloud-based or self-hosted?",
      "acceptedAnswer": { "@type": "Answer", "text": "Self-hosted. It runs on the customer's own infrastructure, and it is single-tenant — one isolated instance per customer. It is never a shared cloud." }
    },
    {
      "@type": "Question",
      "name": "What can the AI actually do?",
      "acceptedAnswer": { "@type": "Answer", "text": "The AI takes real action: it composes and sends email, schedules meetings, manages files and project boards, and posts to team channels. Every action that changes something waits for a human's approval first." }
    },
    {
      "@type": "Question",
      "name": "How does Vantage Workspace handle compliance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Every AI prompt is firewalled before it reaches the model, and every action is signed to a named person and logged. The audit trail maps to eleven regulatory frameworks, including the EU AI Act, NIST AI RMF, ISO 42001, and Canada's TBSDADM. The platform holds an A-grade compliance posture." }
    },
    {
      "@type": "Question",
      "name": "How is Vantage Workspace secured?",
      "acceptedAnswer": { "@type": "Answer", "text": "It has 10/10 coverage of the OWASP Top 10 for Agentic Applications, and it ships with an OWASP red-team suite the customer can run against their own deployment at any time." }
    },
    {
      "@type": "Question",
      "name": "What is included in the platform?",
      "acceptedAnswer": { "@type": "Answer", "text": "Email, files, chat, meetings, documents, document signing, and identity — one platform, with single sign-on included rather than bought separately." }
    },
    {
      "@type": "Question",
      "name": "How long does deployment take?",
      "acceptedAnswer": { "@type": "Answer", "text": "A standard deployment stands up in about an hour." }
    },
    {
      "@type": "Question",
      "name": "Who is Vantage Workspace for?",
      "acceptedAnswer": { "@type": "Answer", "text": "Regulated mid-to-large organizations — financial services, healthcare, public sector, legal, manufacturing and energy — and the MSPs, MSSPs, and vCISO practices that serve them." }
    },
    {
      "@type": "Question",
      "name": "Can we use our own AI model and identity provider?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Customers can bring their own model and federate to their existing identity provider." }
    }
  ]
}
</script>
```

### Acceptance criteria (Rec 5)
- A visible FAQ section is on the page with the eight–nine Q&As above.
- FAQPage JSON-LD is present, valid, and its text matches the visible FAQ.
- Passes Google's Rich Results Test for FAQ.

---

## Consolidated checklist for Claude Code

- [ ] Rec 1 — Sovereign/self-hosted product copy live as crawlable text on home + product pages.
- [ ] Rec 1 — Organization + SoftwareApplication JSON-LD added and validating.
- [ ] Rec 2 — Two blog-post pages scaffolded (SSR, one H1 each, Article schema) — ready for the marketing drafts.
- [ ] Rec 3 — Site server-side rendered; full content visible in raw HTML / "View Source".
- [ ] Rec 3 — robots.txt allows all AI + search crawlers; sitemap.xml valid and linked.
- [ ] Rec 3 — **Flagged to Josh:** Cloudflare "Block AI bots" OFF, Bot Fight Mode reviewed.
- [ ] Rec 4 — Exactly one H1; clean heading hierarchy.
- [ ] Rec 5 — Visible FAQ section + matching FAQPage JSON-LD, passing Rich Results Test.
- [ ] No banned words, no pricing, no "multi-tenant" anywhere in the changes.

---

*Recommendations 6–10 from the Visby audit are held for a second pass. All product claims in this brief are verified against Handvantage canon build S121.*

# Website Content Canon — workspace.handvantage.com

**For:** the Claude Code agent maintaining the Handvantage marketing website.
**Status:** standing reference — read before any content change. Reflects platform build **S129** (2026-06-07).
**How to use this file:** keep it in the website repo (ideally as, or referenced from, `CLAUDE.md` so it loads every session). This is the single source of truth for public-facing claims. **If something is not in this file and you are not certain it is true, do not put it on the site — leave it out and ask Josh.**

---

## 1. What Handvantage and Vantage Workspace are

Handvantage builds **Vantage Workspace** — a **self-hosted, sovereign AI workspace where your AI workforce works alongside your humans.** It combines two things on purpose:

1. **A workspace** — the sovereign self-hosted environment for files, mail, chat, documents, meetings, document signing, and identity. Keycloak + Nextcloud + Matrix + Stalwart, in-box and federation-friendly.
2. **An AI workforce** — named AI Workers that work inside that workspace with the same identity model, the same audit trail, and the same governance every human teammate already has.

Neither half stands alone. The workspace is what gives the AI workforce its identity and audit trail. The AI workforce is what makes the workspace something more than another self-hosted productivity stack. **Frame both halves together; never just one.**

The core idea: enterprise AI today forces a bad trade — a convenient cloud chatbot that sends your data somewhere you don't control and only answers questions, *or* a pile of open-source tools with no AI and no governance. Vantage Workspace ends that trade-off: AI Workers that take real action, behind a single sign-on, every action audited, every byte under the customer's own roof.

Handvantage also runs a cybersecurity **consultancy** (penetration testing, AI security assessments, advisory). The website `workspace.handvantage.com` is the **Vantage Workspace product site** — keep its content product-focused unless Josh says otherwise.

### Canonical product naming

- **Vantage Workspace** is the canonical product name. The platform.
- **The workspace layer** is the sovereign self-hosted environment half (files, mail, chat, documents, meetings, identity).
- **The AI workforce** is the agent half — the named AI Workers that work inside the workspace.
- **Vantage Workforce** (used alone as a product name) is NOT correct. The workforce is *inside* the workspace; the platform name is Vantage Workspace. When in doubt, default to **Vantage Workspace**.

---

## 2. Approved claims — these are true and may be used

Use this wording (or close paraphrase). Verified against build S129.

- **Self-hosted and sovereign.** Runs on the customer's own infrastructure — bare metal, VM in any cloud, MSSP-managed rack, sovereign cloud region, or air-gapped appliance. No SaaS dependency. Files, mail, chat, even AI web search — nothing routes through a third party.
- **Single-tenant.** One isolated instance per customer. (See §3 — never say "multi-tenant.")
- **AI Workers, not AI assistants.** The verb is **hire**, not deploy. Each AI Worker is a named, identity-having teammate with their own Keycloak identity, Nextcloud account, Matrix presence, and Stalwart mailbox. When an AI Worker sends an email, it comes from their own mailbox and the reply lands in their own inbox — not a shared monitor account. When they save a file, the activity reads as their name uploading it — not "admin acting for X."
- **AI that acts, not just answers.** AI Workers compose Word/Excel/PDF/PowerPoint files in their own name, save them to the right shared folder, send them from their own mailbox, schedule meetings, manage files and project boards, post to team channels. Every action that changes something waits for a human's approval first.
- **Provable governance.** Every AI prompt is firewalled before it reaches the model; every action is signed to a named person and logged. The audit trail maps to **eleven regulatory frameworks** — including NIST AI RMF, ISO 42001, the EU AI Act, ISO 27001, SOC 2 Type II, PCI DSS v4.0, HIPAA, PIPEDA, OWASP LLM Top Ten, GDPR, and Canada's TBSDADM.
- **A-grade compliance posture** across those eleven frameworks. (Verified — may be stated confidently.)
- **OWASP security.** 10/10 coverage of the OWASP Top 10 for Agentic Applications. The product ships with an **OWASP red-team suite the customer can run** against their own deployment, any time.
- **OpenClaw on Zero-Trust Infrastructure, with NemoClaw at the data plane.** OpenClaw is the open-source AI agent runtime. NemoClaw is the security layer at the AI ingress — a PII/PHI redaction firewall that scans every prompt before it touches a model, with deterministic redaction and per-data-source allowlists. **OpenClaw runs the AI Workers; NemoClaw locks down what those Workers can touch.**
- **One platform instead of a dozen.** Email, files, chat, meetings, documents, document signing, and identity — consolidated, with single sign-on included.
- **Fast to deploy.** A standard deployment stands up in **about an hour / under an hour** — one shell script and one `.env`.
- **It anticipates.** Proactive daily briefings, inbox and calendar monitoring, specialist AI Workers that route each question to the right expertise.
- **Bring your own model**, and **federate to your existing identity provider.** Provider-agnostic across OpenAI, Anthropic, local Ollama, ChatGPT Pro, and any HTTP-compatible model API — per-AI-Worker daily USD ceiling enforced at the router.
- **Resellable through the MSSPs you already trust.** White-label everywhere. Per-customer licensing. No Microsoft-style "you must have a Microsoft contract" gate.
- **Who it's for:** regulated mid-to-large organizations — financial services, healthcare, public sector, legal, manufacturing and energy, biotech — and the MSPs, MSSPs, and vCISO practices that serve them.

### Microsoft Scout — the peer-architecture framing

On 2 June 2026 Microsoft announced **Microsoft Scout**, "powered by OpenClaw open-source technology, with every agent operating under its own governed identity, not a shared, anonymous service account." Four days later, Vantage Workspace shipped the same architecture end-to-end on infrastructure the customer owns, with NemoClaw at the data plane.

Frame as **peer architecture, not substitute.** The approved framings:

- *"Microsoft Scout is a feature you resell. Vantage Workspace is a business you own."*
- *"When the world's largest enterprise software vendor confirms your architecture, you don't pivot — you accelerate."*
- *"Microsoft Scout runs OpenClaw inside Microsoft 365. Vantage Workspace runs the same architecture on infrastructure customers own — including the regulated environments Scout can't reach."*

Banned framings: "alternative to Microsoft Scout," "Scout-but-cheaper," "Scout-but-open-source." Vantage is a peer, not a substitute.

---

## 3. Hard NOs — never do these

**Pricing.** Never put pricing, price ranges, tiers, "starting at" amounts, or dollar figures on the public site — **anywhere, including the /partners page.** The three tier names (Workspace Starter, Workspace Compliance, Workspace Sovereign) may appear on /partners as a capability comparison, but never with dollar amounts attached. Every commercial enquiry routes to a strategy session at `pages.handvantage.com` or `hello@handvantage.com`.

**No individual AI Worker names in public copy.** Lena Voss, Marcus Chen, David Kim, Priya Sharma, Sofia Reyes are **demo names** used in customer demonstrations and internal trials only. Public website copy refers to "AI Workers," "the AI workforce," "your AI teammates" — in the abstract. Customers fork-and-rename the archetypes to fit their own brand; the names are starting points, not products. Role labels for the platform's seeded archetypes (Pilot, Analyst, Concierge, Hunter, Sentry) are fine — those are job titles, not personal names.

**No location framing in hero or body copy.** Handvantage is British Columbia-based, but location is rarely relevant to the buyer. Use BC/Canadian framing only where structurally needed — footer legal address, contact-us page, regulatory filings. Do not say "Vancouver-based," "BC-based," "Toronto-based," or any city dateline in hero copy, page heads, or body copy. The product is sovereign-by-default — it runs in the customer's jurisdiction, not ours.

**No specific EU AI Act enforcement dates.** Do not cite "2 August 2026," "2 December 2026," "2 December 2027," or any other specific enforcement date in customer-facing content. Per orchestrator's superior-view position, dates are not propagated until verified against primary sources. Use this framing instead: *"The platform ships with current assessment templates for the EU AI Act and the other ten frameworks, kept up to date as the enforcement schedule advances."* The platform-feature claim is what's defensible; the date claim is not.

**Never say "multi-tenant."** The product is single-tenant — one isolated instance per customer. White-label does not change this.

**Banned words** (corporate-speak / hype): leverage, transform (as generic), robust, synergy, synergize, best-in-class, cutting-edge, unleash, empower, revolutionary, game-changing, premier, paradigm shift, thought leader, disrupt, solution (as generic), seamless, world-class.

**Banned phrases (S129):**
- "Encrypted OpenClaw" → say **"OpenClaw on Zero-Trust Infrastructure"**
- "Copilots" / "Autopilots" → say **"AI Workers" / "the AI workforce"** (Microsoft's product names; do not adopt)
- "AI assistant" / "AI chatbot" → say **"AI Worker" / "the AI workforce"** (the product is a workforce, not assistance)
- "Alternative to Microsoft Scout" / "Scout-but-X" → say **"the AI workforce that runs where Scout doesn't go"** (peer architecture, not substitute)

**No fear-based language.** No "URGENT," "ALARMING," "DEVASTATING," "CRITICAL THREAT." Lead with value, not fear. No exclamation marks. No emoji.

**Internal URLs must never appear on the public site.** Anything on the `handvantageai.com` domain is the internal/demo instance — `app.handvantageai.com` (bare domain — **internal-only, never on the public site**), `workspace.handvantageai.com`, `chat.handvantageai.com`, `id.handvantageai.com`, `security.handvantageai.com`. None of these go on the public website. The `/desk` subpath (`app.handvantageai.com/desk`) is fine for customer-access deep links only — never the bare domain.
- **Public-facing URLs only:** `workspace.handvantage.com` (this site), `pages.handvantage.com` (strategy-session booking — primary CTA destination), `blog.handvantage.com`, `secvantages.com` (sister-brand assessments), and email `hello@handvantage.com`. Note the domain is **handvantage.com**, not handvantageai.com.

**Retired claims — never resurrect these:**
- ❌ "168 automated tests" / any hard test-count number. (Superseded — say "an automated security test suite" or use the OWASP red-team proof instead.)
- ❌ "ten-minute deploy" / "deploys in ten minutes." (Marketing says **about an hour** — we deliberately under-promise.)
- ❌ "B-grade" compliance. (It is A-grade.)
- ❌ "Encrypted OpenClaw." (Always "OpenClaw on Zero-Trust Infrastructure.")
- ❌ Specific EU AI Act dates (2 August 2026, 2 December 2027, etc.) in customer-facing content.

**Don't invent.** No features, integrations, customer names, metrics, or certifications that aren't in this file. Plausible is not the same as true. When unsure, leave it out and ask Josh.

---

## 4. Brand voice

Sound like the smartest friend who happens to be a security expert — explaining something clearly over coffee, never lecturing. Editorial in shape: *NYT* opinion column, *Economist* briefing. Coffee-chat in register.

- **Lead with insight or a real situation, not a product pitch.** A pattern from the field beats a feature.
- **Analogy-driven.** When explaining a technical concept, lead with a concrete analogy from outside the technical domain (records room, key to the drawer, junior banker with the company credit card, sharp new hire). The analogy carries the insight before any product language enters.
- **Outcome-led.** The reader hears what's true about *their* situation before they hear anything about Vantage Workspace.
- **Plain language** — if a CEO would need a glossary, rewrite it.
- **Short paragraphs, conversational rhythm.** Short sentences mixed with longer ones. No exclamation marks. No emoji. Generous whitespace in long-form.
- **Headlines in sentence case ending with a period** — statement, not label. *"The compliance conversation just changed shape."* not *"The Compliance Conversation Just Changed Shape"*.
- **Backed by numbers.** "Eleven frameworks" beats "comprehensive coverage." "About an hour" beats "rapid deployment." "Thirty seconds" beats "fast onboarding."
- **Slightly self-deprecating.** "We've all been on the wrong side of a follow-up sequence we couldn't get out of."
- **Soft CTA** — woven in naturally, never forced. Default CTA destinations: `pages.handvantage.com` (strategy session), `hello@handvantage.com` (email), `secvantages.com` (relevant assessment).

### Show-don't-tell voice patterns

Imitate the GOOD examples in shape, not the rules in abstract. (Source: HANDOFF-manus/04-voice-and-canon.md.)

**On generic claims**
- ❌ BAD: *Our robust platform delivers cutting-edge AI governance.*
- ✅ GOOD: *The platform ships with eleven framework templates and a one-line install. Customers verify it on a fresh deployment in under an hour.*

**On "AI assistant" / "Copilot"**
- ❌ BAD: *Our AI assistant helps your team draft proposals faster.*
- ✅ GOOD: *Your AI sales worker drafts the proposal under their own name, saves it into the right Sales folder, and emails it from their own mailbox. The next person on the team sees the file where they'd look for any other file.*

**On Microsoft Scout**
- ❌ BAD: *Vantage is the open-source alternative to Microsoft Scout.*
- ✅ GOOD: *Microsoft Scout runs OpenClaw open-source agents inside Microsoft 365. Vantage Workspace runs the same architecture on infrastructure customers own — including the regulated environments Scout can't reach.*

**On NemoClaw**
- ❌ BAD: *Vantage uses proprietary NemoClaw technology to provide best-in-class security.*
- ✅ GOOD: *OpenClaw runs the AI Workers. NemoClaw locks down what those Workers can touch. The combination is what makes the same architecture deployable in a hospital network — or an air-gapped public-sector environment.*

**On regulatory framing**
- ❌ BAD: *The EU AI Act deadline is 2 August 2026 — only 56 days away. Don't get caught out.*
- ✅ GOOD: *The platform's assessment module covers the EU AI Act alongside ten other frameworks. The templates update as the enforcement schedule advances, so the report a regulator asks for is the report the platform already produces.*

The pattern across every GOOD example: **a specific moment, a specific person or system, a concrete outcome, ending in a small insight the reader can take with them.** Imitate the shape.

---

## 5. Named framings (the recurring analogies)

These analogies are part of the brand voice. They earn the right to be repeated because they each land an insight cleanly. Source: HANDOFF-manus/04-voice-and-canon.md.

- **The records-room hook** — *"Connecting an AI Worker to your company's data is like handing a sharp new hire a key to the records room. The question was never whether they're capable. It's whether they know which drawers to leave shut."* Use as the opening for any piece about AI-to-data access, redaction, or audit-by-named-user. Works across every vertical (PHI for healthcare, KYC for fintech, citizen records for government, privileged matter for legal, trial data for biotech).
- **The junior-banker frame** — fintech-specific analog. *"When the AI in your KYC flow gets the same key as a junior banker — but without the supervision, the chain of command, or the audit trail every junior banker is trained to leave behind."*
- **The intern-with-root-access frame** — agentic-AI specific. *"Deploying AI agents without security is like giving your intern root access and the company credit card."*
- **The four-questions diagnostic** — self-test for any AI feature in production. *Open the request log. Pick one query the AI ran in the last week. Now: which user's session triggered it? Which records did the AI fetch as context? What did the AI return? Can you reconstruct that whole trail from existing logs?*
- **The shift framing** — *"Eighteen months ago, a vendor security questionnaire asked: 'Is your data encrypted at rest? Do you publish a SOC 2 report?' The questionnaire landing this quarter asks something different: 'What controls do you have on the AI's access to customer data? Where's the audit trail by named user, for the last 90 days?'"* The bedrock insight.
- **The policy-to-evidence framing** — shorter form. *"The compliance posture questions of 2024 were policy questions. The compliance posture questions of 2026 are evidence questions."*
- **The board-deck framing** — for CIO/Board audiences. *"The board asks: 'What's our AI strategy?' The team builds a deck. Six months later, a payor asks: 'What's your audit trail for AI access to customer data, by named user, for the last 90 days?' The deck didn't cover that."*

---

## 6. Vertical page conventions

Each vertical landing page follows the same 9-section structure. The H1 is a specific scene, the records-room hook (or a vertical analog) is the opening insight, the compliance tile names the frameworks relevant to that vertical, the provider tile names the integrations that actually exist, and a NemoClaw line goes in the compliance/security tile.

**Approved per-vertical H1 anchors:**
- `/healthcare` — *"The records room used to have a door. Your AI has the keys."* (records-room hook stays as the canonical opening for healthcare.)
- `/fintech` — *"When the AI in your KYC flow gets the same key as a junior banker."*
- `/government` — *"Citizen data does not leave the perimeter — and neither should the AI."*
- `/legal` — *"Your AI just got privileged information. Does the bar know?"*
- `/biotech` — *"Your AI just touched a clinical-trial dataset. Is that in your TMF?"*

**Approved per-vertical compliance framework lists:**
- Healthcare — HIPAA, NIST AI RMF, ISO 42001, EU AI Act (assessment templates), SOC 2 Type II, PIPEDA, GDPR; vertical: 21 CFR Part 11 where in scope
- Fintech — SOC 2 Type II, PCI DSS v4.0, ISO 27001, EU AI Act (assessment templates), GDPR, PIPEDA; vertical: OSFI E-23, FFIEC, FINRA, NYDFS Part 500
- Government — TBSDADM (Canada), NIST AI RMF, FedRAMP Moderate, FISMA, EU AI Act (assessment templates), PIPEDA, GDPR
- Legal — ABA Formal Opinion 512, SRA Code of Conduct, GDPR, PIPEDA, SOC 2 Type II, ISO 27001, EU AI Act (assessment templates)
- Biotech — 21 CFR Part 11, GxP, ICH E6(R3), HIPAA, GDPR, EU AI Act (assessment templates), SOC 2 Type II

**Approved per-vertical provider tile claims:**
- Healthcare — *Native FHIR-compliant data access; Epic FHIR read-only (7 tools, no writes).*
- Fintech — *Native Stripe + Paystack read with dispute watch; refunds confirmation-gated. ACH, SWIFT, ISO 20022, and major card-network message formats handled.*
- Government — *FedRAMP-aligned deployment patterns. Air-gap-capable. Sovereign cloud regions or on-prem rack.*
- Legal — *Native Relativity, iManage, NetDocuments. eDiscovery + DMS systems.*
- Biotech — *Native REDCap, electronic-lab-notebook, eTMF. CDISC-compliant exports.*

These claims are sourced from the S129 product knowledge (HANDOFF-manus/03-product-knowledge.md, §"Tier 1 — role-bound") and may be stated. Anything beyond this list, leave out and ask Josh.

---

## 7. Keeping this current

This file reflects platform build **S129** (2026-06-07). When the platform updates, this canon updates — Josh or the marketing engine will revise it. Do not update product claims from other sources (changelogs, internal docs, your own inference). The marketing engine owns canon; the website consumes it.

**Source files this canon derives from** (in `/Users/olayemioyeniyi/Documents/GitHub/marketing-engine-canon/`):
- `_ops/CANON-DIFF-S129-2026-06-07.md` — master change log for the S129 refresh
- `_ops/DECISIONS-LOG.md` — full decision history (2026-05-31 entry: MSP pricing locked; 2026-06-07 entry: S129 product canon)
- `HANDOFF-manus/03-product-knowledge.md` — primary product canon (dual workspace+workforce framing, NemoClaw graduation, Microsoft Scout positioning)
- `HANDOFF-manus/04-voice-and-canon.md` — voice rules + BAD/GOOD example pairs
- `HANDOFF-manus/09-guardrails.md` — CAN DO / MUST ESCALATE / NEVER DO
- `HANDOFF-manus/10-glossary.md` — every term used in customer-facing copy
- `Marketing files/01-pioneer-dossier-2026-06.md` — strategic frame for the Microsoft Scout moment
- `Marketing files/02-S129-headline-changes.md` — the four S129 platform capability headlines

When in doubt about a term, check `10-glossary.md` first. If not there, ask Josh before using it externally.

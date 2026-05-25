# Website Content Canon — workspace.handvantage.com

**For:** the Claude Code agent maintaining the Handvantage marketing website.
**Status:** standing reference — read before any content change. Reflects platform build **S121** (2026-05-24).
**How to use this file:** keep it in the website repo (ideally as, or referenced from, `CLAUDE.md` so it loads every session). This is the single source of truth for public-facing claims. **If something is not in this file and you are not certain it is true, do not put it on the site — leave it out and ask Josh.**

---

## 1. What Handvantage and Vantage Workspace are

Handvantage builds **Vantage Workspace** — a **self-hosted, sovereign AI workspace for regulated organizations.** It is a complete productivity suite (email, files, chat, meetings, documents, document signing, identity) **plus AI operators that take real action**, all running on infrastructure the customer owns.

The core idea: enterprise AI today forces a bad trade — a convenient cloud chatbot that sends your data somewhere you don't control and only answers questions, *or* a pile of open-source tools with no AI and no governance. Vantage Workspace ends that trade-off: AI that does real work, behind a single sign-on, every action audited, every byte under the customer's own roof.

Handvantage also runs a cybersecurity **consultancy** (penetration testing, AI security assessments, advisory). The website `workspace.handvantage.com` is the **Vantage Workspace product site** — keep its content product-focused unless Josh says otherwise.

---

## 2. Approved claims — these are true and may be used

Use this wording (or close paraphrase). These are verified against build S121.

- **Self-hosted and sovereign.** Runs on the customer's own infrastructure. Files, email, chat, even AI web search — nothing routes through a third party.
- **Single-tenant.** One isolated instance per customer. (See §3 — never say "multi-tenant.")
- **AI that acts, not just answers.** AI operators compose and send email, schedule meetings, manage files and project boards, and post to team channels. Every action that changes something waits for a human's approval first.
- **Provable governance.** Every AI prompt is firewalled before it reaches the model; every action is signed to a named person and logged. The audit trail maps to **eleven regulatory frameworks** — including the EU AI Act, NIST AI RMF, ISO 42001, and Canada's TBSDADM.
- **A-grade compliance posture** across those eleven frameworks. (Verified — may be stated confidently.)
- **OWASP security.** 10/10 coverage of the OWASP Top 10 for Agentic Applications. The product ships with an **OWASP red-team suite the customer can run** against their own deployment, any time.
- **One platform instead of a dozen.** Email, files, chat, meetings, documents, document signing, and identity — consolidated, single sign-on included.
- **Fast to deploy.** A standard deployment stands up in **about an hour / under an hour.**
- **It anticipates.** Proactive daily briefings, inbox and calendar monitoring, specialist agents that route each question to the right expertise.
- **Bring your own model**, and **federate to your existing identity provider.**
- **Who it's for:** regulated mid-to-large organizations — financial services, healthcare, public sector, legal, manufacturing and energy — and the MSPs, MSSPs, and vCISO practices that serve them.

---

## 3. Hard NOs — never do these

**Pricing.** Never put pricing, price ranges, tiers, or "starting at" on the public site. Every commercial enquiry routes to **hello@handvantage.com**.

**Never say "multi-tenant."** The product is single-tenant — one isolated instance per customer. White-label does not change this.

**Banned words** (corporate-speak / hype): leverage, transform, robust, synergy, synergize, best-in-class, cutting-edge, unleash, empower, revolutionary, game-changing, premier, paradigm shift, thought leader.

**No fear-based language.** No "URGENT," "ALARMING," "DEVASTATING," "CRITICAL THREAT." Lead with value, not fear.

**Internal URLs must never appear on the public site.** Anything on the `handvantageai.com` domain is the internal/demo instance — `app.handvantageai.com` (and `/desk`, `/mobile`, `/engine`), `workspace.handvantageai.com`, `chat.handvantageai.com`, `id.handvantageai.com`, `security.handvantageai.com`. None of these go on the public website.
- **Public-facing URLs only:** `workspace.handvantage.com` (this site), `secvantages.com` (assessments), `blog.handvantage.com`, `pages.handvantage.com`, and email `hello@handvantage.com`. Note the domain is **handvantage.com**, not handvantageai.com.

**Retired claims — never resurrect these:**
- ❌ "168 automated tests" / any hard test-count number. (Superseded — say "an automated security test suite" or use the OWASP red-team proof instead.)
- ❌ "ten-minute deploy" / "deploys in ten minutes." (Marketing says **about an hour** — we deliberately under-promise.)
- ❌ "B-grade" compliance. (It is A-grade.)
- ❌ "Encrypted OpenClaw." (If OpenClaw is ever referenced, the correct phrase is "OpenClaw on Zero-Trust Infrastructure.")

**Don't invent.** No features, integrations, customer names, metrics, or certifications that aren't in this file. Plausible is not the same as true. When unsure, leave it out and ask Josh.

---

## 4. Brand voice

Sound like the smartest friend who happens to be a security expert — explaining something clearly over coffee, never lecturing.

- Lead with insight or a real situation, not a product pitch.
- Plain language — if a CEO would need a glossary, rewrite it.
- Short paragraphs, conversational rhythm.
- Confident but not arrogant; helpful, not salesy.
- Analogy-friendly: complex security/AI ideas land best through everyday comparisons.
- Specific beats vague — real frameworks, real dates, real capabilities (from §2).
- Soft CTA — woven in naturally, never forced. Default CTA destination: a conversation via `hello@handvantage.com` or the relevant `secvantages.com` assessment.

---

## 5. Keeping this current

This file reflects platform build **S121**. When the platform updates, this canon updates — Josh or the marketing engine will revise it. Do not update product claims from other sources (changelogs, internal docs, your own inference). The marketing engine owns canon; the website consumes it.

For the current AI-SEO work, this file pairs with **`Claude-Code-Visby-AISEO-Brief-2026-05-24.md`** — that brief is the task list; this file is the guardrail that keeps every change accurate and on-brand.

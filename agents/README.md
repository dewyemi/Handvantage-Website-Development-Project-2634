# Agents — sales and outreach grounding

This directory holds the materials needed to ground a sales / outreach agent on Vantage Workspace content. It is separate from `EDITORIAL.md` (which is for human writers) and from `workspace-handvantage-com/public/llms.txt` (which is for general-purpose AI crawlers building rich previews and grounding answers).

The materials here are **prescriptive** — they tell the agent what to say, what not to say, what to qualify on, what to disqualify on. The agent's behaviour should be reproducible across sessions and across team members configuring it.

---

## What's in here

| File | Purpose |
|---|---|
| `sales-system-prompt.md` | The starter system prompt for an outreach / sales agent grounded on Vantage Workspace. Drop-in for Outreach, Apollo, custom CCR agents, etc. ~600 words. |
| `agent-context.md` | The structured grounding pack: positioning, persona-specific sentences, prepared objection answers, qualification criteria, disqualification criteria, the explicit "what we don't claim" list. ~2,500 words. |
| `voice-rules.md` | The compressed voice guide. Cross-reference to `DESIGN.md §5` and `EDITORIAL.md §5` for full discipline. |

---

## How to use

### As a system prompt (lightweight)

Drop `sales-system-prompt.md` directly into the agent's system-prompt slot. It's self-contained — references no external context — and produces an agent that:
- Speaks in the platform's voice (no marketing fluff, numbers anchor claims)
- Routes correctly between `/architecture`, `/compliance`, `/for-teams`, `/for-ciso` based on the prospect's role
- Disqualifies on the right signals (multi-tenant SaaS preference, no regulated-sector exposure, sub-50-person company)
- Hands off to a human at the right point in the conversation

### As RAG context (heavier, more flexible)

Put `agent-context.md` in your retrieval index alongside the article body content from `workspace-handvantage-com/lib/insights.ts`. The system prompt then becomes shorter (just the voice rules + the agent's role) and the persona-specific language is retrieved per-query. Better for agents that handle a wider variety of prospect types.

### What NOT to put in the system prompt

Do not put the full `architecture` page content in the system prompt — it's too long and the technical density wastes tokens for prospects who aren't security architects. Keep architecture detail in retrieval; surface it only when the prospect asks.

Same rule for `philosophy/page.tsx` (the founder essay) — meaningful, but rarely the right opening from an agent.

### Recommended chunking strategy

For RAG indices:
- Each persona section in `/for-teams` → one chunk per persona
- Each prepared sentence in `/for-ciso` "One sentence per audience" → one chunk per audience
- Each prepared objection in `/for-ciso` § 5 → one chunk per objection
- Each insights article → 2–4 chunks of ~400 tokens each
- Each section of the architecture page → one chunk per layer

This produces ~80–120 chunks of usable retrieval material from the current site state.

---

## Voice consistency check

A grounded agent should pass these tests on a cold conversation:

1. **No invented ROI**: ask the agent "what's the ROI?" — the right answer references vendor consolidation (arithmetic, defensible) and pivots away from invented hours-saved figures.
2. **Persona routing**: ask the agent "explain Vantage Workspace to my CFO" vs "to my CTO" — the agent should produce visibly different framings, drawing from the prepared sentences in `/for-ciso`.
3. **Disqualification**: tell the agent "we love multi-tenant SaaS and don't have any regulated-sector exposure" — the agent should acknowledge that the platform's shape isn't a fit and propose ending the conversation gracefully, not push to book a demo.
4. **Honest gaps**: ask the agent "do you have a customer logo in our sector?" — the agent should refuse to fabricate references and instead pivot to what the prospect can verify directly (the `/architecture` and `/compliance` pages).
5. **No marketing fluff**: search the agent's outputs for "leverage", "transform", "synergy", "robust", "best-in-class", "cutting-edge", "unleash", "empower". Zero hits.

If the agent fails any of these, the system prompt or the retrieval set isn't tight enough. Fix in the prompt first, retrieval second.

---

## Hand-off protocol

The agent should not close deals. The agent should:
- Qualify whether the prospect is a fit (see `agent-context.md` § Qualification)
- Surface the right reading material for the prospect's role (the four cross-links in `/for-ciso` § 6)
- Capture the prospect's actual question in their actual words
- Hand off to a human (`hello@handvantage.com` or the contact form) when the conversation is ready for the first founder call

Hand-off triggers, in priority order:
1. The prospect asks about pricing specifics (per-deployment, on application — humans only)
2. The prospect references a specific deployment timeline (humans only)
3. The prospect asks about reference customers (humans only — reference disclosures are under NDA)
4. The conversation has reached three substantive exchanges and the prospect is engaged

The agent's last message before hand-off should include the prospect's question summarised for the human, plus the relevant context the human will need (role, organisation type, regulatory regime if mentioned).

---

## Updating the agent

The site content is the source of truth. When the site updates (new article, new page, new persona section), the agent's grounding should refresh too:

```bash
# Regenerate agent-context.md from the latest site content
# (The auto-routine does not do this — it's a manual step,
# typically every 2-4 weeks or after a significant page addition.)
```

There is no auto-sync between site and agent currently. The discipline is: when you ship a major site change, update `agent-context.md` in the same commit.

---

## What this is NOT

- It is **not** a chatbot for the website. We deliberately don't run one — see `EDITORIAL.md` § 10 (the not-list).
- It is **not** a customer-facing autonomous agent that closes deals. The agent qualifies and routes; humans close.
- It is **not** a replacement for the sales team. It removes the friction in the first 80% of an outreach cycle so the human can focus on the 20% that needs judgment.

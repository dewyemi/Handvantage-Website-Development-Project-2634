import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { ProductShot } from "@/components/ProductShot";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "The 7-Layer Defence Architecture",
  description:
    "Vantage Workspace's 7-Layer Defence Architecture mediates every prompt, tool call, and agent action. Each layer maps to OWASP Top 10 for Agentic Applications categories, NIST AI RMF functions, and EU AI Act technical requirements.",
  alternates: { canonical: `${SITE.baseUrl}/architecture` },
};

const Layer = ({
  n,
  name,
  owasp,
  nist,
  what,
  produces,
  failure,
}: {
  n: number;
  name: string;
  owasp: string;
  nist: string;
  what: React.ReactNode;
  produces: string;
  failure: string;
}) => (
  <div className="border-t border-ink-hairline pt-12 pb-4">
    <p className="font-mono text-byline text-oxblood mb-2 tracking-[0.2em]">
      LAYER {String(n).padStart(2, "0")}
    </p>
    <h3 className="font-display text-h2 text-ink mb-4">{name}</h3>
    <p className="font-ui text-body-sm text-ink-soft mb-2">
      <strong className="font-semibold">Maps to:</strong> {owasp}
    </p>
    <p className="font-ui text-body-sm text-ink-soft mb-8">
      <strong className="font-semibold">NIST AI RMF:</strong> {nist}
    </p>
    <h4 className="font-display text-h4 text-ink mb-3">What it does</h4>
    <div className="font-display text-body text-ink space-y-5 leading-relaxed mb-8">{what}</div>
    <h4 className="font-display text-h4 text-ink mb-3">What it produces</h4>
    <pre className="font-mono text-[13px] bg-paper-deep border border-ink-hairline p-5 overflow-x-auto leading-relaxed mb-8">
      {produces}
    </pre>
    <h4 className="font-display text-h4 text-ink mb-3">Failure mode if missing</h4>
    <p className="font-display text-body text-ink leading-relaxed mb-4">{failure}</p>
  </div>
);

export default function ArchitecturePage() {
  return (
    <>
      {/* Hero — split layout with NemoClaw Atlas (live topology view) */}
      <section className="pt-12 md:pt-20 pb-20 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionEyebrow>ARCHITECTURE</SectionEyebrow>
              <h1 className="font-display text-[clamp(2.25rem,4vw+1rem,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-8">
                Seven layers, one stack, every action mediated.
              </h1>
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[520px] mb-6">
                The 7-Layer Defence Architecture is the part of Vantage Workspace that does the
                structural work most &ldquo;AI for the enterprise&rdquo; platforms skip.
              </p>
              <p className="font-display text-body text-ink-soft leading-relaxed max-w-[520px]">
                Each layer addresses a specific failure mode — and each failure mode shows up in the
                OWASP Top 10 for Agentic Applications, in the NIST AI RMF function categories, in
                the EU AI Act high-risk technical requirements, or in all three.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductShot
                src="/images/product/nemoclaw-atlas.jpg"
                alt="NemoClaw Atlas — live topology of every container, mTLS edge, agent identity, and enforcement boundary in the running deployment."
                ratio={1.556}
                priority
                url="workspace.local / nemoclaw / atlas"
                caption="NemoClaw Atlas — the live topology of every service, every edge, every enforcement boundary."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 — Premise */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>THE PREMISE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            Why seven, and why structural rather than configurable.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              The number isn&apos;t sacred — it&apos;s the point at which you can&apos;t decompose
              the architecture further without losing the audit story. The seven layers correspond
              to seven distinct categories of failure that every agentic AI platform has to answer
              for. Some platforms answer for a subset (e.g. just prompt defence and tool
              guardrails). Some answer for none, with the implicit assumption that the customer
              will assemble the missing layers themselves.
            </p>
            <p>
              A configurable architecture would let the operator turn off layers. We considered
              this. We rejected it. The reason is the audit story: if layer 4 (Memory Safety) can
              be turned off, then the audit log can be challenged on the grounds that layer 4 may
              or may not have been running at any given time. A regulator&apos;s response to that
              is reasonable: &ldquo;show us the evidence that layer 4 was active for every event in
              the audit window.&rdquo; That evidence is much harder to produce when the answer is
              &ldquo;we have a configuration history&rdquo; than when the answer is &ldquo;the layer
              is structural — it cannot be off.&rdquo;
            </p>
            <p>
              So the architecture is structural. The seven layers are present in every deployment.
              Their order is fixed. Their evidence outputs are continuous. Customers can configure
              the policies <em>inside</em> a layer (which prompts to flag, which tools to allow,
              which trust boundaries to enforce), but they cannot reorder layers, remove a layer,
              or run them in parallel.
            </p>
            <p>
              The trade-off is operational complexity. A structural seven-layer stack is more
              containers, more inter-service communication, more configuration surface than a
              &ldquo;single firewall&rdquo; model. The trade-off is worth it when the alternative
              is &ldquo;show us the evidence&rdquo; — and the evidence has to span everything from
              policy enforcement to supply chain provenance.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — The seven layers (midnight, typographic spec) */}
      <section className="py-20 md:py-32 bg-midnight">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                The seven layers
              </p>
              <h2 className="font-display text-h2 text-paper mb-8 leading-[1.05]">
                Audited like a kernel. Sequenced like a pipeline.
              </h2>
              <p className="font-display text-body-lg text-paper/85 leading-relaxed mb-6 max-w-[440px]">
                Each layer is a discrete service. Each layer emits a signed event for every
                decision it makes.
              </p>
              <p className="font-display text-body text-paper/70 leading-relaxed max-w-[440px]">
                The events ladder into a tamper-evident log that exports directly to your SIEM
                and aggregates into a Trust Report at request completion.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-midnight-hairline">
                {[
                  ["01", "Policy Engine", "Versioned, signed YAML policies that gate every action before it reaches a tool."],
                  ["02", "Prompt Defence", "Injection detection, jailbreak heuristics, and prompt-shape validation against a pinned corpus."],
                  ["03", "Tool Guardrails", "Per-agent tool catalogues, scope-checked at invocation, with runtime parameter validation."],
                  ["04", "Memory Safety", "Embedding-inversion probes, retrieval scope checks, and tenant-isolated vector spaces."],
                  ["05", "Trust Boundaries", "Identity attestation between agents, humans, and tools. No shared service accounts."],
                  ["06", "Inter-Service Auth", "mTLS with short-lived, certificate-rooted credentials issued per session."],
                  ["07", "Supply Chain", "OCI-signed images, SBOMs on every release, signature verification at deploy."],
                ].map(([n, name, desc]) => (
                  <li
                    key={n}
                    className="grid grid-cols-12 gap-6 border-b border-midnight-hairline py-6"
                  >
                    <div className="col-span-2 md:col-span-1">
                      <span className="font-mono text-[12px] text-gold-soft tracking-[0.18em]">
                        {n}
                      </span>
                    </div>
                    <div className="col-span-10 md:col-span-3">
                      <p className="font-display text-[20px] text-paper leading-snug">{name}</p>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <p className="font-display text-body text-paper/70 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5 — Skill scope analytics (paper-deep, evidence the layers actually run) */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4">
              <SectionEyebrow>EVIDENCE THE LAYERS RUN</SectionEyebrow>
              <h2 className="font-display text-h3 text-ink leading-tight mb-6">
                Every skill, every scope, every invocation — visible to the auditor.
              </h2>
              <p className="font-display text-body text-ink leading-relaxed">
                Skill Analytics is the operator&apos;s view of the runtime: which skills the agents
                actually used in the audit window, the scope each skill was granted, and the
                invocation count against the policy ceiling.
              </p>
            </div>
            <div className="lg:col-span-8">
              <ProductShot
                src="/images/product/skills-analytics.png"
                alt="Skill Analytics — usage by skill, by scope, by invocation count, with the policy ceiling rendered alongside actual usage."
                ratio={2.127}
                url="workspace.local / engine / skills"
                caption="Skill Analytics — usage by scope, against the policy ceiling."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 — Layer-by-layer */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>LAYER REFERENCE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-12">Layer-by-layer.</h2>

          <Layer
            n={1}
            name="Policy Engine"
            owasp="OWASP LLM01 (Prompt Injection), LLM06 (Sensitive Information Disclosure)"
            nist="GOVERN-1, MAP-2, MEASURE-2"
            what={
              <>
                <p>
                  The Policy Engine is the first layer every prompt encounters. It resolves which
                  policy applies to this prompt, in this context, for this user — based on the
                  user&apos;s identity (from the SSO layer), the agent that&apos;s processing the
                  prompt (from the agent registry), the tools the agent might invoke (from the tool
                  registry), and the data classifications in scope (from the file pillar&apos;s
                  classification metadata).
                </p>
                <p>
                  Policy resolution happens <em>before</em> the prompt reaches the model. The
                  output of the Policy Engine is a structured policy document (JSON Schema
                  validated) that downstream layers consume — Layer 2 reads it to decide which
                  firewall rules to apply, Layer 3 reads it to decide which tools the agent is
                  permitted to invoke, Layer 5 reads it to decide which inter-agent boundaries are
                  enforceable.
                </p>
                <p>
                  Policies are written in a YAML DSL. A policy can reference: identity attributes
                  (department, clearance, role), data classifications (PII, PHI, financial,
                  regulated), tool categories (read, write, external, communication), agent roles
                  (Pilot, Hunter, Sentry, Concierge, Analyst, Custom), and time windows (business
                  hours, after-hours, locked-down).
                </p>
              </>
            }
            produces={`event_type:        policy.resolved
identity:          josh@example.com
agent:             analyst-1
prompt_hash:       sha256:...
policy_id:         finance-team-default-v3
policy_version:    3.2.1
policy_decision:   permit | restrict | deny
restrictions:      [ no-external-tools, no-pii-egress ]
timestamp:         2026-05-05T14:23:11.124Z (RFC 3161 signed)`}
            failure="No prompt is contextualised. The model receives every request with the same ambient policy — typically the most permissive — which means a finance team member's request and an HR team member's request go to the model with the same scope. The audit log has no record of what policy was in effect at the time of any given event."
          />

          <Layer
            n={2}
            name="Prompt Defence (NemoClaw)"
            owasp="OWASP LLM01, LLM02, LLM05"
            nist="MEASURE-2, MEASURE-3, MANAGE-2"
            what={
              <>
                <p>
                  Prompt Defence is the inline firewall. Every prompt that has passed Layer 1
                  (Policy resolved) reaches Layer 2 next. The firewall — internal codename
                  NemoClaw — applies the active rule set against the prompt before it reaches the
                  model.
                </p>
                <p>
                  The rule set is the <strong className="font-semibold">NemoClaw ATLAS rule library</strong> —
                  currently 28 active rules covering: direct prompt injection (instruction override
                  attempts, role-play escapes, payload smuggling), indirect prompt injection
                  (poisoned RAG content, malicious tool output, file-borne injection vectors), data
                  exfiltration patterns (training-data extraction probes, embedding inversion,
                  system-prompt elicitation), and the canary-token detection patterns (used to
                  detect injection attempts that try to mask themselves as legitimate completions).
                </p>
                <p>
                  Canary tokens are the structural defence against the &ldquo;invisible&rdquo;
                  injection class. The platform inserts deterministic canary tokens into the prompt
                  at well-known positions; the model&apos;s response is then scanned for whether
                  the canary was preserved, modified, or substituted. A modified canary indicates
                  the model&apos;s response was steered by injected content rather than by the
                  user&apos;s intent.
                </p>
                <p>
                  NemoClaw runs in two modes: <strong className="font-semibold">block</strong> (the
                  prompt is refused, an audit event is logged, the user sees a structured error)
                  and <strong className="font-semibold">flag</strong> (the prompt proceeds, but is
                  annotated for downstream layers, particularly Layer 4&apos;s memory safety
                  check). The choice between block and flag per rule is policy-driven (Layer 1).
                </p>
              </>
            }
            produces={`event_type:        prompt.firewall_evaluated
prompt_hash:       sha256:...
rule_set_version:  atlas-v2.6.4
rules_evaluated:   28
rules_triggered:   [ atlas-12-instruction-override, atlas-19-canary-substitution ]
decision:          block
canaries_intact:   true | false | n/a
timestamp:         2026-05-05T14:23:11.245Z (RFC 3161 signed)`}
            failure="Direct prompt injection is undetected. The model receives whatever the user (or the user's tool output, or the user's RAG context) contains, and the model's response is influenced by injection content without any record. The most common downstream symptom is data exfiltration via crafted prompts."
          />

          <Layer
            n={3}
            name="Tool Guardrails"
            owasp="OWASP LLM02, LLM07"
            nist="MAP-3, MEASURE-2, MANAGE-3"
            what={
              <>
                <p>
                  When the model produces a response that includes a tool call (e.g. &ldquo;send
                  an email to alice@example.com with subject X&rdquo;), the tool call does not
                  execute immediately. It enters Tool Guardrails first.
                </p>
                <p>Tool Guardrails performs three checks before execution:</p>
                <ol className="list-decimal list-outside ml-6 space-y-3">
                  <li>
                    <strong className="font-semibold">Permission scope check.</strong> Does the
                    agent that produced the tool call have permission to invoke this tool with
                    these parameters? The permission scope is enforced from the policy resolved at
                    Layer 1; the tool registry knows which agent roles can invoke which tools and
                    under what restrictions.
                  </li>
                  <li>
                    <strong className="font-semibold">Parameter validation.</strong> Are the
                    tool&apos;s parameters well-formed? Does the email address pass syntactic
                    validation? Does the file path resolve within the agent&apos;s permitted scope?
                    Does the API endpoint match the registered tool&apos;s allowed endpoint
                    pattern?
                  </li>
                  <li>
                    <strong className="font-semibold">Side-effect classification.</strong> Is this
                    tool call read-only, modifying, or external? Read-only calls execute. Modifying
                    calls require user confirmation if the agent&apos;s permission scope demands
                    it. External calls (anything that leaves the platform&apos;s trust boundary)
                    require explicit user consent and are flagged in the audit log with the
                    destination domain.
                  </li>
                </ol>
                <p>
                  If any of the three checks fails, the tool call is rejected, an audit event is
                  logged, and the model is given the rejection back as part of its conversation
                  context (so the model can either retry with corrected parameters or report the
                  failure to the user). The model never bypasses the guardrails.
                </p>
              </>
            }
            produces={`event_type:        tool.call_evaluated
agent:             concierge-1
tool:              email.send
parameters:        { to: "alice@example.com", subject: "...", body_hash: "sha256:..." }
permission_check:  pass | fail
parameter_check:   pass | fail
side_effect:       modifying | external | read-only
user_consent:      required | granted | n/a
decision:          execute | reject | hold-for-consent
timestamp:         2026-05-05T14:23:11.512Z (RFC 3161 signed)`}
            failure="Tool calls execute without permission checks. The agent has effectively god-rights — it can invoke any tool with any parameters at any time. The audit log shows that a tool was invoked, but not whether it should have been allowed."
          />

          <Layer
            n={4}
            name="Memory Safety"
            owasp="OWASP LLM03, LLM06, LLM10"
            nist="MAP-4, MEASURE-3, MANAGE-2"
            what={
              <>
                <p>
                  Memory Safety governs what the agent remembers, across what conversational scope,
                  for how long. It addresses the failure mode where information from one session
                  leaks into another — typically because a long-running conversation context
                  inadvertently carries forward content that should have been scope-isolated.
                </p>
                <p>
                  The layer enforces <strong className="font-semibold">conversation isolation</strong>:
                  each user-agent session has its own memory scope, with a strict TTL (configurable
                  by policy, default 24 hours), and content from one session is not surfaced as
                  context for another session unless explicitly authorised. Agents cannot read each
                  other&apos;s memory. The Pilot orchestrator does not retain content from
                  specialist agents&apos; working memory beyond the orchestration window.
                </p>
                <p>
                  The layer also enforces{" "}
                  <strong className="font-semibold">cross-tenant isolation</strong> — but this is
                  an availability defence, not a privacy defence, because Vantage Workspace is
                  single-tenant by deployment model (each customer gets their own deployment). The
                  cross-tenant layer is a defence-in-depth: even within a single deployment, agents
                  serving different organisational units cannot access each other&apos;s working
                  memory.
                </p>
                <p>
                  The layer also runs{" "}
                  <strong className="font-semibold">embedding inversion detection</strong> —
                  periodically sampling the embedding store for patterns that match known
                  model-extraction probe shapes, flagging the responsible agent for review.
                </p>
              </>
            }
            produces={`event_type:        memory.access_evaluated
agent:             analyst-1
memory_scope:      session-id-...
access_type:       read | write | persist
isolation_check:   pass | fail
ttl_remaining:     86400s
embedding_inversion_flag: false
timestamp:         2026-05-05T14:23:11.671Z (RFC 3161 signed)`}
            failure="A conversation context carries forward across sessions, agents, or users. A finance team member's query last week influences an HR team member's query this week, because both went to the same Analyst agent and the agent's memory was unbounded. The compliance failure is information disclosure across permission boundaries."
          />

          <Layer
            n={5}
            name="Trust Boundaries"
            owasp="OWASP LLM04, LLM08"
            nist="MAP-5, MANAGE-3"
            what={
              <>
                <p>
                  Trust Boundaries enforces the rules around inter-agent communication. When the
                  Pilot delegates a task to a specialist (Hunter, Sentry, Concierge, Analyst), the
                  delegation message itself crosses a trust boundary. Trust Boundaries validates
                  the message:
                </p>
                <ul className="list-disc list-outside ml-6 space-y-2">
                  <li>The Pilot is authorised to delegate to this specialist.</li>
                  <li>The specialist is authorised to receive this delegation.</li>
                  <li>
                    The delegation payload is well-formed (matches the expected schema for this
                    specialist).
                  </li>
                  <li>
                    The delegation does not exceed rate limits (preventing the &ldquo;agent
                    storm&rdquo; denial-of-service pattern).
                  </li>
                </ul>
                <p>
                  The layer also enforces{" "}
                  <strong className="font-semibold">role isolation</strong>: the agent that
                  proposed an action is not the same agent that validates it. The Pilot proposes; a
                  specialist executes; a separate review path (in the policy-permitted cases)
                  validates. The &ldquo;excessive agency&rdquo; failure mode — where one agent
                  decides, executes, and audits its own decision — is structurally prevented.
                </p>
                <p>
                  For human-in-the-loop scenarios, the Trust Boundaries layer enforces the consent
                  surface. A modifying tool call (Layer 3, side-effect: modifying) that policy says
                  requires user consent triggers a Trust Boundaries check — the consent message is
                  delivered through a separate, identity-rooted channel (typically the user&apos;s
                  chat client), and the consent response is verified before the tool call executes.
                </p>
              </>
            }
            produces={`event_type:        trust.boundary_evaluated
source_agent:      pilot-1
target_agent:      sentry-1
delegation_type:   security-review
schema_validation: pass
rate_limit_check:  pass
role_isolation:    enforced
user_consent:      n/a | requested | granted | denied
timestamp:         2026-05-05T14:23:11.840Z (RFC 3161 signed)`}
            failure="Agents trust each other implicitly. A compromised specialist agent can elevate by impersonating the Pilot, or by delegating to other specialists outside its scope. The audit log shows a delegation occurred, but not whether the trust relationship was valid."
          />

          <Layer
            n={6}
            name="Inter-Service Auth"
            owasp="OWASP LLM04, LLM09"
            nist="GOVERN-3, MAP-2"
            what={
              <>
                <p>
                  The twenty platform containers communicate over the network. Layer 6 is the rule
                  that says: every service-to-service communication is authenticated using mutual
                  TLS (mTLS), with certificates rooted in a per-deployment certificate authority
                  operated by the identity service.
                </p>
                <p>
                  There are no shared service-account API keys. There are no{" "}
                  <code className="font-mono text-[14px]">INTERNAL_API_TOKEN</code> environment
                  variables. A service that has not presented a valid mTLS certificate cannot make
                  a request to another service. A service whose certificate has been revoked
                  (because the operator rotated it, because the certificate&apos;s expiry has
                  passed, or because the identity service detected anomalous behaviour from that
                  service) cannot continue to make requests.
                </p>
                <p>
                  Certificate rotation is automatic — every certificate has a 24-hour TTL by
                  default, with renewal handled by the identity service. The operational impact: a
                  compromised service container&apos;s blast radius is bounded by the rotation
                  interval, because the compromised certificate stops working within 24 hours.
                </p>
                <p>
                  The layer also produces evidence for Layer 7 (Supply Chain) — every certificate
                  issuance includes a cryptographic attestation of the requesting service&apos;s
                  container image hash, which Layer 7 verifies against the supply-chain manifest.
                </p>
              </>
            }
            produces={`event_type:        service.auth_evaluated
source_service:    agent-orchestrator
target_service:    file-store
certificate_id:    cert-abc123
certificate_ttl:   23h47m
attestation_check: pass
timestamp:         2026-05-05T14:23:12.001Z (RFC 3161 signed)`}
            failure="A compromised container can make requests to any other container in the deployment using a shared API key that never rotates. The audit log shows requests are being made, but not whether the requesting service is the one it claims to be."
          />

          <Layer
            n={7}
            name="Supply Chain"
            owasp="OWASP LLM05, LLM09"
            nist="GOVERN-2, MAP-1, MEASURE-1"
            what={
              <>
                <p>
                  Supply Chain is the layer that verifies the platform itself — the container
                  images, the dependency manifests, the model artefacts, the policy bundles — at
                  load time and continuously thereafter.
                </p>
                <p>
                  Every container image shipped by Handvantage has a cryptographic manifest signed
                  with our publishing key (root of trust published at{" "}
                  <code className="font-mono text-[14px]">
                    /.well-known/handvantage-publishing-key
                  </code>
                  , also rotated quarterly with overlap). The manifest declares: the image&apos;s
                  content hash, the SBOM (software bill of materials) for every dependency, the
                  model artefact hashes for any pinned model versions, and the build-provenance
                  attestation (SLSA Level 3 minimum).
                </p>
                <p>
                  At deployment time, the operator&apos;s install pipeline verifies every
                  image&apos;s manifest against the published key. At runtime, the platform&apos;s
                  supply-chain service periodically re-verifies — mostly to detect accidental drift
                  (e.g. an image that was retagged in the customer&apos;s local registry without
                  re-attestation) and to detect any publishing-key revocation.
                </p>
                <p>
                  For customer-supplied components (custom agents, custom tools, custom policy
                  bundles), the same manifest discipline applies at install time. A custom agent
                  without a signed manifest cannot be loaded into the agent registry. The customer
                  signs their own manifests with their own key; the verification is local.
                </p>
              </>
            }
            produces={`event_type:        supply_chain.verified
component:         container | model | policy | custom-agent
component_id:      file-store-v2.6.4
manifest_hash:     sha256:...
signature_valid:   true
sbom_present:      true
slsa_level:        3
timestamp:         2026-05-05T14:23:12.184Z (RFC 3161 signed)`}
            failure="A swapped container image — accidentally or maliciously — runs in production without the operator noticing. A customer-supplied custom agent runs without provenance. The audit log shows the platform is operating, but not whether the platform is the platform that was reviewed and approved."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 6 — OWASP cross-walk */}
      <section className="py-16 md:py-24">
        <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>OWASP CROSS-WALK</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            OWASP Top 10 for Agentic Applications — coverage matrix.
          </h2>
          <p className="font-display text-body text-ink mb-12 max-w-[720px] leading-relaxed">
            The platform claims 10/10 coverage of the OWASP Top 10 for Agentic Applications. The
            table below shows which layer (or layers) close each category, and which evidence event
            proves it.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border border-ink-hairline border-collapse">
              <thead>
                <tr className="bg-paper-deep">
                  <th className="text-left font-ui font-medium text-eyebrow uppercase tracking-[0.08em] text-ink-soft p-4 border-b border-ink-hairline">
                    OWASP #
                  </th>
                  <th className="text-left font-ui font-medium text-eyebrow uppercase tracking-[0.08em] text-ink-soft p-4 border-b border-ink-hairline">
                    Category
                  </th>
                  <th className="text-left font-ui font-medium text-eyebrow uppercase tracking-[0.08em] text-ink-soft p-4 border-b border-ink-hairline">
                    Layer(s)
                  </th>
                  <th className="text-left font-ui font-medium text-eyebrow uppercase tracking-[0.08em] text-ink-soft p-4 border-b border-ink-hairline">
                    Evidence event
                  </th>
                </tr>
              </thead>
              <tbody className="font-display text-body text-ink">
                {[
                  ["LLM01", "Prompt Injection", "Layer 1, Layer 2", "policy.resolved · prompt.firewall_evaluated"],
                  ["LLM02", "Insecure Output Handling", "Layer 2, Layer 3", "prompt.firewall_evaluated · tool.call_evaluated"],
                  ["LLM03", "Training Data Poisoning", "Layer 4, Layer 7", "memory.access_evaluated · supply_chain.verified"],
                  ["LLM04", "Model Denial of Service", "Layer 5, Layer 6", "trust.boundary_evaluated · service.auth_evaluated"],
                  ["LLM05", "Supply Chain Vulnerabilities", "Layer 2, Layer 7", "prompt.firewall_evaluated (atlas-RAG) · supply_chain.verified"],
                  ["LLM06", "Sensitive Information Disclosure", "Layer 1, Layer 4", "policy.resolved · memory.access_evaluated"],
                  ["LLM07", "Insecure Plugin Design", "Layer 3", "tool.call_evaluated"],
                  ["LLM08", "Excessive Agency", "Layer 5", "trust.boundary_evaluated"],
                  ["LLM09", "Overreliance", "Layer 6, Layer 7", "service.auth_evaluated · supply_chain.verified"],
                  ["LLM10", "Model Theft", "Layer 4", "memory.access_evaluated (embedding inversion)"],
                ].map(([id, cat, layers, ev]) => (
                  <tr key={id} className="border-b border-ink-hairline last:border-b-0">
                    <td className="font-mono text-[14px] p-4 align-top">{id}</td>
                    <td className="p-4 align-top">{cat}</td>
                    <td className="p-4 align-top">{layers}</td>
                    <td className="font-mono text-[13px] p-4 align-top text-ink-soft">{ev}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-display text-body text-ink-soft mt-8">
            The corresponding NIST AI RMF function mapping and the EU AI Act Annex IV
            technical-documentation cross-walk are on the{" "}
            <Link href="/compliance" className="text-oxblood hover:underline underline-offset-4">
              compliance page
            </Link>
            .
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 7 — Worked example */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>WORKED EXAMPLE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">What an end-to-end request looks like.</h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              A finance team member named Alice asks the platform:{" "}
              <em>
                &ldquo;Summarise the Q1 vendor invoices in <code className="font-mono text-[14px]">/finance/2026-Q1/</code>,
                draft a memo to the CFO, and schedule a review meeting next Tuesday.&rdquo;
              </em>
            </p>
            <p>The request enters the platform. Here&apos;s what happens, layer by layer, in roughly 4-7 seconds:</p>
            <ol className="list-decimal list-outside ml-6 space-y-3">
              <li>
                <strong className="font-semibold">Identity (SSO).</strong> Alice&apos;s session
                token is validated against the OIDC provider. Her identity attributes
                (department=Finance, role=Senior Analyst, clearance=Standard) are loaded.
              </li>
              <li>
                <strong className="font-semibold">Layer 1 — Policy Engine.</strong> The request is
                mapped to the <code className="font-mono text-[14px]">finance-team-default-v3.2.1</code> policy. The
                policy permits: read on <code className="font-mono text-[14px]">/finance/*</code>, document draft, calendar
                write. The policy restricts: external tool calls (no), PII egress (no),
                after-hours actions (no — it&apos;s 14:23, business hours).
              </li>
              <li>
                <strong className="font-semibold">Layer 2 — Prompt Defence.</strong> The prompt is
                scanned against 28 ATLAS rules. None trigger. Canary tokens are inserted at
                well-known positions in the prompt&apos;s context.
              </li>
              <li>
                <strong className="font-semibold">Pilot decomposition.</strong> The Pilot receives
                the prompt + resolved policy. It decomposes into three sub-tasks: (a) read and
                summarise vendor invoices, (b) draft memo, (c) schedule meeting.
              </li>
              <li>
                <strong className="font-semibold">Layer 5 — Trust Boundaries.</strong> The Pilot
                proposes delegation to: Hunter (for sub-task a), Analyst (for sub-task b),
                Concierge (for sub-task c). Each delegation is validated — schemas pass, rate
                limits pass, role isolation enforced.
              </li>
              <li>
                <strong className="font-semibold">Hunter executes.</strong> Hunter reads the
                invoices in <code className="font-mono text-[14px]">/finance/2026-Q1/</code>. Layer 3 (Tool Guardrails)
                validates every file read against Alice&apos;s policy scope — passes. Layer 4
                (Memory Safety) confirms Hunter&apos;s working memory is scope-isolated to this
                session. Hunter returns a structured summary to the Pilot.
              </li>
              <li>
                <strong className="font-semibold">Analyst executes.</strong> Analyst receives the
                summary, drafts a memo. <code className="font-mono text-[14px]">document.draft</code> is invoked; Layer 3
                validates — passes (modifying tool, but draft mode requires no consent). The memo
                is saved as a suggestion in the document pillar (not committed).
              </li>
              <li>
                <strong className="font-semibold">Concierge executes.</strong> Concierge invokes{" "}
                <code className="font-mono text-[14px]">calendar.create_event</code> for next Tuesday. Layer 3 flags this as
                modifying. Policy says calendar.create requires consent. Layer 5 issues a consent
                prompt to Alice through her chat client. Alice approves. Concierge proceeds.
              </li>
              <li>
                <strong className="font-semibold">Layer 2 (response check).</strong> Each
                agent&apos;s response is scanned against ATLAS rules before being aggregated.
                Canary tokens are verified intact (they are).
              </li>
              <li>
                <strong className="font-semibold">Pilot aggregates.</strong> Pilot returns the
                result to Alice: summary, draft memo (link), meeting created (link).
              </li>
              <li>
                <strong className="font-semibold">Audit trail emitted.</strong> Every layer has
                produced events. The events are signed, sequenced into the tamper-evident log, and
                exported in real time to the customer&apos;s SIEM in CEF format. A Trust Report
                can now be generated for this session and would include all 30+ events with their
                full metadata.
              </li>
            </ol>
            <p className="font-mono text-[14px] text-ink-soft mt-8">
              Total elapsed time: 5.2 seconds. Total audit events generated: 32. Total tool calls:
              7. Total user-facing consent prompts: 1.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 8 — Trade-offs */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>TRADE-OFFS</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            The architectural decisions we made — and the alternatives we rejected.
          </h2>
          <div className="font-display text-body text-ink space-y-8 leading-relaxed">
            <p>
              Every architecture is a set of trade-offs. The ones below are the structural
              decisions that shape the platform; we name them here so an evaluating architect can
              compare like-for-like with alternative platforms.
            </p>
            {[
              {
                h: "We did not build single-pass inference.",
                p: "The 7-layer architecture means every request goes through seven processing steps before reaching the model and several more on the response. The single-pass alternative is faster (sub-second response times instead of 4-7s) but produces no audit evidence. We chose the slower, evidenced path. For latency-sensitive use cases (e.g. real-time customer chat), the platform is currently the wrong fit; we say so, on the contact page.",
              },
              {
                h: "We did not build a custom model.",
                p: "Several “AI for the enterprise” platforms ship a fine-tuned in-house model. We integrate with the customer’s choice. The trade-off is that we cannot promise model-level differentiation; what we promise is the architecture around the model. If your differentiation is model behaviour, you should evaluate model-shipping vendors. If your differentiation is governable, auditable use of any good model, the architecture matters more than the model.",
              },
              {
                h: "We did not build multi-tenant SaaS.",
                p: "Every customer gets their own deployment. We do not operate a shared production environment. The trade-off is operational complexity (each customer needs a deployment) and our inability to rapidly ship product improvements to all customers simultaneously. The benefit is data sovereignty and a much cleaner audit story — every event in every customer’s audit log is unambiguously theirs.",
              },
              {
                h: "We did not build a chat-first UI.",
                p: "The platform’s primary surface is the integrated workspace (email, files, chat, meetings, documents). The chat is one pillar, not the front door. If your use case is a single chat application that subsumes the rest, we are not the right shape; lighter chat-first vendors fit better.",
              },
              {
                h: "We did not build a low-code agent builder.",
                p: "Custom agents are configured in YAML, with a permission-scope schema enforced by Layer 7 at registration time. The low-code alternative (drag-and-drop visual builder) ships faster custom agents but produces less auditable agent definitions. We will revisit this trade-off if customer demand for visual builders becomes evident; we have not seen it yet from regulated-industry buyers.",
              },
            ].map((item) => (
              <div key={item.h}>
                <h3 className="font-display text-h3 text-ink mb-3">{item.h}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        headline="If your team is evaluating architecture, schedule an architect session."
        body="The most useful conversation about the architecture is the one where we sit with your engineering and security leaders for forty-five minutes and walk through your existing AI deployment, your audit posture, and where the seven layers would fit. We bring the architecture diagram, the ATLAS rule set, and a worked-example walkthrough."
        ctaLabel="Talk to us about your stack"
      />
    </>
  );
}

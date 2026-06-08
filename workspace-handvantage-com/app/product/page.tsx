import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTABlock } from "@/components/CTABlock";
import { ProductShot } from "@/components/ProductShot";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Vantage Workspace",
  description:
    "Vantage Workspace is one platform: email, files, chat, meetings, documents, plus an AI agent layer that operates across all of them. One identity, one signed audit trail, deployed on your infrastructure in an hour for the typical end-to-end install.",
  alternates: { canonical: `${SITE.baseUrl}/product` },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vantage Workspace",
  description:
    "Vantage Workspace is a sovereign agentic AI platform: email, files, chat, meetings, documents, and an AI agent layer (Pilot + Fleet) running on customer infrastructure. One identity, one signed audit trail, and an A-grade compliance posture across eleven regulatory frameworks.",
  url: "https://workspace.handvantage.com/product",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Agentic AI Platform",
  operatingSystem: "Linux (Docker / Kubernetes); air-gapped supported",
  softwareVersion: "1.0",
  releaseNotes: "https://workspace.handvantage.com/insights",
  brand: {
    "@type": "Brand",
    name: "Handvantage",
    url: "https://workspace.handvantage.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Handvantage",
    url: "https://workspace.handvantage.com",
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "CISOs, compliance officers, AI governance leads, security architects, regulated enterprises",
  },
  featureList: [
    "Six-pillar workspace: email, files, chat, meetings, documents, AI agents",
    "Pilot + Fleet agent model with three-level audit attribution",
    "7-Layer Defence Architecture mediating every prompt, tool call, and agent action",
    "Continuous compliance grading across 11 regulatory frameworks (NIST AI RMF, ISO 42001, EU AI Act, SOC 2, PCI DSS v4.0, HIPAA, FINRA, FedRAMP, PIPEDA, Privacy Act Canada, TBSDADM)",
    "Single-tenant deployment: Docker Compose, Kubernetes, or air-gapped",
    "Identity included via Keycloak (preconfigured); federate to Okta, Microsoft Entra ID, Auth0, or Google Workspace via OIDC when present",
    "mTLS between all 20 containers; Fernet-encrypted secret vault",
    "Signed audit log with RFC 3161 timestamps; CEF/LEEF/JSON SIEM exports",
    "Trust Reports with control-mapping appendix and cryptographic signature",
    "Bring-your-own-model support: OpenAI, Anthropic, Azure OpenAI, AWS Bedrock, Vertex, Ollama, vLLM",
  ],
};

const Pillar = ({
  name,
  outcome,
  body,
}: {
  name: string;
  outcome: string;
  body: React.ReactNode;
}) => (
  <div className="border-t border-ink-hairline pt-12 pb-4">
    <p className="font-mono text-byline text-oxblood uppercase tracking-[0.16em] mb-3">
      {name}
    </p>
    <h3 className="font-display text-h3 text-ink mb-6 leading-tight max-w-[760px]">
      {outcome}
    </h3>
    <div className="font-display text-body text-ink space-y-5 leading-relaxed max-w-[720px]">
      {body}
    </div>
  </div>
);

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Hero — split layout: editorial copy + Policy Management UI */}
      <section className="pt-12 md:pt-20 pb-20 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionEyebrow>THE PRODUCT</SectionEyebrow>
              <h1 className="font-display text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-8">
                Vantage Workspace.
              </h1>
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[520px] mb-6">
                The platform we built because the alternative — assembling an
                &ldquo;agentic AI stack&rdquo; out of twelve vendors with twelve identities and
                twelve audit logs — wasn&apos;t a purchase, it was a project.
              </p>
              <p className="font-display text-body text-ink-soft leading-relaxed max-w-[520px] mb-6">
                Vantage Workspace is a self-hosted, sovereign AI workspace for regulated
                organizations. Single-tenant by design — one isolated instance per customer,
                deployed on infrastructure the customer owns. Nothing routes through a third party.
              </p>
              <p className="font-display text-body text-ink-soft leading-relaxed max-w-[520px]">
                This page documents what&apos;s in it, how it&apos;s built, and where the
                architectural decisions came from.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductShot
                src="/images/product/policy-management.jpg"
                alt="Policy Management UI — every agent action governed by a versioned policy, with redaction rules, tool guardrails, and per-action audit hooks declared in YAML and enforced at runtime."
                ratio={1.333}
                priority
                url="workspace.local / engine / policy"
                caption="Policy Management — every action governed by a versioned, signed policy."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 — Six pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>THE PLATFORM</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">Six pillars. One identity.</h2>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px] mb-4">
            Most &ldquo;AI for the enterprise&rdquo; products ship a chatbot. Vantage Workspace
            ships the productivity stack the chatbot needs to be useful. Email, files, chat,
            meetings, documents — and an AI agent layer that operates across all five.
          </p>
          <p className="font-display text-body text-ink-soft leading-relaxed max-w-[720px] mb-12">
            Each pillar leads with what your team actually does with it. The architectural detail
            is in the body for the engineers and architects who care; for everyone else, read the
            headlines.
          </p>

          <Pillar
            name="EMAIL"
            outcome="Your team’s inbox, ten minutes shorter."
            body={
              <>
                <p>
                  A first-class email client built into the platform, not a connector. Threaded
                  inbox, smart folders, signature management, scheduled send, snooze. SMTP, IMAP,
                  and Microsoft 365 / Google Workspace native sync — all under your tenant
                  identity, all logged into the same audit trail as the rest of the platform. The
                  AI agent can read, draft, and send email on behalf of the user (with the
                  user&apos;s per-action consent) and every send is attributed. No shared service
                  account. No &ldquo;email bot&rdquo; that bypasses the user&apos;s identity.
                </p>
                <p>
                  The control surface includes per-user signature templates, per-folder retention
                  policies, and per-thread classification (e.g. &ldquo;client communication&rdquo;,
                  &ldquo;internal&rdquo;, &ldquo;financial&rdquo;), each of which feeds the audit
                  log and the compliance evidence pipeline.
                </p>
              </>
            }
          />

          <Pillar
            name="FILES"
            outcome="Every file your team needs, attributed and rolled-back-able."
            body={
              <>
                <p>
                  Object-store-backed file system with versioning, ACLs, and per-file audit
                  history. S3-compatible API for programmatic access. Drag-and-drop upload,
                  in-browser preview for the standard formats (PDF, DOCX, XLSX, images), and a
                  permission model that integrates with the SSO layer rather than maintaining its
                  own. Encryption at rest (AES-256-GCM), encryption in transit (TLS 1.3, mTLS for
                  inter-service traffic).
                </p>
                <p>
                  The AI agent can read files, summarise them, and (with explicit per-file consent)
                  write them. Every read is logged. Every write produces a versioned record that
                  can be rolled back.
                </p>
              </>
            }
          />

          <Pillar
            name="CHAT"
            outcome="The conversation has the audit trail, automatically."
            body={
              <>
                <p>
                  Channel-based team chat, threaded replies, direct messages, message reactions,
                  file attachments. Integrates with the same identity layer as everything else — a
                  chat message and an email reply from the same user are tied to the same audit
                  trail.
                </p>
                <p>
                  The AI agent can be invoked inside any channel by mention. The agent&apos;s reply
                  is attributed (not anonymised), the prompt is logged, and the response is graded
                  by the post-response checker before it&apos;s posted. If the checker flags a
                  response as policy-violating, the message is held in moderation rather than sent.
                </p>
              </>
            }
          />

          <Pillar
            name="MEETINGS"
            outcome="The recording, the transcript, the action items — already in chat by the time you log out."
            body={
              <>
                <p>
                  Video conferencing built around the same identity model. WebRTC under the hood,
                  recording stored in the file pillar (versioned, ACL&apos;d), transcription
                  processed by an in-platform model (not sent to a third party). Calendar
                  integration via CalDAV / Exchange / Google Calendar.
                </p>
                <p>
                  The AI agent can join a meeting (with the host&apos;s consent), transcribe,
                  summarise, extract action items, and post them into the relevant chat channel —
                  all under the host&apos;s identity and audit trail. Recordings are retained per
                  the per-tenant retention policy.
                </p>
              </>
            }
          />

          <Pillar
            name="DOCUMENTS"
            outcome="The first draft is on the page when you open it."
            body={
              <>
                <p>
                  Collaborative document editing. Real-time co-editing, comment threads, suggestion
                  mode, version history. Markdown-first internally; exports to DOCX, PDF, HTML.
                  Templates for the common business document types (proposal, contract, report,
                  brief).
                </p>
                <p>
                  The AI agent can read documents, suggest edits (visible as suggestions, not
                  direct writes), draft new sections, and produce a Trust Report appendix that
                  lists every AI contribution to the document with its prompt, its model version,
                  and its checker grade.
                </p>
              </>
            }
          />

          <Pillar
            name="AI AGENTS"
            outcome="Five named teammates that handle the work nobody enjoys."
            body={
              <>
                <p>
                  The agent layer is what makes the platform &ldquo;agentic&rdquo; rather than
                  &ldquo;AI-augmented&rdquo;. An agent is a named, role-scoped, audit-logged entity
                  that can read from the platform&apos;s knowledge surface and take actions across
                  the other five pillars. Agents are not user accounts. They have their own
                  identity (verifiable via SSO) and operate under per-action consent from the human
                  they&apos;re acting on behalf of.
                </p>
                <p>
                  The platform ships with a small set of stock agents — Hunter (research), Sentry
                  (security review), Concierge (calendar/scheduling), Analyst (data summarisation),
                  Pilot (orchestration). Custom agents are configured via YAML, not code, with a
                  permission model that&apos;s enforced at the runtime architecture layer. The full
                  agent catalogue is documented in the{" "}
                  <Link
                    href="/architecture"
                    className="text-oxblood hover:underline underline-offset-4"
                  >
                    architecture page
                  </Link>
                  .
                </p>
              </>
            }
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — Pilot + Fleet */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>THE AGENT MODEL</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            Pilot + Fleet — one orchestrator, four specialists, no shared service account.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              The Pilot + Fleet model is how Vantage Workspace structures agent work. Most
              &ldquo;agentic&rdquo; platforms ship one general-purpose agent and let it do
              everything. The failure mode of that pattern is well-documented: the agent&apos;s
              permission scope ends up being the union of every action it might ever need to take,
              which means in practice it has god-rights and the audit log is meaningless.
            </p>
            <p>
              Pilot + Fleet inverts the model. There is one orchestrating agent — the Pilot — that
              decomposes a user&apos;s request into smaller, scoped tasks. The Pilot does not hold
              permissions. It hands each task to a specialist agent in the Fleet (Hunter, Sentry,
              Concierge, Analyst), and the specialist holds the narrow permission set required for
              that task, only for the duration of that task.
            </p>
            <p>This means three things at runtime:</p>
            <ol className="list-decimal list-outside ml-6 space-y-3">
              <li>
                <strong className="font-semibold">The audit log is meaningful.</strong> Every
                action is attributed to the specialist that took it, the Pilot that delegated it,
                and the human user that initiated the request. Three-level attribution, every time.
              </li>
              <li>
                <strong className="font-semibold">The permission scope is minimal.</strong> A
                specialist agent that&apos;s been asked to summarise a document doesn&apos;t have
                permission to send email. A specialist that&apos;s been asked to schedule a meeting
                doesn&apos;t have permission to read files outside the meeting context.
              </li>
              <li>
                <strong className="font-semibold">The failure mode is contained.</strong> If a
                Sentry agent is compromised (e.g. via prompt injection), the blast radius is the
                security-review scope only. It can&apos;t pivot to send email under the user&apos;s
                identity, because email is the Concierge&apos;s permission set, not Sentry&apos;s.
              </li>
            </ol>
            <p>
              The five-agent default catalogue is the starting point. Custom agents can be added —
              an &ldquo;Underwriter&rdquo; agent for an insurance team, an &ldquo;Examiner&rdquo;
              agent for a regulatory review team — using the same YAML configuration. Each new
              agent declares its permission scope explicitly. The runtime enforces the scope. The
              audit log records the enforcement.
            </p>
            <p>
              The full Pilot + Fleet specification, including the YAML schema and the inter-agent
              communication protocol, is documented on the{" "}
              <Link
                href="/architecture"
                className="text-oxblood hover:underline underline-offset-4"
              >
                architecture page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 — Runtime architecture (midnight bg w/ rack illustration) */}
      <section className="bg-midnight py-16 md:py-24 -mx-px">
        <div className="max-w-default mx-auto px-6 md:px-12">
          <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
            The runtime
          </p>
          <h2 className="font-display text-h2 text-paper mb-12">
            One identity. One audit trail. Your perimeter.
          </h2>
          {/* Rack illustration — rendered at its native 4:5 ratio (1122x1402) */}
          <figure className="mb-16 max-w-[460px] mx-auto">
            <div className="relative" style={{ aspectRatio: "1122 / 1402" }}>
              <Image
                src="/images/product/vantage-workspace-rack.png"
                alt="On-prem Agentic AI deployment rack: Governance & Compliance Crown, Observability & Incident Response Kit, Mission Engine Plane, Vector Index Cartridge, Local Model Pod, Secret Vault & Key Management, Network Segmentation Panel, Storage Array, Compute Blade Stack, Enterprise Rack Chassis."
                fill
                loading="lazy"
                sizes="(max-width: 768px) 80vw, 460px"
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
            <figcaption className="mt-6 font-ui text-byline text-paper/60 text-center">
              The deployment as a single rack. Every layer instrumented.
            </figcaption>
          </figure>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <div className="font-display text-body text-paper/85 space-y-6 leading-relaxed">
                <p>
                  Vantage Workspace runs as twenty Docker containers, orchestrated by Docker
                  Compose for single-node deployments and Kubernetes for multi-node. The container
                  set covers: the six pillar services (email, files, chat, meetings, documents,
                  agents), the seven defence-architecture services (one per layer), the identity
                  service, the audit service, the policy service, the cost-tracking service, the
                  metrics service, and the trust-reporter service.
                </p>
                <p>
                  Inter-service communication is over mTLS (mutual TLS) only. No service can talk
                  to another service without presenting a verified certificate; the certificate
                  roots are managed by the inter-service auth layer (Layer 6 of the defence
                  architecture). There is no shared service-account credential anywhere in the
                  stack.
                </p>
                <p>
                  Identity ships with the platform: Keycloak is included and preconfigured.
                  Customers who already operate an identity provider — Okta, Microsoft Entra ID,
                  Auth0, Google Workspace — federate to it via OIDC and keep it as the source of
                  truth; customers without an existing provider use Keycloak directly. Either
                  way, no local user accounts. No bypass authentication for &ldquo;service&rdquo;
                  or &ldquo;admin&rdquo; use cases. The audit log records the identity that
                  triggered
                  every action, even when the action was triggered by a Pilot delegating to a
                  specialist agent.
                </p>
                <p>
                  Per-user OAuth credentials (for connectors to external services like Slack, Jira,
                  Salesforce) are stored in a Fernet-encrypted vault with key rotation handled by
                  the platform. There are no <code className="font-mono text-[14px] text-gold-soft">OAUTH_CLIENT_SECRET</code> environment
                  variables. There are no API keys in <code className="font-mono text-[14px] text-gold-soft">.env</code> files. The vault is
                  the only place secrets exist, and access to the vault is itself audited.
                </p>
              </div>
            </div>
            <div className="md:col-span-2">
              <ul className="border-t border-midnight-hairline">
                {[
                  ["CONTAINERS", "20", "Docker / Kubernetes"],
                  ["INTER-SERVICE TLS", "mTLS", "Certificate-rooted"],
                  ["SSO", "OIDC", "Okta · Azure AD · Google · Keycloak"],
                  ["SECRETS", "Fernet vault", "Key-rotated, audited"],
                  ["LOGGING", "Single trail", "Signed timestamps"],
                  ["EXPORT", "CEF / LEEF / JSON", "SIEM + warehouse"],
                ].map(([label, value, subline]) => (
                  <li key={label} className="border-b border-midnight-hairline py-4">
                    <p className="font-mono text-[10px] text-gold tracking-[0.18em] mb-1">{label}</p>
                    <p className="font-display text-[18px] text-paper leading-tight">{value}</p>
                    <p className="font-ui text-[12px] text-paper/55 mt-1">{subline}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5 — Deployment */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>DEPLOYMENT</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            About an hour on infrastructure you already operate.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              Vantage Workspace is deployed on infrastructure the customer controls. We do not
              operate a shared SaaS. There is no shared production environment where your
              data sits next to another customer&apos;s data. Single-tenant — one isolated
              instance per customer. The deployment models are:
            </p>
            <p>
              The first is <strong className="font-semibold">single-node Docker Compose</strong> —
              for evaluation, pilot deployments, and small teams. Twenty containers, one Postgres
              instance, one Redis instance, one Nginx ingress. Deployable on a single 8-core / 32GB
              VM. The reference install is published as a GitHub Actions workflow that takes a
              fresh Ubuntu 24.04 server from zero to a running platform. Allowing for identity
              federation (where the customer brings their own provider), policy YAML configuration
              for the customer&apos;s tool catalogue, and SIEM export wiring, a standard
              deployment stands up in about an hour.
            </p>
            <p>
              The second is <strong className="font-semibold">multi-node Kubernetes</strong> — for
              production deployments at scale. Helm chart with values for replica counts,
              persistent volumes, ingress class, certificate manager integration, external
              Postgres / Redis / object store endpoints. The chart is published in a
              customer-accessible Helm repository.
            </p>
            <p>
              The third is <strong className="font-semibold">air-gapped</strong> — for customers
              operating in classified or no-internet environments. We provide an OCI image bundle
              (tar.gz of the twenty container images plus signature manifest) and an offline
              install script. No external runtime dependency on Handvantage infrastructure. License
              validation is offline (cryptographically signed license file, periodic revocation
              check via an out-of-band channel).
            </p>
            <p>
              In all three models, the data plane stays in the customer&apos;s environment. The
              control plane stays in the customer&apos;s environment. There is no &ldquo;phone
              home&rdquo; from the running platform to Handvantage&apos;s servers. The only
              Handvantage-operated infrastructure the customer interacts with is the OCI image
              registry and the documentation site.
            </p>
          </div>
        </div>

        {/* Infrastructure Overview — wide 4:1 strip rendered at native ratio */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
          <ProductShot
            src="/images/product/infrastructure-overview.jpg"
            alt="The Engine — Infrastructure Overview: zero-trust container topology, health checks, certificate bindings, and policy attachments visible across the full deployment."
            ratio={4.07}
            url="workspace.local / engine / infrastructure"
            caption="The Engine — Infrastructure Overview. One pane, every container, every probe."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 6 — Evidence (paper-deep, Compliance Dashboard) */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>EVIDENCE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            The evidence is contemporaneous because the platform makes it so.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              Every action the platform takes — every email sent, file read, document edited, agent
              delegation, tool call, identity check, configuration change — produces an audit
              event. The events are signed with timestamps from a trusted time source (RFC 3161
              TSA), sequenced into a tamper-evident log (Merkle-tree-rooted, periodically
              anchored), and exported in three formats simultaneously: CEF and LEEF for SIEM
              integration (Splunk, Sentinel, Elastic, Sumo Logic), JSON for data warehousing
              (Snowflake, BigQuery, Databricks), and human-readable HTML/PDF for compliance
              documentation.
            </p>
            <p>
              The HTML/PDF export is the <strong className="font-semibold">Trust Report</strong>.
              A Trust Report can be generated for any time window, any user, any agent, any
              document, any tool — or a combination. The report includes:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>The events in scope (with their full metadata)</li>
              <li>The policy that was in effect at the time of each event</li>
              <li>The compliance grade as of the time the report was generated</li>
              <li>
                A control-mapping appendix showing which events satisfy which control under each of
                the eleven supported regulatory frameworks
              </li>
              <li>
                A signed cryptographic hash of the report itself, anchored against the
                platform&apos;s tamper-evident log
              </li>
            </ul>
            <p>
              A Trust Report is the artefact a customer hands to an auditor. The auditor verifies
              the signature against the public verification key. The auditor verifies the events
              against the events the auditor independently sees in the customer&apos;s SIEM (which
              the platform fed in real time). The two should reconcile to the byte.
            </p>
            <p>
              This is what &ldquo;contemporaneous evidence&rdquo; means in the EU AI Act. It is not
              a quarterly attestation. It is not a Word document. It is a tamper-evident,
              third-party-verifiable record of every relevant action the platform took, mapped to
              the controls the regulator cares about, generated continuously rather than
              reconstructed retrospectively.
            </p>
            <p>
              The full evidence specification — event schemas, log signing protocol, Trust Report
              template — is in the{" "}
              <Link href="/compliance" className="text-oxblood hover:underline underline-offset-4">
                compliance page
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Live evidence — sin-blocked.jpg at its native 2:1 ratio */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 mt-16">
          <ProductShot
            src="/images/product/sin-blocked.jpg"
            alt="The Trust Report flagging a blocked output: Social Insurance Number detected in agent draft, redaction applied, event signed and committed to the tamper-evident audit log."
            ratio={1.98}
            url="workspace.local / trust / events"
            caption="A real event from the audit log: SIN detected, redacted, signed, exported."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 7 — Boundaries */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>BOUNDARIES</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            What Vantage Workspace deliberately does not do.
          </h2>
          <div className="font-display text-body text-ink space-y-8 leading-relaxed">
            <p>
              Most product pages list features. This section lists non-features — the things the
              platform deliberately does not do, why, and what the alternative is.
            </p>
            <div>
              <h3 className="font-display text-h3 text-ink mb-3">
                Vantage Workspace does not host your model.
              </h3>
              <p>
                The platform integrates with your choice of LLM provider — OpenAI, Anthropic, Azure
                OpenAI, AWS Bedrock, Google Vertex, or self-hosted (Ollama, vLLM, TGI). We do not
                ship a &ldquo;Handvantage AI model&rdquo;. The point of the platform is the
                architecture around the model, not the model itself. If your AI strategy requires a
                specific model (Claude for legal review, GPT-4 for code, a fine-tuned in-house
                model for customer support), the platform routes prompts to the right model based
                on policy, with the routing decision logged.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-3">
                Vantage Workspace does not analyse your data outside your environment.
              </h3>
              <p>
                There is no Handvantage analytics endpoint that the running platform calls home to.
                The cost-tracking, the usage metrics, the agent activity logs — all of it stays in
                the customer&apos;s environment. We do not have a data lake of customer activity.
                We never will.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-3">
                Vantage Workspace does not &ldquo;auto-improve&rdquo; from your data.
              </h3>
              <p>
                The platform does not fine-tune any model on your data. The platform does not ship
                &ldquo;feature improvements&rdquo; that were trained on observed usage from any
                customer. Model behaviour is deterministic against the model version pinned in your
                deployment; upgrading the model version is an explicit operator action with a
                published changelog.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-3">
                Vantage Workspace does not include identity, secrets management, or directory
                services.
              </h3>
              <p>
                The platform integrates with whatever you already operate (Okta, Auth0, Azure AD,
                Google Workspace, Keycloak, HashiCorp Vault, AWS Secrets Manager). The platform
                does not try to replace those layers. The decision rationale is documented on the{" "}
                <Link
                  href="/architecture"
                  className="text-oxblood hover:underline underline-offset-4"
                >
                  architecture page
                </Link>
                : identity is too important to re-implement.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-3">
                Vantage Workspace does not &ldquo;auto-classify&rdquo; or &ldquo;auto-redact&rdquo;
                content.
              </h3>
              <p>
                There are policy hooks where a customer can configure classification or redaction
                (e.g. via a connector to Microsoft Purview, AWS Macie, Google DLP, or a custom
                classifier). The platform does not ship its own classifier. The reason is
                operational: classifier behaviour drifts over time, and the customer&apos;s
                compliance team needs control over the classifier&apos;s training and update
                cadence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 8 — Engineering cadence */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>ENGINEERING CADENCE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">Sixty-eight sprints. Zero rollbacks.</h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              The release cadence is two-week sprints. Sixty-eight sprints have shipped since the
              v0.1 release. None have been rolled back to production after deployment. The
              discipline that produces this number is:
            </p>
            <ul className="list-disc list-outside ml-6 space-y-3">
              <li>
                <strong className="font-semibold">
                  Every sprint ships a release candidate to a pre-production deployment that
                  mirrors a real customer environment.
                </strong>{" "}
                The release candidate runs for the full two-week sprint. Defects identified in the
                release candidate go into the next sprint&apos;s plan; the candidate doesn&apos;t
                ship until the defect rate is zero.
              </li>
              <li>
                <strong className="font-semibold">
                  Every release candidate runs the full automated test suite.
                </strong>{" "}
                An automated security test suite. The suite covers the seven defence layers, the OWASP Top 10
                categories, the identity flows, the audit log integrity, and a fuzzed
                prompt-injection corpus. The suite runs in CI on every commit and on every release
                candidate.
              </li>
              <li>
                <strong className="font-semibold">
                  Every release candidate is graded by the same{" "}
                  <code className="font-mono text-[14px]">/assess</code> mission that grades the
                  production deployment.
                </strong>{" "}
                If the release candidate&apos;s compliance grade is lower than production&apos;s,
                the release does not ship. If the test suite degrades, the release does not ship.
                If a release ships and a regression is identified within 72 hours, it triggers a
                forensic post-mortem and a hot-fix sprint.
              </li>
              <li>
                <strong className="font-semibold">
                  The platform supports rollback in under ten minutes.
                </strong>{" "}
                Container images are immutable, OCI-signed, retained for the lifetime of the
                deployment. Rolling back is a single Helm or Compose command. We have not used the
                rollback path in production. We rehearse it monthly.
              </li>
            </ul>
            <p>
              The 68-sprint, zero-rollback record is not a marketing claim, it&apos;s the
              operational discipline that lets the platform earn the audit signature it claims. The
              sprint history, the test growth curve, and the assessment grade timeline are
              published in the{" "}
              <Link href="/insights" className="text-oxblood hover:underline underline-offset-4">
                insights archive
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        headline="If you'd like to walk through a deployment, talk to us."
        body="The most useful conversation about Vantage Workspace is the one where we sit with your operator team for thirty minutes and look at your existing identity, audit, and compliance posture. We'll tell you where the platform fits and where it doesn't."
        ctaLabel="Talk to us about a deployment"
      />
    </>
  );
}

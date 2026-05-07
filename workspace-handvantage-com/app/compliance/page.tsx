import type { Metadata } from "next";
import Link from "next/link";
import { ComplianceBadge } from "@/components/ComplianceBadge";
import { ProductShot } from "@/components/ProductShot";
import { FrameworkGrid } from "@/components/FrameworkGrid";
import { CTABlock } from "@/components/CTABlock";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { COMPLIANCE, SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: `Compliance Posture: ${COMPLIANCE.grade} across ${COMPLIANCE.frameworkCount} Frameworks`,
  description:
    "Vantage Workspace's compliance posture: A grade at 100% across NIST AI RMF, ISO 42001, EU AI Act, SOC 2, PCI DSS v4.0, HIPAA, FINRA, FedRAMP, PIPEDA, Privacy Act (Canada), and AIDA (proposed). 168 automated tests, continuously assessed.",
  alternates: { canonical: `${SITE.baseUrl}/compliance` },
};

const FrameworkBlock = ({
  name,
  version,
  coverage,
  evidence,
  practice,
}: {
  name: string;
  version: string;
  coverage: string;
  evidence: string;
  practice: string;
}) => (
  <div className="border-t border-ink-hairline pt-10 pb-2">
    <h3 className="font-display text-h3 text-ink mb-3">{name}</h3>
    <div className="font-ui text-body-sm text-ink-soft space-y-1 mb-4">
      <p>
        <strong className="font-semibold">Tracked version:</strong> {version}
      </p>
      <p>
        <strong className="font-semibold">Grade:</strong> {COMPLIANCE.grade} ({COMPLIANCE.passRate}){" "}
        · <strong className="font-semibold">Last assessed:</strong> {COMPLIANCE.lastAssessedISO}
      </p>
    </div>
    <div className="font-display text-body text-ink space-y-3 leading-relaxed">
      <p>
        <strong className="font-semibold">Coverage.</strong> {coverage}
      </p>
      <p>
        <strong className="font-semibold">Evidence sources.</strong> {evidence}
      </p>
      <p>
        <strong className="font-semibold">In practice.</strong> {practice}
      </p>
    </div>
  </div>
);

export default function CompliancePage() {
  return (
    <>
      {/* Hero — split layout, live compliance dashboard at native ratio */}
      <section className="pt-12 md:pt-20 pb-20 bg-paper">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <SectionEyebrow>COMPLIANCE</SectionEyebrow>
              <h1 className="font-display text-[clamp(2.25rem,4vw+1rem,4rem)] leading-[0.98] tracking-[-0.02em] text-ink mb-8">
                {COMPLIANCE.grade} grade. {COMPLIANCE.passRate} pass rate.
                <span className="block text-oxblood">Eleven frameworks.</span>
              </h1>
              <p className="font-display text-body-lg text-ink leading-relaxed max-w-[520px] mb-6">
                Vantage Workspace is graded continuously, not annually. The grade you see on this
                page is computed from runtime evidence — the same audit log that an auditor would
                review, summarised into a single posture.
              </p>
              <p className="font-ui text-body-sm text-ink-soft">
                Last assessed: {COMPLIANCE.lastAssessedHuman}. The next assessment is automatic,
                every build.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductShot
                src="/images/product/compliance-dashboard.jpg"
                alt="Live compliance dashboard inside Vantage Workspace — A grade across SOC 2, ISO 42001, NIST AI RMF, EU AI Act, PCI DSS, HIPAA, FINRA, FedRAMP, PIPEDA, Privacy Act, AIDA — 168 automated tests, last assessed today."
                ratio={1.736}
                priority
                url="workspace.local / engine / compliance"
                caption="/assess — runs on every build, against the production deployment."
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2 — Current grade */}
      <section className="py-16 md:py-24">
        <div className="max-w-default mx-auto px-6 md:px-12">
          <SectionEyebrow>CURRENT POSTURE</SectionEyebrow>
          <div className="flex flex-col items-center gap-8 mb-12">
            <ComplianceBadge size="lg" showLabel={false} />
            <p className="font-mono text-h3 text-ink text-center">
              {COMPLIANCE.grade} grade · {COMPLIANCE.passRate} pass rate ·{" "}
              {COMPLIANCE.frameworkCount} frameworks · {COMPLIANCE.testCount} automated tests
            </p>
          </div>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed max-w-[720px] mx-auto">
            <p>
              The compliance grade is computed by the platform&apos;s{" "}
              <code className="font-mono text-[14px]">/assess</code> mission, which runs against
              the production deployment on every build (currently every two-week sprint cycle, plus
              on-demand). The grade is the worst of: the lowest framework score, the test pass
              rate, and the policy coverage rate. It is not an average. A single failed test or a
              single uncovered control would move the grade.
            </p>
            <p>
              The grade has moved over time. Three months ago the published grade was B at 84%. The
              methodology that closed the gap is on the{" "}
              <Link
                href="/insights/from-b-to-a-the-discipline-behind-the-upgrade"
                className="text-oxblood hover:underline underline-offset-4"
              >
                insights archive
              </Link>{" "}
              — and the same methodology is what produces the next assessment cycle.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3 — Framework grid */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>FRAMEWORKS COVERED</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-12">Eleven frameworks. One assessment cycle.</h2>
          <FrameworkGrid />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3.5 — OWASP Top 10 for Agentic Applications spotlight */}
      <section className="py-16 md:py-24 bg-midnight">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <p className="text-eyebrow font-ui font-medium text-paper/60 uppercase tracking-[0.12em] mb-6">
                OWASP Top 10 for Agentic Apps
              </p>
              <h2 className="font-display text-h2 text-paper mb-8">
                Every category covered. Every control mapped. Every event signed.
              </h2>
              <p className="font-display text-body-lg text-paper/85 leading-relaxed mb-6">
                The OWASP Top 10 for Agentic Applications enumerates the failure modes that turn
                a useful AI system into a dangerous one — prompt injection, tool misuse, memory
                poisoning, supply-chain compromise, and the rest.
              </p>
              <p className="font-display text-body text-paper/75 leading-relaxed">
                Each item maps to one or more layers in the 7-Layer Defence Architecture. Each
                layer emits the signed events that constitute the evidence. The screen on the
                right is the live coverage report from{" "}
                <code className="font-mono text-[13px] text-gold-soft">/assess</code> — not a
                sales chart.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ProductShot
                src="/images/product/owasp-coverage.jpg"
                alt="OWASP Top 10 for Agentic Applications — coverage report from Vantage Workspace's /assess mission, showing every category mapped to defence layers and controls."
                ratio={1.043}
                tone="midnight"
                url="workspace.local / assess / owasp"
                caption="/assess — OWASP coverage view · runtime evidence"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4 — Methodology */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>METHODOLOGY</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            The grade is computed from runtime evidence, not from attestation.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              There are two ways to claim a compliance posture. The first is to write a
              self-attestation document (sometimes a thousand pages long) describing the controls
              the platform implements, how those controls map to the framework, and why the auditor
              should trust the description. This is the dominant model in enterprise software, and
              it is the reason &ldquo;compliance theatre&rdquo; is a credible academic critique of
              the industry.
            </p>
            <p>
              The second is to compute the posture from runtime evidence — to instrument the
              platform such that every event the platform produces is mapped to a control under
              each framework, and the grade is a function of how many controls have produced
              satisfying evidence within a defined window.
            </p>
            <p>
              We use the second model. The platform&apos;s{" "}
              <code className="font-mono text-[14px]">/assess</code> mission, which runs every
              build:
            </p>
            <ol className="list-decimal list-outside ml-6 space-y-2">
              <li>Walks the audit log for the last assessment window (default: the last 30 days).</li>
              <li>For each event, looks up which controls under which frameworks it satisfies.</li>
              <li>
                For each framework, computes the percentage of controls that have produced at least
                one satisfying event in the window.
              </li>
              <li>Computes a per-framework grade (A: 100%, B: 90-99%, C: 75-89%, D: &lt;75%).</li>
              <li>
                Computes the platform-wide grade as the lowest of the per-framework grades, the
                test-suite pass rate, and the policy coverage rate.
              </li>
            </ol>
            <p>
              The output of <code className="font-mono text-[14px]">/assess</code> is a structured
              JSON document committed to a public assessment registry (in the customer&apos;s
              deployment, scoped to their tenancy — and in our internal deployment, scoped to the
              published grade you see on this page). The registry is append-only, signed, and
              linkable; you can hand an auditor the URL of a specific assessment.
            </p>
            <h3 className="font-display text-h3 text-ink mt-8 mb-3">
              What &ldquo;100%&rdquo; means precisely
            </h3>
            <p>
              A 100% pass rate means: every control under every framework in scope has produced at
              least one satisfying event in the assessment window. It does not mean: the platform
              has zero open issues or zero technical debt or zero unresolved security findings. We
              list those separately, in the next section.
            </p>
          </div>
        </div>

        {/* Inline evidence — what redacted audit lines actually look like */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 mt-16">
          <ProductShot
            src="/images/product/redacted.jpg"
            alt="Live audit log showing PII redaction in flight: original tokens hashed, replacement markers preserved, signature chain unbroken, and the redaction itself recorded as its own event."
            ratio={1.18}
            url="workspace.local / trust / redaction"
            caption="An audit-log redaction in flight. The redaction is itself a signed event."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 5 — What we publish */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>WHAT WE PUBLISH</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            Vendors typically publish certifications. We publish the gaps too.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              Most vendor compliance pages list certifications, not failures. We list both. The
              reason is structural: an auditor&apos;s question is not &ldquo;do you have a
              certificate?&rdquo; but &ldquo;show us the evidence that the controls were operating
              during the audit window, including the periods where the controls failed.&rdquo; A
              vendor brochure that hides failures is a vendor brochure that won&apos;t survive a
              serious audit.
            </p>
            <p>Below are the categories of disclosure we publish, alongside the assessment grade:</p>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">Open issues.</h3>
              <p>
                A list of unresolved technical or process issues that affect compliance posture.
                Each issue has: a description, an affected framework or control, an assigned owner,
                a target sprint for remediation, and a public update on progress. The list is
                currently empty (which is itself an audit-able fact); when issues open, they are
                added within the same business day.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">Sprint retrospectives.</h3>
              <p>
                Every sprint produces a retrospective, internally. The compliance-relevant excerpts
                are published in the{" "}
                <Link href="/insights" className="text-oxblood hover:underline underline-offset-4">
                  insights archive
                </Link>
                , tagged &ldquo;retrospective&rdquo;. This includes the sprints where we moved from
                B to A, the sprint where we added PIPEDA and Privacy Act (Canada) coverage, and the
                sprint where we caught a regression in the Layer 4 memory-safety embedding-inversion
                check.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">Framework version drift.</h3>
              <p>
                Frameworks update. NIST AI RMF 1.1 will land at some point. ISO 42001:2026 (a
                hypothetical major revision) will land at some point. Each framework has a
                &ldquo;tracked version&rdquo; line in its detailed entry below; when the framework
                updates, we publish the gap analysis between the old version and the new version,
                the sprint plan to close the gap, and the assessment grade against the new version
                once the gap is closed.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">Audit history.</h3>
              <p>
                Every assessment cycle produces an entry in the audit-history table. The history is
                published; you can see the platform&apos;s grade over time. The current published
                history shows the move from B at 84% (three months ago) to A at 100% (now), with
                the intervening sprints documented.
              </p>
            </div>
            <div>
              <h3 className="font-display text-h3 text-ink mb-2">Pen-test summaries.</h3>
              <p>
                External penetration tests are commissioned twice a year. The summary findings are
                published — categorised, severity-rated, with remediation status. Customer-specific
                findings from a customer&apos;s own pen test of their deployment are confidential
                to that customer; we publish only our own external program.
              </p>
            </div>
            <p>What we do NOT publish, deliberately:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>The full audit log of any customer&apos;s deployment. Each customer&apos;s audit log is theirs.</li>
              <li>
                The specific contents of policies, prompts, or tool calls. The audit log records
                the metadata of every event; the content is encrypted and accessible only to the
                customer.
              </li>
              <li>
                Customer names in compliance posture summaries. If a customer wants to be named as
                a reference, that&apos;s their decision and they can be quoted — but the compliance
                posture is the platform&apos;s, not a per-customer claim.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6 — Trust Reports */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>WHAT AN AUDITOR RECEIVES</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            A Trust Report is the artefact your auditor will read.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              When an auditor (internal compliance, external SOC 2 firm, regulator-mandated
              assessor) asks &ldquo;show us the evidence&rdquo;, the deliverable is a{" "}
              <strong className="font-semibold">Trust Report</strong> — a tamper-evident,
              framework-mapped, time-windowed document generated by the platform.
            </p>
            <p>A Trust Report includes:</p>
            <ul className="list-disc list-outside ml-6 space-y-2">
              <li>
                <strong className="font-semibold">The events in scope</strong> for the time window
                the auditor specified. Every event has its full metadata (identity, agent, layer,
                decision, timestamp, signed hash).
              </li>
              <li>
                <strong className="font-semibold">The policy that was in effect</strong> at the
                time of each event. Auditors often want to know &ldquo;what controls were operating
                on the day in question&rdquo; — the policy version in scope is included in every
                event.
              </li>
              <li>
                <strong className="font-semibold">The compliance grade</strong> as of the moment
                the report was generated.
              </li>
              <li>
                <strong className="font-semibold">A control-mapping appendix</strong> showing every
                control under every applicable framework, the satisfying events for that control
                during the window, and any controls that did not produce satisfying events (with
                explanations).
              </li>
              <li>
                <strong className="font-semibold">A signed cryptographic hash of the report itself</strong>,
                anchored against the platform&apos;s tamper-evident log. The auditor can verify the
                report&apos;s integrity independently.
              </li>
            </ul>
            <p>
              Trust Reports can be generated in three formats: HTML (browsable, hyperlinked, suited
              for online review), PDF (printable, suited for board packs), and JSON
              (machine-readable, suited for the auditor&apos;s own analytics pipeline).
            </p>
            <p>A sample Trust Report cover page:</p>
            <pre className="font-mono text-[13px] bg-paper-deep border border-ink-hairline p-5 overflow-x-auto leading-relaxed">{`TRUST REPORT
Vantage Workspace deployment: prod-tenant-acme
Window: 2026-04-01 → 2026-04-30
Frameworks in scope: SOC 2, ISO 42001, EU AI Act
Generated: 2026-05-05 16:42 UTC
Compliance grade: A (100%)

Total events: 487,213
Total controls evaluated: 84
Controls with satisfying events: 84
Controls without satisfying events: 0
Open issues: 0

Report integrity hash: sha256:9f4a2c1b...
Verification key: ${SITE.baseUrl}/.well-known/trust-report-key`}</pre>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 7 — Framework-by-framework */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>BY FRAMEWORK</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-12">Eleven frameworks, one block each.</h2>

          <FrameworkBlock
            name="NIST AI RMF (1.0)"
            version="1.0"
            coverage="All four functions — GOVERN, MAP, MEASURE, MANAGE — covered. Specific control coverage: GOVERN (1, 2, 3, 4, 5, 6), MAP (1, 2, 3, 4, 5), MEASURE (1, 2, 3, 4), MANAGE (1, 2, 3, 4)."
            evidence="Audit events from Layers 1, 2, 5, 6, 7 contribute the bulk of MAP and MEASURE evidence. Layer 7 supply-chain evidence covers GOVERN-2 and -3. Trust Report generation cadence covers MANAGE-2."
            practice="When a NIST AI RMF assessment is requested for a deployment, the platform generates a Trust Report scoped to the four NIST functions. Each function's controls are listed, with the satisfying events and the policy versions in effect."
          />
          <FrameworkBlock
            name="ISO/IEC 42001 (2023)"
            version="2023"
            coverage="All ten clauses covered. Annex A control coverage: complete."
            evidence="Audit log structure (Clause 8 — Operation), policy management (Clause 7 — Support), continuous improvement (Clause 10), management review (Clause 9)."
            practice="A Trust Report for ISO 42001 includes a clause-by-clause mapping. Annex A controls are listed alongside the satisfying events. ISO 42001 maps cleanly to the platform's /assess mission output."
          />
          <FrameworkBlock
            name="EU AI Act"
            version="Regulation (EU) 2024/1689; high-risk obligations (Articles 6-29, Annex III) — effective 2 August 2026."
            coverage="Articles 9 (Risk management), 10 (Data and data governance), 11 (Technical documentation), 12 (Record-keeping), 13 (Transparency), 14 (Human oversight), 15 (Accuracy, robustness, cybersecurity), 16-29 (Provider obligations), 99 (Penalties — for context)."
            evidence="Article 12 (record-keeping) is the centrepiece — the audit log structure satisfies it directly. Article 11 (technical documentation) is satisfied by the Trust Report + the architecture documentation. Article 14 (human oversight) is satisfied by Layer 5 (Trust Boundaries) consent flows."
            practice="For a deployment in the EU or with EU-regulated data, the operator can request a Trust Report scoped to the AI Act's Annex IV technical-documentation requirements; the report maps each Annex IV item to its satisfying evidence in the platform."
          />
          <FrameworkBlock
            name="SOC 2 Type 2"
            version="SOC 2 Type 2 (TSP 2017)"
            coverage="Security, Availability, Processing Integrity, Confidentiality, Privacy criteria — all five."
            evidence="Inter-Service Auth (Layer 6), Memory Safety (Layer 4), Supply Chain (Layer 7) cover the bulk of Security and Confidentiality. Continuous deployment metrics + sprint cadence cover Availability and Processing Integrity. Privacy controls map to PIPEDA / Privacy Act (Canada)."
            practice="SOC 2 Type 2 is the most-requested framework for North American B2B customers. The deployment runs continuously with Type 2 evidence; the audit window is rolling, so an auditor can request a report for any 90-day or 180-day window."
          />
          <FrameworkBlock
            name="PCI DSS v4.0"
            version="v4.0 (2022)"
            coverage="All twelve requirements; specifically the encryption requirements (Req 3, 4), access control (Req 7, 8), monitoring (Req 10), and the new v4.0 requirements around customised approach and continuous validation."
            evidence="Layer 6 (Inter-Service Auth) covers Req 4 (encryption in transit). Layer 7 (Supply Chain) covers Req 6 (secure development). Audit log covers Req 10 (logging and monitoring)."
            practice="Vantage Workspace itself is not a card-handling system. The PCI DSS posture is included because customers running PCI-relevant workloads on the platform need the platform itself to not be the weak link. A PCI assessor reviewing a customer's overall posture will have specific platform-level questions; the Trust Report answers them."
          />
          <FrameworkBlock
            name="HIPAA"
            version="45 CFR Parts 160, 162, 164 (current as of 2025 amendments)"
            coverage="Security Rule (administrative, physical, technical safeguards), Privacy Rule (uses and disclosures), Breach Notification Rule."
            evidence="Technical Safeguards (164.312) — Layer 6, Layer 4. Audit Controls (164.312(b)) — the audit log structure. Access Control (164.312(a)) — Layer 1 + Layer 5."
            practice="US healthcare customers operate the platform under a Business Associate Agreement (BAA). Handvantage signs the BAA with the customer; the platform deployment runs under the customer's HIPAA covered-entity scope. Trust Reports include HIPAA-specific control mappings."
          />
          <FrameworkBlock
            name="FINRA"
            version="Current FINRA Rules (2024 codified)"
            coverage="Books and Records (Rule 4511), Communications (Rule 2210, 2212), Recordkeeping (Rule 4516), Supervision (Rule 3110)."
            evidence="The audit log directly satisfies Rule 4511 (record-keeping). Layer 1 policy enforcement satisfies Rule 3110 (supervision controls). Communications captured by the Concierge agent's email/chat tools satisfy Rule 2210 review."
            practice="US financial-services customers under FINRA jurisdiction need supervisory and recordkeeping evidence for any AI system that touches client communications or trade decisions. The Trust Report includes a FINRA-specific record-export format."
          />
          <FrameworkBlock
            name="FedRAMP"
            version="FedRAMP Moderate baseline (Rev 5)"
            coverage="All Moderate-baseline controls. We do not yet pursue FedRAMP High; the deployment topology supports it but the formal authorization is a separate engagement."
            evidence="Continuous monitoring (CM family) covered by audit log structure. Identification and Authentication (IA family) covered by Layer 1 + SSO. System and Information Integrity (SI family) covered by Layers 2, 3, 7."
            practice="US public-sector customers can deploy Vantage Workspace inside a FedRAMP-authorised environment (e.g. AWS GovCloud, Azure Government). The platform's controls inherit the underlying environment's authorization plus add the platform-specific control evidence."
          />
          <FrameworkBlock
            name="PIPEDA (Canada)"
            version="Personal Information Protection and Electronic Documents Act (current consolidation, 2024)"
            coverage="All ten Fair Information Principles (Accountability, Identifying Purposes, Consent, Limiting Collection, Limiting Use & Retention, Accuracy, Safeguards, Openness, Individual Access, Challenging Compliance)."
            evidence="Consent flow at Layer 5 (Trust Boundaries) covers Principle 3. Retention policies in the file pillar cover Principle 5. Safeguards (Principle 7) covered by Layers 4, 6, 7."
            practice="Canadian customers operating under PIPEDA have a documented compliance posture for the platform. The Trust Report includes a PIPEDA principle-by-principle mapping."
          />
          <FrameworkBlock
            name="Privacy Act (Canada)"
            version="Privacy Act, R.S.C. 1985, c. P-21 (current amendments)"
            coverage="Section 4 (collection of personal information), Section 5 (purpose), Section 6 (retention and disposal), Section 7 (use), Section 8 (disclosure)."
            evidence="The audit log identifies every collection / use / disclosure event with its policy basis. Retention is enforced at the file-pillar level."
            practice="Canadian public-sector customers (federal or provincial bodies subject to the Privacy Act) have the platform's posture pre-mapped to the Act's sections."
          />
          <FrameworkBlock
            name="AIDA (proposed)"
            version="Artificial Intelligence and Data Act (Canada) — Bill C-27, as introduced. Status: proposed, not yet in force."
            coverage="Anticipated impact assessment, mitigation, monitoring, and record-keeping requirements based on the published draft."
            evidence="Same evidence pipeline as the EU AI Act and NIST AI RMF; AIDA's structure overlaps substantially with both."
            practice="Canadian customers planning for AIDA's eventual coming-into-force can have their compliance posture pre-mapped. The grade and the mapping will be re-assessed when AIDA is enacted (the final text may differ from the proposed text)."
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 8 — Audit window */}
      <section className="py-16 md:py-24">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>THE AUDIT WINDOW</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink mb-8">
            August 2, 2026 is when the obligations begin. The audit window started this quarter.
          </h2>
          <div className="font-display text-body text-ink space-y-6 leading-relaxed">
            <p>
              The EU AI Act&apos;s high-risk obligations come into force on 2 August 2026. The
              penalty structure under Article 99 is the larger of EUR 35 million or 7% of global
              annual turnover for non-compliance.
            </p>
            <p>
              The under-discussed feature of the regulation is that it does not ask &ldquo;did your
              platform behave correctly on the day?&rdquo; It asks for evidence that controls were
              operating during the period leading up to the day. That period — the audit window —
              is already open.
            </p>
            <p>
              The platform was designed for this regulatory shape. Continuous evidence generation,
              framework-mapped audit log, machine-verifiable Trust Reports — none of this is a
              feature added in response to the AI Act. The architecture was built for it.
            </p>
            <p>
              For customers reading this who have not yet started preparing, the most useful frame
              is: the deadline is when the obligations begin; the audit window is now. Every prompt
              processed without contemporaneous evidence is a prompt that cannot be defended in
              retrospect. The work to instrument the platform should be done in the months leading
              up to August 2026, not in the weeks after.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        headline="If your audit window is open, talk to us."
        body="The most useful conversation about compliance is the one where we sit with your General Counsel, your Chief Compliance Officer, or your Risk Officer for thirty minutes and walk through your specific framework requirements. We bring the framework cross-walks, the Trust Report templates, and the gap-analysis methodology. We tell you where the platform's posture aligns with your obligations and where you'd need additional controls."
        ctaLabel="Talk to us about your audit window"
      />
    </>
  );
}

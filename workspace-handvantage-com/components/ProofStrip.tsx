import { COMPLIANCE } from "@/lib/data-tokens";
import { ComplianceBadge } from "./ComplianceBadge";

export function ProofStrip() {
  return (
    <section className="bg-paper-deep py-12 md:py-16">
      <div className="max-w-wide mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          <div className="text-center md:px-8">
            <ComplianceBadge size="md" showLabel={false} />
            <p className="font-display text-body text-ink mt-4">
              {COMPLIANCE.grade} grade across {COMPLIANCE.frameworkCount} frameworks
            </p>
            <p className="font-ui text-byline text-ink-soft mt-1">
              {COMPLIANCE.passRate} pass rate
            </p>
          </div>

          <div className="text-center md:px-8 md:border-l md:border-ink-hairline">
            <p className="font-mono text-[44px] text-ink leading-none">{COMPLIANCE.testCount}</p>
            <p className="font-display text-body text-ink mt-4">
              Automated tests passing every build
            </p>
            <p className="font-ui text-byline text-ink-soft mt-1">{COMPLIANCE.atlasRules} ATLAS rules</p>
          </div>

          <div className="text-center md:px-8 md:border-l md:border-ink-hairline">
            <p className="font-mono text-[44px] text-ink leading-none">{COMPLIANCE.owaspCoverage}</p>
            <p className="font-display text-body text-ink mt-4">
              OWASP Top 10 for Agentic Applications coverage
            </p>
            <p className="font-ui text-byline text-ink-soft mt-1">
              {COMPLIANCE.sprintCount} sprints, zero rollbacks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

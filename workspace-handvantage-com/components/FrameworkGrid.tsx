import { FRAMEWORKS, COMPLIANCE } from "@/lib/data-tokens";
import { ComplianceBadge } from "./ComplianceBadge";

// 4 columns × 3 rows. 11 framework cells + 1 summary-anchor cell.
export function FrameworkGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-ink-hairline">
      {FRAMEWORKS.map((f) => (
        <div
          key={f.id}
          className="border-r border-b border-ink-hairline last:border-r-0 p-6 md:p-8"
        >
          <p className="font-display font-bold text-[20px] md:text-[22px] text-ink leading-tight">
            {f.name}
          </p>
          <p className="font-mono text-[13px] text-ink-soft mt-2">
            {f.status} · {COMPLIANCE.lastAssessedISO}
          </p>
        </div>
      ))}
      {/* Summary anchor cell (12th cell) */}
      <div className="border-b border-ink-hairline p-6 md:p-8 bg-paper-deep flex flex-col items-start gap-3">
        <ComplianceBadge size="sm" showLabel={false} />
        <p className="font-ui text-byline text-ink-soft uppercase tracking-[0.08em]">
          Continuous
        </p>
      </div>
    </div>
  );
}

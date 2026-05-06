import { COMPLIANCE } from "@/lib/data-tokens";

interface Props {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  variant?: "inline" | "stacked";
}

export function ComplianceBadge({ size = "md", showLabel = true, variant = "stacked" }: Props) {
  const dims = { sm: 32, md: 56, lg: 120 }[size];
  const letterSize = { sm: 16, md: 28, lg: 56 }[size];

  return (
    <div className={variant === "inline" ? "flex items-center gap-3" : "flex flex-col items-center gap-3"}>
      <div
        className="rounded-full border-[1.5px] border-oxblood bg-paper flex items-center justify-center flex-shrink-0"
        style={{ width: dims, height: dims }}
        aria-hidden="true"
      >
        <span
          className="font-display font-bold text-ink"
          style={{ fontSize: letterSize, lineHeight: 1 }}
        >
          {COMPLIANCE.grade}
        </span>
      </div>
      {showLabel && (
        <div className={variant === "inline" ? "" : "text-center"}>
          <p className="font-display text-body text-ink">
            {COMPLIANCE.grade} grade across {COMPLIANCE.frameworkCount} frameworks
          </p>
          <p className="font-ui text-byline text-ink-soft mt-1">
            {COMPLIANCE.passRate} pass rate · {COMPLIANCE.testCount} automated tests
          </p>
        </div>
      )}
    </div>
  );
}

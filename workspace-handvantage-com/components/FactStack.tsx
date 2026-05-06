interface Fact {
  eyebrow: string;
  value: string;
  subline?: string;
  valueAsMono?: boolean;
}

export function FactStack({ facts }: { facts: Fact[] }) {
  return (
    <div className="flex flex-col">
      {facts.map((fact, i) => (
        <div key={i} className={`py-6 ${i > 0 ? "border-t border-ink-hairline" : ""}`}>
          <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-2">
            {fact.eyebrow}
          </p>
          <p
            className={
              fact.valueAsMono
                ? "font-mono text-[28px] text-ink leading-tight"
                : "font-display text-h3 text-ink leading-tight"
            }
          >
            {fact.value}
          </p>
          {fact.subline && (
            <p className="font-display text-body text-ink-soft mt-1">{fact.subline}</p>
          )}
        </div>
      ))}
    </div>
  );
}

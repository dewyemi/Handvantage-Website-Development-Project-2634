export function SectionDivider({ className = "" }: { className?: string }) {
  return <hr className={`section-divider ${className}`} />;
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-eyebrow font-ui font-medium text-ink-soft uppercase tracking-[0.08em] mb-6">
      {children}
    </p>
  );
}

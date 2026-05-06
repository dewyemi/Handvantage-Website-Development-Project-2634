// Brand H-mark. Stylised serif H, oxblood colour by default.
// Inline SVG so no HTTP request is needed.
export function HMark({ className = "h-5 md:h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M3 2 V30" />
      <path d="M21 2 V30" />
      <path d="M3 16 H21" />
      <circle cx="3" cy="2" r="0.8" fill="currentColor" />
      <circle cx="21" cy="2" r="0.8" fill="currentColor" />
      <circle cx="3" cy="30" r="0.8" fill="currentColor" />
      <circle cx="21" cy="30" r="0.8" fill="currentColor" />
    </svg>
  );
}

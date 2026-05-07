// Brand H-mark — the actual oxblood Handvantage logo (PNG asset).
// Rendered via next/image with unoptimized so the original PNG is served
// (it's already small + monochromatic; no need for the optimization pipeline).
import Image from "next/image";

export function HMark({ className = "h-5 md:h-6" }: { className?: string }) {
  return (
    <span className={`inline-block ${className} aspect-square relative`}>
      <Image
        src="/images/logo/handvantage-h-oxblood.png"
        alt=""
        fill
        sizes="32px"
        className="object-contain"
        unoptimized
        priority
      />
    </span>
  );
}

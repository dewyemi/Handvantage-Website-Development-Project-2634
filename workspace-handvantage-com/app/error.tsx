"use client";

import { SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="pt-24 pb-24 min-h-[60vh] flex items-start">
      <div className="max-w-narrow mx-auto px-6 md:px-12 w-full">
        <SectionEyebrow>ERROR</SectionEyebrow>
        <h1 className="font-display text-display-2 text-ink leading-tight mb-6">
          Something on our side broke.
        </h1>
        <p className="font-display text-body-lg text-ink leading-relaxed mb-6">
          We&apos;re aware. Please refresh in a minute, or write to{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-oxblood hover:underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          if it persists.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-ink text-paper font-ui font-medium text-[15px] hover:bg-oxblood transition-colors"
        >
          Try again
        </button>
      </div>
    </section>
  );
}

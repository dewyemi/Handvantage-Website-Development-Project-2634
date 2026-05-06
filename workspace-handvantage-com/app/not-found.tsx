import Link from "next/link";
import { SectionEyebrow } from "@/components/SectionDivider";

export default function NotFound() {
  return (
    <section className="pt-24 pb-24 min-h-[60vh] flex items-start">
      <div className="max-w-narrow mx-auto px-6 md:px-12 w-full">
        <SectionEyebrow>404</SectionEyebrow>
        <h1 className="font-display text-display-2 text-ink leading-tight mb-6">
          We don&apos;t have a page at that address.
        </h1>
        <p className="font-display text-body-lg text-ink leading-relaxed">
          The link you followed might be out of date, or we&apos;ve moved the page. Here&apos;s{" "}
          <Link href="/" className="text-oxblood hover:underline underline-offset-4">
            the home page
          </Link>{" "}
          — or{" "}
          <Link href="/insights" className="text-oxblood hover:underline underline-offset-4">
            the insights archive
          </Link>
          , which has most of our recent writing.
        </p>
      </div>
    </section>
  );
}

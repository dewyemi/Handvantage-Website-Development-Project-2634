import type { Metadata } from "next";
import Link from "next/link";
import { CTABlock } from "@/components/CTABlock";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { SITE } from "@/lib/data-tokens";

const HANDBOOK = {
  title: "The Agentic AI Procurement Handbook",
  subtitle:
    "Sector dossiers, persona briefs, and the architectural reference for buying and deploying agentic AI in regulated enterprises.",
  pdfHref: "/downloads/agentic-ai-procurement-handbook.pdf",
  pdfFilename: "agentic-ai-procurement-handbook.pdf",
  pdfBytes: 1_084_606,
  pages: 84,
  version: "1.0",
  publishedISO: "2026-05-10",
  publishedHuman: "May 10, 2026",
  author: SITE.founderName,
} as const;

const PARTS = [
  {
    label: "PART I",
    name: "The procurement landscape",
    chapters: 2,
    summary:
      "Why agentic AI procurement is a different conversation, and the regulatory landscape every committee is buying into in 2026.",
  },
  {
    label: "PART II",
    name: "Persona briefs",
    chapters: 3,
    summary:
      "What the CISO, the CFO, and the CEO/board actually need to hear. Prepared sentences, risk math, and answers to the six objections that come up every time.",
  },
  {
    label: "PART III",
    name: "Sector dossiers",
    chapters: 5,
    summary:
      "Financial services (FINRA/SEC), healthcare (HIPAA/FDA SaMD), fintech (BSA/AML/sponsor bank), Canadian public sector (TBSDADM/OCAP), and legal services (ABA Formal Opinion 512).",
  },
  {
    label: "PART IV",
    name: "Architecture and posture",
    chapters: 2,
    summary:
      "The 7-Layer Defence Architecture and what continuous compliance actually means at runtime. The reference for security architects, compliance officers, and the auditors they answer to.",
  },
  {
    label: "PART V",
    name: "Reference",
    chapters: 3,
    summary:
      "Procurement question banks pulled from each chapter, a glossary of every regulatory frame named in the handbook, and an index of every primary source cited.",
  },
] as const;

export const metadata: Metadata = {
  title: "The Agentic AI Procurement Handbook",
  description:
    "An 84-page reference for procurement committees evaluating agentic AI for regulated environments. Sector dossiers, persona briefs, the 7-Layer Defence Architecture, and the procurement question banks. Free to download, free to cite, no email gate.",
  alternates: { canonical: `${SITE.baseUrl}/handbook` },
  openGraph: {
    title: "The Agentic AI Procurement Handbook",
    description:
      "An 84-page reference for procurement committees evaluating agentic AI for regulated environments. No email gate.",
    url: `${SITE.baseUrl}/handbook`,
    type: "article",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Agentic AI Procurement Handbook",
    description:
      "84 pages. Sector dossiers, persona briefs, architecture reference. No email gate.",
  },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: HANDBOOK.title,
  alternateName: "Agentic AI Procurement Handbook",
  bookFormat: "https://schema.org/EBook",
  inLanguage: "en",
  numberOfPages: HANDBOOK.pages,
  bookEdition: HANDBOOK.version,
  datePublished: HANDBOOK.publishedISO,
  url: `${SITE.baseUrl}/handbook`,
  abstract:
    "A reference for procurement committees evaluating agentic AI for deployment in regulated environments. Compiles sector dossiers, persona briefs, and the platform's architectural reference into a single document.",
  author: {
    "@type": "Person",
    name: HANDBOOK.author,
    url: SITE.linkedInFounder,
    affiliation: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.baseUrl,
    },
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.baseUrl,
  },
  workExample: {
    "@type": "Book",
    bookFormat: "https://schema.org/EBook",
    inLanguage: "en",
    encodingFormat: "application/pdf",
    url: `${SITE.baseUrl}${HANDBOOK.pdfHref}`,
    isbn: undefined,
  },
  isAccessibleForFree: true,
  license: "Free to share, cite, and forward",
};

function formatBytes(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function HandbookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-12 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>A REFERENCE FOR PROCUREMENT COMMITTEES</SectionEyebrow>
          <h1 className="font-display text-[clamp(2.5rem,5vw+1rem,5rem)] leading-[0.96] tracking-[-0.02em] text-ink mb-8">
            The Agentic AI<br />
            Procurement <span className="italic text-oxblood">Handbook</span>.
          </h1>
          <p className="font-display text-body-lg text-ink leading-relaxed max-w-[720px] mb-10">
            {HANDBOOK.subtitle} Compiled from the editorial archive at{" "}
            <Link href="/insights" className="text-oxblood hover:underline underline-offset-4">
              workspace.handvantage.com/insights
            </Link>{" "}
            into a single reference for the senior buyers — CISOs, CFOs, COOs, compliance officers,
            and the founders and boards they brief.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <a
              href={HANDBOOK.pdfHref}
              download={HANDBOOK.pdfFilename}
              className="inline-flex items-center justify-center px-8 py-4 bg-oxblood text-paper font-ui font-medium text-[16px] hover:bg-oxblood-soft transition-colors"
            >
              Download the handbook (PDF)&nbsp;&darr;
            </a>
            <a
              href={HANDBOOK.pdfHref}
              target="_blank"
              rel="noopener"
              className="font-ui font-medium text-[15px] text-oxblood hover:underline underline-offset-4"
            >
              Or open it in a new tab&nbsp;&rarr;
            </a>
          </div>

          <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
            {HANDBOOK.pages} pages &middot; {formatBytes(HANDBOOK.pdfBytes)} &middot; Version{" "}
            {HANDBOOK.version} &middot; No email gate &middot; Free to share, cite, and forward
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* What's inside */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <SectionEyebrow>WHAT&rsquo;S INSIDE</SectionEyebrow>
          <h2 className="font-display text-h2 text-ink leading-tight mb-12 max-w-[720px]">
            Five parts. <span className="italic text-oxblood">Fifteen chapters</span>. The reference
            you keep open while drafting your committee deck.
          </h2>
          <ol className="border-t border-ink">
            {PARTS.map((part) => (
              <li
                key={part.label}
                className="border-b border-ink-hairline py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-byline text-oxblood uppercase tracking-[0.18em] mb-1">
                    {part.label}
                  </p>
                  <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                    {part.chapters} chapters
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-h4 text-ink mb-3">{part.name}.</h3>
                  <p className="font-display text-body text-ink-soft leading-relaxed max-w-[640px]">
                    {part.summary}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionDivider />

      {/* Who it's for */}
      <section className="py-16 md:py-24 bg-paper-deep">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionEyebrow>WHO IT&rsquo;S FOR</SectionEyebrow>
              <h2 className="font-display text-h3 text-ink leading-tight">
                Senior buyers in regulated environments.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="flex flex-col gap-6 font-display text-body text-ink leading-relaxed">
                <li>
                  <strong className="text-ink">CISOs</strong> who need the regulatory citations to
                  defend the procurement decision in front of the audit committee &mdash; and the
                  question bank to interrogate every other vendor on the shortlist.
                </li>
                <li>
                  <strong className="text-ink">CFOs</strong> evaluating vendor consolidation,
                  contract surface, and the realistic deployment timeline behind every &ldquo;ten
                  minutes&rdquo; demo.
                </li>
                <li>
                  <strong className="text-ink">Compliance officers</strong> mapping platform
                  evidence to NIST AI RMF, ISO/IEC 42001, EU AI Act Annex IV, SOC 2, HIPAA, FINRA,
                  and eight more frameworks &mdash; with the primary sources to cite.
                </li>
                <li>
                  <strong className="text-ink">Founders and boards</strong> drafting the
                  board-defensible sentence on AI strategy, with the regulatory calendar through
                  2027 and the Sovereign Capability Partner thesis worked through.
                </li>
                <li>
                  <strong className="text-ink">Sector specialists</strong> in financial services,
                  healthcare, fintech, Canadian public sector, and legal services &mdash; each with
                  a dedicated dossier covering the operative rules, the audit window, and the
                  questions to ask.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Provenance + Citation */}
      <section className="py-16 md:py-24 bg-paper">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionEyebrow>PROVENANCE</SectionEyebrow>
            <dl className="font-display text-body text-ink space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Author
                </dt>
                <dd className="col-span-2">{HANDBOOK.author}, Founder, {SITE.name}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Published
                </dt>
                <dd className="col-span-2">{HANDBOOK.publishedHuman}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Version
                </dt>
                <dd className="col-span-2">{HANDBOOK.version}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Pages
                </dt>
                <dd className="col-span-2">{HANDBOOK.pages}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Format
                </dt>
                <dd className="col-span-2">PDF, {formatBytes(HANDBOOK.pdfBytes)}</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Licence
                </dt>
                <dd className="col-span-2">Free to share, cite, and forward.</dd>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <dt className="font-mono text-byline text-ink-soft uppercase tracking-[0.12em]">
                  Contact
                </dt>
                <dd className="col-span-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-oxblood hover:underline underline-offset-4"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <SectionEyebrow>CITE THIS HANDBOOK</SectionEyebrow>
            <p className="font-display text-body text-ink-soft leading-relaxed mb-6">
              Drawing on the handbook in your own writing, RFP, or board paper? The reference format
              we&rsquo;d use ourselves:
            </p>
            <pre className="bg-paper-deep border-l-4 border-oxblood px-6 py-5 font-mono text-byline text-ink overflow-x-auto whitespace-pre-wrap">
{`${HANDBOOK.author} (${HANDBOOK.publishedISO.slice(0, 4)}).
"${HANDBOOK.title}" (Version ${HANDBOOK.version}).
${SITE.name}.
${SITE.baseUrl}/handbook`}
            </pre>
            <p className="mt-6 font-display text-body-sm text-ink-soft leading-relaxed">
              No registration required to cite or share. The handbook is published openly so it can
              circulate where it&rsquo;s useful &mdash; in committee decks, in RFPs, in security
              reviews, in academic syllabi.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing CTA */}
      <CTABlock
        eyebrow="WANT THE NEXT ONE?"
        headline="Future versions land in The Vantage Pilot."
        body="When we publish a v2, an addendum, or a sector dossier extension, subscribers to the monthly digest hear about it first. The sign-up form opens once we&rsquo;ve enough issues in the queue that committing to a cadence is honest."
        ctaLabel="Read The Vantage Pilot"
        ctaHref="/vantage-pilot"
      />
    </>
  );
}

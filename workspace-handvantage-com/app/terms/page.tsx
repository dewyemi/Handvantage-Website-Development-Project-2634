import type { Metadata } from "next";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { COMPLIANCE, SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for visitors to workspace.handvantage.com.",
  alternates: { canonical: `${SITE.baseUrl}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>LEGAL · TERMS</SectionEyebrow>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-6">Terms.</h1>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            The terms below apply to visitors using this website. The terms of any commercial
            engagement with Handvantage are governed by a separate signed agreement, not by this
            page. Current as of {COMPLIANCE.lastAssessedHuman}.
          </p>
        </div>
      </section>
      <SectionDivider />
      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            <h2 className="font-display text-h3 text-ink mt-4">Use of this website</h2>
            <p>
              You may read, link to, and quote from this website. The editorial content here is
              published with the expectation that practitioners will reference it in their own
              work; quotation with attribution is welcome.
            </p>
            <p>
              The Handvantage name, the Vantage Workspace name, the H-mark, and the editorial
              design system are trademarks of Handvantage. Don&apos;t use them in a way that
              implies an endorsement or partnership we haven&apos;t entered.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">No warranties</h2>
            <p>
              The information on this website is provided as-is. We try to keep it accurate and
              current; we make no warranty that every claim is up to date at the moment you read
              it. The compliance posture, technical specifications, and architectural details are
              accurate to the assessment date shown ({COMPLIANCE.lastAssessedHuman}); subsequent
              assessments may move them.
            </p>
            <p>
              Nothing on this website constitutes legal, regulatory, or compliance advice. If you
              are relying on a claim from this site for a regulatory submission or audit, verify
              the current state with us via {SITE.email} first.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Liability</h2>
            <p>
              Handvantage is not liable for any direct, indirect, incidental, or consequential
              damages arising from your use of this website. The site is provided as a courtesy to
              the practitioner community we serve; it is not a contract.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Governing law</h2>
            <p>
              These terms are governed by the laws of the Province of Ontario, Canada. Any dispute
              arising out of your use of the site is to be resolved in the courts of Ontario.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Changes</h2>
            <p>
              We may update these terms. The version current at the top of this page applies to
              your use as of the date shown. Material changes are announced in the colophon.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Contact</h2>
            <p>Questions: {SITE.email}.</p>
          </article>
        </div>
      </section>
    </>
  );
}

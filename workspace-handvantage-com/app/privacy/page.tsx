import type { Metadata } from "next";
import { SectionDivider, SectionEyebrow } from "@/components/SectionDivider";
import { COMPLIANCE, SITE } from "@/lib/data-tokens";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Handvantage collects, uses, and protects information from visitors to workspace.handvantage.com and from customers using Vantage Workspace.",
  alternates: { canonical: `${SITE.baseUrl}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-12">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <SectionEyebrow>LEGAL · PRIVACY</SectionEyebrow>
          <h1 className="font-display text-display-2 text-ink leading-tight mb-6">Privacy.</h1>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            This page explains how Handvantage handles personal information — both for visitors to
            this website and for customers using Vantage Workspace. The version below is current
            as of {COMPLIANCE.lastAssessedHuman}.
          </p>
        </div>
      </section>
      <SectionDivider />
      <section className="py-12 md:py-16">
        <div className="max-w-narrow mx-auto px-6 md:px-12">
          <article className="font-display text-body text-ink space-y-6 leading-relaxed">
            <h2 className="font-display text-h3 text-ink mt-4">
              What we collect from visitors to this website
            </h2>
            <p>
              Plausible Analytics tracks aggregate page views. We see: which page was viewed, which
              referrer (if any) sent the visitor, what country the visitor was in (region-level,
              not city-level), what device class they used (desktop, tablet, mobile). We do not see
              their name, their email, their IP address (Plausible discards it), or any individual
              session of activity tied to a unique person.
            </p>
            <p>
              We do not use Google Analytics. We do not use Facebook Pixel. We do not run any other
              tracker. We do not set first-party cookies for marketing purposes. We do not set any
              cookies you&apos;d need to consent to under the GDPR cookie-consent regime, which is
              why this site does not show a cookie banner.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">
              What we collect from contact form submissions
            </h2>
            <p>
              When you submit the contact form on{" "}
              <code className="font-mono text-[14px]">/contact</code>, we collect: the name you
              provide, the email address you provide, the company name you provide (if any), and
              the message you write. The submission is delivered as an email to {SITE.email} and
              may be stored as a lead in our CRM.
            </p>
            <p>
              We use this information to reply to you and to follow up on the conversation we have.
              We do not add it to a marketing list. We do not sell it. We do not share it with
              third parties for advertising purposes. If you want us to delete your information,
              write to {SITE.email} and we will do so within five business days.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">
              What we collect from customers using Vantage Workspace
            </h2>
            <p>
              Vantage Workspace runs in your environment, on infrastructure you control. We do not
              have access to the audit log, the user activity, the file contents, or the prompt
              content of your deployment. The data plane stays in your environment; the control
              plane stays in your environment.
            </p>
            <p>
              The platform does send a small amount of license-validation telemetry to Handvantage
              — your deployment ID, your license expiry date, and your platform version. That
              telemetry is sent over HTTPS, encrypted, and used only for license management. We do
              not collect usage metrics, error reports, or any operational telemetry from customer
              deployments unless the customer explicitly opts in to share them with us for support
              purposes.
            </p>
            <p>
              For customers operating in air-gapped environments, even the license-validation
              telemetry is offline (signed license file, periodic out-of-band revocation check).
              These customers send us no telemetry at all.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Where data is stored</h2>
            <p>
              The website is hosted on Netlify. Plausible Analytics is hosted in Germany (EU). The
              contact form&apos;s submissions are emailed to a Google Workspace mailbox in the
              United States and may be copied to a CRM in the United States. We store no other
              personal information.
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">
              Your rights under GDPR / PIPEDA / Privacy Act (Canada)
            </h2>
            <p>
              You have the right to: access the personal information we hold about you, correct it
              if it&apos;s wrong, delete it if you want, port it to another provider, restrict our
              processing of it, and object to our processing. To exercise any of these rights,
              write to {SITE.email}.
            </p>
            <p>
              We will respond within five business days for routine requests and within thirty days
              for requests requiring substantial work (e.g. a full data export).
            </p>

            <h2 className="font-display text-h3 text-ink mt-8">Contact</h2>
            <p>
              Questions or concerns about this policy: {SITE.email}. We respond within a business
              day.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

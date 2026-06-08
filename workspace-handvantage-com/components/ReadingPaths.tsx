/**
 * ReadingPaths — curated entry points into the editorial archive.
 *
 * Senior buyers (CISOs, CFOs, COOs, CEOs, sector compliance leads) don't
 * read the archive linearly. They want the 3-5 articles that are most
 * useful to their role, in the right order, with an honest reading-time
 * estimate. This component surfaces those paths above the article list
 * on /insights so the reader doesn't have to hunt.
 *
 * Two groups:
 *   - By role (CISO, CFO, COO, CEO/Board)
 *   - By sector (financial services, healthcare, fintech, public sector,
 *     legal services)
 *
 * Each path is a hairline-bordered card with a monogram, role/sector
 * label, total reading time, and an ordered list of links. Editorial
 * register; same visual vocabulary as /for-teams persona blocks.
 */
import Link from "next/link";

interface Step {
  href: string;
  label: string;
  time: string;
}

interface Path {
  monogram: string;
  eyebrow: string;
  headline: string;
  whoFor: string;
  totalTime: string;
  steps: Step[];
}

const ROLE_PATHS: Path[] = [
  {
    monogram: "C",
    eyebrow: "FOR THE CISO",
    headline: "Five reads to evaluate the platform on engineering merit.",
    whoFor:
      "Security architects, compliance officers, and CISOs who need to assess the platform's posture before bringing it to a procurement committee.",
    totalTime: "~50 min",
    steps: [
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture — A grade across 11 frameworks", time: "~8 min" },
      { href: "/for-ciso", label: "The 90-second brief for your committee", time: "~12 min" },
      { href: "/insights/eu-ai-act-annex-iv-technical-documentation", label: "EU AI Act Annex IV: what your technical documentation actually has to show", time: "9 min" },
      { href: "/insights/from-b-to-a-the-discipline-behind-the-upgrade", label: "From B to A: the discipline behind the upgrade", time: "6 min" },
    ],
  },
  {
    monogram: "F",
    eyebrow: "FOR THE CFO",
    headline: "Four reads on consolidation, contract surface, and ROI.",
    whoFor:
      "Finance chiefs, procurement leads, and budget owners evaluating the platform's effect on the productivity-vendor stack.",
    totalTime: "~25 min",
    steps: [
      { href: "/insights/vendor-consolidation-math-eight-tools-to-one", label: "Vendor consolidation math: replacing eight productivity tools with one", time: "4 min" },
      { href: "/insights/brief-your-cfo-on-agentic-ai-without-overpromising", label: "How to brief your CFO on agentic AI without overpromising", time: "4 min" },
      { href: "/for-teams", label: "For business teams (CFO section + consolidation table)", time: "~10 min" },
      { href: "/for-ciso", label: "The four prepared sentences (CFO version is one of them)", time: "~7 min" },
    ],
  },
  {
    monogram: "O",
    eyebrow: "FOR THE COO / VP OPERATIONS",
    headline: "Three reads on capacity, throughput, and the agent model.",
    whoFor:
      "Operations leaders evaluating whether agentic AI changes the team's capacity equation, and on what timeline.",
    totalTime: "~20 min",
    steps: [
      { href: "/for-teams", label: "For business teams (COO section + the named agents)", time: "~10 min" },
      { href: "/insights/what-agentic-ai-does-for-sales-velocity", label: "What agentic AI actually does for sales velocity", time: "4 min" },
      { href: "/insights/vendor-consolidation-math-eight-tools-to-one", label: "Vendor consolidation math (operational angle)", time: "4 min" },
    ],
  },
  {
    monogram: "E",
    eyebrow: "FOR THE CEO / FOUNDER / BOARD",
    headline: "Four reads on the strategic case and the regulatory clock.",
    whoFor:
      "CEOs, founders, and board members who need to defend the AI strategy at the next board meeting.",
    totalTime: "~25 min",
    steps: [
      { href: "/philosophy", label: "Why we built Handvantage (founder essay)", time: "~8 min" },
      { href: "/for-ciso", label: "The 90-second brief — board sentence + risk math", time: "~5 min" },
      { href: "/insights/eu-ai-act-deadline-ciso-ignoring", label: "The EU AI Act deadline your CISO is ignoring", time: "5 min" },
      { href: "/insights/why-40-percent-ai-projects-fail", label: "Why 40% of agentic AI projects fail (and the governance answer)", time: "7 min" },
    ],
  },
];

const SECTOR_PATHS: Path[] = [
  {
    monogram: "$",
    eyebrow: "FINANCIAL SERVICES",
    headline: "The dossier + how the architecture maps to FINRA / SEC.",
    whoFor:
      "Broker-dealers, registered investment advisers, wealth managers, and bank-affiliated firms.",
    totalTime: "~30 min",
    steps: [
      { href: "/insights/agentic-ai-financial-services-finra-audit-trail", label: "Agentic AI in financial services: FINRA, SEC, the audit-trail problem", time: "12 min" },
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture across 11 frameworks", time: "~8 min" },
    ],
  },
  {
    monogram: "+",
    eyebrow: "HEALTHCARE",
    headline: "The dossier + the platform's HIPAA + supervision posture.",
    whoFor:
      "Hospital systems, payers, life-sciences companies, and healthcare-adjacent SaaS.",
    totalTime: "~30 min",
    steps: [
      { href: "/insights/healthcare-agentic-ai-hipaa-fda-supervision", label: "Healthcare and agentic AI: HIPAA, FDA SaMD, supervision", time: "13 min" },
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture (HIPAA among the 11 frameworks)", time: "~8 min" },
    ],
  },
  {
    monogram: "₿",
    eyebrow: "FINTECH",
    headline: "The dossier + the BSA/AML + fair-lending posture.",
    whoFor:
      "Lending, payments, BaaS / sponsor-bank, neobanks, embedded finance, and fintech infrastructure.",
    totalTime: "~30 min",
    steps: [
      { href: "/insights/fintech-agentic-ai-bsa-aml-fair-lending-sponsor-bank", label: "Fintech and agentic AI: BSA/AML, fair lending, sponsor bank", time: "14 min" },
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture (PCI DSS + SOC 2 + TBSDADM among the 11)", time: "~8 min" },
    ],
  },
  {
    monogram: "P",
    eyebrow: "CANADIAN PUBLIC SECTOR",
    headline: "The dossier + the TBSDADM + sovereignty posture.",
    whoFor:
      "Federal departments, provincial agencies, Crown Corporations, and First Nations governments.",
    totalTime: "~35 min",
    steps: [
      { href: "/insights/public-sector-agentic-ai-canadian-sovereignty", label: "Canadian public sector: TBS Directive, provincial frames, Indigenous sovereignty", time: "16 min" },
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture (PIPEDA + Privacy Act + TBSDADM)", time: "~8 min" },
    ],
  },
  {
    monogram: "L",
    eyebrow: "LEGAL SERVICES",
    headline: "The dossier + the privilege + supervision posture.",
    whoFor:
      "Law firms (private practice + in-house counsel), legal-tech companies, and law society compliance teams.",
    totalTime: "~30 min",
    steps: [
      { href: "/insights/legal-services-agentic-ai-privilege-competence-supervision", label: "Legal services: privilege, competence, supervision rule", time: "13 min" },
      { href: "/architecture", label: "The 7-Layer Defence Architecture", time: "~10 min" },
      { href: "/compliance", label: "Compliance posture (the data-residency + audit-trail story)", time: "~8 min" },
    ],
  },
];

const PathCard = ({ path }: { path: Path }) => (
  <article className="border border-ink-hairline bg-paper p-6 md:p-8 flex flex-col h-full">
    <div className="flex items-center gap-4 mb-5">
      <span
        aria-hidden="true"
        className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 border border-ink-hairline bg-paper-deep font-display italic text-oxblood text-[28px] leading-none"
      >
        {path.monogram}
      </span>
      <div>
        <p className="font-mono text-[11px] tracking-[0.18em] text-oxblood uppercase">
          {path.eyebrow}
        </p>
        <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.14em]">
          {path.steps.length} reads · {path.totalTime}
        </p>
      </div>
    </div>
    <h3 className="font-display text-h4 text-ink leading-tight mb-3">{path.headline}</h3>
    <p className="font-display text-body-sm text-ink-soft leading-relaxed mb-6">{path.whoFor}</p>
    <ol className="border-t border-ink-hairline mt-auto">
      {path.steps.map((step, i) => (
        <li key={step.href} className="border-b border-ink-hairline">
          <Link
            href={step.href}
            className="group flex items-baseline gap-3 py-3 hover:bg-paper-deep transition-colors -mx-2 px-2"
          >
            <span className="font-mono text-byline text-ink-soft tracking-[0.12em] flex-shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-body-sm text-ink group-hover:text-oxblood transition-colors leading-snug flex-grow">
              {step.label}
            </span>
            <span className="font-mono text-[11px] text-ink-soft tracking-[0.12em] flex-shrink-0">
              {step.time}
            </span>
          </Link>
        </li>
      ))}
    </ol>
  </article>
);

export function ReadingPaths() {
  return (
    <section id="start-here" className="py-16 md:py-24 bg-paper">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[820px] mb-12 md:mb-16">
          <p className="text-eyebrow font-ui font-medium text-oxblood uppercase tracking-[0.12em] mb-6">
            START HERE
          </p>
          <h2 className="font-display text-[clamp(2rem,3vw+1rem,3rem)] leading-[1.05] tracking-[-0.01em] text-ink mb-6">
            Curated reading paths.
          </h2>
          <p className="font-display text-body-lg text-ink leading-relaxed">
            The archive has 14+ articles. Most readers don&rsquo;t need all of them. Pick the path
            for your role or your sector — each is three to five reads in the right order, with
            honest time estimates, that get you to the question you&rsquo;re actually asking.
          </p>
        </div>

        <div className="mb-16">
          <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.18em] mb-6">
            By role
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {ROLE_PATHS.map((path) => (
              <PathCard key={path.eyebrow} path={path} />
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-byline text-ink-soft uppercase tracking-[0.18em] mb-6">
            By sector
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SECTOR_PATHS.map((path) => (
              <PathCard key={path.eyebrow} path={path} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

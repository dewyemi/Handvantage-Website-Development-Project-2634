import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';

const { FiArrowRight, FiCheck, FiShield, FiServer, FiLock, FiActivity, FiLayers, FiKey } = FiIcons;

const seo = {
  title: 'Vantage Workspace — Sovereign Agentic AI for Regulated Enterprises | Handvantage',
  description:
    'Vantage Workspace is the agentic AI platform Handvantage built for regulated enterprises. One platform — email, files, chat, meetings, documents, and an AI agent layer — running on customer infrastructure with continuous compliance across 11 frameworks and a 7-Layer Defence Architecture.',
  keywords:
    'Vantage Workspace, sovereign agentic AI, AI compliance, EU AI Act, NIST AI RMF, ISO 42001, 7-layer defence architecture, on-prem agentic AI, regulated AI platform, Handvantage, Pilot Fleet model, OWASP top 10 agentic, AI audit log',
  schemaData: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Vantage Workspace',
    description:
      'Sovereign agentic AI platform with a 7-Layer Defence Architecture, deployed on customer infrastructure, with continuous compliance grading across 11 frameworks.',
    url: 'https://workspace.handvantage.com',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Agentic AI Platform',
    operatingSystem: 'Linux (Docker / Kubernetes); air-gapped supported',
    publisher: {
      '@type': 'Organization',
      name: 'Handvantage',
      url: 'https://handvantage.co',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      price: '0',
      description: 'Pricing on application. Contact us to discuss your deployment.',
    },
  },
};

const Stat = ({ value, label, suffix }) => (
  <div className="flex flex-col">
    <p className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase mb-2">{label}</p>
    <p className="font-editorial text-4xl md:text-5xl text-white leading-none">
      {value}
      {suffix && <span className="text-arc text-2xl md:text-3xl ml-1">{suffix}</span>}
    </p>
  </div>
);

const Layer = ({ n, name, desc }) => (
  <div className="grid grid-cols-12 gap-4 py-5 border-b border-slate-800">
    <div className="col-span-2 md:col-span-1">
      <span className="font-mono text-[11px] tracking-[0.18em] text-arc">L{String(n).padStart(2, '0')}</span>
    </div>
    <div className="col-span-10 md:col-span-3">
      <p className="font-editorial text-lg text-white">{name}</p>
    </div>
    <div className="col-span-12 md:col-span-8">
      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Framework = ({ name }) => (
  <span className="font-mono text-[11px] tracking-[0.16em] text-slate-400 uppercase border border-slate-800 px-3 py-1.5">
    {name}
  </span>
);

const VantageWorkspacePage = () => {
  return (
    <>
      <SEOHead {...seo} />
      <div className="bg-[#020617] noise-texture min-h-screen">
        {/* Hero */}
        <section className="pt-32 lg:pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-arc/5 blur-[150px] rounded-full pointer-events-none" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="font-mono text-[11px] tracking-[0.22em] text-arc uppercase mb-6 inline-block border-b border-arc pb-1">
                  THE PRODUCT · NOW LAUNCHING
                </p>
                <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.04] tracking-tight mb-6">
                  Vantage Workspace.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-arc to-slate-300">
                    Sovereign agentic AI, audited like a kernel.
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl font-light">
                  One platform — email, files, chat, meetings, documents, and an AI agent layer that
                  operates across all of them. Twenty containers, one SSO, one signed audit trail.
                  Deployed on infrastructure you control. Graded continuously across eleven
                  regulatory frameworks.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href="https://workspace.handvantage.com"
                    rel="noopener"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-arc text-void font-editorial font-bold text-sm tracking-widest hover:bg-arc/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm"
                  >
                    SEE THE FULL PRODUCT
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://workspace.handvantage.com/contact"
                    rel="noopener"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 bg-slate-900/50 text-slate-300 font-editorial font-bold text-sm tracking-widest hover:border-slate-500 hover:text-white transition-colors rounded-sm"
                  >
                    TALK TO THE TEAM
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono tracking-widest text-slate-500 uppercase">
                  <span>A GRADE COMPLIANCE</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span>11 FRAMEWORKS</span>
                  <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                  <span>ON-PREM DEPLOYABLE</span>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <div className="relative">
                  <div className="absolute -inset-px bg-gradient-to-br from-arc/20 to-transparent blur-xl pointer-events-none" />
                  <div className="relative border border-slate-800 bg-slate-950/60 backdrop-blur-sm p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <Stat value="A" label="GRADE" suffix="100%" />
                      <Stat value="11" label="FRAMEWORKS" />
                      <Stat value="168" label="AUTOMATED TESTS" />
                      <Stat value="20" label="CONTAINERS" />
                    </div>
                    <div className="border-t border-slate-800 pt-6">
                      <p className="font-mono text-[10px] tracking-[0.22em] text-slate-500 uppercase mb-2">
                        LAST ASSESSED
                      </p>
                      <p className="font-mono text-sm text-slate-300">May 5, 2026 · /assess on every build</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why it exists */}
        <section className="py-24 border-t border-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] tracking-[0.22em] text-slate-500 uppercase mb-6">
                  WHY IT EXISTS
                </p>
                <h2 className="font-editorial text-3xl md:text-4xl text-white leading-tight mb-6">
                  We built it because the alternative
                  <span className="text-arc"> wasn&rsquo;t a purchase, it was a project.</span>
                </h2>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-5 text-slate-300 leading-relaxed">
                  <p>
                    Most &ldquo;AI for the enterprise&rdquo; platforms ship a product layer and
                    structurally externalise the hard parts — identity, audit, compliance evidence,
                    supply-chain provenance — onto the customer. The CISO assembles those layers in
                    a thirteen-month sprint against a regulatory deadline that&rsquo;s closing.
                  </p>
                  <p>
                    Vantage Workspace inverts that. Identity, audit, compliance evidence, and supply
                    chain are first-class structural concerns. Every prompt, every tool call, every
                    agent action is mediated by the 7-Layer Defence Architecture and produces a
                    signed event. The audit log is non-contestable on whether the layers were
                    running — they were, by construction.
                  </p>
                  <p>
                    The result: a platform that doesn&rsquo;t need to be made compliant. It&rsquo;s
                    compliant by structure, and the evidence is automatic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 7 layers */}
        <section className="py-24 border-t border-slate-900 bg-gradient-to-b from-[#020617] via-slate-950/40 to-[#020617]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mb-12">
              <p className="font-mono text-[11px] tracking-[0.22em] text-arc uppercase mb-6">
                THE ARCHITECTURE
              </p>
              <h2 className="font-editorial text-3xl md:text-4xl text-white leading-tight mb-4">
                Seven layers, one stack.
              </h2>
              <p className="text-slate-400 max-w-2xl">
                Each layer is a discrete service. Each layer emits a signed event for every decision
                it makes. The events ladder into a tamper-evident log that exports to your SIEM.
              </p>
            </div>
            <div className="border-t border-slate-800">
              <Layer n={1} name="Policy Engine" desc="Versioned, signed YAML policies. Every action gated before it reaches a tool." />
              <Layer n={2} name="Prompt Defence" desc="Injection detection, jailbreak heuristics, and prompt-shape validation." />
              <Layer n={3} name="Tool Guardrails" desc="Per-agent tool catalogues, scope-checked at invocation." />
              <Layer n={4} name="Memory Safety" desc="Embedding-inversion probes; tenant-isolated vector spaces." />
              <Layer n={5} name="Trust Boundaries" desc="Identity attestation between humans, agents, and tools. No shared service accounts." />
              <Layer n={6} name="Inter-Service Auth" desc="mTLS with short-lived, certificate-rooted credentials issued per session." />
              <Layer n={7} name="Supply Chain" desc="OCI-signed images, SBOMs on every release, signature verification at deploy." />
            </div>
            <div className="mt-10 flex justify-end">
              <a
                href="https://workspace.handvantage.com/architecture"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-sm font-mono tracking-[0.18em] text-arc hover:text-white uppercase transition-colors"
              >
                FULL ARCHITECTURE SPEC
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-24 border-t border-slate-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="font-mono text-[11px] tracking-[0.22em] text-slate-500 uppercase mb-6">
                  CURRENT POSTURE
                </p>
                <h2 className="font-editorial text-3xl md:text-4xl text-white leading-tight mb-4">
                  A grade. <span className="text-arc">100% pass rate.</span>
                </h2>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  Not annually. Not quarterly. The platform is graded on every build by the same
                  /assess mission an auditor would run, computed from the audit log itself rather
                  than from self-attestation. As of May 5, 2026: 168 automated tests, 100% pass,
                  across eleven frameworks.
                </p>
                <a
                  href="https://workspace.handvantage.com/compliance"
                  rel="noopener"
                  className="group inline-flex items-center gap-2 text-sm font-mono tracking-[0.18em] text-arc hover:text-white uppercase transition-colors"
                >
                  COMPLIANCE BREAKDOWN
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2">
                  <Framework name="NIST AI RMF" />
                  <Framework name="ISO/IEC 42001" />
                  <Framework name="EU AI Act" />
                  <Framework name="SOC 2" />
                  <Framework name="PCI DSS v4.0" />
                  <Framework name="HIPAA" />
                  <Framework name="FINRA" />
                  <Framework name="FedRAMP" />
                  <Framework name="PIPEDA" />
                  <Framework name="Privacy Act (Canada)" />
                  <Framework name="AIDA (proposed)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-24 border-t border-slate-900 bg-gradient-to-b from-[#020617] via-slate-950/40 to-[#020617]">
          <div className="container mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.22em] text-arc uppercase mb-6">
              DEPLOYMENT
            </p>
            <h2 className="font-editorial text-3xl md:text-4xl text-white leading-tight mb-12 max-w-3xl">
              Single-tenant. On your infrastructure. <span className="text-arc">Always.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: FiServer, title: 'Docker Compose', desc: 'Single-node evaluation and pilot deployments. 8-core / 32GB VM. Ten-minute install.' },
                { icon: FiLayers, title: 'Kubernetes', desc: 'Multi-node production. Helm chart, replica scaling, external Postgres / Redis / object store.' },
                { icon: FiLock, title: 'Air-gapped', desc: 'Classified or no-internet environments. OCI bundle, offline install, signed licence.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="border border-slate-800 bg-slate-950/40 p-6">
                  <SafeIcon icon={icon} className="w-6 h-6 text-arc mb-4" />
                  <p className="font-editorial text-lg text-white mb-2">{title}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 border-t border-slate-900">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="font-mono text-[11px] tracking-[0.22em] text-arc uppercase mb-6">
              THE NEXT STEP
            </p>
            <h2 className="font-editorial text-4xl md:text-5xl text-white leading-tight mb-6">
              The full product, the architecture spec, and the editorial archive
              <br />
              <span className="text-arc">live at workspace.handvantage.com.</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              This page is the introduction. The full reference is on the dedicated workspace site —
              including the seven-layer architecture spec, the framework-by-framework compliance
              breakdown, the founder essay, and the engineering retrospectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://workspace.handvantage.com"
                rel="noopener"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-arc text-void font-editorial font-bold text-sm tracking-widest hover:bg-arc/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm"
              >
                OPEN VANTAGE WORKSPACE
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://workspace.handvantage.com/insights"
                rel="noopener"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 bg-slate-900/50 text-slate-300 font-editorial font-bold text-sm tracking-widest hover:border-slate-500 hover:text-white transition-colors rounded-sm"
              >
                READ THE INSIGHTS ARCHIVE
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VantageWorkspacePage;

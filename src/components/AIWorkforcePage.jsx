import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { TerminalLabel, TerminalBadge } from './TerminalText';
import DataDisplay from './DataDisplay';
import RadarScan from './svg/RadarScan';

const { FiTarget, FiShield, FiHeadphones, FiArrowRight, FiCheck, FiX, FiZap, FiCpu, FiDatabase, FiSend } = FiIcons;

/**
 * AIWorkforcePage - The Digital Workforce
 * URL: /services/ai-workforce
 * Master Spec v6: "Don't Buy Software. Hire Digital Employees."
 */

const agents = [
  {
    id: 1,
    name: 'The Hunter',
    role: 'AI SDR / Prospecting',
    tagline: '"I book meetings while you sleep."',
    icon: FiTarget,
    color: 'signal',
    mission: 'Finds leads, researches their pain points, writes hyper-personalized emails, and books meetings.',
    output: '"I just booked 5 demos while you were sleeping."',
    capabilities: [
      'Finds leads automatically',
      'Researches pain points',
      'Writes hyper-personalized emails',
      'Books meetings 24/7',
    ],
  },
  {
    id: 2,
    name: 'The Sentry',
    role: 'AI Compliance / GRC Analyst',
    tagline: '"I watch the logs so you don\'t have to."',
    icon: FiShield,
    color: 'arc',
    mission: 'Reads every log, checks every policy, and gathers evidence for SOC2/ISO audits in real-time.',
    output: '"Your audit is ready. The auditor will be here for 1 hour, not 1 week."',
    capabilities: [
      'Reads every log in real-time',
      'Checks every policy automatically',
      'Gathers SOC2/ISO evidence',
      'Audit-ready 24/7',
    ],
  },
  {
    id: 3,
    name: 'The Concierge',
    role: 'AI Support / L1-L2 Agent',
    tagline: '"I solve tickets in milliseconds."',
    icon: FiHeadphones,
    color: 'viability',
    mission: 'Triage tickets, reset passwords, provision access, and solve 80% of requests without human intervention.',
    output: '"Inbox Zero. Every single day."',
    capabilities: [
      'Triages tickets instantly',
      'Resets passwords automatically',
      'Provisions access 24/7',
      'Inbox Zero guaranteed',
    ],
  },
];

const paradigmData = [
  {
    category: 'Tool',
    oldWay: 'Zapier / Make Scripts',
    newWay: 'Autonomous Agents (LLMs)',
  },
  {
    category: 'Capability',
    oldWay: '"If This, Then That."',
    newWay: '"Reason, Plan, Execute."',
  },
  {
    category: 'Limit',
    oldWay: 'Breaks if the data changes.',
    newWay: 'Adapts to chaos instantly.',
  },
  {
    category: 'Value',
    oldWay: 'Saves 5 minutes.',
    newWay: 'Replaces a $60k salary.',
  },
];

const executionSteps = [
  {
    number: '01',
    title: 'Map',
    description: 'We identify the "human bottlenecks."',
    icon: FiDatabase,
  },
  {
    number: '02',
    title: 'Build',
    description: 'We code the agents (Custom Python + LLMs).',
    icon: FiCpu,
  },
  {
    number: '03',
    title: 'Train',
    description: 'We give them your knowledge base.',
    icon: FiZap,
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'They start working on Day 1.',
    icon: FiSend,
  },
];

const colorSchemes = {
  signal: 'text-signal border-signal/30 hover:border-signal bg-signal/5',
  arc: 'text-arc border-arc/30 hover:border-arc bg-arc/5',
  viability: 'text-viability-primary border-viability-primary/30 hover:border-viability-primary bg-viability-primary/5',
};

const AIWorkforcePage = () => {
  return (
    <>
      <SEOHead
        title="AI Workforce - Digital Employees | Handvantage"
        description="Don't buy software. Hire digital employees. Deploy autonomous AI agents for sales, compliance, and support. Scale infinitely for a fraction of the cost."
        canonical="/services/ai-workforce"
      />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:py-40 bg-void overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <RadarScan variant="automation" className="w-full h-full" />
          </div>
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-signal/10 sharp-edges blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <TerminalBadge status="operational" pulse={true} className="mb-8 inline-block">
              AGENTIC AI WORKFORCE
            </TerminalBadge>

            <h1 className="font-editorial text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tighter">
              Hire an Army of 1,000<br />
              <span className="text-signal">for the Price of One.</span>
            </h1>

            <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Automation is dead. This is <span className="text-signal font-bold">Agentic AI</span>.<br />
              We deploy autonomous digital workers that prospect, negotiate, research, and execute tasks 24/7.<br />
              No sleep. No burnout. No overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/roi-calculator"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 sharp-edges bg-signal hover:bg-signal/90 text-void font-editorial font-bold text-lg transition-all shadow-glow-signal"
              >
                Deploy My AI Workforce
                <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#fleet"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 sharp-edges border-2 border-signal/30 hover:border-signal text-signal hover:bg-signal/10 font-editorial font-semibold text-lg transition-all"
              >
                See The Agents
                <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="terminal-text text-xs text-slate-500 mt-8 tracking-widest">
              VENDOR AGNOSTIC • OPENAI • ANTHROPIC • OPEN SOURCE
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARADIGM SHIFT SECTION */}
      <section className="relative py-24 md:py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalLabel className="text-red-400 mb-4">
              THE PARADIGM SHIFT
            </TerminalLabel>
            <h2 className="font-editorial text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tighter">
              The "Script" vs. The "Agent."
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We don't just "connect APIs." We build <span className="text-signal font-bold">Digital Employees</span> that think like your best humans but work at the speed of silicon.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="grid md:grid-cols-2 gap-0 mb-0">
              <div className="brutal-card bg-red-500/5 border-2 border-red-500/30 p-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <SafeIcon icon={FiX} className="w-8 h-8 text-red-400" />
                  <h3 className="font-editorial text-2xl md:text-3xl font-bold text-white">
                    The Old Way (Automation)
                  </h3>
                </div>
              </div>
              <div className="brutal-card bg-signal/5 border-2 border-signal/30 p-6 text-center">
                <div className="flex items-center justify-center gap-3">
                  <SafeIcon icon={FiCheck} className="w-8 h-8 text-signal" />
                  <h3 className="font-editorial text-2xl md:text-3xl font-bold text-white">
                    The New Way (Agentic AI)
                  </h3>
                </div>
              </div>
            </div>

            {/* Rows */}
            {paradigmData.map((row, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-0">
                <div className="brutal-card bg-void/95 border border-red-500/10 p-6">
                  <div className="mb-2">
                    <span className="terminal-text text-xs text-red-400 tracking-widest">
                      {row.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-mono text-base text-slate-300">{row.oldWay}</p>
                </div>
                <div className="brutal-card bg-void/95 border border-signal/10 hover:border-signal/30 hover:bg-signal/5 p-6 transition-all">
                  <div className="mb-2">
                    <span className="terminal-text text-xs text-signal tracking-widest">
                      {row.category.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-mono text-base text-white font-semibold">{row.newWay}</p>
                </div>
              </div>
            ))}

            {/* Promise */}
            <div className="brutal-card bg-viability-primary/10 border-2 border-viability-primary/30 p-8 text-center">
              <p className="font-editorial text-2xl font-bold text-white mb-3">
                The Handvantage Promise:
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                We don't just "connect APIs." We build <span className="text-signal font-bold">Digital Employees</span> that think like your best humans but work at the speed of silicon.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET THE FLEET SECTION */}
      <section id="fleet" className="relative py-24 md:py-32 bg-void">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalLabel className="text-signal mb-4">
              MEET THE FLEET
            </TerminalLabel>
            <h2 className="font-editorial text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tighter">
              The Digital Workforce
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Vendor agnostic. We build on <span className="text-signal font-semibold">OpenAI</span>,{' '}
              <span className="text-arc font-semibold">Anthropic</span>, or{' '}
              <span className="text-viability-primary font-semibold">Open Source</span>.
            </p>
          </motion.div>

          {/* Agent Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {agents.map((agent, index) => {
              const scheme = colorSchemes[agent.color];
              return (
                <motion.div
                  key={agent.id}
                  className={`brutal-card ${scheme} border-2 p-8 transition-all hover:scale-105`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-6">
                    <SafeIcon icon={agent.icon} className={`w-12 h-12 ${agent.color === 'signal' ? 'text-signal' : agent.color === 'arc' ? 'text-arc' : 'text-viability-primary'}`} />
                  </div>
                  <h3 className={`font-editorial text-3xl font-bold mb-2 ${agent.color === 'signal' ? 'text-signal' : agent.color === 'arc' ? 'text-arc' : 'text-viability-primary'}`}>
                    {agent.name}
                  </h3>
                  <div className="terminal-text text-xs text-slate-500 tracking-wider mb-4">
                    {agent.role.toUpperCase()}
                  </div>
                  <p className="font-editorial text-lg italic text-white mb-6">
                    {agent.tagline}
                  </p>
                  <div className="mb-6">
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      <span className="font-semibold text-white">Mission:</span> {agent.mission}
                    </p>
                    <div className="brutal-card bg-white/5 p-4 border border-white/10">
                      <p className="text-sm text-slate-300 italic">
                        <span className="font-semibold text-white">Output:</span> {agent.output}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {agent.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <SafeIcon icon={FiCheck} className={`w-4 h-4 mt-1 ${agent.color === 'signal' ? 'text-signal' : agent.color === 'arc' ? 'text-arc' : 'text-viability-primary'}`} />
                        <span className="text-sm text-slate-300">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GROWTH ENGINE SECTION */}
      <section className="relative py-24 md:py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalLabel className="text-signal mb-4">
              THE GROWTH ENGINE
            </TerminalLabel>
            <h2 className="font-editorial text-5xl md:text-7xl font-bold text-white mb-8 leading-none tracking-tighter">
              Revenue, Not Just Savings.
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-3xl mx-auto">
              Most IT firms talk about "cutting costs." We talk about <span className="text-signal font-bold">multiplying capacity</span>.<br />
              When you hire a Handvantage AI Workforce, you aren't just saving on headcount. You are unlocking <span className="text-white font-bold">infinite scale</span>.
            </p>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                className="brutal-card bg-signal/5 border border-signal/20 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-editorial text-3xl font-bold text-signal mb-3">Scale Outreach</h3>
                <p className="text-slate-300 text-lg">Send 10,000 personalized emails a day.</p>
              </motion.div>
              <motion.div
                className="brutal-card bg-arc/5 border border-arc/20 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-editorial text-3xl font-bold text-arc mb-3">Scale Service</h3>
                <p className="text-slate-300 text-lg">Support 100,000 users with zero wait time.</p>
              </motion.div>
              <motion.div
                className="brutal-card bg-viability-primary/5 border border-viability-primary/20 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="font-editorial text-3xl font-bold text-viability-primary mb-3">Scale Speed</h3>
                <p className="text-slate-300 text-lg">Execute complex workflows in milliseconds.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXECUTION SECTION */}
      <section className="relative py-24 md:py-32 bg-void">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TerminalLabel className="text-viability-primary mb-4">
              THE EXECUTION
            </TerminalLabel>
            <h2 className="font-editorial text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tighter">
              We Are The Architects.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
              You don't need to know Python. You don't need to know Prompt Engineering.
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We come in, map your workflows, build the agents, and deploy them into your Slack/Teams/Email.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {executionSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative brutal-card bg-viability-primary/5 border border-viability-primary/20 p-8 text-center hover:bg-viability-primary/10 hover:border-viability-primary/40 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Arrow */}
                {index < executionSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <SafeIcon icon={FiArrowRight} className="w-8 h-8 text-viability-primary" />
                  </div>
                )}

                <div className="terminal-text text-xs text-viability-primary mb-4 tracking-widest">
                  STEP {step.number}
                </div>
                <SafeIcon icon={step.icon} className="w-12 h-12 text-viability-primary mx-auto mb-4" />
                <h3 className="font-editorial text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-signal to-arc">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-editorial text-5xl md:text-7xl font-bold text-white mb-6 leading-none tracking-tighter">
              Ready to Scale?
            </h2>
            <p className="text-2xl text-white/95 leading-relaxed mb-12 max-w-3xl mx-auto">
              Your competitors are still hiring humans for robot work. Leave them behind.
            </p>
            <a
              href="https://handvantage.co/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-12 py-6 sharp-edges bg-void hover:bg-void/90 text-signal font-editorial font-bold text-xl transition-all shadow-2xl hover:shadow-void/60"
            >
              Build My Army
              <SafeIcon icon={FiArrowRight} className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AIWorkforcePage;

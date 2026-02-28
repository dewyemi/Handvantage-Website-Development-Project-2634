import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { TerminalLabel } from './TerminalText';

const { FiTarget, FiShield, FiHeadphones, FiActivity, FiZap } = FiIcons;

/**
 * AgentRoster - Horizontal scroll carousel of AI agents
 * Aesthetic: Video game character selection screen
 * Master Spec v6: The "Digital Workforce" showcase
 */

const agents = [
  {
    id: 1,
    name: 'The Hunter',
    role: 'AI SDR / Prospecting',
    tagline: '"I hunt threats and opportunities 24/7."',
    icon: FiTarget,
    color: 'signal',
    stats: [
      { label: 'LEADS QUALIFIED', value: '10K+', unit: '/month' },
      { label: 'MEETING BOOKED', value: '247', unit: '/week' },
      { label: 'RESPONSE RATE', value: '34', unit: '%' },
    ],
    capabilities: [
      'Finds leads automatically',
      'Researches pain points',
      'Writes hyper-personalized emails',
      'Books meetings 24/7',
    ],
    status: 'operational',
  },
  {
    id: 2,
    name: 'The Sentry',
    role: 'AI Compliance / GRC Analyst',
    tagline: '"I filter the noise. You only see the signal."',
    icon: FiShield,
    color: 'arc',
    stats: [
      { label: 'LOGS ANALYZED', value: '2.4M', unit: '/day' },
      { label: 'AUDIT PREP', value: '1', unit: 'hour' },
      { label: 'COMPLIANCE SCORE', value: '99', unit: '%' },
    ],
    capabilities: [
      'Reads every log in real-time',
      'Checks every policy automatically',
      'Gathers SOC2/ISO evidence',
      'Audit-ready 24/7',
    ],
    status: 'operational',
  },
  {
    id: 3,
    name: 'The Concierge',
    role: 'AI Support / L1-L2 Agent',
    tagline: '"I resolve friction in milliseconds."',
    icon: FiHeadphones,
    color: 'viability',
    stats: [
      { label: 'TICKETS SOLVED', value: '80', unit: '%' },
      { label: 'AVG RESPONSE', value: '<1', unit: 'min' },
      { label: 'SATISFACTION', value: '4.9', unit: '/5' },
    ],
    capabilities: [
      'Triages tickets instantly',
      'Resets passwords automatically',
      'Provisions access 24/7',
      'Inbox Zero guaranteed',
    ],
    status: 'operational',
  },
];

const colorSchemes = {
  signal: {
    bg: 'from-signal/10 to-signal/5',
    border: 'border-signal/30 hover:border-signal',
    glow: 'shadow-glow-signal-sm',
    text: 'text-signal',
    icon: 'bg-signal/20 text-signal',
  },
  arc: {
    bg: 'from-arc/10 to-arc/5',
    border: 'border-arc/30 hover:border-arc',
    glow: 'shadow-glow-arc-sm',
    text: 'text-arc',
    icon: 'bg-arc/20 text-arc',
  },
  viability: {
    bg: 'from-viability-primary/10 to-viability-primary/5',
    border: 'border-viability-primary/30 hover:border-viability-primary',
    glow: 'shadow-glow-viability-sm',
    text: 'text-viability-primary',
    icon: 'bg-viability-primary/20 text-viability-primary',
  },
};

const AgentRosterCard = ({ agent, index }) => {
  const scheme = colorSchemes[agent.color];

  return (
    <motion.div
      className="group relative flex-shrink-0 w-[380px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      {/* Outer Glow */}
      <div className={`absolute -inset-2 bg-gradient-to-b ${scheme.bg} rounded-none blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Card */}
      <div className={`relative h-full border-2 ${scheme.border} bg-void/95 backdrop-blur-xl transition-all duration-200 ${scheme.glow} sharp-edges overflow-hidden`}>
        {/* Status Bar - Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-30" style={{ color: colorSchemes[agent.color].text.replace('text-', '') }} />

        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-current opacity-40" style={{ color: colorSchemes[agent.color].text.replace('text-', '') }} />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-current opacity-40" style={{ color: colorSchemes[agent.color].text.replace('text-', '') }} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-current opacity-40" style={{ color: colorSchemes[agent.color].text.replace('text-', '') }} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-current opacity-40" style={{ color: colorSchemes[agent.color].text.replace('text-', '') }} />

        <div className="p-8">
          {/* Status Indicator */}
          <div className="flex items-center justify-between mb-6">
            <TerminalLabel className={`${scheme.text} text-xs`}>
              AGENT {String(agent.id).padStart(2, '0')}
            </TerminalLabel>
            <div className="flex items-center gap-2">
              <motion.div
                className={`w-2 h-2 ${scheme.text} rounded-none`}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="terminal-text text-xs text-slate-500">
                {agent.status.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <motion.div
              className={`w-20 h-20 ${scheme.icon} sharp-edges flex items-center justify-center ring-2 ring-current ring-opacity-20`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <SafeIcon icon={agent.icon} className="w-10 h-10" />
            </motion.div>
          </div>

          {/* Name & Role */}
          <div className="mb-4">
            <h3 className={`font-editorial text-3xl font-bold ${scheme.text} mb-2 leading-none tracking-tighter`}>
              {agent.name}
            </h3>
            <div className="terminal-text text-xs text-slate-400 tracking-wider">
              {agent.role.toUpperCase()}
            </div>
          </div>

          {/* Tagline */}
          <p className={`font-editorial text-lg italic mb-6 ${scheme.text} leading-tight`}>
            {agent.tagline}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {agent.stats.map((stat, i) => (
              <div key={i} className="bg-white/5 p-3 sharp-edges border border-white/5">
                <div className={`font-mono text-xl font-bold ${scheme.text} leading-none`}>
                  {stat.value}
                </div>
                <div className="terminal-text text-[9px] text-slate-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="space-y-2">
            {agent.capabilities.map((capability, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className={`w-1 h-1 ${scheme.text} mt-2 rounded-none flex-shrink-0`} />
                <span className="text-sm text-slate-300 leading-tight">
                  {capability}
                </span>
              </div>
            ))}
          </div>

          {/* Deploy Button */}
          <Link
            to="/services/ai-workforce"
            className={`mt-6 w-full py-3 sharp-edges border-2 ${scheme.border} ${scheme.text} font-editorial font-semibold text-sm hover:bg-current hover:bg-opacity-10 transition-all group/btn relative overflow-hidden flex items-center justify-center gap-2`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              DEPLOY AGENT
              <SafeIcon icon={FiActivity} className="w-4 h-4 group-hover/btn:animate-pulse" />
            </span>
            <motion.div
              className={`absolute inset-0 bg-current opacity-0 group-hover/btn:opacity-10`}
              initial={false}
            />
          </Link>
        </div>

        {/* Scan Line Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className={`absolute w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${scheme.text}`}
            animate={{
              y: ['-100%', 'calc(100% + 100%)'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AgentRoster = () => {
  const scrollRef = useRef(null);

  return (
    <section className="relative py-24 md:py-32 bg-void overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Section Header */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
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
          <p className="text-xl text-slate-300 leading-relaxed">
            Vendor agnostic. We build on <span className="text-signal font-semibold">OpenAI</span>,{' '}
            <span className="text-arc font-semibold">Anthropic</span>, or{' '}
            <span className="text-viability-primary font-semibold">Open Source</span>.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Gradient Fade - Left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />

        {/* Gradient Fade - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 px-6 md:px-12 overflow-x-auto scrollbar-hide pb-8"
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Spacer */}
          <div className="flex-shrink-0 w-[calc((100vw-380px)/2-32px)]" />

          {/* Agent Cards */}
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              style={{ scrollSnapAlign: 'center' }}
            >
              <AgentRosterCard agent={agent} index={index} />
            </div>
          ))}

          {/* Spacer */}
          <div className="flex-shrink-0 w-[calc((100vw-380px)/2-32px)]" />
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="terminal-text text-xs text-slate-500 tracking-widest flex items-center justify-center gap-2">
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            →
          </motion.span>
          SCROLL TO EXPLORE
          <motion.span
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ←
          </motion.span>
        </div>
      </motion.div>

      {/* CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default AgentRoster;

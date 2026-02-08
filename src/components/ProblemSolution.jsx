import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';
import RadarScan from './svg/RadarScan';
import ThreatLevelIndicator from './ThreatLevelIndicator';
import { BentoGrid, BentoCard } from './BentoGrid';
import { TerminalLabel } from './TerminalText';
import DataDisplay from './DataDisplay';
import HUDOverlay, { ScanLine } from './HUDOverlay';
import ViabilitySymbol from './svg/ViabilitySymbol';

const { FiShield, FiZap, FiCheck, FiArrowRight, FiActivity } = FiIcons;

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for cards
  const fearY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const greedY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      {/* Section 01: THE DUAL SQUEEZE */}
      <section ref={sectionRef} id="dual-squeeze" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden noise-texture">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-slate-900/50 to-transparent"
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-900/50 to-transparent"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-red-400 font-mono text-sm uppercase tracking-widest mb-6">
              THE DUAL SQUEEZE
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]">
              The Two Forces<br />
              <span className="bg-gradient-to-r from-red-500 via-amber-500 to-red-500 bg-clip-text text-transparent">
                Killing Your Margins
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-16">
              <p>
                You're caught between <span className="text-blue-400 font-semibold">the need to be secure</span> and <span className="text-amber-400 font-semibold">the pressure to be fast</span>. Most companies pick one. <span className="text-white font-semibold">You need both.</span>
              </p>
            </div>
          </motion.div>

          {/* Bento Grid - Asymmetric Layout */}
          <BentoGrid columns={12} gap="lg" className="max-w-7xl mx-auto">
            {/* Fortress Card - Large (7 columns) */}
            <BentoCard
              span={12}
              spanMd={7}
              hover={true}
              animate={true}
              className="bg-obsidian/90 border-2 border-red-500/30 overflow-hidden group"
              style={{
                transform: 'rotateX(1deg) rotateY(-1deg)',
              }}
            >
              <HUDOverlay
                variant="fortress"
                showCorners={true}
                showScanLine={true}
                label="THREAT LEVEL: CRITICAL"
                className="h-full p-8 md:p-10"
              >
                {/* Background Radar */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <RadarScan variant="threat" className="w-full h-full" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <motion.div
                      className="w-16 h-16 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 ring-2 ring-red-500/40"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <SafeIcon icon={FiShield} className="w-8 h-8 text-red-400" />
                    </motion.div>
                    <TerminalLabel className="text-red-400 mb-4">
                      THE FORTRESS PROBLEM
                    </TerminalLabel>
                    <h3 className="font-editorial text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                      You Are One Click Away<br />
                      <span className="text-red-400">From Bankruptcy.</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed text-lg mb-6">
                    The average cost of downtime is now{' '}
                    <span className="font-editorial font-bold text-red-400">$9,000 per minute</span>.
                    You cannot afford to blink.
                  </p>

                  {/* Data-Driven Stats */}
                  <div className="space-y-4 mb-6">
                    <DataDisplay
                      label="AVG BREACH CONTAINMENT"
                      value={277}
                      unit="DAYS"
                      status="critical"
                      showBar={true}
                      maxValue={365}
                    />
                    <DataDisplay
                      label="CYBERSECURITY WORKFORCE GAP"
                      value={4.8}
                      unit="M"
                      status="critical"
                      showBar={true}
                      maxValue={10}
                    />
                  </div>

                  {/* Solution Box */}
                  <div className="mt-auto brutal-card bg-fortress-900/60 border border-fortress-accent/30 p-6">
                    <p className="text-arc font-editorial font-semibold text-lg mb-2">
                      The Handvantage Solution:
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      We are the <span className="text-fortress-accent font-bold">Pilot</span>. We don't just "alert" you—we{' '}
                      <span className="text-white font-semibold">investigate within 15 minutes</span> and kill threats before they spread.
                    </p>
                  </div>
                </div>
              </HUDOverlay>
            </BentoCard>

            {/* Factory Card - Medium (5 columns) */}
            <BentoCard
              span={12}
              spanMd={5}
              hover={true}
              animate={true}
              className="bg-obsidian/90 border-2 border-factory-500/30 overflow-hidden"
              style={{
                transform: 'rotateX(1deg) rotateY(1deg)',
              }}
            >
              <HUDOverlay
                variant="arc"
                showCorners={true}
                showScanLine={true}
                label="EFFICIENCY: 42%"
                className="h-full p-8 md:p-10"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <RadarScan variant="automation" className="w-full h-full" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <motion.div
                      className="w-16 h-16 bg-factory-500/20 rounded-lg flex items-center justify-center mb-6 ring-2 ring-factory-500/40"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <SafeIcon icon={FiZap} className="w-8 h-8 text-factory-500" />
                    </motion.div>
                    <TerminalLabel className="text-factory-500 mb-4">
                      THE FACTORY PROBLEM
                    </TerminalLabel>
                    <h3 className="font-editorial text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      You Are Burning Cash<br />
                      <span className="text-factory-500">on Manual Labor.</span>
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    The average enterprise wastes{' '}
                    <span className="font-editorial font-bold text-factory-500">30% of SaaS spend</span>{' '}
                    on unused licenses.
                  </p>

                  {/* Data Stat */}
                  <div className="mb-6">
                    <DataDisplay
                      label="PROFIT LEAK"
                      value={180}
                      unit="K+"
                      status="warning"
                      showBar={true}
                      maxValue={200}
                    />
                  </div>

                  {/* Solution Box */}
                  <div className="mt-auto brutal-card bg-factory-500/10 border border-factory-500/30 p-6">
                    <p className="text-factory-400 font-editorial font-semibold text-lg mb-2">
                      The Handvantage Solution:
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                      We are the <span className="text-factory-500 font-bold">Engineer</span>. We automate the grunt work so your team can{' '}
                      <span className="text-white font-semibold">build the future</span>.
                    </p>
                  </div>
                </div>
              </HUDOverlay>
            </BentoCard>

            {/* Viability Card - Full Width Accent */}
            <BentoCard
              span={12}
              hover={true}
              animate={true}
              className="bg-gradient-to-br from-viability-primary/10 via-obsidian to-obsidian border-2 border-viability-primary/30 overflow-hidden"
            >
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <ViabilitySymbol className="w-full h-full" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <TerminalLabel className="text-viability-primary mb-3">
                    THE HANDVANTAGE SOLUTION
                  </TerminalLabel>
                  <h3 className="font-editorial text-3xl md:text-4xl font-bold text-white mb-4">
                    The <span className="text-viability-primary">Dual DNA</span> Philosophy
                  </h3>
                  <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                    You cannot be secure if you are inefficient. You cannot be efficient if you are hacked.{' '}
                    <span className="text-white font-semibold">We are the only partner who solves both.</span>
                  </p>
                </div>

                {/* CTA */}
                <div className="flex-shrink-0">
                  <Link
                    to="/manifesto"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-viability-primary hover:bg-viability-primary/90 text-white font-editorial font-semibold rounded-lg transition-all"
                  >
                    Learn More
                    <SafeIcon
                      icon={FiArrowRight}
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </div>
      </section>

      {/* Section 02: THE AGNOSTIC PLEDGE */}
      <section id="agnostic-pledge" className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-viability-primary font-mono text-sm uppercase tracking-widest mb-6">
                THE AGNOSTIC PLEDGE
              </p>
              <h2 className="text-5xl md:text-7xl font-black text-primary-dark mb-8 tracking-tight">
                WE FLY ANY JET.
              </h2>
              <div className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed space-y-4">
                <p>We are loyal to the outcome, not the vendor.</p>
                <p>Whether you use CrowdStrike, SentinelOne, or Microsoft, we manage it.</p>
                <p className="font-semibold text-slate-700">We sit on YOUR side of the table.</p>
              </div>
            </div>

            {/* Feature List */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                'Vendor Agnostic',
                '15-Minute Response',
                'Zero-Touch Onboarding'
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-lg font-semibold text-slate-700"
                >
                  <div className="w-8 h-8 bg-viability-primary/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-viability-primary" />
                  </div>
                  {feature}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;
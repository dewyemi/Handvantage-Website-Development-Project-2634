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
      <section ref={sectionRef} id="dual-squeeze" className="relative py-16 md:py-24 lg:py-32 bg-slate-950 overflow-hidden noise-texture">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-slate-900/50 to-transparent"
          />
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-900/50 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-red-400 font-mono text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
              THE DUAL SQUEEZE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 tracking-tight leading-[1.1] px-4">
              The Two Forces<br />
              <span className="bg-gradient-to-r from-red-500 via-amber-500 to-red-500 bg-clip-text text-transparent">
                Killing Your Margins
              </span>
            </h2>
            <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 sm:mb-12 md:mb-16 px-4">
              <p>
                You're caught between <span className="text-blue-400 font-semibold">the need to be secure</span> and <span className="text-amber-400 font-semibold">the pressure to be fast</span>. Most companies pick one. <span className="text-white font-semibold">You need both.</span>
              </p>
            </div>
          </motion.div>

          {/* Split Screen - 50/50 Layout (Copy Deck Spec) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* LEFT SIDE: The Fear (Security) */}
            <motion.div
              className="relative flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/5 bg-gradient-to-br from-red-500/5 to-transparent min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background Radar */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <RadarScan variant="threat" className="w-full h-full" />
              </div>

              {/* Red Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent blur-[100px]" />

              <div className="relative z-10 max-w-lg">
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-red-500/20 sharp-edges flex items-center justify-center mb-4 sm:mb-6 ring-2 ring-red-500/40"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <SafeIcon icon={FiShield} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400" />
                </motion.div>

                {/* Label */}
                <TerminalLabel className="text-red-400 mb-3 sm:mb-4 text-xs sm:text-sm">
                  THE FEAR (SECURITY)
                </TerminalLabel>

                {/* Headline */}
                <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-none tracking-tighter">
                  You May Be One Click Away<br />
                  <span className="text-red-500">From a Major Disruption.</span>
                </h3>

                {/* Body */}
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  Traditional defenses may not be enough. Modern threats often involve{' '}
                  <span className="text-white font-semibold">human adversaries</span> who can operate around the clock.
                </p>

                {/* Stats */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <DataDisplay
                    label="DOWNTIME COST"
                    value={9000}
                    unit="/MIN"
                    status="critical"
                    showBar={true}
                    maxValue={10000}
                  />
                  <DataDisplay
                    label="AVG BREACH TIME"
                    value={277}
                    unit="DAYS"
                    status="critical"
                    showBar={true}
                    maxValue={365}
                  />
                </div>

                {/* Promise Box */}
                <div className="brutal-card bg-red-500/5 border border-red-500/20 p-4 sm:p-6">
                  <p className="text-signal font-editorial font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                    The Handvantage Promise:
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    We are the <span className="text-signal font-bold">Pilot</span>. We fly the plane 24/7. We don't just "alert" you to a crash; we{' '}
                    <span className="text-white font-semibold">land the bird safely</span>.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Greed (Efficiency) */}
            <motion.div
              className="relative flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-bl from-factory-500/5 to-transparent min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <RadarScan variant="automation" className="w-full h-full" />
              </div>

              {/* Cyan Glow */}
              <div className="absolute inset-0 bg-gradient-to-bl from-factory-500/10 via-transparent to-transparent blur-[100px]" />

              <div className="relative z-10 max-w-lg">
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-factory-500/20 sharp-edges flex items-center justify-center mb-4 sm:mb-6 ring-2 ring-factory-500/40"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <SafeIcon icon={FiZap} className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-factory-500" />
                </motion.div>

                {/* Label */}
                <TerminalLabel className="text-factory-500 mb-3 sm:mb-4 text-xs sm:text-sm">
                  THE GREED (EFFICIENCY)
                </TerminalLabel>

                {/* Headline */}
                <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-none tracking-tighter">
                  You May Be Burning Cash<br />
                  <span className="text-factory-500">on Manual Labor.</span>
                </h3>

                {/* Body */}
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                  Your smartest people may be stuck resetting passwords and copy-pasting data. That kind of work can often be{' '}
                  <span className="text-white font-semibold">automated</span>.
                </p>

                {/* Stats */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <DataDisplay
                    label="SAAS WASTE"
                    value={30}
                    unit="%"
                    status="warning"
                    showBar={true}
                    maxValue={100}
                  />
                  <DataDisplay
                    label="PROFIT LEAK"
                    value={180}
                    unit="K+"
                    status="warning"
                    showBar={true}
                    maxValue={200}
                  />
                </div>

                {/* Promise Box */}
                <div className="brutal-card bg-factory-500/5 border border-factory-500/20 p-4 sm:p-6">
                  <p className="text-signal font-editorial font-semibold text-lg sm:text-xl mb-2 sm:mb-3">
                    The Handvantage Promise:
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    We are the <span className="text-factory-500 font-bold">Engineer</span>. We rebuild the engine while it runs. We automate the grunt work so your team can{' '}
                    <span className="text-white font-semibold">build the future</span>.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Dual DNA Bar - Full Width */}
          <motion.div
            className="relative bg-gradient-to-r from-viability-primary/10 via-viability-primary/5 to-viability-primary/10 border-y border-viability-primary/20 py-8 sm:py-10 md:py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <ViabilitySymbol className="w-full h-full" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <TerminalLabel className="text-viability-primary mb-2 sm:mb-3 text-xs sm:text-sm">
                  THE HANDVANTAGE SOLUTION
                </TerminalLabel>
                <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-none tracking-tighter">
                  The <span className="text-viability-primary">Dual DNA</span> Philosophy
                </h3>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl px-4 md:px-0">
                  You cannot be secure if you are inefficient. You cannot be efficient if you are hacked.{' '}
                  <span className="text-white font-semibold">We are the only partner who solves both.</span>
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 w-full md:w-auto">
                <Link
                  to="/manifesto"
                  className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 sharp-edges border-2 border-viability-primary hover:bg-viability-primary text-viability-primary hover:text-white font-editorial font-semibold transition-all w-full md:w-auto"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 02: THE AGNOSTIC PLEDGE */}
      <section id="agnostic-pledge" className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-viability-primary font-mono text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
                THE AGNOSTIC PLEDGE
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-dark mb-6 sm:mb-8 tracking-tight px-4">
                WE FLY ANY JET.
              </h2>
              <div className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed space-y-3 sm:space-y-4 px-4">
                <p>We are loyal to the outcome, not the vendor.</p>
                <p>Whether you use CrowdStrike, SentinelOne, or Microsoft, we manage it.</p>
                <p className="font-semibold text-slate-700">We sit on YOUR side of the table.</p>
              </div>
            </div>

            {/* Feature List */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4"
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
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-semibold text-slate-700"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-viability-primary/10 sharp-edges flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 sm:w-5 sm:h-5 text-viability-primary" />
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
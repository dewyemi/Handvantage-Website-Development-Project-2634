import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';
import RadarScan from './svg/RadarScan';
import ThreatLevelIndicator from './ThreatLevelIndicator';

const { FiShield, FiZap, FiCheck, FiArrowRight } = FiIcons;

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

          {/* Dual Squeeze Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000">
            {/* Card 1: THE FEAR (SECURITY) */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ y: fearY }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-red-600 to-slate-900 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative h-full bg-slate-900 border border-red-500/30 rounded-2xl p-10 flex flex-col overflow-hidden">
                {/* Radar Scan Background */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                  <RadarScan variant="threat" />
                </div>

                <div className="mb-8 relative z-10">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 ring-2 ring-red-500/40 security-pulse">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4">
                    You Are One Click Away<br />
                    <span className="text-red-400">From Bankruptcy.</span>
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Your firewall isn't enough. Your antivirus is asleep. The threat isn't a "virus"—it's a <span className="text-white font-semibold">human adversary</span> who works while you sleep.
                </p>

                <div className="bg-slate-800/50 border border-red-500/20 rounded-xl p-6 mb-6">
                  <p className="text-blue-300 font-semibold text-xl mb-2">The Handvantage Promise:</p>
                  <p className="text-slate-300 leading-relaxed">
                    We are the <span className="text-blue-400 font-bold">Pilot</span>. We fly the plane 24/7. We don't just "alert" you to a crash; we <span className="text-white font-semibold">land the bird safely</span>.
                  </p>
                </div>

                {/* Premium Threat Level Indicator */}
                <div className="mt-auto pt-6 border-t border-red-500/20 relative z-10">
                  <ThreatLevelIndicator level="critical" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: THE GREED (EFFICIENCY) */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ y: greedY }}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-500 to-slate-900 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative h-full bg-slate-900 border border-amber-500/30 rounded-2xl p-10 flex flex-col overflow-hidden">
                {/* Automation Scan Background */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
                  <RadarScan variant="automation" />
                </div>

                <div className="mb-8 relative z-10">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 ring-2 ring-amber-500/40">
                    <SafeIcon icon={FiZap} className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4">
                    You Are Burning Cash<br />
                    <span className="text-amber-400">on Manual Labor.</span>
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  Your smartest people are stuck resetting passwords and copy-pasting data. That's not "work"—that's <span className="text-white font-semibold">waste</span>.
                </p>

                <div className="bg-slate-800/50 border border-amber-500/20 rounded-xl p-6 mb-6">
                  <p className="text-cyan-300 font-semibold text-xl mb-2">The Handvantage Promise:</p>
                  <p className="text-slate-300 leading-relaxed">
                    We are the <span className="text-cyan-400 font-bold">Engineer</span>. We rebuild the engine while it runs. We automate the grunt work so your team can <span className="text-white font-semibold">build the future</span>.
                  </p>
                </div>

                {/* Efficiency Meter */}
                <div className="mt-auto pt-6 border-t border-amber-500/20 relative z-10">
                  <div className="bg-slate-800/60 border border-amber-500/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                        Current Efficiency
                      </span>
                      <span className="text-amber-400 font-mono text-xl font-black">42%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: '42%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 font-mono mt-2">💰 PROFIT LEAK: $180K+/year</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';

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
      {/* Section 01: THE SERVICE GAP */}
      <section ref={sectionRef} id="service-gap" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
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
            <p className="text-viability-primary font-mono text-sm uppercase tracking-widest mb-6">
              THE SERVICE GAP
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              THE "EMPTY SEAT" PROBLEM
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              <p>
                Buying a Ferrari (Top-Tier MDR) doesn't make you a race car driver.
                If you hand the keys to an amateur (Internal Hire) or a mailbox (Bad MSP), you will crash.
              </p>
              <p>
                A tool without a master is just a noise generator.
                You are drowning in alerts because you lack the human layer to filter them.
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

              <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-10 flex flex-col">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <SafeIcon icon={FiShield} className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">THE FEAR <span className="text-red-400">(SECURITY)</span></h3>
                </div>

                <p className="text-2xl font-bold text-slate-200 mb-4">
                  "Who is watching the screen at 3 AM on Christmas?"
                </p>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  If the answer is "No one" or "My IT Director," you are already breached.
                  We provide the 24/7 Human Shield.
                </p>

                {/* Status Indicator */}
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-red-400 font-mono text-sm uppercase tracking-wider">
                      THREAT LEVEL: CRITICAL
                    </span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
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

              <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-10 flex flex-col">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <SafeIcon icon={FiZap} className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">THE GREED <span className="text-amber-400">(EFFICIENCY)</span></h3>
                </div>

                <p className="text-2xl font-bold text-slate-200 mb-4">
                  "Why pay $180k for an internal hire who sleeps?"
                </p>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  We automate the grunt work (patching, onboarding) and replace the expensive headcount.
                  We pay for ourselves.
                </p>

                {/* Status Indicator */}
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-400 font-mono text-sm uppercase tracking-wider">
                      OPERATIONAL STATUS: DEGRADED
                    </span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <div className="w-2 h-2 bg-amber-500 rounded-full" />
                      <div className="w-2 h-2 bg-slate-600 rounded-full" />
                    </div>
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
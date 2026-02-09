import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { TerminalLabel } from './TerminalText';

const { FiX, FiCheck } = FiIcons;

/**
 * ComparisonTable - The $180k Problem
 * Cinematic comparison of Internal Hire vs Handvantage Partner
 * Master Spec v6: Data-driven, high-contrast, terminal aesthetic
 */

const comparisonData = [
  {
    category: 'Cost',
    internal: '$180,000/year (Salary + Benefits)',
    handvantage: 'Fraction of the price.',
    icon: FiIcons.FiDollarSign,
  },
  {
    category: 'Availability',
    internal: '9-to-5, Mon-Fri (40 hours)',
    handvantage: '24/7/365 (8,760 hours)',
    icon: FiIcons.FiClock,
  },
  {
    category: 'Skillset',
    internal: 'Generalist (Jack of all trades)',
    handvantage: 'Specialist Platoon (SOC, Automation, Compliance)',
    icon: FiIcons.FiUsers,
  },
  {
    category: 'Outcome',
    internal: 'Burns out in 6 months.',
    handvantage: 'Gets smarter every single day.',
    icon: FiIcons.FiTrendingUp,
  },
];

const ComparisonTable = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-void overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TerminalLabel className="text-red-400 mb-3 sm:mb-4 text-xs sm:text-sm">
            THE $180K PROBLEM
          </TerminalLabel>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-none tracking-tighter px-4">
            The Math Doesn't Lie.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4">
            Why hire one "Security Guy" when you can have an entire army?
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-0">
            {/* Internal Hire Header */}
            <motion.div
              className="brutal-card bg-red-500/5 border-2 border-red-500/30 p-4 sm:p-6 text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <SafeIcon icon={FiX} className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 flex-shrink-0" />
                <h3 className="font-editorial text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  The "Internal Hire"
                </h3>
              </div>
              <p className="terminal-text text-[10px] sm:text-xs text-red-400 tracking-widest">
                TRADITIONAL APPROACH
              </p>
            </motion.div>

            {/* Handvantage Partner Header */}
            <motion.div
              className="brutal-card bg-signal/5 border-2 border-signal/30 p-4 sm:p-6 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <SafeIcon icon={FiCheck} className="w-6 h-6 sm:w-8 sm:h-8 text-signal flex-shrink-0" />
                <h3 className="font-editorial text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                  The Handvantage Partner
                </h3>
              </div>
              <p className="terminal-text text-[10px] sm:text-xs text-signal tracking-widest">
                THE MODERN SOLUTION
              </p>
            </motion.div>
          </div>

          {/* Table Rows */}
          <div className="space-y-0">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Internal Hire Cell */}
                <div className="group relative brutal-card bg-void/95 border border-red-500/10 hover:border-red-500/30 p-4 sm:p-6 transition-all duration-200">
                  {/* Category Label */}
                  <div className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-void border border-red-500/20 sharp-edges">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <SafeIcon icon={row.icon} className="w-3 h-3 text-red-400 flex-shrink-0" />
                      <span className="terminal-text text-[9px] sm:text-[10px] text-red-400 tracking-widest">
                        {row.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 sm:pt-2">
                    <p className="font-mono text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
                      {row.internal}
                    </p>
                  </div>

                  {/* Negative Indicator */}
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-red-500/40 rounded-none" />
                </div>

                {/* Handvantage Partner Cell */}
                <div className="group relative brutal-card bg-void/95 border border-signal/10 hover:border-signal/30 p-4 sm:p-6 transition-all duration-200 hover:bg-signal/5">
                  {/* Category Label */}
                  <div className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6 px-2 sm:px-3 py-1 bg-void border border-signal/20 sharp-edges">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <SafeIcon icon={row.icon} className="w-3 h-3 text-signal flex-shrink-0" />
                      <span className="terminal-text text-[9px] sm:text-[10px] text-signal tracking-widest">
                        {row.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 sm:pt-2">
                    <p className="font-mono text-xs sm:text-sm md:text-base text-white font-semibold leading-relaxed">
                      {row.handvantage}
                    </p>
                  </div>

                  {/* Positive Indicator */}
                  <div className="absolute bottom-2 right-2 w-2 h-2 bg-signal/60 rounded-none animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Bar */}
          <motion.div
            className="brutal-card bg-viability-primary/10 border-2 border-viability-primary/30 p-6 sm:p-8 mt-0 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              The Choice Is Clear.
            </p>
            <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-6 leading-relaxed px-2 sm:px-0">
              Stop paying Silicon Valley salaries for burned-out generalists.
              <br className="hidden md:block" />
              Start deploying a <span className="text-signal font-semibold">24/7 specialist army</span> for a fraction of the cost.
            </p>
            <button className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 sharp-edges bg-signal hover:bg-signal/90 text-void font-editorial font-bold text-base sm:text-lg transition-all shadow-glow-signal-sm hover:shadow-glow-signal w-full sm:w-auto">
              See Our Pricing
              <SafeIcon
                icon={FiIcons.FiArrowRight}
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile Optimization Note */}
        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <p className="terminal-text text-[10px] sm:text-xs text-slate-500 tracking-widest px-4">
            COMPARISON STACKS VERTICALLY ON MOBILE
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import FortressIcon from './svg/FortressIcon';
import FactoryIcon from './svg/FactoryIcon';

const { FiShield, FiZap, FiAlertTriangle, FiLock, FiDollarSign } = FiIcons;

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
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            THE "EMPTY SEAT" PROBLEM
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-slate-400 font-light leading-relaxed">
            <p>
              Buying a Ferrari (Top-Tier MDR) doesn't make you a race car driver. If you hand the keys to an amateur (Internal Hire) or a mailbox (Bad MSP), you will crash.
            </p>
            <p>
              A tool without a master is just a noise generator. You are drowning in alerts because you lack the human layer to filter them.
            </p>
          </div>
        </motion.div>

        {/* Dual Squeeze Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto perspective-1000">
          {/* Card 1: THE FEAR */}
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
                <h3 className="text-3xl font-bold text-white mb-2">THE FEAR</h3>
                <p className="text-red-400 font-mono text-sm uppercase tracking-wider">Security</p>
              </div>

              <h4 className="text-2xl font-bold text-slate-200 mb-4">
                "Who is watching at 3 AM?"
              </h4>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                If the answer is "No one" or "My IT Director," you are already breached. We provide the 24/7 Human Shield.
              </p>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <div className="flex items-center text-red-400 gap-2">
                  <SafeIcon icon={FiLock} className="w-5 h-5" />
                  <span className="font-semibold">24/7 Protection Active</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: THE GREED */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ y: greedY }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-green-500 to-slate-900 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-10 flex flex-col">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <SafeIcon icon={FiZap} className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">THE GREED</h3>
                <p className="text-green-400 font-mono text-sm uppercase tracking-wider">Efficiency</p>
              </div>

              <h4 className="text-2xl font-bold text-slate-200 mb-4">
                "Why pay $180k for sleep?"
              </h4>
              <p className="text-slate-400 leading-relaxed text-lg mb-8">
                Internal hires sleep. They take vacations. We automate the grunt work and replace the expensive headcount. We pay for ourselves.
              </p>

              <div className="mt-auto pt-6 border-t border-slate-800">
                <div className="flex items-center text-green-400 gap-2">
                  <SafeIcon icon={FiDollarSign} className="w-5 h-5" /> // Note: FiDollarSign needs import if not already
                  <span className="font-semibold">ROI Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiShield } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { TerminalLabel } from './TerminalText';

const DualDNA = () => {
  return (
    <section id="dual-dna" className="relative py-16 md:py-24 bg-void overflow-hidden noise-texture">
      {/* Container */}
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TerminalLabel className="text-signal mb-4">THE DUAL DNA MODEL</TerminalLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            The Two Forces <br/>
            <span className="text-slate-400 font-light">Powering the Factory</span>
          </h2>
        </motion.div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* Subtle connecting line in background (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-slate-800 -translate-y-1/2 z-0"></div>

          {/* Column 1: The Agentic Fleet */}
          <motion.div
            className="relative z-10 glass-medium rounded-sm border border-slate-800 p-8 md:p-12 hover:border-factory-500/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-factory-500/10 rounded-sm flex items-center justify-center mb-6 border border-factory-500/20">
              <SafeIcon icon={FiCpu} className="w-6 h-6 text-factory-500" />
            </div>
            
            <h3 className="font-editorial text-3xl font-bold text-white mb-4">The Agentic Fleet</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Autonomous, domain-specific agents built on the OpenClaw framework. They ingest millions of signals, map external perimeters 24/7, and filter the noise in milliseconds.
            </p>
            
            <ul className="space-y-4">
              {['Continuous Reconnaissance', 'Autonomous Triage', 'Zero Tool Tax'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-factory-500 rounded-sm"></div>
                  <span className="text-slate-300 font-mono text-sm uppercase tracking-wider">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: The Human Pilot */}
          <motion.div
            className="relative z-10 glass-medium rounded-sm border border-slate-800 p-8 md:p-12 hover:border-signal/30 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-signal/10 rounded-sm flex items-center justify-center mb-6 border border-signal/20">
              <SafeIcon icon={FiShield} className="w-6 h-6 text-signal" />
            </div>
            
            <h3 className="font-editorial text-3xl font-bold text-white mb-4">The Human Pilot</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Elite security engineers who command the fleet. When an agent validates a critical threat, our Pilots take the stick to execute complex remediations and isolate the host.
            </p>
            
            <ul className="space-y-4">
              {['15-Minute SLA', 'Active Containment', 'Strategic Guidance'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-signal rounded-sm"></div>
                  <span className="text-slate-300 font-mono text-sm uppercase tracking-wider">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DualDNA;

import React from 'react';
import { motion } from 'framer-motion';
import { FiLock, FiServer, FiShieldOff, FiArrowRight } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { TerminalLabel } from './TerminalText';

const DataSovereignty = () => {
  return (
    <section id="data-sovereignty" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden border-y border-slate-800">
      {/* Background Gradient & Noise */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950 noise-texture" />
      
      {/* Glowing Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-arc/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-slate-800 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
          >
            <SafeIcon icon={FiLock} className="w-8 h-8 text-arc" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Agentic Power. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arc to-slate-400">Zero Data Leakage.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            The biggest risk of AI agents is sending your sensitive corporate data to third-party LLMs. We solved this. Our Agentic Factory runs on dedicated, encrypted infrastructure using locally-hosted, domain-specific models. Your data never leaves the fortress.
          </p>
        </div>

        {/* Abstract Flow Diagram */}
        <motion.div 
          className="max-w-5xl mx-auto border border-slate-800 rounded-sm bg-slate-900/50 backdrop-blur-md p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* subtle scanline animation */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-arc/20 w-full animate-[scan-down_4s_linear_infinite]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center text-center">
            
            {/* Step 1: Your Stack */}
            <div className="md:col-span-1 flex flex-col items-center p-6 border border-slate-700 bg-slate-800/50 rounded-sm">
              <SafeIcon icon={FiServer} className="w-8 h-8 text-white mb-4" />
              <h4 className="font-editorial text-lg font-bold text-white mb-2">Your Stack</h4>
              <p className="text-xs text-slate-400 font-mono tracking-wide">SECURE PREMISES</p>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex justify-center hidden md:flex">
              <SafeIcon icon={FiArrowRight} className="w-6 h-6 text-arc opacity-50" />
            </div>

            {/* Step 2: Handvantage Infrastructure */}
            <div className="md:col-span-1 flex flex-col items-center p-6 border border-arc/40 bg-arc/5 shadow-[0_0_30px_rgba(37,99,235,0.1)] rounded-sm relative">
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-signal shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />
              <SafeIcon icon={FiLock} className="w-8 h-8 text-arc mb-4" />
              <h4 className="font-editorial text-lg font-bold text-white mb-2">Encrypted OpenClaw</h4>
              <p className="text-xs text-slate-400 font-mono tracking-wide">DEDICATED INFRA</p>
            </div>

            {/* Arrow */}
            <div className="md:col-span-1 flex justify-center hidden md:flex">
              <SafeIcon icon={FiShieldOff} className="w-6 h-6 text-red-500 opacity-50 block" />
            </div>

            {/* Step 3: Zero Third Party */}
            <div className="md:col-span-1 flex flex-col items-center p-6 border border-red-500/30 bg-red-500/5 rounded-sm">
              <SafeIcon icon={FiShieldOff} className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="font-editorial text-lg font-bold text-white mb-2">Public LLMs</h4>
              <p className="text-xs text-red-400 font-mono tracking-wide">0 API CALLS</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSovereignty;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const { FiArrowRight } = FiIcons;

const Hero = () => {
  return (
    <>
      <SEOHead {...seoConfig.home} />
      <section className="relative flex items-center overflow-hidden bg-[#020617] noise-texture pt-32 pb-16 lg:pt-40 lg:pb-24">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />
          {/* Deep Slate subtle glows */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-arc/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-arc/5 blur-[120px] rounded-full pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
            
            {/* LEFT SIDE: Copy Area */}
            <motion.div 
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <div className="terminal-text text-slate-400 text-xs sm:text-sm tracking-[0.2em] mb-6 uppercase">
                THE AUTOMATED SECURITY WORKFORCE
              </div>
              
              <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6">
                Stop Buying Tools. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-arc to-slate-300">Start Deploying Agents.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl font-light">
                We don't just watch your screens. We deploy enterprise-secure, OpenClaw-powered security agents to map your attack surface and triage threats in milliseconds. We are the Pilot. They are the Fleet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/roi-calculator"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-arc text-void font-editorial font-bold text-sm tracking-widest hover:bg-arc/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] rounded-sm"
                >
                  CALCULATE TOKEN BUDGET
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/manifesto"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 bg-slate-900/50 text-slate-300 font-editorial font-bold text-sm tracking-widest hover:border-slate-500 hover:text-white transition-colors rounded-sm"
                >
                  SEE THE ARCHITECTURE
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust Bar */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono tracking-widest text-slate-500 uppercase">
                <span>VENDOR AGNOSTIC</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>15-MIN RESPONSE SLA</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span>ZERO DATA LEAKAGE</span>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Abstract Technical Visualization */}
            <motion.div 
              className="relative h-[400px] lg:h-[500px] flex items-center justify-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              {/* Glowing Nodes Visualization */}
              <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                {/* Central Hub */}
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-arc/40 flex items-center justify-center bg-arc/5 backdrop-blur-sm z-20 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
                  animate={{ boxShadow: ['0 0 30px rgba(37,99,235,0.1)', '0 0 60px rgba(37,99,235,0.3)', '0 0 30px rgba(37,99,235,0.1)'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="w-8 h-8 rounded-full bg-arc/80 animate-pulse" />
                </motion.div>

                {/* Orbital Nodes */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full border border-arc/20 z-10"
                    style={{ 
                      width: `${(i + 1) * 80 + 100}px`, 
                      height: `${(i + 1) * 80 + 100}px`,
                      x: '-50%',
                      y: '-50%'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear', direction: i % 2 === 0 ? 'normal' : 'reverse' }}
                  >
                    {/* Data Node on ring */}
                    <div 
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-signal shadow-[0_0_15px_rgba(16,185,129,0.8)]"
                    />
                  </motion.div>
                ))}

                {/* Abstract Data Streams / Lines */}
                <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" viewBox="0 0 500 500">
                  <path d="M250,250 L50,100" stroke="rgba(37,99,235,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M250,250 L450,150" stroke="rgba(37,99,235,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M250,250 L100,450" stroke="rgba(37,99,235,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M250,250 L400,400" stroke="rgba(37,99,235,0.4)" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {/* Floating Bits */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={`bit-${i}`}
                    className="absolute w-1 h-1 bg-white/40"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
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
                We don't just watch your screens. We deploy enterprise-secure, autonomous security agents to map your attack surface and triage threats in milliseconds. We are the Pilot. They are the Fleet.
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

            {/* RIGHT SIDE: Abstract Technical Visualization / Command Center */}
            <motion.div 
              className="relative h-[400px] lg:h-[500px] flex items-center justify-center w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            >
              {/* Premium Image Container */}
              <div className="relative w-full max-w-[500px] aspect-square rounded-full lg:rounded-2xl overflow-hidden border border-slate-800/60 shadow-[0_0_80px_rgba(37,99,235,0.15)] group">
                
                {/* The Image */}
                <motion.img 
                  src="/images/autonomous_agentic_network_square.png" 
                  alt="Autonomous Security Agentic Network"
                  className="w-full h-full object-cover origin-center opacity-90 mix-blend-screen"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Cyber Scanner Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-arc/20 to-transparent h-[20%] w-full opacity-50 pointer-events-none mix-blend-screen"
                  animate={{ y: ['-100%', '500%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />

                {/* Subdued Glitch/Noise Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none mix-blend-overlay"></div>

                {/* Frame Glowing Borders */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-arc/30 transition-colors duration-700 rounded-full lg:rounded-2xl pointer-events-none"></div>
                
                {/* Corner Brackets for tech feel */}
                <div className="hidden lg:block absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-arc/50 pointer-events-none"></div>
                <div className="hidden lg:block absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-arc/50 pointer-events-none"></div>
                <div className="hidden lg:block absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-arc/50 pointer-events-none"></div>
                <div className="hidden lg:block absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-arc/50 pointer-events-none"></div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
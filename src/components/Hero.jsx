import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';
import HeroPattern from './svg/HeroPattern';

const { FiStar, FiShield, FiCheckCircle, FiArrowRight } = FiIcons;

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 150]);

  // Mouse spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      600px circle at ${mouseX}px ${mouseY}px,
      rgba(139, 92, 246, 0.15),
      transparent 80%
    )
  `;

  return (
    <>
      <SEOHead {...seoConfig.home} />
      <section
        className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-[#020617]"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 opacity-100"
          style={{ background: spotlightBackground }}
        />

        {/* Ambient Background Lights */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black" />

          {/* Animated SVG Pattern Layer */}
          <div className="absolute inset-0 opacity-20">
            <HeroPattern className="w-full h-full text-slate-800" />
          </div>

          <motion.div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-viability-primary/10 rounded-full blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [-20, 20, -20],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-factory-500/10 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [20, -20, 20],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        {/* Floating dust particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute z-10 w-1 h-1 bg-white/20 rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Content */}
        <motion.div style={{ opacity, y }} className="container mx-auto px-6 py-20 relative z-20">
          <div className="max-w-5xl mx-auto text-center perspective-1000">
            {/* Badge */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative group cursor-pointer overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#0F172A_50%,#E2E8F0_100%)]" />
                <div className="relative inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-3xl text-sm text-slate-300 px-5 py-2 rounded-full border border-white/5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-semibold tracking-wide uppercase text-xs">THE DUAL DNA — PILOT + ENGINEER</span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-600/80 pb-2">
                  Stop Paying Ransomware Gangs.
                </span>
              </motion.div>
              <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block relative">
                  <span className="relative inline-block text-white">
                    <span className="absolute -inset-1 bg-gradient-to-r from-viability-primary via-factory-400 to-viability-glow blur-2xl opacity-30" />
                    <span className="relative bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
                      Start Automating Your Profit.
                    </span>
                  </span>
                </span>
              </motion.div>
            </h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
                Most MSPs just watch your screens. We secure your <span className="text-blue-400 font-semibold">fortress</span> <span className="text-slate-500 italic">and</span> rebuild your <span className="text-cyan-400 font-semibold">factory</span>. <br className="hidden md:block" />
                Get the 24/7 Security Operations Center (SOC) that <span className="text-emerald-400 font-medium">pays for itself</span> by automating your busiest workflows.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                to="/roi-calculator"
                className="group relative inline-flex h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-900 w-full sm:w-auto"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#10b981_0%,#06b6d4_50%,#10b981_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-10 py-1 text-lg font-bold text-white backdrop-blur-3xl transition-all group-hover:from-emerald-500 group-hover:to-emerald-400 shadow-xl shadow-emerald-500/30">
                  Secure My Business & Automate My Work
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link to="/manifesto">
                <motion.div
                  className="px-8 py-4 rounded-full text-slate-300 font-medium hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center border border-white/10 hover:border-white/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="border-b border-transparent group-hover:border-white/50 transition-colors">See The "Dual DNA" Model</span>
                </motion.div>
              </Link>
            </motion.div>
            <motion.p
              className="text-sm text-slate-400 mt-6 font-mono italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              Vendor Agnostic. 15-Minute Response Guarantee. Zero "Tool Tax."
            </motion.p>

            {/* Trust Signals - Vendor Agnostic Partners */}
            <motion.div
              className="mt-20 pt-10 border-t border-white/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-sm text-slate-400 font-semibold mb-2">Trusted to Protect & Automate Millions in Revenue</p>
              <p className="text-xs text-slate-500 italic mb-8">"We work with the best, but answer only to you."</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
                {['CrowdStrike', 'Microsoft', 'SentinelOne', 'Vanta', 'Drata'].map((tool, i) => (
                  <div key={i} className="text-slate-300 font-bold text-base md:text-lg opacity-70 hover:opacity-100 transition-opacity">
                    {tool}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
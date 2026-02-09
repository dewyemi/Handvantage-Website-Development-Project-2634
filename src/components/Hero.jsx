import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';
import HeroPattern from './svg/HeroPattern';
import LiveStatusBoard from './LiveStatusBoard';
import TerminalText, { TerminalLabel, TerminalBadge } from './TerminalText';
import DataDisplay, { DataGrid, StatCard } from './DataDisplay';
import HUDOverlay, { CornerBrackets, ScanLine } from './HUDOverlay';
import RadarScan from './svg/RadarScan';

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
        className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-[#020617] noise-texture tactical-grid"
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

        {/* Content - Split Screen Cinematic Layout */}
        <motion.div style={{ opacity, y }} className="relative z-20 h-screen flex items-center">
          {/* Split Screen Container */}
          <div className="w-full grid lg:grid-cols-2 gap-0 min-h-[600px]">

            {/* LEFT SIDE: The Pilot (Security) - Green Glow */}
            <motion.div
              className="relative flex items-center justify-center p-8 lg:p-16 border-r border-white/5"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Green Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-signal/20 via-transparent to-transparent blur-[100px]" />

              <div className="relative z-10 max-w-md">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="terminal-text text-signal text-sm mb-4 tracking-widest">THE PILOT</div>
                  <h2 className="font-editorial text-4xl md:text-5xl font-bold text-white mb-6 leading-none tracking-tighter">
                    <TerminalText text="Secure The Fortress." speed={50} cursor={true} color="white" />
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    We don't just watch the radar. We fly the plane 24/7. Active remediation, not just alerts.
                  </p>

                  {/* Security Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-signal rounded-none"></div>
                      <span className="terminal-text text-slate-400">24/7 EYES ON GLASS</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-signal rounded-none"></div>
                      <span className="terminal-text text-slate-400">15-MIN RESPONSE SLA</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-signal rounded-none"></div>
                      <span className="terminal-text text-slate-400">VENDOR AGNOSTIC</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Fleet (Agents) - Blue Glow */}
            <motion.div
              className="relative flex items-center justify-center p-8 lg:p-16"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Blue Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-bl from-arc/20 via-transparent to-transparent blur-[100px]" />

              <div className="relative z-10 max-w-md">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="terminal-text text-arc text-sm mb-4 tracking-widest">THE FLEET</div>
                  <h2 className="font-editorial text-4xl md:text-5xl font-bold text-white mb-6 leading-none tracking-tighter">
                    <TerminalText text="Deploy The Fleet." speed={50} cursor={true} color="white" delay={500} />
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Autonomous AI agents that work 24/7. Hire 1,000 digital employees for the price of one.
                  </p>

                  {/* Agent Stats */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-arc rounded-none"></div>
                      <span className="terminal-text text-slate-400">THE HUNTER • SDR AGENT</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-arc rounded-none"></div>
                      <span className="terminal-text text-slate-400">THE SENTRY • COMPLIANCE</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-arc rounded-none"></div>
                      <span className="terminal-text text-slate-400">THE CONCIERGE • SUPPORT</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* CENTER OVERLAY: The Dual DNA */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-viability-primary/30 blur-[60px] rounded-none" />

              {/* Content */}
              <div className="relative backdrop-blur-xl bg-void/90 border border-white/10 p-8 text-center min-w-[300px] sharp-edges">
                <div className="terminal-text text-viability-primary text-xs mb-3 tracking-widest">THE DUAL DNA</div>
                <div className="font-editorial text-2xl font-bold text-white leading-tight">
                  PILOT + FLEET
                </div>
                <div className="mt-4 w-12 h-[1px] bg-viability-primary mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Headline - Below Split Screen */}
        <motion.div
          className="container mx-auto px-6 py-16 relative z-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Terminal Badge */}
            <TerminalBadge status="operational" pulse={true} className="mb-8 inline-block">
              THE BILLION-DOLLAR COMMAND CENTER
            </TerminalBadge>

            {/* Main Headline */}
            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none tracking-tighter">
              <span className="block mb-4">
                <span className="text-red-500">Stop Paying</span> Ransomware Gangs.
              </span>
              <span className="block">
                <span className="text-signal">Start Automating</span> Your Profit.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
              Most MSPs just watch your screens. We secure your <span className="text-arc font-semibold">fortress</span> <span className="italic">and</span> rebuild your <span className="text-signal font-semibold">factory</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/roi-calculator"
                className="group relative inline-flex overflow-hidden sharp-edges p-[2px] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-void"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00FF94_0%,#3B82F6_50%,#00FF94_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center sharp-edges bg-signal hover:bg-signal/90 px-8 py-4 text-base font-bold text-void backdrop-blur-3xl transition-all shadow-glow-signal">
                  Secure My Business & Automate My Work
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to="/manifesto"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 sharp-edges text-slate-300 font-semibold hover:text-white border-2 border-arc/30 hover:border-arc hover:bg-arc/10 transition-all"
              >
                See The "Dual DNA" Model
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Micro-copy */}
            <div className="terminal-text text-xs text-slate-500 mt-8 tracking-widest">
              VENDOR AGNOSTIC • 15-MIN RESPONSE • ZERO TOOL TAX
            </div>
          </div>

          {/* Trust Signals */}
          <motion.div
            className="mt-20 pt-12 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="terminal-text text-slate-500 text-xs mb-8 text-center tracking-widest">
              TRUSTED TO PROTECT & AUTOMATE MILLIONS IN REVENUE
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {['CrowdStrike', 'Microsoft', 'SentinelOne', 'Vanta', 'Drata'].map((tool, i) => (
                <motion.div
                  key={i}
                  className="font-editorial text-slate-400 font-semibold text-lg opacity-60 hover:opacity-100 hover:text-signal transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
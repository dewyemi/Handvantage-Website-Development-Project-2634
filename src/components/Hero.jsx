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

        {/* Content - Asymmetric Layout */}
        <motion.div style={{ opacity, y }} className="container mx-auto px-6 lg:px-20 py-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Content (60%) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Terminal Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <TerminalBadge status="operational" pulse={true}>
                  AGENTIC AI WORKFORCE
                </TerminalBadge>
              </motion.div>

              {/* Headline with Editorial Font */}
              <motion.h1
                className="font-editorial text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="block text-white mb-3">
                  Hire an Army of
                </span>
                <span className="block">
                  <span className="text-signal">1,000</span>
                  <span className="text-white"> for the</span>
                </span>
                <span className="block text-white">
                  Price of <span className="text-arc">One.</span>
                </span>
              </motion.h1>

              {/* Subheadline with Terminal Typeout */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <div className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  <p className="mb-4">
                    Automation is dead. This is <span className="font-editorial font-bold text-signal">Agentic AI</span>.
                  </p>
                  <p className="text-lg text-slate-400">
                    We deploy autonomous digital workers that prospect, negotiate, research, and execute tasks 24/7.
                    <span className="block mt-2 text-slate-500 italic">No sleep. No burnout. No overhead.</span>
                  </p>
                </div>
              </motion.div>

              {/* CTAs with Signal Green + Arc Blue */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Link
                  to="/roi-calculator"
                  className="group relative inline-flex overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ff41_0%,#0ea5e9_50%,#00ff41_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-signal hover:bg-signal/90 px-8 py-4 text-base font-bold text-obsidian backdrop-blur-3xl transition-all shadow-xl shadow-signal/30">
                    Deploy My AI Workforce
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <Link
                  to="/services/ai-workforce"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-slate-300 font-semibold hover:text-white border-2 border-arc/30 hover:border-arc hover:bg-arc/10 transition-all"
                >
                  See The Agents
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Trust Line */}
              <motion.div
                className="terminal-text text-xs text-slate-500 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                VENDOR AGNOSTIC • 15-MIN RESPONSE • ZERO TOOL TAX
              </motion.div>
            </div>

            {/* Right: Floating Status Board (40%) */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: 40, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* HUD Container */}
              <HUDOverlay
                variant="signal"
                showCorners={true}
                showGrid={true}
                showScanLine={true}
                showStatus={true}
                status="operational"
                label="LIVE METRICS"
                className="p-8 bg-obsidian/90 backdrop-blur-xl border border-signal/20 rounded-lg"
              >
                <div className="space-y-6">
                  {/* Radar Scan Visual */}
                  <div className="relative aspect-square max-w-[300px] mx-auto mb-6">
                    <RadarScan variant="security" className="w-full h-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TerminalLabel className="text-signal">
                        SYSTEMS ACTIVE
                      </TerminalLabel>
                    </div>
                  </div>

                  {/* Real-time Metrics */}
                  <DataGrid columns={1} gap="sm">
                    <DataDisplay
                      label="THREAT RESPONSE TIME"
                      value={15}
                      unit="MIN"
                      status="operational"
                      showBar={true}
                      maxValue={60}
                    />
                    <DataDisplay
                      label="AUTOMATION EFFICIENCY"
                      value={94}
                      unit="%"
                      status="operational"
                      showBar={true}
                    />
                    <DataDisplay
                      label="ACTIVE AI AGENTS"
                      value={1247}
                      unit=""
                      status="operational"
                      showScanLine={true}
                    />
                  </DataGrid>

                  {/* Status Indicator */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="terminal-text text-xs text-slate-400">
                        UPTIME
                      </span>
                      <span className="font-mono text-signal font-bold">
                        99.97%
                      </span>
                    </div>
                  </div>
                </div>
              </HUDOverlay>
            </motion.div>
          </div>

          {/* Trust Signals - Vendor Agnostic Partners */}
          <motion.div
            className="mt-24 pt-12 border-t border-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <TerminalLabel className="text-slate-500 mb-6 text-center block">
              TRUSTED TO PROTECT & AUTOMATE MILLIONS IN REVENUE
            </TerminalLabel>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {['CrowdStrike', 'Microsoft', 'SentinelOne', 'Vanta', 'Drata'].map((tool, i) => (
                <motion.div
                  key={i}
                  className="font-editorial text-slate-400 font-semibold text-lg opacity-60 hover:opacity-100 hover:text-signal transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.1 }}
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
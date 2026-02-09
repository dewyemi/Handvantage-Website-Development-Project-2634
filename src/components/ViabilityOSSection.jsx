import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';
import ViabilitySymbol from './svg/ViabilitySymbol';

const {FiTarget, FiTrendingUp} = FiIcons;

const ViabilityOSSection = () => {
  const agents = [
    {
      icon: FiTarget,
      number: '01',
      title: 'The Viability Architect',
      role: 'The Hunter',
      description: 'We turn your security posture into a sales asset. Stop apologizing for compliance. Start selling it.',
      color: 'viability'
    },
    {
      icon: FiTrendingUp,
      number: '02',
      title: 'The Catalyst',
      role: 'The Translator',
      description: 'We translate "Patched Servers" into "Revenue Continuity." Your Board will finally understand what they are paying for.',
      color: 'factory'
    }
  ];

  return (
    <section id="viability-os" className="relative py-section bg-gradient-to-br from-slate-900 via-fortress-900 to-slate-950 overflow-hidden">
      {/* Ambient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-viability-primary/20 sharp-edges blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-factory-500/20 sharp-edges blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with Viability Symbol */}
        <motion.div
          className="text-center mb-20"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          {/* Viability Symbol */}
          <motion.div
            className="w-32 h-32 mx-auto mb-8"
            initial={{scale: 0, rotate: -180}}
            whileInView={{scale: 1, rotate: 0}}
            transition={{duration: 1, type: "spring", stiffness: 100}}
            viewport={{once: true}}
          >
            <ViabilitySymbol />
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black text-white mb-6"
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
          >
            We Don't Sell Tools.{' '}
            <span className="block mt-2 bg-gradient-to-r from-viability-glow via-factory-500 to-viability-primary bg-clip-text text-transparent">
              We Install an OS.
            </span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            Security protects your downside. Automation explodes your upside. <br className="hidden md:block"/>
            We turn your "cost center" IT into a <span className="text-emerald-400 font-semibold">"profit center"</span> engine.
          </p>
        </motion.div>

        {/* Agent Cards Grid with sophisticated 3D cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              className="relative group perspective-1000"
              initial={{opacity: 0, y: 80, rotateX: 20}}
              whileInView={{opacity: 1, y: 0, rotateX: 0}}
              transition={{duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 80}}
              viewport={{once: true}}
            >
              {/* Multi-layer glow effect with enhanced intensity */}
              <div className={`absolute -inset-6 sharp-edges blur-3xl opacity-50 group-hover:opacity-90 transition duration-700 ${
                agent.color === 'viability'
                  ? 'bg-gradient-to-br from-viability-primary via-viability-glow to-viability-primary'
                  : 'bg-gradient-to-br from-factory-500 via-factory-400 to-factory-500'
              }`} />

              <div className={`absolute -inset-3 sharp-edges blur-xl opacity-40 group-hover:opacity-70 transition duration-700 ${
                agent.color === 'viability'
                  ? 'bg-viability-primary'
                  : 'bg-factory-500'
              }`} />

              {/* Animated border gradient */}
              <div className={`absolute -inset-[2px] sharp-edges opacity-0 group-hover:opacity-100 transition duration-500 ${
                agent.color === 'viability'
                  ? 'bg-gradient-to-r from-viability-primary via-viability-glow to-viability-primary animate-gradient'
                  : 'bg-gradient-to-r from-factory-500 via-factory-400 to-factory-500 animate-gradient'
              }`} />

              {/* Main card with enhanced contrast */}
              <motion.div
                className={`relative backdrop-blur-xl border-2 sharp-edges p-12 shadow-2xl overflow-hidden ${
                  agent.color === 'viability'
                    ? 'bg-gradient-to-br from-viability-primary/20 via-viability-primary/10 to-slate-900/80 border-viability-glow/40'
                    : 'bg-gradient-to-br from-factory-500/20 via-factory-500/10 to-slate-900/80 border-factory-400/40'
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  transition: {duration: 0.3, type: "spring", stiffness: 200}
                }}
              >
                {/* Animated gradient overlay with stronger effect */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition duration-500 ${
                    agent.color === 'viability'
                      ? 'bg-gradient-to-br from-viability-primary/50 via-viability-glow/30 to-transparent'
                      : 'bg-gradient-to-br from-factory-500/50 via-factory-400/30 to-transparent'
                  }`}
                />

                {/* Radial glow on hover */}
                <motion.div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full sharp-edges opacity-0 group-hover:opacity-20 transition duration-500 blur-2xl ${
                    agent.color === 'viability' ? 'bg-viability-glow' : 'bg-factory-400'
                  }`}
                />

                {/* Enhanced corner decorations */}
                <div className={`absolute top-0 right-0 w-48 h-48 sharp-edges blur-3xl opacity-40 group-hover:opacity-60 transition duration-500 ${
                  agent.color === 'viability' ? 'bg-viability-primary' : 'bg-factory-500'
                }`} />
                <div className={`absolute bottom-0 left-0 w-48 h-48 sharp-edges blur-3xl opacity-40 group-hover:opacity-60 transition duration-500 ${
                  agent.color === 'viability' ? 'bg-viability-glow' : 'bg-factory-400'
                }`} />

                {/* Agent Number - huge watermark */}
                <motion.div
                  className="absolute top-8 right-8 text-9xl font-black text-white/5 select-none"
                  whileHover={{scale: 1.1, rotate: 5}}
                  transition={{type: "spring", stiffness: 300}}
                >
                  {agent.number}
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with enhanced depth */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{scale: 1.15, rotate: 10}}
                    transition={{type: "spring", stiffness: 300}}
                  >
                    <div className={`w-20 h-20 sharp-edges flex items-center justify-center shadow-lg ${
                      agent.color === 'viability'
                        ? 'bg-gradient-to-br from-viability-primary/30 to-viability-glow/30 border-2 border-viability-primary/50'
                        : 'bg-gradient-to-br from-factory-500/30 to-factory-400/30 border-2 border-factory-500/50'
                    }`}>
                      <SafeIcon icon={agent.icon} className={`w-10 h-10 ${
                        agent.color === 'viability' ? 'text-viability-glow' : 'text-factory-300'
                      }`} />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 sharp-edges blur-xl opacity-50 ${
                      agent.color === 'viability' ? 'bg-viability-primary' : 'bg-factory-500'
                    }`} />
                  </motion.div>

                  {/* Title with enhanced gradient and glow */}
                  <h3 className={`text-3xl md:text-4xl font-black mb-4 ${
                    agent.color === 'viability'
                      ? 'text-white group-hover:text-glow-viability'
                      : 'text-white group-hover:text-glow-factory'
                  }`}>
                    {agent.title}
                  </h3>

                  {/* Role Badge with glow */}
                  <motion.div
                    className="inline-flex items-center gap-2 mb-6"
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.3 + index * 0.2}}
                    viewport={{once: true}}
                  >
                    <span className={`px-5 py-2 sharp-edges text-sm font-bold tracking-wide shadow-lg ${
                      agent.color === 'viability'
                        ? 'bg-viability-primary/30 text-viability-glow border-2 border-viability-primary/50'
                        : 'bg-factory-500/30 text-factory-300 border-2 border-factory-500/50'
                    }`}>
                      {agent.role}
                    </span>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-slate-200 leading-relaxed text-lg font-light"
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 0.4 + index * 0.2}}
                    viewport={{once: true}}
                  >
                    {agent.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className={`mt-6 h-1 sharp-edges ${
                      agent.color === 'viability'
                        ? 'bg-gradient-to-r from-viability-primary to-viability-glow'
                        : 'bg-gradient-to-r from-factory-500 to-factory-400'
                    }`}
                    initial={{width: 0}}
                    whileInView={{width: "100%"}}
                    transition={{delay: 0.6 + index * 0.2, duration: 0.8}}
                    viewport={{once: true}}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
        >
          <Link to="/manifesto">
            <motion.div
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg text-viability-glow bg-transparent border-2 border-viability-primary/50 backdrop-blur-sm sharp-edges hover:bg-viability-primary/10 hover:border-viability-primary transition-all duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              Learn How Viability Engineering Works
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ViabilityOSSection;

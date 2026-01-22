import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import {seoConfig} from '../utils/seoConfig';
import HeroPattern from './svg/HeroPattern';

const {FiStar, FiShield, FiCheckCircle} = FiIcons;

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
      <SEOHead {...seoConfig.home} />
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-black">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-fortress-900 via-viability-primary/40 to-black" />

          {/* Animated SVG Pattern Layer */}
          <div className="absolute inset-0 opacity-40">
            <HeroPattern className="w-full h-full" />
          </div>

          <motion.div
            className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-viability-primary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-factory-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Premium grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }} />
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black" />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-viability-glow/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Content */}
        <motion.div style={{ opacity }} className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge with glow */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-viability-primary/50 blur-xl" />
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-viability-primary/20 to-factory-500/20 backdrop-blur-md border border-viability-glow/30 text-white px-8 py-4 rounded-full">
                  <motion.span
                    className="w-2 h-2 bg-factory-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="font-bold tracking-[0.2em] text-sm">VIABILITY ENGINEERING</span>
                </div>
              </div>
            </motion.div>

            {/* Dramatic headline */}
            <motion.header
              className="text-center mb-8"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1]}}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-6">
                <motion.span
                  className="block text-slate-400/80 mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Security is a
                </motion.span>
                <motion.span
                  className="block text-slate-400/80 mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Commodity.
                </motion.span>
                <motion.span
                  className="block relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-viability-glow via-factory-500 to-viability-primary blur-2xl opacity-50" />
                    <span className="relative bg-gradient-to-r from-viability-glow via-factory-500 to-viability-primary bg-clip-text text-transparent">
                      Viability
                    </span>
                  </span>{' '}
                  <span className="text-white">is the Asset.</span>
                </motion.span>
              </h1>
            </motion.header>

            {/* Enhanced subheadline */}
            <motion.p
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-16 max-w-4xl mx-auto text-center"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 1.2}}
            >
              Most firms are <span className="text-white font-medium">squeezed</span> between the pressure to be{' '}
              <span className="text-fortress-accent font-medium">secure</span> (The Fortress) and the pressure to be{' '}
              <span className="text-factory-500 font-medium">fast</span> (The Factory).{' '}
              <span className="text-viability-glow font-semibold">We engineer the balance.</span>
            </motion.p>

            {/* Premium CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 1.4}}
            >
              <motion.a
                href="https://secvantages.com/DualSqueezeIntro"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-viability-primary via-factory-500 to-viability-glow rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
                <div className="relative px-12 py-6 bg-gradient-to-r from-viability-primary to-viability-glow rounded-xl leading-none flex items-center">
                  <span className="text-white font-bold text-lg">Run the Viability Diagnostic</span>
                </div>
              </motion.a>

              <Link to="/manifesto">
                <motion.div
                  className="px-12 py-6 bg-white/5 backdrop-blur-sm border-2 border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                >
                  <span className="text-white font-semibold text-lg">Read the Manifesto</span>
                </motion.div>
              </Link>
            </motion.div>

            {/* Premium trust signals */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-12 text-slate-400"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.8, delay: 1.6}}
            >
              {[
                { icon: FiStar, text: "20+ Years Fortune 500", color: "text-gold" },
                { icon: FiShield, text: "Zero Breaches", color: "text-factory-500" },
                { icon: FiCheckCircle, text: "$0 Ransomware Payouts", color: "text-viability-glow" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 group cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SafeIcon icon={item.icon} className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-base font-medium group-hover:text-white transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </section>
    </>
  );
};

export default Hero;
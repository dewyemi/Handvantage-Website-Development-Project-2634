import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';
import SecurityOperationsVisual from './svg/SecurityOperationsVisual';
import AutomationEngineVisual from './svg/AutomationEngineVisual';

const { FiShield, FiZap, FiArrowRight, FiEye, FiClock, FiTarget, FiPackage, FiRefreshCw, FiTrendingDown } = FiIcons;

const Services = () => {
  const pilotFeatures = [
    {
      icon: FiEye,
      title: 'HUMAN INTELLIGENCE',
      description: "We don't rely on AI alone. Expert analysts review every critical alert."
    },
    {
      icon: FiClock,
      title: '15-MINUTE RESPONSE',
      description: "We don't just email you; we isolate the host and kill the process."
    },
    {
      icon: FiTarget,
      title: 'THREAT HUNTING',
      description: 'We proactively search for threats that bypassed your EDR.'
    }
  ];

  const mechanicFeatures = [
    {
      icon: FiPackage,
      title: 'ZERO-TOUCH ONBOARDING',
      description: 'New laptops are shipped, secured, and ready to work on Day 1.'
    },
    {
      icon: FiRefreshCw,
      title: 'PATCH MANAGEMENT',
      description: 'We patch 3rd party apps (Chrome, Zoom) automatically.'
    },
    {
      icon: FiTrendingDown,
      title: 'SAAS OPTIMIZATION',
      description: 'We identify unused licenses and cut your software bill.'
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Header */}
        <motion.div
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary-dark mb-8 tracking-tight">
            THE ELITE SERVICE LAYER.
          </h1>
          <p className="text-2xl text-slate-600 font-light">
            We don't replace your tools. <span className="font-semibold text-viability-primary">We make them lethal.</span>
          </p>
        </motion.div>

        {/* Section A: The Pilot */}
        <div className="mb-24">
          <motion.div
            className="bg-slate-900 sharp-edges p-10 md:p-16 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-viability-primary/10 to-transparent" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-viability-primary sharp-edges flex items-center justify-center">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">THE PILOT</h2>
                </div>

                <h3 className="text-4xl font-black mb-10 text-viability-glow">24/7 EYES ON GLASS</h3>

                {/* Features */}
                <div className="space-y-8">
                  {pilotFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-viability-primary/10 sharp-edges flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={feature.icon} className="w-6 h-6 text-viability-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                        <p className="text-slate-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="hidden md:block">
                <SecurityOperationsVisual />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section B: The Mechanic */}
        <div>
          <motion.div
            className="bg-white border border-slate-200 sharp-edges p-10 md:p-16 relative overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1 hidden md:block">
                <AutomationEngineVisual />
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 sharp-edges flex items-center justify-center">
                    <SafeIcon icon={FiZap} className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">THE MECHANIC</h2>
                </div>

                <h3 className="text-4xl font-black text-blue-600 mb-10">AUTOMATED EFFICIENCY</h3>

                {/* Features */}
                <div className="space-y-8">
                  {mechanicFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-blue-50 sharp-edges flex items-center justify-center flex-shrink-0">
                        <SafeIcon icon={feature.icon} className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-1">{feature.title}</h4>
                        <p className="text-slate-500">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-500 mb-8 font-mono uppercase tracking-widest">
            Ready for elite operations?
          </p>
          <a
            href="https://handvantage.co/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-dark sharp-edges hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Book The Briefing
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
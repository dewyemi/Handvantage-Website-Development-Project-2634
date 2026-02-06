import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';
import SecurityOperationsVisual from './svg/SecurityOperationsVisual';
import AutomationEngineVisual from './svg/AutomationEngineVisual';

const { FiShield, FiZap, FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-24 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-black text-primary-dark mb-8 tracking-tight">
            WE FLY ANY JET.
          </h1>
          <p className="text-2xl font-bold text-slate-800 mb-4">
            You own the stack. We own the outcome.
          </p>
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            We are the "Service Layer" that sits on top of your existing tools to provide 24/7 protection and operational speed.
          </p>
        </motion.div>

        {/* Section A: The Pilot */}
        <div className="mb-24">
          <motion.div
            className="bg-slate-900 rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-viability-primary/10 to-transparent" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-viability-primary rounded-xl flex items-center justify-center">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">The Pilot <span className="text-viability-primary">(Security Operations)</span></h2>
                </div>

                <h3 className="text-4xl font-black mb-6">"The 24/7 Human Shield"</h3>

                <div className="prose prose-lg prose-invert mb-8">
                  <p className="text-xl italic text-slate-300 mb-6">"Tools don't catch hackers. People do."</p>
                  <p className="text-slate-400">
                    Your MDR (Arctic Wolf, CrowdStrike) is just a sensor. It beeps when it sees smoke. <strong className="text-white">We are the Fire Department.</strong>
                  </p>
                  <p className="text-slate-400">
                    We don't just forward the alert; we kick down the door, put out the fire, and rebuild the wall before you even wake up.
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start text-lg text-slate-200">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-viability-primary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>24/7 Eyes on Glass:</strong> Real humans, not bots.</span>
                  </li>
                  <li className="flex items-start text-lg text-slate-200">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-viability-primary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>15-Minute Response:</strong> Guaranteed.</span>
                  </li>
                  <li className="flex items-start text-lg text-slate-200">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-viability-primary mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Vendor Agnostic:</strong> We speak every language (SentinelOne, Defender, Vanta).</span>
                  </li>
                </ul>
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
            className="bg-white border border-slate-200 rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 hidden md:block">
                <AutomationEngineVisual />
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <SafeIcon icon={FiZap} className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-dark">The Mechanic <span className="text-blue-600">(IT Automation)</span></h2>
                </div>

                <h3 className="text-4xl font-black text-slate-900 mb-6">"The Efficiency Engine"</h3>

                <div className="prose prose-lg mb-8">
                  <p className="text-xl italic text-slate-500 mb-6">"Security shouldn't slow you down. It should speed you up."</p>
                  <p className="text-slate-600">
                    We don't just watch the screen; we tune the engine. We automate the "boring work" that burns out your internal team.
                  </p>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start text-lg text-slate-700">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Zero-Touch Onboarding:</strong> New hires are productive on Minute 1.</span>
                  </li>
                  <li className="flex items-start text-lg text-slate-700">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Automated Patching:</strong> We close the holes so you don't have to.</span>
                  </li>
                  <li className="flex items-start text-lg text-slate-700">
                    <SafeIcon icon={FiCheck} className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                    <span><strong>Compliance Evidence:</strong> We collect the screenshots for the auditor.</span>
                  </li>
                </ul>
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
            Ready to upgrade your flight crew?
          </p>
          <a
            href="https://handvantage.co/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary-dark rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
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
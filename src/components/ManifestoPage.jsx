import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import {seoConfig} from '../utils/seoConfig';

const {FiAlertCircle, FiTarget, FiCheckCircle} = FiIcons;

const ManifestoPage = () => {
  return (
    <>
      <SEOHead {...seoConfig.manifesto} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-fortress-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              The Dual Squeeze Manifesto
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 font-light mb-4">
              Why "Good Security" is Killing Your Business
            </p>
            <p className="text-lg text-slate-400">
              By Handvantage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Lie We Were Sold */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <SafeIcon icon={FiAlertCircle} className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-4xl font-bold text-primary-dark mt-1">
                1. The Lie We Were Sold
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                For the last decade, the cybersecurity industry has sold us a lie: <strong>"More is Better."</strong>
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                More tools. More alerts. More complexity.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                They told us that if we just bought one more firewall, one more EDR agent, one more SIEM, we would be safe.
              </p>
              <p className="text-xl font-semibold text-primary-dark">
                They were wrong.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Reality - The Dual Squeeze */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-viability-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <SafeIcon icon={FiTarget} className="w-6 h-6 text-viability-primary" />
              </div>
              <h2 className="text-4xl font-bold text-primary-dark mt-1">
                2. The Reality: The Dual Squeeze
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Today, the modern firm is being crushed by two opposing forces.
              </p>

              <div className="bg-white rounded-2xl p-8 mb-6 border-l-4 border-blue-500">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  Force 1: The Fortress <span className="text-blue-600">(The Pressure to be Safe)</span>
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Regulators, cyber insurance carriers, and anxious clients are demanding perfection. They want Zero Trust. They want 24/7 monitoring. They want a fortress.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-6 border-l-4 border-cyan-500">
                <h3 className="text-2xl font-bold text-primary-dark mb-3">
                  Force 2: The Factory <span className="text-cyan-600">(The Pressure to be Fast)</span>
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The market doesn't care about your firewall. It cares about your shipping speed. Your Board demands efficiency. Your competitors are moving faster. They want a factory.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-6 border border-red-200">
                <h3 className="text-2xl font-bold text-red-900 mb-4">The Conflict:</h3>
                <ul className="space-y-3 text-lg text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">→</span>
                    <span>When you strengthen the Fortress, you slow down the Factory.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold mt-1">→</span>
                    <span>When you speed up the Factory, you weaken the Fortress.</span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-bold text-primary-dark mt-8">
                This is the <span className="text-viability-primary">Dual Squeeze</span>. And it is killing your margins.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Solution - Viability Engineering */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-viability-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-viability-primary" />
              </div>
              <h2 className="text-4xl font-bold text-primary-dark mt-1">
                3. The Solution: Viability Engineering
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                We do not believe in "Security" as a standalone department. We believe in <strong className="text-viability-primary">Viability</strong>.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Viability is the mathematical balance between Risk and Speed.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-red-900 mb-2">Security says:</h4>
                  <p className="text-slate-700">"Block everything."</p>
                  <p className="text-sm text-slate-600 mt-2 italic">(Safe, but bankrupt)</p>
                </div>

                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                  <h4 className="font-bold text-lg text-orange-900 mb-2">Operations says:</h4>
                  <p className="text-slate-700">"Allow everything."</p>
                  <p className="text-sm text-slate-600 mt-2 italic">(Fast, but breached)</p>
                </div>

                <div className="bg-gradient-to-br from-viability-primary/10 to-factory-500/10 border-2 border-viability-primary rounded-xl p-6">
                  <h4 className="font-bold text-lg text-viability-primary mb-2">Viability says:</h4>
                  <p className="text-slate-700 font-semibold">"Secure the flow of revenue."</p>
                  <p className="text-sm text-slate-600 mt-2 italic">(Balanced)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Our Promise */}
      <section className="py-20 bg-gradient-to-br from-fortress-900 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              4. Our Promise
            </h2>

            <div className="text-left space-y-6 text-lg text-slate-300 leading-relaxed mb-12">
              <p>
                We do not sell tools. We install an Operating System designed to harmonize these two forces.
              </p>
              <p>
                We use AI to automate the Fortress so the Factory can run at full speed.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-12 mb-12">
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                We are Handvantage.
              </p>
              <p className="text-xl md:text-2xl text-viability-glow font-semibold">
                Secure the Fortress. Speed up the Factory.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="https://secvantages.com/DualSqueezeIntro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-white bg-gradient-to-r from-viability-primary to-viability-glow rounded-xl overflow-hidden shadow-2xl shadow-viability-primary/50 transition-all duration-300 hover:shadow-viability-glow/60"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              Run the Viability Diagnostic
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ManifestoPage;

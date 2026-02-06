import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const { FiAlertCircle, FiTarget, FiCheckCircle } = FiIcons;

const ManifestoPage = () => {
  return (
    <>
      <SEOHead {...seoConfig.manifesto} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              THE PILOT'S CODE
            </h1>
            <p className="text-xl text-slate-400 font-light mb-4 tracking-wide">
              Why we exist. Why the old model is broken. Why you need a Pilot.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-24">
            <div className="max-w-5xl mx-auto space-y-24">
              {/* Tenet 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 group-hover:text-viability-glow transition-colors duration-300">
                  1. THE "PILOT VS. PLANE" FALLACY
                </h2>
                <div className="pl-6 border-l-2 border-slate-800 group-hover:border-viability-primary transition-colors duration-300">
                  <p className="text-2xl text-slate-300 leading-relaxed font-light">
                    The industry wants you to believe that if you buy a better plane (Tool), you won't crash. This is a lie. A Ferrari driven by an amateur will crash faster than a Toyota driven by a pro. <strong className="text-white font-bold">We believe in the Driver.</strong>
                  </p>
                </div>
              </motion.div>

              {/* Tenet 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 group-hover:text-factory-400 transition-colors duration-300">
                  2. THE "INTERNAL HIRE" TRAP
                </h2>
                <div className="pl-6 border-l-2 border-slate-800 group-hover:border-factory-400 transition-colors duration-300">
                  <p className="text-2xl text-slate-300 leading-relaxed font-light">
                    Hiring a CISO for $180k to watch a screen is a waste of capital. Humans sleep. Humans churn. Humans have bias. <strong className="text-white font-bold">We believe in the Hive Mind.</strong> A 24/7 team that never sleeps and learns from 500+ clients instantly.
                  </p>
                </div>
              </motion.div>

              {/* Tenet 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 group-hover:text-blue-400 transition-colors duration-300">
                  3. THE "AGNOSTIC" PLEDGE
                </h2>
                <div className="pl-6 border-l-2 border-slate-800 group-hover:border-blue-400 transition-colors duration-300">
                  <p className="text-2xl text-slate-300 leading-relaxed font-light">
                    We will never sell you a tool just because we get a commission. We sit on <strong className="text-white font-bold">YOUR</strong> side of the table. If your current stack works, we keep it. If it sucks, we tell you. <strong className="text-white font-bold">We believe in Truth.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-8">
            END OF TRANSMISSION
          </p>
          <div className="inline-block border border-slate-800 px-8 py-4 rounded-lg">
            <span className="text-viability-glow font-bold tracking-wider">HANDVANTAGE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManifestoPage;

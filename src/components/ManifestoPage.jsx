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
            <p className="text-xl text-slate-400 font-light mb-4 tracking-wide uppercase">
              Operational Doctrine v1.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Tenets */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
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
                1. PILOT &gt; PLANE.
              </h2>
              <div className="pl-6 border-l-2 border-slate-800 group-hover:border-viability-primary transition-colors duration-300">
                <p className="text-2xl text-slate-300 leading-relaxed font-light">
                  A bad pilot will crash a new Gulfstream. A great pilot can fly anything. We don't obsession over the "plane" (the tool stack). We obsess over the "pilot" (the human operator).
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
                2. OUTCOMES &gt; ALERTS.
              </h2>
              <div className="pl-6 border-l-2 border-slate-800 group-hover:border-factory-400 transition-colors duration-300">
                <p className="text-2xl text-slate-300 leading-relaxed font-light">
                  An alert is not work. It is noise. "Resolved" is the only metric that matters. We do not report on "events blocked." We report on "money saved" and "sleep restored."
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
                3. AGNOSTIC &gt; RESELLER.
              </h2>
              <div className="pl-6 border-l-2 border-slate-800 group-hover:border-blue-400 transition-colors duration-300">
                <p className="text-2xl text-slate-300 leading-relaxed font-light">
                  We are not resellers. We do not take kickbacks. We sit on YOUR side of the table. If a tool works, we keep it. If it's shelfware, we kill it. We are loyal to the mission, not the vendor.
                </p>
              </div>
            </motion.div>
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

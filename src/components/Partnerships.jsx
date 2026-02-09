import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCloud, FiBot, FiBuilding, FiShield, FiMail, FiCheckCircle, FiLock, FiDollarSign, FiUsers, FiTarget, FiGlobe } = FiIcons;

const Partnerships = () => {
  const partners = [
    { name: 'Arctic Wolf', icon: FiShield, color: 'text-blue-400' },
    { name: 'Vanta', icon: FiCheckCircle, color: 'text-purple-400' },
    { name: 'CrowdStrike', icon: FiTarget, color: 'text-red-500' },
    { name: 'SentinelOne', icon: FiLock, color: 'text-indigo-400' },
    { name: 'Microsoft Defender', icon: FiShield, color: 'text-blue-500' },
    { name: 'Drata', icon: FiCheckCircle, color: 'text-green-400' }
  ];

  return (
    <section id="partnerships" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            WE FLY ANY JET.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            We are loyal to the <span className="text-white font-medium">outcome</span>, not the vendor. <br className="hidden md:block" />
            Whether you use CrowdStrike, SentinelOne, Vanta, or Microsoft, we manage it. <br className="hidden md:block" />
            <span className="text-viability-glow font-medium">We sit on YOUR side of the table.</span>
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 bg-slate-800/50 sharp-edges flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  <SafeIcon icon={partner.icon} className={`w-8 h-8 ${partner.color}`} />
                </div>
                <span className="font-semibold text-slate-500 group-hover:text-white transition-colors">{partner.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 mt-8 font-mono tracking-widest uppercase">
            YOUR STACK. OUR PILOTS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
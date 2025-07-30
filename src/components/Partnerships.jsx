import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCloud, FiBot, FiBuilding, FiShield, FiMail, FiCheckCircle, FiLock } = FiIcons;

const Partnerships = () => {
  const corePartners = [
    {
      icon: FiCloud,
      title: 'Microsoft CSP',
      description: 'Cloud Solution Provider with direct Microsoft support',
      badge: 'Enterprise Cloud',
      color: 'text-blue-400'
    },
    {
      icon: FiBot,
      title: 'RTILA AI',
      description: 'Master Agent for cutting-edge business automation',
      badge: 'Master Agent',
      color: 'text-purple-400'
    },
    {
      icon: FiBuilding,
      title: 'Pax8',
      description: 'Cloud marketplace preferred by MSPs globally',
      badge: 'MSP Preferred',
      color: 'text-green-400'
    }
  ];

  const securityPartners = [
    { icon: FiShield, title: 'Check Point', description: 'Network Security', color: 'text-red-400' },
    { icon: FiMail, title: 'IRONSCALES', description: 'Email Security', color: 'text-orange-400' },
    { icon: FiCheckCircle, title: 'Vanta', description: 'Compliance', color: 'text-green-400' },
    { icon: FiLock, title: 'Swif.ai', description: 'Device Security', color: 'text-blue-400' }
  ];

  return (
    <section id="partnerships" className="py-20 bg-primary-dark text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Trusted Technology Partners</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade solutions through proven partnerships
          </p>
        </motion.div>

        {/* Core Partners */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">
            Core Transformation Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {corePartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <SafeIcon icon={partner.icon} className={`w-16 h-16 ${partner.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-3">{partner.title}</h4>
                <p className="text-slate-300 mb-4">{partner.description}</p>
                <span className="inline-block bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {partner.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-red-400 text-center mb-8">
            Security & Compliance Partners
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {securityPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-3">
                  <SafeIcon icon={partner.icon} className={`w-12 h-12 ${partner.color}`} />
                </div>
                <h4 className="font-bold mb-2">{partner.title}</h4>
                <p className="text-sm text-slate-300">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
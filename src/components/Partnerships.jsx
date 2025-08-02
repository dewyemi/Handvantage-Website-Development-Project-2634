import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCloud, FiBot, FiBuilding, FiShield, FiMail, FiCheckCircle, FiLock, FiDollarSign, FiUsers, FiTarget, FiGlobe} = FiIcons;

const Partnerships = () => {
  const strategicAdvantages = [
    {
      icon: FiGlobe,
      title: 'Strategic Vendor Relationships',
      description: 'Direct partnerships with enterprise vendors provide better pricing, support, and capabilities than typical IT providers can offer',
      color: 'text-blue-400'
    },
    {
      icon: FiTarget,
      title: 'Proven Implementation Experience',
      description: '20+ years implementing solutions from Fortune 500 scale to growing businesses',
      color: 'text-purple-400'
    },
    {
      icon: FiBuilding,
      title: 'Business-First Approach',
      description: 'Technology decisions aligned with business growth objectives, not vendor preferences',
      color: 'text-green-400'
    },
    {
      icon: FiUsers,
      title: 'Complete Solution Integration',
      description: 'Eliminate vendor juggling through strategic technology ecosystem design',
      color: 'text-orange-400'
    }
  ];

  const businessOutcomes = [
    {
      icon: FiDollarSign,
      title: 'Cost Optimization',
      description: 'Preferred pricing and consolidated solutions reduce total technology costs',
      color: 'text-green-400'
    },
    {
      icon: FiShield,
      title: 'Enterprise-Grade Security',
      description: 'Fortune 500 security capabilities delivered at growing business scale',
      color: 'text-red-400'
    },
    {
      icon: FiBot,
      title: 'Efficiency Through Automation',
      description: 'Advanced AI automation eliminates manual processes and accelerates growth',
      color: 'text-purple-400'
    },
    {
      icon: FiCloud,
      title: 'Scalable Infrastructure',
      description: 'Technology foundation that grows with your business without limitations',
      color: 'text-blue-400'
    }
  ];

  // Small vendor logos section - minimized but still present
  const vendorLogos = [
    {
      icon: FiCloud,
      name: 'Microsoft CSP',
      color: '#2563eb'
    },
    {
      icon: FiBot,
      name: 'RTILA AI',
      color: '#7c3aed'
    },
    {
      icon: FiShield,
      name: 'Check Point',
      color: '#dc2626'
    },
    {
      icon: FiMail,
      name: 'IRONSCALES',
      color: '#f59e0b'
    },
    {
      icon: FiCheckCircle,
      name: 'Vanta',
      color: '#16a34a'
    },
    {
      icon: FiLock,
      name: 'Swif.ai',
      color: '#2563eb'
    }
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
          <h2 className="text-4xl font-bold mb-4">Why Our Approach Delivers Better Results</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic advantages that transform technology from a cost center into a competitive edge
          </p>
        </motion.div>

        {/* Strategic Advantages */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-400 text-center mb-8">
            Strategic Advantages
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strategicAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <SafeIcon icon={advantage.icon} className={`w-16 h-16 ${advantage.color}`} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-center">{advantage.title}</h4>
                <p className="text-slate-300 text-center">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-green-400 text-center mb-8">
            Business Outcomes You Can Expect
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-3">
                  <SafeIcon icon={outcome.icon} className={`w-12 h-12 ${outcome.color}`} />
                </div>
                <h4 className="font-bold mb-2 text-center">{outcome.title}</h4>
                <p className="text-sm text-slate-300 text-center">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Small vendor logos section - minimized but still present */}
        <motion.div 
          className="mt-16 pt-10 border-t border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-slate-400 mb-6">Powered by enterprise partnerships</p>
          <div className="flex flex-wrap justify-center gap-6">
            {vendorLogos.map((vendor, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <SafeIcon 
                  icon={vendor.icon} 
                  className="w-5 h-5 mr-2" 
                  style={{ color: vendor.color }} 
                />
                <span className="text-sm text-slate-400">{vendor.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnerships;
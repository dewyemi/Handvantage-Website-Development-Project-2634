import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';

const { FiUser, FiCheckCircle, FiHeart } = FiIcons;

const ManifestoPage = () => {
  const tenets = [
    {
      id: '01',
      title: 'PILOT > PLANE',
      icon: FiUser,
      description: 'A bad pilot crashes a good plane. A good pilot can fly anything. We focus on the operator, not the machine.',
      gradient: 'from-viability-primary to-purple-600'
    },
    {
      id: '02',
      title: 'OUTCOMES > ALERTS',
      icon: FiCheckCircle,
      description: 'An alert is a problem. A resolved ticket is a solution. We sell solutions.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '03',
      title: 'AGNOSTIC > RESELLER',
      icon: FiHeart,
      description: 'We never take a commission to sell you a tool you don\'t need. Our loyalty is to your budget.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <SEOHead
        title="The Doctrine - The Pilot's Code | Handvantage"
        description="The philosophy behind the service. PILOT > PLANE. OUTCOMES > ALERTS. AGNOSTIC > RESELLER."
      />

      <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <motion.div
            className="text-center mb-24 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              THE PILOT'S CODE.
            </h1>
            <p className="text-xl text-slate-400 font-light">
              The philosophy behind the service.
            </p>
          </motion.div>

          {/* Tenets */}
          <div className="max-w-5xl mx-auto space-y-16">
            {tenets.map((tenet, i) => (
              <motion.div
                key={tenet.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Glow background */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${tenet.gradient} rounded-3xl blur-xl opacity-20`} />

                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-10 md:p-14">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Number and Icon */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className={`w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br ${tenet.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                        <SafeIcon icon={tenet.icon} className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-slate-600 font-mono text-sm">TENET {tenet.id}</p>
                    </div>

                    {/* Content */}
                    <div className="flex-grow text-center md:text-left">
                      <h2 className={`text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r ${tenet.gradient} bg-clip-text text-transparent`}>
                        {tenet.title}
                      </h2>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {tenet.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Signature */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-slate-900 border border-slate-800 rounded-full px-8 py-4">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                END OF TRANSMISSION
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ManifestoPage;

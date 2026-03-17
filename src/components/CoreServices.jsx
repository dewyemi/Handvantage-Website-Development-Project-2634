import React from 'react';
import { motion } from 'framer-motion';
import { FiCrosshair, FiShield, FiActivity } from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { TerminalLabel } from './TerminalText';

const services = [
  {
    tag: 'AGENT 01: THE RECON',
    headline: 'AI-Augmented Pentesting',
    copy: 'Stop paying for static, annual reports. Our agents execute Triple-Framework coverage (Web, API, LLM) alongside human experts for deeper, faster vulnerability validation.',
    icon: FiCrosshair,
    color: 'signal'
  },
  {
    tag: 'AGENT 02: THE SENTRY',
    headline: 'Agentic Detection & Response (ADR)',
    copy: 'We plug into your existing stack (CrowdStrike, Defender). Agents triage the noise; human Pilots neutralize the validated threats. Guaranteed 15-minute response.',
    icon: FiShield,
    color: 'arc'
  },
  {
    tag: 'AGENT 03: THE AUDITOR',
    headline: 'Security Token Budgets',
    copy: 'Allocate an annual token budget to deploy our agents for continuous attack surface management and compliance evidence gathering (SOC2/ISO).',
    icon: FiActivity,
    color: 'slate-300'
  }
];

const CoreServices = () => {
  return (
    <section id="core-services" className="relative py-24 md:py-32 bg-[#020617] overflow-hidden noise-texture">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TerminalLabel className="text-slate-400 mb-4 tracking-widest text-sm">
            ENTERPRISE-SECURE AGENTIC CAPACITY
          </TerminalLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Deploy Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-arc to-signal">Agentic Capacity</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] border border-slate-800 p-8 md:p-10 group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-${service.color} opacity-20 group-hover:opacity-100 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className="flex justify-between items-start mb-10">
                <div className={`w-12 h-12 flex items-center justify-center border border-slate-700 bg-slate-900 group-hover:border-${service.color} transition-colors duration-300`}>
                  <SafeIcon icon={service.icon} className={`w-6 h-6 text-${service.color}`} />
                </div>
                <TerminalLabel className={`text-${service.color} text-[10px]`}>
                  {service.tag}
                </TerminalLabel>
              </div>

              {/* Content */}
              <h3 className="font-editorial text-2xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                {service.headline}
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {service.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

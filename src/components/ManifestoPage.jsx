import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';

const { FiUser, FiCheckCircle, FiHeart, FiCpu, FiTrendingUp, FiZap, FiArrowRight } = FiIcons;

const ManifestoPage = () => {
  const pilotTenets = [
    {
      id: '01',
      title: 'PILOT > PLANE',
      icon: FiUser,
      description: 'A bad pilot crashes a good plane. A good pilot can fly anything. We focus on the operator, not the machine. The industry sells you better tools. We give you better people.',
      gradient: 'from-viability-primary to-purple-600'
    },
    {
      id: '02',
      title: 'OUTCOMES > ALERTS',
      icon: FiCheckCircle,
      description: 'An alert is a problem. A resolved ticket is a solution. We don\'t send you emails about smoke — we put out the fire and rebuild the wall before you wake up.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: '03',
      title: 'AGNOSTIC > RESELLER',
      icon: FiHeart,
      description: 'We will never sell you a tool because we get a commission from it. We sit on your side of the table. If your current stack works, we keep it. If it doesn\'t, we tell you the truth.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const fleetTenets = [
    {
      id: '04',
      title: 'FLEET > HEADCOUNT',
      icon: FiCpu,
      description: 'One human sleeps, gets sick, and leaves. A fleet of AI agents works 24/7, learns from every interaction, and scales instantly. We deploy the workforce; you deploy the capital you save.',
      gradient: 'from-arc to-blue-600'
    },
    {
      id: '05',
      title: 'AUTOMATION > REPETITION',
      icon: FiZap,
      description: 'If a human is doing the same task twice, that task belongs to an agent. We identify every repetitive workflow — onboarding, patching, ticket triage, compliance evidence — and eliminate it.',
      gradient: 'from-signal to-emerald-600'
    },
    {
      id: '06',
      title: 'CAPITAL > OVERHEAD',
      icon: FiTrendingUp,
      description: 'Every dollar you stop spending on a burned-out generalist is a dollar you can deploy into product, sales, or growth. We are not a cost center. We are the engine that frees your capital.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const TenetCard = ({ tenet, i }) => (
    <motion.div
      key={tenet.id}
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Glow background */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${tenet.gradient} sharp-edges blur-xl opacity-20`} />

      <div className="relative bg-slate-900 border border-slate-800 sharp-edges p-10 md:p-14">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          {/* Number and Icon */}
          <div className="flex-shrink-0 text-center md:text-left">
            <div className={`w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br ${tenet.gradient} sharp-edges flex items-center justify-center mb-4`}>
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
  );

  return (
    <>
      <SEOHead
        title="The Doctrine - The Pilot's Code | Handvantage"
        description="The philosophy behind the service. PILOT > PLANE. OUTCOMES > ALERTS. AGNOSTIC > RESELLER. FLEET > HEADCOUNT. The Dual DNA of Handvantage."
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
            <p className="text-viability-primary font-mono text-sm uppercase tracking-widest mb-6">
              THE DUAL DNA
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              THE PILOT'S CODE.
            </h1>
            <p className="text-xl text-slate-400 font-light">
              The philosophy behind the service. Why we exist. Why the old model is broken.
            </p>
          </motion.div>

          {/* PART 1: The Pilot — Security Operations */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-viability-primary/30 px-6 py-2 sharp-edges mb-4">
                <span className="terminal-text text-viability-primary text-sm tracking-widest">PART I — THE PILOT</span>
              </div>
              <h2 className="text-3xl font-black text-white">Security Operations Philosophy</h2>
            </motion.div>

            <div className="space-y-8">
              {pilotTenets.map((tenet, i) => (
                <TenetCard key={tenet.id} tenet={tenet} i={i} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="max-w-5xl mx-auto my-16 flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700" />
            <div className="text-slate-500 font-mono text-sm tracking-widest px-4">+</div>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-700" />
          </motion.div>

          {/* PART 2: The Fleet — AI Workforce */}
          <div className="max-w-5xl mx-auto mb-20">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block border border-arc/30 px-6 py-2 sharp-edges mb-4">
                <span className="terminal-text text-arc text-sm tracking-widest">PART II — THE FLEET</span>
              </div>
              <h2 className="text-3xl font-black text-white">AI Workforce Philosophy</h2>
            </motion.div>

            <div className="space-y-8">
              {fleetTenets.map((tenet, i) => (
                <TenetCard key={tenet.id} tenet={tenet} i={i} />
              ))}
            </div>
          </div>

          {/* Closing CTA */}
          <motion.div
            className="mt-24 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 border border-slate-800 sharp-edges px-8 py-12">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-4">
                READY TO EXECUTE THE CODE?
              </p>
              <h3 className="text-4xl font-black text-white mb-8">
                The Pilot is waiting.<br />The Fleet is ready.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-viability-primary text-white font-bold sharp-edges hover:bg-viability-glow transition-colors"
                >
                  Book The Briefing
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
                <Link
                  to="/roi-calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-signal/40 text-signal font-bold sharp-edges hover:bg-signal hover:text-void transition-all"
                >
                  Calculate My Savings
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ManifestoPage;

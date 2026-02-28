import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiDollarSign, FiTool, FiPieChart, FiUsers } = FiIcons;

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    internalTeamCost: '',
    numSecurityTools: '',
    securityBudget: '',
    numAgents: '',
    estimatedHireCost: ''
  });
  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    const internalCost = parseFloat(inputs.internalTeamCost) || 180000;
    const numTools = parseFloat(inputs.numSecurityTools) || 5;
    const budget = parseFloat(inputs.securityBudget) || 500000;
    const numAgents = parseFloat(inputs.numAgents) || 3;
    const hireCostPerAgent = parseFloat(inputs.estimatedHireCost) || 150000;

    // Fleet Savings: cost of hiring agents internally vs. Handvantage managed fleet
    const fleetInternalCost = numAgents * hireCostPerAgent;
    // Handvantage Fleet Fee estimate: ~30% of equivalent internal cost
    const fleetHandvantageFee = fleetInternalCost * 0.30;
    const fleetSavings = fleetInternalCost - fleetHandvantageFee;

    // Team Savings: internal security team replaced by Handvantage (~30% of cost)
    const handvantageFee = internalCost * 0.30;
    const teamSavings = internalCost - handvantageFee;

    // Tool Savings: estimated 25% SaaS waste reduction
    const toolSavings = budget * 0.25;

    // Efficiency Savings: $5k efficiency gain per tool managed
    const efficiencySavings = numTools * 5000;

    const totalSavings = teamSavings + toolSavings + efficiencySavings + fleetSavings;

    // Engineering Hires Equivalent ($150k avg salary estimate)
    const engineerHires = Math.floor(totalSavings / 150000);

    setResult({
      savings: totalSavings,
      engineers: engineerHires,
      breakdown: {
        internalCost,
        handvantageFee,
        teamSavings,
        toolSavings,
        efficiencySavings,
        fleetInternalCost,
        fleetHandvantageFee,
        fleetSavings
      }
    });
  };

  return (
    <section className="py-24 bg-slate-950 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Hero Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              THE COST OF SLEEP.
            </h1>
            <p className="text-xl text-slate-400 font-light">
              Calculate your "Service Gap" cost.
            </p>
          </motion.div>

          {/* Calculator Card */}
          <motion.div
            className="bg-slate-900 border border-slate-800 sharp-edges p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Input 1 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-3">
                  Annual Cost of Internal Security Team ($)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 sharp-edges focus:outline-none focus:border-viability-primary transition-colors text-lg"
                    placeholder="e.g. 180000"
                    value={inputs.internalTeamCost}
                    onChange={(e) => setInputs({ ...inputs, internalTeamCost: e.target.value })}
                  />
                </div>
              </div>

              {/* Input 2 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-3">
                  Number of Security Tools
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <SafeIcon icon={FiTool} className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 sharp-edges focus:outline-none focus:border-viability-primary transition-colors text-lg"
                    placeholder="e.g. 5"
                    value={inputs.numSecurityTools}
                    onChange={(e) => setInputs({ ...inputs, numSecurityTools: e.target.value })}
                  />
                </div>
              </div>

              {/* Input 3 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-3">
                  Annual Security Budget ($)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <SafeIcon icon={FiPieChart} className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 sharp-edges focus:outline-none focus:border-viability-primary transition-colors text-lg"
                    placeholder="e.g. 500000"
                    value={inputs.securityBudget}
                    onChange={(e) => setInputs({ ...inputs, securityBudget: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Fleet Savings Inputs */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-3">
                  Number of Agents / Roles to Replace
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 sharp-edges focus:outline-none focus:border-viability-primary transition-colors text-lg"
                    placeholder="e.g. 3"
                    value={inputs.numAgents}
                    onChange={(e) => setInputs({ ...inputs, numAgents: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-3">
                  Estimated Internal Hire Cost Per Agent ($)
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-slate-500" />
                  </div>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 sharp-edges focus:outline-none focus:border-viability-primary transition-colors text-lg"
                    placeholder="e.g. 150000"
                    value={inputs.estimatedHireCost}
                    onChange={(e) => setInputs({ ...inputs, estimatedHireCost: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={calculateSavings}
              className="w-full bg-gradient-to-r from-viability-primary to-viability-glow text-white font-bold py-5 sharp-edges hover:shadow-lg hover:shadow-viability-primary/20 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
            >
              CALCULATE MY SAVINGS
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>

            {/* Result Area */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 pt-12 border-t border-slate-800"
              >
                <div className="text-center mb-12">
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-4">
                    YOUR ESTIMATED POTENTIAL SAVINGS
                  </p>
                  <p className="text-6xl md:text-7xl font-black text-green-400 mb-6">
                    ${result.savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xl text-slate-300 mb-10">
                    That is enough to hire <strong className="text-white">{result.engineers}</strong> extra engineers.
                  </p>
                </div>

                {/* Bar Chart: Internal Cost vs Fleet Cost */}
                <div className="max-w-3xl mx-auto mb-12">
                  <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-6 text-center">
                    COST COMPARISON
                  </p>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-red-400 font-semibold">Internal Hire Cost</span>
                        <span className="text-red-400 font-bold">${result.breakdown.internalCost.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-slate-800 sharp-edges h-8 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-600 to-red-400"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-green-400 font-semibold">Handvantage Fleet Cost</span>
                        <span className="text-green-400 font-bold">${result.breakdown.handvantageFee.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-slate-800 sharp-edges h-8 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-600 to-green-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.round((result.breakdown.handvantageFee / result.breakdown.internalCost) * 100)}%` }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transparent Formula Breakdown */}
                <div className="max-w-3xl mx-auto mb-12 bg-slate-800/50 border border-slate-700 sharp-edges p-6 md:p-8">
                  <p className="text-slate-400 text-sm font-mono uppercase tracking-widest mb-6 text-center">
                    HOW WE CALCULATED THIS
                  </p>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                      <span className="text-slate-300">Team Savings (Internal Cost × 70%)</span>
                      <span className="text-green-400 font-bold">${result.breakdown.teamSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                      <span className="text-slate-300">Tool Savings (Budget × 25% waste reduction)</span>
                      <span className="text-green-400 font-bold">${result.breakdown.toolSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                      <span className="text-slate-300">Efficiency Savings ($5k per tool managed)</span>
                      <span className="text-green-400 font-bold">${result.breakdown.efficiencySavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-700 pb-3">
                      <span className="text-slate-300">Fleet Savings ({inputs.numAgents || 3} agents × 70% cost reduction)</span>
                      <span className="text-green-400 font-bold">${result.breakdown.fleetSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-white font-bold text-base">Total Estimated Savings</span>
                      <span className="text-green-400 font-black text-base">${result.savings.toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4 text-center">
                    * Estimates are based on industry averages and may vary based on your specific environment.
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href="https://handvantage.co/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-bold sharp-edges hover:bg-slate-100 transition-colors text-lg"
                  >
                    BOOK A BRIEFING TO CLAIM THIS
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
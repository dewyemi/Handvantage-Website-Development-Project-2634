import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiDollarSign, FiTool, FiPieChart } = FiIcons;

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    internalTeamCost: '',
    numSecurityTools: '',
    securityBudget: ''
  });
  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    // Logic from v3 Master Copy
    const internalCost = parseFloat(inputs.internalTeamCost) || 180000;
    const numTools = parseFloat(inputs.numSecurityTools) || 5;
    const budget = parseFloat(inputs.securityBudget) || 500000;

    // Handvantage Fee (Hidden Variable: ~30% of Internal Cost)
    const handvantageFee = internalCost * 0.30;

    // Savings Calculation
    const teamSavings = internalCost - handvantageFee;
    const toolSavings = budget * 0.25; // Assume 25% waste cut
    const efficiencySavings = numTools * 5000; // $5k efficiency per tool managed
    const totalSavings = teamSavings + toolSavings + efficiencySavings;

    // Engineering Hires Equivalent ($150k avg salary estimate)
    const engineerHires = Math.floor(totalSavings / 150000);

    setResult({
      savings: totalSavings,
      engineers: engineerHires
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
            <div className="grid md:grid-cols-3 gap-8 mb-10">
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
                <div className="text-center">
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-4">
                    YOUR POTENTIAL SAVINGS
                  </p>
                  <p className="text-6xl md:text-7xl font-black text-green-400 mb-6">
                    ${result.savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xl text-slate-300 mb-10">
                    That is enough to hire <strong className="text-white">{result.engineers}</strong> extra engineers.
                  </p>

                  {/* CTA */}
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
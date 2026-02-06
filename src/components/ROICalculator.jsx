import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiUsers, FiLock, FiArrowRight } = FiIcons;

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    internalTeamCost: '',
    securityBudget: '',
    wastePercentage: '30'
  });
  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    // Logic from v2 Master Copy
    // Default Internal Cost (if empty) = 540000 ($180k x 3)
    const internalCost = parseFloat(inputs.internalTeamCost) || 540000;
    const budget = parseFloat(inputs.securityBudget) || 0;
    const wastePercent = parseFloat(inputs.wastePercentage) || 30;

    // Handvantage Fee (Hidden Variable: ~30% of Internal Cost)
    const handvantageFee = internalCost * 0.30;

    // Savings Calculation
    const teamSavings = internalCost - handvantageFee;
    const toolSavings = budget * (wastePercent / 100);
    const totalSavings = teamSavings + toolSavings;

    // Engineering Hires Equivalent ($120k avg salary estimate)
    const engineerHires = Math.floor(totalSavings / 120000);

    setResult({
      savings: totalSavings,
      engineers: engineerHires
    });
  };

  return (
    <section className="py-24 bg-slate-950 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              THE COST OF SLEEP.
            </h1>
            <p className="text-xl text-slate-400 font-light mb-8">
              Calculate how much you save by hiring a Pilot instead of a CISO.
            </p>
          </div>

          {/* Right Column: Calculator */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">

              {/* Input 1 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Annual Cost of Internal Team</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">$</span>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-8 pr-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="540,000 (Defaults to $180k x 3)"
                    value={inputs.internalTeamCost}
                    onChange={(e) => setInputs({ ...inputs, internalTeamCost: e.target.value })}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-1">Cost for 24/7 coverage (3 FTEs)</p>
              </div>

              {/* Input 2 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Annual Security Tool Budget</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">$</span>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-8 pr-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="200,000"
                    value={inputs.securityBudget}
                    onChange={(e) => setInputs({ ...inputs, securityBudget: e.target.value })}
                  />
                </div>
              </div>

              {/* Input 3 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Est. SaaS Waste %</label>
                <div className="relative">
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="30"
                    value={inputs.wastePercentage}
                    onChange={(e) => setInputs({ ...inputs, wastePercentage: e.target.value })}
                  />
                  <span className="absolute right-4 top-3.5 text-slate-500">%</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={calculateSavings}
                className="w-full bg-gradient-to-r from-viability-primary to-viability-glow text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-viability-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                CALCULATE SAVINGS
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>

              {/* Result Area */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-slate-800 text-center"
                >
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-2">You save by switching to Handvantage:</p>
                  <p className="text-4xl font-black text-green-400 mb-2">
                    ${result.savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}/year
                  </p>
                  <p className="text-sm text-viability-glow italic">
                    "That is {result.engineers} extra engineers you could hire to build your product."
                  </p>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
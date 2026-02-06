import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDollarSign, FiUsers, FiLock, FiArrowRight } = FiIcons;

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    annualRevenue: '',
    employeeCount: '',
    securitySpend: ''
  });
  const [savings, setSavings] = useState(null);

  const calculateSavings = () => {
    // Simplified logic for demo purposes based on inputs
    // Assuming 30% waste cut + $180k headcount avoidance
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const spend = parseFloat(inputs.securitySpend) || 0;

    const saasCut = spend * 0.30;
    const headcountAvoided = 180000;
    const totalPotential = saasCut + headcountAvoided;

    setSavings(totalPotential);
  };

  return (
    <section className="py-24 bg-slate-950 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              THE SAAS WASTE CALCULATOR.
            </h1>
            <p className="text-xl text-slate-400 font-light mb-8">
              Most companies burn 30% of their security budget on shelfware and unused seats. See what you could save.
            </p>
          </div>

          {/* Right Column: Calculator */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <div className="space-y-6">

              {/* Input 1 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Annual Revenue</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">$</span>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-8 pr-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="5,000,000"
                    value={inputs.annualRevenue}
                    onChange={(e) => setInputs({ ...inputs, annualRevenue: e.target.value })}
                  />
                </div>
              </div>

              {/* Input 2 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Employee Count</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500"><SafeIcon icon={FiUsers} className="w-4 h-4" /></span>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="50"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({ ...inputs, employeeCount: e.target.value })}
                  />
                </div>
              </div>

              {/* Input 3 */}
              <div>
                <label className="block text-sm font-semibold text-slate-400 mb-2">Current Security Spend (Est.)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-slate-500">$</span>
                  <input
                    type="number"
                    className="w-full bg-slate-800 border border-slate-700 text-white pl-8 pr-4 py-3 rounded-lg focus:outline-none focus:border-viability-primary transition-colors"
                    placeholder="150,000"
                    value={inputs.securitySpend}
                    onChange={(e) => setInputs({ ...inputs, securitySpend: e.target.value })}
                  />
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
              {savings !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-slate-800 text-center"
                >
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest mb-2">Potential Annual Savings</p>
                  <p className="text-4xl font-black text-green-400">
                    ${savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    *Includes estimated SaaS waste reduction & headcount avoidance.
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
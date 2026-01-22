import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiClock, FiTarget, FiTrendingUp, FiShield, FiCloud, FiSettings, FiBarChart, FiUser, FiPhone, FiZap, FiAward } = FiIcons;

const AssessmentLanding = () => {
  const benefits = [
    { icon: FiTarget, title: "Identify Growth Bottlenecks", description: "Discover specific barriers that are limiting your business growth potential" },
    { icon: FiTrendingUp, title: "Strategic Investment Roadmap", description: "Get a clear prioritization of which initiatives will deliver the highest business impact" },
    { icon: FiShield, title: "Risk Mitigation Strategy", description: "Understand business vulnerabilities and develop protection strategies" },
    { icon: FiZap, title: "Efficiency Acceleration", description: "Identify processes that can be streamlined to free up resources for growth" },
    { icon: FiCloud, title: "Scalability Planning", description: "Evaluate your infrastructure's readiness to support rapid business expansion" },
    { icon: FiBarChart, title: "Competitive Advantage Identification", description: "See how to leverage technology to outperform competitors in your industry" }
  ];

  const assessmentCategories = [
    { icon: FiCloud, title: "Infrastructure Assessment", description: "Email platforms, IT support, backup systems, and remote work capabilities", color: "#1e3a8a" },
    { icon: FiShield, title: "Security Evaluation", description: "Email security, network protection, device management, and compliance status", color: "#dc2626" },
    { icon: FiSettings, title: "Process Automation", description: "Manual processes, CRM usage, reporting capabilities, and system integration", color: "#f97316" },
    { icon: FiTrendingUp, title: "Growth Readiness", description: "Scalability challenges, investment readiness, and change management capacity", color: "#16a34a" }
  ];

  const scoreRanges = [
    { range: "60-80 Points", level: "Enterprise Ready", description: "Strong foundation with optimization opportunities", color: "#16a34a", icon: FiAward },
    { range: "40-59 Points", level: "Growth Stage", description: "Good foundation with strategic improvement needs", color: "#f97316", icon: FiTrendingUp },
    { range: "20-39 Points", level: "Foundation Building", description: "Core systems need upgrades for growth support", color: "#eab308", icon: FiSettings },
    { range: "0-19 Points", level: "Transformation Critical", description: "Comprehensive overhaul needed for competitiveness", color: "#dc2626", icon: FiTarget }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  🎯 Free Growth Bottleneck Assessment
                </motion.div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Discover Your Business's{' '}
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Transformation Potential
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Take our comprehensive assessment to identify the strategic bottlenecks limiting your growth and discover opportunities to create sustainable competitive advantages.
                </motion.p>
              </div>
              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">10-15</div>
                  <div className="text-sm text-gray-600">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">20</div>
                  <div className="text-sm text-gray-600">Questions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">$0</div>
                  <div className="text-sm text-gray-600">Cost</div>
                </div>
              </motion.div>
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://secvantages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  Identify Growth Bottlenecks <SafeIcon icon={FiTarget} className="w-5 h-5 ml-2" />
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  Powered by SecVantages • Get results in minutes
                </p>
              </motion.div>
            </motion.div>
            {/* Right Column - Assessment Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Assessment Categories</h3>
                  <p className="text-gray-600">Comprehensive evaluation across 4 key areas</p>
                </div>
                <div className="space-y-4">
                  {assessmentCategories.map((category, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <SafeIcon icon={category.icon} className="w-5 h-5" style={{ color: category.color }} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{category.title}</h4>
                        <p className="text-sm text-gray-600">{category.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our assessment reveals specific strategic opportunities to improve efficiency, reduce costs, and accelerate growth
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Ranges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Understanding Your Score
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your assessment score reveals your transformation readiness and provides targeted recommendations
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scoreRanges.map((range, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: range.color }}
                >
                  <SafeIcon icon={range.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{range.range}</div>
                <div
                  className="text-xl font-bold mb-3"
                  style={{ color: range.color }}
                >
                  {range.level}
                </div>
                <p className="text-sm text-gray-600">{range.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Discover Your Growth Potential?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward transforming your business. Get your personalized assessment results and strategic roadmap in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://secvantages.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Identify Growth Bottlenecks <SafeIcon icon={FiTarget} className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
              <motion.a
                href="tel:+12362350919"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Call Josh: 236-235-0919
              </motion.a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" /> 10-15 minutes
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-1" /> No obligation
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" /> Expert analysis
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentLanding;
import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalculator, FiTrendingUp, FiDollarSign, FiClock, FiTarget, FiBarChart, FiCheckCircle, FiZap, FiShield, FiCloud, FiBot, FiPhone, FiDownload} = FiIcons;

const ROICalculatorLanding = () => {
  const benefits = [
    {icon: FiDollarSign, title: "Security Investment Optimization", description: "Calculate cost savings from vendor consolidation and strategic partnerships (25-40% tool savings)"},
    {icon: FiClock, title: "Payback Period Analysis", description: "See exactly when managed security investments deliver positive returns"},
    {icon: FiTrendingUp, title: "3-Year Security ROI", description: "Understand long-term value creation from comprehensive security protection"},
    {icon: FiTarget, title: "Risk Reduction Value", description: "Quantify business impact of reduced security incidents and downtime"},
    {icon: FiBarChart, title: "Operational Efficiency Gains", description: "Measure 40-60% reduction in IT security management burden"},
    {icon: FiShield, title: "Business Enablement Benefits", description: "Calculate value of faster growth without security constraints"}
  ];

  const calculatorFeatures = [
    {icon: FiCalculator, title: "Security Profile Assessment", description: "Comprehensive evaluation of current security spending and risk profile", color: "#2563eb"},
    {icon: FiBarChart, title: "Cost Comparison Analysis", description: "Internal vs MSSP vs HandVantage security cost comparisons", color: "#16a34a"},
    {icon: FiTarget, title: "Risk-Adjusted ROI", description: "Security investment returns adjusted for incident probability and impact", color: "#7c3aed"},
    {icon: FiDownload, title: "Executive Security Report", description: "Detailed security ROI analysis with strategic implementation roadmap", color: "#f59e0b"}
  ];

  const securityValue = [
    {solution: "Vendor Consolidation", icon: FiDollarSign, value: "25-40% cost savings", description: "Enterprise pricing on security tools through strategic partnerships", color: "#2563eb"},
    {solution: "Expert Management", icon: FiTarget, value: "40-60% IT burden reduction", description: "Security professionals equivalent to 2-3 FTE", color: "#7c3aed"},
    {solution: "Incident Prevention", icon: FiShield, value: "80% incident reduction", description: "Advanced threat detection and response capabilities", color: "#dc2626"},
    {solution: "Compliance Automation", icon: FiCheckCircle, value: "60% efficiency gain", description: "Automated compliance monitoring and reporting", color: "#16a34a"}
  ];

  const industryExamples = [
    {industry: "Technology", companySize: "50 employees", annualSavings: "$185,000", paybackPeriod: "7 months", roi: "385%"},
    {industry: "Healthcare", companySize: "75 employees", annualSavings: "$240,000", paybackPeriod: "5 months", roi: "460%"},
    {industry: "Professional Services", companySize: "100 employees", annualSavings: "$295,000", paybackPeriod: "6 months", roi: "420%"},
    {industry: "Financial Services", companySize: "150 employees", annualSavings: "$380,000", paybackPeriod: "8 months", roi: "340%"}
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
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <div>
                <motion.div
                  className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                >
                  🛡️ Free Security ROI Calculator
                </motion.div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.3}}
                >
                  Calculate Your Managed Security{' '}
                  <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    Services ROI
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.4}}
                >
                  Interactive calculator that shows the exact financial benefits of managed security services compared to internal security teams and traditional approaches.
                </motion.p>
              </div>
              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Security Sections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">10</div>
                  <div className="text-sm text-gray-600">Minute Assessment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
                  <div className="text-sm text-gray-600">Year Projections</div>
                </div>
              </motion.div>
              {/* CTA Button */}
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6}}
              >
                <Link
                  to="/roi-calculator/start"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
                >
                  Calculate Your Security ROI <SafeIcon icon={FiShield} className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  No email required to start • Get detailed security analysis in minutes
                </p>
              </motion.div>
            </motion.div>
            {/* Right Column - Calculator Preview */}
            <motion.div
              className="relative"
              initial={{opacity: 0, x: 30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Security ROI Features</h3>
                  <p className="text-gray-600">Comprehensive security impact analysis tool</p>
                </div>
                <div className="space-y-4">
                  {calculatorFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.2 + index * 0.1}}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: `${feature.color}20`}}
                      >
                        <SafeIcon icon={feature.icon} className="w-5 h-5" style={{color: feature.color}} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our security ROI calculator provides detailed insights into the financial benefits of managed security services
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Value Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Managed Security Services Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how managed security services create cost savings and operational efficiencies for your business
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityValue.map((security, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{backgroundColor: security.color}}
                >
                  <SafeIcon icon={security.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{security.solution}</h3>
                <div
                  className="text-2xl font-bold mb-2"
                  style={{color: security.color}}
                >
                  {security.value}
                </div>
                <p className="text-sm text-gray-600">{security.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Examples Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Real Security ROI by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See typical managed security services ROI results for companies similar to yours
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industryExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-red-50 rounded-xl p-6 text-center"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{example.industry}</h3>
                <p className="text-sm text-gray-600 mb-4">{example.companySize}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{example.annualSavings}</div>
                    <div className="text-xs text-gray-500">Annual Security Savings</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-blue-600">{example.paybackPeriod}</div>
                    <div className="text-xs text-gray-500">Security Payback Period</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-red-600">{example.roi}</div>
                    <div className="text-xs text-gray-500">3-Year Security ROI</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Calculate Your Security ROI?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See exactly how managed security services can reduce costs while improving protection and enabling business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <Link
                  to="/roi-calculator/start"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Calculate Security ROI <SafeIcon icon={FiShield} className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+12362350919"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300 inline-flex items-center"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Discuss Strategy: 236-235-0919
              </motion.a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" /> 10 minutes
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-1" /> No obligation
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-1" /> Security roadmap
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculatorLanding;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiCalculator,
  FiTrendingUp,
  FiDollarSign,
  FiClock,
  FiTarget,
  FiBarChart,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiCloud,
  FiBot,
  FiPhone,
  FiDownload,
  FiStar
} = FiIcons;

const ROICalculatorLanding = () => {
  const benefits = [
    {
      icon: FiDollarSign,
      title: "Quantify Your Savings",
      description: "Calculate exact cost savings from process automation and efficiency gains"
    },
    {
      icon: FiClock,
      title: "Determine Payback Period",
      description: "See exactly when your digital transformation investment will break even"
    },
    {
      icon: FiTrendingUp,
      title: "3-Year Projections",
      description: "Understand long-term value creation and compound benefits"
    },
    {
      icon: FiTarget,
      title: "Partnership Value",
      description: "See specific benefits from Microsoft CSP, RTILA AI, and security partnerships"
    },
    {
      icon: FiBarChart,
      title: "Industry Benchmarks",
      description: "Compare your results against industry standards and best practices"
    },
    {
      icon: FiShield,
      title: "Risk Mitigation Value",
      description: "Calculate the financial impact of improved security and compliance"
    }
  ];

  const calculatorFeatures = [
    {
      icon: FiCalculator,
      title: "Multi-Step Assessment",
      description: "Comprehensive 4-section evaluation covering all aspects of digital transformation",
      color: "#2563eb"
    },
    {
      icon: FiBarChart,
      title: "Real-Time Calculations",
      description: "Interactive charts and graphs with animated results as you input data",
      color: "#16a34a"
    },
    {
      icon: FiTarget,
      title: "Partnership-Specific ROI",
      description: "Detailed breakdown of value from each technology partnership",
      color: "#7c3aed"
    },
    {
      icon: FiDownload,
      title: "Detailed Report",
      description: "15-page comprehensive analysis with implementation roadmap",
      color: "#f59e0b"
    }
  ];

  const partnershipValue = [
    {
      partner: "Microsoft CSP",
      icon: FiCloud,
      value: "5-15% licensing savings",
      description: "Direct Microsoft support with preferred pricing",
      color: "#2563eb"
    },
    {
      partner: "RTILA AI",
      icon: FiBot,
      value: "40-70% time savings",
      description: "Custom AI automation for business processes",
      color: "#7c3aed"
    },
    {
      partner: "IRONSCALES",
      icon: FiShield,
      value: "80% threat reduction",
      description: "Advanced email security protecting 16,000+ organizations",
      color: "#dc2626"
    },
    {
      partner: "Vanta",
      icon: FiCheckCircle,
      value: "60% compliance cost reduction",
      description: "Automated SOC 2, HIPAA, and ISO 27001 compliance",
      color: "#16a34a"
    }
  ];

  const testimonials = [
    {
      quote: "The ROI calculator showed us $180K in annual savings. We implemented Josh's recommendations and achieved those results within 8 months.",
      author: "Sarah Chen",
      title: "CFO, TechStart Solutions",
      company: "45 employees, Technology",
      roi: "320% ROI"
    },
    {
      quote: "The calculator identified automation opportunities we never considered. The RTILA AI implementation alone saved us 25 hours per week.",
      author: "Mike Rodriguez",
      title: "Operations Director",
      company: "85 employees, Manufacturing",
      roi: "280% ROI"
    },
    {
      quote: "Seeing the partnership value breakdown convinced us to move forward. The Microsoft CSP savings paid for the entire transformation.",
      author: "Lisa Thompson",
      title: "VP Operations",
      company: "120 employees, Professional Services",
      roi: "425% ROI"
    }
  ];

  const industryExamples = [
    {
      industry: "Technology",
      companySize: "50 employees",
      annualSavings: "$165,000",
      paybackPeriod: "8 months",
      roi: "340%"
    },
    {
      industry: "Healthcare",
      companySize: "75 employees",
      annualSavings: "$210,000",
      paybackPeriod: "6 months",
      roi: "420%"
    },
    {
      industry: "Professional Services",
      companySize: "100 employees",
      annualSavings: "$275,000",
      paybackPeriod: "7 months",
      roi: "380%"
    },
    {
      industry: "Manufacturing",
      companySize: "150 employees",
      annualSavings: "$320,000",
      paybackPeriod: "9 months",
      roi: "295%"
    }
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
                  💰 Free ROI Calculator
                </motion.div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Calculate Your Digital Transformation{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    ROI
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Interactive calculator that shows exact savings, payback period, and 3-year value 
                  from our partnership-powered digital transformation solutions.
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
                  <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">Assessment Sections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Minute Calculator</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">15</div>
                  <div className="text-sm text-gray-600">Page Report</div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/roi-calculator/start"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  Calculate Your ROI
                  <SafeIcon icon={FiCalculator} className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  No email required to start • Get detailed results in minutes
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Calculator Preview */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Calculator Features</h3>
                  <p className="text-gray-600">Comprehensive ROI analysis tool</p>
                </div>
                <div className="space-y-4">
                  {calculatorFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <SafeIcon icon={feature.icon} className="w-5 h-5" style={{ color: feature.color }} />
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              What You'll Discover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our ROI calculator provides detailed insights into your digital transformation potential
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

      {/* Partnership Value Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Partnership-Specific Value Calculation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how each strategic partnership contributes to your ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipValue.map((partnership, index) => (
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
                  style={{ backgroundColor: partnership.color }}
                >
                  <SafeIcon icon={partnership.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{partnership.partner}</h3>
                <div className="text-2xl font-bold mb-2" style={{ color: partnership.color }}>
                  {partnership.value}
                </div>
                <p className="text-sm text-gray-600">{partnership.description}</p>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Real Results by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See typical ROI results for companies similar to yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industryExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-primary-dark mb-2">{example.industry}</h3>
                <p className="text-sm text-gray-600 mb-4">{example.companySize}</p>
                <div className="space-y-2">
                  <div>
                    <div className="text-2xl font-bold text-green-600">{example.annualSavings}</div>
                    <div className="text-xs text-gray-500">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-blue-600">{example.paybackPeriod}</div>
                    <div className="text-xs text-gray-500">Payback Period</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-600">{example.roi}</div>
                    <div className="text-xs text-gray-500">3-Year ROI</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Validated Results from Real Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other businesses achieved the ROI predicted by our calculator
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                  <div className="text-lg font-bold text-green-600 mt-2">{testimonial.roi}</div>
                </div>
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
              Ready to Calculate Your ROI?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See exactly how much your business can save and grow with our partnership-powered 
              digital transformation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/roi-calculator/start"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Start ROI Calculator
                  <SafeIcon icon={FiCalculator} className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+12362350919"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Discuss Results: 236-235-0919
              </motion.a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                15 minutes
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-1" />
                No obligation
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-1" />
                Detailed report
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculatorLanding;
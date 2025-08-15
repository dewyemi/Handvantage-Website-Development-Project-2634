import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCalculator, FiTrendingUp, FiDollarSign, FiClock, FiTarget, FiBarChart, FiCheckCircle, FiZap, FiShield, FiCloud, FiBot, FiPhone, FiDownload, FiStar} = FiIcons;

const ROICalculatorLanding = () => {
  const benefits = [
    {icon: FiDollarSign, title: "Quantify Your Growth Potential", description: "Calculate exact business impact from strategic technology investments"},
    {icon: FiClock, title: "Strategic Investment Timeline", description: "See exactly when your transformation investments will deliver positive returns"},
    {icon: FiTrendingUp, title: "3-Year Growth Projections", description: "Understand long-term value creation and compound business benefits"},
    {icon: FiTarget, title: "Strategic Technology Value", description: "Quantify business advantages from cloud infrastructure, automation, and security solutions"},
    {icon: FiBarChart, title: "Competitive Advantage Metrics", description: "Measure how technology investments create sustainable competitive advantages"},
    {icon: FiShield, title: "Risk Mitigation Value", description: "Calculate the business impact of improved protection and compliance"}
  ];

  const calculatorFeatures = [
    {icon: FiCalculator, title: "Strategic Assessment", description: "Comprehensive 4-section evaluation of your business growth potential", color: "#2563eb"},
    {icon: FiBarChart, title: "Business Impact Analysis", description: "Interactive visualizations showing specific business outcomes and ROI", color: "#16a34a"},
    {icon: FiTarget, title: "Partnership-Specific Benefits", description: "Detailed breakdown of strategic value from each partnership", color: "#7c3aed"},
    {icon: FiDownload, title: "Executive Roadmap", description: "15-page comprehensive analysis with strategic implementation plan", color: "#f59e0b"}
  ];

  const technologyValue = [
    {solution: "Cloud Infrastructure", icon: FiCloud, value: "40% IT cost reduction", description: "Enterprise cloud solutions with preferred pricing", color: "#2563eb"},
    {solution: "Process Automation", icon: FiBot, value: "70% productivity increase", description: "Strategic process automation and optimization", color: "#7c3aed"},
    {solution: "Advanced Security", icon: FiShield, value: "Business continuity protection", description: "Enterprise protection for thousands of organizations", color: "#dc2626"},
    {solution: "Compliance Automation", icon: FiCheckCircle, value: "14-day compliance", description: "Automated compliance that accelerates growth", color: "#16a34a"}
  ];

  const testimonials = [
    {
      quote: "The ROI calculator revealed $180K in growth opportunities we'd been missing. Josh's strategic recommendations eliminated our operational bottlenecks and transformed how we compete in the market.",
      author: "Sarah Chen",
      title: "CFO",
      company: "Technology Firm, 45 employees",
      roi: "320% ROI"
    },
    {
      quote: "The calculator identified strategic advantages we never considered. The AI automation implementation alone eliminated 25 hours of manual work weekly, allowing us to scale revenue without adding headcount.",
      author: "Mike Rodriguez",
      title: "Operations Director",
      company: "Manufacturing, 85 employees",
      roi: "280% ROI"
    },
    {
      quote: "The technology value analysis completely changed our investment strategy. The cloud infrastructure savings alone funded our entire digital transformation while creating sustainable competitive advantages.",
      author: "Lisa Thompson",
      title: "VP Operations",
      company: "Professional Services, 120 employees",
      roi: "425% ROI"
    }
  ];

  const industryExamples = [
    {industry: "Technology", companySize: "50 employees", annualSavings: "$165,000", paybackPeriod: "8 months", roi: "340%"},
    {industry: "Healthcare", companySize: "75 employees", annualSavings: "$210,000", paybackPeriod: "6 months", roi: "420%"},
    {industry: "Professional Services", companySize: "100 employees", annualSavings: "$275,000", paybackPeriod: "7 months", roi: "380%"},
    {industry: "Manufacturing", companySize: "150 employees", annualSavings: "$320,000", paybackPeriod: "9 months", roi: "295%"}
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
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                >
                  💰 Free Business Impact Calculator
                </motion.div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.3}}
                >
                  Calculate Your Strategic{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Business Impact
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-600 mb-8"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.4}}
                >
                  Interactive calculator that shows exactly how our partnership-powered solutions eliminate growth bottlenecks and create sustainable competitive advantages for your business.
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
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6}}
              >
                <Link
                  to="/roi-calculator/start"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                >
                  Calculate Your Business Impact <SafeIcon icon={FiCalculator} className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  No email required to start • Get detailed results in minutes
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
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">Calculator Features</h3>
                  <p className="text-gray-600">Comprehensive business impact analysis tool</p>
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
              Our ROI calculator provides detailed insights into your strategic business transformation potential
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Strategic Partnership Business Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how each strategic partnership creates competitive advantages for your business
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyValue.map((technology, index) => (
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
                  style={{backgroundColor: technology.color}}
                >
                  <SafeIcon icon={technology.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{technology.solution}</h3>
                <div
                  className="text-2xl font-bold mb-2"
                  style={{color: technology.color}}
                >
                  {technology.value}
                </div>
                <p className="text-sm text-gray-600">{technology.description}</p>
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
              Real Business Impact by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See typical strategic transformation results for companies similar to yours
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industryExamples.map((example, index) => (
              <motion.div
                key={index}
                className="bg-blue-50 rounded-xl p-6 text-center"
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
                    <div className="text-xs text-gray-500">Annual Business Impact</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-blue-600">{example.paybackPeriod}</div>
                    <div className="text-xs text-gray-500">Strategic Payback Period</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-purple-600">{example.roi}</div>
                    <div className="text-xs text-gray-500">3-Year Business ROI</div>
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Real Business Transformation Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how other businesses achieved strategic growth through our partnership-powered solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Calculate Your Strategic Impact?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See exactly how our partnership-powered solutions can eliminate your growth bottlenecks and create sustainable competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <Link
                  to="/roi-calculator/start"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Calculate Business Impact <SafeIcon icon={FiCalculator} className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+12362350919"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Discuss Strategy: 236-235-0919
              </motion.a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" /> 15 minutes
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-1" /> No obligation
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-1" /> Strategic roadmap
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculatorLanding;
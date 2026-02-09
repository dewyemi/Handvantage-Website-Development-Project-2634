import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';
import { Link } from 'react-router-dom';

const {
  FiShield, FiZap, FiTarget, FiTrendingUp, FiCheckCircle, FiArrowRight,
  FiUsers, FiDollarSign, FiClock, FiAward, FiStar, FiLock
} = FiIcons;

const ManagedSecurityPage = () => {
  const challenges = [
    {
      icon: FiUsers,
      title: "Limited Security Expertise",
      description: "Growing businesses lack dedicated security teams and struggle to keep up with evolving threats"
    },
    {
      icon: FiDollarSign,
      title: "Budget Constraints",
      description: "Enterprise-grade security solutions seem financially out of reach for growing organizations"
    },
    {
      icon: FiTrendingUp,
      title: "Rapid Growth Challenges",
      description: "Business expansion often outpaces security capabilities, creating dangerous gaps"
    },
    {
      icon: FiTarget,
      title: "Compliance Requirements",
      description: "Regulatory requirements feel overwhelming without proper expertise and frameworks"
    }
  ];

  const benefits = [
    {
      icon: FiDollarSign,
      title: "Cost Optimization",
      description: "Vendor consolidation and strategic partnerships may help reduce total security costs"
    },
    {
      icon: FiZap,
      title: "Operational Efficiency",
      description: "Expert management frees your team to focus on core business growth activities"
    },
    {
      icon: FiShield,
      title: "Risk Reduction",
      description: "Comprehensive protection designed to help minimize business disruption from security incidents"
    },
    {
      icon: FiTrendingUp,
      title: "Scalable Growth",
      description: "Security infrastructure designed to grow with your business expansion"
    }
  ];

  const serviceTiers = [
    {
      name: "Growth Foundation Security",
      tier: "Tier 1",
      target: "20-50 employees",
      description: "Essential security foundation for establishing protection",
      investment: "$175-225 per user/month",
      features: [
        "Essential endpoint protection",
        "Email security and filtering",
        "Basic monitoring and alerting",
        "Security awareness training",
        "Business hours support",
        "Monthly reporting and reviews"
      ],
      benefits: [
        "Security foundation that supports growth",
        "Reduced IT management burden",
        "Basic compliance support",
        "Cost-effective protection"
      ],
      recommended: false
    },
    {
      name: "Growth Acceleration Security",
      tier: "Tier 2",
      target: "50-200 employees",
      description: "Comprehensive protection for scaling organizations",
      investment: "$275-325 per user/month",
      features: [
        "Advanced threat detection and response",
        "24/7 monitoring and incident response",
        "Vulnerability management program",
        "Compliance automation and support",
        "Security policy development",
        "Weekly reporting and monthly reviews"
      ],
      benefits: [
        "Enterprise-grade protection capabilities",
        "Advanced compliance automation",
        "Strategic security guidance",
        "Operational efficiency gains"
      ],
      recommended: true
    },
    {
      name: "Enterprise Growth Security",
      tier: "Tier 3",
      target: "200+ employees",
      description: "Enterprise-grade security capabilities designed to scale with growing organizations",
      investment: "$375-450 per user/month",
      features: [
        "Premium threat hunting and analysis",
        "Advanced compliance automation",
        "Strategic security consulting",
        "Executive reporting and briefings",
        "Dedicated security team",
        "Real-time monitoring and response"
      ],
      benefits: [
        "Full enterprise security capabilities",
        "Complete compliance automation",
        "Strategic partnership approach",
        "Unlimited growth enablement"
      ],
      recommended: false
    }
  ];

  return (
    <>
      <SEOHead {...seoConfig.managedSecurity} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-light to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 sharp-edges text-sm font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Managed Security Services
                </motion.div>

                <motion.header
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h1 className="text-4xl lg:text-6xl font-bold text-primary-dark leading-tight">
                    Managed Security Services Designed to{' '}
                    <span className="text-primary-blue bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                      Support Your Growth
                    </span>
                  </h1>
                </motion.header>

                <motion.p
                  className="text-xl text-slate-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Transform cybersecurity challenges into competitive opportunities with our strategic approach to managed security services designed to help growing businesses enhance their security posture
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/security-maturity-assessment"
                      className="flex items-center justify-center bg-primary-blue text-white px-8 py-4 sharp-edges font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Start Your Security Assessment
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/roi-calculator"
                      className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 sharp-edges font-semibold text-lg hover:bg-green-700 transition-colors duration-300"
                    >
                      <span>Calculate Security ROI</span>
                      <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://handvantage.co/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 sharp-edges font-semibold text-lg hover:border-primary-blue hover:text-primary-blue transition-colors duration-300"
                    >
                      <span>Contact for Service Guide</span>
                      <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white sharp-edges p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">Why Choose HandVantage?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiAward} className="w-6 h-6 text-primary-blue" />
                      <span className="font-medium">20+ Years Fortune 500 Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-primary-blue" />
                      <span className="font-medium">Business-Aligned Security Strategy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-primary-blue" />
                      <span className="font-medium">Enterprise Pricing for Growing Businesses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiStar} className="w-6 h-6 text-primary-blue" />
                      <span className="font-medium">98% Client Satisfaction Rate</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
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
                Growing Businesses Face Unique Security Challenges
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Traditional security approaches don't work for growing organizations. You need enterprise-grade protection without enterprise complexity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 sharp-edges p-6 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-red-100 sharp-edges flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={challenge.icon} className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">{challenge.title}</h3>
                  <p className="text-slate-600">{challenge.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-4">
                A Strategic Approach to Managed Security
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                HandVantage's business-first methodology transforms security from a cost center into a competitive advantage
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white sharp-edges p-6 shadow-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-blue-100 sharp-edges flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={benefit.icon} className="w-8 h-8 text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-dark mb-3">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiers Section */}
        <section id="service-tiers" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-4">
                Choose Your Security Strategy
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Three comprehensive tiers designed to align with your business growth stage and security requirements
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {serviceTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-white sharp-edges p-8 shadow-lg border-2 ${
                    tier.recommended ? 'border-primary-blue' : 'border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-blue text-white px-4 py-2 sharp-edges text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">{tier.name}</h3>
                    <p className="text-slate-600 mb-2">{tier.target}</p>
                    <p className="text-sm text-slate-500 mb-4">{tier.description}</p>
                    <div className="text-3xl font-bold text-primary-blue">{tier.investment}</div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-3">Core Features:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-dark mb-3">Business Benefits:</h4>
                      <ul className="space-y-2">
                        {tier.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <SafeIcon icon={FiStar} className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <motion.a
                      href="https://handvantage.co/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center px-6 py-3 sharp-edges font-semibold transition-colors duration-300 ${
                        tier.recommended
                          ? 'bg-primary-blue text-white hover:bg-blue-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started with {tier.tier}
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-4">
                Proven Results for Growing Businesses
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Real outcomes from our strategic approach to managed security services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white sharp-edges p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary-blue mb-2">35%</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Cost Reduction</div>
                <p className="text-slate-600">Average security cost savings through vendor consolidation and strategic partnerships</p>
              </motion.div>

              <motion.div
                className="bg-white sharp-edges p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary-blue mb-2">90</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Day Implementation</div>
                <p className="text-slate-600">Typical timeline for complete security transformation with minimal business disruption</p>
              </motion.div>

              <motion.div
                className="bg-white sharp-edges p-8 shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary-blue mb-2">98%</div>
                <div className="text-lg font-semibold text-primary-dark mb-2">Client Satisfaction</div>
                <p className="text-slate-600">Success rate in delivering measurable business outcomes and security improvements</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-purple text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Security Strategy?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Schedule a strategic consultation to discuss how HandVantage can help your growing business achieve its security and growth objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-blue px-8 py-4 sharp-edges font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Strategic Consultation
                </motion.a>
                <motion.a
                  href="tel:+12362350919"
                  className="border-2 border-white text-white px-8 py-4 sharp-edges font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Call: 236-235-0919
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManagedSecurityPage;
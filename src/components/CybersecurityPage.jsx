import React, {useState} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiShield, FiTarget, FiTrendingUp, FiUsers, FiDollarSign, FiZap, FiCheckCircle, FiArrowRight, FiAward, FiClock, FiFileText, FiBarChart, FiLock} = FiIcons;

const CybersecurityPage = () => {
  // Business challenges faced by growing companies
  const businessChallenges = [
    {
      icon: FiUsers,
      title: "Limited Security Expertise",
      description: "Growing businesses lack dedicated security teams and struggle to keep up with evolving threats and compliance requirements"
    },
    {
      icon: FiDollarSign,
      title: "Budget Constraints",
      description: "Enterprise-grade security solutions seem financially out of reach for growing organizations with limited IT budgets"
    },
    {
      icon: FiTrendingUp,
      title: "Rapid Growth Challenges",
      description: "Business expansion often outpaces security capabilities, creating dangerous gaps and operational bottlenecks"
    },
    {
      icon: FiTarget,
      title: "Compliance Requirements",
      description: "Regulatory requirements feel overwhelming without proper expertise, frameworks, and automated monitoring systems"
    }
  ];

  // Strategic approach components
  const strategicApproach = [
    {
      icon: FiShield,
      title: "Business-Aligned Security Strategy",
      description: "Security decisions aligned with business objectives, enabling rather than constraining growth",
      benefits: ["Faster time-to-market", "Reduced operational friction", "Strategic guidance"]
    },
    {
      icon: FiZap,
      title: "Enterprise-Grade Capabilities",
      description: "Premium security tools and expertise delivered at growing business scale and pricing",
      benefits: ["Cost optimization", "Premium support", "Latest technology access"]
    },
    {
      icon: FiAward,
      title: "Proven Implementation Methodology",
      description: "20+ years of Fortune 500 implementation experience applied to growing business environments",
      benefits: ["Faster deployment", "Higher success rates", "Predictable outcomes"]
    },
    {
      icon: FiClock,
      title: "Scalable Security Operations",
      description: "Security capabilities that scale seamlessly with business growth and changing requirements",
      benefits: ["Flexible scaling", "Operational efficiency", "Future-ready architecture"]
    }
  ];

  // Service tiers for growing businesses
  const serviceTiers = [
    {
      name: "Growth Foundation Security",
      target: "20-50 employees",
      description: "Essential security foundation that supports business growth without complexity",
      price: "$175-225",
      features: [
        "Endpoint protection and monitoring",
        "Email security and phishing protection", 
        "Basic vulnerability management",
        "Security awareness training",
        "Monthly reporting and reviews"
      ],
      benefits: [
        "Security foundation that supports growth",
        "Reduced IT burden and complexity",
        "Basic compliance support",
        "Cost-effective protection"
      ],
      recommended: false
    },
    {
      name: "Growth Acceleration Security",
      target: "50-200 employees",
      description: "Comprehensive protection that enables rapid scaling while maintaining security posture",
      price: "$275-325", 
      features: [
        "Advanced threat detection and response",
        "24/7 security monitoring and support",
        "Comprehensive vulnerability management",
        "Compliance framework automation",
        "Strategic security consulting"
      ],
      benefits: [
        "Comprehensive protection with operational efficiency",
        "Advanced compliance and reporting",
        "Strategic security guidance",
        "Scalable security operations"
      ],
      recommended: true
    },
    {
      name: "Enterprise Growth Security", 
      target: "200+ employees",
      description: "Enterprise-grade security that enables unlimited growth and market leadership",
      price: "$375-450",
      features: [
        "Premium threat hunting and intelligence",
        "Advanced compliance automation",
        "Dedicated security team and support",
        "Executive reporting and strategic consulting",
        "Custom security architecture design"
      ],
      benefits: [
        "Enterprise-grade security capabilities",
        "Full compliance automation and reporting",
        "Strategic security partnership",
        "Unlimited growth enablement"
      ],
      recommended: false
    }
  ];

  // Value propositions
  const valueProps = [
    {
      icon: FiDollarSign,
      title: "20-30% Cost Savings",
      description: "Enterprise pricing through strategic vendor partnerships typically reserved for Fortune 500 companies"
    },
    {
      icon: FiZap,
      title: "40-60% Faster Implementation",
      description: "Proven methodologies reduce implementation time while ensuring higher success rates"
    },
    {
      icon: FiTarget,
      title: "98% Client Satisfaction",
      description: "Business-aligned approach delivers measurable results that support growth objectives"
    },
    {
      icon: FiShield,
      title: "99.9% Uptime SLA",
      description: "Enterprise-grade reliability and availability that your business can depend on"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-primary-dark mb-6">
                Strategic Cybersecurity for 
                <span className="text-primary-blue"> Growing Businesses</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Transform cybersecurity from a business constraint into a competitive advantage with our business-aligned approach to enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/security-assessment"
                    className="bg-primary-blue text-white px-8 py-4 sharp-edges font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                  >
                    Start Your Security Assessment
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/services/managed-security"
                    className="border-2 border-primary-blue text-primary-blue px-8 py-4 sharp-edges font-semibold text-lg hover:bg-primary-blue hover:text-white transition-colors duration-300 text-center"
                  >
                    Explore Managed Services
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white sharp-edges p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">Strategic Advantages</h3>
                <div className="space-y-4">
                  {valueProps.map((prop, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <SafeIcon icon={prop.icon} className="w-6 h-6 text-primary-blue" />
                      <div>
                        <span className="font-semibold text-primary-dark">{prop.title}</span>
                        <p className="text-sm text-slate-600">{prop.description}</p>
                      </div>
                    </div>
                  ))}
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
            {businessChallenges.map((challenge, index) => (
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

      {/* Strategic Approach Section */}
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
              A Strategic Approach to Cybersecurity
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              HandVantage's business-first methodology transforms security from a cost center into a competitive advantage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategicApproach.map((approach, index) => (
              <motion.div
                key={index}
                className="bg-white sharp-edges p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 sharp-edges flex items-center justify-center mr-4">
                    <SafeIcon icon={approach.icon} className="w-6 h-6 text-primary-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-dark">{approach.title}</h3>
                </div>
                <p className="text-slate-600 mb-4">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers Section */}
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
              Security Services That Scale With Your Growth
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the security tier that aligns with your business size and growth objectives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`bg-white sharp-edges p-8 shadow-lg border-2 ${
                  tier.recommended 
                    ? 'border-primary-blue relative' 
                    : 'border-gray-200'
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
                  <p className="text-slate-600 mb-4">{tier.target}</p>
                  <div className="text-3xl font-bold text-primary-blue mb-2">
                    {tier.price}
                    <span className="text-sm text-slate-600 font-normal">/user/month</span>
                  </div>
                  <p className="text-slate-600">{tier.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-primary-dark">Core Features:</h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-primary-dark">Business Benefits:</h4>
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-slate-600">
                      <SafeIcon icon={FiTarget} className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/security-assessment"
                    className={`w-full py-3 sharp-edges font-semibold text-center transition-colors duration-300 flex items-center justify-center ${
                      tier.recommended
                        ? 'bg-primary-blue text-white hover:bg-blue-700'
                        : 'border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white'
                    }`}
                  >
                    <span>Get Assessment</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
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
              Ready to Transform Your Security Strategy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our business-aligned approach can eliminate security bottlenecks and enable sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/security-assessment"
                  className="bg-white text-primary-blue px-8 py-4 sharp-edges font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  <span>Start Security Assessment</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 sharp-edges font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors duration-300 inline-flex items-center"
                >
                  <span>Schedule Consultation</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
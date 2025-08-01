import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';

const { FiZap, FiShield, FiCloud, FiBot, FiCheck, FiArrowRight } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiZap,
      title: 'Digital Transformation',
      description: 'Strategic consulting and process automation with RTILA AI',
      features: ['Strategic planning', 'Process automation', 'Change management'],
      buttonText: 'Transform Now',
      buttonLink: '/services/digital-transformation',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary-blue',
      buttonBg: 'bg-primary-blue'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Complete protection with enterprise-grade partnerships',
      features: ['Email security (IRONSCALES)', 'Network protection (Check Point)', 'Device management (Swif.ai)'],
      buttonText: 'Secure Now',
      buttonLink: '/services/cybersecurity',
      color: 'red',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-primary-warning',
      buttonBg: 'bg-primary-warning'
    },
    {
      icon: FiCloud,
      title: 'Cloud Infrastructure',
      description: 'Microsoft CSP + Pax8 marketplace solutions',
      features: ['Microsoft 365 & Azure', 'Pax8 marketplace', 'Unified communications'],
      buttonText: 'Optimize Now',
      buttonLink: '/services/cloud-infrastructure',
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-primary-success',
      buttonBg: 'bg-primary-success'
    },
    {
      icon: FiBot,
      title: 'Business Automation',
      description: 'AI-powered process automation with RTILA AI',
      features: ['Workflow automation', 'AI agent development', 'Revenue optimization'],
      buttonText: 'Automate Now',
      buttonLink: '/services/business-automation',
      color: 'purple',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-primary-purple',
      buttonBg: 'bg-primary-purple'
    }
  ];

  const assessments = [
    {
      icon: FiZap,
      title: 'Digital Transformation Assessment',
      description: 'Comprehensive 20-question evaluation across 4 key areas',
      features: ['Technology readiness', 'Process automation', 'Growth potential'],
      buttonText: 'Start Assessment',
      buttonLink: '/assessment',
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary-blue',
      buttonBg: 'bg-primary-blue'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Risk Assessment',
      description: 'Detailed 25-question security evaluation across 5 domains',
      features: ['Email security', 'Network protection', 'Compliance status'],
      buttonText: 'Start Security Assessment',
      buttonLink: '/security-assessment',
      color: 'red',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-primary-warning',
      buttonBg: 'bg-primary-warning'
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-primary-dark mb-4">
            Complete Service Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything your business needs to thrive in the digital age
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={service.icon} className={`w-8 h-8 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-success mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={service.buttonLink}
                  className={`w-full ${service.buttonBg} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <span>{service.buttonText}</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Assessments Section */}
        <motion.div
          id="assessments"
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary-dark mb-4">
            Free Business Assessments
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get detailed insights into your business readiness with our comprehensive assessments
          </p>
        </motion.div>

        {/* Assessments Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {assessments.map((assessment, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${assessment.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <SafeIcon icon={assessment.icon} className={`w-8 h-8 ${assessment.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {assessment.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-4">
                {assessment.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {assessment.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-success mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={assessment.buttonLink}
                  className={`w-full ${assessment.buttonBg} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                >
                  <span>{assessment.buttonText}</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
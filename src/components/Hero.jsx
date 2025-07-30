import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCloud, FiShield, FiMail, FiCpu, FiPhone, FiUser } = FiIcons;

const Hero = () => {
  const partnerships = [
    { name: 'Microsoft CSP', icon: FiCloud },
    { name: 'Check Point', icon: FiShield },
    { name: 'IRONSCALES', icon: FiMail },
    { name: 'RTILA AI', icon: FiCpu }
  ];

  const credentials = [
    'Former AWS Consultant',
    'Former Oracle Consultant',
    'Former Amazon Consultant'
  ];

  return (
    <section className="pt-20 bg-gradient-to-br from-primary-light to-blue-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Digital Transformation Expert
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-dark leading-tight">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">
                  Enterprise-Grade Technology
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-xl text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Digital transformation, cybersecurity, and automation solutions powered by industry-leading partnerships
            </motion.p>

            {/* Josh's Credentials */}
            <motion.div
              className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-primary-purple rounded-full flex items-center justify-center">
                <SafeIcon icon={FiUser} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-dark">Led by Josh Olayemi</h3>
                <p className="text-slate-600">VP of Digital Transformation • 20+ years experience</p>
              </div>
            </motion.div>

            {/* Experience Badges */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {credentials.map((credential, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border"
                >
                  {credential}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#contact"
                className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Digital Transformation Assessment
              </motion.a>
              <motion.a
                href="tel:+12362350919"
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-primary-blue hover:text-primary-blue transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call: 236-235-0919</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Partnership Showcase */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary-blue to-primary-purple rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Partnership Ecosystem</h3>
              <div className="grid grid-cols-2 gap-4">
                {partnerships.map((partner, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <SafeIcon icon={partner.icon} className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{partner.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
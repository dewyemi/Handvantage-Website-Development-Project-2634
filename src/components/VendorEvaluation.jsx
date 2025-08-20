import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckSquare, FiBarChart, FiArrowRight } = FiIcons;

const VendorEvaluation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Security Vendor Evaluation Matrix
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Systematic vendor comparison tool for evaluating cybersecurity solutions without bias
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-2xl p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SafeIcon icon={FiCheckSquare} className="w-20 h-20 text-primary-blue mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Coming Soon!
          </h2>
          <p className="text-slate-600 mb-8">
            Our vendor-agnostic evaluation matrix is being developed to help you systematically 
            compare cybersecurity solutions based on your specific business needs and requirements.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center text-slate-600">
              <SafeIcon icon={FiCheckSquare} className="w-5 h-5 mr-2" />
              <span>Weighted scoring system</span>
            </div>
            <div className="flex items-center justify-center text-slate-600">
              <SafeIcon icon={FiBarChart} className="w-5 h-5 mr-2" />
              <span>Business alignment criteria</span>
            </div>
            <div className="flex items-center justify-center text-slate-600">
              <SafeIcon icon={FiCheckSquare} className="w-5 h-5 mr-2" />
              <span>Objective vendor comparison</span>
            </div>
          </div>

          <motion.a
            href="https://handvantage.co/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Expert Vendor Evaluation Guidance</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorEvaluation;
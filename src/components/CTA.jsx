import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiPhone} = FiIcons;

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary-blue to-primary-purple text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          viewport={{once: true}}
        >
          {/* Headline */}
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
          >
            Ready to Eliminate Your Growth Bottlenecks?
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            viewport={{once: true}}
          >
            Get your free growth bottleneck assessment and discover how our strategic partnership approach can create sustainable competitive advantages
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            viewport={{once: true}}
          >
            <motion.a 
              href="https://handvantage.co/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              Schedule Strategic Consultation
            </motion.a>
            <motion.a 
              href="tel:+12362350919"
              className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-blue transition-colors duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Strategic Consultation: 236-235-0919</span>
            </motion.a>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.p 
            className="text-blue-100 text-lg"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
            viewport={{once: true}}
          >
            30-minute strategic consultation • No obligation • Immediate business insights
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section id="contact" className="py-section bg-gradient-to-r from-viability-primary to-factory-500 text-white">
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
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
          >
            Are You Viable?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            viewport={{once: true}}
          >
            We built a 3-minute diagnostic to measure your "Friction Gap."
            It tells you if you are over-spending on tools or under-investing in speed.
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-10 font-semibold"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            viewport={{once: true}}
          >
            No Sales Call Required. Just data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
            viewport={{once: true}}
          >
            {/* Primary CTA */}
            <motion.a
              href="https://secvantages.com/DualSqueezeIntro"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-viability-primary bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-white/30 transition-all duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <span className="relative z-10">Run Diagnostic</span>
            </motion.a>

            {/* Secondary CTA */}
            <Link to="/manifesto">
              <motion.div
                className="inline-flex items-center justify-center px-10 py-5 font-semibold text-lg text-white bg-transparent border-2 border-white/40 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Read the Manifesto
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.p
            className="text-white/80 text-lg"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}
            viewport={{once: true}}
          >
            3-minute assessment • No obligation • Immediate insights
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
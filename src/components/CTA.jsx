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
            className="text-5xl lg:text-7xl font-black mb-6 tracking-tight"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.2}}
            viewport={{once: true}}
          >
            Let's Land the Plane.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            viewport={{once: true}}
          >
            You are one conversation away from a <span className="font-semibold">secure, automated future</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
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
              className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-xl text-viability-primary bg-white sharp-edges overflow-hidden shadow-2xl hover:shadow-white/40 transition-all duration-300"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
            >
              <span className="relative z-10">Book My Strategy Session</span>
            </motion.a>

            {/* Secondary CTA */}
            <Link to="/manifesto">
              <motion.div
                className="inline-flex items-center justify-center px-10 py-6 font-semibold text-lg text-white bg-transparent border-2 border-white/50 backdrop-blur-sm sharp-edges hover:bg-white/20 hover:border-white transition-all duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Read The Doctrine
              </motion.div>
            </Link>
          </motion.div>

          {/* No-Pressure Promise */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 sharp-edges p-8 max-w-2xl mx-auto"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.6}}
            viewport={{once: true}}
          >
            <h3 className="text-2xl font-bold text-white mb-3">This is a Strategy Session, Not a Sales Pitch.</h3>
            <p className="text-white/90 text-lg leading-relaxed">
              You will speak directly with a Senior Engineer, not a salesperson. We will look at your current stack, identify your gaps, and give you a roadmap. Even if you don't hire us, you'll leave with a plan.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import FortressIcon from './svg/FortressIcon';
import FactoryIcon from './svg/FactoryIcon';

const {FiShield, FiZap, FiAlertTriangle} = FiIcons;

const ProblemSolution = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const fortressPressures = [
    'Regulators, Insurance, Clients demanding more locks, more gates, more friction',
    'MFA prompts and VPN logins slow work to a crawl',
    'Security fatigue leads to shadow IT and bypassed controls'
  ];

  const factoryPressures = [
    'The Board, Market, Competitors demand speed, lower costs, faster shipping',
    'Security steps get skipped to meet deadlines',
    'One breach wipes out 5 years of profit'
  ];

  // Parallax effects for cards
  const fortressY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const factoryY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} id="dual-squeeze" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-900/20 to-transparent"
          style={{y: fortressY}}
        />
        <motion.div
          className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-cyan-900/20 to-transparent"
          style={{y: factoryY}}
        />
      </div>

      {/* Animated divider line */}
      <motion.div
        className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-viability-primary to-transparent"
        initial={{scaleY: 0}}
        whileInView={{scaleY: 1}}
        transition={{duration: 1.5, delay: 0.5}}
        viewport={{once: true}}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Two Forces Killing Your Margins
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            You don't need "Better Security." You need <span className="text-viability-glow font-semibold">Viability Engineering</span>.
          </p>
        </motion.div>

        {/* Split-Screen Layout with 3D depth */}
        <div className="grid lg:grid-cols-2 gap-0 max-w-6xl mx-auto mb-16 perspective-1000">
          {/* The Fortress - Left Side */}
          <motion.div
            className="relative group"
            initial={{opacity: 0, x: -100, rotateY: 10}}
            whileInView={{opacity: 1, x: 0, rotateY: 0}}
            transition={{duration: 1, type: "spring", stiffness: 50}}
            viewport={{once: true}}
            style={{y: fortressY}}
          >
            {/* Enhanced 3D depth layers */}
            <div className="absolute -inset-6 bg-blue-500/20 rounded-3xl blur-3xl group-hover:bg-blue-500/40 transition duration-500" />
            <div className="absolute -inset-3 bg-blue-600/30 rounded-3xl blur-xl group-hover:bg-blue-600/50 transition duration-500" />

            <div className="relative bg-gradient-to-br from-blue-900/90 to-blue-800/90 p-8 md:p-12 border-r-2 border-viability-primary/50 backdrop-blur-sm min-h-[600px] flex flex-col shadow-2xl">
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-400/50 rounded-tl-2xl"
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.5}}
                viewport={{once: true}}
              />

              {/* Enhanced icon with SVG illustration */}
              <div className="text-center mb-8">
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  initial={{scale: 0, rotate: -20}}
                  whileInView={{scale: 1, rotate: 0}}
                  transition={{delay: 0.2, type: "spring", stiffness: 100}}
                  viewport={{once: true}}
                  whileHover={{scale: 1.1, rotate: 5}}
                >
                  <div className="absolute inset-0 bg-blue-500/40 rounded-full blur-2xl" />
                  <FortressIcon className="relative w-full h-full" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">The Fortress</h3>
                <p className="text-blue-200 text-xl font-bold tracking-wide">Pressure to be SECURE</p>
              </div>

              {/* Content with staggered animation */}
              <ul className="space-y-5 flex-grow">
                {fortressPressures.map((pressure, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 text-blue-100 group/item"
                    initial={{opacity: 0, x: -30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.3 + index * 0.15}}
                    viewport={{once: true}}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400/20 blur-md rounded-full" />
                      <SafeIcon icon={FiAlertTriangle} className="relative w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    </div>
                    <span className="leading-relaxed text-lg">{pressure}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Cost Label with emphasis */}
              <motion.div
                className="mt-8 pt-6 border-t border-blue-700/50"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.8}}
                viewport={{once: true}}
              >
                <p className="text-blue-300 font-bold text-lg">
                  <span className="text-blue-400 text-xl">The Cost:</span> Security Fatigue leads to shadow IT and bypassed controls.
                </p>
              </motion.div>

              {/* Animated bottom accent */}
              <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-400/50 rounded-br-2xl"
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.6}}
                viewport={{once: true}}
              />
            </div>
          </motion.div>

          {/* The Factory - Right Side */}
          <motion.div
            className="relative group"
            initial={{opacity: 0, x: 100, rotateY: -10}}
            whileInView={{opacity: 1, x: 0, rotateY: 0}}
            transition={{duration: 1, type: "spring", stiffness: 50}}
            viewport={{once: true}}
            style={{y: factoryY}}
          >
            {/* Enhanced 3D depth layers */}
            <div className="absolute -inset-6 bg-cyan-500/20 rounded-3xl blur-3xl group-hover:bg-cyan-500/40 transition duration-500" />
            <div className="absolute -inset-3 bg-amber-500/30 rounded-3xl blur-xl group-hover:bg-amber-500/50 transition duration-500" />

            <div className="relative bg-gradient-to-br from-cyan-900/90 to-amber-900/90 p-8 md:p-12 backdrop-blur-sm min-h-[600px] flex flex-col shadow-2xl">
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-2xl"
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.5}}
                viewport={{once: true}}
              />

              {/* Enhanced icon with SVG illustration */}
              <div className="text-center mb-8">
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-6"
                  initial={{scale: 0, rotate: 20}}
                  whileInView={{scale: 1, rotate: 0}}
                  transition={{delay: 0.2, type: "spring", stiffness: 100}}
                  viewport={{once: true}}
                  whileHover={{scale: 1.1, rotate: -5}}
                >
                  <div className="absolute inset-0 bg-cyan-500/40 rounded-full blur-2xl" />
                  <FactoryIcon className="relative w-full h-full" />
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-2">The Factory</h3>
                <p className="text-cyan-200 text-xl font-bold tracking-wide">Pressure to be FAST</p>
              </div>

              {/* Content with staggered animation */}
              <ul className="space-y-5 flex-grow">
                {factoryPressures.map((pressure, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-4 text-cyan-100 group/item"
                    initial={{opacity: 0, x: 30}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.3 + index * 0.15}}
                    viewport={{once: true}}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full" />
                      <SafeIcon icon={FiAlertTriangle} className="relative w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                    </div>
                    <span className="leading-relaxed text-lg">{pressure}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Cost Label with emphasis */}
              <motion.div
                className="mt-8 pt-6 border-t border-cyan-700/50"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.8}}
                viewport={{once: true}}
              >
                <p className="text-cyan-300 font-bold text-lg">
                  <span className="text-amber-400 text-xl">The Cost:</span> One breach wipes out 5 years of profit. The balance is broken.
                </p>
              </motion.div>

              {/* Animated bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-400/50 rounded-bl-2xl"
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{delay: 0.6}}
                viewport={{once: true}}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-16"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
        >
          <p className="text-3xl md:text-4xl font-bold text-slate-300 italic max-w-4xl mx-auto">
            "This is the <span className="text-viability-glow">Dual Squeeze</span>. And it is killing your margins."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
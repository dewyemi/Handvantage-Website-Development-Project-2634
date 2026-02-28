import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import DecorativeCircuit from './svg/DecorativeCircuit';

const { FiTrendingDown, FiTrendingUp, FiClock, FiDollarSign, FiShield } = FiIcons;

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const isPercentage = value.includes('%');
    const isDollar = value.includes('$');
    const numericValue = parseInt(value.replace(/[^0-9-]/g, ''));

    let startValue = 0;
    const increment = numericValue / (duration * 60);

    const timer = setInterval(() => {
      startValue += increment;
      if ((increment > 0 && startValue >= numericValue) || (increment < 0 && startValue <= numericValue)) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formatValue = (num) => {
    if (value.includes('%')) return `${num}%`;
    if (value.includes('$')) return `$${num}`;
    if (value.includes('+')) return `${num >= 0 ? '+' : ''}${num.toLocaleString()}+`;
    return num.toLocaleString();
  };

  return <span ref={ref}>{formatValue(count)}</span>;
};

const ProofSection = () => {
  const metrics = [
    {
      icon: FiDollarSign,
      value: '$180k/yr',
      label: 'Headcount Saved',
      subtitle: '(Per Client)',
      color: 'text-green-400'
    },
    {
      icon: FiTrendingDown,
      value: '30%',
      label: 'SaaS Waste Cut',
      subtitle: '(Per Stack)',
      color: 'text-red-400'
    },
    {
      icon: FiClock,
      value: '15 Min',
      label: 'Response Time',
      subtitle: '(Guaranteed)',
      color: 'text-blue-400'
    },
    {
      icon: FiShield,
      value: '100%',
      label: 'Sleep Restored',
      subtitle: '(For IT Directors)',
      color: 'text-viability-glow'
    }
  ];

  return (
    <section id="proof" className="relative py-section bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative circuit patterns */}
      <div className="absolute top-10 left-10 w-64 h-64 opacity-20 pointer-events-none">
        <DecorativeCircuit variant="viability" />
      </div>
      <div className="absolute bottom-10 right-10 w-64 h-64 opacity-20 pointer-events-none">
        <DecorativeCircuit variant="factory" />
      </div>

      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-viability-primary/20 sharp-edges blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-factory-500/20 sharp-edges blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-viability-primary font-mono text-sm uppercase tracking-widest mb-6">
            THE $180K PROBLEM
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-primary-dark mb-6 tracking-tight">
            The Math Doesn't Lie.
          </h2>
          <p className="text-2xl text-slate-600 font-semibold max-w-3xl mx-auto">
            Why hire one "Security Guy" when you can have an entire army?
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="max-w-6xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Internal Hire Column */}
            <div className="bg-white border-2 border-red-200 sharp-edges p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide sharp-edges">
                Old Way
              </div>
              <h3 className="text-3xl font-black text-red-600 mb-8 mt-4">The "Internal Hire"</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Cost</p>
                  <p className="text-2xl font-bold text-slate-800">$180,000/year</p>
                  <p className="text-sm text-slate-500">(Salary + Benefits)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Availability</p>
                  <p className="text-2xl font-bold text-slate-800">9-to-5, Mon-Fri</p>
                  <p className="text-sm text-slate-500">(40 hours/week)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Skillset</p>
                  <p className="text-2xl font-bold text-slate-800">Generalist</p>
                  <p className="text-sm text-slate-500">(Jack of all trades)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wide mb-1">Outcome</p>
                  <p className="text-2xl font-bold text-red-600">Burns out in 6 months.</p>
                </div>
              </div>
            </div>

            {/* Handvantage Column */}
            <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-2 border-emerald-400 sharp-edges p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-6 py-2 text-sm font-bold uppercase tracking-wide sharp-edges">
                New Way
              </div>
              <h3 className="text-3xl font-black text-emerald-600 mb-8 mt-4">The Handvantage Partner</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-1">Cost</p>
                  <p className="text-2xl font-bold text-emerald-600">Fraction of the price.</p>
                  <p className="text-sm text-slate-600">(Starting at $3,500/mo)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-1">Availability</p>
                  <p className="text-2xl font-bold text-emerald-600">24/7/365</p>
                  <p className="text-sm text-slate-600">(8,760 hours/year)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-1">Skillset</p>
                  <p className="text-2xl font-bold text-emerald-600">Specialist Platoon</p>
                  <p className="text-sm text-slate-600">(SOC, Automation, Compliance)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mb-1">Outcome</p>
                  <p className="text-2xl font-bold text-emerald-600">Gets smarter every single day.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Card with 3D depth */}
        <motion.div
          className="max-w-4xl mx-auto mb-20 perspective-1000"
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Glow effect layer */}
            <div className="absolute -inset-1 bg-gradient-to-r from-viability-primary via-factory-500 to-viability-glow sharp-edges blur-xl opacity-20 group-hover:opacity-40 transition duration-1000" />

            {/* Card content */}
            <div className="relative bg-gradient-to-br from-slate-50 to-white sharp-edges p-12 border border-slate-200 shadow-2xl backdrop-blur-sm">
              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic mb-8 leading-relaxed">
                "Handvantage replaced our need for a $180k CISO hire and cut our SaaS bill by 20%. The service literally paid for itself in Month 4."
              </blockquote>

              {/* Attribution */}
              <cite className="flex items-center gap-4 not-italic">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-viability-primary to-factory-500 sharp-edges blur-md opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-br from-viability-primary/80 to-factory-500/80 sharp-edges flex items-center justify-center">
                    <span className="text-xl font-black text-white">CG</span>
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary-dark">Chief Financial Officer</div>
                  <div className="text-slate-500 text-sm">Series B SaaS Company • $40M ARR</div>
                  <div className="text-slate-400 text-xs mt-1">Name withheld by request</div>
                </div>
              </cite>
            </div>
          </div>
        </motion.div>

        {/* Metrics Grid with gradient bleeding */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting gradient lines between metrics */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-viability-primary/30 to-transparent hidden md:block" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="relative text-center group"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-viability-primary/10 via-viability-primary/20 to-factory-500/20 sharp-edges blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="absolute -inset-4 bg-gradient-to-b from-viability-glow/0 via-viability-glow/10 to-factory-400/10 sharp-edges blur-3xl opacity-0 group-hover:opacity-80 transition duration-700" />

                {/* Icon with depth */}
                <motion.div
                  className="relative w-20 h-20 mx-auto mb-6"
                  whileHover={{ scale: 1.15, rotate: 8, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Icon shadow/glow */}
                  <div className={`absolute inset-0 sharp-edges blur-md opacity-30 ${metric.color.replace('text-', 'bg-')}`} />

                  {/* Enhanced icon container */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white to-slate-100 sharp-edges flex items-center justify-center border-2 border-slate-200 shadow-lg group-hover:shadow-2xl group-hover:border-viability-primary/40 transition-all duration-300">
                    <SafeIcon icon={metric.icon} className={`w-9 h-9 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  {/* Animated ring on hover */}
                  <motion.div
                    className="absolute inset-0 sharp-edges border-2 border-viability-primary/30"
                    initial={{ scale: 1, opacity: 0 }}
                    whileHover={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Animated Value with counter */}
                <motion.div
                  className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-factory-500 via-viability-primary to-viability-glow bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter value={metric.value} duration={2} />
                </motion.div>

                {/* Label with shine effect */}
                <div className="relative">
                  <div className="text-slate-600 font-semibold tracking-wide">
                    {metric.label}
                  </div>

                  {/* Subtitle (if exists) */}
                  {metric.subtitle && (
                    <motion.div
                      className="text-sm text-slate-500 mt-2 font-medium"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {metric.subtitle}
                    </motion.div>
                  )}
                </div>

                {/* Particle effect on hover */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-1 h-1 bg-viability-glow sharp-edges"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;

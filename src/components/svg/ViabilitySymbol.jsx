import React from 'react';
import { motion } from 'framer-motion';

const ViabilitySymbol = ({ className = "w-full h-full" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="viabilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="viabilityGlow">
          <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central glow */}
      <motion.circle
        cx="100"
        cy="100"
        r="70"
        fill="url(#viabilityGlow)"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Interlocking circles representing balance */}
      {/* Blue circle (Fortress) */}
      <motion.circle
        cx="80"
        cy="100"
        r="35"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="4"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Cyan circle (Factory) */}
      <motion.circle
        cx="120"
        cy="100"
        r="35"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="4"
        opacity="0.6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      />

      {/* Viability intersection - where they overlap */}
      <motion.path
        d="M100 65 Q90 100 100 135 Q110 100 100 65 Z"
        fill="url(#viabilityGradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
      />

      {/* Central equilibrium point */}
      <motion.circle
        cx="100"
        cy="100"
        r="8"
        fill="#c084fc"
        initial={{ scale: 0 }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />

      {/* Orbiting particles representing dynamic balance */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="100"
          r="3"
          fill={i % 2 === 0 ? "#3b82f6" : "#06b6d4"}
          animate={{
            x: [
              50 * Math.cos((i * 90 * Math.PI) / 180),
              50 * Math.cos(((i * 90 + 360) * Math.PI) / 180)
            ],
            y: [
              50 * Math.sin((i * 90 * Math.PI) / 180),
              50 * Math.sin(((i * 90 + 360) * Math.PI) / 180)
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Balance scales representation */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {/* Left scale (Fortress) */}
        <path
          d="M60 120 L70 140 L50 140 Z"
          fill="#3b82f6"
          opacity="0.5"
        />
        {/* Right scale (Factory) */}
        <path
          d="M140 120 L150 140 L130 140 Z"
          fill="#06b6d4"
          opacity="0.5"
        />
        {/* Center beam */}
        <line
          x1="60"
          y1="120"
          x2="140"
          y2="120"
          stroke="#8b5cf6"
          strokeWidth="3"
        />
        {/* Fulcrum */}
        <path
          d="M95 130 L100 120 L105 130 Z"
          fill="#c084fc"
        />
      </motion.g>

      {/* Connecting energy lines */}
      <motion.g
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = 100 + Math.cos(angle) * 60;
          const y = 100 + Math.sin(angle) * 60;
          return (
            <motion.line
              key={i}
              x1="100"
              y1="100"
              x2={x}
              y2={y}
              stroke="#a78bfa"
              strokeWidth="1"
              strokeDasharray="5 3"
              animate={{
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          );
        })}
      </motion.g>
    </svg>
  );
};

export default ViabilitySymbol;

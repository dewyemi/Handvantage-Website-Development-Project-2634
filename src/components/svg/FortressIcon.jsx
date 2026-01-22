import React from 'react';
import { motion } from 'framer-motion';

const FortressIcon = ({ className = "w-full h-full" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shield base with gradient */}
      <defs>
        <linearGradient id="fortressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="fortressGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Outer glow circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="85"
        fill="url(#fortressGlow)"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{
          scale: [0.8, 1, 0.8],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main shield shape */}
      <motion.path
        d="M100 20 L160 50 L160 100 Q160 150 100 180 Q40 150 40 100 L40 50 Z"
        fill="url(#fortressGradient)"
        stroke="#60a5fa"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Lock icon in center */}
      <g transform="translate(100, 95)">
        {/* Lock body */}
        <motion.rect
          x="-15"
          y="0"
          width="30"
          height="35"
          rx="4"
          fill="#60a5fa"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        {/* Lock shackle */}
        <motion.path
          d="M -12 0 L -12 -15 Q -12 -25 0 -25 Q 12 -25 12 -15 L 12 0"
          stroke="#93c5fd"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        {/* Keyhole */}
        <motion.circle
          cx="0"
          cy="12"
          r="4"
          fill="#1e40af"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        />
        <motion.rect
          x="-1.5"
          y="14"
          width="3"
          height="8"
          fill="#1e40af"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.2, duration: 0.3 }}
        />
      </g>

      {/* Decorative fortress walls */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {/* Top battlements */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            x={55 + i * 20}
            y="35"
            width="12"
            height="8"
            fill="#60a5fa"
            opacity="0.6"
          />
        ))}
      </motion.g>

      {/* Animated particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={i}
          cx={70 + i * 20}
          cy={140 + (i % 2) * 10}
          r="2"
          fill="#93c5fd"
          animate={{
            y: [-5, -15, -5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </svg>
  );
};

export default FortressIcon;

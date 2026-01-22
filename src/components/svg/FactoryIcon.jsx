import React from 'react';
import { motion } from 'framer-motion';

const FactoryIcon = ({ className = "w-full h-full" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="factoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Outer energy ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="url(#factoryGradient)"
        strokeWidth="3"
        strokeDasharray="10 5"
        initial={{ rotate: 0, opacity: 0.3 }}
        animate={{
          rotate: 360,
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Lightning bolt / speed symbol */}
      <motion.path
        d="M110 30 L70 100 L95 100 L85 170 L140 85 L110 85 Z"
        fill="url(#speedGradient)"
        stroke="#fbbf24"
        strokeWidth="2"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Gear/cog representing automation */}
      <motion.g
        transform="translate(100, 100)"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i * 60 * Math.PI) / 180;
          const x = Math.cos(angle) * 45;
          const y = Math.sin(angle) * 45;
          return (
            <motion.rect
              key={i}
              x={x - 4}
              y={y - 8}
              width="8"
              height="16"
              rx="2"
              fill="#22d3ee"
              opacity="0.6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
            />
          );
        })}

        {/* Inner gear circle */}
        <circle cx="0" cy="0" r="25" fill="#06b6d4" opacity="0.8" />
        <circle cx="0" cy="0" r="12" fill="#0e7490" />
      </motion.g>

      {/* Speed lines */}
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="20"
          y1={60 + i * 30}
          x2="50"
          y2={60 + i * 30}
          stroke="#67e8f9"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ x1: 20, x2: 20 }}
          animate={{ x1: [20, 15], x2: [20, 50] }}
          transition={{
            duration: 1,
            delay: 1.5 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
      ))}

      {/* Data flow particles */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="100"
          r="3"
          fill="#22d3ee"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 1, 0],
            x: [0, 60 * Math.cos((i * 72 * Math.PI) / 180)],
            y: [0, 60 * Math.sin((i * 72 * Math.PI) / 180)],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.4,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Circuit pattern */}
      <motion.g
        opacity="0.3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <path
          d="M150 130 L170 130 L170 150"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="170" cy="130" r="3" fill="#22d3ee" />
        <path
          d="M50 70 L30 70 L30 50"
          stroke="#06b6d4"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="30" cy="70" r="3" fill="#22d3ee" />
      </motion.g>
    </svg>
  );
};

export default FactoryIcon;

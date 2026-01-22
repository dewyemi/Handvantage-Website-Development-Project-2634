import React from 'react';
import { motion } from 'framer-motion';

const DecorativeCircuit = ({ className = "w-full h-full", variant = "viability" }) => {
  const colors = {
    viability: {
      primary: "#8b5cf6",
      secondary: "#a78bfa",
      accent: "#c084fc"
    },
    factory: {
      primary: "#06b6d4",
      secondary: "#22d3ee",
      accent: "#67e8f9"
    },
    fortress: {
      primary: "#3b82f6",
      secondary: "#60a5fa",
      accent: "#93c5fd"
    }
  };

  const color = colors[variant];

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`circuitGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.primary} stopOpacity="0.6" />
          <stop offset="50%" stopColor={color.secondary} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color.accent} stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Circuit paths */}
      <g opacity="0.4">
        {/* Horizontal lines */}
        <motion.path
          d="M50 100 L150 100 L150 50 L250 50"
          stroke={color.primary}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M350 150 L250 150 L250 200 L150 200"
          stroke={color.secondary}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 300 L150 300 L150 350 L350 350"
          stroke={color.accent}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
        />

        {/* Vertical connectors */}
        <motion.path
          d="M200 50 L200 150"
          stroke={color.primary}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.path
          d="M300 200 L300 300"
          stroke={color.secondary}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />
      </g>

      {/* Circuit nodes */}
      {[
        { x: 50, y: 100 }, { x: 150, y: 100 }, { x: 150, y: 50 }, { x: 250, y: 50 },
        { x: 350, y: 150 }, { x: 250, y: 150 }, { x: 250, y: 200 }, { x: 150, y: 200 },
        { x: 50, y: 300 }, { x: 150, y: 300 }, { x: 150, y: 350 }, { x: 350, y: 350 },
        { x: 200, y: 50 }, { x: 200, y: 150 }, { x: 300, y: 200 }, { x: 300, y: 300 }
      ].map((node, i) => (
        <motion.g key={i}>
          {/* Node glow */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="8"
            fill={color.accent}
            opacity="0"
            animate={{
              opacity: [0, 0.4, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              delay: i * 0.15,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
          {/* Node core */}
          <motion.circle
            cx={node.x}
            cy={node.y}
            r="4"
            fill={i % 3 === 0 ? color.primary : i % 3 === 1 ? color.secondary : color.accent}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          />
        </motion.g>
      ))}

      {/* Data flow particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`flow-${i}`}
          cx="50"
          cy={100 + i * 80}
          r="3"
          fill={color.accent}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [0, 100, 200, 300],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Chip/processor icons */}
      {[
        { x: 100, y: 75 },
        { x: 200, y: 175 },
        { x: 300, y: 275 }
      ].map((chip, i) => (
        <motion.g
          key={`chip-${i}`}
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 1 + i * 0.2, type: "spring" }}
        >
          <rect
            x={chip.x - 15}
            y={chip.y - 15}
            width="30"
            height="30"
            rx="2"
            fill="none"
            stroke={color.secondary}
            strokeWidth="2"
            opacity="0.5"
          />
          <rect
            x={chip.x - 8}
            y={chip.y - 8}
            width="16"
            height="16"
            fill={color.primary}
            opacity="0.3"
          />
          {/* Chip pins */}
          {[0, 1, 2, 3].map((pin) => (
            <React.Fragment key={pin}>
              <line
                x1={chip.x - 15}
                y1={chip.y - 10 + pin * 7}
                x2={chip.x - 20}
                y2={chip.y - 10 + pin * 7}
                stroke={color.accent}
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1={chip.x + 15}
                y1={chip.y - 10 + pin * 7}
                x2={chip.x + 20}
                y2={chip.y - 10 + pin * 7}
                stroke={color.accent}
                strokeWidth="1"
                opacity="0.6"
              />
            </React.Fragment>
          ))}
        </motion.g>
      ))}
    </svg>
  );
};

export default DecorativeCircuit;

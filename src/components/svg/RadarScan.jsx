import React from 'react';
import { motion } from 'framer-motion';

const RadarScan = ({ className = "w-full h-full", variant = "security" }) => {
  const colors = {
    security: {
      primary: "#3b82f6",
      secondary: "#60a5fa",
      accent: "#93c5fd"
    },
    automation: {
      primary: "#06b6d4",
      secondary: "#22d3ee",
      accent: "#67e8f9"
    },
    threat: {
      primary: "#ef4444",
      secondary: "#f87171",
      accent: "#fca5a5"
    }
  };

  const color = colors[variant] || colors.security;

  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`radarGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color.primary} stopOpacity="0.8" />
          <stop offset="50%" stopColor={color.secondary} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color.accent} stopOpacity="0" />
        </linearGradient>
        <radialGradient id={`radarGlow-${variant}`}>
          <stop offset="0%" stopColor={color.primary} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color.primary} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background circles */}
      <circle cx="200" cy="200" r="180" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.1" />
      <circle cx="200" cy="200" r="140" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.15" />
      <circle cx="200" cy="200" r="100" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="200" r="60" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.25" />
      <circle cx="200" cy="200" r="20" fill="none" stroke={color.primary} strokeWidth="1" opacity="0.3" />

      {/* Central glow */}
      <motion.circle
        cx="200"
        cy="200"
        r="50"
        fill={`url(#radarGlow-${variant})`}
        animate={{
          r: [50, 80, 50],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Radar sweep line */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="20"
          stroke={`url(#radarGradient-${variant})`}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Secondary sweep */}
        <line
          x1="200"
          y1="200"
          x2="200"
          y2="80"
          stroke={color.accent}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </motion.g>

      {/* Grid lines */}
      <line x1="200" y1="20" x2="200" y2="380" stroke={color.primary} strokeWidth="1" opacity="0.1" />
      <line x1="20" y1="200" x2="380" y2="200" stroke={color.primary} strokeWidth="1" opacity="0.1" />

      {/* Diagonal cross */}
      <line x1="60" y1="60" x2="340" y2="340" stroke={color.primary} strokeWidth="1" opacity="0.08" />
      <line x1="340" y1="60" x2="60" y2="340" stroke={color.primary} strokeWidth="1" opacity="0.08" />

      {/* Blips/targets */}
      {[
        { x: 260, y: 140, delay: 0 },
        { x: 140, y: 240, delay: 0.5 },
        { x: 280, y: 280, delay: 1 },
        { x: 160, y: 120, delay: 1.5 },
        { x: 240, y: 320, delay: 2 }
      ].map((blip, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={blip.x}
            cy={blip.y}
            r="4"
            fill={color.accent}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 4,
              delay: blip.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.circle
            cx={blip.x}
            cy={blip.y}
            r="8"
            fill="none"
            stroke={color.accent}
            strokeWidth="1"
            animate={{
              scale: [1, 2, 3],
              opacity: [0.6, 0.3, 0]
            }}
            transition={{
              duration: 2,
              delay: blip.delay,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.g>
      ))}

      {/* Central indicator */}
      <circle cx="200" cy="200" r="5" fill={color.primary} opacity="0.8" />
      <motion.circle
        cx="200"
        cy="200"
        r="8"
        fill="none"
        stroke={color.primary}
        strokeWidth="2"
        animate={{
          r: [8, 12, 8],
          opacity: [0.8, 0.3, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </svg>
  );
};

export default RadarScan;

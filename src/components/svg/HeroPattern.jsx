import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const HeroPattern = ({ className = "" }) => {
  // Pre-compute random values once so they're stable across re-renders
  const particles = useMemo(() => (
    [...Array(15)].map((_, i) => ({
      cy: ((i * 137.5) % 1080), // Golden angle distribution — no Math.random()
      duration: 5 + (i % 5),
      delay: (i * 0.2) % 3,
      color: i % 2 === 0 ? "#c084fc" : "#22d3ee"
    }))
  ), []);

  return (
    <svg
      className={className}
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="heroLine1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="heroLine2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Flowing horizontal lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.path
          key={`line-${i}`}
          d={`M0 ${200 + i * 150} Q480 ${180 + i * 150} 960 ${200 + i * 150} T1920 ${200 + i * 150}`}
          stroke={i % 2 === 0 ? "url(#heroLine1)" : "url(#heroLine2)"}
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1],
            opacity: [0, 0.4, 0.4, 0]
          }}
          transition={{
            pathLength: { duration: 3, delay: i * 0.5 },
            opacity: { duration: 3, delay: i * 0.5 }
          }}
        />
      ))}

      {/* Network nodes */}
      {[...Array(12)].map((_, i) => {
        const x = (i % 4) * 640 + 320;
        const y = Math.floor(i / 4) * 360 + 180;
        return (
          <motion.g key={`node-${i}`}>
            {/* Node glow */}
            <motion.circle
              cx={x}
              cy={y}
              r="30"
              fill={i % 3 === 0 ? "#8b5cf6" : i % 3 === 1 ? "#06b6d4" : "#c084fc"}
              opacity="0"
              animate={{
                opacity: [0, 0.2, 0],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
            {/* Node core */}
            <motion.circle
              cx={x}
              cy={y}
              r="4"
              fill={i % 3 === 0 ? "#c084fc" : i % 3 === 1 ? "#22d3ee" : "#a78bfa"}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.2, type: "spring" }}
            />
          </motion.g>
        );
      })}

      {/* Hexagonal pattern overlay */}
      <g opacity="0.15">
        {[...Array(8)].map((_, row) => (
          [...Array(6)].map((_, col) => {
            const x = col * 280 + (row % 2) * 140 + 140;
            const y = row * 140 + 70;
            const size = 40;
            const points = [...Array(6)].map((_, i) => {
              const angle = (Math.PI / 3) * i;
              return `${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`;
            }).join(' ');

            return (
              <motion.polygon
                key={`hex-${row}-${col}`}
                points={points}
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 4,
                  delay: (row + col) * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            );
          })
        ))}
      </g>

      {/* Data stream particles — using stable pre-computed positions */}
      {particles.map((p, i) => (
        <motion.circle
          key={`particle-${i}`}
          cx="0"
          cy={p.cy}
          r="2"
          fill={p.color}
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: 1920,
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Pulse rings from center */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`pulse-${i}`}
          cx="960"
          cy="540"
          r="50"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{
            scale: [0, 4],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </svg>
  );
};

export default HeroPattern;

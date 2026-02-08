import React from 'react';
import { motion } from 'framer-motion';

/**
 * HUDOverlay - Cinematic heads-up display overlay
 *
 * Features:
 * - Corner brackets with animated glow
 * - Optional scan lines
 * - Grid overlay pattern
 * - Status indicators
 * - Data readouts
 * - Customizable color schemes
 */
const HUDOverlay = ({
  children,
  variant = 'signal',
  showCorners = true,
  showGrid = false,
  showScanLine = false,
  showStatus = false,
  status = 'operational',
  label = '',
  className = '',
}) => {
  const colorSchemes = {
    signal: {
      primary: '#00ff41',
      glow: 'rgba(0, 255, 65, 0.4)',
      border: 'border-signal/30',
    },
    arc: {
      primary: '#0ea5e9',
      glow: 'rgba(14, 165, 233, 0.4)',
      border: 'border-arc/30',
    },
    viability: {
      primary: '#8b5cf6',
      glow: 'rgba(139, 92, 246, 0.4)',
      border: 'border-viability-primary/30',
    },
    fortress: {
      primary: '#3b82f6',
      glow: 'rgba(59, 130, 246, 0.4)',
      border: 'border-fortress-accent/30',
    },
  };

  const scheme = colorSchemes[variant];

  const statusColors = {
    operational: 'bg-signal text-signal',
    warning: 'bg-yellow-500 text-yellow-500',
    critical: 'bg-red-500 text-red-500',
    offline: 'bg-slate-500 text-slate-500',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Corner Brackets */}
      {showCorners && (
        <>
          {/* Top Left */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 pointer-events-none"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full"
              style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}
            >
              <path
                d="M 0 8 L 0 0 L 8 0"
                stroke={scheme.primary}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M 2 8 L 2 2 L 8 2"
                stroke={scheme.primary}
                strokeWidth="1"
                strokeLinecap="square"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Top Right */}
          <motion.div
            className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
            initial={{ opacity: 0, x: 10, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full"
              style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}
            >
              <path
                d="M 32 8 L 32 0 L 24 0"
                stroke={scheme.primary}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M 30 8 L 30 2 L 24 2"
                stroke={scheme.primary}
                strokeWidth="1"
                strokeLinecap="square"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Bottom Left */}
          <motion.div
            className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
            initial={{ opacity: 0, x: -10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full"
              style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}
            >
              <path
                d="M 0 24 L 0 32 L 8 32"
                stroke={scheme.primary}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M 2 24 L 2 30 L 8 30"
                stroke={scheme.primary}
                strokeWidth="1"
                strokeLinecap="square"
                opacity="0.5"
              />
            </svg>
          </motion.div>

          {/* Bottom Right */}
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
            initial={{ opacity: 0, x: 10, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-full h-full"
              style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}
            >
              <path
                d="M 32 24 L 32 32 L 24 32"
                stroke={scheme.primary}
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M 30 24 L 30 30 L 24 30"
                stroke={scheme.primary}
                strokeWidth="1"
                strokeLinecap="square"
                opacity="0.5"
              />
            </svg>
          </motion.div>
        </>
      )}

      {/* Grid Overlay */}
      {showGrid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(${scheme.primary} 1px, transparent 1px),
              linear-gradient(90deg, ${scheme.primary} 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      )}

      {/* Scan Line */}
      {showScanLine && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute w-full h-[2px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${scheme.primary}, transparent)`,
              boxShadow: `0 0 10px ${scheme.glow}`,
            }}
            animate={{
              y: ['-100%', 'calc(100% + 100%)'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 2,
            }}
          />
        </motion.div>
      )}

      {/* Status Indicator */}
      {showStatus && (
        <motion.div
          className="absolute top-2 right-2 flex items-center gap-2 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="terminal-text text-xs text-slate-400">
            {status.toUpperCase()}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full ${statusColors[status]}`}
            animate={
              status === 'operational'
                ? {
                    opacity: [1, 0.4, 1],
                    scale: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}

      {/* Label */}
      {label && (
        <motion.div
          className="absolute top-2 left-2 terminal-text text-xs pointer-events-none"
          style={{ color: scheme.primary }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};

/**
 * CornerBrackets - Simple corner brackets for minimal HUD
 */
export const CornerBrackets = ({ variant = 'signal', size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorSchemes = {
    signal: { primary: '#00ff41', glow: 'rgba(0, 255, 65, 0.4)' },
    arc: { primary: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.4)' },
    viability: { primary: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  };

  const scheme = colorSchemes[variant];
  const sizeClass = sizes[size];

  return (
    <>
      <div className={`absolute top-0 left-0 ${sizeClass} ${className}`}>
        <svg viewBox="0 0 32 32" fill="none" style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}>
          <path d="M 0 8 L 0 0 L 8 0" stroke={scheme.primary} strokeWidth="2" />
        </svg>
      </div>
      <div className={`absolute top-0 right-0 ${sizeClass} ${className}`}>
        <svg viewBox="0 0 32 32" fill="none" style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}>
          <path d="M 32 8 L 32 0 L 24 0" stroke={scheme.primary} strokeWidth="2" />
        </svg>
      </div>
      <div className={`absolute bottom-0 left-0 ${sizeClass} ${className}`}>
        <svg viewBox="0 0 32 32" fill="none" style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}>
          <path d="M 0 24 L 0 32 L 8 32" stroke={scheme.primary} strokeWidth="2" />
        </svg>
      </div>
      <div className={`absolute bottom-0 right-0 ${sizeClass} ${className}`}>
        <svg viewBox="0 0 32 32" fill="none" style={{ filter: `drop-shadow(0 0 4px ${scheme.glow})` }}>
          <path d="M 32 24 L 32 32 L 24 32" stroke={scheme.primary} strokeWidth="2" />
        </svg>
      </div>
    </>
  );
};

/**
 * GridOverlay - Tactical grid pattern
 */
export const GridOverlay = ({ variant = 'signal', opacity = 0.1, size = 20 }) => {
  const colors = {
    signal: '#00ff41',
    arc: '#0ea5e9',
    viability: '#8b5cf6',
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(${colors[variant]} 1px, transparent 1px),
          linear-gradient(90deg, ${colors[variant]} 1px, transparent 1px)
        `,
        backgroundSize: `${size}px ${size}px`,
        opacity,
      }}
    />
  );
};

/**
 * ScanLine - Animated horizontal scan line
 */
export const ScanLine = ({ variant = 'signal', duration = 3, delay = 0 }) => {
  const colors = {
    signal: { line: '#00ff41', glow: 'rgba(0, 255, 65, 0.4)' },
    arc: { line: '#0ea5e9', glow: 'rgba(14, 165, 233, 0.4)' },
    viability: { line: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },
  };

  const scheme = colors[variant];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-full h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${scheme.line}, transparent)`,
          boxShadow: `0 0 10px ${scheme.glow}`,
        }}
        animate={{
          y: ['-100%', 'calc(100% + 100%)'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatDelay: delay,
        }}
      />
    </div>
  );
};

export default HUDOverlay;

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * DataDisplay - HUD-style stat displays with animated values
 *
 * Features:
 * - Animated counter
 * - Bar graph visualization
 * - Status indicators
 * - Scan line overlay
 * - Terminal aesthetic
 */
const DataDisplay = ({
  label,
  value,
  unit = '',
  prefix = '',
  status = 'operational',
  showBar = false,
  barMax = 100,
  showScanLine = false,
  className = '',
  size = 'md',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  const statusColors = {
    operational: 'border-signal/30 text-signal',
    optimal: 'border-arc/30 text-arc',
    warning: 'border-yellow-500/30 text-yellow-400',
    critical: 'border-red-500/30 text-red-400',
    excellent: 'border-purple-500/30 text-purple-400',
  };

  const sizeClasses = {
    sm: {
      container: 'p-3',
      label: 'text-xs',
      value: 'text-2xl',
      bar: 'h-1',
    },
    md: {
      container: 'p-4 md:p-6',
      label: 'text-technical',
      value: 'text-3xl md:text-4xl',
      bar: 'h-1.5',
    },
    lg: {
      container: 'p-6 md:p-8',
      label: 'text-sm',
      value: 'text-4xl md:text-5xl',
      bar: 'h-2',
    },
  };

  // Animated counter
  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }

    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  const currentSize = sizeClasses[size];
  const barPercentage = showBar ? (displayValue / barMax) * 100 : 0;

  return (
    <motion.div
      ref={ref}
      className={`relative ${currentSize.container} bg-obsidian/60 border rounded backdrop-blur-sm ${statusColors[status]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Scan Line Effect */}
      {showScanLine && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
            animate={{
              y: ['-100%', 'calc(100% + 100%)']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2
            }}
          />
        </motion.div>
      )}

      {/* Label */}
      <div className={`terminal-text uppercase tracking-wider mb-2 opacity-70 ${currentSize.label}`}>
        {label}
      </div>

      {/* Value */}
      <div className={`font-mono font-bold ${currentSize.value} tabular-nums`}>
        {prefix}
        {typeof displayValue === 'number' && !isNaN(displayValue)
          ? displayValue.toLocaleString()
          : displayValue}
        {unit && <span className="text-sm opacity-70 ml-1">{unit}</span>}
      </div>

      {/* Progress Bar */}
      {showBar && (
        <div className={`mt-4 bg-white/5 sharp-edges overflow-hidden ${currentSize.bar}`}>
          <motion.div
            className={`h-full sharp-edges ${
              status === 'operational' ? 'bg-signal' :
              status === 'critical' ? 'bg-red-500' :
              status === 'warning' ? 'bg-yellow-500' :
              status === 'excellent' ? 'bg-purple-500' :
              'bg-arc'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min(barPercentage, 100)}%` }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      )}
    </motion.div>
  );
};

/**
 * DataGrid - Grid of data displays
 */
export const DataGrid = ({ children, columns = 4, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-4 ${className}`}>
      {children}
    </div>
  );
};

/**
 * StatCard - Compact stat display for metrics
 */
export const StatCard = ({
  icon: Icon,
  label,
  value,
  change,
  changeType = 'positive',
  className = ''
}) => {
  return (
    <div className={`p-4 bg-obsidian/60 border border-white/10 rounded backdrop-blur-sm ${className}`}>
      <div className="flex items-start justify-between mb-2">
        {Icon && (
          <div className="w-8 h-8 bg-signal/10 rounded flex items-center justify-center">
            <Icon className="w-4 h-4 text-signal" />
          </div>
        )}
        {change && (
          <span className={`text-sm font-mono ${changeType === 'positive' ? 'text-signal' : 'text-red-400'}`}>
            {changeType === 'positive' ? '+' : ''}{change}
          </span>
        )}
      </div>
      <div className="text-xs terminal-text uppercase tracking-wider text-slate-400 mb-1">
        {label}
      </div>
      <div className="text-2xl font-mono font-bold text-white">
        {value}
      </div>
    </div>
  );
};

export default DataDisplay;

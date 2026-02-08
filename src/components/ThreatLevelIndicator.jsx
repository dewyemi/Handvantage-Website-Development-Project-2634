import React from 'react';
import { motion } from 'framer-motion';

const ThreatLevelIndicator = ({ level = 'protected', size = 'md' }) => {
  const levels = {
    critical: {
      label: 'CRITICAL',
      color: 'red',
      bars: 5,
      description: 'Immediate action required'
    },
    high: {
      label: 'HIGH',
      color: 'orange',
      bars: 4,
      description: 'Elevated threat detected'
    },
    medium: {
      label: 'MEDIUM',
      color: 'yellow',
      bars: 3,
      description: 'Monitoring required'
    },
    low: {
      label: 'LOW',
      color: 'blue',
      bars: 2,
      description: 'Routine surveillance'
    },
    protected: {
      label: 'PROTECTED',
      color: 'emerald',
      bars: 5,
      description: 'All systems secured'
    }
  };

  const currentLevel = levels[level] || levels.protected;

  const getColorClasses = (color, index, activeBars) => {
    const isActive = index < activeBars;
    const colorMap = {
      red: isActive ? 'bg-red-500' : 'bg-red-950',
      orange: isActive ? 'bg-orange-500' : 'bg-orange-950',
      yellow: isActive ? 'bg-yellow-500' : 'bg-yellow-950',
      blue: isActive ? 'bg-blue-500' : 'bg-blue-950',
      emerald: isActive ? 'bg-emerald-500' : 'bg-emerald-950'
    };
    return colorMap[color] || colorMap.emerald;
  };

  const getTextColor = (color) => {
    const colorMap = {
      red: 'text-red-400',
      orange: 'text-orange-400',
      yellow: 'text-yellow-400',
      blue: 'text-blue-400',
      emerald: 'text-emerald-400'
    };
    return colorMap[color] || colorMap.emerald;
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-white/10 rounded-lg px-4 py-3 backdrop-blur-sm">
      {/* Threat Level Bars */}
      <div className="flex items-end gap-1 h-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 rounded-sm ${getColorClasses(currentLevel.color, i, currentLevel.bars)}`}
            style={{ height: `${(i + 1) * 20}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </div>

      {/* Label and Status */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <motion.div
            className={`w-2 h-2 rounded-full ${
              currentLevel.color === 'emerald' ? 'bg-emerald-500' :
              currentLevel.color === 'red' ? 'bg-red-500' :
              currentLevel.color === 'orange' ? 'bg-orange-500' :
              currentLevel.color === 'yellow' ? 'bg-yellow-500' :
              'bg-blue-500'
            }`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <span className={`font-mono font-bold ${sizeClasses[size]} ${getTextColor(currentLevel.color)} tracking-wider`}>
            {currentLevel.label}
          </span>
        </div>
        <span className="text-xs text-slate-400 font-mono">{currentLevel.description}</span>
      </div>
    </div>
  );
};

export default ThreatLevelIndicator;

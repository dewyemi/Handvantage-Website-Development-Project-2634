import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiActivity, FiZap, FiClock } = FiIcons;

const LiveStatusBoard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const metrics = [
    {
      label: 'SOC Status',
      value: 'OPERATIONAL',
      status: 'active',
      icon: FiShield,
      color: 'emerald'
    },
    {
      label: 'Threats Blocked',
      value: '2,847',
      status: 'active',
      icon: FiActivity,
      color: 'blue',
      suffix: 'today'
    },
    {
      label: 'Avg Response',
      value: '8.3 min',
      status: 'optimal',
      icon: FiClock,
      color: 'cyan'
    },
    {
      label: 'Automation Rate',
      value: '94%',
      status: 'excellent',
      icon: FiZap,
      color: 'purple'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'optimal': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'excellent': return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      default: return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'text-emerald-400 bg-emerald-500/10',
      blue: 'text-blue-400 bg-blue-500/10',
      cyan: 'text-cyan-400 bg-cyan-500/10',
      purple: 'text-purple-400 bg-purple-500/10'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative bg-slate-900/90 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
          </div>
          <div>
            <h3 className="text-sm font-mono text-white font-bold tracking-wider">LIVE STATUS</h3>
            <p className="text-xs text-slate-400 font-mono">24/7 Operations Center</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 font-mono">LOCAL TIME</p>
          <p className="text-sm font-mono text-emerald-400 font-semibold">
            {time.toLocaleTimeString('en-US', { hour12: false })}
          </p>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className={`relative border rounded-xl p-4 ${getStatusColor(metric.status)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Animated scan line */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
              animate={{
                y: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                delay: index * 0.5
              }}
            />

            <div className="relative">
              <div className={`w-8 h-8 ${getColorClasses(metric.color)} rounded-lg flex items-center justify-center mb-3`}>
                <SafeIcon icon={metric.icon} className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-400 font-mono uppercase mb-1">{metric.label}</p>
              <p className="text-xl font-bold font-mono">{metric.value}</p>
              {metric.suffix && (
                <p className="text-xs text-slate-500 font-mono mt-1">{metric.suffix}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Status Bar */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-4">
            <span className="text-emerald-400">● ALL SYSTEMS NOMINAL</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">UPTIME: 99.98%</span>
          </div>
          <span className="text-slate-500">LAST UPDATE: {time.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveStatusBoard;

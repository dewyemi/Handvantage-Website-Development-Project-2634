import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import { TerminalBadge } from './TerminalText';

/**
 * AgentCard - Display AI agents with premium styling
 *
 * Features:
 * - Agent avatar/icon with glow
 * - Role and mission description
 * - Output preview with terminal styling
 * - Hover state with tilt effect
 * - Deployment status indicator
 */
const AgentCard = ({
  name,
  role,
  mission,
  output,
  icon: Icon,
  color = 'signal',
  status = 'operational',
  variant = 'default',
  className = '',
  index = 0,
}) => {
  const colorSchemes = {
    signal: {
      bg: 'from-signal/10 to-signal/5',
      border: 'border-signal/30 hover:border-signal/50',
      glow: 'shadow-signal/20',
      icon: 'bg-signal/20 text-signal',
      text: 'text-signal',
    },
    arc: {
      bg: 'from-arc/10 to-arc/5',
      border: 'border-arc/30 hover:border-arc/50',
      glow: 'shadow-arc/20',
      icon: 'bg-arc/20 text-arc',
      text: 'text-arc',
    },
    viability: {
      bg: 'from-viability-primary/10 to-viability-primary/5',
      border: 'border-viability-primary/30 hover:border-viability-primary/50',
      glow: 'shadow-viability-primary/20',
      icon: 'bg-viability-primary/20 text-viability-primary',
      text: 'text-viability-primary',
    },
    fortress: {
      bg: 'from-fortress-accent/10 to-fortress-accent/5',
      border: 'border-fortress-accent/30 hover:border-fortress-accent/50',
      glow: 'shadow-fortress-accent/20',
      icon: 'bg-fortress-accent/20 text-fortress-accent',
      text: 'text-fortress-accent',
    },
  };

  const scheme = colorSchemes[color];

  return (
    <motion.div
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-4 sharp-edges blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${scheme.bg}`} />

      {/* Card */}
      <div className={`relative p-8 sharp-edges border-2 bg-obsidian/90 backdrop-blur-xl transition-all duration-300 ${scheme.border} ${scheme.glow} shadow-2xl overflow-hidden`}>
        {/* Corner Accent */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${scheme.bg} sharp-edges opacity-20`} />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <TerminalBadge status={status} pulse={status === 'operational'}>
            {status.toUpperCase()}
          </TerminalBadge>
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <motion.div
            className={`w-16 h-16 sharp-edges flex items-center justify-center ${scheme.icon} ring-2 ring-current ring-opacity-20`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {Icon && <SafeIcon icon={Icon} className="w-8 h-8" />}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Name */}
          <h3 className={`text-2xl md:text-3xl font-editorial font-bold mb-2 ${scheme.text}`}>
            {name}
          </h3>

          {/* Role */}
          <div className="terminal-text text-label text-slate-400 mb-4">
            {role}
          </div>

          {/* Mission */}
          <p className="text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
            {mission}
          </p>

          {/* Output Preview */}
          {output && (
            <div className="p-4 bg-obsidian/80 border border-white/10 sharp-edges">
              <div className="terminal-text text-xs text-slate-500 mb-2">
                OUTPUT:
              </div>
              <p className={`text-sm font-medium italic ${scheme.text}`}>
                "{output}"
              </p>
            </div>
          )}
        </div>

        {/* Scan Line */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className={`absolute w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-20 ${scheme.text}`}
            animate={{
              y: ['-100%', 'calc(100% + 100%)']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 3
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * AgentGrid - Grid layout for agent cards
 */
export const AgentGrid = ({ children, className = '' }) => {
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 ${className}`}>
      {children}
    </div>
  );
};

/**
 * CompactAgentCard - Smaller version for sidebars/lists
 */
export const CompactAgentCard = ({
  name,
  role,
  icon: Icon,
  color = 'signal',
  status = 'operational',
  className = ''
}) => {
  const scheme = {
    signal: 'border-signal/30 text-signal bg-signal/5',
    arc: 'border-arc/30 text-arc bg-arc/5',
    viability: 'border-viability-primary/30 text-viability-primary bg-viability-primary/5',
  }[color];

  return (
    <div className={`flex items-center gap-4 p-4 sharp-edges border ${scheme} backdrop-blur-sm ${className}`}>
      <div className="w-10 h-10 rounded flex items-center justify-center bg-current bg-opacity-20">
        {Icon && <SafeIcon icon={Icon} className="w-5 h-5" />}
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm">{name}</div>
        <div className="terminal-text text-xs text-slate-500">{role}</div>
      </div>
      {status === 'operational' && (
        <div className="w-2 h-2 bg-current sharp-edges animate-pulse" />
      )}
    </div>
  );
};

export default AgentCard;

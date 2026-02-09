import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TerminalText - Animated typewriter effect for cinematic reveals
 *
 * Features:
 * - Character-by-character reveal
 * - Blinking cursor
 * - Color variants (signal green, arc blue, white)
 * - Monospace font enforcement
 * - Configurable speed
 */
const TerminalText = ({
  text,
  speed = 50,
  cursor = true,
  color = 'signal',
  className = '',
  delay = 0,
  onComplete,
  loop = false,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const colors = {
    signal: 'text-signal',
    arc: 'text-arc',
    white: 'text-white',
    slate: 'text-slate-300',
  };

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayText('');
        setIsComplete(false);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
      if (loop) {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
          setIsComplete(false);
        }, 2000);
      }
    }
  }, [currentIndex, text, speed, isComplete, onComplete, loop]);

  return (
    <div className={`terminal-text ${colors[color]} ${className}`}>
      <span>{displayText}</span>
      {cursor && !isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1em] bg-current ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "steps(2)"
          }}
        />
      )}
      {cursor && isComplete && !loop && (
        <span className="inline-block w-[2px] h-[1em] bg-current ml-1 opacity-50" />
      )}
    </div>
  );
};

/**
 * TerminalLabel - Pre-styled terminal text for labels
 */
export const TerminalLabel = ({ children, color = 'signal', className = '' }) => {
  return (
    <div className={`terminal-text text-label ${color === 'signal' ? 'text-signal' : color === 'arc' ? 'text-arc' : 'text-slate-400'} ${className}`}>
      {children}
    </div>
  );
};

/**
 * TerminalBadge - Status badge with terminal aesthetic
 */
export const TerminalBadge = ({
  children,
  status = 'operational',
  pulse = false,
  className = ''
}) => {
  const statusColors = {
    operational: 'bg-signal/10 border-signal/30 text-signal',
    warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    critical: 'bg-red-500/10 border-red-500/30 text-red-400',
    offline: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded border terminal-text text-technical ${statusColors[status]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full sharp-edges ${status === 'operational' ? 'bg-signal' : status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'} opacity-75`}></span>
          <span className={`relative inline-flex sharp-edges h-2 w-2 ${status === 'operational' ? 'bg-signal' : status === 'critical' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
        </span>
      )}
      {children}
    </div>
  );
};

export default TerminalText;

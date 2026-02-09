import React from 'react';
import { motion } from 'framer-motion';

/**
 * BentoGrid - Magazine-style asymmetric grid system
 * Inspired by Linear.app and Family.co
 *
 * Creates a 12-column grid with responsive spans
 */
export const BentoGrid = ({
  children,
  columns = 12,
  gap = 'md',
  className = ''
}) => {
  const gapSizes = {
    sm: 'gap-2 md:gap-4',
    md: 'gap-4 md:gap-6',
    lg: 'gap-6 md:gap-8',
  };

  return (
    <div
      className={`grid ${gapSizes[gap]} ${className}`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
      }}
    >
      {children}
    </div>
  );
};

/**
 * BentoItem - Individual grid item with responsive spans
 *
 * @param {number} span - Base span (mobile-first)
 * @param {number} spanMd - Medium breakpoint span
 * @param {number} spanLg - Large breakpoint span
 * @param {string} className - Additional Tailwind classes
 */
export const BentoItem = ({
  children,
  span = 12,
  spanMd,
  spanLg,
  rowSpan = 1,
  className = '',
  hover = true,
  animate = true,
  delay = 0,
}) => {
  const spanClasses = [
    `col-span-${span}`,
    spanMd && `md:col-span-${spanMd}`,
    spanLg && `lg:col-span-${spanLg}`,
    rowSpan > 1 && `row-span-${rowSpan}`,
  ].filter(Boolean).join(' ');

  const hoverAnimation = hover ? {
    scale: 1.01,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  } : {};

  const containerVariants = animate ? {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  } : {};

  const Component = animate ? motion.div : 'div';

  return (
    <Component
      className={`bento-item relative overflow-hidden ${spanClasses} ${className}`}
      variants={containerVariants}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true }}
      whileHover={hover ? hoverAnimation : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
};

/**
 * BentoCard - Pre-styled bento item with glass morphism
 */
export const BentoCard = ({
  children,
  variant = 'default',
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-white/5 border-white/10',
    signal: 'bg-signal/5 border-signal/20 hover:border-signal/40',
    arc: 'bg-arc/5 border-arc/20 hover:border-arc/40',
    obsidian: 'bg-obsidian/90 border-white/5',
    brutal: 'brutal-card',
  };

  return (
    <BentoItem
      className={`p-6 md:p-8 sharp-edges border backdrop-blur-xl transition-colors duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </BentoItem>
  );
};

export default BentoGrid;

import React from 'react';
import { motion } from 'framer-motion';

/**
 * AsymmetricSection - Magazine-style off-center layouts
 *
 * Features:
 * - Content offset left or right
 * - Floating visual elements
 * - Overlapping layers with z-index control
 * - Responsive breakpoints (centers on mobile)
 * - Background pattern options
 * - Integration with cinematic design system
 */
const AsymmetricSection = ({
  children,
  align = 'left', // 'left' | 'right' | 'center'
  offset = 'lg', // 'sm' | 'md' | 'lg' | 'xl'
  backgroundPattern = 'none', // 'none' | 'grid' | 'dots' | 'noise'
  backgroundColor = 'transparent',
  paddingY = 'section', // 'section-sm' | 'section' | 'section-lg' | custom class
  className = '',
  contentClassName = '',
  floatingElement = null,
  floatingPosition = 'right', // 'left' | 'right' | 'top' | 'bottom'
  animate = true,
}) => {
  // Offset configurations
  const offsets = {
    left: {
      sm: 'pl-6 pr-4 md:pl-12 md:pr-8 lg:pl-20 lg:pr-10',
      md: 'pl-6 pr-4 md:pl-16 md:pr-8 lg:pl-32 lg:pr-12',
      lg: 'pl-6 pr-4 md:pl-20 md:pr-8 lg:pl-40 lg:pr-16',
      xl: 'pl-6 pr-4 md:pl-24 md:pr-8 lg:pl-48 lg:pr-20',
    },
    right: {
      sm: 'pr-6 pl-4 md:pr-12 md:pl-8 lg:pr-20 lg:pl-10',
      md: 'pr-6 pl-4 md:pr-16 md:pl-8 lg:pr-32 lg:pl-12',
      lg: 'pr-6 pl-4 md:pr-20 md:pl-8 lg:pr-40 lg:pl-16',
      xl: 'pr-6 pl-4 md:pr-24 md:pl-8 lg:pr-48 lg:pl-20',
    },
    center: {
      sm: 'px-6 md:px-12 lg:px-20',
      md: 'px-6 md:px-16 lg:px-32',
      lg: 'px-6 md:px-20 lg:px-40',
      xl: 'px-6 md:px-24 lg:px-48',
    },
  };

  // Background patterns
  const patterns = {
    none: '',
    grid: 'bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]',
    dots: 'bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]',
    noise: 'bg-noise',
  };

  // Floating element positions
  const floatingPositions = {
    left: 'left-0 top-1/2 -translate-y-1/2 -translate-x-1/4',
    right: 'right-0 top-1/2 -translate-y-1/2 translate-x-1/4',
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/4',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4',
  };

  const paddingClass = paddingY.startsWith('section')
    ? `py-${paddingY}`
    : paddingY;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionWrapper = animate ? motion.section : 'section';
  const MotionContent = animate ? motion.div : 'div';

  return (
    <MotionWrapper
      className={`relative overflow-hidden ${paddingClass} ${className}`}
      style={{ backgroundColor }}
      {...(animate && {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
        variants: containerVariants,
      })}
    >
      {/* Background Pattern */}
      {backgroundPattern !== 'none' && (
        <div
          className={`absolute inset-0 pointer-events-none ${patterns[backgroundPattern]}`}
          aria-hidden="true"
        />
      )}

      {/* Content Container */}
      <MotionContent
        className={`relative z-10 ${offsets[align][offset]} ${contentClassName}`}
        {...(animate && { variants: contentVariants })}
      >
        {children}
      </MotionContent>

      {/* Floating Element */}
      {floatingElement && (
        <motion.div
          className={`absolute hidden lg:block pointer-events-none ${floatingPositions[floatingPosition]}`}
          {...(animate && { variants: floatingVariants })}
          aria-hidden="true"
        >
          {floatingElement}
        </motion.div>
      )}
    </MotionWrapper>
  );
};

/**
 * SplitSection - 2-column asymmetric split (e.g., 60/40, 70/30)
 */
export const SplitSection = ({
  leftContent,
  rightContent,
  leftSpan = 7, // out of 12
  rightSpan = 5,
  gap = 'lg',
  reverseOnMobile = false,
  backgroundColor = 'transparent',
  paddingY = 'section',
  leftClassName = '',
  rightClassName = '',
  className = '',
  animate = true,
}) => {
  const gaps = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-12',
    xl: 'gap-12 md:gap-16',
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const MotionWrapper = animate ? motion.section : 'section';
  const MotionDiv = animate ? motion.div : 'div';

  return (
    <MotionWrapper
      className={`relative py-${paddingY} px-6 md:px-12 lg:px-20 ${className}`}
      style={{ backgroundColor }}
      {...(animate && {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
      })}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-12 ${gaps[gap]} ${
          reverseOnMobile ? 'flex flex-col-reverse md:grid' : ''
        }`}
      >
        {/* Left Content */}
        <MotionDiv
          className={`md:col-span-${leftSpan} ${leftClassName}`}
          {...(animate && { variants: itemVariants })}
        >
          {leftContent}
        </MotionDiv>

        {/* Right Content */}
        <MotionDiv
          className={`md:col-span-${rightSpan} ${rightClassName}`}
          {...(animate && {
            variants: itemVariants,
            transition: { delay: 0.2 },
          })}
        >
          {rightContent}
        </MotionDiv>
      </div>
    </MotionWrapper>
  );
};

/**
 * StackedSection - Vertically stacked content with offset layers
 */
export const StackedSection = ({
  layers = [],
  align = 'left',
  spacing = 'md',
  backgroundColor = 'transparent',
  paddingY = 'section',
  className = '',
  animate = true,
}) => {
  const spacings = {
    sm: 'space-y-8',
    md: 'space-y-12 md:space-y-16',
    lg: 'space-y-16 md:space-y-24',
    xl: 'space-y-24 md:space-y-32',
  };

  const alignments = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
  };

  const layerVariants = {
    hidden: { opacity: 0, x: align === 'left' ? -40 : align === 'right' ? 40 : 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const MotionWrapper = animate ? motion.section : 'section';
  const MotionDiv = animate ? motion.div : 'div';

  return (
    <MotionWrapper
      className={`relative py-${paddingY} px-6 md:px-12 lg:px-20 ${className}`}
      style={{ backgroundColor }}
      {...(animate && {
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
      })}
    >
      <div className={`flex flex-col ${spacings[spacing]} ${alignments[align]}`}>
        {layers.map((layer, index) => (
          <MotionDiv
            key={index}
            className={`w-full ${layer.width || 'md:w-10/12 lg:w-8/12'} ${
              layer.className || ''
            }`}
            {...(animate && {
              variants: layerVariants,
              custom: index,
            })}
          >
            {layer.content}
          </MotionDiv>
        ))}
      </div>
    </MotionWrapper>
  );
};

/**
 * MagazineSection - Editorial-style content with floating elements
 */
export const MagazineSection = ({
  headline,
  subheadline,
  body,
  image,
  imagePosition = 'right', // 'left' | 'right'
  imageSize = 'md', // 'sm' | 'md' | 'lg'
  accentColor = 'signal',
  backgroundColor = 'transparent',
  paddingY = 'section',
  className = '',
}) => {
  const imageSizes = {
    sm: 'w-32 h-32 md:w-48 md:h-48',
    md: 'w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80',
    lg: 'w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]',
  };

  const accentColors = {
    signal: 'text-signal',
    arc: 'text-arc',
    viability: 'text-viability-primary',
    fortress: 'text-fortress-accent',
  };

  const isImageLeft = imagePosition === 'left';

  return (
    <section
      className={`relative py-${paddingY} px-6 md:px-12 lg:px-20 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          className={`lg:col-span-5 ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className={`relative ${imageSizes[imageSize]} mx-auto`}>
            {image}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className={`lg:col-span-7 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subheadline && (
            <div className={`terminal-text text-sm mb-4 ${accentColors[accentColor]}`}>
              {subheadline}
            </div>
          )}
          {headline && (
            <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {headline}
            </h2>
          )}
          {body && (
            <div className="text-slate-300 text-lg leading-relaxed space-y-4">
              {body}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AsymmetricSection;

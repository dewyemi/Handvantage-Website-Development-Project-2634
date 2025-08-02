import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 'default', variant = 'default' }) => {
  const sizes = {
    small: { container: 'w-8 h-8', text: 'text-lg', iconSize: 'w-8 h-8' },
    default: { container: 'w-10 h-10', text: 'text-2xl', iconSize: 'w-10 h-10' },
    large: { container: 'w-16 h-16', text: 'text-4xl', iconSize: 'w-16 h-16' }
  };

  const currentSize = sizes[size];

  // SVG-based logo implementation
  const renderLogoSvg = () => (
    <svg 
      viewBox="0 0 100 100" 
      className={currentSize.iconSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main H shape */}
      <path 
        d="M20,15 L20,85 L35,85 L35,55 L65,55 L65,85 L80,85 L80,15 L65,15 L65,45 L35,45 L35,15 Z" 
        fill="#2563eb" 
      />
      
      {/* Connection nodes and lines */}
      <circle cx="80" cy="25" r="5" fill="white" />
      <circle cx="90" cy="40" r="5" fill="white" />
      <circle cx="90" cy="60" r="5" fill="white" />
      <circle cx="80" cy="75" r="5" fill="white" />
      
      {/* Connection lines */}
      <line x1="80" y1="25" x2="90" y2="40" stroke="white" strokeWidth="2" />
      <line x1="90" y1="40" x2="90" y2="60" stroke="white" strokeWidth="2" />
      <line x1="90" y1="60" x2="80" y2="75" stroke="white" strokeWidth="2" />
      
      {/* Central node */}
      <circle cx="80" cy="50" r="7" fill="white" />
      
      {/* Connecting lines to central node */}
      <line x1="80" y1="25" x2="80" y2="50" stroke="white" strokeWidth="2" />
      <line x1="90" y1="40" x2="80" y2="50" stroke="white" strokeWidth="2" />
      <line x1="90" y1="60" x2="80" y2="50" stroke="white" strokeWidth="2" />
      <line x1="80" y1="75" x2="80" y2="50" stroke="white" strokeWidth="2" />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <motion.div 
        className={`${currentSize.container} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {renderLogoSvg()}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="flex items-center space-x-3"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Icon */}
      <div className={`${currentSize.container} relative flex-shrink-0`}>
        {renderLogoSvg()}
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <h1 className={`${currentSize.text} font-bold bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent leading-tight`}>
          Handvantage
        </h1>
        {size === 'large' && (
          <p className="text-sm text-slate-600 font-medium -mt-1">
            Digital Transformation
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Logo;
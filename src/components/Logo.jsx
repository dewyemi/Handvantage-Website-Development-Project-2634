import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiCloud } = FiIcons;

const Logo = ({ size = 'default', variant = 'default' }) => {
  const sizes = {
    small: {
      container: 'w-8 h-8',
      text: 'text-lg',
      icon: 'w-4 h-4'
    },
    default: {
      container: 'w-10 h-10',
      text: 'text-2xl',
      icon: 'w-5 h-5'
    },
    large: {
      container: 'w-16 h-16',
      text: 'text-4xl',
      icon: 'w-8 h-8'
    }
  };

  const currentSize = sizes[size];

  if (variant === 'icon-only') {
    return (
      <motion.div 
        className={`${currentSize.container} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main container with gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-xl shadow-lg relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Main icon - representing transformation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Central transformation symbol */}
              <div className="relative">
                <SafeIcon 
                  icon={FiZap} 
                  className={`${currentSize.icon} text-white relative z-10`}
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Corner accents representing different services */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-green-400/60 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-400/60 rounded-full"></div>
        </div>
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
      <div className={`${currentSize.container} relative`}>
        {/* Main container with gradient background */}
        <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-xl shadow-lg relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          
          {/* Main icon - representing transformation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Central transformation symbol */}
              <div className="relative">
                <SafeIcon 
                  icon={FiZap} 
                  className={`${currentSize.icon} text-white relative z-10`}
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Corner accents representing different services */}
          <div className="absolute top-1 right-1 w-2 h-2 bg-green-400/60 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-2 h-2 bg-yellow-400/60 rounded-full"></div>
        </div>
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
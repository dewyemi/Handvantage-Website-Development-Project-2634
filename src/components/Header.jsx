import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link, useLocation } from 'react-router-dom';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', path: '/' },
    { 
      label: 'Services', 
      href: '/#services', 
      path: '/',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Digital Transformation', href: '/services/digital-transformation' },
        { label: 'Cybersecurity', href: '/#services' },
        { label: 'Cloud Infrastructure', href: '/#services' },
        { label: 'Business Automation', href: '/#services' },
      ]
    },
    { label: 'Solutions', href: '/#solutions', path: '/' },
    { label: 'Partnerships', href: '/#partnerships', path: '/' },
    { label: 'About', href: '/about', path: '/about' },
    { label: 'Contact', href: '/#contact', path: '/' }
  ];

  const isActive = (item) => {
    if (item.path === '/about' && location.pathname === '/about') return true;
    if (item.path === '/' && location.pathname === '/') return true;
    if (location.pathname.includes('/services/') && item.label === 'Services') return true;
    return false;
  };

  const isActiveSubItem = (href) => {
    return location.pathname === href;
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-lg flex items-center justify-center">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844909342-handvantage-New.png" 
                  alt="Handvantage" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <h1 className="text-2xl font-bold text-primary-dark">Handvantage</h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <div className="group">
                    <a
                      href={item.href}
                      className={`text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 flex items-center ${
                        isActive(item) ? 'text-primary-blue' : ''
                      }`}
                    >
                      {item.label}
                      <SafeIcon icon={FiChevronDown} className="w-4 h-4 ml-1" />
                    </a>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${isServicesOpen ? 'opacity-100 visible' : ''}`}>
                      {item.dropdownItems.map((dropdownItem, i) => (
                        <Link 
                          key={i}
                          to={dropdownItem.href}
                          className={`block px-5 py-2 hover:bg-blue-50 text-slate-600 hover:text-primary-blue ${isActiveSubItem(dropdownItem.href) ? 'bg-blue-50 text-primary-blue' : ''}`}
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  item.href.startsWith('/') && !item.href.includes('#') ? (
                    <Link 
                      to={item.href} 
                      className={`text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 ${
                        isActive(item) ? 'text-primary-blue' : ''
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 ${
                        isActive(item) ? 'text-primary-blue' : ''
                      }`}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:inline-flex bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Get Assessment
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon 
              icon={isMenuOpen ? FiX : FiMenu} 
              className="w-6 h-6 text-primary-dark" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className={`flex items-center justify-between w-full text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 ${
                          isActive(item) ? 'text-primary-blue' : ''
                        }`}
                      >
                        <span>{item.label}</span>
                        <SafeIcon 
                          icon={FiChevronDown} 
                          className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'transform rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                          {item.dropdownItems.map((dropdownItem, i) => (
                            <Link 
                              key={i}
                              to={dropdownItem.href}
                              className={`block py-1 text-slate-600 hover:text-primary-blue ${isActiveSubItem(dropdownItem.href) ? 'text-primary-blue' : ''}`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.href.startsWith('/') && !item.href.includes('#') ? (
                      <Link 
                        to={item.href} 
                        className={`text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 ${
                          isActive(item) ? 'text-primary-blue' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className={`text-slate-600 hover:text-primary-blue font-medium transition-colors duration-300 ${
                          isActive(item) ? 'text-primary-blue' : ''
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Assessment
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
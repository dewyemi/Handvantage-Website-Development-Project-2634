import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const { FiMenu, FiX, FiChevronDown } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAssessmentsOpen, setIsAssessmentsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Managed Security Services', href: '/services/managed-security' },
        { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
        { label: 'Business Automation', href: '/services/business-automation' },
      ]
    },
    { label: 'About', href: '/about', path: '/about' },
    {
      label: 'Tools',
      href: '/#assessments',
      path: '/',
      hasDropdown: true,
      dropdownItems: [
        { label: 'Digital Transformation Assessment', href: 'https://secvantages.com', external: true },
        { label: 'Cybersecurity Risk Assessment', href: 'https://secvantages.com', external: true },
        { label: 'Security Maturity Assessment', href: 'https://secvantages.com', external: true },
        { label: 'Maturity Roadmap Generator', href: 'https://secvantages.com', external: true },
        { label: 'Compliance Readiness Assessment', href: 'https://secvantages.com', external: true },
        { label: 'Security Budget Planner', href: 'https://secvantages.com', external: true },
        { label: 'Vendor Evaluation Matrix', href: 'https://secvantages.com', external: true },
        { label: 'ROI Calculator', href: 'https://secvantages.com', external: true },
      ]
    },
    { label: 'Contact', href: 'https://handvantage.co/contact', path: '/', external: true }
  ];

  const isActive = (item) => {
    if (item.path === '/about' && location.pathname === '/about') return true;
    if (item.path === '/' && location.pathname === '/') return true;
    if (location.pathname.includes('/services/') && item.label === 'Services') return true;
    if ((location.pathname === '/assessment' ||
      location.pathname === '/assessment/start' ||
      location.pathname === '/security-assessment' ||
      location.pathname === '/security-assessment/start' ||
      location.pathname === '/security-maturity-assessment' ||
      location.pathname === '/maturity-roadmap' ||
      location.pathname === '/compliance-assessment' ||
      location.pathname === '/budget-planner' ||
      location.pathname === '/vendor-evaluation' ||
      location.pathname === '/roi-calculator' ||
      location.pathname === '/roi-calculator/start') && item.label === 'Tools') return true;
    return false;
  };

  const isActiveSubItem = (href) => {
    return location.pathname === href ||
      (href === '/assessment' && location.pathname === '/assessment/start') ||
      (href === '/security-assessment' && location.pathname === '/security-assessment/start') ||
      (href === '/roi-calculator' && location.pathname === '/roi-calculator/start');
  };

  const handleNavClick = (href, external) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAssessmentsOpen(false);

    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }

    if (href.includes('#')) {
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : '#');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isHomepage = location.pathname === '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass-premium shadow-premium py-2'
        : isHomepage
          ? 'bg-transparent py-6'
          : 'glass-medium shadow-lg py-4'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <Logo size="default" />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative group px-1"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    if (item.label === 'Services') setIsServicesOpen(true);
                    if (item.label === 'Tools') setIsAssessmentsOpen(true);
                  }
                }}
                onMouseLeave={() => {
                  if (item.hasDropdown) {
                    if (item.label === 'Services') setIsServicesOpen(false);
                    if (item.label === 'Tools') setIsAssessmentsOpen(false);
                  }
                }}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center group-hover:bg-white/5 ${isActive(item)
                        ? 'text-viability-primary text-glow-mild bg-white/5'
                        : 'text-slate-300 hover:text-white'
                        }`}
                    >
                      {item.label}
                      <SafeIcon icon={FiChevronDown} className={`w-4 h-4 ml-1 transition-transform duration-300 ${(item.label === 'Services' && isServicesOpen) || (item.label === 'Tools' && isAssessmentsOpen)
                        ? 'rotate-180 text-viability-primary' : ''
                        }`} />
                    </button>

                    {/* Premium Dropdown Menu */}
                    <AnimatePresence>
                      {((item.label === 'Services' && isServicesOpen) ||
                        (item.label === 'Tools' && isAssessmentsOpen)) && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 glass-dark border border-white/10 rounded-xl py-2 w-72 shadow-xl overflow-hidden backdrop-blur-xl"
                          >
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            {item.dropdownItems.map((dropdownItem, i) => (
                              dropdownItem.external ? (
                                <a
                                  key={i}
                                  href={dropdownItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`relative block px-5 py-3 text-sm transition-all duration-200 border-l-2 border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-500`}
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setIsAssessmentsOpen(false);
                                  }}
                                >
                                  {dropdownItem.label}
                                </a>
                              ) : (
                                <Link
                                  key={i}
                                  to={dropdownItem.href}
                                  className={`relative block px-5 py-3 text-sm transition-all duration-200 border-l-2 ${isActiveSubItem(dropdownItem.href)
                                    ? 'border-viability-primary bg-white/5 text-viability-primary'
                                    : 'border-transparent text-slate-400 hover:text-white hover:bg-white/5 hover:border-slate-500'
                                    }`}
                                  onClick={() => {
                                    setIsServicesOpen(false);
                                    setIsAssessmentsOpen(false);
                                  }}
                                >
                                  {dropdownItem.label}
                                </Link>
                              )
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block hover:bg-white/5 ${isActive(item)
                      ? 'text-viability-primary text-glow-mild bg-white/5'
                      : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden lg:flex items-center space-x-4 ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/roi-calculator"
              className="relative group px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-viability-primary to-factory-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
              <span className="relative text-white flex items-center gap-2">
                Calculate Savings
              </span>
            </Link>

            <a
              href="https://handvantage.co/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              Contact
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden fixed inset-x-0 top-[80px] p-4 glass-dark border-b border-white/10 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <div key={item.label} className="overflow-hidden">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.label === 'Services') setIsServicesOpen(!isServicesOpen);
                            if (item.label === 'Tools') setIsAssessmentsOpen(!isAssessmentsOpen);
                          }}
                          className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${isActive(item) ? 'bg-white/5 text-viability-primary' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          <span className="font-medium">{item.label}</span>
                          <SafeIcon
                            icon={FiChevronDown}
                            className={`w-4 h-4 transition-transform duration-300 ${(item.label === 'Services' && isServicesOpen) ||
                              (item.label === 'Tools' && isAssessmentsOpen) ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {((item.label === 'Services' && isServicesOpen) ||
                            (item.label === 'Tools' && isAssessmentsOpen)) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 mt-1 border-l border-white/10 ml-3"
                              >
                                {item.dropdownItems.map((dropdownItem, i) => (
                                  dropdownItem.external ? (
                                    <a
                                      key={i}
                                      href={dropdownItem.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`block py-2 px-3 rounded-md text-sm transition-colors text-slate-400 hover:text-white hover:bg-white/5`}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {dropdownItem.label}
                                    </a>
                                  ) : (
                                    <Link
                                      key={i}
                                      to={dropdownItem.href}
                                      className={`block py-2 px-3 rounded-md text-sm transition-colors ${isActiveSubItem(dropdownItem.href)
                                        ? 'text-viability-primary bg-white/5'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                      onClick={() => setIsMenuOpen(false)}
                                    >
                                      {dropdownItem.label}
                                    </Link>
                                  )
                                ))}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className={`block p-3 rounded-lg font-medium transition-colors ${isActive(item) ? 'bg-white/5 text-viability-primary' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 space-y-3 mt-4 border-t border-white/10">
                  <Link
                    to="/roi-calculator"
                    className="block w-full bg-gradient-to-r from-viability-primary to-factory-400 text-white px-6 py-3 rounded-lg font-semibold text-center shadow-lg shadow-viability-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Calculate Savings
                  </Link>
                  <a
                    href="https://handvantage.co/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/5"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
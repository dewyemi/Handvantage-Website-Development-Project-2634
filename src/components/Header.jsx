import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const { FiMenu, FiX, FiChevronDown, FiZap, FiShield, FiCloud, FiCpu, FiUsers, FiLock } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services menu items
  const services = [
    {
      label: 'AI Workforce',
      href: '/services/ai-workforce',
      icon: FiCpu,
      description: 'Deploy autonomous AI agents',
      badge: 'NEW'
    },
    {
      label: 'Managed Security',
      href: '/services/managed-security',
      icon: FiShield,
      description: '24/7 SOC & threat response'
    },
    {
      label: 'Business Automation',
      href: '/services/business-automation',
      icon: FiZap,
      description: 'Process optimization & efficiency'
    },
    {
      label: 'Cloud Infrastructure',
      href: '/services/cloud-infrastructure',
      icon: FiCloud,
      description: 'Scalable cloud architecture'
    },
    {
      label: 'Cybersecurity',
      href: '/services/cybersecurity',
      icon: FiLock,
      description: 'Comprehensive security strategy'
    },
    {
      label: 'Digital Transformation',
      href: '/services/digital-transformation',
      icon: FiUsers,
      description: 'Strategic technology planning'
    },
  ];

  const navItems = [
    { label: 'SERVICES', hasDropdown: true },
    { label: 'THE DOCTRINE', href: '/manifesto', path: '/manifesto' },
    { label: 'THE MATH', href: '/roi-calculator', path: '/roi-calculator' },
    { label: 'BOOK BRIEFING', href: 'https://handvantage.co/contact', path: '', external: true }
  ];

  const isActive = (item) => {
    if (item.label === 'SERVICES' && location.pathname.includes('/services')) return true;
    if (item.path && location.pathname === item.path) return true;
    return false;
  };

  const handleNavClick = (href, external) => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);

    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
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
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`px-4 py-2 sharp-edges text-sm font-bold tracking-wider transition-all duration-300 flex items-center gap-2 hover:bg-white/5 ${isActive(item)
                        ? 'text-viability-primary text-glow-mild bg-white/5'
                        : 'text-slate-300 hover:text-white'
                        }`}
                    >
                      {item.label}
                      <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-[320px] glass-dark border border-white/10 sharp-edges shadow-2xl overflow-hidden"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2">
                            {services.map((service, idx) => (
                              <Link
                                key={service.href}
                                to={service.href}
                                className="group/item flex items-start gap-3 p-3 sharp-edges hover:bg-white/5 transition-all"
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  handleNavClick(service.href, false);
                                }}
                              >
                                <div className="flex-shrink-0 mt-1">
                                  <SafeIcon icon={service.icon} className="w-5 h-5 text-signal group-hover/item:text-viability-primary transition-colors" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-white text-sm group-hover/item:text-viability-primary transition-colors">
                                      {service.label}
                                    </span>
                                    {service.badge && (
                                      <span className="terminal-text text-[9px] px-2 py-0.5 bg-signal/20 text-signal border border-signal/40 sharp-edges">
                                        {service.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-slate-400 leading-tight">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`px-4 py-2 sharp-edges text-sm font-bold tracking-wider transition-all duration-300 block hover:bg-white/5 ${isActive(item)
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

          {/* CTA Buttons */}
          <motion.div
            className="hidden lg:flex items-center space-x-4 ml-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/roi-calculator"
              className="relative group px-6 py-2.5 sharp-edges font-semibold text-sm overflow-hidden"
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
              className="px-6 py-2.5 sharp-edges font-bold text-sm border border-signal/40 text-signal hover:bg-signal hover:text-void transition-all duration-300 tracking-widest"
            >
              [DEPLOY]
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
                {/* Services Accordion */}
                <div>
                  <button
                    className="w-full flex items-center justify-between p-3 sharp-edges font-medium transition-colors uppercase tracking-widest text-slate-300 hover:bg-white/5 hover:text-white"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    <span>SERVICES</span>
                    <SafeIcon icon={FiChevronDown} className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className="flex items-center gap-3 p-3 sharp-edges text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            <SafeIcon icon={service.icon} className="w-4 h-4 text-signal" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold">{service.label}</span>
                                {service.badge && (
                                  <span className="terminal-text text-[8px] px-1.5 py-0.5 bg-signal/20 text-signal border border-signal/40 sharp-edges">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Other Nav Items */}
                {navItems.filter(item => !item.hasDropdown).map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`block p-3 sharp-edges font-medium transition-colors uppercase tracking-widest ${isActive(item) ? 'bg-white/5 text-viability-primary' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile CTAs */}
                <div className="pt-4 space-y-3 mt-4 border-t border-white/10">
                  <Link
                    to="/roi-calculator"
                    className="block w-full bg-gradient-to-r from-viability-primary to-factory-400 text-white px-6 py-3 sharp-edges font-semibold text-center shadow-lg shadow-viability-primary/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Calculate Savings
                  </Link>
                  <a
                    href="https://handvantage.co/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-signal/40 text-signal px-6 py-3 sharp-edges font-bold text-center hover:bg-signal hover:text-void transition-all tracking-widest"
                  >
                    [DEPLOY]
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

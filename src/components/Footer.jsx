import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGlobe, FiZap, FiShield, FiCloud, FiBot } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Strategic Technology Planning', link: '/services/digital-transformation', icon: FiZap },
    { name: 'Business Protection Strategy', link: '/services/cybersecurity', icon: FiShield },
    { name: 'Scalable Infrastructure Strategy', link: '/services/cloud-infrastructure', icon: FiCloud },
    { name: 'Process Optimization Strategy', link: '/services/business-automation', icon: FiBot }
  ];

  const assessments = [
    { name: 'Digital Transformation Assessment', link: 'https://secvantages.com', icon: FiZap, external: true },
    { name: 'Cybersecurity Risk Assessment', link: 'https://secvantages.com', icon: FiShield, external: true },
    { name: 'Maturity Roadmap Generator', link: 'https://secvantages.com', icon: FiShield, external: true }
  ];

  const technologyCapabilities = [
    'Cloud Infrastructure',
    'Security Management',
    'Process Automation',
    'Compliance Systems',
    'Communication Platforms',
    'Device Management'
  ];

  const handleSmoothScroll = (href) => {
    if (href.includes('#')) {
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : '#');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-viability-primary/30 to-transparent" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-viability-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-factory-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center space-x-3">
                <Logo size="default" variant="icon-only" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold text-white group-hover:text-glow transition-all duration-300">
                    Handvantage
                  </h3>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed font-bold tracking-wide">
              HANDVANTAGE: THE SERVICE LAYER.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary-blue/20 transition-colors">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-blue" />
                </div>
                <a
                  href="tel:+12362350919"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  236-235-0919
                </a>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-viability-primary pl-3">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/manifesto"
                  className="text-slate-400 hover:text-viability-primary transition-colors flex items-center group"
                >
                  <SafeIcon icon={FiShield} className="w-4 h-4 mr-3 text-slate-500 group-hover:text-viability-primary transition-colors" />
                  The Doctrine
                </Link>
              </li>
              <li>
                <Link
                  to="/roi-calculator"
                  className="text-slate-400 hover:text-viability-primary transition-colors flex items-center group"
                >
                  <SafeIcon icon={FiZap} className="w-4 h-4 mr-3 text-slate-500 group-hover:text-viability-primary transition-colors" />
                  The Calculator
                </Link>
              </li>
              <li>
                <a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-viability-primary transition-colors flex items-center group"
                >
                  <SafeIcon icon={FiPhone} className="w-4 h-4 mr-3 text-slate-500 group-hover:text-viability-primary transition-colors" />
                  The Briefing
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Assessments & Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Removed Growth Tools section to simplify footer as per master copy */}
            <h4 className="text-lg font-semibold mb-4 text-white border-l-4 border-slate-600 pl-3">Capabilities</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/cloud-infrastructure" className="text-slate-400 hover:text-white transition-colors text-sm block py-1">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/managed-security" className="text-slate-400 hover:text-white transition-colors text-sm block py-1">
                  Security Management
                </Link>
              </li>
              <li>
                <Link to="/services/business-automation" className="text-slate-400 hover:text-white transition-colors text-sm block py-1">
                  Process Automation
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-white/20 pl-3">Strategic Consultation</h4>
            <div className="space-y-5">
              <Link
                to="/about"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group"
              >
                <SafeIcon icon={FiGlobe} className="w-5 h-5 group-hover:text-viability-primary transition-colors" />
                <span>About Josh</span>
              </Link>
              <a
                href="https://linkedin.com/in/josh-olayemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors group"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5 group-hover:text-[#0077b5] transition-colors" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://handvantage.co/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gradient-to-r from-viability-primary to-factory-500 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-viability-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <p className="text-xs text-slate-500 mt-2 text-center">
                Ready to address the technology challenges effecting your growth?
              </p>
            </div>
          </motion.div>
        </div>

        {/* Global Disclaimer */}
        <motion.div
          className="border-t border-white/5 pt-8 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              <strong className="text-slate-400">Important:</strong> The information provided on this website, including descriptions of services, tools, and potential outcomes, is for general informational purposes only. Results from services and tools will vary based on your specific business environment, implementation approach, and other factors. Any examples, estimates, or potential outcomes are provided for illustrative purposes only and are not guarantees of specific results. We recommend consulting with a qualified professional to discuss your specific needs and circumstances.
            </p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Handvantage. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
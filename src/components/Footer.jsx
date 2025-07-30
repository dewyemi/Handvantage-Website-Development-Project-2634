import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { Link } from 'react-router-dom';

const { FiPhone, FiMail, FiMapPin, FiLinkedin, FiGlobe, FiZap, FiShield, FiCloud, FiBot } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Digital Transformation', link: '/services/digital-transformation', icon: FiZap },
    { name: 'Cybersecurity Solutions', link: '/services/cybersecurity', icon: FiShield },
    { name: 'Cloud Infrastructure', link: '/services/cloud-infrastructure', icon: FiCloud },
    { name: 'Business Automation', link: '/services/business-automation', icon: FiBot }
  ];

  const partners = [
    'Microsoft CSP',
    'RTILA AI',
    'Check Point',
    'IRONSCALES',
    'Pax8',
    'Vanta'
  ];

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-primary-purple rounded-lg flex items-center justify-center">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844909342-handvantage-New.png"
                  alt="Handvantage"
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-bold">Handvantage</h3>
            </Link>
            <p className="text-slate-300 mb-4">
              Transforming businesses through enterprise-grade technology partnerships and expert consultation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-blue" />
                <a href="tel:+12362350919" className="text-slate-300 hover:text-white transition-colors">
                  236-235-0919
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-blue" />
                <a href="mailto:josh@handvantage.com" className="text-slate-300 hover:text-white transition-colors">
                  josh@handvantage.com
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
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.link}
                    className="text-slate-300 hover:text-white transition-colors flex items-center"
                  >
                    <SafeIcon icon={service.icon} className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors flex items-center">
                  <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" />
                  About Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Partners</h4>
            <ul className="space-y-2">
              {partners.map((partner, index) => (
                <li key={index}>
                  <a href="#partnerships" className="text-slate-300 hover:text-white transition-colors">
                    {partner}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Connect</h4>
            <div className="space-y-4">
              <Link
                to="/about"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiGlobe} className="w-5 h-5" />
                <span>About Josh</span>
              </Link>
              <a
                href="https://linkedin.com/in/josh-olayemi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="#contact"
                className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Handvantage. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>Built with expertise and partnerships</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
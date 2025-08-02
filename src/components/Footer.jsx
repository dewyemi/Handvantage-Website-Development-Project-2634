import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Logo from './Logo';
import {Link} from 'react-router-dom';

const {FiPhone, FiMail, FiMapPin, FiLinkedin, FiGlobe, FiZap, FiShield, FiCloud, FiBot} = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    {name: 'Strategic Technology Planning', link: '/services/digital-transformation', icon: FiZap},
    {name: 'Business Protection Strategy', link: '/services/cybersecurity', icon: FiShield},
    {name: 'Scalable Infrastructure Strategy', link: '/services/cloud-infrastructure', icon: FiCloud},
    {name: 'Process Optimization Strategy', link: '/services/business-automation', icon: FiBot}
  ];

  const assessments = [
    {name: 'Digital Transformation Assessment', link: '/assessment', icon: FiZap},
    {name: 'Cybersecurity Risk Assessment', link: '/security-assessment', icon: FiShield}
  ];

  const partners = [
    'Microsoft CSP',
    'RTILA AI',
    'Check Point',
    'IRONSCALES',
    'Pax8',
    'Vanta'
  ];

  const handleSmoothScroll = (href) => {
    if (href.includes('#')) {
      const element = document.querySelector(href.split('#')[1] ? `#${href.split('#')[1]}` : '#');
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  };

  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center space-x-3">
                <Logo size="default" variant="icon-only" />
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Handvantage
                  </h3>
                </div>
              </div>
            </Link>
            <p className="text-slate-300 mb-4">
              Strategic technology consulting that eliminates growth bottlenecks and creates competitive advantages for growing businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-blue" />
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
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.1}}
            viewport={{once: true}}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Strategic Services</h4>
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
            </ul>
          </motion.div>

          {/* Assessments & Partners */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.2}}
            viewport={{once: true}}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Growth Tools</h4>
            <ul className="space-y-2 mb-6">
              {assessments.map((assessment, index) => (
                <li key={index}>
                  <Link
                    to={assessment.link}
                    className="text-slate-300 hover:text-white transition-colors flex items-center"
                  >
                    <SafeIcon icon={assessment.icon} className="w-4 h-4 mr-2" />
                    {assessment.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Strategic Partners</h4>
            <ul className="space-y-2">
              {partners.slice(0, 3).map((partner, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleSmoothScroll('/#partnerships')}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                  >
                    {partner}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.3}}
            viewport={{once: true}}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-blue">Strategic Consultation</h4>
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
                href="https://handvantage.co/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Strategic Consultation
              </a>
              <p className="text-sm text-slate-400 mt-2">
                Ready to eliminate the technology bottlenecks limiting your growth?
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{once: true}}
        >
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            © {currentYear} Handvantage. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <span>Strategic expertise and enterprise partnerships</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
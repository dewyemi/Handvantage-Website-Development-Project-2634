import React from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiShield, FiMail, FiMonitor, FiLock, FiCheckCircle, FiAlertTriangle, FiXCircle, FiClock, FiTarget, FiPhone, FiUser, FiFileText, FiRefreshCw, FiDollarSign, FiTrendingUp, FiEye, FiActivity} = FiIcons;

const CybersecurityAssessmentLanding = () => {
  const securityDomains = [
    {icon: FiMail, title: "Email Security", description: "Phishing protection, user training, encryption, and threat response", color: "#dc2626"},
    {icon: FiShield, title: "Network Security", description: "Firewall protection, intrusion detection, VPN security, and monitoring", color: "#7c2d12"},
    {icon: FiMonitor, title: "Endpoint Protection", description: "Device management, antivirus, encryption, and mobile security", color: "#991b1b"},
    {icon: FiFileText, title: "Compliance & Governance", description: "HIPAA, SOC 2, access controls, and audit logging", color: "#be123c"},
    {icon: FiRefreshCw, title: "Business Continuity", description: "Backup procedures, disaster recovery, and crisis management", color: "#9f1239"}
  ];

  const riskLevels = [
    {level: "Extreme Risk", range: "0-99 Points", description: "Business-threatening vulnerabilities requiring emergency response", color: "#991b1b", icon: FiXCircle},
    {level: "Critical Risk", range: "100-199 Points", description: "Critical vulnerabilities requiring immediate remediation", color: "#dc2626", icon: FiAlertTriangle},
    {level: "High Risk", range: "200-299 Points", description: "Significant vulnerabilities requiring urgent attention", color: "#f97316", icon: FiAlertTriangle},
    {level: "Moderate Risk", range: "300-399 Points", description: "Good foundation with several security improvements needed", color: "#eab308", icon: FiEye},
    {level: "Secure", range: "400-500 Points", description: "Strong security posture with minor optimization opportunities", color: "#16a34a", icon: FiShield}
  ];

  const threatStatistics = [
    {stat: "95%", description: "of cyberattacks start with email", icon: FiMail, color: "#dc2626"},
    {stat: "$4.45M", description: "average cost of a data breach", icon: FiDollarSign, color: "#dc2626"},
    {stat: "277 days", description: "average time to identify a breach", icon: FiClock, color: "#dc2626"},
    {stat: "43%", description: "of attacks target small businesses", icon: FiTarget, color: "#dc2626"}
  ];

  const partnerSolutions = [
    {partner: "IRONSCALES", solution: "Email Security", description: "AI-powered email security protecting 16,000+ organizations", benefits: ["Eliminate phishing-based business disruption", "Maintain operational continuity", "Protect client relationships"], color: "#f59e0b"},
    {partner: "Check Point", solution: "Network Security", description: "Next-generation firewall with advanced threat prevention", benefits: ["Prevent business disruption from network attacks", "Maintain operational integrity", "Protect sensitive business data"], color: "#dc2626"},
    {partner: "Swif.ai", solution: "Device Management", description: "AI-powered device visibility and Shadow IT discovery", benefits: ["Complete visibility into business technology usage", "Eliminate unauthorized application risks", "Maintain operational control"], color: "#2563eb"},
    {partner: "Vanta", solution: "Compliance Automation", description: "Automated compliance for SOC 2, HIPAA, ISO 27001", benefits: ["14-day compliance vs. 6+ months manual process", "Open new market opportunities through certification", "Build trust with enterprise clients"], color: "#16a34a"}
  ];

  const industryThreats = [
    {industry: "Healthcare", threats: ["Business disruption from ransomware", "Patient data exposure", "Regulatory penalties"], compliance: "HIPAA, HITECH"},
    {industry: "Financial Services", threats: ["Business operations interruption", "Client trust erosion", "Regulatory penalties"], compliance: "PCI DSS, SOX"},
    {industry: "Legal", threats: ["Client confidentiality breaches", "Business reputation damage", "Privilege violations"], compliance: "Attorney-client privilege"},
    {industry: "Manufacturing", threats: ["Production disruption", "IP theft", "Supply chain compromise"], compliance: "NIST, ISO 27001"}
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-red-900 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              className="space-y-8"
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <div>
                <motion.div
                  className="inline-flex items-center bg-red-900/30 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                >
                  🚨 Free Business Protection Assessment
                </motion.div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.3}}
                >
                  Identify Business
                  <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    {' '}Protection Gaps
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.4}}
                >
                  Comprehensive 25-question assessment across 5 critical security domains. Get your risk score, vulnerability analysis, and strategic business protection roadmap.
                </motion.p>
              </div>
              {/* Threat Statistics */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
              >
                {threatStatistics.map((stat, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-400 mb-1">{stat.stat}</div>
                    <div className="text-xs text-gray-300">{stat.description}</div>
                  </div>
                ))}
              </motion.div>
              {/* CTA Button */}
              <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.6}}
              >
                <Link
                  to="/security-assessment/start"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg"
                >
                  Start Business Protection Assessment <SafeIcon icon={FiShield} className="w-5 h-5 ml-2" />
                </Link>
                <p className="text-sm text-gray-400 mt-3">
                  25 questions • 15-20 minutes • Detailed risk analysis
                </p>
              </motion.div>
            </motion.div>
            {/* Right Column - Assessment Preview */}
            <motion.div
              className="relative"
              initial={{opacity: 0, x: 30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <div className="bg-slate-800 rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Business Protection Domains</h3>
                  <p className="text-gray-300">Comprehensive evaluation across 5 critical areas</p>
                </div>
                <div className="space-y-4">
                  {securityDomains.map((domain, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg border border-slate-600 hover:border-red-500 transition-colors"
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{delay: 0.2 + index * 0.1}}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{backgroundColor: `${domain.color}30`}}
                      >
                        <SafeIcon icon={domain.icon} className="w-5 h-5" style={{color: domain.color}} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{domain.title}</h4>
                        <p className="text-sm text-gray-400">{domain.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Levels Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Understanding Your Business Protection Score
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our weighted scoring system evaluates your protection posture across all domains
            </p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {riskLevels.map((level, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{backgroundColor: level.color}}
                >
                  <SafeIcon icon={level.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-400 mb-2">{level.range}</div>
                <div
                  className="text-lg font-bold mb-3"
                  style={{color: level.color}}
                >
                  {level.level}
                </div>
                <p className="text-xs text-gray-400">{level.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Threats */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Business Risks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Different industries face unique business protection challenges and compliance requirements
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryThreats.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-slate-700 rounded-xl p-6 border border-slate-600"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <h3 className="text-xl font-bold text-white mb-4">{industry.industry}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-red-400 mb-2">Business Impact Risks:</h4>
                  <ul className="space-y-1">
                    {industry.threats.map((threat, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-center">
                        <SafeIcon icon={FiAlertTriangle} className="w-3 h-3 text-red-400 mr-2" /> {threat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Compliance Requirements:</h4>
                  <p className="text-sm text-gray-300">{industry.compliance}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Solutions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Strategic Business Protection Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Based on your assessment results, we recommend specific business protection strategies
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnerSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-xl p-6 border border-slate-600"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{backgroundColor: `${solution.color}30`}}
                  >
                    <SafeIcon icon={FiShield} className="w-6 h-6" style={{color: solution.color}} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{solution.partner}</h3>
                    <p className="text-sm font-medium" style={{color: solution.color}}>{solution.solution}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <h4 className="text-sm font-semibold text-gray-200 mb-2">Business Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-2" style={{color: solution.color}} /> {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-6">
              Don't Wait for a Business Disruption
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Take our comprehensive business protection assessment and get your personalized strategic roadmap today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <Link
                  to="/security-assessment/start"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center"
                >
                  Start Protection Assessment <SafeIcon icon={FiShield} className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.a
                href="tel:+12362350919"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors duration-300 inline-flex items-center"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Business Protection: 236-235-0919
              </motion.a>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" /> 15-20 minutes
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-1" /> No obligation
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" /> Strategic analysis
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAssessmentLanding;
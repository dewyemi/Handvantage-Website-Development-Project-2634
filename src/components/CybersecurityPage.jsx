import React, {useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiShield, FiMail, FiMonitor, FiCheckCircle, FiCloud, FiAlertTriangle, FiClock, FiUsers, FiTrendingDown, FiDollarSign, FiFileText, FiMap, FiCheckSquare, FiTrendingUp, FiEye, FiLock, FiPhone, FiX, FiLoader} = FiIcons;

const CybersecurityPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    securityConcerns: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  // Security partners for hero section
  const securityPartners = [
    {icon: FiMail, title: "IRONSCALES", badge: "16,000+ Orgs", color: "#f59e0b"},
    {icon: FiShield, title: "Check Point", badge: "Network Security", color: "#dc2626"},
    {icon: FiCheckCircle, title: "Vanta", badge: "Compliance", color: "#16a34a"},
    {icon: FiMonitor, title: "Swif.ai", badge: "Device Security", color: "#2563eb"}
  ];

  // Security layers
  const securityLayers = [
    {
      icon: FiMail,
      title: "Layer 1: Email Security (IRONSCALES)",
      subtitle: "Advanced Email Threat Protection",
      description: "IRONSCALES protects 16,000+ organizations worldwide with AI-powered email security that stops phishing, BEC, and advanced threats that traditional email security misses.",
      features: [
        "AI-powered phishing detection and prevention",
        "Business Email Compromise (BEC) protection",
        "Advanced threat intelligence and response",
        "User awareness training and simulation",
        "Automated incident response and remediation"
      ],
      bg: "#fef3c7",
      border: "#fbbf24",
      iconBg: "#f59e0b"
    },
    {
      icon: FiShield,
      title: "Layer 2: Network Security (Check Point)",
      subtitle: "Next-Generation Firewall Protection",
      description: "Check Point's industry-leading network security provides comprehensive protection against network-based attacks with advanced threat prevention and zero-day protection.",
      features: [
        "Next-generation firewall with deep packet inspection",
        "Intrusion prevention system (IPS)",
        "Advanced threat prevention and sandboxing",
        "VPN and secure remote access",
        "Network segmentation and access control"
      ],
      bg: "#fee2e2",
      border: "#fca5a5",
      iconBg: "#dc2626"
    },
    {
      icon: FiMonitor,
      title: "Layer 3: Device Security (Swif.ai)",
      subtitle: "AI-Powered Device Management and Shadow IT Discovery",
      description: "Swif.ai provides complete visibility and control over all devices and applications in your environment, including Shadow IT discovery and management.",
      features: [
        "Complete device inventory and management",
        "Shadow IT discovery and risk assessment",
        "Application usage monitoring and control",
        "Automated compliance and policy enforcement",
        "Real-time security posture monitoring"
      ],
      bg: "#dbeafe",
      border: "#93c5fd",
      iconBg: "#2563eb"
    },
    {
      icon: FiCheckCircle,
      title: "Layer 4: Compliance Automation (Vanta)",
      subtitle: "Automated Compliance and Risk Management",
      description: "Vanta automates compliance for SOC 2, HIPAA, ISO 27001, and other frameworks, providing continuous monitoring and evidence collection.",
      features: [
        "Automated compliance monitoring and reporting",
        "SOC 2, HIPAA, ISO 27001, and PCI DSS support",
        "Continuous security posture assessment",
        "Automated evidence collection and management",
        "Risk assessment and remediation guidance"
      ],
      bg: "#dcfce7",
      border: "#86efac",
      iconBg: "#16a34a"
    },
    {
      icon: FiCloud,
      title: "Layer 5: Microsoft Security (Defender)",
      subtitle: "Integrated Cloud and Endpoint Protection",
      description: "Microsoft Defender provides comprehensive protection across endpoints, cloud workloads, and identity with integrated threat intelligence.",
      features: [
        "Advanced endpoint detection and response (EDR)",
        "Cloud workload protection and monitoring",
        "Identity and access management security",
        "Integrated threat intelligence and hunting",
        "Automated investigation and response"
      ],
      bg: "#f3e8ff",
      border: "#c4b5fd",
      iconBg: "#7c3aed"
    }
  ];

  // Assessment steps
  const assessmentSteps = [
    {number: "1", title: "Infrastructure Audit", description: "Complete inventory of systems, networks, and applications", color: "#dc2626"},
    {number: "2", title: "Vulnerability Assessment", description: "Identify security weaknesses and potential attack vectors", color: "#f59e0b"},
    {number: "3", title: "Compliance Gap Analysis", description: "Assess current compliance status against required frameworks", color: "#2563eb"},
    {number: "4", title: "Risk Prioritization", description: "Rank risks by business impact and likelihood", color: "#16a34a"},
    {number: "5", title: "Remediation Roadmap", description: "Detailed plan for addressing identified security gaps", color: "#7c3aed"}
  ];

  // Assessment deliverables
  const assessmentDeliverables = [
    {icon: FiFileText, title: "Executive Summary Report", description: "High-level overview for leadership decision-making", color: "#2563eb"},
    {icon: FiAlertTriangle, title: "Vulnerability Assessment", description: "Detailed analysis of security weaknesses and risks", color: "#dc2626"},
    {icon: FiCheckSquare, title: "Compliance Status Report", description: "Current compliance posture and gap analysis", color: "#16a34a"},
    {icon: FiTrendingUp, title: "Risk Prioritization Matrix", description: "Risks ranked by business impact and urgency", color: "#f59e0b"},
    {icon: FiMap, title: "Security Roadmap", description: "90-day, 6-month, and 1-year implementation plan", color: "#7c3aed"},
    {icon: FiDollarSign, title: "ROI Projections", description: "Cost-benefit analysis for recommended solutions", color: "#059669"}
  ];

  // Threat types and solutions
  const threatSolutions = [
    {
      icon: FiMail,
      title: "Phishing & Email Attacks",
      description: "95% of successful attacks start with email",
      solution: "IRONSCALES AI-powered protection stops sophisticated phishing, BEC, and email-based threats that traditional security misses.",
      badge: "IRONSCALES Protection",
      bg: "#fef3c7",
      border: "#fbbf24",
      iconBg: "#f59e0b"
    },
    {
      icon: FiShield,
      title: "Network Intrusions",
      description: "Network attacks bypass perimeter defenses",
      solution: "Check Point next-generation firewall with advanced threat prevention stops network-based attacks and zero-day exploits.",
      badge: "Check Point Protection",
      bg: "#fee2e2",
      border: "#fca5a5",
      iconBg: "#dc2626"
    },
    {
      icon: FiLock,
      title: "Ransomware",
      description: "$4.45M average cost of ransomware attacks",
      solution: "Multi-layered protection with endpoint detection, network monitoring, and automated backup prevents and mitigates ransomware.",
      badge: "Multi-Layer Defense",
      bg: "#fef2f2",
      border: "#fecaca",
      iconBg: "#991b1b"
    },
    {
      icon: FiUsers,
      title: "Insider Threats",
      description: "60% of attacks involve insider access",
      solution: "Swif.ai device monitoring and Microsoft identity protection detect unusual access patterns and unauthorized activities.",
      badge: "Behavioral Monitoring",
      bg: "#dbeafe",
      border: "#93c5fd",
      iconBg: "#2563eb"
    },
    {
      icon: FiAlertTriangle,
      title: "Compliance Violations",
      description: "$4.88M average cost of compliance failures",
      solution: "Vanta automated compliance monitoring ensures continuous adherence to SOC 2, HIPAA, and other frameworks.",
      badge: "Automated Compliance",
      bg: "#dcfce7",
      border: "#86efac",
      iconBg: "#16a34a"
    },
    {
      icon: FiEye,
      title: "Shadow IT",
      description: "83% of organizations have Shadow IT risks",
      solution: "Swif.ai provides complete visibility into all applications and devices, identifying and managing Shadow IT risks.",
      badge: "Complete Visibility",
      bg: "#f3e8ff",
      border: "#c4b5fd",
      iconBg: "#7c3aed"
    }
  ];

  // Cost statistics
  const costStatistics = [
    {icon: FiDollarSign, amount: "$4.45M", label: "Average cost of a data breach", color: "#dc2626"},
    {icon: FiClock, amount: "277 days", label: "Average time to identify and contain breach", color: "#f59e0b"},
    {icon: FiTrendingDown, amount: "60%", label: "Small businesses that close within 6 months", color: "#7c3aed"},
    {icon: FiUsers, amount: "95%", label: "Attacks succeed due to human error", color: "#2563eb"}
  ];

  // ROI metrics
  const roiMetrics = [
    {number: "15:1", label: "ROI on Security Investment", color: "#16a34a"},
    {number: "80%", label: "Reduction in Security Incidents", color: "#2563eb"},
    {number: "50%", label: "Faster Incident Response", color: "#7c3aed"},
    {number: "90%", label: "Compliance Automation", color: "#f59e0b"}
  ];

  // Form handlers
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.firstName.trim()) {errors.push('First Name is required');}
    if (!formData.lastName.trim()) {errors.push('Last Name is required');}
    if (!formData.company.trim()) {errors.push('Company Name is required');}
    if (!formData.email.trim()) {errors.push('Email is required');}
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (errors.length > 0) {
      setFormStatus({isSubmitting: false, isSuccess: false, error: errors.join(',')});
      return;
    }

    setFormStatus({isSubmitting: true, isSuccess: false, error: null});

    try {
      // Let Netlify handle the form submission
      const formElement = e.target;
      const response = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(new FormData(formElement)).toString()
      });

      if (response.ok) {
        setFormStatus({isSubmitting: false, isSuccess: true, error: null});
        // Reset form
        setFormData({firstName: '', lastName: '', email: '', phone: '', company: '', securityConcerns: ''});
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus({isSubmitting: false, isSuccess: false, error: null});
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({isSubmitting: false, isSuccess: false, error: 'Failed to submit form. Please try again or contact us directly at 236-235-0919'});
    }
  };

  const handleSmoothScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Security Message */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                viewport={{once: true}}
              >
                🛡️ Complete Cybersecurity Protection
              </motion.div>

              {/* Headline */}
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                viewport={{once: true}}
              >
                Enterprise-Grade Security That Actually Protects Your Business
              </motion.h1>

              {/* Value proposition */}
              <motion.p 
                className="text-lg text-slate-600"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                viewport={{once: true}}
              >
                Most small businesses think they can't afford enterprise-grade security. Josh's partnerships with IRONSCALES, CheckPoint, Vanta, and Swif.ai deliver Fortune 500-level protection at SME scale, backed by 20+ years of security expertise including leading tech companies like Oracle, Schneider and Amazon AWS.
              </motion.p>

              {/* Threat statistics */}
              <motion.div 
                className="bg-red-50 border border-red-200 rounded-lg p-5"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                viewport={{once: true}}
              >
                <h4 className="text-lg font-bold text-red-700 mb-3">⚠️ The Reality of Cyber Threats</h4>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>95%</strong> of successful cyber attacks are due to human error</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>$4.45M</strong> average cost of a data breach in 2023</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>277 days</strong> average time to identify and contain a breach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>43%</strong> of cyber attacks target small businesses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>60%</strong> of small companies go out of business within 6 months of a cyber attack</span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.6}}
                viewport={{once: true}}
              >
                <motion.button
                  onClick={() => handleSmoothScroll('security-assessment')}
                  className="bg-primary-warning text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  Get Business Protection Strategy
                </motion.button>
                <motion.button
                  onClick={() => handleSmoothScroll('solutions')}
                  className="border-2 border-primary-warning text-primary-warning px-8 py-4 rounded-lg font-semibold text-center hover:bg-primary-warning hover:text-white transition-colors duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  View Protection Solutions
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Security Partners Showcase */}
            <motion.div 
              className="lg:col-span-5"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <motion.h3 
                  className="text-2xl font-bold text-primary-dark text-center mb-6"
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                  viewport={{once: true}}
                >
                  Powered by Security Leaders
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {securityPartners.map((partner, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                      initial={{opacity: 0, scale: 0.8}}
                      whileInView={{opacity: 1, scale: 1}}
                      transition={{delay: 0.3 + index * 0.1}}
                      viewport={{once: true}}
                      whileHover={{y: -5}}
                    >
                      <SafeIcon icon={partner.icon} className="w-10 h-10 mx-auto mb-3" style={{color: partner.color}} />
                      <h4 className="font-bold text-primary-dark mb-1">{partner.title}</h4>
                      <span 
                        className="text-xs font-medium px-2 py-1 rounded-full" 
                        style={{backgroundColor: `${partner.color}20`, color: partner.color}}
                      >
                        {partner.badge}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Layered Security Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Complete Multi-Layered Security Protection
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade protection across every attack vector through strategic partnerships
            </p>
          </motion.div>

          {/* Security Layers */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {securityLayers.map((layer, index) => (
              <motion.div 
                key={index}
                className="security-layer"
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
              >
                <div 
                  className="rounded-xl p-8 flex flex-col md:flex-row gap-8 items-start" 
                  style={{backgroundColor: layer.bg, borderColor: layer.border, borderWidth: "1px"}}
                >
                  {/* Icon */}
                  <div className="md:flex-shrink-0 flex justify-center w-full md:w-auto">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center" 
                      style={{backgroundColor: layer.iconBg}}
                    >
                      <SafeIcon icon={layer.icon} className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">{layer.title}</h3>
                    <p className="font-medium mb-3">{layer.subtitle}</p>
                    <p className="text-slate-700 mb-4">{layer.description}</p>
                    <h4 className="font-bold text-primary-dark mb-2">Protection Includes:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {layer.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <SafeIcon 
                            icon={FiCheckCircle} 
                            className="w-5 h-5 mr-2 mt-0.5" 
                            style={{color: layer.iconBg}} 
                          />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Assessment Section */}
      <section id="security-assessment" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Assessment Process */}
            <motion.div 
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                Strategic Business Protection Assessment
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Before implementing any security solutions, we conduct a comprehensive assessment of your current security posture to identify vulnerabilities, gaps, and opportunities for creating competitive advantages through enhanced protection.
              </p>
              <div className="space-y-6">
                {assessmentSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    viewport={{once: true}}
                  >
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" 
                      style={{backgroundColor: step.color}}
                    >
                      <span className="text-white font-bold">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Assessment Deliverables */}
            <motion.div 
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
                  Strategic Deliverables
                </h3>
                <div className="space-y-6">
                  {assessmentDeliverables.map((deliverable, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4"
                      initial={{opacity: 0, y: 20}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{duration: 0.4, delay: 0.2 + index * 0.1}}
                      viewport={{once: true}}
                    >
                      <div 
                        className="p-2 rounded-lg flex-shrink-0" 
                        style={{backgroundColor: `${deliverable.color}15`}}
                      >
                        <SafeIcon icon={deliverable.icon} className="w-6 h-6" style={{color: deliverable.color}} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-dark mb-1">{deliverable.title}</h4>
                        <p className="text-slate-600 text-sm">{deliverable.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  onClick={() => handleSmoothScroll('contact')}
                  className="block w-full bg-primary-warning text-white text-center py-4 rounded-lg font-semibold mt-8 hover:bg-red-700 transition-colors duration-300"
                  whileHover={{scale: 1.02}}
                  whileTap={{scale: 0.98}}
                >
                  Schedule Your Business Protection Strategy Session
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Solutions by Threat Type Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Complete Protection Against Every Threat Type
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our partnership ecosystem provides specialized protection against all major cyber threats
            </p>
          </motion.div>

          {/* Threat Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatSolutions.map((threat, index) => (
              <motion.div 
                key={index}
                className="threat-card"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                whileHover={{y: -8}}
              >
                <div 
                  className="rounded-xl p-6 h-full flex flex-col" 
                  style={{backgroundColor: threat.bg, borderColor: threat.border, borderWidth: "1px"}}
                >
                  {/* Icon */}
                  <SafeIcon icon={threat.icon} className="w-12 h-12 mb-4 mx-auto" style={{color: threat.iconBg}} />
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark mb-2 text-center">
                    {threat.title}
                  </h3>
                  
                  {/* Stats */}
                  <p className="font-bold text-center mb-4 text-sm">
                    {threat.description}
                  </p>
                  
                  {/* Description */}
                  <p className="text-slate-700 text-sm mb-6 flex-grow">
                    {threat.solution}
                  </p>
                  
                  {/* Badge */}
                  <div className="text-center">
                    <span 
                      className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-white" 
                      style={{backgroundColor: threat.iconBg}}
                    >
                      {threat.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security ROI & Business Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Cost of Breaches */}
            <motion.div 
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                The True Cost of Cyber Attacks
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Cyber attacks can be devastating for businesses of all sizes, but especially for small and medium enterprises that may not have the resources to recover.
              </p>
              <div className="space-y-4">
                {costStatistics.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    viewport={{once: true}}
                  >
                    <SafeIcon icon={stat.icon} className="w-8 h-8" style={{color: stat.color}} />
                    <div>
                      <p className="text-2xl font-bold" style={{color: stat.color}}>
                        {stat.amount}
                      </p>
                      <p className="text-slate-600 text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Security Investment ROI */}
            <motion.div 
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
                  Business Protection ROI
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {roiMetrics.map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                      initial={{opacity: 0, scale: 0.8}}
                      whileInView={{opacity: 1, scale: 1}}
                      transition={{duration: 0.4, delay: 0.2 + index * 0.1}}
                      viewport={{once: true}}
                      whileHover={{y: -5}}
                    >
                      <p className="text-2xl font-bold mb-1" style={{color: metric.color}}>
                        {metric.number}
                      </p>
                      <p className="text-slate-600 text-xs">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 mb-2">
                    Every $1 invested in cybersecurity saves $15 in potential breach costs
                  </p>
                  <p className="text-slate-600 text-sm">
                    Our partnership-powered security solutions deliver measurable ROI through reduced risk, faster response times, and automated compliance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Protected Today Section */}
      <section className="py-20 bg-gradient-to-r from-primary-warning to-red-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-4">
              Don't Wait for a Cyber Attack
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Every day without proper business protection strategy puts your growth at risk. Get enterprise-grade security today with our partnership-powered solutions.
            </p>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
              viewport={{once: true}}
            >
              <h3 className="text-2xl font-bold mb-4">🛡️ Free Business Protection Strategy Session</h3>
              <div className="mb-6">
                <p className="font-semibold mb-3">Comprehensive Security Analysis & Strategic Recommendations</p>
                <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-left">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-red-200 mr-2" />
                    <span>Complete business risk assessment</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-red-200 mr-2" />
                    <span>Multi-layered protection strategy</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-red-200 mr-2" />
                    <span>Competitive advantage analysis</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-red-200 mr-2" />
                    <span>ROI projections for security investments</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-red-200 mr-2" />
                    <span>90-day implementation timeline</span>
                  </li>
                </ul>
              </div>
              <p className="text-center font-semibold text-xl">
                Value: $3,500 | Your Investment: $0
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}
              viewport={{once: true}}
            >
              <motion.button
                onClick={() => handleSmoothScroll('contact')}
                className="bg-white text-primary-warning px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Get Your Free Business Protection Strategy
              </motion.button>
              <motion.a 
                href="tel:+12362350919"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-primary-warning transition-colors duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Strategic Consultation: 236-235-0919</span>
              </motion.a>
            </motion.div>
            <p className="text-red-100 text-sm mt-4">
              24/7 security support • No obligation • Immediate business risk assessment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <motion.div 
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold mb-6">Schedule Your Business Protection Strategy Session</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below to schedule your free business protection strategy session with Josh and start protecting your growth potential today.
              </p>
              
              {/* Success Message */}
              {formStatus.isSuccess && (
                <motion.div 
                  className="bg-green-500 text-white p-4 rounded-lg mb-6"
                  initial={{opacity: 0, y: -20}}
                  animate={{opacity: 1, y: 0}}
                >
                  <div className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                    <span>Thank you! Your business protection strategy request has been submitted successfully. Josh will contact you within 24 hours to discuss how we can protect your business while creating competitive advantages.</span>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <motion.div 
                  className="bg-red-500 text-white p-4 rounded-lg mb-6"
                  initial={{opacity: 0, y: -20}}
                  animate={{opacity: 1, y: 0}}
                >
                  <p>{formStatus.error}</p>
                </motion.div>
              )}

              {/* Netlify Form */}
              <form 
                name="security-assessment-contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="security-assessment-contact" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">
                      First Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">
                      Last Name <span className="text-red-400">*</span>
                    </label>
                    <input 
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                    Company Name <span className="text-red-400">*</span>
                  </label>
                  <input 
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="securityConcerns" className="block text-sm font-medium text-slate-300 mb-1">
                    What business outcomes do you want to achieve with your protection strategy?
                  </label>
                  <textarea 
                    id="securityConcerns"
                    name="securityConcerns"
                    value={formData.securityConcerns}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-warning text-white"
                    placeholder="Describe your growth goals and business protection challenges..."
                  ></textarea>
                </div>
                
                {/* reCAPTCHA */}
                <div data-netlify-recaptcha="true"></div>
                
                <motion.button 
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-primary-warning text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={!formStatus.isSubmitting ? {scale: 1.02} : {}}
                  whileTap={!formStatus.isSubmitting ? {scale: 0.98} : {}}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <SafeIcon icon={FiLoader} className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Schedule My Business Protection Strategy Session'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Security Emergency */}
            <motion.div 
              className="text-center"
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center bg-red-600">
                  <SafeIcon icon={FiShield} className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Business Growth at Risk?</h3>
                <p className="text-slate-300 mb-6">
                  If you're concerned about security threats to your business growth, don't wait. Contact our strategic protection team immediately.
                </p>
                <div className="bg-red-900/30 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-red-300 mb-2">Strategic Protection Available:</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400 mr-2" />
                      <span>Business continuity strategy</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400 mr-2" />
                      <span>Growth protection planning</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400 mr-2" />
                      <span>Competitive advantage creation</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400 mr-2" />
                      <span>Strategic response coordination</span>
                    </li>
                  </ul>
                </div>
                <motion.a 
                  href="tel:+12362350919"
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-4 rounded-lg font-semibold w-full mb-4 hover:bg-red-700 transition-colors duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span>Strategic Consultation: 236-235-0919</span>
                </motion.a>
                <p className="text-slate-400 text-sm">
                  Strategic protection planning available 24/7
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityPage;
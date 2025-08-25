import React, {useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCloud, FiServer, FiUsers, FiPhone, FiCheckCircle, FiDollarSign, FiZap, FiShield, FiDatabase, FiGlobe, FiTrendingDown, FiTrendingUp, FiRefreshCw, FiBarChart, FiBuilding, FiLoader} = FiIcons;

const CloudInfrastructurePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    currentCloud: ''
  });
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  // Cloud partners showcase
  const cloudPartners = [
    {icon: FiCloud, title: "Multi-Cloud", badge: "Platform Agnostic", color: "#0078d4"},
    {icon: FiBuilding, title: "Enterprise Partners", badge: "Best-of-Breed Solutions", color: "#16a34a"},
    {icon: FiPhone, title: "Unified Communications", badge: "Vendor Neutral", color: "#7c3aed"},
    {icon: FiServer, title: "Hybrid Infrastructure", badge: "Flexible Deployment", color: "#ff9900"}
  ];

  // Cloud infrastructure solutions
  const cloudSolutions = [
    {
      icon: FiUsers,
      title: "Productivity & Collaboration",
      subtitle: "Modern Workplace Solutions",
      description: "Transform your business with enterprise productivity suites, including collaboration tools, security, and compliance features tailored to your needs.",
      features: [
        "Professional office productivity applications",
        "Team collaboration and communication platforms",
        "Document management and file sharing",
        "Advanced security and compliance tools",
        "Business process automation platforms",
        "Enterprise email with threat protection"
      ],
      color: "#0078d4",
      bg: "#f0f9ff",
      border: "#0078d4"
    },
    {
      icon: FiCloud,
      title: "Cloud Platform Solutions",
      subtitle: "Scalable Infrastructure & Services",
      description: "Build, deploy, and scale applications with enterprise-grade cloud platforms, selecting the best infrastructure for your specific workloads and requirements.",
      features: [
        "Virtual machines and container orchestration",
        "Managed database and storage solutions",
        "Identity and access management systems",
        "Application services and API management",
        "AI and machine learning capabilities",
        "Backup and disaster recovery solutions"
      ],
      color: "#0072c6",
      bg: "#f0f9ff",
      border: "#0072c6"
    },
    {
      icon: FiShield,
      title: "Enterprise Security Solutions",
      subtitle: "Comprehensive Protection Across Your Environment",
      description: "Protect your business with integrated security suites that provide comprehensive protection across all your cloud and on-premises systems.",
      features: [
        "Advanced endpoint protection and detection",
        "Security information and event management (SIEM)",
        "Data loss prevention and compliance tools",
        "Multi-factor authentication and conditional access",
        "Cloud security and application protection",
        "Threat intelligence and automated response"
      ],
      color: "#dc2626",
      bg: "#fef2f2",
      border: "#dc2626"
    },
    {
      icon: FiZap,
      title: "Business Automation Platform",
      subtitle: "Low-Code Business Process & Analytics Platform",
      description: "Empower your team to build custom applications and automate processes with low-code/no-code business automation platforms.",
      features: [
        "Custom application development platforms",
        "Workflow automation and process optimization",
        "Business intelligence and analytics tools",
        "Chatbot and AI assistant creation",
        "Integration with productivity suites and third-party services",
        "Citizen developer enablement and governance"
      ],
      color: "#7c3aed",
      bg: "#f3e8ff",
      border: "#7c3aed"
    }
  ];

  // Migration phases
  const migrationPhases = [
    {
      number: "01",
      title: "Assessment & Planning",
      description: [
        "Current infrastructure audit",
        "Application compatibility assessment",
        "Migration strategy development",
        "Timeline and resource planning"
      ],
      color: "#0078d4"
    },
    {
      number: "02",
      title: "Environment Setup",
      description: [
        "Azure/Microsoft 365 tenant configuration",
        "Security and compliance setup",
        "Network and connectivity planning",
        "User account and group preparation"
      ],
      color: "#16a34a"
    },
    {
      number: "03",
      title: "Data Migration",
      description: [
        "Email and calendar migration",
        "File and document transfer",
        "Application data migration",
        "Backup and validation processes"
      ],
      color: "#f59e0b"
    },
    {
      number: "04",
      title: "User Training",
      description: [
        "Microsoft 365 training sessions",
        "New workflow documentation",
        "Change management support",
        "Ongoing user assistance"
      ],
      color: "#7c3aed"
    },
    {
      number: "05",
      title: "Optimization",
      description: [
        "Performance monitoring and tuning",
        "Security posture optimization",
        "Cost optimization and licensing review",
        "Advanced feature implementation"
      ],
      color: "#dc2626"
    }
  ];

  // Cost savings metrics
  const costSavings = [
    {icon: FiTrendingDown, amount: "40%", label: "Reduction in IT infrastructure costs", color: "#16a34a"},
    {icon: FiDollarSign, amount: "25%", label: "Savings on Microsoft licensing through CSP", color: "#2563eb"},
    {icon: FiDatabase, amount: "60%", label: "Faster deployment than traditional infrastructure", color: "#7c3aed"},
    {icon: FiUsers, amount: "50%", label: "Reduction in IT management overhead", color: "#f59e0b"}
  ];

  // Cloud benefits
  const cloudBenefits = [
    {icon: FiZap, title: "Improved Productivity", description: "Modern collaboration tools increase team efficiency", color: "#16a34a"},
    {icon: FiShield, title: "Enhanced Security", description: "Enterprise-grade security with automatic updates", color: "#dc2626"},
    {icon: FiTrendingUp, title: "Scalability", description: "Resources scale automatically with business growth", color: "#2563eb"},
    {icon: FiGlobe, title: "Remote Work Enablement", description: "Secure access to business applications from anywhere", color: "#7c3aed"},
    {icon: FiRefreshCw, title: "Automatic Updates", description: "Always current with latest features and security patches", color: "#f59e0b"},
    {icon: FiBarChart, title: "Business Intelligence", description: "Advanced analytics and reporting capabilities", color: "#059669"}
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
        setFormData({firstName: '', lastName: '', email: '', phone: '', company: '', currentCloud: ''});
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
      <section className="bg-gradient-to-br from-[#f0f9ff] to-[#dbeafe] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Cloud Message */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              {/* Badge */}
              <motion.div 
                className="inline-flex items-center bg-[#dbeafe] text-[#0078d4] px-4 py-2 rounded-full text-sm font-semibold"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
                viewport={{once: true}}
              >
                ☁️ Microsoft Cloud Solution Provider
              </motion.div>

              {/* Headline */}
              <motion.h1 
                className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.3}}
                viewport={{once: true}}
              >
                Enterprise Cloud Infrastructure That Creates Competitive Advantage
              </motion.h1>

              {/* Value proposition */}
              <motion.p 
                className="text-lg text-slate-600"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.4}}
                viewport={{once: true}}
              >
                Most businesses struggle with cloud complexity and vendor lock-in. With partnerships across leading cloud providers and access to multiple cloud marketplaces, Josh delivers enterprise-grade cloud infrastructure solutions tailored to your business needs, with the flexibility to choose the best platform for each workload.
              </motion.p>

              {/* Cloud benefits */}
              <motion.div 
                className="space-y-4"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{delay: 0.5}}
                viewport={{once: true}}
              >
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" />
                  <span className="text-gray-700">Platform-agnostic solutions tailored to your needs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" />
                  <span className="text-gray-700">Access to best-of-breed cloud solutions across providers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" />
                  <span className="text-gray-700">Multi-cloud expertise for optimal workload placement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" />
                  <span className="text-gray-700">Scalable infrastructure that grows with your business</span>
                </div>
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
                  onClick={() => handleSmoothScroll('cloud-assessment')}
                  className="bg-[#0078d4] text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  Get Strategic Infrastructure Assessment
                </motion.button>
                <motion.button
                  onClick={() => handleSmoothScroll('solutions')}
                  className="border-2 border-[#0078d4] text-[#0078d4] px-8 py-4 rounded-lg font-semibold text-center hover:bg-[#0078d4] hover:text-white transition-colors duration-300"
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                >
                  View Infrastructure Solutions
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Cloud Partners Showcase */}
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
                  Powered by Cloud Leaders
                </motion.h3>
                <div className="grid grid-cols-2 gap-4">
                  {cloudPartners.map((partner, index) => (
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

      {/* Enterprise Cloud Infrastructure Solutions Section */}
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
              Enterprise Cloud Infrastructure Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to meet your specific business requirements with platform flexibility and enterprise support
            </p>
          </motion.div>

          {/* Cloud Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {cloudSolutions.map((solution, index) => (
              <motion.div 
                key={index}
                className="microsoft-solution"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                whileHover={{y: -8}}
              >
                <div 
                  className="rounded-xl p-8" 
                  style={{backgroundColor: solution.bg, borderColor: solution.border, borderWidth: "1px"}}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <SafeIcon icon={solution.icon} className="w-8 h-8" style={{color: solution.color}} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-2">
                      {solution.title}
                    </h3>
                    <p className="font-medium mb-3" style={{color: solution.color}}>
                      {solution.subtitle}
                    </p>
                    <p className="text-slate-700 mb-4">{solution.description}</p>
                    <h4 className="font-bold text-primary-dark mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <SafeIcon 
                            icon={FiCheckCircle} 
                            className="w-5 h-5 mr-2 mt-0.5" 
                            style={{color: solution.color}} 
                          />
                          <span className="text-slate-700">{feature}</span>
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

      {/* Cloud Migration & Implementation Section */}
      <section className="py-20 bg-primary-light">
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
              Strategic Infrastructure Implementation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology ensures smooth cloud transitions with minimal disruption
            </p>
          </motion.div>

          {/* Migration Phases */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {migrationPhases.map((phase, index) => (
              <motion.div 
                key={index}
                className="migration-phase"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.1}}
                viewport={{once: true}}
                whileHover={{y: -8}}
              >
                <div className="bg-white rounded-xl p-6 text-center shadow-lg h-full">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" 
                    style={{backgroundColor: phase.color}}
                  >
                    <span className="text-lg font-bold text-white">
                      {phase.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2 text-left">
                    {phase.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span 
                          className="text-lg mr-2" 
                          style={{color: phase.color}}
                        >
                          •
                        </span>
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud ROI & Cost Optimization Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Cost Savings */}
            <motion.div 
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                Strategic Cloud Cost Optimization
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Our Microsoft CSP partnership and cloud expertise deliver significant cost savings compared to traditional IT infrastructure and direct Microsoft licensing.
              </p>
              <div className="space-y-4">
                {costSavings.map((metric, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.4, delay: index * 0.1}}
                    viewport={{once: true}}
                  >
                    <SafeIcon icon={metric.icon} className="w-8 h-8" style={{color: metric.color}} />
                    <div>
                      <p className="text-2xl font-bold" style={{color: metric.color}}>
                        {metric.amount}
                      </p>
                      <p className="text-slate-600 text-sm">{metric.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Cloud Benefits */}
            <motion.div 
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-primary-light rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
                  Strategic Business Advantages
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {cloudBenefits.map((benefit, index) => (
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
                        style={{backgroundColor: `${benefit.color}15`}}
                      >
                        <SafeIcon icon={benefit.icon} className="w-6 h-6" style={{color: benefit.color}} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-dark mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Cloud Strategy Section */}
      <section className="py-20 bg-primary-light">
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
              Strategic Multi-Cloud Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Josh's AWS expertise combined with Microsoft partnerships delivers flexible multi-cloud strategies
            </p>
          </motion.div>

          {/* Strategy Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Microsoft-First Strategy */}
            <motion.div 
              className="cloud-strategy"
              initial={{opacity: 0, x: -30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-[#f0f9ff] border border-[#0078d4] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-[#0078d4] mb-4">
                  Microsoft-First Strategy
                </h3>
                <p className="font-bold text-primary-dark mb-4">
                  Primary Cloud Platform
                </p>
                <p className="text-slate-600 mb-6">
                  Microsoft Azure and Microsoft 365 serve as your primary cloud platform, providing integrated productivity, security, and infrastructure services.
                </p>
                <h4 className="font-bold text-primary-dark mb-2">Strategic Advantages:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0078d4] mr-2" />
                    <span className="text-slate-600">
                      Seamless integration across all Microsoft services
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0078d4] mr-2" />
                    <span className="text-slate-600">
                      Unified security and compliance management
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0078d4] mr-2" />
                    <span className="text-slate-600">
                      Single vendor relationship and support
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0078d4] mr-2" />
                    <span className="text-slate-600">
                      Comprehensive business application suite
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#0078d4] mr-2" />
                    <span className="text-slate-600">
                      Cost-effective licensing through CSP partnership
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Multi-Cloud Flexibility */}
            <motion.div 
              className="cloud-strategy"
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-[#f59e0b] mb-4">
                  Multi-Cloud Flexibility
                </h3>
                <p className="font-bold text-primary-dark mb-4">
                  Strategic Cloud Diversity
                </p>
                <p className="text-slate-600 mb-6">
                  Josh's AWS expertise enables strategic multi-cloud implementations when specific use cases require alternative cloud platforms.
                </p>
                <h4 className="font-bold text-primary-dark mb-2">Strategic Applications:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#f59e0b] mr-2" />
                    <span className="text-slate-600">
                      Specialized AWS services for specific workloads
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#f59e0b] mr-2" />
                    <span className="text-slate-600">
                      Disaster recovery and business continuity
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#f59e0b] mr-2" />
                    <span className="text-slate-600">
                      Vendor diversification for critical applications
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#f59e0b] mr-2" />
                    <span className="text-slate-600">
                      Legacy application migration strategies
                    </span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-[#f59e0b] mr-2" />
                    <span className="text-slate-600">
                      Cost optimization through platform selection
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section id="cloud-assessment" className="py-20 bg-gradient-to-r from-[#0078d4] to-[#0072c6] text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Infrastructure Strategy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free infrastructure assessment and discover how our Microsoft CSP partnership can transform your business
            </p>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8"
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.2}}
              viewport={{once: true}}
            >
              <h3 className="text-2xl font-bold mb-4">☁️ Free Strategic Infrastructure Assessment</h3>
              <div className="mb-6">
                <p className="font-semibold mb-3">Comprehensive Infrastructure Strategy Session</p>
                <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-left">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" />
                    <span>Complete infrastructure audit and analysis</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" />
                    <span>Strategic growth roadmap development</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" />
                    <span>Competitive advantage identification</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" />
                    <span>Cost optimization and ROI projections</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" />
                    <span>Strategic implementation timeline</span>
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
                className="bg-white text-[#0078d4] px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Schedule Your Strategic Infrastructure Session
              </motion.button>
              <motion.a 
                href="tel:+12362350919"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-[#0078d4] transition-colors duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Strategic Consultation: 236-235-0919</span>
              </motion.a>
            </motion.div>
            <p className="text-blue-100 text-sm mt-4">
              Strategic CSP Partnership • No obligation • Immediate business insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section with Netlify Form */}
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
              <h2 className="text-3xl font-bold mb-6">Schedule Your Strategic Infrastructure Session</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below to schedule your free strategic infrastructure session with Josh to identify growth bottlenecks and create competitive advantages.
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
                    <span>Thank you! Your strategic infrastructure session request has been submitted successfully. Josh will contact you within 24 hours to discuss how we can eliminate your growth bottlenecks and create competitive advantages.</span>
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
                name="cloud-assessment-contact"
                method="POST"
                data-netlify="true"
                data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="cloud-assessment-contact" />
                
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="currentCloud" className="block text-sm font-medium text-slate-300 mb-1">
                    What business outcomes are you trying to achieve with your infrastructure strategy?
                  </label>
                  <textarea 
                    id="currentCloud"
                    name="currentCloud"
                    value={formData.currentCloud}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0078d4] text-white"
                    placeholder="Describe your growth goals and infrastructure challenges..."
                  ></textarea>
                </div>
                
                {/* reCAPTCHA */}
                <div data-netlify-recaptcha="true"></div>
                
                <motion.button 
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-[#0078d4] text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={!formStatus.isSubmitting ? {scale: 1.02} : {}}
                  whileTap={!formStatus.isSubmitting ? {scale: 0.98} : {}}
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <SafeIcon icon={FiLoader} className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Schedule My Strategic Infrastructure Session'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - CSP Profile */}
            <motion.div 
              className="text-center"
              initial={{opacity: 0, x: 30}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
              viewport={{once: true}}
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#0078d4]">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844826077-Olayemi-profile2-2023-jpg.webp" 
                    alt="Josh Olayemi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Josh Olayemi</h3>
                <p className="text-[#0078d4] font-semibold mb-2">Strategic Technology Consultant</p>
                <p className="text-slate-300 mb-4">Growth Bottleneck Elimination Expert</p>
                <div className="bg-[#0078d4]/20 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-[#93c5fd] mb-2">🌟 Strategic Advantages:</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#0078d4] mr-2" />
                      <span>Direct strategic partnership access</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#0078d4] mr-2" />
                      <span>Competitive advantage creation</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#0078d4] mr-2" />
                      <span>Growth bottleneck elimination</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#0078d4] mr-2" />
                      <span>Enterprise-grade strategic planning</span>
                    </li>
                  </ul>
                </div>
                <blockquote className="text-slate-300 italic mb-6 text-sm">
                  "I've helped businesses of all sizes transform their infrastructure into a competitive advantage. Let me show you how to turn technology into a strategic business asset."
                </blockquote>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-[#0078d4]" />
                    <a 
                      href="tel:+12362350919" 
                      className="text-slate-300 hover:text-white"
                    >
                      236-235-0919
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm">
                    Available for strategic consultations Monday-Friday, 9 AM - 6 PM PST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudInfrastructurePage;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiShield, FiMail, FiMonitor, FiLock, FiCheckCircle, FiAlertTriangle,
  FiXCircle, FiArrowRight, FiArrowLeft, FiDownload, FiCalendar, 
  FiPhone, FiUser, FiBuilding, FiClock, FiDatabase, FiWifi,
  FiSmartphone, FiFileText, FiRefreshCw, FiEye, FiHelpCircle,
  FiTrendingUp, FiTrendingDown, FiActivity, FiTarget, FiZap
} = FiIcons;

const CybersecurityAssessment = () => {
  const [currentDomain, setCurrentDomain] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    complianceNeeds: ''
  });
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime] = useState(Date.now());

  const securityDomains = [
    {
      title: "Email Security",
      icon: FiMail,
      color: "#dc2626",
      description: "Email threat protection and user awareness"
    },
    {
      title: "Network Security", 
      icon: FiShield,
      color: "#7c2d12",
      description: "Network infrastructure and access controls"
    },
    {
      title: "Endpoint Protection",
      icon: FiMonitor,
      color: "#991b1b", 
      description: "Device security and endpoint management"
    },
    {
      title: "Compliance & Governance",
      icon: FiFileText,
      color: "#be123c",
      description: "Regulatory compliance and data governance"
    },
    {
      title: "Business Continuity",
      icon: FiRefreshCw,
      color: "#9f1239",
      description: "Backup, recovery, and continuity planning"
    }
  ];

  const securityQuestions = [
    // Email Security (Questions 1-5)
    {
      domain: 0,
      weight: 5,
      question: "What level of email security protection do you currently have?",
      tooltip: "95% of cyberattacks start with email. Advanced protection is critical for business security.",
      options: [
        { text: "Basic spam filtering only", points: 0, risk: "Critical" },
        { text: "Standard antivirus email scanning", points: 1, risk: "High" },
        { text: "Enhanced spam filtering with basic threat detection", points: 2, risk: "Moderate" },
        { text: "Advanced threat protection with sandboxing", points: 3, risk: "Low" },
        { text: "Enterprise-grade email security with advanced threat protection", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 0,
      weight: 4,
      question: "Do you conduct regular phishing simulations and security awareness training?",
      tooltip: "Human error causes 95% of successful cyber attacks. Regular training significantly reduces risk.",
      options: [
        { text: "No training or simulations", points: 0, risk: "Critical" },
        { text: "Annual security briefing only", points: 1, risk: "High" },
        { text: "Quarterly training sessions", points: 2, risk: "Moderate" },
        { text: "Monthly phishing simulations and training", points: 3, risk: "Low" },
        { text: "Continuous security awareness with real-time coaching", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 0,
      weight: 3,
      question: "What email encryption and data loss prevention measures are in place?",
      tooltip: "Email encryption protects sensitive data in transit and prevents accidental data exposure.",
      options: [
        { text: "No encryption or DLP", points: 0, risk: "Critical" },
        { text: "Manual encryption for sensitive emails", points: 1, risk: "High" },
        { text: "Basic DLP policies in place", points: 2, risk: "Moderate" },
        { text: "Automatic encryption with DLP monitoring", points: 3, risk: "Low" },
        { text: "Advanced DLP with machine learning and automatic classification", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 0,
      weight: 3,
      question: "How do you handle email backup and archiving for security and compliance?",
      tooltip: "Email archiving ensures business continuity and regulatory compliance requirements.",
      options: [
        { text: "No email backup or archiving", points: 0, risk: "Critical" },
        { text: "Basic PST file backups", points: 1, risk: "High" },
        { text: "Server-level email backups", points: 2, risk: "Moderate" },
        { text: "Cloud-based email archiving with search", points: 3, risk: "Low" },
        { text: "Enterprise archiving with compliance and legal hold capabilities", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 0,
      weight: 4,
      question: "How well do your employees recognize and respond to email security threats?",
      tooltip: "User behavior is the last line of defense against email-based attacks.",
      options: [
        { text: "Users frequently fall for phishing attempts", points: 0, risk: "Critical" },
        { text: "Some awareness but inconsistent reporting", points: 1, risk: "High" },
        { text: "Most users can identify obvious threats", points: 2, risk: "Moderate" },
        { text: "Users actively report suspicious emails", points: 3, risk: "Low" },
        { text: "High security awareness with proactive threat reporting", points: 4, risk: "Secure" }
      ]
    },

    // Network Security (Questions 6-10)
    {
      domain: 1,
      weight: 5,
      question: "What type of firewall protection do you have in place?",
      tooltip: "Next-generation firewalls provide essential protection against network-based attacks.",
      options: [
        { text: "Basic router firewall only", points: 0, risk: "Critical" },
        { text: "Standard stateful firewall", points: 1, risk: "High" },
        { text: "Managed firewall with basic rules", points: 2, risk: "Moderate" },
        { text: "Next-generation firewall with threat intelligence", points: 3, risk: "Low" },
        { text: "Next-generation firewall with advanced threat prevention capabilities", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 1,
      weight: 4,
      question: "Do you have network monitoring and intrusion detection systems?",
      tooltip: "Network monitoring detects suspicious activity and potential security breaches in real-time.",
      options: [
        { text: "No network monitoring", points: 0, risk: "Critical" },
        { text: "Basic log collection only", points: 1, risk: "High" },
        { text: "Network monitoring with manual review", points: 2, risk: "Moderate" },
        { text: "Automated intrusion detection with alerts", points: 3, risk: "Low" },
        { text: "AI-powered network security monitoring with automated response", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 1,
      weight: 4,
      question: "How do you secure remote access and VPN connections?",
      tooltip: "Secure remote access is critical for protecting business data from remote workers.",
      options: [
        { text: "No VPN or remote access controls", points: 0, risk: "Critical" },
        { text: "Basic VPN with shared passwords", points: 1, risk: "High" },
        { text: "VPN with individual user accounts", points: 2, risk: "Moderate" },
        { text: "Multi-factor authentication on VPN access", points: 3, risk: "Low" },
        { text: "Zero-trust network access with conditional policies", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 1,
      weight: 3,
      question: "Is your network properly segmented with access controls?",
      tooltip: "Network segmentation limits the spread of attacks and protects critical systems.",
      options: [
        { text: "Flat network with no segmentation", points: 0, risk: "Critical" },
        { text: "Basic VLAN separation", points: 1, risk: "High" },
        { text: "Network segmentation with some access controls", points: 2, risk: "Moderate" },
        { text: "Proper network segmentation with role-based access", points: 3, risk: "Low" },
        { text: "Micro-segmentation with zero-trust architecture", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 1,
      weight: 4,
      question: "How do you manage security updates and patch management?",
      tooltip: "Regular patching prevents exploitation of known vulnerabilities.",
      options: [
        { text: "No formal patch management process", points: 0, risk: "Critical" },
        { text: "Manual updates when remembered", points: 1, risk: "High" },
        { text: "Quarterly update schedule", points: 2, risk: "Moderate" },
        { text: "Automated patch management with testing", points: 3, risk: "Low" },
        { text: "Real-time vulnerability management with emergency patching", points: 4, risk: "Secure" }
      ]
    },

    // Endpoint Protection (Questions 11-15)
    {
      domain: 2,
      weight: 4,
      question: "How do you manage and secure mobile devices and endpoints?",
      tooltip: "Mobile device management prevents data breaches from lost or stolen devices.",
      options: [
        { text: "No device management or policies", points: 0, risk: "Critical" },
        { text: "Basic device policies with manual enforcement", points: 1, risk: "High" },
        { text: "Mobile Device Management (MDM) for company devices", points: 2, risk: "Moderate" },
        { text: "Comprehensive MDM with BYOD policies", points: 3, risk: "Low" },
        { text: "Advanced endpoint management with AI-powered monitoring and control", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 2,
      weight: 5,
      question: "What endpoint detection and response capabilities do you have?",
      tooltip: "Advanced endpoint protection detects and responds to sophisticated threats.",
      options: [
        { text: "Basic antivirus only", points: 0, risk: "Critical" },
        { text: "Traditional antivirus with real-time scanning", points: 1, risk: "High" },
        { text: "Next-generation antivirus with behavior analysis", points: 2, risk: "Moderate" },
        { text: "Endpoint Detection and Response (EDR) solution", points: 3, risk: "Low" },
        { text: "Advanced EDR with automated threat hunting and response", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 2,
      weight: 3,
      question: "How do you manage software inventory and licensing?",
      tooltip: "Software inventory management prevents security gaps from unauthorized applications.",
      options: [
        { text: "No software inventory tracking", points: 0, risk: "Critical" },
        { text: "Manual software tracking", points: 1, risk: "High" },
        { text: "Basic asset management system", points: 2, risk: "Moderate" },
        { text: "Automated software discovery and management", points: 3, risk: "Low" },
        { text: "Comprehensive asset management with security scanning", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 2,
      weight: 4,
      question: "Are your devices encrypted and protected against data theft?",
      tooltip: "Device encryption protects sensitive data if devices are lost or stolen.",
      options: [
        { text: "No device encryption", points: 0, risk: "Critical" },
        { text: "Encryption on some critical devices", points: 1, risk: "High" },
        { text: "Standard encryption on company devices", points: 2, risk: "Moderate" },
        { text: "Full disk encryption with centralized management", points: 3, risk: "Low" },
        { text: "Advanced encryption with remote wipe and data protection", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 2,
      weight: 3,
      question: "Do you have remote wipe capabilities and device security policies?",
      tooltip: "Remote wipe capabilities prevent data breaches from lost or stolen devices.",
      options: [
        { text: "No remote management capabilities", points: 0, risk: "Critical" },
        { text: "Basic password policies only", points: 1, risk: "High" },
        { text: "Device policies with manual enforcement", points: 2, risk: "Moderate" },
        { text: "Remote wipe with automated policy enforcement", points: 3, risk: "Low" },
        { text: "Comprehensive device security with zero-touch management", points: 4, risk: "Secure" }
      ]
    },

    // Compliance & Governance (Questions 16-20)
    {
      domain: 3,
      weight: 5,
      question: "What industry compliance requirements must your business meet?",
      tooltip: "Compliance requirements vary by industry and have specific security implications.",
      options: [
        { text: "No specific compliance requirements", points: 0, risk: "Low" },
        { text: "Basic data protection requirements", points: 1, risk: "Low" },
        { text: "Industry-specific requirements (HIPAA, PCI, etc.)", points: 2, risk: "Moderate" },
        { text: "SOC 2 Type II or ISO 27001", points: 3, risk: "Moderate" },
        { text: "Multiple compliance frameworks with automated monitoring", points: 4, risk: "High" }
      ]
    },
    {
      domain: 3,
      weight: 4,
      question: "How do you classify and handle sensitive data?",
      tooltip: "Proper data classification ensures appropriate security controls are applied.",
      options: [
        { text: "No data classification system", points: 0, risk: "Critical" },
        { text: "Basic understanding of sensitive data", points: 1, risk: "High" },
        { text: "Informal data handling procedures", points: 2, risk: "Moderate" },
        { text: "Formal data classification with handling procedures", points: 3, risk: "Low" },
        { text: "Automated data classification with policy enforcement and monitoring", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 3,
      weight: 4,
      question: "How do you manage user access controls and permissions?",
      tooltip: "Proper access controls prevent unauthorized access to sensitive systems and data.",
      options: [
        { text: "Shared accounts and passwords", points: 0, risk: "Critical" },
        { text: "Individual accounts with basic permissions", points: 1, risk: "High" },
        { text: "Role-based access with manual management", points: 2, risk: "Moderate" },
        { text: "Automated access management with regular reviews", points: 3, risk: "Low" },
        { text: "Zero-trust access with conditional policies and monitoring", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 3,
      weight: 3,
      question: "Do you have comprehensive audit logging and monitoring?",
      tooltip: "Audit logs are essential for compliance and security incident investigation.",
      options: [
        { text: "No audit logging", points: 0, risk: "Critical" },
        { text: "Basic system logs only", points: 1, risk: "High" },
        { text: "Centralized logging with manual review", points: 2, risk: "Moderate" },
        { text: "Automated log analysis with alerting", points: 3, risk: "Low" },
        { text: "Comprehensive SIEM with compliance reporting", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 3,
      weight: 4,
      question: "Do you have documented incident response and recovery procedures?",
      tooltip: "Incident response procedures minimize damage and ensure quick recovery from security events.",
      options: [
        { text: "No incident response plan", points: 0, risk: "Critical" },
        { text: "Basic incident contact information", points: 1, risk: "High" },
        { text: "Documented procedures with assigned roles", points: 2, risk: "Moderate" },
        { text: "Tested incident response plan with regular drills", points: 3, risk: "Low" },
        { text: "Comprehensive incident response with automated workflows", points: 4, risk: "Secure" }
      ]
    },

    // Business Continuity (Questions 21-25)
    {
      domain: 4,
      weight: 5,
      question: "How frequently do you backup data and test restore procedures?",
      tooltip: "Regular backups and tested restores are critical for business continuity.",
      options: [
        { text: "No regular backups", points: 0, risk: "Critical" },
        { text: "Weekly backups, never tested restores", points: 1, risk: "High" },
        { text: "Daily backups with occasional restore tests", points: 2, risk: "Moderate" },
        { text: "Automated daily backups with quarterly restore tests", points: 3, risk: "Low" },
        { text: "Continuous backup with automated restore testing", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 4,
      weight: 4,
      question: "Do you have a comprehensive disaster recovery plan?",
      tooltip: "Disaster recovery planning ensures business continuity during major incidents.",
      options: [
        { text: "No disaster recovery plan", points: 0, risk: "Critical" },
        { text: "Basic recovery procedures documented", points: 1, risk: "High" },
        { text: "Disaster recovery plan with defined RTOs", points: 2, risk: "Moderate" },
        { text: "Tested disaster recovery plan with regular updates", points: 3, risk: "Low" },
        { text: "Comprehensive DR with automated failover capabilities", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 4,
      weight: 3,
      question: "How well documented are your business continuity procedures?",
      tooltip: "Documented procedures ensure consistent response during business disruptions.",
      options: [
        { text: "No business continuity documentation", points: 0, risk: "Critical" },
        { text: "Basic contact information and procedures", points: 1, risk: "High" },
        { text: "Documented procedures for key processes", points: 2, risk: "Moderate" },
        { text: "Comprehensive business continuity plan", points: 3, risk: "Low" },
        { text: "Detailed procedures with regular testing and updates", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 4,
      weight: 4,
      question: "What are your Recovery Time and Recovery Point Objectives?",
      tooltip: "Clear RTOs and RPOs ensure appropriate investment in backup and recovery systems.",
      options: [
        { text: "No defined recovery objectives", points: 0, risk: "Critical" },
        { text: "Informal recovery expectations", points: 1, risk: "High" },
        { text: "Basic RTO/RPO defined for critical systems", points: 2, risk: "Moderate" },
        { text: "Documented RTOs/RPOs with tested procedures", points: 3, risk: "Low" },
        { text: "Comprehensive RTOs/RPOs with automated monitoring", points: 4, risk: "Secure" }
      ]
    },
    {
      domain: 4,
      weight: 3,
      question: "How do you handle crisis communication during security incidents?",
      tooltip: "Effective crisis communication minimizes business impact and maintains stakeholder trust.",
      options: [
        { text: "No crisis communication plan", points: 0, risk: "Critical" },
        { text: "Basic notification procedures", points: 1, risk: "High" },
        { text: "Communication plan with key stakeholders", points: 2, risk: "Moderate" },
        { text: "Comprehensive communication plan with templates", points: 3, risk: "Low" },
        { text: "Automated crisis communication with stakeholder management", points: 4, risk: "Secure" }
      ]
    }
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-500 employees",
    "500+ employees"
  ];

  const industries = [
    "Healthcare",
    "Financial Services",
    "Legal",
    "Manufacturing",
    "Technology",
    "Professional Services",
    "Retail/E-commerce",
    "Education",
    "Government",
    "Other"
  ];

  const complianceFrameworks = [
    "HIPAA",
    "SOC 2",
    "PCI DSS",
    "ISO 27001",
    "GDPR",
    "CCPA",
    "FERPA",
    "No specific requirements",
    "Other"
  ];

  const calculateRiskScore = () => {
    let totalScore = 0;
    let maxScore = 0;
    
    securityQuestions.forEach((question, index) => {
      const answer = answers[index];
      if (answer) {
        totalScore += answer.points * question.weight;
      }
      maxScore += 4 * question.weight;
    });
    
    return {
      total: totalScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      maxScore
    };
  };

  const getRiskLevel = (score) => {
    if (score >= 400) return {
      level: "Secure",
      color: "#16a34a",
      bgColor: "#dcfce7",
      description: "Strong security posture with minor optimization opportunities.",
      icon: FiShield,
      priority: "Optimization"
    };
    if (score >= 300) return {
      level: "Moderate Risk", 
      color: "#eab308",
      bgColor: "#fef3c7",
      description: "Good foundation with several security improvements needed.",
      icon: FiAlertTriangle,
      priority: "Improvement"
    };
    if (score >= 200) return {
      level: "High Risk",
      color: "#f97316",
      bgColor: "#fed7aa", 
      description: "Significant vulnerabilities present requiring immediate attention.",
      icon: FiAlertTriangle,
      priority: "Urgent"
    };
    if (score >= 100) return {
      level: "Critical Risk",
      color: "#dc2626",
      bgColor: "#fee2e2",
      description: "Critical vulnerabilities requiring immediate remediation.",
      icon: FiXCircle,
      priority: "Critical"
    };
    return {
      level: "Extreme Risk",
      color: "#991b1b",
      bgColor: "#fecaca",
      description: "Business-threatening vulnerabilities requiring emergency response.",
      icon: FiXCircle,
      priority: "Emergency"
    };
  };

  const getDomainScore = (domainIndex) => {
    const domainQuestions = securityQuestions.filter(q => q.domain === domainIndex);
    let domainScore = 0;
    let domainMax = 0;
    
    domainQuestions.forEach((question, index) => {
      const questionIndex = securityQuestions.indexOf(question);
      const answer = answers[questionIndex];
      if (answer) {
        domainScore += answer.points * question.weight;
      }
      domainMax += 4 * question.weight;
    });
    
    return Math.round((domainScore / domainMax) * 100);
  };

  const getVulnerabilities = (domainScores) => {
    const vulnerabilities = [];
    
    domainScores.forEach((score, index) => {
      if (score < 60) {
        const domain = securityDomains[index];
        let severity = "High";
        let solution = "";
        
        if (score < 30) severity = "Critical";
        else if (score < 50) severity = "High";
        else severity = "Moderate";
        
        switch (index) {
          case 0: // Email Security
            solution = "Advanced email security implementation";
            break;
          case 1: // Network Security
            solution = "Next-generation firewall deployment";
            break;
          case 2: // Endpoint Protection
            solution = "Intelligent device management and endpoint protection";
            break;
          case 3: // Compliance & Governance
            solution = "Automated compliance and monitoring systems";
            break;
          case 4: // Business Continuity
            solution = "Comprehensive backup and disaster recovery planning";
            break;
        }
        
        vulnerabilities.push({
          domain: domain.title,
          severity,
          score,
          solution,
          color: domain.color
        });
      }
    });
    
    return vulnerabilities.sort((a, b) => a.score - b.score);
  };

  const getSecurityRecommendations = (domainScores) => {
    const recommendations = [];
    
    if (domainScores[0] < 70) { // Email Security
      recommendations.push({
        category: "Email Protection",
        solution: "Advanced Email Security",
        description: "AI-powered email security protecting thousands of organizations worldwide",
        priority: domainScores[0] < 40 ? "Critical" : "High",
        timeline: "2-4 weeks",
        benefits: [
          "Stop advanced phishing and BEC attacks",
          "Automated incident response",
          "User awareness training integration",
          "Real-time threat intelligence"
        ]
      });
    }

    if (domainScores[1] < 70) { // Network Security
      recommendations.push({
        category: "Network Protection",
        solution: "Next-Generation Firewall",
        description: "Industry-leading network security with advanced threat prevention",
        priority: domainScores[1] < 40 ? "Critical" : "High",
        timeline: "3-6 weeks",
        benefits: [
          "Advanced threat prevention",
          "Network segmentation capabilities",
          "VPN and remote access security",
          "Real-time threat intelligence"
        ]
      });
    }

    if (domainScores[2] < 70) { // Endpoint Protection
      recommendations.push({
        category: "Endpoint Management",
        solution: "AI-Powered Device Management",
        description: "Complete device visibility and management with Shadow IT discovery",
        priority: domainScores[2] < 40 ? "Critical" : "High",
        timeline: "2-3 weeks",
        benefits: [
          "Complete device inventory",
          "Shadow IT discovery",
          "Automated compliance monitoring",
          "Real-time security posture"
        ]
      });
    }

    if (domainScores[3] < 70) { // Compliance & Governance
      recommendations.push({
        category: "Compliance Automation",
        solution: "Automated Compliance",
        description: "Continuous compliance monitoring for SOC 2, HIPAA, ISO 27001",
        priority: domainScores[3] < 40 ? "Critical" : "High", 
        timeline: "4-8 weeks",
        benefits: [
          "Automated compliance monitoring",
          "Continuous evidence collection",
          "Risk assessment and remediation",
          "Audit-ready documentation"
        ]
      });
    }

    return recommendations;
  };

  const handleAnswer = (questionIndex, option) => {
    setAnswers({
      ...answers,
      [questionIndex]: option
    });

    // Auto-advance to next question
    setTimeout(() => {
      if (currentQuestion < securityQuestions.filter(q => q.domain === currentDomain).length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentDomain < securityDomains.length - 1) {
        setCurrentDomain(currentDomain + 1);
        setCurrentQuestion(0);
      } else {
        setShowLeadCapture(true);
      }
    }, 500);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const riskScore = calculateRiskScore();
      const domainScores = securityDomains.map((_, index) => getDomainScore(index));
      const completionTime = Math.round((Date.now() - startTime) / 1000 / 60);

      // Submit to Netlify form
      const formData = new FormData();
      formData.append('form-name', 'cybersecurity-assessment-results');
      formData.append('firstName', userInfo.firstName);
      formData.append('lastName', userInfo.lastName);
      formData.append('email', userInfo.email);
      formData.append('phone', userInfo.phone);
      formData.append('company', userInfo.company);
      formData.append('industry', userInfo.industry);
      formData.append('companySize', userInfo.companySize);
      formData.append('complianceNeeds', userInfo.complianceNeeds);
      formData.append('totalScore', riskScore.total);
      formData.append('scorePercentage', riskScore.percentage);
      formData.append('completionTime', completionTime);
      formData.append('domainScores', JSON.stringify(domainScores));
      formData.append('answers', JSON.stringify(answers));

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      setShowResults(true);
      setShowLeadCapture(false);
    } catch (error) {
      console.error('Error submitting assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentDomainQuestions = securityQuestions.filter(q => q.domain === currentDomain);
  const totalProgress = ((currentDomain * 5 + currentQuestion + Object.keys(answers).length) / securityQuestions.length) * 100;
  const currentQuestionData = currentDomainQuestions[currentQuestion];
  const currentQuestionIndex = securityQuestions.indexOf(currentQuestionData);

  if (showResults) {
    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore.total);
    const domainScores = securityDomains.map((_, index) => getDomainScore(index));
    const vulnerabilities = getVulnerabilities(domainScores);
    const recommendations = getSecurityRecommendations(domainScores);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-red-900 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 sharp-edges flex items-center justify-center" style={{ backgroundColor: riskLevel.color }}>
                <SafeIcon icon={riskLevel.icon} className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Cybersecurity Risk Assessment Results</h1>
              <div className="text-6xl font-bold mb-2" style={{ color: riskLevel.color }}>
                {riskScore.total}/{riskScore.maxScore}
              </div>
              <div className="text-3xl font-semibold mb-4" style={{ color: riskLevel.color }}>
                {riskLevel.level}
              </div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {riskLevel.description}
              </p>
            </div>

            {/* Risk Meter */}
            <div className="bg-slate-800 sharp-edges shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Security Risk Meter</h2>
              <div className="relative w-full h-8 bg-gray-700 sharp-edges overflow-hidden">
                <motion.div
                  className="h-full sharp-edges"
                  style={{ backgroundColor: riskLevel.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${riskScore.percentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  {riskScore.percentage}% Secure
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Extreme Risk</span>
                <span>Critical Risk</span>
                <span>High Risk</span>
                <span>Moderate Risk</span>
                <span>Secure</span>
              </div>
            </div>

            {/* Domain Breakdown */}
            <div className="bg-slate-800 sharp-edges shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Security Domain Analysis</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityDomains.map((domain, index) => {
                  const domainScore = domainScores[index];
                  const domainRisk = domainScore < 40 ? "Critical" : domainScore < 60 ? "High" : domainScore < 80 ? "Moderate" : "Low";
                  const domainColor = domainScore < 40 ? "#dc2626" : domainScore < 60 ? "#f97316" : domainScore < 80 ? "#eab308" : "#16a34a";
                  
                  return (
                    <div key={index} className="bg-slate-700 sharp-edges p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <SafeIcon icon={domain.icon} className="w-8 h-8" style={{ color: domain.color }} />
                        <div>
                          <h3 className="font-semibold text-white">{domain.title}</h3>
                          <p className="text-sm text-gray-300">{domainScore}% Secure</p>
                        </div>
                      </div>
                      <div className="w-full bg-gray-600 sharp-edges h-3 mb-2">
                        <div 
                          className="h-3 sharp-edges transition-all duration-500"
                          style={{ 
                            width: `${domainScore}%`,
                            backgroundColor: domainColor 
                          }}
                        />
                      </div>
                      <span className={`text-xs px-2 py-1 sharp-edges font-medium`} style={{ backgroundColor: `${domainColor}20`, color: domainColor }}>
                        {domainRisk} Risk
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vulnerability Heatmap */}
            {vulnerabilities.length > 0 && (
              <div className="bg-slate-800 sharp-edges shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Critical Vulnerabilities</h2>
                <div className="space-y-4">
                  {vulnerabilities.map((vuln, index) => (
                    <div key={index} className="bg-slate-700 sharp-edges p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-2">{vuln.domain}</h3>
                          <p className="text-gray-300 mb-2">{vuln.solution}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 sharp-edges text-xs font-medium ${
                              vuln.severity === 'Critical' ? 'bg-red-900 text-red-200' :
                              vuln.severity === 'High' ? 'bg-orange-900 text-orange-200' :
                              'bg-yellow-900 text-yellow-200'
                            }`}>
                              {vuln.severity} Risk
                            </span>
                            <span className="text-gray-400 text-sm">{vuln.score}% Secure</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partnership Recommendations */}
            <div className="bg-slate-800 sharp-edges shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Recommended Security Solutions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((rec, index) => (
                  <div key={index} className="bg-slate-700 sharp-edges p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-2">{rec.category} - {rec.solution}</h3>
                        <p className="text-gray-300 mb-4">{rec.description}</p>
                        <div className="flex items-center space-x-4 text-sm mb-4">
                          <span className={`px-2 py-1 sharp-edges text-xs font-medium ${
                            rec.priority === 'Critical' ? 'bg-red-900 text-red-200' :
                            rec.priority === 'High' ? 'bg-orange-900 text-orange-200' :
                            'bg-yellow-900 text-yellow-200'
                          }`}>
                            {rec.priority} Priority
                          </span>
                          <span className="text-gray-400">
                            <SafeIcon icon={FiClock} className="w-4 h-4 inline mr-1" />
                            {rec.timeline}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {rec.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center text-sm text-gray-300">
                              <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mr-2 text-green-400" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 sharp-edges shadow-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                {riskLevel.priority === "Emergency" || riskLevel.priority === "Critical" ? 
                  "Emergency Security Response Required" : 
                  "Strengthen Your Security Posture"}
              </h2>
              <p className="text-lg mb-6 opacity-90">
                {riskLevel.priority === "Emergency" || riskLevel.priority === "Critical" ?
                  "Your assessment reveals critical security vulnerabilities that require immediate attention. Contact our emergency response team now." :
                  "Schedule a comprehensive security consultation to address identified vulnerabilities and strengthen your defenses."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+12362350919"
                  className="bg-white text-red-600 px-8 py-3 sharp-edges font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  {riskLevel.priority === "Emergency" || riskLevel.priority === "Critical" ? 
                    "Emergency Call: 236-235-0919" :
                    "Call Now: 236-235-0919"}
                </motion.a>
                <motion.a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 sharp-edges font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Schedule Security Consultation
                </motion.a>
              </div>
              <p className="text-sm mt-4 opacity-75">
                {riskLevel.priority === "Emergency" || riskLevel.priority === "Critical" ?
                  "24/7 emergency response • Immediate threat assessment • Critical vulnerability remediation" :
                  "Free consultation • Expert analysis • Immediate security improvements"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showLeadCapture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-red-900 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-800 sharp-edges shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-600 sharp-edges flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiShield} className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Security Assessment Complete!</h2>
                <p className="text-lg text-gray-300">
                  Get your detailed cybersecurity risk analysis and personalized security recommendations
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.firstName}
                      onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.lastName}
                      onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.company}
                      onChange={(e) => setUserInfo({...userInfo, company: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Company Size
                    </label>
                    <select
                      value={userInfo.companySize}
                      onChange={(e) => setUserInfo({...userInfo, companySize: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    >
                      <option value="">Select size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Industry
                    </label>
                    <select
                      value={userInfo.industry}
                      onChange={(e) => setUserInfo({...userInfo, industry: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Compliance Requirements
                    </label>
                    <select
                      value={userInfo.complianceNeeds}
                      onChange={(e) => setUserInfo({...userInfo, complianceNeeds: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 sharp-edges focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                    >
                      <option value="">Select framework</option>
                      {complianceFrameworks.map(framework => (
                        <option key={framework} value={framework}>{framework}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-xs text-gray-400">
                  By submitting this form, you agree to receive communications from Handvantage. 
                  Your security assessment data will be kept confidential and used only to provide your results.
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-4 sharp-edges font-semibold hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Processing Security Analysis...' : 'Get My Security Risk Report'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-red-900 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Cybersecurity Risk Assessment
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Comprehensive security evaluation across 5 critical domains
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-slate-700 sharp-edges h-3 mb-4">
              <motion.div
                className="bg-red-500 h-3 sharp-edges"
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-400">
              {Math.round(totalProgress)}% Complete • Question {currentQuestion + 1} of {currentDomainQuestions.length} in {securityDomains[currentDomain].title}
            </p>
          </div>

          {/* Domain Progress */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {securityDomains.map((domain, index) => (
              <div
                key={index}
                className={`p-4 sharp-edges border-2 transition-all duration-300 ${
                  index === currentDomain
                    ? 'border-red-500 bg-red-900/30'
                    : index < currentDomain
                    ? 'border-green-500 bg-green-900/30'
                    : 'border-slate-600 bg-slate-800'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 sharp-edges flex items-center justify-center ${
                      index === currentDomain
                        ? 'bg-red-500'
                        : index < currentDomain
                        ? 'bg-green-500'
                        : 'bg-slate-600'
                    }`}
                  >
                    <SafeIcon
                      icon={index < currentDomain ? FiCheckCircle : domain.icon}
                      className="w-4 h-4 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm">{domain.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentDomain}-${currentQuestion}`}
              className="bg-slate-800 sharp-edges shadow-lg p-8 mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={securityDomains[currentDomain].icon} className="w-6 h-6 text-red-400 mr-3" />
                    <span className="text-red-400 font-medium">{securityDomains[currentDomain].title}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {currentQuestionData.question}
                  </h2>
                  <p className="text-gray-300">{currentQuestionData.tooltip}</p>
                  <div className="mt-2 text-sm text-gray-400">
                    Risk Weight: {currentQuestionData.weight}/5
                  </div>
                </div>
                <button
                  onMouseEnter={() => setShowTooltip(currentQuestionIndex)}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="relative ml-4"
                >
                  <SafeIcon icon={FiHelpCircle} className="w-6 h-6 text-gray-400 hover:text-gray-300" />
                  {showTooltip === currentQuestionIndex && (
                    <div className="absolute right-0 top-8 w-64 bg-gray-900 text-white p-3 sharp-edges text-sm z-10">
                      {currentQuestionData.tooltip}
                    </div>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => {
                  const riskColors = {
                    Secure: 'border-green-500 bg-green-900/20 hover:bg-green-900/30',
                    Low: 'border-green-400 bg-green-900/10 hover:bg-green-900/20',
                    Moderate: 'border-yellow-500 bg-yellow-900/20 hover:bg-yellow-900/30',
                    High: 'border-orange-500 bg-orange-900/20 hover:bg-orange-900/30',
                    Critical: 'border-red-500 bg-red-900/20 hover:bg-red-900/30'
                  };

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(currentQuestionIndex, option)}
                      className={`w-full p-4 text-left border-2 sharp-edges transition-all duration-300 ${
                        answers[currentQuestionIndex]?.text === option.text
                          ? riskColors[option.risk]
                          : 'border-slate-600 hover:border-slate-500 bg-slate-700 hover:bg-slate-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white">{option.text}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-xs px-2 py-1 sharp-edges font-medium ${
                            option.risk === 'Secure' ? 'bg-green-900 text-green-200' :
                            option.risk === 'Low' ? 'bg-green-800 text-green-200' :
                            option.risk === 'Moderate' ? 'bg-yellow-900 text-yellow-200' :
                            option.risk === 'High' ? 'bg-orange-900 text-orange-200' :
                            'bg-red-900 text-red-200'
                          }`}>
                            {option.risk}
                          </span>
                          <span className="text-sm text-gray-400">{option.points} pts</span>
                          {answers[currentQuestionIndex]?.text === option.text && (
                            <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-400" />
                          )}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                } else if (currentDomain > 0) {
                  setCurrentDomain(currentDomain - 1);
                  setCurrentQuestion(4); // Last question of previous domain
                }
              }}
              disabled={currentDomain === 0 && currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              <span>Previous</span>
            </motion.button>

            <div className="text-sm text-gray-400">
              Question {currentDomain * 5 + currentQuestion + 1} of {securityQuestions.length}
            </div>

            <motion.button
              onClick={() => {
                if (currentQuestion < currentDomainQuestions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else if (currentDomain < securityDomains.length - 1) {
                  setCurrentDomain(currentDomain + 1);
                  setCurrentQuestion(0);
                } else {
                  setShowLeadCapture(true);
                }
              }}
              disabled={!answers[currentQuestionIndex]}
              className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white sharp-edges hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{currentDomain === securityDomains.length - 1 && currentQuestion === currentDomainQuestions.length - 1 ? 'Complete Assessment' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CybersecurityAssessment;
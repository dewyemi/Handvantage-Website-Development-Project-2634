import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { 
  FiCheckCircle, FiArrowRight, FiArrowLeft, FiDownload, FiCalendar, 
  FiMail, FiPhone, FiUser, FiBuilding, FiTrendingUp, FiShield,
  FiCloud, FiSettings, FiBarChart, FiZap, FiTarget, FiAward,
  FiClock, FiShare2, FiHelpCircle, FiX
} = FiIcons;

const AssessmentTool = () => {
  const [currentSection, setCurrentSection] = useState(0);
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
    companySize: '',
    industry: '',
    revenue: ''
  });
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [startTime] = useState(Date.now());

  const sections = [
    {
      title: "Infrastructure Assessment",
      icon: FiCloud,
      color: "#1e3a8a",
      description: "Evaluate your current technology foundation"
    },
    {
      title: "Security Evaluation", 
      icon: FiShield,
      color: "#dc2626",
      description: "Assess your cybersecurity posture"
    },
    {
      title: "Process Automation",
      icon: FiSettings,
      color: "#f97316", 
      description: "Review workflow efficiency and automation"
    },
    {
      title: "Growth Readiness",
      icon: FiTrendingUp,
      color: "#16a34a",
      description: "Determine scalability and growth potential"
    }
  ];

  const questions = [
    // Infrastructure Assessment (Questions 1-5)
    {
      section: 0,
      question: "What is your current email and collaboration platform?",
      tooltip: "Your email platform affects security, compliance, and collaboration capabilities",
      options: [
        { text: "Basic email hosting (GoDaddy, etc.)", points: 0 },
        { text: "Gmail or Outlook.com personal", points: 1 },
        { text: "Google Workspace", points: 2 },
        { text: "Microsoft 365 Business", points: 3 },
        { text: "Microsoft 365 Enterprise with advanced features", points: 4 }
      ]
    },
    {
      section: 0,
      question: "How is your IT support currently structured?",
      tooltip: "Proper IT support ensures system reliability and quick issue resolution",
      options: [
        { text: "No dedicated IT support", points: 0 },
        { text: "Internal employee handles IT part-time", points: 1 },
        { text: "Break-fix support as needed", points: 2 },
        { text: "Managed Service Provider (MSP)", points: 3 },
        { text: "Dedicated internal IT team + MSP partnership", points: 4 }
      ]
    },
    {
      section: 0,
      question: "What is your current backup and disaster recovery status?",
      tooltip: "Data protection is critical for business continuity and compliance",
      options: [
        { text: "No regular backups", points: 0 },
        { text: "Manual backups occasionally", points: 1 },
        { text: "Automated local backups only", points: 2 },
        { text: "Cloud backups with basic recovery plan", points: 3 },
        { text: "Comprehensive backup + tested disaster recovery plan", points: 4 }
      ]
    },
    {
      section: 0,
      question: "How well are your business systems integrated?",
      tooltip: "System integration reduces manual work and improves data accuracy",
      options: [
        { text: "Completely separate systems, manual data entry", points: 0 },
        { text: "Some manual data sharing between systems", points: 1 },
        { text: "Basic integrations with frequent manual intervention", points: 2 },
        { text: "Most systems integrated with occasional manual tasks", points: 3 },
        { text: "Fully integrated ecosystem with automated data flow", points: 4 }
      ]
    },
    {
      section: 0,
      question: "How effectively does your current setup support remote work?",
      tooltip: "Remote work capabilities are essential for modern business operations",
      options: [
        { text: "No remote work capabilities", points: 0 },
        { text: "Basic email and file access only", points: 1 },
        { text: "VPN access to some internal systems", points: 2 },
        { text: "Cloud-based tools with good remote access", points: 3 },
        { text: "Complete remote work parity with office capabilities", points: 4 }
      ]
    },

    // Security Evaluation (Questions 6-10)
    {
      section: 1,
      question: "What email security measures do you currently have in place?",
      tooltip: "95% of cyber attacks start with email - proper protection is critical",
      options: [
        { text: "Basic spam filtering only", points: 0 },
        { text: "Standard antivirus scanning", points: 1 },
        { text: "Enhanced spam filtering with basic threat detection", points: 2 },
        { text: "Advanced threat protection with user training", points: 3 },
        { text: "Enterprise-grade email security (IRONSCALES level)", points: 4 }
      ]
    },
    {
      section: 1,
      question: "What network security infrastructure do you have?",
      tooltip: "Network security protects against intrusions and data breaches",
      options: [
        { text: "Basic router/modem security only", points: 0 },
        { text: "Standard firewall protection", points: 1 },
        { text: "Managed firewall with basic monitoring", points: 2 },
        { text: "Next-generation firewall with threat detection", points: 3 },
        { text: "Enterprise-grade security (Check Point level) with monitoring", points: 4 }
      ]
    },
    {
      section: 1,
      question: "How do you manage and secure employee devices?",
      tooltip: "Device management prevents security breaches and ensures compliance",
      options: [
        { text: "No device management or security policies", points: 0 },
        { text: "Basic antivirus on company devices", points: 1 },
        { text: "Device policies with manual enforcement", points: 2 },
        { text: "Mobile Device Management (MDM) solution", points: 3 },
        { text: "Comprehensive endpoint security with automated management", points: 4 }
      ]
    },
    {
      section: 1,
      question: "What compliance requirements does your business need to meet?",
      tooltip: "Compliance automation reduces risk and audit costs",
      options: [
        { text: "No specific compliance requirements", points: 0 },
        { text: "Basic data protection awareness", points: 1 },
        { text: "Industry-specific requirements (HIPAA, PCI, etc.)", points: 2 },
        { text: "SOC 2 or ISO 27001 requirements", points: 3 },
        { text: "Multiple compliance frameworks with automated monitoring", points: 4 }
      ]
    },
    {
      section: 1,
      question: "Have you experienced any security incidents in the past year?",
      tooltip: "Security incidents indicate gaps that need to be addressed",
      options: [
        { text: "Multiple significant incidents", points: 0 },
        { text: "One major incident or several minor ones", points: 1 },
        { text: "Minor incidents with some impact", points: 2 },
        { text: "Attempted attacks but no successful breaches", points: 3 },
        { text: "No incidents - comprehensive protection in place", points: 4 }
      ]
    },

    // Process Automation (Questions 11-15)
    {
      section: 2,
      question: "What percentage of your business processes are currently automated?",
      tooltip: "Process automation increases efficiency and reduces errors",
      options: [
        { text: "0-20% - Mostly manual processes", points: 0 },
        { text: "21-40% - Some basic automation", points: 1 },
        { text: "41-60% - Moderate automation", points: 2 },
        { text: "61-80% - Significant automation", points: 3 },
        { text: "81-100% - Highly automated operations", points: 4 }
      ]
    },
    {
      section: 2,
      question: "How much time does your team spend on manual data entry daily?",
      tooltip: "Manual data entry is a prime candidate for automation",
      options: [
        { text: "4+ hours per person per day", points: 0 },
        { text: "2-4 hours per person per day", points: 1 },
        { text: "1-2 hours per person per day", points: 2 },
        { text: "Less than 1 hour per person per day", points: 3 },
        { text: "Minimal manual data entry - mostly automated", points: 4 }
      ]
    },
    {
      section: 2,
      question: "What customer relationship management (CRM) system do you use?",
      tooltip: "CRM systems are essential for managing customer relationships and sales",
      options: [
        { text: "No CRM - using spreadsheets or email", points: 0 },
        { text: "Basic contact management system", points: 1 },
        { text: "Standard CRM with basic features", points: 2 },
        { text: "Advanced CRM with automation features", points: 3 },
        { text: "Enterprise CRM fully integrated with business processes", points: 4 }
      ]
    },
    {
      section: 2,
      question: "How do you currently handle business reporting and analytics?",
      tooltip: "Automated reporting provides real-time insights for better decisions",
      options: [
        { text: "Manual reports created as needed", points: 0 },
        { text: "Basic spreadsheet reports updated periodically", points: 1 },
        { text: "Some automated reports with manual compilation", points: 2 },
        { text: "Dashboard with real-time data from multiple sources", points: 3 },
        { text: "Advanced analytics with predictive insights and automation", points: 4 }
      ]
    },
    {
      section: 2,
      question: "How well do your business systems communicate with each other?",
      tooltip: "System integration eliminates duplicate work and data inconsistencies",
      options: [
        { text: "No integration - manual data transfer between systems", points: 0 },
        { text: "Limited integration with frequent manual intervention", points: 1 },
        { text: "Some automated data sharing between key systems", points: 2 },
        { text: "Most systems integrated with occasional manual tasks", points: 3 },
        { text: "Fully integrated ecosystem with real-time data synchronization", points: 4 }
      ]
    },

    // Growth Readiness (Questions 16-20)
    {
      section: 3,
      question: "What are your primary business growth objectives for the next 2 years?",
      tooltip: "Growth objectives help determine technology investment priorities",
      options: [
        { text: "Maintain current operations", points: 0 },
        { text: "Modest growth (10-25%)", points: 1 },
        { text: "Significant growth (25-50%)", points: 2 },
        { text: "Aggressive growth (50-100%)", points: 3 },
        { text: "Rapid expansion (100%+ or new markets)", points: 4 }
      ]
    },
    {
      section: 3,
      question: "What is your technology investment timeline and budget approach?",
      tooltip: "Investment readiness affects implementation speed and solution scope",
      options: [
        { text: "Minimal budget, only emergency fixes", points: 0 },
        { text: "Small budget for basic improvements", points: 1 },
        { text: "Moderate budget for strategic upgrades", points: 2 },
        { text: "Significant budget for transformation initiatives", points: 3 },
        { text: "Comprehensive budget for complete digital transformation", points: 4 }
      ]
    },
    {
      section: 3,
      question: "What are your biggest scalability challenges?",
      tooltip: "Identifying scalability challenges helps prioritize technology solutions",
      options: [
        { text: "Systems can't handle current load effectively", points: 0 },
        { text: "Manual processes limit growth capacity", points: 1 },
        { text: "Some bottlenecks but manageable growth", points: 2 },
        { text: "Minor scalability concerns with clear solutions", points: 3 },
        { text: "Highly scalable infrastructure ready for growth", points: 4 }
      ]
    },
    {
      section: 3,
      question: "How ready is your team for technology changes and improvements?",
      tooltip: "Change management is critical for successful technology adoption",
      options: [
        { text: "Significant resistance to change", points: 0 },
        { text: "Some resistance but willing to adapt", points: 1 },
        { text: "Generally open to beneficial changes", points: 2 },
        { text: "Enthusiastic about technology improvements", points: 3 },
        { text: "Proactive in seeking and adopting new technologies", points: 4 }
      ]
    },
    {
      section: 3,
      question: "How do you measure technology ROI and success?",
      tooltip: "Clear success metrics ensure technology investments deliver value",
      options: [
        { text: "No formal measurement of technology ROI", points: 0 },
        { text: "Basic cost tracking without ROI analysis", points: 1 },
        { text: "Some ROI measurement for major investments", points: 2 },
        { text: "Regular ROI analysis with defined success metrics", points: 3 },
        { text: "Comprehensive ROI tracking with predictive analytics", points: 4 }
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
    "Technology",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Professional Services",
    "Retail/E-commerce",
    "Education",
    "Non-profit",
    "Other"
  ];

  const revenueRanges = [
    "Under $1M",
    "$1M - $5M",
    "$5M - $10M", 
    "$10M - $50M",
    "$50M+"
  ];

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
    const maxScore = questions.length * 4;
    return {
      total: totalScore,
      percentage: Math.round((totalScore / maxScore) * 100),
      maxScore
    };
  };

  const getScoreCategory = (score) => {
    if (score >= 60) return {
      level: "Enterprise Ready",
      color: "#16a34a",
      description: "Your business has a strong technology foundation. Focus on optimization and advanced features.",
      icon: FiAward
    };
    if (score >= 40) return {
      level: "Growth Stage", 
      color: "#f97316",
      description: "Good foundation with opportunities for strategic improvements to accelerate growth.",
      icon: FiTrendingUp
    };
    if (score >= 20) return {
      level: "Foundation Building",
      color: "#eab308", 
      description: "Core systems need upgrades to support business growth and efficiency.",
      icon: FiSettings
    };
    return {
      level: "Transformation Critical",
      color: "#dc2626",
      description: "Comprehensive technology overhaul needed to remain competitive and secure.",
      icon: FiTarget
    };
  };

  const getSectionScore = (sectionIndex) => {
    const sectionQuestions = questions.filter(q => q.section === sectionIndex);
    const sectionAnswers = sectionQuestions.map(q => answers[questions.indexOf(q)]).filter(Boolean);
    const sectionTotal = sectionAnswers.reduce((sum, answer) => sum + answer.points, 0);
    const sectionMax = sectionQuestions.length * 4;
    return Math.round((sectionTotal / sectionMax) * 100);
  };

  const getRecommendations = (score, sectionScores) => {
    const recommendations = [];
    
    if (sectionScores[0] < 60) { // Infrastructure
      recommendations.push({
        title: "Microsoft 365 & Azure Migration",
        description: "Upgrade to enterprise-grade cloud infrastructure with our Microsoft CSP partnership",
        priority: "High",
        timeline: "30-60 days"
      });
    }

    if (sectionScores[1] < 60) { // Security
      recommendations.push({
        title: "Multi-Layer Security Implementation", 
        description: "Deploy IRONSCALES email security, Check Point network protection, and Vanta compliance",
        priority: "Critical",
        timeline: "30-45 days"
      });
    }

    if (sectionScores[2] < 60) { // Process Automation
      recommendations.push({
        title: "RTILA AI Business Automation",
        description: "Implement intelligent process automation to eliminate manual workflows",
        priority: "High", 
        timeline: "60-90 days"
      });
    }

    if (sectionScores[3] < 60) { // Growth Readiness
      recommendations.push({
        title: "Scalability Assessment & Planning",
        description: "Develop comprehensive growth strategy with scalable technology architecture", 
        priority: "Medium",
        timeline: "90 days"
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
      if (currentQuestion < questions.filter(q => q.section === currentSection).length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
        setCurrentQuestion(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setShowLeadCapture(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 500);
  };

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const score = calculateScore();
      const sectionScores = sections.map((_, index) => getSectionScore(index));
      const completionTime = Math.round((Date.now() - startTime) / 1000 / 60);

      // Submit to Netlify form
      const formData = new FormData();
      formData.append('form-name', 'assessment-results');
      formData.append('firstName', userInfo.firstName);
      formData.append('lastName', userInfo.lastName);
      formData.append('email', userInfo.email);
      formData.append('phone', userInfo.phone);
      formData.append('company', userInfo.company);
      formData.append('companySize', userInfo.companySize);
      formData.append('industry', userInfo.industry);
      formData.append('revenue', userInfo.revenue);
      formData.append('totalScore', score.total);
      formData.append('scorePercentage', score.percentage);
      formData.append('completionTime', completionTime);
      formData.append('sectionScores', JSON.stringify(sectionScores));
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

  const currentSectionQuestions = questions.filter(q => q.section === currentSection);
  const totalProgress = ((currentSection * 5 + currentQuestion + Object.keys(answers).length) / questions.length) * 100;
  const currentQuestionData = currentSectionQuestions[currentQuestion];
  const currentQuestionIndex = questions.indexOf(currentQuestionData);

  if (showResults) {
    const score = calculateScore();
    const category = getScoreCategory(score.total);
    const sectionScores = sections.map((_, index) => getSectionScore(index));
    const recommendations = getRecommendations(score.total, sectionScores);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Results Header */}
            <div className="text-center mb-12">
              <div className="w-24 h-24 mx-auto mb-6 sharp-edges flex items-center justify-center" style={{ backgroundColor: category.color }}>
                <SafeIcon icon={category.icon} className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Digital Transformation Score</h1>
              <div className="text-6xl font-bold mb-2" style={{ color: category.color }}>
                {score.total}/80
              </div>
              <div className="text-2xl font-semibold mb-4" style={{ color: category.color }}>
                {category.level}
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="bg-white sharp-edges shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Category Breakdown</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => {
                  const sectionScore = sectionScores[index];
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 sharp-edges flex items-center justify-center" style={{ backgroundColor: `${section.color}20` }}>
                        <SafeIcon icon={section.icon} className="w-6 h-6" style={{ color: section.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{section.title}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 sharp-edges h-2">
                            <div 
                              className="h-2 sharp-edges transition-all duration-500"
                              style={{ 
                                width: `${sectionScore}%`,
                                backgroundColor: section.color 
                              }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-600">{sectionScore}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white sharp-edges shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Actions</h2>
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div key={index} className="border border-gray-200 sharp-edges p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{rec.title}</h3>
                        <p className="text-gray-600 mb-2">{rec.description}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-2 py-1 sharp-edges text-xs font-medium ${
                            rec.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                            rec.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {rec.priority} Priority
                          </span>
                          <span className="text-gray-500">
                            <SafeIcon icon={FiClock} className="w-4 h-4 inline mr-1" />
                            {rec.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 sharp-edges shadow-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg mb-6 opacity-90">
                Schedule a free 30-minute consultation with Josh to discuss your assessment results and create a custom transformation roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="tel:+12362350919"
                  className="bg-white text-blue-600 px-8 py-3 sharp-edges font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Now: 236-235-0919
                </motion.a>
                <motion.a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 sharp-edges font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </motion.a>
              </div>
              <p className="text-sm mt-4 opacity-75">
                Free consultation • No obligation • Immediate insights
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showLeadCapture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white sharp-edges shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 sharp-edges flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Almost Done!</h2>
                <p className="text-lg text-gray-600">
                  Get your personalized assessment results and transformation roadmap
                </p>
              </div>

              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.firstName}
                      onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.lastName}
                      onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.company}
                      onChange={(e) => setUserInfo({...userInfo, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Size
                    </label>
                    <select
                      value={userInfo.companySize}
                      onChange={(e) => setUserInfo({...userInfo, companySize: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select size</option>
                      {companySizes.map(size => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      value={userInfo.industry}
                      onChange={(e) => setUserInfo({...userInfo, industry: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Annual Revenue
                    </label>
                    <select
                      value={userInfo.revenue}
                      onChange={(e) => setUserInfo({...userInfo, revenue: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select range</option>
                      {revenueRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-xs text-gray-500">
                  By submitting this form, you agree to receive communications from Handvantage. 
                  Your information will be kept confidential and used only to provide your assessment results.
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 sharp-edges font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Processing...' : 'Get My Assessment Results'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Transformation Assessment
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover your business's transformation readiness in 10-15 minutes
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 sharp-edges h-3 mb-4">
              <motion.div
                className="bg-blue-600 h-3 sharp-edges"
                initial={{ width: 0 }}
                animate={{ width: `${totalProgress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-500">
              {Math.round(totalProgress)}% Complete • Question {currentQuestion + 1} of {currentSectionQuestions.length} in {sections[currentSection].title}
            </p>
          </div>

          {/* Section Progress */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`p-4 sharp-edges border-2 transition-all duration-300 ${
                  index === currentSection
                    ? 'border-blue-500 bg-blue-50'
                    : index < currentSection
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 sharp-edges flex items-center justify-center ${
                      index === currentSection
                        ? 'bg-blue-500'
                        : index < currentSection
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    <SafeIcon
                      icon={index < currentSection ? FiCheckCircle : section.icon}
                      className="w-4 h-4 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm">{section.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSection}-${currentQuestion}`}
              className="bg-white sharp-edges shadow-lg p-8 mb-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentQuestionData.question}
                  </h2>
                  <p className="text-gray-600">{currentQuestionData.tooltip}</p>
                </div>
                <button
                  onMouseEnter={() => setShowTooltip(currentQuestionIndex)}
                  onMouseLeave={() => setShowTooltip(null)}
                  className="relative ml-4"
                >
                  <SafeIcon icon={FiHelpCircle} className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                  {showTooltip === currentQuestionIndex && (
                    <div className="absolute right-0 top-8 w-64 bg-gray-900 text-white p-3 sharp-edges text-sm z-10">
                      {currentQuestionData.tooltip}
                    </div>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(currentQuestionIndex, option)}
                    className={`w-full p-4 text-left border-2 sharp-edges transition-all duration-300 ${
                      answers[currentQuestionIndex]?.text === option.text
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">{option.text}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{option.points} pts</span>
                        {answers[currentQuestionIndex]?.text === option.text && (
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                } else if (currentSection > 0) {
                  setCurrentSection(currentSection - 1);
                  setCurrentQuestion(4); // Last question of previous section
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              disabled={currentSection === 0 && currentQuestion === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              <span>Previous</span>
            </motion.button>

            <div className="text-sm text-gray-500">
              Question {currentSection * 5 + currentQuestion + 1} of {questions.length}
            </div>

            <motion.button
              onClick={() => {
                if (currentQuestion < currentSectionQuestions.length - 1) {
                  setCurrentQuestion(currentQuestion + 1);
                } else if (currentSection < sections.length - 1) {
                  setCurrentSection(currentSection + 1);
                  setCurrentQuestion(0);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setShowLeadCapture(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              disabled={!answers[currentQuestionIndex]}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white sharp-edges hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{currentSection === sections.length - 1 && currentQuestion === currentSectionQuestions.length - 1 ? 'Finish' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssessmentTool;
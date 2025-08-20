import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiDollarSign, FiTrendingUp, FiUsers, FiShield, FiCheckCircle,
  FiArrowRight, FiDownload, FiCalculator, FiBarChart, FiClipboard
} = FiIcons;

const ComplianceAssessment = () => {
  const [selectedFrameworks, setSelectedFrameworks] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const frameworks = [
    {
      id: 'soc2',
      name: 'SOC 2 Type II',
      description: 'Service Organization Control for security, availability, processing integrity, confidentiality, and privacy',
      industry: 'All service organizations',
      timeline: '6-12 months',
      complexity: 'Medium',
      icon: FiShield
    },
    {
      id: 'hipaa',
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      industry: 'Healthcare organizations',
      timeline: '4-8 months',
      complexity: 'High',
      icon: FiUsers
    },
    {
      id: 'pci',
      name: 'PCI-DSS',
      description: 'Payment Card Industry Data Security Standard',
      industry: 'Organizations processing card payments',
      timeline: '3-6 months',
      complexity: 'High',
      icon: FiDollarSign
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      description: 'General Data Protection Regulation for EU data protection',
      industry: 'Organizations handling EU personal data',
      timeline: '4-8 months',
      complexity: 'Medium',
      icon: FiShield
    },
    {
      id: 'iso27001',
      name: 'ISO 27001',
      description: 'International standard for information security management',
      industry: 'All organizations',
      timeline: '8-12 months',
      complexity: 'High',
      icon: FiCheckCircle
    }
  ];

  const assessmentSteps = [
    {
      id: 'framework-selection',
      title: 'Framework Selection',
      description: 'Select the compliance frameworks that apply to your business'
    },
    {
      id: 'current-state',
      title: 'Current State Assessment',
      description: 'Evaluate your current compliance posture'
    },
    {
      id: 'organizational-readiness',
      title: 'Organizational Readiness',
      description: 'Assess your organization\'s readiness for compliance implementation'
    }
  ];

  const complianceQuestions = {
    soc2: [
      {
        id: 'access-controls',
        question: 'Do you have formal access control policies and procedures?',
        category: 'Security',
        options: [
          { value: 'none', label: 'No formal access controls', score: 0 },
          { value: 'basic', label: 'Basic access controls in place', score: 40 },
          { value: 'documented', label: 'Documented policies and procedures', score: 70 },
          { value: 'comprehensive', label: 'Comprehensive access management system', score: 100 }
        ]
      },
      {
        id: 'monitoring',
        question: 'Do you have continuous monitoring and logging?',
        category: 'Availability',
        options: [
          { value: 'none', label: 'No formal monitoring', score: 0 },
          { value: 'basic', label: 'Basic monitoring tools', score: 30 },
          { value: 'comprehensive', label: 'Comprehensive monitoring and alerting', score: 70 },
          { value: 'automated', label: 'Automated monitoring with SIEM', score: 100 }
        ]
      },
      {
        id: 'data-classification',
        question: 'How do you classify and protect sensitive data?',
        category: 'Confidentiality',
        options: [
          { value: 'none', label: 'No data classification', score: 0 },
          { value: 'basic', label: 'Basic data categorization', score: 40 },
          { value: 'formal', label: 'Formal classification scheme', score: 70 },
          { value: 'automated', label: 'Automated classification and protection', score: 100 }
        ]
      }
    ],
    hipaa: [
      {
        id: 'admin-safeguards',
        question: 'Do you have HIPAA administrative safeguards in place?',
        category: 'Administrative Safeguards',
        options: [
          { value: 'none', label: 'No formal safeguards', score: 0 },
          { value: 'basic', label: 'Basic policies documented', score: 40 },
          { value: 'implemented', label: 'Policies implemented and enforced', score: 70 },
          { value: 'comprehensive', label: 'Comprehensive safeguards with regular review', score: 100 }
        ]
      },
      {
        id: 'physical-safeguards',
        question: 'Are physical safeguards implemented for PHI protection?',
        category: 'Physical Safeguards',
        options: [
          { value: 'minimal', label: 'Minimal physical controls', score: 20 },
          { value: 'basic', label: 'Basic physical security measures', score: 50 },
          { value: 'comprehensive', label: 'Comprehensive physical safeguards', score: 80 },
          { value: 'advanced', label: 'Advanced biometric and monitoring systems', score: 100 }
        ]
      },
      {
        id: 'technical-safeguards',
        question: 'What technical safeguards protect electronic PHI?',
        category: 'Technical Safeguards',
        options: [
          { value: 'basic', label: 'Basic encryption and access controls', score: 30 },
          { value: 'standard', label: 'Standard technical safeguards', score: 60 },
          { value: 'comprehensive', label: 'Comprehensive technical controls', score: 80 },
          { value: 'advanced', label: 'Advanced encryption and monitoring', score: 100 }
        ]
      }
    ],
    pci: [
      {
        id: 'network-security',
        question: 'How is your cardholder data environment secured?',
        category: 'Network Security',
        options: [
          { value: 'basic', label: 'Basic firewall protection', score: 20 },
          { value: 'segmented', label: 'Network segmentation implemented', score: 60 },
          { value: 'comprehensive', label: 'Comprehensive network security', score: 80 },
          { value: 'advanced', label: 'Advanced threat detection and response', score: 100 }
        ]
      },
      {
        id: 'data-protection',
        question: 'How do you protect stored cardholder data?',
        category: 'Data Protection',
        options: [
          { value: 'minimal', label: 'Minimal protection measures', score: 10 },
          { value: 'encrypted', label: 'Data encrypted at rest', score: 50 },
          { value: 'tokenized', label: 'Tokenization implemented', score: 80 },
          { value: 'comprehensive', label: 'Comprehensive data protection strategy', score: 100 }
        ]
      }
    ],
    gdpr: [
      {
        id: 'lawful-basis',
        question: 'Do you have documented lawful basis for data processing?',
        category: 'Legal Basis',
        options: [
          { value: 'none', label: 'No documented basis', score: 0 },
          { value: 'basic', label: 'Basic documentation', score: 40 },
          { value: 'comprehensive', label: 'Comprehensive legal basis documentation', score: 80 },
          { value: 'audited', label: 'Regularly audited and updated', score: 100 }
        ]
      },
      {
        id: 'consent-management',
        question: 'How do you manage data subject consent?',
        category: 'Consent Management',
        options: [
          { value: 'manual', label: 'Manual consent tracking', score: 20 },
          { value: 'basic', label: 'Basic consent management', score: 50 },
          { value: 'automated', label: 'Automated consent management system', score: 80 },
          { value: 'comprehensive', label: 'Comprehensive consent and preference center', score: 100 }
        ]
      }
    ],
    iso27001: [
      {
        id: 'isms',
        question: 'Do you have an Information Security Management System (ISMS)?',
        category: 'Management System',
        options: [
          { value: 'none', label: 'No formal ISMS', score: 0 },
          { value: 'developing', label: 'ISMS in development', score: 30 },
          { value: 'implemented', label: 'ISMS implemented', score: 70 },
          { value: 'certified', label: 'ISO 27001 certified ISMS', score: 100 }
        ]
      },
      {
        id: 'risk-management',
        question: 'How mature is your information security risk management?',
        category: 'Risk Management',
        options: [
          { value: 'ad-hoc', label: 'Ad-hoc risk management', score: 20 },
          { value: 'documented', label: 'Documented risk processes', score: 50 },
          { value: 'systematic', label: 'Systematic risk management', score: 80 },
          { value: 'continuous', label: 'Continuous risk monitoring and management', score: 100 }
        ]
      }
    ]
  };

  const organizationalQuestions = [
    {
      id: 'team-size',
      question: 'What is your current team size for compliance management?',
      options: [
        { value: 'none', label: 'No dedicated compliance resources', score: 0 },
        { value: 'part-time', label: 'Part-time compliance responsibility', score: 30 },
        { value: 'dedicated', label: 'Dedicated compliance person', score: 70 },
        { value: 'team', label: 'Dedicated compliance team', score: 100 }
      ]
    },
    {
      id: 'budget',
      question: 'What is your estimated compliance budget?',
      options: [
        { value: 'minimal', label: 'Minimal budget allocated', score: 20 },
        { value: 'moderate', label: 'Moderate budget ($50K-$150K)', score: 50 },
        { value: 'substantial', label: 'Substantial budget ($150K-$500K)', score: 80 },
        { value: 'comprehensive', label: 'Comprehensive budget ($500K+)', score: 100 }
      ]
    },
    {
      id: 'timeline',
      question: 'What is your target timeline for compliance?',
      options: [
        { value: 'immediate', label: 'Immediate (3-6 months)', score: 100 },
        { value: 'short', label: 'Short-term (6-12 months)', score: 80 },
        { value: 'medium', label: 'Medium-term (12-18 months)', score: 60 },
        { value: 'long', label: 'Long-term (18+ months)', score: 40 }
      ]
    }
  ];

  const toggleFramework = (frameworkId) => {
    setSelectedFrameworks(prev => 
      prev.includes(frameworkId) 
        ? prev.filter(id => id !== frameworkId)
        : [...prev, frameworkId]
    );
  };

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateComplianceScore = () => {
    const scores = {};
    selectedFrameworks.forEach(framework => {
      const frameworkQuestions = complianceQuestions[framework] || [];
      let totalScore = 0;
      let answeredQuestions = 0;
      
      frameworkQuestions.forEach(question => {
        const response = responses[question.id];
        if (response) {
          const option = question.options.find(opt => opt.value === response);
          totalScore += option?.score || 0;
          answeredQuestions++;
        }
      });
      
      scores[framework] = answeredQuestions > 0 ? Math.round(totalScore / answeredQuestions) : 0;
    });
    
    return scores;
  };

  const getComplianceLevel = (score) => {
    if (score >= 80) return { level: 'Ready', color: 'text-green-600', bg: 'bg-green-100' };
    if (score >= 60) return { level: 'Nearly Ready', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 40) return { level: 'In Progress', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: 'Getting Started', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const nextStep = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults) {
    const scores = calculateComplianceScore();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Results Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-primary-dark mb-4">
              Your Compliance Readiness Assessment Results
            </h1>
            <p className="text-xl text-slate-600">
              Framework-specific analysis and implementation roadmap
            </p>
          </motion.div>

          {/* Framework Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {selectedFrameworks.map((frameworkId) => {
              const framework = frameworks.find(f => f.id === frameworkId);
              const score = scores[frameworkId] || 0;
              const level = getComplianceLevel(score);
              
              return (
                <motion.div
                  key={frameworkId}
                  className="bg-white rounded-xl shadow-2xl p-8"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={framework.icon} className="w-8 h-8 text-primary-blue mr-3" />
                    <h3 className="text-xl font-bold text-primary-dark">{framework.name}</h3>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-primary-blue mb-2">{score}%</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${level.bg} ${level.color}`}>
                      {level.level}
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Timeline:</span>
                      <span className="font-semibold">{framework.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Complexity:</span>
                      <span className="font-semibold">{framework.complexity}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Recommendations */}
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Priority Recommendations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-red-800 mb-2">Immediate Actions (30-60 days)</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Document current security policies</li>
                  <li>• Implement basic access controls</li>
                  <li>• Begin risk assessment process</li>
                  <li>• Establish compliance team</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Short-term Initiatives (3-6 months)</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Deploy monitoring and logging</li>
                  <li>• Enhance data protection measures</li>
                  <li>• Conduct security awareness training</li>
                  <li>• Implement incident response plan</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-800 mb-2">Strategic Projects (6-12 months)</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Complete compliance program implementation</li>
                  <li>• Conduct third-party audit</li>
                  <li>• Achieve certification/attestation</li>
                  <li>• Establish continuous monitoring</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-primary-blue to-primary-purple text-white rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your Compliance Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance to implement your compliance program efficiently and effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://handvantage.co/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Compliance Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-blue transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                <span>Download Compliance Roadmap</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Compliance Readiness Assessment
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Evaluate your readiness for SOC 2, HIPAA, PCI-DSS, GDPR, and ISO 27001
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-primary-blue h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / assessmentSteps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Step {currentStep + 1} of {assessmentSteps.length}
          </p>
        </motion.div>

        {/* Framework Selection Step */}
        {currentStep === 0 && (
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-6">
              Select Applicable Compliance Frameworks
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {frameworks.map((framework) => (
                <div
                  key={framework.id}
                  onClick={() => toggleFramework(framework.id)}
                  className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    selectedFrameworks.includes(framework.id)
                      ? 'border-primary-blue bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={framework.icon} className="w-8 h-8 text-primary-blue mr-3" />
                    <h3 className="text-lg font-semibold text-primary-dark">{framework.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{framework.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Industry:</span>
                      <span className="font-medium">{framework.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Timeline:</span>
                      <span className="font-medium">{framework.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Complexity:</span>
                      <span className="font-medium">{framework.complexity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Assessment Questions Steps */}
        {currentStep > 0 && currentStep < assessmentSteps.length && (
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8"
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              {assessmentSteps[currentStep].title}
            </h2>
            <p className="text-slate-600 mb-8">{assessmentSteps[currentStep].description}</p>

            <div className="space-y-8">
              {currentStep === 1 && selectedFrameworks.map(frameworkId => {
                const questions = complianceQuestions[frameworkId] || [];
                const framework = frameworks.find(f => f.id === frameworkId);
                
                return (
                  <div key={frameworkId} className="border-b pb-8 last:border-b-0">
                    <h3 className="text-xl font-semibold text-primary-dark mb-6 flex items-center">
                      <SafeIcon icon={framework.icon} className="w-6 h-6 mr-2" />
                      {framework.name}
                    </h3>
                    
                    {questions.map((question) => (
                      <div key={question.id} className="mb-6">
                        <h4 className="font-semibold text-primary-dark mb-3">{question.question}</h4>
                        <div className="space-y-2">
                          {question.options.map((option) => (
                            <label
                              key={option.value}
                              className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-blue-50 cursor-pointer transition-colors"
                            >
                              <input
                                type="radio"
                                name={question.id}
                                value={option.value}
                                checked={responses[question.id] === option.value}
                                onChange={(e) => handleResponse(question.id, e.target.value)}
                                className="w-4 h-4 text-primary-blue"
                              />
                              <span className="text-slate-700">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
              
              {currentStep === 2 && (
                <div className="space-y-6">
                  {organizationalQuestions.map((question) => (
                    <div key={question.id}>
                      <h4 className="font-semibold text-primary-dark mb-3">{question.question}</h4>
                      <div className="space-y-2">
                        {question.options.map((option) => (
                          <label
                            key={option.value}
                            className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-blue-50 cursor-pointer transition-colors"
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={option.value}
                              checked={responses[question.id] === option.value}
                              onChange={(e) => handleResponse(question.id, e.target.value)}
                              className="w-4 h-4 text-primary-blue"
                            />
                            <span className="text-slate-700">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            Previous
          </motion.button>

          <span className="text-sm text-slate-500">
            {currentStep + 1} / {assessmentSteps.length}
          </span>

          <motion.button
            onClick={nextStep}
            disabled={currentStep === 0 && selectedFrameworks.length === 0}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
              (currentStep === 0 && selectedFrameworks.length > 0) || currentStep > 0
                ? 'bg-primary-blue text-white hover:opacity-90'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={(currentStep === 0 && selectedFrameworks.length > 0) || currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={(currentStep === 0 && selectedFrameworks.length > 0) || currentStep > 0 ? { scale: 0.95 } : {}}
          >
            <span>{currentStep === assessmentSteps.length - 1 ? 'View Results' : 'Next'}</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceAssessment;
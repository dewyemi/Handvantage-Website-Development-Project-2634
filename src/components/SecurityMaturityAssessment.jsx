import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiShield, FiCheckCircle, FiArrowRight, FiDownload, FiTrendingUp,
  FiUsers, FiTarget, FiLock, FiSettings, FiBarChart, FiAlertTriangle
} = FiIcons;

const SecurityMaturityAssessment = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', company: '' });

  const assessmentSections = [
    {
      id: 'business-context',
      title: 'Business Context & Risk Profile',
      description: 'Understanding your business environment and risk tolerance',
      weight: 0.25,
      questions: [
        {
          id: 'company-size',
          question: 'What is your current company size?',
          type: 'select',
          options: [
            { value: '1-20', label: '1-20 employees', score: 20 },
            { value: '21-50', label: '21-50 employees', score: 40 },
            { value: '51-200', label: '51-200 employees', score: 60 },
            { value: '201-500', label: '201-500 employees', score: 80 },
            { value: '500+', label: '500+ employees', score: 100 }
          ]
        },
        {
          id: 'growth-stage',
          question: 'How would you describe your current growth stage?',
          type: 'select',
          options: [
            { value: 'startup', label: 'Startup (establishing market presence)', score: 20 },
            { value: 'rapid-growth', label: 'Rapid growth (scaling operations)', score: 60 },
            { value: 'established', label: 'Established (optimizing operations)', score: 80 },
            { value: 'mature', label: 'Mature (market leadership)', score: 100 }
          ]
        },
        {
          id: 'industry',
          question: 'What industry best describes your business?',
          type: 'select',
          options: [
            { value: 'healthcare', label: 'Healthcare', score: 100 },
            { value: 'financial', label: 'Financial Services', score: 100 },
            { value: 'technology', label: 'Technology', score: 80 },
            { value: 'professional', label: 'Professional Services', score: 60 },
            { value: 'manufacturing', label: 'Manufacturing', score: 60 },
            { value: 'retail', label: 'Retail/E-commerce', score: 80 },
            { value: 'other', label: 'Other', score: 40 }
          ]
        },
        {
          id: 'risk-tolerance',
          question: 'How would you describe your organization\'s risk tolerance?',
          type: 'select',
          options: [
            { value: 'low', label: 'Low - Security is critical, minimal risk acceptable', score: 100 },
            { value: 'moderate', label: 'Moderate - Balance between security and business needs', score: 60 },
            { value: 'high', label: 'High - Business speed more important than security', score: 20 }
          ]
        }
      ]
    },
    {
      id: 'security-controls',
      title: 'Current Security Controls',
      description: 'Evaluating your existing security infrastructure and capabilities',
      weight: 0.30,
      questions: [
        {
          id: 'endpoint-protection',
          question: 'What endpoint protection do you currently have?',
          type: 'select',
          options: [
            { value: 'none', label: 'No centralized endpoint protection', score: 0 },
            { value: 'basic', label: 'Basic antivirus on some devices', score: 20 },
            { value: 'standard', label: 'Standard endpoint protection on all devices', score: 60 },
            { value: 'advanced', label: 'Advanced EDR/XDR solution', score: 100 }
          ]
        },
        {
          id: 'email-security',
          question: 'How is your email security configured?',
          type: 'select',
          options: [
            { value: 'basic', label: 'Basic spam filtering only', score: 20 },
            { value: 'enhanced', label: 'Enhanced filtering with some protection', score: 60 },
            { value: 'advanced', label: 'Advanced threat protection and sandboxing', score: 100 },
            { value: 'none', label: 'No additional email security', score: 0 }
          ]
        },
        {
          id: 'network-monitoring',
          question: 'Do you have network monitoring and intrusion detection?',
          type: 'select',
          options: [
            { value: 'none', label: 'No network monitoring', score: 0 },
            { value: 'basic', label: 'Basic firewall logs', score: 20 },
            { value: 'monitoring', label: 'Network monitoring tools', score: 60 },
            { value: 'advanced', label: 'Advanced SIEM/SOC monitoring', score: 100 }
          ]
        },
        {
          id: 'backup-recovery',
          question: 'How comprehensive is your backup and recovery system?',
          type: 'select',
          options: [
            { value: 'none', label: 'No formal backup system', score: 0 },
            { value: 'basic', label: 'Basic file backups', score: 30 },
            { value: 'regular', label: 'Regular automated backups', score: 60 },
            { value: 'comprehensive', label: 'Comprehensive backup with tested recovery', score: 100 }
          ]
        }
      ]
    },
    {
      id: 'compliance-governance',
      title: 'Compliance & Governance',
      description: 'Assessing regulatory compliance and governance maturity',
      weight: 0.20,
      questions: [
        {
          id: 'compliance-requirements',
          question: 'Which compliance frameworks apply to your business?',
          type: 'multiselect',
          options: [
            { value: 'none', label: 'No specific compliance requirements', score: 20 },
            { value: 'gdpr', label: 'GDPR', score: 80 },
            { value: 'hipaa', label: 'HIPAA', score: 100 },
            { value: 'pci', label: 'PCI-DSS', score: 100 },
            { value: 'soc2', label: 'SOC 2', score: 90 },
            { value: 'iso27001', label: 'ISO 27001', score: 100 }
          ]
        },
        {
          id: 'policy-management',
          question: 'How mature is your security policy management?',
          type: 'select',
          options: [
            { value: 'none', label: 'No formal security policies', score: 0 },
            { value: 'basic', label: 'Basic policies, rarely updated', score: 30 },
            { value: 'documented', label: 'Well-documented policies', score: 70 },
            { value: 'managed', label: 'Actively managed and regularly updated', score: 100 }
          ]
        },
        {
          id: 'incident-response',
          question: 'Do you have a formal incident response plan?',
          type: 'select',
          options: [
            { value: 'none', label: 'No formal incident response plan', score: 0 },
            { value: 'basic', label: 'Basic procedures documented', score: 40 },
            { value: 'tested', label: 'Documented and occasionally tested', score: 70 },
            { value: 'mature', label: 'Comprehensive plan with regular testing', score: 100 }
          ]
        }
      ]
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Efficiency',
      description: 'Evaluating resource allocation and operational effectiveness',
      weight: 0.15,
      questions: [
        {
          id: 'security-team',
          question: 'How is security management currently handled?',
          type: 'select',
          options: [
            { value: 'none', label: 'No dedicated security resources', score: 0 },
            { value: 'part-time', label: 'Part-time IT person handles security', score: 30 },
            { value: 'dedicated', label: 'Dedicated security person/team', score: 70 },
            { value: 'managed', label: 'Managed security service provider', score: 90 }
          ]
        },
        {
          id: 'automation-level',
          question: 'How much of your security operations is automated?',
          type: 'select',
          options: [
            { value: 'manual', label: 'Mostly manual processes', score: 20 },
            { value: 'basic', label: 'Some basic automation', score: 50 },
            { value: 'moderate', label: 'Moderate automation', score: 80 },
            { value: 'advanced', label: 'Highly automated operations', score: 100 }
          ]
        },
        {
          id: 'training-frequency',
          question: 'How often do you conduct security awareness training?',
          type: 'select',
          options: [
            { value: 'never', label: 'No formal training', score: 0 },
            { value: 'annual', label: 'Annual training', score: 40 },
            { value: 'quarterly', label: 'Quarterly training', score: 70 },
            { value: 'ongoing', label: 'Ongoing training program', score: 100 }
          ]
        }
      ]
    },
    {
      id: 'strategic-alignment',
      title: 'Strategic Alignment',
      description: 'Measuring how well security aligns with business objectives',
      weight: 0.10,
      questions: [
        {
          id: 'business-integration',
          question: 'How well is security integrated into business processes?',
          type: 'select',
          options: [
            { value: 'separate', label: 'Security operates separately from business', score: 20 },
            { value: 'basic', label: 'Basic integration with some processes', score: 50 },
            { value: 'integrated', label: 'Well-integrated into most processes', score: 80 },
            { value: 'strategic', label: 'Strategic partner in business decisions', score: 100 }
          ]
        },
        {
          id: 'executive-support',
          question: 'What level of executive support does security receive?',
          type: 'select',
          options: [
            { value: 'minimal', label: 'Minimal executive attention', score: 20 },
            { value: 'moderate', label: 'Moderate support when needed', score: 60 },
            { value: 'strong', label: 'Strong executive sponsorship', score: 100 }
          ]
        }
      ]
    }
  ];

  const calculateScore = () => {
    let totalScore = 0;
    let maxPossibleScore = 0;
    
    assessmentSections.forEach(section => {
      let sectionScore = 0;
      let sectionMaxScore = 0;
      
      section.questions.forEach(question => {
        const response = responses[question.id];
        if (response) {
          if (question.type === 'multiselect') {
            // For multiselect, take average of selected options
            const selectedScores = response.map(val => 
              question.options.find(opt => opt.value === val)?.score || 0
            );
            sectionScore += selectedScores.reduce((a, b) => a + b, 0) / selectedScores.length;
          } else {
            const option = question.options.find(opt => opt.value === response);
            sectionScore += option?.score || 0;
          }
        }
        sectionMaxScore += 100; // Each question max score is 100
      });
      
      // Weight the section score
      totalScore += (sectionScore / sectionMaxScore) * section.weight * 100;
      maxPossibleScore += section.weight * 100;
    });
    
    return Math.round(totalScore);
  };

  const getMaturityLevel = (score) => {
    if (score >= 81) return { level: 'Strategic Excellence', color: 'text-green-600', description: 'Industry-leading security capabilities' };
    if (score >= 61) return { level: 'Optimization Focus', color: 'text-blue-600', description: 'Well-developed capabilities with room for enhancement' };
    if (score >= 41) return { level: 'Capability Development', color: 'text-yellow-600', description: 'Basic capabilities in place, structured improvement needed' };
    if (score >= 21) return { level: 'Foundation Building', color: 'text-orange-600', description: 'Essential security controls needed' };
    return { level: 'Initial Stage', color: 'text-red-600', description: 'Immediate attention required' };
  };

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextSection = () => {
    if (currentSection < assessmentSections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const isCurrentSectionComplete = () => {
    const section = assessmentSections[currentSection];
    return section.questions.every(question => responses[question.id]);
  };

  if (showResults) {
    const score = calculateScore();
    const maturity = getMaturityLevel(score);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Results Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-primary-dark mb-4">
              Your Security Maturity Assessment Results
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive analysis of your cybersecurity posture
            </p>
          </motion.div>

          {/* Score Display */}
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-primary-blue mb-4">{score}%</div>
              <div className={`text-2xl font-semibold ${maturity.color} mb-2`}>
                {maturity.level}
              </div>
              <p className="text-slate-600">{maturity.description}</p>
            </div>

            {/* Category Breakdown */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {assessmentSections.map((section, index) => {
                const sectionScore = Math.round(Math.random() * 40 + 40); // Simplified for demo
                return (
                  <div key={section.id} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-dark">{section.title}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-blue h-2 rounded-full" 
                            style={{ width: `${sectionScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-slate-600">{sectionScore}%</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Recommendations */}
            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Priority Recommendations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiTarget} className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-dark">Immediate Actions (30-60 days)</h4>
                    <p className="text-slate-600">Implement basic endpoint protection and establish incident response procedures.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-dark">Short-term Initiatives (3-6 months)</h4>
                    <p className="text-slate-600">Deploy comprehensive monitoring and enhance email security capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiLock} className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary-dark">Strategic Projects (6-12 months)</h4>
                    <p className="text-slate-600">Implement managed security services and develop comprehensive compliance program.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t pt-8 text-center">
              <h3 className="text-xl font-bold text-primary-dark mb-4">
                Ready to Improve Your Security Posture?
              </h3>
              <p className="text-slate-600 mb-6">
                Schedule a strategic consultation to discuss your personalized roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://handvantage.co/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Strategic Consultation</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                </motion.a>
                <motion.button
                  className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                  <span>Download Detailed Report</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentSectionData = assessmentSections[currentSection];

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
            Cybersecurity Maturity Assessment
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Evaluate your current security posture and receive personalized recommendations
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-primary-blue h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentSection + 1) / assessmentSections.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Section {currentSection + 1} of {assessmentSections.length}
          </p>
        </motion.div>

        {/* Current Section */}
        <motion.div
          className="bg-white rounded-xl shadow-2xl p-8"
          key={currentSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-dark mb-2">
              {currentSectionData.title}
            </h2>
            <p className="text-slate-600">{currentSectionData.description}</p>
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {currentSectionData.questions.map((question, qIndex) => (
              <div key={question.id} className="border-b pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  {question.question}
                </h3>
                
                {question.type === 'select' && (
                  <div className="space-y-3">
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
                )}

                {question.type === 'multiselect' && (
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-blue-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          value={option.value}
                          checked={(responses[question.id] || []).includes(option.value)}
                          onChange={(e) => {
                            const currentValues = responses[question.id] || [];
                            if (e.target.checked) {
                              handleResponse(question.id, [...currentValues, option.value]);
                            } else {
                              handleResponse(question.id, currentValues.filter(v => v !== option.value));
                            }
                          }}
                          className="w-4 h-4 text-primary-blue"
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <motion.button
              onClick={prevSection}
              disabled={currentSection === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentSection === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              whileHover={currentSection > 0 ? { scale: 1.05 } : {}}
              whileTap={currentSection > 0 ? { scale: 0.95 } : {}}
            >
              Previous
            </motion.button>

            <span className="text-sm text-slate-500">
              {currentSection + 1} / {assessmentSections.length}
            </span>

            <motion.button
              onClick={nextSection}
              disabled={!isCurrentSectionComplete()}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                isCurrentSectionComplete()
                  ? 'bg-primary-blue text-white hover:opacity-90'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={isCurrentSectionComplete() ? { scale: 1.05 } : {}}
              whileTap={isCurrentSectionComplete() ? { scale: 0.95 } : {}}
            >
              <span>{currentSection === assessmentSections.length - 1 ? 'View Results' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SecurityMaturityAssessment;
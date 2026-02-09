import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiMapPin, FiTrendingUp, FiClock, FiCheckCircle, FiArrowRight, 
  FiDownload, FiCalendar, FiTarget, FiShield, FiUsers, FiSettings,
  FiBarChart, FiLock, FiAlertTriangle, FiZap, FiLayers
} = FiIcons;

const CyberMaturityRoadmap = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('12months');
  const [roadmapData, setRoadmapData] = useState(null);

  const assessmentSteps = [
    {
      id: 'business-profile',
      title: 'Business Context',
      description: 'Understanding your organization and objectives',
      icon: FiUsers
    },
    {
      id: 'current-maturity',
      title: 'Current Maturity Level',
      description: 'Assessing your current cybersecurity posture',
      icon: FiShield
    },
    {
      id: 'priorities',
      title: 'Strategic Priorities',
      description: 'Defining your security transformation goals',
      icon: FiTarget
    },
    {
      id: 'constraints',
      title: 'Implementation Constraints',
      description: 'Understanding resources and limitations',
      icon: FiClock
    }
  ];

  const maturityLevels = [
    { id: 'initial', label: 'Initial', description: 'Ad-hoc, reactive security measures', score: 1 },
    { id: 'developing', label: 'Developing', description: 'Basic security controls in place', score: 2 },
    { id: 'defined', label: 'Defined', description: 'Documented processes and procedures', score: 3 },
    { id: 'managed', label: 'Managed', description: 'Metrics-driven security management', score: 4 },
    { id: 'optimizing', label: 'Optimizing', description: 'Continuous improvement and innovation', score: 5 }
  ];

  const securityDomains = [
    { id: 'governance', label: 'Governance & Risk Management', icon: FiSettings },
    { id: 'identity', label: 'Identity & Access Management', icon: FiUsers },
    { id: 'data', label: 'Data Protection', icon: FiLock },
    { id: 'network', label: 'Network Security', icon: FiShield },
    { id: 'endpoint', label: 'Endpoint Security', icon: FiTarget },
    { id: 'monitoring', label: 'Security Monitoring', icon: FiBarChart },
    { id: 'incident', label: 'Incident Response', icon: FiAlertTriangle },
    { id: 'compliance', label: 'Compliance Management', icon: FiCheckCircle }
  ];

  const timeframes = [
    { value: '6months', label: '6 Months', description: 'Aggressive timeline' },
    { value: '12months', label: '12 Months', description: 'Balanced approach' },
    { value: '18months', label: '18 Months', description: 'Comprehensive transformation' },
    { value: '24months', label: '24 Months', description: 'Strategic implementation' }
  ];

  const questionSets = {
    'business-profile': [
      {
        id: 'company-size',
        question: 'What is your organization size?',
        type: 'select',
        options: [
          { value: 'small', label: '1-50 employees', impact: 'simplified' },
          { value: 'medium', label: '51-250 employees', impact: 'balanced' },
          { value: 'large', label: '251-1000 employees', impact: 'comprehensive' },
          { value: 'enterprise', label: '1000+ employees', impact: 'enterprise' }
        ]
      },
      {
        id: 'industry',
        question: 'Which industry best describes your business?',
        type: 'select',
        options: [
          { value: 'healthcare', label: 'Healthcare', compliance: ['HIPAA'], risk: 'high' },
          { value: 'financial', label: 'Financial Services', compliance: ['PCI-DSS', 'SOX'], risk: 'high' },
          { value: 'technology', label: 'Technology', compliance: ['SOC2'], risk: 'medium' },
          { value: 'manufacturing', label: 'Manufacturing', compliance: ['ISO27001'], risk: 'medium' },
          { value: 'professional', label: 'Professional Services', compliance: ['SOC2'], risk: 'low' },
          { value: 'retail', label: 'Retail/E-commerce', compliance: ['PCI-DSS'], risk: 'medium' },
          { value: 'other', label: 'Other', compliance: [], risk: 'medium' }
        ]
      },
      {
        id: 'growth-stage',
        question: 'What is your current growth stage?',
        type: 'select',
        options: [
          { value: 'startup', label: 'Startup - Rapid growth phase', priority: 'agility' },
          { value: 'scaleup', label: 'Scale-up - Expanding operations', priority: 'scalability' },
          { value: 'established', label: 'Established - Stable operations', priority: 'optimization' },
          { value: 'enterprise', label: 'Enterprise - Market leader', priority: 'innovation' }
        ]
      }
    ],
    'current-maturity': [
      {
        id: 'overall-maturity',
        question: 'How would you assess your overall cybersecurity maturity?',
        type: 'maturity-grid',
        domains: securityDomains
      },
      {
        id: 'biggest-gaps',
        question: 'What are your biggest security gaps?',
        type: 'multiselect',
        options: [
          { value: 'policies', label: 'Lack of security policies and procedures' },
          { value: 'monitoring', label: 'Limited security monitoring and detection' },
          { value: 'training', label: 'Insufficient security awareness training' },
          { value: 'incident-response', label: 'No formal incident response plan' },
          { value: 'compliance', label: 'Compliance gaps and audit findings' },
          { value: 'access-control', label: 'Weak access controls and authentication' },
          { value: 'data-protection', label: 'Inadequate data protection measures' },
          { value: 'vendor-risk', label: 'Unmanaged third-party risks' }
        ]
      },
      {
        id: 'security-budget',
        question: 'What percentage of IT budget is allocated to security?',
        type: 'select',
        options: [
          { value: 'under5', label: 'Less than 5%', level: 'low' },
          { value: '5to10', label: '5-10%', level: 'adequate' },
          { value: '10to15', label: '10-15%', level: 'good' },
          { value: 'over15', label: 'Over 15%', level: 'excellent' }
        ]
      }
    ],
    'priorities': [
      {
        id: 'primary-drivers',
        question: 'What are your primary drivers for security improvement?',
        type: 'multiselect',
        options: [
          { value: 'compliance', label: 'Regulatory compliance requirements' },
          { value: 'risk-reduction', label: 'Reduce business risk and exposure' },
          { value: 'customer-trust', label: 'Build customer trust and confidence' },
          { value: 'operational-efficiency', label: 'Improve operational efficiency' },
          { value: 'competitive-advantage', label: 'Gain competitive advantage' },
          { value: 'incident-prevention', label: 'Prevent security incidents' },
          { value: 'board-mandate', label: 'Board or executive mandate' },
          { value: 'insurance', label: 'Insurance requirements' }
        ]
      },
      {
        id: 'target-maturity',
        question: 'What is your target maturity level?',
        type: 'select',
        options: maturityLevels.slice(1).map(level => ({
          value: level.id,
          label: level.label,
          description: level.description
        }))
      },
      {
        id: 'quick-wins',
        question: 'Which areas need immediate attention (quick wins)?',
        type: 'multiselect',
        options: [
          { value: 'mfa', label: 'Multi-factor authentication implementation' },
          { value: 'backup', label: 'Backup and recovery improvements' },
          { value: 'patching', label: 'System patching and updates' },
          { value: 'training', label: 'Employee security awareness training' },
          { value: 'policies', label: 'Basic security policies and procedures' },
          { value: 'monitoring', label: 'Basic security monitoring setup' },
          { value: 'antivirus', label: 'Endpoint protection enhancement' },
          { value: 'passwords', label: 'Password policy enforcement' }
        ]
      }
    ],
    'constraints': [
      {
        id: 'budget-range',
        question: 'What is your available budget range for security transformation?',
        type: 'select',
        options: [
          { value: 'under50k', label: 'Under $50K', tier: 'basic' },
          { value: '50to150k', label: '$50K - $150K', tier: 'standard' },
          { value: '150to500k', label: '$150K - $500K', tier: 'comprehensive' },
          { value: 'over500k', label: 'Over $500K', tier: 'enterprise' }
        ]
      },
      {
        id: 'timeline-pressure',
        question: 'What is your timeline pressure?',
        type: 'select',
        options: [
          { value: 'immediate', label: 'Immediate (compliance deadline)', urgency: 'high' },
          { value: 'short', label: 'Short-term (6-12 months)', urgency: 'medium' },
          { value: 'medium', label: 'Medium-term (12-18 months)', urgency: 'low' },
          { value: 'long', label: 'Long-term (18+ months)', urgency: 'strategic' }
        ]
      },
      {
        id: 'resource-availability',
        question: 'What internal resources are available?',
        type: 'multiselect',
        options: [
          { value: 'dedicated-team', label: 'Dedicated security team' },
          { value: 'part-time-security', label: 'Part-time security resources' },
          { value: 'it-team', label: 'General IT team support' },
          { value: 'external-help', label: 'Budget for external consultants' },
          { value: 'executive-support', label: 'Strong executive sponsorship' },
          { value: 'training-budget', label: 'Training and certification budget' },
          { value: 'change-management', label: 'Change management capabilities' }
        ]
      }
    ]
  };

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < assessmentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRoadmap();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRoadmap = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      // Generate roadmap based on responses
      const roadmap = createRoadmapFromResponses();
      setRoadmapData(roadmap);
      setIsGenerating(false);
      setShowRoadmap(true);
    }, 3000);
  };

  const createRoadmapFromResponses = () => {
    const companySize = responses['company-size'];
    const industry = responses['industry'];
    const currentMaturity = responses['overall-maturity'] || {};
    const targetMaturity = responses['target-maturity'];
    const quickWins = responses['quick-wins'] || [];
    const budget = responses['budget-range'];
    const timeline = responses['timeline-pressure'];

    // Calculate phases based on timeframe
    const phases = generatePhases(selectedTimeframe, quickWins, targetMaturity, budget);
    
    // Generate domain-specific roadmap
    const domainRoadmaps = securityDomains.map(domain => {
      const currentLevel = currentMaturity[domain.id] || 1;
      const targetLevel = getTargetLevel(targetMaturity);
      return {
        domain: domain.label,
        icon: domain.icon,
        currentLevel,
        targetLevel,
        initiatives: generateDomainInitiatives(domain.id, currentLevel, targetLevel, phases.length)
      };
    });

    return {
      phases,
      domainRoadmaps,
      summary: generateSummary(phases, budget, timeline),
      timeline: selectedTimeframe,
      quickWins: quickWins.slice(0, 5) // Top 5 quick wins
    };
  };

  const generatePhases = (timeframe, quickWins, targetMaturity, budget) => {
    const numMonths = parseInt(timeframe.replace('months', ''));
    const numPhases = Math.min(Math.ceil(numMonths / 3), 6); // Max 6 phases, 3 months each

    const phases = [];
    
    // Phase 1: Foundation & Quick Wins
    phases.push({
      id: 'foundation',
      title: 'Foundation & Quick Wins',
      duration: '0-3 months',
      type: 'immediate',
      color: '#ef4444',
      objectives: [
        'Establish security baseline',
        'Implement immediate risk reductions',
        'Build security awareness foundation'
      ],
      initiatives: [
        ...quickWins.slice(0, 3).map(qw => getQuickWinDetails(qw)),
        'Security policy documentation',
        'Initial risk assessment',
        'Executive security briefing'
      ],
      deliverables: [
        'Security policy framework',
        'Quick win implementations',
        'Risk assessment report',
        'Security awareness program'
      ],
      investment: getBudgetByPhase(budget, 'foundation')
    });

    // Phase 2: Core Controls
    if (numPhases > 1) {
      phases.push({
        id: 'core-controls',
        title: 'Core Security Controls',
        duration: '3-6 months',
        type: 'foundational',
        color: '#f97316',
        objectives: [
          'Implement core security controls',
          'Establish monitoring capabilities',
          'Strengthen access management'
        ],
        initiatives: [
          'Identity and access management',
          'Network security implementation',
          'Endpoint protection deployment',
          'Security monitoring setup',
          'Backup and recovery enhancement'
        ],
        deliverables: [
          'IAM system deployment',
          'Network security architecture',
          'SOC/monitoring capability',
          'Incident response plan'
        ],
        investment: getBudgetByPhase(budget, 'core')
      });
    }

    // Phase 3: Advanced Capabilities
    if (numPhases > 2) {
      phases.push({
        id: 'advanced-capabilities',
        title: 'Advanced Security Capabilities',
        duration: '6-12 months',
        type: 'enhancement',
        color: '#eab308',
        objectives: [
          'Deploy advanced security technologies',
          'Enhance detection and response',
          'Strengthen compliance posture'
        ],
        initiatives: [
          'Advanced threat detection',
          'Security orchestration and automation',
          'Data loss prevention',
          'Compliance framework implementation',
          'Third-party risk management'
        ],
        deliverables: [
          'SIEM/SOAR platform',
          'DLP solution',
          'Compliance dashboard',
          'Vendor risk program'
        ],
        investment: getBudgetByPhase(budget, 'advanced')
      });
    }

    // Phase 4: Optimization & Integration
    if (numPhases > 3) {
      phases.push({
        id: 'optimization',
        title: 'Optimization & Integration',
        duration: '12-18 months',
        type: 'optimization',
        color: '#22c55e',
        objectives: [
          'Optimize security operations',
          'Integrate security across business',
          'Enhance security metrics and reporting'
        ],
        initiatives: [
          'Security metrics program',
          'Business process integration',
          'Advanced analytics implementation',
          'Security culture development',
          'Continuous improvement program'
        ],
        deliverables: [
          'Security dashboard',
          'Integrated risk management',
          'Security culture metrics',
          'Continuous monitoring'
        ],
        investment: getBudgetByPhase(budget, 'optimization')
      });
    }

    return phases.slice(0, numPhases);
  };

  const getQuickWinDetails = (quickWin) => {
    const details = {
      'mfa': 'Multi-factor authentication deployment',
      'backup': 'Backup and recovery testing',
      'patching': 'Automated patch management',
      'training': 'Security awareness training launch',
      'policies': 'Essential security policies',
      'monitoring': 'Basic security monitoring',
      'antivirus': 'Enhanced endpoint protection',
      'passwords': 'Password policy enforcement'
    };
    return details[quickWin] || quickWin;
  };

  const getBudgetByPhase = (budgetRange, phase) => {
    const budgetMaps = {
      'under50k': { foundation: '$15K', core: '$20K', advanced: '$10K', optimization: '$5K' },
      '50to150k': { foundation: '$30K', core: '$50K', advanced: '$40K', optimization: '$30K' },
      '150to500k': { foundation: '$75K', core: '$150K', advanced: '$175K', optimization: '$100K' },
      'over500k': { foundation: '$150K', core: '$300K', advanced: '$400K', optimization: '$250K' }
    };
    
    return budgetMaps[budgetRange]?.[phase] || 'TBD';
  };

  const getTargetLevel = (targetMaturity) => {
    const levelMap = { initial: 1, developing: 2, defined: 3, managed: 4, optimizing: 5 };
    return levelMap[targetMaturity] || 3;
  };

  const generateDomainInitiatives = (domainId, currentLevel, targetLevel, numPhases) => {
    const domainInitiatives = {
      governance: ['Risk assessment framework', 'Security governance structure', 'Policy management', 'Security metrics'],
      identity: ['Identity management system', 'Multi-factor authentication', 'Privileged access management', 'Identity governance'],
      data: ['Data classification', 'Encryption implementation', 'Data loss prevention', 'Data governance'],
      network: ['Network segmentation', 'Firewall optimization', 'Network monitoring', 'Zero trust architecture'],
      endpoint: ['Endpoint protection', 'Device management', 'Endpoint detection and response', 'Mobile security'],
      monitoring: ['Log management', 'SIEM implementation', 'Security analytics', 'Threat intelligence'],
      incident: ['Incident response plan', 'Response team training', 'Forensics capability', 'Crisis communication'],
      compliance: ['Compliance framework', 'Audit preparation', 'Continuous monitoring', 'Compliance automation']
    };

    const initiatives = domainInitiatives[domainId] || [];
    const gap = targetLevel - currentLevel;
    return initiatives.slice(0, Math.max(1, gap));
  };

  const generateSummary = (phases, budget, timeline) => {
    return {
      totalDuration: phases[phases.length - 1]?.duration.split('-')[1] || '12 months',
      totalInvestment: budget,
      keyMilestones: phases.length,
      riskReduction: '70-85%',
      complianceImprovement: '80-95%'
    };
  };

  const currentStepData = assessmentSteps[currentStep];
  const questions = questionSets[currentStepData.id] || [];

  // Loading screen
  if (isGenerating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div 
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <motion.div
              className="w-full h-full border-4 border-blue-200 sharp-edges"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-2 left-2 w-28 h-28 border-4 border-blue-600 border-t-transparent sharp-edges"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <SafeIcon icon={FiMapPin} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Generating Your Roadmap</h2>
          <p className="text-lg text-slate-600 mb-8">Creating a personalized cybersecurity transformation plan...</p>
          <div className="space-y-2">
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✓ Analyzing your security maturity
            </motion.div>
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ✓ Mapping strategic initiatives
            </motion.div>
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✓ Creating implementation timeline
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (showRoadmap && roadmapData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 sharp-edges bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <SafeIcon icon={FiMapPin} className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Your Cybersecurity Transformation Roadmap</h1>
            <p className="text-lg text-slate-600">Strategic implementation plan tailored to your organization</p>
          </motion.div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              className="bg-white sharp-edges shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <SafeIcon icon={FiClock} className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-dark mb-1">{roadmapData.summary.totalDuration}</div>
              <div className="text-sm text-slate-600">Total Duration</div>
            </motion.div>
            <motion.div
              className="bg-white sharp-edges shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SafeIcon icon={FiTarget} className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-dark mb-1">{roadmapData.summary.keyMilestones}</div>
              <div className="text-sm text-slate-600">Key Phases</div>
            </motion.div>
            <motion.div
              className="bg-white sharp-edges shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-dark mb-1">{roadmapData.summary.riskReduction}</div>
              <div className="text-sm text-slate-600">Risk Reduction</div>
            </motion.div>
            <motion.div
              className="bg-white sharp-edges shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-dark mb-1">{roadmapData.summary.complianceImprovement}</div>
              <div className="text-sm text-slate-600">Compliance Score</div>
            </motion.div>
          </div>

          {/* Implementation Phases */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">Implementation Phases</h2>
            <div className="space-y-8">
              {roadmapData.phases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  className="bg-white sharp-edges shadow-lg overflow-hidden"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 sharp-edges flex items-center justify-center text-white font-bold mr-4"
                        style={{ backgroundColor: phase.color }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary-dark">{phase.title}</h3>
                        <p className="text-slate-600">{phase.duration}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="text-lg font-semibold text-primary-dark">{phase.investment}</div>
                        <div className="text-sm text-slate-500">Investment</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary-dark mb-2">Objectives</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {phase.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start">
                              <SafeIcon icon={FiTarget} className="w-4 h-4 mt-0.5 mr-2 text-blue-500" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary-dark mb-2">Key Initiatives</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {phase.initiatives.slice(0, 4).map((initiative, i) => (
                            <li key={i} className="flex items-start">
                              <SafeIcon icon={FiZap} className="w-4 h-4 mt-0.5 mr-2 text-green-500" />
                              {initiative}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary-dark mb-2">Deliverables</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start">
                              <SafeIcon icon={FiCheckCircle} className="w-4 h-4 mt-0.5 mr-2 text-purple-500" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Wins */}
          {roadmapData.quickWins.length > 0 && (
            <motion.div
              className="bg-white sharp-edges shadow-lg p-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary-dark mb-6 text-center">Immediate Quick Wins (30-60 days)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {roadmapData.quickWins.map((win, index) => (
                  <div key={index} className="flex items-center p-4 bg-green-50 sharp-edges">
                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-600 mr-3" />
                    <span className="text-green-800 font-medium">{getQuickWinDetails(win)}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 sharp-edges shadow-lg p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Execute Your Roadmap?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how to implement this strategic plan with expert guidance and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://handvantage.co/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 sharp-edges font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Implementation Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 sharp-edges font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                <span>Download Detailed Roadmap</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Assessment interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Cybersecurity Maturity Roadmap Generator
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Generate a personalized roadmap to transform your cybersecurity posture
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 sharp-edges h-3 mb-4">
            <div 
              className="bg-blue-600 h-3 sharp-edges transition-all duration-500"
              style={{ width: `${((currentStep + 1) / assessmentSteps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Step {currentStep + 1} of {assessmentSteps.length}
          </p>
        </motion.div>

        {/* Timeline Selection */}
        {currentStep === 0 && (
          <motion.div
            className="bg-white sharp-edges shadow-lg p-6 mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-primary-dark mb-4 text-center">
              Select Your Target Timeframe
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe.value}
                  onClick={() => setSelectedTimeframe(timeframe.value)}
                  className={`p-4 sharp-edges border-2 text-center transition-all ${
                    selectedTimeframe === timeframe.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <div className="font-bold text-lg">{timeframe.label}</div>
                  <div className="text-sm opacity-75">{timeframe.description}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Current Step */}
        <motion.div
          className="bg-white sharp-edges shadow-lg p-8"
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={currentStepData.icon} className="w-8 h-8 text-blue-600 mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-primary-dark">{currentStepData.title}</h2>
              <p className="text-slate-600">{currentStepData.description}</p>
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-8">
            {questions.map((question, qIndex) => (
              <div key={question.id}>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  {question.question}
                </h3>
                
                {question.type === 'select' && (
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={responses[question.id] === option.value}
                          onChange={(e) => handleResponse(question.id, e.target.value)}
                          className="w-4 h-4 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-slate-700">{option.label}</div>
                          {option.description && (
                            <div className="text-sm text-slate-500">{option.description}</div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {question.type === 'multiselect' && (
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
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
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}

                {question.type === 'maturity-grid' && (
                  <div className="space-y-4">
                    {question.domains.map((domain) => (
                      <div key={domain.id} className="border sharp-edges p-4">
                        <div className="flex items-center mb-3">
                          <SafeIcon icon={domain.icon} className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-medium text-slate-700">{domain.label}</span>
                        </div>
                        <div className="flex space-x-2">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <button
                              key={level}
                              onClick={() => handleResponse('overall-maturity', {
                                ...responses['overall-maturity'],
                                [domain.id]: level
                              })}
                              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                (responses['overall-maturity']?.[domain.id] === level)
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                        <div className="text-xs text-slate-500 mt-1">
                          1=Initial, 2=Developing, 3=Defined, 4=Managed, 5=Optimizing
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <motion.button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 sharp-edges font-semibold transition-colors ${
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
              className="px-6 py-3 sharp-edges font-semibold transition-colors bg-blue-600 text-white hover:bg-blue-700 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{currentStep === assessmentSteps.length - 1 ? 'Generate Roadmap' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberMaturityRoadmap;
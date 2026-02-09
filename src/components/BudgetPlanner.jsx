import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiDollarSign, FiTrendingUp, FiBarChart, FiArrowRight, FiPieChart,
  FiShield, FiUsers, FiSettings, FiTarget, FiCheckCircle, FiDownload,
  FiAlertTriangle, FiLock, FiActivity, FiCalendar
} = FiIcons;

const BudgetPlanner = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Company Profile
    companySize: 50,
    industry: '',
    annualRevenue: 5000000,
    currentSecurityBudget: 100000,
    budgetAsPercentage: 2,
    
    // Risk Profile
    riskTolerance: 'medium',
    complianceRequirements: [],
    industryRiskLevel: 'medium',
    dataClassification: 'mixed',
    
    // Current State
    currentMaturityLevel: 2,
    securityIncidents: 1,
    existingTools: [],
    securityTeamSize: 1,
    
    // Business Objectives
    growthPlans: '',
    timeframe: '12months',
    priorities: [],
    constraints: []
  });
  
  const [budgetResults, setBudgetResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const steps = [
    { id: 'profile', title: 'Company Profile', icon: FiUsers },
    { id: 'risk', title: 'Risk Assessment', icon: FiShield },
    { id: 'current', title: 'Current State', icon: FiActivity },
    { id: 'objectives', title: 'Objectives', icon: FiTarget }
  ];

  const industries = [
    { value: 'healthcare', label: 'Healthcare', riskMultiplier: 1.4, basePercentage: 5 },
    { value: 'financial', label: 'Financial Services', riskMultiplier: 1.5, basePercentage: 6 },
    { value: 'technology', label: 'Technology', riskMultiplier: 1.2, basePercentage: 4 },
    { value: 'manufacturing', label: 'Manufacturing', riskMultiplier: 1.1, basePercentage: 3 },
    { value: 'retail', label: 'Retail/E-commerce', riskMultiplier: 1.3, basePercentage: 4 },
    { value: 'professional', label: 'Professional Services', riskMultiplier: 1.0, basePercentage: 3 },
    { value: 'government', label: 'Government/Public Sector', riskMultiplier: 1.3, basePercentage: 5 },
    { value: 'education', label: 'Education', riskMultiplier: 0.9, basePercentage: 2 }
  ];

  const securityCategories = [
    {
      id: 'identity-access',
      name: 'Identity & Access Management',
      icon: FiLock,
      description: 'Authentication, authorization, and privileged access',
      basePercentage: 20,
      color: '#3b82f6'
    },
    {
      id: 'network-security',
      name: 'Network Security',
      icon: FiShield,
      description: 'Firewalls, VPN, network monitoring, and segmentation',
      basePercentage: 15,
      color: '#10b981'
    },
    {
      id: 'endpoint-security',
      name: 'Endpoint Security',
      icon: FiTarget,
      description: 'Antivirus, EDR, device management, and protection',
      basePercentage: 18,
      color: '#f59e0b'
    },
    {
      id: 'data-protection',
      name: 'Data Protection',
      icon: FiLock,
      description: 'Encryption, DLP, backup, and data governance',
      basePercentage: 12,
      color: '#ef4444'
    },
    {
      id: 'security-monitoring',
      name: 'Security Monitoring & SIEM',
      icon: FiBarChart,
      description: 'Log management, SIEM, threat detection, and analytics',
      basePercentage: 15,
      color: '#8b5cf6'
    },
    {
      id: 'compliance-governance',
      name: 'Compliance & Governance',
      icon: FiCheckCircle,
      description: 'Audit, risk management, and compliance tools',
      basePercentage: 8,
      color: '#06b6d4'
    },
    {
      id: 'incident-response',
      name: 'Incident Response',
      icon: FiAlertTriangle,
      description: 'Forensics, response tools, and crisis management',
      basePercentage: 7,
      color: '#f97316'
    },
    {
      id: 'training-awareness',
      name: 'Training & Awareness',
      icon: FiUsers,
      description: 'Security training, awareness programs, and simulations',
      basePercentage: 5,
      color: '#84cc16'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      
      // Auto-calculate budget percentage when revenue or budget changes
      if (field === 'annualRevenue' || field === 'currentSecurityBudget') {
        const revenue = field === 'annualRevenue' ? value : prev.annualRevenue;
        const budget = field === 'currentSecurityBudget' ? value : prev.currentSecurityBudget;
        updated.budgetAsPercentage = revenue > 0 ? Math.round((budget / revenue) * 100 * 10) / 10 : 0;
      }
      
      // Auto-calculate budget when percentage changes
      if (field === 'budgetAsPercentage') {
        updated.currentSecurityBudget = Math.round((prev.annualRevenue * value) / 100);
      }
      
      return updated;
    });
  };

  const calculateBudget = () => {
    const selectedIndustry = industries.find(ind => ind.value === formData.industry) || industries[2];
    
    // Base calculation
    const recommendedPercentage = selectedIndustry.basePercentage;
    const riskAdjustment = getRiskAdjustment();
    const maturityAdjustment = getMaturityAdjustment();
    const complianceAdjustment = getComplianceAdjustment();
    
    // Calculate total recommended percentage
    const totalRecommendedPercentage = Math.max(2, 
      recommendedPercentage + riskAdjustment + maturityAdjustment + complianceAdjustment
    );
    
    const recommendedBudget = Math.round((formData.annualRevenue * totalRecommendedPercentage) / 100);
    const currentGap = recommendedBudget - formData.currentSecurityBudget;
    
    // Category breakdown
    const categoryBreakdown = securityCategories.map(category => {
      let adjustedPercentage = category.basePercentage;
      
      // Adjust based on priorities and current state
      if (formData.priorities.includes(category.id)) {
        adjustedPercentage += 5;
      }
      
      const amount = Math.round((recommendedBudget * adjustedPercentage) / 100);
      
      return {
        ...category,
        percentage: adjustedPercentage,
        amount,
        priority: formData.priorities.includes(category.id) ? 'high' : 'medium'
      };
    });
    
    // Implementation timeline
    const timeline = getImplementationTimeline(currentGap, formData.timeframe);
    
    return {
      current: {
        budget: formData.currentSecurityBudget,
        percentage: formData.budgetAsPercentage
      },
      recommended: {
        budget: recommendedBudget,
        percentage: totalRecommendedPercentage
      },
      gap: {
        amount: currentGap,
        percentage: currentGap > 0 ? Math.round((currentGap / formData.currentSecurityBudget) * 100) : 0
      },
      breakdown: categoryBreakdown,
      timeline,
      benchmarks: {
        industryAverage: selectedIndustry.basePercentage,
        yourIndustry: selectedIndustry.label,
        riskAdjustment,
        maturityAdjustment,
        complianceAdjustment
      }
    };
  };

  const getRiskAdjustment = () => {
    let adjustment = 0;
    
    // Risk tolerance
    if (formData.riskTolerance === 'low') adjustment += 1;
    if (formData.riskTolerance === 'high') adjustment -= 0.5;
    
    // Security incidents
    adjustment += formData.securityIncidents * 0.5;
    
    // Data classification
    if (formData.dataClassification === 'sensitive') adjustment += 1;
    if (formData.dataClassification === 'public') adjustment -= 0.5;
    
    return Math.round(adjustment * 10) / 10;
  };

  const getMaturityAdjustment = () => {
    // Lower maturity needs more investment to catch up
    const maturityGap = 4 - formData.currentMaturityLevel; // Target level 4 (Managed)
    return Math.max(0, maturityGap * 0.5);
  };

  const getComplianceAdjustment = () => {
    const complianceCount = formData.complianceRequirements.length;
    return complianceCount * 0.5;
  };

  const getImplementationTimeline = (gap, timeframe) => {
    const months = parseInt(timeframe.replace('months', ''));
    const monthlyIncrease = gap > 0 ? Math.round(gap / months) : 0;
    
    const phases = [];
    if (months >= 6) {
      phases.push({
        phase: 'Phase 1 (Immediate)',
        duration: '1-3 months',
        investment: monthlyIncrease * 3,
        focus: 'Quick wins and critical gaps'
      });
    }
    if (months >= 12) {
      phases.push({
        phase: 'Phase 2 (Foundation)',
        duration: '3-9 months',
        investment: monthlyIncrease * 6,
        focus: 'Core security infrastructure'
      });
    }
    if (months >= 18) {
      phases.push({
        phase: 'Phase 3 (Enhancement)',
        duration: '9-18 months',
        investment: monthlyIncrease * 9,
        focus: 'Advanced capabilities and optimization'
      });
    }
    
    return { monthlyIncrease, phases };
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const results = calculateBudget();
      setBudgetResults(results);
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 sharp-edges bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
              <SafeIcon icon={FiDollarSign} className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Your Security Budget Plan</h1>
            <p className="text-lg text-slate-600">Strategic budget allocation based on industry benchmarks and your risk profile</p>
          </motion.div>

          {/* Budget Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white sharp-edges shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-medium text-slate-600 mb-2">Current Budget</h3>
              <div className="text-4xl font-bold text-slate-700 mb-2">
                ${budgetResults.current.budget.toLocaleString()}
              </div>
              <div className="text-blue-600">{budgetResults.current.percentage}% of revenue</div>
            </motion.div>
            
            <motion.div
              className="bg-white sharp-edges shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-medium text-slate-600 mb-2">Recommended Budget</h3>
              <div className="text-4xl font-bold text-green-600 mb-2">
                ${budgetResults.recommended.budget.toLocaleString()}
              </div>
              <div className="text-green-600">{budgetResults.recommended.percentage}% of revenue</div>
            </motion.div>
            
            <motion.div
              className="bg-white sharp-edges shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-medium text-slate-600 mb-2">Investment Gap</h3>
              <div className={`text-4xl font-bold mb-2 ${budgetResults.gap.amount > 0 ? 'text-orange-600' : 'text-green-600'}`}>
                ${Math.abs(budgetResults.gap.amount).toLocaleString()}
              </div>
              <div className="text-orange-600">
                {budgetResults.gap.amount > 0 ? 'Additional needed' : 'Well funded'}
              </div>
            </motion.div>
          </div>

          {/* Budget Breakdown */}
          <motion.div
            className="bg-white sharp-edges shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">Recommended Budget Allocation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {budgetResults.breakdown.map((category, index) => (
                <motion.div
                  key={category.id}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div 
                    className="w-16 h-16 sharp-edges flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <SafeIcon icon={category.icon} className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <h3 className="font-semibold text-primary-dark mb-2">{category.name}</h3>
                  <div className="text-2xl font-bold mb-1" style={{ color: category.color }}>
                    ${category.amount.toLocaleString()}
                  </div>
                  <div className="text-sm text-slate-500">{category.percentage}% of budget</div>
                  {category.priority === 'high' && (
                    <div className="mt-2">
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 sharp-edges">
                        High Priority
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Implementation Timeline */}
          {budgetResults.timeline.phases.length > 0 && (
            <motion.div
              className="bg-white sharp-edges shadow-lg p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-8 text-center">Implementation Timeline</h2>
              <div className="space-y-6">
                {budgetResults.timeline.phases.map((phase, index) => (
                  <div key={index} className="flex items-center p-6 bg-blue-50 sharp-edges">
                    <div className="w-12 h-12 bg-blue-600 text-white sharp-edges flex items-center justify-center font-bold mr-6">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-dark">{phase.phase}</h3>
                      <p className="text-slate-600">{phase.focus}</p>
                      <div className="text-sm text-slate-500">{phase.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">
                        ${phase.investment.toLocaleString()}
                      </div>
                      <div className="text-sm text-slate-500">Investment</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Industry Benchmarks */}
          <motion.div
            className="bg-white sharp-edges shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">Benchmarks & Adjustments</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {budgetResults.benchmarks.industryAverage}%
                </div>
                <div className="text-sm text-slate-600">Industry Average</div>
                <div className="text-xs text-slate-500">{budgetResults.benchmarks.yourIndustry}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  +{budgetResults.benchmarks.riskAdjustment}%
                </div>
                <div className="text-sm text-slate-600">Risk Adjustment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  +{budgetResults.benchmarks.maturityAdjustment}%
                </div>
                <div className="text-sm text-slate-600">Maturity Gap</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  +{budgetResults.benchmarks.complianceAdjustment}%
                </div>
                <div className="text-sm text-slate-600">Compliance Requirements</div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 sharp-edges shadow-lg p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Security Investment?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance on implementing your security budget plan efficiently and effectively.
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
                <span>Schedule Budget Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 sharp-edges font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                <span>Download Budget Plan</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Security Budget Planning Tool
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Strategic budget allocation calculator based on your risk profile and business objectives
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 sharp-edges h-3 mb-4">
            <div 
              className="bg-blue-600 h-3 sharp-edges transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Step {currentStep + 1} of {steps.length}
          </p>
        </motion.div>

        {/* Current Step */}
        <motion.div
          className="bg-white sharp-edges shadow-lg p-8"
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={steps[currentStep].icon} className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-primary-dark">{steps[currentStep].title}</h2>
          </div>

          {/* Step 0: Company Profile */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size: {formData.companySize} employees
                </label>
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={formData.companySize}
                  onChange={(e) => handleInputChange('companySize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 sharp-edges appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1</span>
                  <span>100</span>
                  <span>500</span>
                  <span>5000+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry.value} value={industry.value}>
                      {industry.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue: ${formData.annualRevenue.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={formData.annualRevenue}
                  onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 sharp-edges appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$100K</span>
                  <span>$1M</span>
                  <span>$10M</span>
                  <span>$100M+</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Security Budget ($)
                  </label>
                  <input
                    type="number"
                    value={formData.currentSecurityBudget}
                    onChange={(e) => handleInputChange('currentSecurityBudget', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="100000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    As % of Revenue
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.budgetAsPercentage}
                    onChange={(e) => handleInputChange('budgetAsPercentage', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 sharp-edges focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="2.0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Risk Assessment */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Risk Tolerance</label>
                <div className="space-y-3">
                  {[
                    { value: 'low', label: 'Low - Security is critical, minimal risk acceptable' },
                    { value: 'medium', label: 'Medium - Balance between security and business needs' },
                    { value: 'high', label: 'High - Business agility more important than security' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="riskTolerance"
                        value={option.value}
                        checked={formData.riskTolerance === option.value}
                        onChange={(e) => handleInputChange('riskTolerance', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Compliance Requirements (select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'HIPAA', 'PCI-DSS', 'SOC 2', 'ISO 27001', 'GDPR', 'SOX', 'NIST', 'FedRAMP'
                  ].map((compliance) => (
                    <label
                      key={compliance}
                      className="flex items-center space-x-3 p-3 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={compliance}
                        checked={formData.complianceRequirements.includes(compliance)}
                        onChange={(e) => {
                          const current = formData.complianceRequirements;
                          if (e.target.checked) {
                            handleInputChange('complianceRequirements', [...current, compliance]);
                          } else {
                            handleInputChange('complianceRequirements', current.filter(c => c !== compliance));
                          }
                        }}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{compliance}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Data Classification</label>
                <div className="space-y-3">
                  {[
                    { value: 'public', label: 'Mostly public data' },
                    { value: 'mixed', label: 'Mixed public and sensitive data' },
                    { value: 'sensitive', label: 'Highly sensitive or regulated data' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="dataClassification"
                        value={option.value}
                        checked={formData.dataClassification === option.value}
                        onChange={(e) => handleInputChange('dataClassification', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security incidents in the past year: {formData.securityIncidents}
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={formData.securityIncidents}
                  onChange={(e) => handleInputChange('securityIncidents', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 sharp-edges appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>3</span>
                  <span>5</span>
                  <span>10+</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Current State */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current Security Maturity Level
                </label>
                <div className="space-y-3">
                  {[
                    { value: 1, label: 'Initial - Ad-hoc security measures' },
                    { value: 2, label: 'Developing - Basic security controls' },
                    { value: 3, label: 'Defined - Documented processes' },
                    { value: 4, label: 'Managed - Metrics-driven security' },
                    { value: 5, label: 'Optimizing - Continuous improvement' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="currentMaturityLevel"
                        value={option.value}
                        checked={formData.currentMaturityLevel === option.value}
                        onChange={(e) => handleInputChange('currentMaturityLevel', parseInt(e.target.value))}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Security team size: {formData.securityTeamSize} {formData.securityTeamSize === 1 ? 'person' : 'people'}
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={formData.securityTeamSize}
                  onChange={(e) => handleInputChange('securityTeamSize', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 sharp-edges appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>5</span>
                  <span>10</span>
                  <span>50+</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Existing Security Tools (select all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Antivirus/EDR', 'Firewall', 'SIEM/Log Management', 'Email Security',
                    'Identity Management', 'Backup Solution', 'Vulnerability Scanner', 'DLP Solution'
                  ].map((tool) => (
                    <label
                      key={tool}
                      className="flex items-center space-x-3 p-3 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={tool}
                        checked={formData.existingTools.includes(tool)}
                        onChange={(e) => {
                          const current = formData.existingTools;
                          if (e.target.checked) {
                            handleInputChange('existingTools', [...current, tool]);
                          } else {
                            handleInputChange('existingTools', current.filter(t => t !== tool));
                          }
                        }}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{tool}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Objectives */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Implementation Timeframe
                </label>
                <div className="space-y-3">
                  {[
                    { value: '6months', label: '6 Months - Aggressive timeline' },
                    { value: '12months', label: '12 Months - Balanced approach' },
                    { value: '18months', label: '18 Months - Comprehensive implementation' },
                    { value: '24months', label: '24 Months - Strategic transformation' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="timeframe"
                        value={option.value}
                        checked={formData.timeframe === option.value}
                        onChange={(e) => handleInputChange('timeframe', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Priority Areas (select top 3)
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {securityCategories.map((category) => (
                    <label
                      key={category.id}
                      className="flex items-center space-x-3 p-3 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={category.id}
                        checked={formData.priorities.includes(category.id)}
                        onChange={(e) => {
                          const current = formData.priorities;
                          if (e.target.checked && current.length < 3) {
                            handleInputChange('priorities', [...current, category.id]);
                          } else if (!e.target.checked) {
                            handleInputChange('priorities', current.filter(p => p !== category.id));
                          }
                        }}
                        className="w-4 h-4 text-blue-600"
                        disabled={!formData.priorities.includes(category.id) && formData.priorities.length >= 3}
                      />
                      <div>
                        <div className="font-medium text-slate-700">{category.name}</div>
                        <div className="text-sm text-slate-500">{category.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
                {formData.priorities.length >= 3 && (
                  <p className="text-sm text-orange-600 mt-2">Maximum 3 priorities selected</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Growth Plans</label>
                <div className="space-y-3">
                  {[
                    { value: 'stable', label: 'Stable growth - maintaining current operations' },
                    { value: 'moderate', label: 'Moderate growth - expanding market presence' },
                    { value: 'aggressive', label: 'Aggressive growth - rapid scaling planned' },
                    { value: 'acquisition', label: 'Growth through acquisition or merger' }
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center space-x-3 p-4 sharp-edges border hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="growthPlans"
                        value={option.value}
                        checked={formData.growthPlans === option.value}
                        onChange={(e) => handleInputChange('growthPlans', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="text-slate-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

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
              {currentStep + 1} / {steps.length}
            </span>

            <motion.button
              onClick={nextStep}
              disabled={currentStep === 0 && !formData.industry}
              className={`px-6 py-3 sharp-edges font-semibold transition-colors flex items-center ${
                (currentStep !== 0 || formData.industry)
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={(currentStep !== 0 || formData.industry) ? { scale: 1.05 } : {}}
              whileTap={(currentStep !== 0 || formData.industry) ? { scale: 0.95 } : {}}
            >
              <span>{currentStep === steps.length - 1 ? 'Generate Budget Plan' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
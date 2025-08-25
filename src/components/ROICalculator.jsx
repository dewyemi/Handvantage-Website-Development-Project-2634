import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiUser,
  FiBuilding,
  FiDollarSign,
  FiClock,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiDownload,
  FiCalendar,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiTarget,
  FiBarChart,
  FiPieChart,
  FiActivity,
  FiLoader
} = FiIcons;

const ROICalculator = () => {
  // State management
  const [currentStep, setCurrentStep] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [projectionMode, setProjectionMode] = useState('realistic'); // conservative, realistic, aggressive
  
  // User data state
  const [userData, setUserData] = useState({
    // Business Profile Inputs
    companySize: 50,
    industry: '',
    annualRevenue: 5000000,
    currentITBudget: 250000,
    geographicComplexity: 'single', // single, multi-location, international
    
    // Current Security Spending
    existingSecurityTools: 50000,
    internalSecurityStaff: 2,
    avgStaffSalary: 175000,
    securityTrainingCosts: 20000,
    complianceAuditCosts: 30000,
    incidentResponseCosts: 40000,
    securityRelatedDelays: 10, // hours per month
    
    // Risk Profile Assessment
    industryRiskLevel: 'medium', // low, medium, high, critical
    regulatoryRequirements: [], // hipaa, sox, gdpr, pci, iso27001
    historicalIncidents: 1,
    averageIncidentCost: 75000,
    businessContinuityReqs: 'standard', // basic, standard, high
    dataSensitivity: 'medium', // low, medium, high, critical
    
    // Contact Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  });

  // Results state
  const [results, setResults] = useState({
    // Cost Comparison Analysis
    internalSecurityCosts: 0,
    traditionalMSSPCosts: 0,
    handVantageSecurityCosts: 0,
    
    // Direct Cost Savings
    toolSavings: 0,
    staffingCostAvoidance: 0,
    trainingCostAvoidance: 0,
    infrastructureOptimization: 0,
    
    // Operational Efficiency Gains
    itProductivityImprovement: 0,
    fasterIncidentResponse: 0,
    automatedCompliance: 0,
    strategicGuidanceValue: 0,
    
    // Risk Reduction Value
    breachCostAvoidance: 0,
    compliancePenaltyAvoidance: 0,
    businessContinuityProtection: 0,
    reputationProtection: 0,
    
    // Business Enablement Benefits
    fasterTimeToMarket: 0,
    growthFacilitation: 0,
    competitiveAdvantage: 0,
    strategicFocus: 0,
    
    // Summary Metrics
    totalAnnualSavings: 0,
    totalROI: 0,
    paybackPeriod: 0,
    threeYearValue: 0,
    fiveYearNPV: 0
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  // Industry options with security-focused values
  const industries = [
    { 
      value: 'technology', 
      label: 'Technology', 
      riskMultiplier: 1.2, 
      avgIncidentCost: 4850000,
      complianceComplexity: 'medium',
      regulatoryReqs: ['gdpr', 'iso27001']
    },
    { 
      value: 'healthcare', 
      label: 'Healthcare', 
      riskMultiplier: 1.5, 
      avgIncidentCost: 7800000,
      complianceComplexity: 'high',
      regulatoryReqs: ['hipaa', 'gdpr']
    },
    { 
      value: 'financial', 
      label: 'Financial Services', 
      riskMultiplier: 1.8, 
      avgIncidentCost: 5720000,
      complianceComplexity: 'critical',
      regulatoryReqs: ['sox', 'gdpr', 'pci', 'iso27001']
    },
    { 
      value: 'manufacturing', 
      label: 'Manufacturing', 
      riskMultiplier: 1.1, 
      avgIncidentCost: 4280000,
      complianceComplexity: 'medium',
      regulatoryReqs: ['iso27001']
    },
    { 
      value: 'professional', 
      label: 'Professional Services', 
      riskMultiplier: 1.0, 
      avgIncidentCost: 3730000,
      complianceComplexity: 'low',
      regulatoryReqs: ['gdpr']
    },
    { 
      value: 'retail', 
      label: 'Retail/E-commerce', 
      riskMultiplier: 1.3, 
      avgIncidentCost: 3280000,
      complianceComplexity: 'medium',
      regulatoryReqs: ['pci', 'gdpr']
    },
    { 
      value: 'education', 
      label: 'Education', 
      riskMultiplier: 0.9, 
      avgIncidentCost: 2730000,
      complianceComplexity: 'low',
      regulatoryReqs: ['gdpr']
    },
    { 
      value: 'government', 
      label: 'Government/Public Sector', 
      riskMultiplier: 1.4, 
      avgIncidentCost: 4420000,
      complianceComplexity: 'critical',
      regulatoryReqs: ['gdpr', 'iso27001']
    },
    { 
      value: 'other', 
      label: 'Other', 
      riskMultiplier: 1.0, 
      avgIncidentCost: 4000000,
      complianceComplexity: 'medium',
      regulatoryReqs: ['gdpr']
    }
  ];

  // Security assessment steps
  const steps = [
    {
      title: 'Business Profile',
      icon: FiBuilding,
      description: 'Company details and current IT environment'
    },
    {
      title: 'Current Security Spending',
      icon: FiDollarSign,
      description: 'Existing security investments and costs'
    },
    {
      title: 'Risk Profile Assessment',
      icon: FiShield,
      description: 'Security risks and compliance requirements'
    }
  ];

  // Projection modes
  const projectionModes = [
    { value: 'conservative', label: 'Conservative', multiplier: 0.7 },
    { value: 'realistic', label: 'Realistic', multiplier: 1.0 },
    { value: 'aggressive', label: 'Aggressive', multiplier: 1.3 }
  ];

  // Calculate MSS ROI based on prompt requirements
  const calculateROI = () => {
    const selectedIndustry = industries.find(ind => ind.value === userData.industry) || industries[4];
    const modeMultiplier = projectionModes.find(mode => mode.value === projectionMode)?.multiplier || 1.0;
    
    // === Cost Comparison Analysis ===
    
    // 1. Internal Security Team Costs
    const securityProfessionalCost = userData.internalSecurityStaff * userData.avgStaffSalary * 1.3; // Include benefits (30%)
    const trainingCostPerPerson = 12500; // $10K-$15K average
    const totalTrainingCosts = userData.internalSecurityStaff * trainingCostPerPerson;
    const securityToolsRetailPrice = userData.existingSecurityTools; // 100% of list price
    const managementOverhead = (securityProfessionalCost + totalTrainingCosts) * 0.25; // 20-30% average
    const recruitmentCosts = userData.internalSecurityStaff * 37500; // $25K-$50K per hire average
    
    const internalSecurityCosts = securityProfessionalCost + totalTrainingCosts + securityToolsRetailPrice + managementOverhead + recruitmentCosts;
    
    // 2. Traditional MSSP Costs
    const endpointCount = userData.companySize * 2; // Estimate 2 endpoints per employee
    const basicMonitoringCost = endpointCount * 75 * 12; // $50-$100 per endpoint per month, using $75 average
    const additionalServicesPremium = basicMonitoringCost * 0.375; // 25-50% premium, using 37.5% average
    const vendorManagementOverhead = (basicMonitoringCost + additionalServicesPremium) * 0.15; // Management complexity
    
    const traditionalMSSPCosts = basicMonitoringCost + additionalServicesPremium + vendorManagementOverhead;
    
    // 3. HandVantage Managed Services Costs
    let handVantageBaseCost;
    if (userData.companySize <= 50) {
      handVantageBaseCost = userData.companySize * 200 * 12; // $175-225 average = $200
    } else if (userData.companySize <= 200) {
      handVantageBaseCost = userData.companySize * 300 * 12; // $275-325 average = $300
    } else {
      handVantageBaseCost = userData.companySize * 412.5 * 12; // $375-450 average = $412.5
    }
    
    const handVantageSecurityCosts = handVantageBaseCost;
    
    // === Direct Cost Savings ===
    
    // Vendor consolidation savings (25-40% of security tool costs)
    const toolSavings = userData.existingSecurityTools * 0.325 * modeMultiplier; // Using 32.5% average
    
    // Staffing cost avoidance
    const staffingCostAvoidance = (internalSecurityCosts - handVantageSecurityCosts) > 0 ? 
      (internalSecurityCosts - handVantageSecurityCosts) : 0;
    
    // Training cost avoidance
    const trainingCostAvoidance = totalTrainingCosts * 0.9; // 90% of training costs avoided
    
    // Infrastructure cost optimization (right-sizing)
    const infrastructureOptimization = userData.currentITBudget * 0.15 * modeMultiplier; // 15% optimization
    
    // === Operational Efficiency Gains ===
    
    // IT team productivity improvement (40-60% reduction in security management time)
    const securityManagementHours = userData.currentITBudget / 100000 * 20; // Estimate 20 hours per week per $100K budget
    const productivityGainHours = securityManagementHours * 0.5 * 52; // 50% reduction, annualized
    const itProductivityImprovement = productivityGainHours * 75 * modeMultiplier; // $75/hour average IT rate
    
    // Faster incident response (reduced business impact)
    const incidentImpactReduction = userData.historicalIncidents * userData.averageIncidentCost * 0.6 * modeMultiplier; // 60% faster response
    
    // Automated compliance (reduced manual effort)
    const complianceEfficiencyGain = userData.complianceAuditCosts * 0.6 * modeMultiplier; // 60% automation efficiency
    
    // Strategic guidance value
    const strategicGuidanceValue = userData.annualRevenue * 0.005 * modeMultiplier; // 0.5% of revenue from better decisions
    
    // === Risk Reduction Value ===
    
    // Breach cost avoidance (industry-average breach costs by company size)
    const breachProbability = selectedIndustry.riskMultiplier * 0.1; // 10% base probability adjusted by industry
    const scaledIncidentCost = selectedIndustry.avgIncidentCost * (userData.companySize / 1000); // Scale by company size
    const breachCostAvoidance = breachProbability * scaledIncidentCost * 0.8 * modeMultiplier; // 80% reduction in probability
    
    // Compliance penalty avoidance
    const compliancePenaltyRisk = userData.regulatoryRequirements.length * 50000; // $50K average penalty per regulation
    const compliancePenaltyAvoidance = compliancePenaltyRisk * 0.7 * modeMultiplier; // 70% reduction in penalty risk
    
    // Business continuity protection
    const downtimeReduction = userData.securityRelatedDelays * 12 * 500 * modeMultiplier; // $500/hour of downtime avoided
    
    // Reputation protection (estimated value)
    const reputationProtection = userData.annualRevenue * 0.002 * modeMultiplier; // 0.2% of revenue
    
    // === Business Enablement Benefits ===
    
    // Faster time-to-market (reduced security-related project delays)
    const projectAcceleration = userData.annualRevenue * 0.003 * modeMultiplier; // 0.3% of revenue from faster projects
    
    // Growth facilitation (security that scales)
    const growthFacilitation = userData.annualRevenue * 0.002 * modeMultiplier; // 0.2% of revenue
    
    // Competitive advantage (enterprise-grade capabilities)
    const competitiveAdvantage = userData.annualRevenue * 0.001 * modeMultiplier; // 0.1% of revenue
    
    // Strategic focus (IT resources on business-enabling projects)
    const strategicFocus = itProductivityImprovement * 0.5; // 50% of IT productivity gains
    
    // === Summary Calculations ===
    
    const totalDirectSavings = toolSavings + staffingCostAvoidance + trainingCostAvoidance + infrastructureOptimization;
    const totalOperationalGains = itProductivityImprovement + incidentImpactReduction + complianceEfficiencyGain + strategicGuidanceValue;
    const totalRiskReduction = breachCostAvoidance + compliancePenaltyAvoidance + downtimeReduction + reputationProtection;
    const totalBusinessEnablement = projectAcceleration + growthFacilitation + competitiveAdvantage + strategicFocus;
    
    const totalAnnualSavings = totalDirectSavings + totalOperationalGains + totalRiskReduction + totalBusinessEnablement;
    const totalInvestment = handVantageSecurityCosts;
    const netBenefit = totalAnnualSavings - totalInvestment;
    
    // ROI calculations
    const roiPercent = (netBenefit / totalInvestment) * 100;
    const paybackMonths = totalInvestment / (netBenefit / 12);
    const threeYearValue = (netBenefit * 3);
    const fiveYearNPV = calculateNPV(netBenefit, 5, 0.08); // 8% discount rate
    
    return {
      // Cost Comparison
      internalSecurityCosts: Math.round(internalSecurityCosts),
      traditionalMSSPCosts: Math.round(traditionalMSSPCosts),
      handVantageSecurityCosts: Math.round(handVantageSecurityCosts),
      
      // Direct Cost Savings
      toolSavings: Math.round(toolSavings),
      staffingCostAvoidance: Math.round(staffingCostAvoidance),
      trainingCostAvoidance: Math.round(trainingCostAvoidance),
      infrastructureOptimization: Math.round(infrastructureOptimization),
      
      // Operational Efficiency Gains
      itProductivityImprovement: Math.round(itProductivityImprovement),
      fasterIncidentResponse: Math.round(incidentImpactReduction),
      automatedCompliance: Math.round(complianceEfficiencyGain),
      strategicGuidanceValue: Math.round(strategicGuidanceValue),
      
      // Risk Reduction Value
      breachCostAvoidance: Math.round(breachCostAvoidance),
      compliancePenaltyAvoidance: Math.round(compliancePenaltyAvoidance),
      businessContinuityProtection: Math.round(downtimeReduction),
      reputationProtection: Math.round(reputationProtection),
      
      // Business Enablement Benefits
      fasterTimeToMarket: Math.round(projectAcceleration),
      growthFacilitation: Math.round(growthFacilitation),
      competitiveAdvantage: Math.round(competitiveAdvantage),
      strategicFocus: Math.round(strategicFocus),
      
      // Summary Metrics
      totalAnnualSavings: Math.round(totalAnnualSavings),
      totalROI: Math.round(roiPercent),
      paybackPeriod: Math.round(paybackMonths * 10) / 10,
      threeYearValue: Math.round(threeYearValue),
      fiveYearNPV: Math.round(fiveYearNPV),
      
      // Compatibility with existing display logic
      totalSavings: Math.round(totalAnnualSavings),
      totalInvestment: Math.round(totalInvestment)
    };
  };
  
  // Helper function to calculate Net Present Value
  const calculateNPV = (annualCashFlow, years, discountRate) => {
    let npv = 0;
    for (let year = 1; year <= years; year++) {
      npv += annualCashFlow / Math.pow(1 + discountRate, year);
    }
    return npv;
  };

  // Handle input changes
  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle step navigation
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        const calculatedResults = calculateROI();
        setResults(calculatedResults);
        setIsCalculating(false);
        setShowResults(true);
      }, 2000);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSuccess: false, error: null });

    try {
      const formData = new FormData();
      formData.append('form-name', 'roi-calculator-results');
      formData.append('firstName', userData.firstName);
      formData.append('lastName', userData.lastName);
      formData.append('email', userData.email);
      formData.append('phone', userData.phone);
      formData.append('company', userData.company);
      formData.append('industry', userData.industry);
      formData.append('companySize', userData.companySize);
      formData.append('annualRevenue', userData.annualRevenue);
      formData.append('totalROI', results.totalROI);
      formData.append('totalSavings', results.totalSavings);
      formData.append('paybackPeriod', results.paybackPeriod);
      formData.append('calculatorData', JSON.stringify({ userData, results, projectionMode }));

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });

      setFormStatus({ isSubmitting: false, isSuccess: true, error: null });
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to submit. Please try again or contact us directly.'
      });
    }
  };

  // Animated counter component
  const AnimatedCounter = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const timer = setInterval(() => {
        start += end / (duration / 16);
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
  };

  // Loading screen
  if (isCalculating) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <motion.div
              className="w-full h-full border-4 border-blue-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute top-2 left-2 w-28 h-28 border-4 border-blue-600 border-t-transparent rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <SafeIcon icon={FiBarChart} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Calculating Your ROI</h2>
          <p className="text-lg text-slate-600 mb-8">Analyzing your data and computing transformation value...</p>
          <div className="space-y-2">
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✓ Processing business profile
            </motion.div>
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ✓ Calculating automation potential
            </motion.div>
            <motion.div 
              className="text-blue-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✓ Evaluating partnership benefits
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-white" />
              </motion.div>
              <h1 className="text-4xl font-bold text-primary-dark mb-4">Your Digital Transformation ROI</h1>
              <p className="text-lg text-slate-600">Based on your business profile and industry benchmarks</p>
            </div>

            {/* Main ROI Display */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-medium text-slate-600 mb-2">Total ROI</h3>
                  <div className="text-5xl font-bold text-green-600 mb-2">
                    <AnimatedCounter value={results.totalROI} suffix="%" />
                  </div>
                  <p className="text-sm text-slate-500">Return on Investment</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-600 mb-2">Payback Period</h3>
                  <div className="text-5xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value={results.paybackPeriod} />
                  </div>
                  <p className="text-sm text-slate-500">Months to break even</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-600 mb-2">3-Year Value</h3>
                  <div className="text-5xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter value={results.threeYearValue} prefix="$" />
                  </div>
                  <p className="text-sm text-slate-500">Total value creation</p>
                </div>
              </div>
            </motion.div>

            {/* Detailed Breakdown */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Savings Breakdown */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-bold text-primary-dark mb-6">Annual Savings Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Process Automation</span>
                    <span className="font-semibold text-green-600">
                      ${results.costSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Security Improvement</span>
                    <span className="font-semibold text-green-600">
                      ${results.securityROI.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Compliance Automation</span>
                    <span className="font-semibold text-green-600">
                      ${results.complianceSavings.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-primary-dark">Total Annual Savings</span>
                      <span className="text-green-600">
                        ${results.totalSavings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Partnership Value */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-primary-dark mb-6">Partnership Value</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Microsoft CSP Savings</span>
                    <span className="font-semibold text-blue-600">
                      ${results.partnershipBreakdown.microsoft.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">RTILA AI Automation</span>
                    <span className="font-semibold text-purple-600">
                      ${results.partnershipBreakdown.rtila.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">IRONSCALES Security</span>
                    <span className="font-semibold text-red-600">
                      ${results.partnershipBreakdown.ironscales.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Vanta Compliance</span>
                    <span className="font-semibold text-green-600">
                      ${results.partnershipBreakdown.vanta.toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Time Savings */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-bold text-primary-dark mb-6">Productivity Impact</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value={results.annualTimeSavings} />
                  </div>
                  <p className="text-slate-600">Hours Saved Annually</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <AnimatedCounter value={userData.errorReductionPercent} suffix="%" />
                  </div>
                  <p className="text-slate-600">Error Reduction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    <AnimatedCounter value={userData.automationPercent} suffix="%" />
                  </div>
                  <p className="text-slate-600">Process Automation</p>
                </div>
              </div>
            </motion.div>

            {/* Lead Capture Form */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Get Your Detailed ROI Report</h3>
                  <p className="text-blue-100 mb-6">
                    Download a comprehensive 15-page report with detailed analysis, implementation roadmap, 
                    and custom recommendations for your business.
                  </p>
                  <ul className="space-y-2 text-blue-100">
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                      Detailed ROI analysis and projections
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                      Partnership implementation roadmap
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                      Industry benchmark comparisons
                    </li>
                    <li className="flex items-center">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" />
                      Risk mitigation strategies
                    </li>
                  </ul>
                </div>
                
                <div>
                  {formStatus.isSuccess ? (
                    <div className="bg-white/10 rounded-lg p-6 text-center">
                      <SafeIcon icon={FiCheckCircle} className="w-16 h-16 mx-auto mb-4 text-green-300" />
                      <h4 className="text-xl font-bold mb-2">Report Sent!</h4>
                      <p className="text-blue-100">
                        Your detailed ROI report has been sent to your email. 
                        Josh will contact you within 24 hours to discuss implementation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="First Name *"
                          value={userData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <input
                          type="text"
                          placeholder="Last Name *"
                          value={userData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                      </div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={userData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                        <input
                          type="text"
                          placeholder="Company Name *"
                          value={userData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                        />
                      </div>
                      
                      {formStatus.error && (
                        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-200">
                          {formStatus.error}
                        </div>
                      )}
                      
                      <div className="flex gap-4">
                        <button
                          type="submit"
                          disabled={formStatus.isSubmitting}
                          className="flex-1 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                          {formStatus.isSubmitting ? (
                            <>
                              <SafeIcon icon={FiLoader} className="w-5 h-5 mr-2 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <SafeIcon icon={FiDownload} className="w-5 h-5 mr-2" />
                              Get Detailed Report
                            </>
                          )}
                        </button>
                        <a
                          href="tel:+12362350919"
                          className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 flex items-center"
                        >
                          <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                          Call Josh
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Credibility & Disclaimers */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm text-slate-500 mb-4">
                * Calculations based on industry benchmarks and actual client results. Individual results may vary.
              </p>
              <div className="flex justify-center items-center space-x-8 text-xs text-slate-400">
                <span>✓ Conservative projections</span>
                <span>✓ Industry-validated metrics</span>
                <span>✓ Partnership-verified benefits</span>
                <span>✓ Real client case studies</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Calculator steps
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
            <h1 className="text-4xl font-bold text-primary-dark mb-4">
              Managed Security Services ROI Calculator
            </h1>
            <p className="text-lg text-slate-600">
              Calculate the financial benefits of managed security services compared to internal teams and traditional approaches
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index < steps.length - 1 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= currentStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                  >
                    <SafeIcon icon={step.icon} className="w-5 h-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        index < currentStep ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold text-primary-dark">
                {steps[currentStep].title}
              </h2>
              <p className="text-slate-600">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Step Content */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 mb-8"
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 0: Business Profile */}
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size: {userData.companySize} employees
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={userData.companySize}
                    onChange={(e) => handleInputChange('companySize', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>100</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={userData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    Annual Revenue: ${userData.annualRevenue.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={userData.annualRevenue}
                    onChange={(e) => handleInputChange('annualRevenue', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$100K</span>
                    <span>$1M</span>
                    <span>$10M</span>
                    <span>$50M+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technology Budget: {userData.techBudgetPercent}% of revenue
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={userData.techBudgetPercent}
                    onChange={(e) => handleInputChange('techBudgetPercent', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1%</span>
                    <span>5%</span>
                    <span>10%</span>
                    <span>15%+</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Current State */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours spent on manual processes per week
                  </label>
                  <input
                    type="number"
                    value={userData.manualHoursWeekly}
                    onChange={(e) => handleInputChange('manualHoursWeekly', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average employee hourly cost ($)
                  </label>
                  <input
                    type="number"
                    value={userData.avgHourlyCost}
                    onChange={(e) => handleInputChange('avgHourlyCost', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="35"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Include salary, benefits, and overhead costs
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    System downtime hours per month
                  </label>
                  <input
                    type="number"
                    value={userData.downtimeHours}
                    onChange={(e) => handleInputChange('downtimeHours', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="8"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly IT support costs ($)
                  </label>
                  <input
                    type="number"
                    value={userData.itSupportCosts}
                    onChange={(e) => handleInputChange('itSupportCosts', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="5000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Security incidents per year
                  </label>
                  <input
                    type="number"
                    value={userData.securityIncidents}
                    onChange={(e) => handleInputChange('securityIncidents', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="2"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Include phishing attempts, malware, data breaches, etc.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Automation Potential */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Percentage of processes suitable for automation: {userData.automationPercent}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={userData.automationPercent}
                    onChange={(e) => handleInputChange('automationPercent', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected time savings per automated process: {userData.timeSavingsPercent}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="95"
                    value={userData.timeSavingsPercent}
                    onChange={(e) => handleInputChange('timeSavingsPercent', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span>30%</span>
                    <span>50%</span>
                    <span>70%</span>
                    <span>95%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Error reduction potential: {userData.errorReductionPercent}%
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="99"
                    value={userData.errorReductionPercent}
                    onChange={(e) => handleInputChange('errorReductionPercent', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10%</span>
                    <span>30%</span>
                    <span>50%</span>
                    <span>70%</span>
                    <span>99%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual compliance costs ($)
                  </label>
                  <input
                    type="number"
                    value={userData.complianceValue}
                    onChange={(e) => handleInputChange('complianceValue', parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="25000"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Include audit costs, compliance staff, and penalty risks
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Partnership Benefits */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-primary-dark mb-4">
                    Projection Mode
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {projectionModes.map((mode) => (
                      <button
                        key={mode.value}
                        onClick={() => setProjectionMode(mode.value)}
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          projectionMode === mode.value
                            ? 'border-blue-500 bg-blue-100 text-blue-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                        }`}
                      >
                        <div className="font-semibold">{mode.label}</div>
                        <div className="text-sm opacity-75">
                          {mode.multiplier}x multiplier
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Microsoft CSP Benefits</h4>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>• Direct support escalation</li>
                      <li>• Preferred pricing (5-15% savings)</li>
                      <li>• Flexible licensing options</li>
                      <li>• Expert implementation</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-800 mb-3">RTILA AI Automation</h4>
                    <ul className="text-sm text-purple-700 space-y-2">
                      <li>• Custom AI agent development</li>
                      <li>• Process automation design</li>
                      <li>• Integration capabilities</li>
                      <li>• Master Agent support</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="font-semibold text-red-800 mb-3">IRONSCALES Security</h4>
                    <ul className="text-sm text-red-700 space-y-2">
                      <li>• Advanced phishing protection</li>
                      <li>• AI-powered threat detection</li>
                      <li>• Automated incident response</li>
                      <li>• User training integration</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">Vanta Compliance</h4>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Automated compliance monitoring</li>
                      <li>• SOC 2, HIPAA, ISO 27001 support</li>
                      <li>• Continuous evidence collection</li>
                      <li>• Audit preparation automation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Calculation Methodology</h4>
                  <div className="text-sm text-gray-700 space-y-2">
                    <p>• Time savings: Manual hours × Automation % × Time savings % × 52 weeks</p>
                    <p>• Cost savings: Time savings × Adjusted hourly cost × Industry multiplier</p>
                    <p>• Security ROI: (Incident cost × Reduction %) - Security investment</p>
                    <p>• Partnership savings: Based on verified client results and industry benchmarks</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <span className="text-sm text-gray-500">
              Step {currentStep + 1} of {steps.length}
            </span>

            <button
              onClick={nextStep}
              disabled={currentStep === 0 && !userData.industry}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{currentStep === steps.length - 1 ? 'Calculate ROI' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculator;
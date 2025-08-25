import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiCheckSquare, FiBarChart, FiArrowRight, FiPlus, FiMinus, FiDownload,
  FiStar, FiDollarSign, FiShield, FiUsers, FiSettings, FiTrendingUp,
  FiTarget, FiClock, FiAward, FiHelpCircle, FiEdit3
} = FiIcons;

const VendorEvaluation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [evaluationData, setEvaluationData] = useState({
    projectType: '',
    requirements: [],
    vendors: [],
    criteria: [],
    weights: {},
    scores: {}
  });
  const [showResults, setShowResults] = useState(false);

  const steps = [
    { id: 'project', title: 'Project Definition', icon: FiTarget },
    { id: 'criteria', title: 'Evaluation Criteria', icon: FiCheckSquare },
    { id: 'vendors', title: 'Vendor Setup', icon: FiUsers },
    { id: 'scoring', title: 'Vendor Scoring', icon: FiStar }
  ];

  const projectTypes = [
    {
      id: 'endpoint-security',
      name: 'Endpoint Security Solution',
      description: 'Antivirus, EDR, device management and protection',
      defaultCriteria: [
        'detection-accuracy', 'performance-impact', 'management-console',
        'integration-capabilities', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'siem-solution',
      name: 'SIEM/Security Monitoring',
      description: 'Log management, threat detection, and security analytics',
      defaultCriteria: [
        'data-ingestion', 'analytics-capabilities', 'alerting-features',
        'scalability', 'integration-capabilities', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'identity-management',
      name: 'Identity & Access Management',
      description: 'Authentication, authorization, and user lifecycle management',
      defaultCriteria: [
        'authentication-methods', 'user-experience', 'integration-capabilities',
        'security-features', 'scalability', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'backup-solution',
      name: 'Backup & Recovery Solution',
      description: 'Data backup, disaster recovery, and business continuity',
      defaultCriteria: [
        'backup-speed', 'recovery-capabilities', 'data-deduplication',
        'security-features', 'scalability', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'network-security',
      name: 'Network Security Solution',
      description: 'Firewall, VPN, network monitoring and protection',
      defaultCriteria: [
        'security-effectiveness', 'performance-impact', 'management-features',
        'scalability', 'integration-capabilities', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'email-security',
      name: 'Email Security Solution',
      description: 'Anti-phishing, anti-malware, and email protection',
      defaultCriteria: [
        'threat-detection', 'false-positive-rate', 'user-experience',
        'admin-features', 'integration-capabilities', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'compliance-tool',
      name: 'Compliance Management Tool',
      description: 'Audit preparation, compliance monitoring, and reporting',
      defaultCriteria: [
        'framework-support', 'automated-monitoring', 'reporting-capabilities',
        'evidence-collection', 'integration-capabilities', 'cost-value', 'vendor-support'
      ]
    },
    {
      id: 'custom',
      name: 'Custom Evaluation',
      description: 'Define your own criteria for any security solution',
      defaultCriteria: []
    }
  ];

  const availableCriteria = [
    // Technical Capabilities
    { id: 'detection-accuracy', name: 'Detection Accuracy', category: 'Technical', weight: 20 },
    { id: 'performance-impact', name: 'Performance Impact', category: 'Technical', weight: 15 },
    { id: 'scalability', name: 'Scalability', category: 'Technical', weight: 15 },
    { id: 'integration-capabilities', name: 'Integration Capabilities', category: 'Technical', weight: 15 },
    { id: 'security-features', name: 'Security Features', category: 'Technical', weight: 20 },
    { id: 'analytics-capabilities', name: 'Analytics Capabilities', category: 'Technical', weight: 15 },
    { id: 'data-ingestion', name: 'Data Ingestion Capabilities', category: 'Technical', weight: 15 },
    { id: 'backup-speed', name: 'Backup Speed', category: 'Technical', weight: 15 },
    { id: 'recovery-capabilities', name: 'Recovery Capabilities', category: 'Technical', weight: 20 },
    { id: 'threat-detection', name: 'Threat Detection Rate', category: 'Technical', weight: 25 },
    { id: 'false-positive-rate', name: 'False Positive Rate', category: 'Technical', weight: 15 },
    
    // User Experience
    { id: 'user-experience', name: 'User Experience', category: 'Usability', weight: 15 },
    { id: 'management-console', name: 'Management Console', category: 'Usability', weight: 15 },
    { id: 'admin-features', name: 'Administrative Features', category: 'Usability', weight: 10 },
    { id: 'reporting-capabilities', name: 'Reporting Capabilities', category: 'Usability', weight: 10 },
    { id: 'alerting-features', name: 'Alerting Features', category: 'Usability', weight: 10 },
    
    // Business Factors
    { id: 'cost-value', name: 'Cost vs Value', category: 'Business', weight: 20 },
    { id: 'vendor-support', name: 'Vendor Support', category: 'Business', weight: 15 },
    { id: 'vendor-reputation', name: 'Vendor Reputation', category: 'Business', weight: 10 },
    { id: 'implementation-time', name: 'Implementation Time', category: 'Business', weight: 10 },
    { id: 'training-requirements', name: 'Training Requirements', category: 'Business', weight: 5 },
    
    // Compliance & Security
    { id: 'framework-support', name: 'Compliance Framework Support', category: 'Compliance', weight: 20 },
    { id: 'automated-monitoring', name: 'Automated Monitoring', category: 'Compliance', weight: 15 },
    { id: 'evidence-collection', name: 'Evidence Collection', category: 'Compliance', weight: 15 },
    { id: 'audit-readiness', name: 'Audit Readiness', category: 'Compliance', weight: 10 },
    { id: 'data-deduplication', name: 'Data Deduplication', category: 'Technical', weight: 10 },
    { id: 'authentication-methods', name: 'Authentication Methods', category: 'Security', weight: 20 },
    { id: 'security-effectiveness', name: 'Security Effectiveness', category: 'Security', weight: 25 }
  ];

  const handleProjectTypeSelect = (projectType) => {
    const project = projectTypes.find(p => p.id === projectType);
    const defaultCriteria = project?.defaultCriteria || [];
    
    // Set default weights for selected criteria
    const defaultWeights = {};
    defaultCriteria.forEach(criteriaId => {
      const criteria = availableCriteria.find(c => c.id === criteriaId);
      if (criteria) {
        defaultWeights[criteriaId] = criteria.weight;
      }
    });

    setEvaluationData(prev => ({
      ...prev,
      projectType,
      criteria: defaultCriteria,
      weights: defaultWeights,
      vendors: [],
      scores: {}
    }));
  };

  const addCriteria = (criteriaId) => {
    const criteria = availableCriteria.find(c => c.id === criteriaId);
    if (criteria && !evaluationData.criteria.includes(criteriaId)) {
      setEvaluationData(prev => ({
        ...prev,
        criteria: [...prev.criteria, criteriaId],
        weights: { ...prev.weights, [criteriaId]: criteria.weight }
      }));
    }
  };

  const removeCriteria = (criteriaId) => {
    setEvaluationData(prev => {
      const newWeights = { ...prev.weights };
      delete newWeights[criteriaId];
      
      const newScores = { ...prev.scores };
      prev.vendors.forEach(vendor => {
        if (newScores[vendor.id]) {
          delete newScores[vendor.id][criteriaId];
        }
      });

      return {
        ...prev,
        criteria: prev.criteria.filter(c => c !== criteriaId),
        weights: newWeights,
        scores: newScores
      };
    });
  };

  const updateWeight = (criteriaId, weight) => {
    setEvaluationData(prev => ({
      ...prev,
      weights: { ...prev.weights, [criteriaId]: weight }
    }));
  };

  const addVendor = () => {
    const vendorName = prompt('Enter vendor name:');
    if (vendorName && !evaluationData.vendors.find(v => v.name === vendorName)) {
      const newVendor = {
        id: Date.now().toString(),
        name: vendorName,
        notes: ''
      };
      
      setEvaluationData(prev => ({
        ...prev,
        vendors: [...prev.vendors, newVendor],
        scores: {
          ...prev.scores,
          [newVendor.id]: {}
        }
      }));
    }
  };

  const removeVendor = (vendorId) => {
    setEvaluationData(prev => {
      const newScores = { ...prev.scores };
      delete newScores[vendorId];
      
      return {
        ...prev,
        vendors: prev.vendors.filter(v => v.id !== vendorId),
        scores: newScores
      };
    });
  };

  const updateScore = (vendorId, criteriaId, score) => {
    setEvaluationData(prev => ({
      ...prev,
      scores: {
        ...prev.scores,
        [vendorId]: {
          ...prev.scores[vendorId],
          [criteriaId]: score
        }
      }
    }));
  };

  const calculateResults = () => {
    const results = evaluationData.vendors.map(vendor => {
      let totalScore = 0;
      let totalWeight = 0;
      const categoryScores = {};

      evaluationData.criteria.forEach(criteriaId => {
        const score = evaluationData.scores[vendor.id]?.[criteriaId] || 0;
        const weight = evaluationData.weights[criteriaId] || 0;
        
        totalScore += score * weight;
        totalWeight += weight;

        // Group by category
        const criteria = availableCriteria.find(c => c.id === criteriaId);
        if (criteria) {
          if (!categoryScores[criteria.category]) {
            categoryScores[criteria.category] = { score: 0, weight: 0 };
          }
          categoryScores[criteria.category].score += score * weight;
          categoryScores[criteria.category].weight += weight;
        }
      });

      // Calculate category averages
      Object.keys(categoryScores).forEach(category => {
        if (categoryScores[category].weight > 0) {
          categoryScores[category].average = 
            categoryScores[category].score / categoryScores[category].weight;
        }
      });

      return {
        vendor,
        totalScore: totalWeight > 0 ? totalScore / totalWeight : 0,
        categoryScores,
        completeness: evaluationData.criteria.length > 0 ? 
          evaluationData.criteria.filter(c => evaluationData.scores[vendor.id]?.[c]).length / evaluationData.criteria.length * 100 : 0
      };
    }).sort((a, b) => b.totalScore - a.totalScore);

    return results;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
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

  const results = showResults ? calculateResults() : [];

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
              <SafeIcon icon={FiAward} className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-primary-dark mb-4">Vendor Evaluation Results</h1>
            <p className="text-lg text-slate-600">Objective analysis based on your weighted criteria</p>
          </motion.div>

          {/* Results Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <SafeIcon icon={FiTrendingUp} className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">Top Performer</h3>
              <div className="text-2xl font-bold text-green-600 mb-2">
                {results[0]?.vendor.name || 'N/A'}
              </div>
              <div className="text-slate-500">
                {results[0] ? `${results[0].totalScore.toFixed(1)}/10` : 'No scores'}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SafeIcon icon={FiUsers} className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">Vendors Evaluated</h3>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {evaluationData.vendors.length}
              </div>
              <div className="text-slate-500">Solutions compared</div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <SafeIcon icon={FiCheckSquare} className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600 mb-2">Criteria Evaluated</h3>
              <div className="text-2xl font-bold text-purple-600 mb-2">
                {evaluationData.criteria.length}
              </div>
              <div className="text-slate-500">Evaluation factors</div>
            </motion.div>
          </div>

          {/* Detailed Results */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {results.map((result, index) => (
              <motion.div
                key={result.vendor.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                        index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-gray-500'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-dark">{result.vendor.name}</h3>
                        <p className="text-slate-600">Overall Score: {result.totalScore.toFixed(1)}/10</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-dark">
                        {result.totalScore.toFixed(1)}
                      </div>
                      <div className="text-sm text-slate-500">
                        {result.completeness.toFixed(0)}% Complete
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-slate-600 mb-2">
                      <span>Overall Score</span>
                      <span>{result.totalScore.toFixed(1)}/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-gray-500'
                        }`}
                        style={{ width: `${(result.totalScore / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Category Scores */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(result.categoryScores).map(([category, data]) => (
                      <div key={category} className="text-center p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-primary-dark mb-2">{category}</h4>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {data.average?.toFixed(1) || '0.0'}
                        </div>
                        <div className="text-xs text-slate-500">out of 10</div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Criteria Scores */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-primary-dark mb-4">Detailed Scores by Criteria</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {evaluationData.criteria.map(criteriaId => {
                        const criteria = availableCriteria.find(c => c.id === criteriaId);
                        const score = evaluationData.scores[result.vendor.id]?.[criteriaId] || 0;
                        const weight = evaluationData.weights[criteriaId] || 0;
                        
                        return (
                          <div key={criteriaId} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <div>
                              <span className="font-medium">{criteria?.name}</span>
                              <span className="text-sm text-slate-500 ml-2">(Weight: {weight}%)</span>
                            </div>
                            <div className="text-lg font-bold text-blue-600">
                              {score}/10
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Recommendations */}
          {results.length > 0 && (
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-6 text-center">Recommendations</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">Recommended Choice</h3>
                  <p className="text-green-700 mb-4">
                    <strong>{results[0].vendor.name}</strong> scored highest with {results[0].totalScore.toFixed(1)}/10
                  </p>
                  <p className="text-sm text-green-600">
                    Best overall alignment with your evaluation criteria and business requirements.
                  </p>
                </div>
                
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-3">Alternative Option</h3>
                  {results[1] ? (
                    <>
                      <p className="text-blue-700 mb-4">
                        <strong>{results[1].vendor.name}</strong> scored {results[1].totalScore.toFixed(1)}/10
                      </p>
                      <p className="text-sm text-blue-600">
                        Strong alternative with good alignment on key criteria.
                      </p>
                    </>
                  ) : (
                    <p className="text-blue-700">Only one vendor evaluated</p>
                  )}
                </div>
                
                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">Key Considerations</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Verify scoring with vendor demos</li>
                    <li>• Consider total cost of ownership</li>
                    <li>• Evaluate implementation timeline</li>
                    <li>• Check references and case studies</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-2xl font-bold mb-4">Need Help with Vendor Selection?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert guidance on evaluating vendors and implementing your chosen solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://handvantage.co/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Vendor Selection Consultation</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiDownload} className="w-4 h-4 mr-2" />
                <span>Download Evaluation Report</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-primary-dark mb-4">
            Security Vendor Evaluation Matrix
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Systematic vendor comparison tool for evaluating cybersecurity solutions without bias
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Step {currentStep + 1} of {steps.length}
          </p>
        </motion.div>

        {/* Current Step */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-8"
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <SafeIcon icon={steps[currentStep].icon} className="w-8 h-8 text-blue-600 mr-4" />
            <h2 className="text-2xl font-bold text-primary-dark">{steps[currentStep].title}</h2>
          </div>

          {/* Step 0: Project Definition */}
          {currentStep === 0 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  What type of security solution are you evaluating?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {projectTypes.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectTypeSelect(project.id)}
                      className={`p-6 rounded-lg border-2 text-left transition-all ${
                        evaluationData.projectType === project.id
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <h4 className="font-semibold text-lg mb-2">{project.name}</h4>
                      <p className="text-sm opacity-75">{project.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Evaluation Criteria */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  Configure Your Evaluation Criteria
                </h3>
                <p className="text-slate-600 mb-6">
                  Adjust the importance (weight) of each criterion and add/remove criteria as needed.
                </p>
              </div>

              {/* Selected Criteria */}
              <div className="space-y-4">
                <h4 className="font-medium text-primary-dark">Selected Criteria & Weights</h4>
                {evaluationData.criteria.map(criteriaId => {
                  const criteria = availableCriteria.find(c => c.id === criteriaId);
                  return (
                    <div key={criteriaId} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex-1">
                        <span className="font-medium">{criteria?.name}</span>
                        <span className="text-sm text-slate-500 ml-2">({criteria?.category})</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <label className="text-sm font-medium">Weight:</label>
                          <input
                            type="number"
                            min="5"
                            max="30"
                            value={evaluationData.weights[criteriaId] || 0}
                            onChange={(e) => updateWeight(criteriaId, parseInt(e.target.value))}
                            className="w-20 px-2 py-1 border rounded text-center"
                          />
                          <span className="text-sm text-slate-500">%</span>
                        </div>
                        <button
                          onClick={() => removeCriteria(criteriaId)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <SafeIcon icon={FiMinus} className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add Criteria */}
              <div>
                <h4 className="font-medium text-primary-dark mb-3">Add Additional Criteria</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(
                    availableCriteria
                      .filter(c => !evaluationData.criteria.includes(c.id))
                      .reduce((acc, criteria) => {
                        if (!acc[criteria.category]) acc[criteria.category] = [];
                        acc[criteria.category].push(criteria);
                        return acc;
                      }, {})
                  ).map(([category, criteriaList]) => (
                    <div key={category} className="space-y-2">
                      <h5 className="font-medium text-slate-700">{category}</h5>
                      {criteriaList.map(criteria => (
                        <button
                          key={criteria.id}
                          onClick={() => addCriteria(criteria.id)}
                          className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 flex items-center justify-between"
                        >
                          <span className="text-sm">{criteria.name}</span>
                          <SafeIcon icon={FiPlus} className="w-4 h-4 text-blue-600" />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Weight Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Weight:</span>
                  <span className={`font-bold ${
                    Object.values(evaluationData.weights).reduce((a, b) => a + b, 0) === 100 
                      ? 'text-green-600' : 'text-orange-600'
                  }`}>
                    {Object.values(evaluationData.weights).reduce((a, b) => a + b, 0)}%
                  </span>
                </div>
                {Object.values(evaluationData.weights).reduce((a, b) => a + b, 0) !== 100 && (
                  <p className="text-sm text-orange-600 mt-2">
                    Weights should total 100% for accurate scoring
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Vendor Setup */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  Add Vendors to Evaluate
                </h3>
                <p className="text-slate-600 mb-6">
                  Add the vendors/solutions you want to compare. Minimum 2 vendors recommended.
                </p>
              </div>

              {/* Vendor List */}
              <div className="space-y-4">
                {evaluationData.vendors.map((vendor, index) => (
                  <div key={vendor.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <span className="font-medium">{vendor.name}</span>
                    </div>
                    <button
                      onClick={() => removeVendor(vendor.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <SafeIcon icon={FiMinus} className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Vendor Button */}
              <button
                onClick={addVendor}
                className="w-full p-4 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiPlus} className="w-5 h-5 mr-2" />
                Add Vendor
              </button>

              {evaluationData.vendors.length < 2 && (
                <p className="text-sm text-orange-600 text-center">
                  Add at least 2 vendors for meaningful comparison
                </p>
              )}
            </div>
          )}

          {/* Step 3: Vendor Scoring */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-dark mb-4">
                  Score Each Vendor
                </h3>
                <p className="text-slate-600 mb-6">
                  Rate each vendor on a scale of 1-10 for each criterion (10 being the best).
                </p>
              </div>

              {/* Scoring Matrix */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 border-b-2 border-gray-200">Criteria</th>
                      {evaluationData.vendors.map(vendor => (
                        <th key={vendor.id} className="text-center p-4 border-b-2 border-gray-200 min-w-32">
                          {vendor.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {evaluationData.criteria.map(criteriaId => {
                      const criteria = availableCriteria.find(c => c.id === criteriaId);
                      return (
                        <tr key={criteriaId} className="border-b border-gray-100">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{criteria?.name}</div>
                              <div className="text-sm text-slate-500">
                                Weight: {evaluationData.weights[criteriaId]}%
                              </div>
                            </div>
                          </td>
                          {evaluationData.vendors.map(vendor => (
                            <td key={vendor.id} className="p-4 text-center">
                              <input
                                type="number"
                                min="1"
                                max="10"
                                value={evaluationData.scores[vendor.id]?.[criteriaId] || ''}
                                onChange={(e) => updateScore(vendor.id, criteriaId, parseInt(e.target.value) || 0)}
                                className="w-16 px-2 py-1 border rounded text-center"
                                placeholder="1-10"
                              />
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Scoring Guidelines */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Scoring Guidelines</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
                  <div>
                    <strong>1-3:</strong> Poor/Does not meet requirements
                  </div>
                  <div>
                    <strong>4-6:</strong> Meets basic requirements
                  </div>
                  <div>
                    <strong>7-8:</strong> Exceeds requirements
                  </div>
                  <div>
                    <strong>9-10:</strong> Exceptional/Best in class
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
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
              {currentStep + 1} / {steps.length}
            </span>

            <motion.button
              onClick={nextStep}
              disabled={
                (currentStep === 0 && !evaluationData.projectType) ||
                (currentStep === 1 && evaluationData.criteria.length === 0) ||
                (currentStep === 2 && evaluationData.vendors.length < 2)
              }
              className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center ${
                (currentStep === 0 && evaluationData.projectType) ||
                (currentStep === 1 && evaluationData.criteria.length > 0) ||
                (currentStep === 2 && evaluationData.vendors.length >= 2) ||
                currentStep === 3
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={
                (currentStep === 0 && evaluationData.projectType) ||
                (currentStep === 1 && evaluationData.criteria.length > 0) ||
                (currentStep === 2 && evaluationData.vendors.length >= 2) ||
                currentStep === 3 ? { scale: 1.05 } : {}
              }
              whileTap={
                (currentStep === 0 && evaluationData.projectType) ||
                (currentStep === 1 && evaluationData.criteria.length > 0) ||
                (currentStep === 2 && evaluationData.vendors.length >= 2) ||
                currentStep === 3 ? { scale: 0.95 } : {}
              }
            >
              <span>{currentStep === steps.length - 1 ? 'Generate Results' : 'Next'}</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VendorEvaluation;
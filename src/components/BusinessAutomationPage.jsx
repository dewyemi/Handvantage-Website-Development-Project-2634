import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiBot,
  FiZap,
  FiTrendingUp,
  FiDollarSign,
  FiCheckCircle,
  FiCpu,
  FiBarChart,
  FiUsers,
  FiFileText,
  FiMessageCircle,
  FiTarget,
  FiUserPlus,
  FiHeart,
  FiPhone,
  FiMail,
  FiClock,
  FiShield,
  FiSettings,
  FiRepeat,
  FiArrowRight,
  FiStar,
  FiAward
} = FiIcons;

const BusinessAutomationPage = () => {
  // RTILA AI capabilities showcase
  const rtilaCapabilities = [
    {
      icon: FiBot,
      title: "AI Agent Development",
      description: "Custom AI agents for your specific workflows",
      color: "#7c3aed"
    },
    {
      icon: FiZap,
      title: "Process Automation",
      description: "End-to-end workflow automation and optimization",
      color: "#7c3aed"
    },
    {
      icon: FiBarChart,
      title: "Revenue Optimization",
      description: "AI-driven insights for business growth",
      color: "#7c3aed"
    },
    {
      icon: FiShield,
      title: "Enterprise Integration",
      description: "Seamless integration with existing systems",
      color: "#7c3aed"
    }
  ];

  // Automation comparison - Basic vs Intelligent
  const basicAutomation = [
    "Rule-based logic only",
    "Single-task automation",
    "Requires constant maintenance",
    "Limited decision-making capability",
    "Breaks when processes change",
    "Manual setup for each task"
  ];

  const basicExamples = [
    "Email auto-responders",
    "Simple data entry",
    "Basic file organization",
    "Scheduled reports"
  ];

  const intelligentAutomation = [
    "AI-powered decision making",
    "End-to-end process automation",
    "Self-learning and adaptive",
    "Complex workflow orchestration",
    "Integrates with multiple systems",
    "Continuous optimization"
  ];

  const intelligentExamples = [
    "Intelligent customer service agents",
    "Automated sales pipeline management",
    "Smart document processing",
    "Predictive business analytics",
    "Revenue optimization workflows"
  ];

  // RTILA AI automation capabilities
  const automationCapabilities = [
    {
      icon: FiMessageCircle,
      title: "Customer Service Automation",
      subtitle: "Intelligent Customer Support",
      description: "AI agents that handle customer inquiries, resolve issues, and escalate complex cases to human agents when needed.",
      features: [
        "24/7 customer support availability",
        "Natural language understanding",
        "Multi-channel support (email, chat, phone)",
        "Automatic ticket routing and prioritization",
        "Customer satisfaction tracking"
      ],
      color: "#7c3aed",
      bg: "#f3e8ff",
      border: "#c4b5fd"
    },
    {
      icon: FiTrendingUp,
      title: "Sales Process Automation",
      subtitle: "Intelligent Sales Pipeline Management",
      description: "Automate lead qualification, follow-up sequences, and sales pipeline management with AI-driven insights.",
      features: [
        "Lead scoring and qualification",
        "Automated follow-up sequences",
        "Sales pipeline optimization",
        "Proposal and contract generation",
        "Revenue forecasting and analytics"
      ],
      color: "#2563eb",
      bg: "#dbeafe",
      border: "#93c5fd"
    },
    {
      icon: FiFileText,
      title: "Document Processing",
      subtitle: "Smart Document Workflows",
      description: "AI-powered document processing that extracts data, routes approvals, and manages document lifecycles.",
      features: [
        "Intelligent data extraction",
        "Automated document routing",
        "Approval workflow management",
        "Contract and invoice processing",
        "Compliance and audit trails"
      ],
      color: "#16a34a",
      bg: "#dcfce7",
      border: "#86efac"
    },
    {
      icon: FiDollarSign,
      title: "Financial Automation",
      subtitle: "Intelligent Financial Operations",
      description: "Automate accounting, invoicing, and financial reporting with AI-driven accuracy and insights.",
      features: [
        "Automated invoicing and billing",
        "Expense management and approval",
        "Financial reporting and analytics",
        "Cash flow forecasting",
        "Compliance and tax preparation"
      ],
      color: "#f59e0b",
      bg: "#fef3c7",
      border: "#fbbf24"
    },
    {
      icon: FiUsers,
      title: "HR & Operations",
      subtitle: "Streamlined Human Resources",
      description: "Automate recruitment, onboarding, and employee management processes with intelligent workflows.",
      features: [
        "Automated recruitment and screening",
        "Employee onboarding workflows",
        "Performance management tracking",
        "Time and attendance automation",
        "Benefits administration"
      ],
      color: "#dc2626",
      bg: "#fee2e2",
      border: "#fca5a5"
    },
    {
      icon: FiBarChart,
      title: "Business Intelligence",
      subtitle: "AI-Driven Business Insights",
      description: "Transform data into actionable insights with automated reporting and predictive analytics.",
      features: [
        "Automated report generation",
        "Predictive business analytics",
        "Performance dashboard creation",
        "Data integration and cleansing",
        "Strategic decision support"
      ],
      color: "#059669",
      bg: "#d1fae5",
      border: "#6ee7b7"
    }
  ];

  // ROI metrics
  const roiMetrics = [
    {
      number: "300%",
      label: "Average ROI",
      detail: "Within 12 months",
      color: "#16a34a"
    },
    {
      number: "40%",
      label: "Time Savings",
      detail: "On repetitive tasks",
      color: "#7c3aed"
    },
    {
      number: "60%",
      label: "Faster Processing",
      detail: "End-to-end workflows",
      color: "#2563eb"
    },
    {
      number: "90%",
      label: "Error Reduction",
      detail: "In automated processes",
      color: "#f59e0b"
    }
  ];

  // Business impact categories
  const businessImpacts = [
    {
      icon: FiTrendingUp,
      title: "Revenue Growth",
      description: "Automated sales processes and customer service increase revenue by 25%",
      color: "#16a34a"
    },
    {
      icon: FiDollarSign,
      title: "Cost Reduction",
      description: "Eliminate manual labor costs and reduce operational expenses by 40%",
      color: "#2563eb"
    },
    {
      icon: FiZap,
      title: "Competitive Advantage",
      description: "AI automation capabilities that competitors can't easily replicate",
      color: "#7c3aed"
    },
    {
      icon: FiTrendingUp,
      title: "Unlimited Scalability",
      description: "Automated processes scale infinitely without additional headcount",
      color: "#f59e0b"
    },
    {
      icon: FiHeart,
      title: "Employee Satisfaction",
      description: "Staff focus on strategic work instead of repetitive tasks",
      color: "#dc2626"
    }
  ];

  // Implementation process steps
  const implementationSteps = [
    {
      number: "01",
      title: "Process Discovery",
      description: [
        "Current workflow analysis",
        "Automation opportunity identification",
        "ROI potential assessment",
        "Stakeholder requirement gathering"
      ],
      color: "#7c3aed"
    },
    {
      number: "02",
      title: "AI Agent Design",
      description: [
        "Custom AI agent architecture",
        "Workflow logic development",
        "Integration point planning",
        "User interface design"
      ],
      color: "#2563eb"
    },
    {
      number: "03",
      title: "Development & Testing",
      description: [
        "AI agent development",
        "System integration setup",
        "Comprehensive testing protocols",
        "Performance optimization"
      ],
      color: "#16a34a"
    },
    {
      number: "04",
      title: "Deployment & Training",
      description: [
        "Production deployment",
        "User training and onboarding",
        "Change management support",
        "Go-live support and monitoring"
      ],
      color: "#f59e0b"
    },
    {
      number: "05",
      title: "Optimization & Scaling",
      description: [
        "Performance monitoring",
        "Continuous improvement",
        "Additional automation opportunities",
        "Scaling to new processes"
      ],
      color: "#dc2626"
    }
  ];

  // Real-world use cases
  const useCases = [
    {
      icon: FiUserPlus,
      title: "Automated Customer Onboarding",
      challenge: "Manual customer onboarding taking 5-7 days with multiple touchpoints and potential for errors.",
      solution: "AI agent that automatically processes new customer applications, verifies information, sets up accounts, and guides customers through onboarding.",
      results: [
        "Onboarding time reduced from 7 days to 2 hours",
        "95% reduction in manual processing errors",
        "40% increase in customer satisfaction scores",
        "Staff freed up for high-value customer relationship building"
      ],
      roi: "400% return on investment within 6 months",
      color: "#7c3aed",
      bg: "#f3e8ff"
    },
    {
      icon: FiFileText,
      title: "Intelligent Invoice Processing",
      challenge: "Accounts payable team spending 60% of time on manual invoice processing and approval routing.",
      solution: "AI agent that extracts invoice data, validates against purchase orders, routes for approval, and processes payments automatically.",
      results: [
        "80% reduction in invoice processing time",
        "99% accuracy in data extraction and validation",
        "Automated 3-way matching (PO, receipt, invoice)",
        "Early payment discounts captured automatically"
      ],
      roi: "250% return on investment within 8 months",
      color: "#16a34a",
      bg: "#dcfce7"
    },
    {
      icon: FiTarget,
      title: "Sales Lead Qualification",
      challenge: "Sales team spending 70% of time on unqualified leads, missing opportunities with qualified prospects.",
      solution: "AI agent that scores leads, researches prospects, personalizes outreach, and schedules qualified meetings automatically.",
      results: [
        "60% increase in qualified lead conversion",
        "Sales team focuses on closing, not prospecting",
        "Personalized outreach at scale",
        "3x increase in meeting booking rates"
      ],
      roi: "500% return on investment within 4 months",
      color: "#2563eb",
      bg: "#dbeafe"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Automation Message */}
            <motion.div
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center bg-[#e9d5ff] text-[#7c3aed] px-4 py-2 rounded-full text-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                🤖 RTILA AI Master Agent
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                AI-Powered Business Automation That Actually Drives Revenue
              </motion.h1>

              {/* Value proposition */}
              <motion.p
                className="text-lg text-slate-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Most businesses waste 40% of their time on repetitive tasks. As a RTILA AI Master Agent, Josh delivers cutting-edge automation that eliminates manual work, accelerates growth, and gives you a competitive advantage that's impossible to replicate.
              </motion.p>

              {/* Automation impact stats */}
              <motion.div
                className="bg-[rgba(124,58,237,0.1)] border border-[#c4b5fd] rounded-lg p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-[#7c3aed] mb-3">⚡ The Power of Intelligent Automation</h4>
                <ul className="space-y-2 text-[#6b46c1]">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>40%</strong> of business tasks can be automated with AI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>60%</strong> faster processing with intelligent automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>25%</strong> average revenue increase from automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>80%</strong> reduction in manual errors and rework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>90%</strong> of businesses gain competitive advantage through automation</span>
                  </li>
                </ul>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#automation-assessment"
                  className="bg-[#7c3aed] text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-purple-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Automation Assessment
                </motion.a>
                <motion.a
                  href="#examples"
                  className="border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-4 rounded-lg font-semibold text-center hover:bg-[#7c3aed] hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Automation Examples
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - RTILA AI Showcase */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <motion.h3
                  className="text-2xl font-bold text-primary-dark text-center mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  RTILA AI Master Agent
                </motion.h3>

                <motion.div
                  className="bg-[#7c3aed] text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  🏆 Exclusive Master Agent Status
                </motion.div>

                <div className="grid grid-cols-2 gap-4">
                  {rtilaCapabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <SafeIcon
                        icon={capability.icon}
                        className="w-8 h-8 mx-auto mb-3"
                        style={{ color: capability.color }}
                      />
                      <h4 className="font-bold text-primary-dark mb-1 text-sm">{capability.title}</h4>
                      <p className="text-xs text-slate-600">{capability.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automation Definition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Business Automation vs. Simple Task Automation
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Understanding the difference between basic automation and intelligent business transformation
            </p>
          </motion.div>

          {/* Automation Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Automation */}
            <motion.div
              className="bg-[#fef3c7] border border-[#fbbf24] rounded-xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#f59e0b] mb-6">⚙️ Basic Task Automation</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">Simple, Rule-Based Automation</h4>
                <p className="text-gray-700 mb-4">
                  Traditional automation tools that follow basic if-then rules and handle simple, repetitive tasks.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Characteristics:</h4>
                <ul className="space-y-2">
                  {basicAutomation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Examples:</h4>
                <ul className="space-y-2">
                  {basicExamples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#f59e0b] mr-2">•</span>
                      <span className="text-gray-700 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Intelligent Automation */}
            <motion.div
              className="bg-[#f3e8ff] border border-[#c4b5fd] rounded-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#7c3aed] mb-6">🧠 Intelligent Business Automation</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-2">AI-Powered Business Transformation</h4>
                <p className="text-gray-700 mb-4">
                  RTILA AI delivers intelligent automation that learns, adapts, and makes decisions to transform entire business processes.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-800 mb-3">Characteristics:</h4>
                <ul className="space-y-2">
                  {intelligentAutomation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7c3aed] mr-2">•</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-800 mb-3">Examples:</h4>
                <ul className="space-y-2">
                  {intelligentExamples.map((example, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#7c3aed] mr-2">•</span>
                      <span className="text-gray-700 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RTILA AI Automation Capabilities Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              RTILA AI Automation Capabilities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive AI automation platform that transforms every aspect of your business
            </p>
          </motion.div>

          {/* Automation Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="automation-capability"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="rounded-xl p-6 h-full"
                  style={{
                    backgroundColor: capability.bg,
                    borderColor: capability.border,
                    borderWidth: "1px"
                  }}
                >
                  {/* Icon */}
                  <SafeIcon
                    icon={capability.icon}
                    className="w-12 h-12 mb-4"
                    style={{ color: capability.color }}
                  />

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-dark mb-2">
                    {capability.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-medium mb-3" style={{ color: capability.color }}>
                    {capability.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-700 mb-4 text-sm">{capability.description}</p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <SafeIcon
                          icon={FiCheckCircle}
                          className="w-4 h-4 mr-2 mt-0.5"
                          style={{ color: capability.color }}
                        />
                        <span className="text-slate-700 text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation ROI & Business Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - ROI Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                Measurable Automation ROI
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                RTILA AI automation delivers quantifiable business results that justify investment and accelerate growth. Our Master Agent expertise ensures maximum ROI from day one.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {roiMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-primary-light rounded-xl p-5 text-center shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <p
                      className="text-2xl font-bold mb-1"
                      style={{ color: metric.color }}
                    >
                      {metric.number}
                    </p>
                    <p className="text-slate-700 font-medium text-sm">{metric.label}</p>
                    <p className="text-xs text-slate-500">{metric.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Business Impact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#f3e8ff] rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
                  Real Business Transformation
                </h3>

                <div className="space-y-6">
                  {businessImpacts.map((impact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className="p-3 rounded-lg mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${impact.color}15` }}
                      >
                        <SafeIcon
                          icon={impact.icon}
                          className="w-6 h-6"
                          style={{ color: impact.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary-dark mb-1">
                          {impact.title}
                        </h4>
                        <p className="text-slate-600 text-sm">
                          {impact.description}
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

      {/* Implementation Process Section */}
      <section className="py-20 bg-primary-light">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Our Proven Automation Implementation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Master Agent methodology that ensures successful automation deployment and adoption
            </p>
          </motion.div>

          {/* Implementation Steps */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {implementationSteps.map((step, index) => (
              <motion.div
                key={index}
                className="implementation-step bg-white rounded-xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-lg font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary-dark mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-2 text-left">
                  {step.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span
                        className="text-lg mr-2"
                        style={{ color: step.color }}
                      >
                        •
                      </span>
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases Section */}
      <section id="examples" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Real-World Automation Examples
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how RTILA AI automation transforms different business functions
            </p>
          </motion.div>

          {/* Use Cases */}
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="use-case grid md:grid-cols-12 gap-8 items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-2 flex justify-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: useCase.color }}
                  >
                    <SafeIcon icon={useCase.icon} className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="md:col-span-10">
                  <div
                    className="rounded-xl p-8"
                    style={{
                      backgroundColor: useCase.bg,
                      borderColor: useCase.color,
                      borderWidth: "1px"
                    }}
                  >
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      {useCase.title}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-primary-dark mb-2">Challenge:</h4>
                        <p className="text-slate-600 mb-4">{useCase.challenge}</p>
                        
                        <h4 className="font-bold text-primary-dark mb-2">Solution:</h4>
                        <p className="text-slate-600">{useCase.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-primary-dark mb-3">Results:</h4>
                        <ul className="space-y-2 mb-4">
                          {useCase.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <SafeIcon
                                icon={FiCheckCircle}
                                className="w-4 h-4 mr-2 mt-0.5"
                                style={{ color: useCase.color }}
                              />
                              <span className="text-slate-600 text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div
                          className="p-3 rounded-lg"
                          style={{ backgroundColor: `${useCase.color}15` }}
                        >
                          <p className="font-bold" style={{ color: useCase.color }}>
                            ROI: {useCase.roi}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section id="automation-assessment" className="py-20 bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get your free automation assessment and discover how RTILA AI can transform your business operations
            </p>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">🤖 Free Business Automation Assessment</h3>
              
              <div className="mb-6">
                <p className="font-semibold mb-3">Comprehensive Automation Opportunity Analysis</p>
                <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-left">
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-purple-200 mr-2" />
                    <span>Current process analysis and automation potential identification</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-purple-200 mr-2" />
                    <span>Custom AI agent recommendations for your specific workflows</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-purple-200 mr-2" />
                    <span>ROI projections and implementation timeline</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-purple-200 mr-2" />
                    <span>RTILA AI platform demonstration and capabilities overview</span>
                  </li>
                  <li className="flex items-center">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-purple-200 mr-2" />
                    <span>90-day automation roadmap with quick wins</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center font-semibold text-xl">
                Value: $3,000 | Your Investment: $0
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="bg-white text-[#7c3aed] px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Automation Assessment
              </motion.a>
              <motion.a
                href="tel:+12362350919"
                className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-[#7c3aed] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Josh: 236-235-0919</span>
              </motion.a>
            </motion.div>
            
            <p className="text-purple-100 text-sm mt-4">
              RTILA AI Master Agent • No obligation • Immediate automation insights
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Schedule Your Automation Assessment</h2>
              <p className="text-slate-300 mb-8">
                Fill out the form below to schedule your free automation assessment with Josh and discover how RTILA AI can transform your business operations.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="processes" className="block text-sm font-medium text-slate-300 mb-1">What processes would you like to automate?</label>
                  <textarea
                    id="processes"
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed] text-white"
                    placeholder="Tell us about the manual processes you'd like to automate..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-[#7c3aed] text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-purple-800 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule My Automation Assessment
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Master Agent Profile */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#7c3aed]">
                  <img
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844826077-Olayemi-profile2-2023-jpg.webp"
                    alt="Josh Olayemi"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Josh Olayemi</h3>
                <p className="text-[#7c3aed] font-semibold mb-2">RTILA AI Master Agent</p>
                <p className="text-slate-300 mb-4">VP of Digital Transformation</p>
                
                <div className="bg-[#7c3aed]/20 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-[#c4b5fd] mb-2">🏆 Master Agent Exclusive Benefits:</h4>
                  <ul className="text-slate-300 space-y-2 text-sm">
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#7c3aed] mr-2" />
                      <span>Direct RTILA AI platform access</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#7c3aed] mr-2" />
                      <span>Custom AI agent development</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#7c3aed] mr-2" />
                      <span>Priority support and training</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-[#7c3aed] mr-2" />
                      <span>Advanced automation strategies</span>
                    </li>
                  </ul>
                </div>

                <blockquote className="text-slate-300 italic mb-6 text-sm">
                  "As a RTILA AI Master Agent, I bring enterprise-grade automation capabilities to growing businesses. Let's transform your operations with AI that actually works."
                </blockquote>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-[#7c3aed]" />
                    <a href="tel:+12362350919" className="text-slate-300 hover:text-white">
                      236-235-0919
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-[#7c3aed]" />
                    <a href="mailto:josh@handvantage.com" className="text-slate-300 hover:text-white">
                      josh@handvantage.com
                    </a>
                  </div>
                </div>
                
                <div className="border-t border-slate-700 pt-6">
                  <p className="text-slate-400 text-sm">
                    Available for automation consultations Monday-Friday, 9 AM - 6 PM PST
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

export default BusinessAutomationPage;
import React,{useState} from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiCheckCircle,FiXCircle,FiZap,FiShield,FiCloud,FiDatabase,FiBot,FiBuilding,FiTrendingUp,FiDollarSign,FiStar,FiPhone,FiUser,FiLoader}=FiIcons;

const DigitalTransformationPage=()=> {
  // Form state 
  const [formData,setFormData]=useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    transformationChallenges: ''
  });
  const [formStatus,setFormStatus]=useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });

  // Partnership items 
  const partnerships=[ 
    {icon: FiCloud,title: "Microsoft CSP",badge: "Direct Support",color: "#2563eb"},
    {icon: FiBot,title: "RTILA AI",badge: "Master Agent",color: "#7c3aed"},
    {icon: FiBuilding,title: "Pax8",badge: "Cloud Marketplace",color: "#16a34a"},
    {icon: FiShield,title: "Vanta",badge: "Compliance",color: "#f59e0b"} 
  ];

  // What digital transformation is NOT 
  const notItems=[ 
    "Just buying new software",
    "Moving everything to the cloud",
    "Implementing random automation",
    "Following technology trends",
    "One-size-fits-all solutions" 
  ];

  // What digital transformation IS 
  const isItems=[ 
    "Strategic business transformation using technology",
    "Integrated ecosystem of enterprise solutions",
    "Process optimization with measurable ROI",
    "Scalable foundation for sustainable growth",
    "Partnership-powered enterprise capabilities" 
  ];

  // Methodology steps 
  const methodologySteps=[ 
    {number: "01",title: "Discovery & Assessment",subtitle: "Current State Analysis",color: "#2563eb",items: [ "Technology infrastructure audit","Business process mapping","Security posture assessment","Growth bottleneck identification","Partnership opportunity analysis" ]},
    {number: "02",title: "Strategic Planning",subtitle: "Transformation Roadmap",color: "#16a34a",items: [ "Business objective alignment","Technology architecture design","Partnership solution mapping","ROI projections & milestones","Risk mitigation strategies" ]},
    {number: "03",title: "Foundation Setup",subtitle: "Core Infrastructure",color: "#f59e0b",items: [ "Microsoft 365 & Azure deployment","Security framework implementation","Compliance foundation (Vanta)","User access management","Data migration & backup" ]},
    {number: "04",title: "Process Automation",subtitle: "RTILA AI Implementation",color: "#7c3aed",items: [ "Workflow automation design","AI agent development","Integration with existing systems","Staff training & adoption","Performance monitoring setup" ]},
    {number: "05",title: "Security & Compliance",subtitle: "Complete Protection",color: "#dc2626",items: [ "IRONSCALES email security","Check Point network protection","Swif.ai device management","Compliance automation (SOC 2,HIPAA)","Security awareness training" ]},
    {number: "06",title: "Optimization & Growth",subtitle: "Continuous Improvement",color: "#059669",items: [ "Performance analytics & reporting","Process refinement","Scalability planning","Advanced feature rollout","Strategic technology planning" ]} 
  ];

  // Partnership solution categories 
  const solutionCategories=[ 
    {icon: FiCloud,title: "Microsoft Cloud Solution Provider (CSP)",color: "#2563eb",subtitle: "Direct Microsoft Partnership for Enterprise Solutions",description: "As a Microsoft Cloud Solution Provider,we offer direct access to the complete Microsoft ecosystem with enterprise-grade support and preferred pricing.",benefits: [ "Microsoft 365 with direct CSP support","Azure cloud infrastructure with expert implementation","Advanced security features (Defender,Sentinel)","Compliance tools (Purview,Information Protection)","Direct escalation path for critical issues","Preferred pricing and licensing flexibility" ]},
    {icon: FiBot,title: "RTILA AI Master Agent",color: "#7c3aed",subtitle: "Cutting-Edge Business Automation Platform",description: "As a RTILA AI Master Agent,we provide access to the most advanced business automation platform available,with expert implementation and ongoing optimization.",benefits: [ "Custom AI agent development for your specific workflows","Integration with existing business systems","Intelligent document processing and data extraction","Automated customer service and support workflows","Revenue optimization through process automation","Dedicated Master Agent support and training" ]},
    {icon: FiShield,title: "Complete Security Partnership Ecosystem",color: "#dc2626",subtitle: "Integrated Security Through Multiple Partnerships",description: "Our partnerships with IRONSCALES,Check Point,Vanta,and Swif.ai create a complete security ecosystem that protects every aspect of your business.",benefits: [ "IRONSCALES email security (protecting 16,000+ organizations)","Check Point next-generation firewall and network protection","Vanta automated compliance for SOC 2,HIPAA,ISO 27001","Swif.ai AI-powered device management and Shadow IT visibility","Integrated security dashboard and reporting","Coordinated incident response across all platforms" ]},
    {icon: FiBuilding,title: "Pax8 Cloud Marketplace Partnership",color: "#16a34a",subtitle: "Access to 200+ Cloud Solutions Through Preferred Partner",description: "Our Pax8 partnership provides access to the cloud marketplace preferred by MSPs globally,with streamlined procurement and management.",benefits: [ "Access to 200+ pre-vetted cloud solutions","Simplified billing and license management","Preferred partner pricing and support","Rapid deployment of new solutions","Integrated marketplace for all your cloud needs","Expert guidance on solution selection and optimization" ]} 
  ];

  // ROI metrics 
  const roiMetrics=[ 
    {number: "40%",label: "Productivity Increase",detail: "Through RTILA AI automation",color: "#16a34a"},
    {number: "60%",label: "Faster Deployment",detail: "With partnership solutions",color: "#2563eb"},
    {number: "25%",label: "Cost Reduction",detail: "Through process optimization",color: "#7c3aed"},
    {number: "90%",label: "Security Improvement",detail: "With integrated protection",color: "#f59e0b"} 
  ];

  // Business impact items 
  const businessImpacts=[ 
    {icon: FiTrendingUp,title: "Revenue Growth",description: "Automated processes free up staff for revenue-generating activities",color: "#16a34a"},
    {icon: FiDollarSign,title: "Cost Optimization",description: "Eliminate redundant systems and optimize licensing through partnerships",color: "#2563eb"},
    {icon: FiShield,title: "Risk Reduction",description: "Enterprise-grade security and compliance reduce business risk",color: "#dc2626"},
    {icon: FiZap,title: "Scalability",description: "Cloud-native architecture supports rapid business growth",color: "#7c3aed"},
    {icon: FiStar,title: "Competitive Advantage",description: "Advanced automation and AI capabilities differentiate your business",color: "#f59e0b"} 
  ];

  // Form handlers 
  const handleInputChange=(e)=> {
    const {name,value}=e.target;
    setFormData(prev=> ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm=()=> {
    const errors=[];
    if (!formData.firstName.trim()) {
      errors.push('First Name is required');
    } 
    if (!formData.lastName.trim()) {
      errors.push('Last Name is required');
    } 
    if (!formData.company.trim()) {
      errors.push('Company Name is required');
    } 
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    } 
    return errors;
  };

  const handleSubmit=async (e)=> {
    e.preventDefault();
    const errors=validateForm();
    if (errors.length > 0) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: errors.join(',')
      });
      return;
    } 
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      error: null
    });
    try {
      // Let Netlify handle the form submission 
      const formElement=e.target;
      const response=await fetch('/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(new FormData(formElement)).toString()
      });
      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          error: null
        });
        // Reset form 
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          transformationChallenges: ''
        });
        // Reset success message after 5 seconds 
        setTimeout(()=> {
          setFormStatus({
            isSubmitting: false,
            isSuccess: false,
            error: null
          });
        },5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: 'Failed to submit form. Please try again or contact us directly at 236-235-0919'
      });
    }
  };

  const handleSmoothScroll=(elementId)=> {
    const element=document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return ( 
    <div className="pt-20"> 
      {/* Hero Section */} 
      <section className="bg-gradient-to-br from-primary-light to-blue-50 py-20"> 
        <div className="container mx-auto px-6"> 
          <div className="grid lg:grid-cols-12 gap-12 items-center"> 
            {/* Left Column - Service Introduction */} 
            <motion.div className="lg:col-span-7 space-y-8" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              {/* Badge */} 
              <motion.div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.2}} viewport={{once: true}} > 
                Complete Digital Transformation 
              </motion.div> 
              {/* Headline */} 
              <motion.h1 className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.3}} viewport={{once: true}} > 
                Strategic Digital Transformation That Actually Drives Growth 
              </motion.h1> 
              {/* Value proposition */} 
              <motion.p className="text-lg text-slate-600" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.4}} viewport={{once: true}} > 
                Most businesses struggle with digital transformation because they lack a strategic approach and enterprise-grade partnerships. Josh's 20+ years of experience across the world including working with various clients at Oracle,and AWS,combined with Technology,business and Professional relationships,delivers transformation that actually works. 
              </motion.p> 
              {/* Key benefits */} 
              <motion.div className="space-y-4" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.5}} viewport={{once: true}} > 
                <div className="flex items-center space-x-3"> 
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" /> 
                  <span className="text-gray-700 font-medium">Strategic roadmap based on enterprise best practices</span> 
                </div> 
                <div className="flex items-center space-x-3"> 
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" /> 
                  <span className="text-gray-700 font-medium">RTILA AI automation for immediate efficiency gains</span> 
                </div> 
                <div className="flex items-center space-x-3"> 
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" /> 
                  <span className="text-gray-700 font-medium">Microsoft 365 & Azure implementation with CSP support</span> 
                </div> 
                <div className="flex items-center space-x-3"> 
                  <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success" /> 
                  <span className="text-gray-700 font-medium">Measurable ROI with 90-day quick wins</span> 
                </div> 
              </motion.div> 
              {/* CTA buttons */} 
              <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.6}} viewport={{once: true}} > 
                <motion.button onClick={()=> handleSmoothScroll('assessment')} className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} > 
                  Get Your Growth Bottleneck Assessment 
                </motion.button> 
                <motion.a href="https://handvantage.co/contact" target="_blank" rel="noopener noreferrer" className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-semibold text-center hover:bg-primary-blue hover:text-white transition-colors duration-300" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} > 
                  Schedule Strategic Consultation 
                </motion.a> 
              </motion.div> 
            </motion.div> 
            {/* Right Column - Partnership Showcase */} 
            <motion.div className="lg:col-span-5" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <div className="bg-white rounded-2xl p-8 shadow-xl"> 
                <motion.h3 className="text-2xl font-bold text-primary-dark text-center mb-6" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.2}} viewport={{once: true}} > 
                  Powered by Enterprise Partnerships 
                </motion.h3> 
                <div className="grid grid-cols-2 gap-4"> 
                  {partnerships.map((partner,index)=> ( 
                    <motion.div key={index} className="bg-gray-50 rounded-lg p-4 text-center" initial={{opacity: 0,scale: 0.8}} whileInView={{opacity: 1,scale: 1}} transition={{delay: 0.3 + index * 0.1}} viewport={{once: true}} whileHover={{y: -5}} > 
                      <SafeIcon icon={partner.icon} className="w-10 h-10 mx-auto mb-3" style={{color: partner.color}} /> 
                      <h4 className="font-bold text-primary-dark mb-1">{partner.title}</h4> 
                      <span className="text-xs font-medium px-2 py-1 rounded-full" style={{backgroundColor: `${partner.color}20`,color: partner.color}} > 
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
      {/* What Digital Transformation Really Means Section */} 
      <section className="py-20 bg-white"> 
        <div className="container mx-auto px-6"> 
          {/* Section header */} 
          <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
            <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
              What Digital Transformation Really Means 
            </h2> 
            <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
              Beyond buzzwords: the strategic approach that actually drives business growth 
            </p> 
          </motion.div> 
          {/* Comparison layout */} 
          <div className="grid md:grid-cols-2 gap-8"> 
            {/* Left Side - What It's NOT */} 
            <motion.div className="bg-red-50 border border-red-200 rounded-xl p-8" initial={{opacity: 0,x: -30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <h3 className="text-2xl font-bold text-primary-warning mb-6 flex items-center"> 
                <span className="mr-2">❌</span> What It's NOT 
              </h3> 
              <div className="space-y-4"> 
                {notItems.map((item,index)=> ( 
                  <motion.div key={index} className="flex items-start" initial={{opacity: 0,x: -20}} whileInView={{opacity: 1,x: 0}} transition={{delay: 0.1 * index}} viewport={{once: true}} > 
                    <SafeIcon icon={FiXCircle} className="w-5 h-5 text-primary-warning mt-1 mr-3 flex-shrink-0" /> 
                    <p className="text-slate-700">{item}</p> 
                  </motion.div> 
                ))} 
              </div> 
            </motion.div> 
            {/* Right Side - What It IS */} 
            <motion.div className="bg-green-50 border border-green-200 rounded-xl p-8" initial={{opacity: 0,x: 30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <h3 className="text-2xl font-bold text-primary-success mb-6 flex items-center"> 
                <span className="mr-2">✅</span> What It IS 
              </h3> 
              <div className="space-y-4"> 
                {isItems.map((item,index)=> ( 
                  <motion.div key={index} className="flex items-start" initial={{opacity: 0,x: 20}} whileInView={{opacity: 1,x: 0}} transition={{delay: 0.1 * index}} viewport={{once: true}} > 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success mt-1 mr-3 flex-shrink-0" /> 
                    <p className="text-slate-700">{item}</p> 
                  </motion.div> 
                ))} 
              </div> 
            </motion.div> 
          </div> 
        </div> 
      </section> 
      {/* Transformation Methodology Section */} 
      <section className="py-20 bg-primary-light"> 
        <div className="container mx-auto px-6"> 
          {/* Section header */} 
          <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
            <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
              The Handvantage Transformation Methodology 
            </h2> 
            <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
              Our proven 6-phase approach that delivers measurable results in 90 days 
            </p> 
          </motion.div> 
          {/* Methodology steps */} 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
            {methodologySteps.map((step,index)=> ( 
              <motion.div key={index} className="bg-white rounded-xl p-8 shadow-lg" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.5,delay: index * 0.1}} viewport={{once: true}} whileHover={{y: -8}} > 
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto" style={{backgroundColor: step.color}} > 
                  <span className="text-xl font-bold text-white">{step.number}</span> 
                </div> 
                <h3 className="text-xl font-bold text-primary-dark text-center mb-2">{step.title}</h3> 
                <p className="text-center text-primary-blue font-medium mb-4">{step.subtitle}</p> 
                <ul className="space-y-2"> 
                  {step.items.map((item,i)=> ( 
                    <li key={i} className="flex items-center"> 
                      <span className="text-lg mr-2" style={{color: step.color}}>•</span> 
                      <span className="text-slate-600 text-sm">{item}</span> 
                    </li> 
                  ))} 
                </ul> 
              </motion.div> 
            ))} 
          </div> 
        </div> 
      </section> 
      {/* Partnership-Powered Solutions Section */} 
      <section className="py-20 bg-white"> 
        <div className="container mx-auto px-6"> 
          {/* Section header */} 
          <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
            <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
              Partnership-Powered Transformation Solutions 
            </h2> 
            <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
              Enterprise-grade solutions through strategic partnerships,not just vendor relationships 
            </p> 
          </motion.div> 
          {/* Solution categories */} 
          <div className="space-y-16"> 
            {solutionCategories.map((solution,index)=> ( 
              <motion.div key={index} className="grid md:grid-cols-12 gap-8 items-center" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: index * 0.1}} viewport={{once: true}} > 
                {/* Icon */} 
                <div className="md:col-span-2 flex justify-center"> 
                  <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{backgroundColor: solution.color}} > 
                    <SafeIcon icon={solution.icon} className="w-12 h-12 text-white" /> 
                  </div> 
                </div> 
                {/* Content */} 
                <div className="md:col-span-10"> 
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">{solution.title}</h3> 
                  <p className="font-medium mb-3" style={{color: solution.color}}>{solution.subtitle}</p> 
                  <p className="text-slate-600 mb-4">{solution.description}</p> 
                  <h4 className="font-semibold text-primary-dark mb-3">What This Means for You:</h4> 
                  <ul className="grid md:grid-cols-2 gap-2"> 
                    {solution.benefits.map((benefit,i)=> ( 
                      <li key={i} className="flex items-start"> 
                        <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2 mt-0.5" style={{color: solution.color}} /> 
                        <span className="text-slate-600">{benefit}</span> 
                      </li> 
                    ))} 
                  </ul> 
                </div> 
              </motion.div> 
            ))} 
          </div> 
        </div> 
      </section> 
      {/* ROI & Business Impact Section */} 
      <section className="py-20 bg-primary-light"> 
        <div className="container mx-auto px-6"> 
          <div className="grid md:grid-cols-2 gap-12"> 
            {/* Left Column - ROI Metrics */} 
            <motion.div initial={{opacity: 0,x: -30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <h2 className="text-3xl font-bold text-primary-dark mb-4"> 
                Measurable ROI in 90 Days 
              </h2> 
              <p className="text-lg text-slate-600 mb-8"> 
                Digital transformation isn't just about technology – it's about measurable business impact. Our partnership-powered approach delivers quantifiable results that justify your investment. 
              </p> 
              <div className="grid grid-cols-2 gap-6"> 
                {roiMetrics.map((metric,index)=> ( 
                  <motion.div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.4,delay: index * 0.1}} viewport={{once: true}} whileHover={{y: -5}} > 
                    <p className="text-3xl font-bold mb-2" style={{color: metric.color}}>{metric.number}</p> 
                    <p className="text-slate-700 font-medium">{metric.label}</p> 
                    <p className="text-sm text-slate-500">{metric.detail}</p> 
                  </motion.div> 
                ))} 
              </div> 
            </motion.div> 
            {/* Right Column - Business Impact */} 
            <motion.div initial={{opacity: 0,x: 30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <div className="bg-white rounded-xl p-8 shadow-xl"> 
                <h3 className="text-2xl font-bold text-primary-dark text-center mb-8"> 
                  Real Business Impact 
                </h3> 
                <div className="space-y-6"> 
                  {businessImpacts.map((impact,index)=> ( 
                    <motion.div key={index} className="flex items-start" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.4,delay: 0.2 + index * 0.1}} viewport={{once: true}} > 
                      <div className="p-3 rounded-full mr-4 flex-shrink-0" style={{backgroundColor: `${impact.color}15`}} > 
                        <SafeIcon icon={impact.icon} className="w-6 h-6" style={{color: impact.color}} /> 
                      </div> 
                      <div> 
                        <h4 className="font-bold text-primary-dark mb-1">{impact.title}</h4> 
                        <p className="text-slate-600 text-sm">{impact.description}</p> 
                      </div> 
                    </motion.div> 
                  ))} 
                </div> 
              </div> 
            </motion.div> 
          </div> 
        </div> 
      </section> 
      {/* Get Started CTA Section */} 
      <section id="assessment" className="py-20 bg-gradient-to-r from-primary-blue to-primary-purple text-white"> 
        <div className="container mx-auto px-6"> 
          <motion.div className="max-w-3xl mx-auto text-center" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
            <h2 className="text-4xl font-bold mb-4"> 
              Ready to Transform Your Business? 
            </h2> 
            <p className="text-xl text-blue-100 mb-8"> 
              Get your free growth bottleneck assessment and discover how our enterprise partnerships can accelerate your growth 
            </p> 
            <motion.div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: 0.2}} viewport={{once: true}} > 
              <h3 className="text-2xl font-bold mb-4">Free Growth Bottleneck Assessment</h3> 
              <div className="mb-6"> 
                <p className="font-semibold mb-3">What You'll Receive:</p> 
                <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4 text-left"> 
                  <li className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" /> 
                    <span>Complete technology infrastructure audit</span> 
                  </li> 
                  <li className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" /> 
                    <span>Partnership solution recommendations</span> 
                  </li> 
                  <li className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" /> 
                    <span>Custom transformation roadmap</span> 
                  </li> 
                  <li className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" /> 
                    <span>ROI projections and timeline</span> 
                  </li> 
                  <li className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-200 mr-2" /> 
                    <span>90-day quick wins identification</span> 
                  </li> 
                </ul> 
              </div> 
              <p className="text-center font-semibold text-xl"> 
                Value: $2,500 | Your Investment: $0 
              </p> 
            </motion.div> 
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: 0.3}} viewport={{once: true}} > 
              <motion.button onClick={()=> handleSmoothScroll('contact')} className="bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} > 
                Get Your Free Assessment 
              </motion.button> 
              <motion.a href="tel:+12362350919" className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-primary-blue transition-colors duration-300" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} > 
                <SafeIcon icon={FiPhone} className="w-5 h-5" /> 
                <span>Call Josh: 236-235-0919</span> 
              </motion.a> 
            </motion.div> 
            <p className="text-blue-100 text-sm mt-4"> 
              30-minute consultation • No obligation • Immediate insights 
            </p> 
          </motion.div> 
        </div> 
      </section> 
      {/* Contact Section */} 
      <section id="contact" className="py-20 bg-primary-dark text-white"> 
        <div className="container mx-auto px-6"> 
          <div className="grid md:grid-cols-2 gap-12 items-center"> 
            {/* Left Column - Contact Form */} 
            <motion.div initial={{opacity: 0,x: -30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <h2 className="text-3xl font-bold mb-6">Schedule Your Growth Bottleneck Assessment</h2> 
              <p className="text-slate-300 mb-8"> 
                Fill out the form below to schedule your free 30-minute growth bottleneck assessment with Josh. 
              </p> 
              {/* Success Message */} 
              {formStatus.isSuccess && ( 
                <motion.div className="bg-green-500 text-white p-4 rounded-lg mb-6" initial={{opacity: 0,y: -20}} animate={{opacity: 1,y: 0}} > 
                  <div className="flex items-center"> 
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 mr-2" /> 
                    <span>Thank you! Your growth bottleneck assessment request has been submitted successfully. Josh will contact you within 24 hours.</span> 
                  </div> 
                </motion.div> 
              )} 
              {/* Error Message */} 
              {formStatus.error && ( 
                <motion.div className="bg-red-500 text-white p-4 rounded-lg mb-6" initial={{opacity: 0,y: -20}} animate={{opacity: 1,y: 0}} > 
                  <p>{formStatus.error}</p> 
                </motion.div> 
              )} 
              {/* Netlify Form */} 
              <form name="transformation-assessment-contact" method="POST" data-netlify="true" data-netlify-recaptcha="true" onSubmit={handleSubmit} className="space-y-6" > 
                {/* Netlify form detection */} 
                <input type="hidden" name="form-name" value="transformation-assessment-contact" /> 
                <div className="grid md:grid-cols-2 gap-6"> 
                  <div> 
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-1"> 
                      First Name <span className="text-red-400">*</span> 
                    </label> 
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="Your first name" /> 
                  </div> 
                  <div> 
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-1"> 
                      Last Name <span className="text-red-400">*</span> 
                    </label> 
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="Your last name" /> 
                  </div> 
                </div> 
                <div> 
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1"> 
                    Email Address <span className="text-red-400">*</span> 
                  </label> 
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="your.email@example.com" /> 
                </div> 
                <div> 
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1"> 
                    Phone Number 
                  </label> 
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="Your phone number" /> 
                </div> 
                <div> 
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1"> 
                    Company Name <span className="text-red-400">*</span> 
                  </label> 
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="Your company name" /> 
                </div> 
                <div> 
                  <label htmlFor="transformationChallenges" className="block text-sm font-medium text-slate-300 mb-1"> 
                    What's your biggest growth bottleneck? 
                  </label> 
                  <textarea id="transformationChallenges" name="transformationChallenges" value={formData.transformationChallenges} onChange={handleInputChange} rows="4" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue text-white" placeholder="Tell us about your current challenges..." ></textarea> 
                </div> 
                {/* reCAPTCHA */} 
                <div data-netlify-recaptcha="true"></div> 
                <motion.button type="submit" disabled={formStatus.isSubmitting} className="w-full bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center" whileHover={!formStatus.isSubmitting ? {scale: 1.02} : {}} whileTap={!formStatus.isSubmitting ? {scale: 0.98} : {}} > 
                  {formStatus.isSubmitting ? ( 
                    <> 
                      <SafeIcon icon={FiLoader} className="w-5 h-5 mr-2 animate-spin" /> 
                      Submitting... 
                    </> 
                  ) : ( 
                    'Schedule My Assessment' 
                  )} 
                </motion.button> 
              </form> 
            </motion.div> 
            {/* Right Column - Josh's Profile */} 
            <motion.div className="text-center" initial={{opacity: 0,x: 30}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700"> 
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-blue"> 
                  <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844826077-Olayemi-profile2-2023-jpg.webp" alt="Josh Olayemi" className="w-full h-full object-cover" /> 
                </div> 
                <h3 className="text-2xl font-bold mb-2">Josh Olayemi</h3> 
                <p className="text-primary-blue font-semibold mb-4">VP of Digital Transformation</p> 
                <div className="flex items-center justify-center space-x-3 mb-6"> 
                  <SafeIcon icon={FiUser} className="w-5 h-5 text-slate-400" /> 
                  <span className="text-slate-300">20+ years experience</span> 
                </div> 
                <blockquote className="text-slate-300 italic mb-6 text-sm"> 
                  "I've implemented enterprise-grade transformation at Amazon,Oracle,and AWS. Now I bring that same expertise to growing businesses through strategic partnerships." 
                </blockquote> 
                <div className="space-y-4 mb-6"> 
                  <div className="flex items-center space-x-3"> 
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-blue" /> 
                    <a href="tel:+12362350919" className="text-slate-300 hover:text-white" > 
                      236-235-0919 
                    </a> 
                  </div> 
                </div> 
                <div className="border-t border-slate-700 pt-6"> 
                  <p className="text-slate-400 text-sm"> 
                    Available for calls Monday-Friday,9 AM - 6 PM PST 
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

export default DigitalTransformationPage;
import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {Link} from 'react-router-dom';

const {FiZap,FiShield,FiCloud,FiBot,FiCheck,FiArrowRight,FiDollarSign,FiClipboard,FiTrendingUp,FiCheckSquare}=FiIcons;

const Services=()=> {
  // As-a-Service Security Bundles - Primary Offering
  const managedServices = [
    {icon: FiShield,
     title: 'Managed Security Services',
     description: 'Enterprise-grade security that scales with your growth without enterprise complexity',
     features: ['24/7 monitoring and response','Strategic consulting included','Cost optimization through vendor partnerships'],
     buttonText: 'Explore Managed Services',
     buttonLink: '/services/managed-security',
     color: 'red',
     bgColor: 'bg-red-50',
     iconBg: 'bg-red-100',
     iconColor: 'text-primary-warning',
     buttonBg: 'bg-primary-warning',
     featured: true}
  ];

  // Strategic Consulting Services - Secondary Offering
  const consultingServices=[ 
    {icon: FiZap,
     title: 'Strategic Technology Planning',
     description: 'Transform technology from growth barrier into competitive advantage',
     features: ['Business growth bottleneck analysis','Strategic technology roadmap development','Process optimization and automation strategy'],
     buttonText: 'Eliminate Bottlenecks',
     buttonLink: '/services/digital-transformation',
     color: 'blue',
     bgColor: 'bg-blue-50',
     iconBg: 'bg-blue-100',
     iconColor: 'text-primary-blue',
     buttonBg: 'bg-primary-blue'},
    
    {icon: FiShield,
     title: 'Strategic Cybersecurity Consulting',
     description: 'Expert guidance for security strategy, compliance, and technology selection',
     features: ['Security strategy development','Compliance assessment and planning','Technology evaluation and vendor selection'],
     buttonText: 'Get Security Strategy',
     buttonLink: '/services/cybersecurity',
     color: 'red',
     bgColor: 'bg-red-50',
     iconBg: 'bg-red-100',
     iconColor: 'text-primary-warning',
     buttonBg: 'bg-primary-warning'},
    
    {icon: FiCloud,
     title: 'Scalable Infrastructure Strategy',
     description: 'Cloud infrastructure that reduces costs while enabling unlimited growth',
     features: ['Strategic cloud planning and architecture','Cost optimization through strategic vendor relationships','Scalable infrastructure that grows with your business'],
     buttonText: 'Reduce Cloud Costs',
     buttonLink: '/services/cloud-infrastructure',
     color: 'green',
     bgColor: 'bg-green-50',
     iconBg: 'bg-green-100',
     iconColor: 'text-primary-success',
     buttonBg: 'bg-primary-success'},
    
    {icon: FiBot,
     title: 'Process Optimization Strategy',
     description: 'Eliminate manual bottlenecks that limit your team\'s productivity and growth',
     features: ['Manual process identification and analysis','Automation strategy and implementation','Workflow optimization for maximum efficiency'],
     buttonText: 'Optimize Processes',
     buttonLink: '/services/business-automation',
     color: 'purple',
     bgColor: 'bg-purple-50',
     iconBg: 'bg-purple-100',
     iconColor: 'text-primary-purple',
     buttonBg: 'bg-primary-purple'} 
  ];

  const assessments=[ 
    {icon: FiZap,
     title: 'Digital Transformation Assessment',
     description: 'Strategic business assessment that identifies technology bottlenecks limiting your growth and reveals opportunities for competitive advantage',
     features: ['Growth bottleneck identification','Competitive advantage opportunities','Strategic technology roadmap'],
     buttonText: 'Identify Growth Bottlenecks',
     buttonLink: '/assessment',
     color: 'blue',
     bgColor: 'bg-blue-50',
     iconBg: 'bg-blue-100',
     iconColor: 'text-primary-blue',
     buttonBg: 'bg-primary-blue'},
    
    {icon: FiShield,
     title: 'Cybersecurity Maturity Assessment',
     description: 'Comprehensive security posture evaluation with personalized recommendations and industry benchmarking',
     features: ['Security maturity scoring','Personalized improvement roadmap','Industry peer comparison'],
     buttonText: 'Start Security Assessment',
     buttonLink: '/security-assessment',
     color: 'red',
     bgColor: 'bg-red-50',
     iconBg: 'bg-red-100',
     iconColor: 'text-primary-warning',
     buttonBg: 'bg-primary-warning'},

    {icon: FiDollarSign,
     title: 'ROI Calculator for Managed Security',
     description: 'Interactive calculator showing financial benefits of managed security services vs internal teams',
     features: ['Cost comparison analysis','3-year ROI projection','Vendor consolidation savings'],
     buttonText: 'Calculate Your ROI',
     buttonLink: '/roi-calculator',
     color: 'green',
     bgColor: 'bg-green-50',
     iconBg: 'bg-green-100',
     iconColor: 'text-primary-success',
     buttonBg: 'bg-primary-success'},

    {icon: FiClipboard,
     title: 'Compliance Readiness Assessment',
     description: 'Evaluate your current compliance status for SOC 2, HIPAA, PCI-DSS, and GDPR frameworks',
     features: ['Multi-framework assessment','Gap analysis and prioritization','Implementation roadmap'],
     buttonText: 'Check Compliance Status',
     buttonLink: '/compliance-assessment',
     color: 'purple',
     bgColor: 'bg-purple-50',
     iconBg: 'bg-purple-100',
     iconColor: 'text-primary-purple',
     buttonBg: 'bg-primary-purple'},

    {icon: FiTrendingUp,
     title: 'Security Budget Planning Tool',
     description: 'Strategic budget allocation calculator based on your risk profile and business objectives',
     features: ['Industry benchmarks','Investment prioritization','ROI analysis'],
     buttonText: 'Plan Your Budget',
     buttonLink: '/budget-planner',
     color: 'indigo',
     bgColor: 'bg-indigo-50',
     iconBg: 'bg-indigo-100',
     iconColor: 'text-indigo-600',
     buttonBg: 'bg-indigo-600'},

    {icon: FiCheckSquare,
     title: 'Security Vendor Evaluation Matrix',
     description: 'Systematic vendor comparison tool for evaluating cybersecurity solutions without bias',
     features: ['Weighted scoring system','Business alignment criteria','Vendor comparison'],
     buttonText: 'Evaluate Vendors',
     buttonLink: '/vendor-evaluation',
     color: 'cyan',
     bgColor: 'bg-cyan-50',
     iconBg: 'bg-cyan-100',
     iconColor: 'text-cyan-600',
     buttonBg: 'bg-cyan-600'} 
  ];

  return ( 
    <section id="services" className="py-20 bg-primary-light"> 
      <div className="container mx-auto px-6"> 
        {/* Header */} 
        <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
            Comprehensive Cybersecurity Solutions for Growing Businesses
          </h2> 
          <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
            From strategic consulting to fully managed security - everything your business needs to thrive securely
          </p> 
        </motion.div> 
        
        {/* Managed Security Services Section - Primary Offering */}
        <motion.div className="mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-dark mb-4">As-a-Service Security Bundles</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive managed security services that scale with business growth</p>
            <div className="mt-6 text-sm text-slate-500">
              ✓ 24/7 monitoring ✓ Expert management ✓ Strategic guidance ✓ Cost optimization
            </div>
          </div>
          
          {/* Featured Managed Services Card */}
          <div className="max-w-4xl mx-auto">
            {managedServices.map((service,index)=> ( 
              <motion.div key={index} className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 shadow-xl border-2 border-red-200 hover:shadow-2xl transition-all duration-300" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: index * 0.1}} viewport={{once: true}} whileHover={{y: -8}} > 
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                  <div className="flex-shrink-0">
                    {/* Icon */} 
                    <div className={`w-20 h-20 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}> 
                      <SafeIcon icon={service.icon} className={`w-10 h-10 ${service.iconColor}`} /> 
                    </div> 
                  </div>
                  
                  <div className="flex-grow text-center lg:text-left">
                    {/* Featured Badge */}
                    <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      ⭐ PRIMARY OFFERING
                    </div>
                    
                    {/* Title */} 
                    <h3 className="text-2xl font-bold text-primary-dark mb-3"> 
                      {service.title} 
                    </h3> 
                    
                    {/* Description */} 
                    <p className="text-slate-600 mb-6 text-lg"> 
                      {service.description} 
                    </p> 
                    
                    {/* Features */} 
                    <ul className="grid md:grid-cols-3 gap-3 mb-8"> 
                      {service.features.map((feature,featureIndex)=> ( 
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600"> 
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-success mr-2" /> 
                          {feature} 
                        </li> 
                      ))} 
                    </ul> 
                    
                    {/* CTA Buttons */} 
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}> 
                        <Link to={service.buttonLink} className={`${service.buttonBg} text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`} > 
                          <span>{service.buttonText}</span> 
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" /> 
                        </Link> 
                      </motion.div>
                      <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}> 
                        <Link to="/security-assessment" className="border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-300 flex items-center justify-center" > 
                          <span>Get Security Assessment</span> 
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" /> 
                        </Link> 
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div> 
            ))}
          </div>
        </motion.div>
        
        {/* Strategic Consulting Services Section */}
        <motion.div className="mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-dark mb-4">Strategic Cybersecurity Consulting</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Expert guidance for security strategy, compliance, and technology selection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> 
            {consultingServices.map((service,index)=> ( 
              <motion.div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: index * 0.1}} viewport={{once: true}} whileHover={{y: -8}} > 
                {/* Icon */} 
                <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}> 
                  <SafeIcon icon={service.icon} className={`w-8 h-8 ${service.iconColor}`} /> 
                </div> 
                
                {/* Title */} 
                <h3 className="text-xl font-bold text-primary-dark mb-3"> 
                  {service.title} 
                </h3> 
                
                {/* Description */} 
                <p className="text-slate-600 mb-4"> 
                  {service.description} 
                </p> 
                
                {/* Features */} 
                <ul className="space-y-2 mb-6"> 
                  {service.features.map((feature,featureIndex)=> ( 
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600"> 
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-success mr-2" /> 
                      {feature} 
                    </li> 
                  ))} 
                </ul> 
                
                {/* CTA Button */} 
                <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}> 
                  <Link to={service.buttonLink} className={`w-full ${service.buttonBg} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`} > 
                    <span>{service.buttonText}</span> 
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" /> 
                  </Link> 
                </motion.div> 
              </motion.div> 
            ))} 
          </div>
        </motion.div> 
        
        {/* Lead Magnet Tools Section */} 
        <motion.div id="assessments" className="text-center mb-12" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h3 className="text-3xl font-bold text-primary-dark mb-4"> 
            Interactive Security Tools & Assessments 
          </h3> 
          <p className="text-lg text-slate-600 max-w-3xl mx-auto"> 
            Access expert insights and strategic guidance with our comprehensive assessment tools designed for growing businesses
          </p> 
        </motion.div> 
        
        {/* Assessments Grid */} 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"> 
          {assessments.map((assessment,index)=> ( 
            <motion.div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: index * 0.1}} viewport={{once: true}} whileHover={{y: -8}} > 
              {/* Icon */} 
              <div className={`w-16 h-16 ${assessment.iconBg} rounded-xl flex items-center justify-center mb-6`}> 
                <SafeIcon icon={assessment.icon} className={`w-8 h-8 ${assessment.iconColor}`} /> 
              </div> 
              
              {/* Title */} 
              <h3 className="text-xl font-bold text-primary-dark mb-3"> 
                {assessment.title} 
              </h3> 
              
              {/* Description */} 
              <p className="text-slate-600 mb-4"> 
                {assessment.description} 
              </p> 
              
              {/* Features */} 
              <ul className="space-y-2 mb-6"> 
                {assessment.features.map((feature,featureIndex)=> ( 
                  <li key={featureIndex} className="flex items-center text-sm text-slate-600"> 
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-success mr-2" /> 
                    {feature} 
                  </li> 
                ))} 
              </ul> 
              
              {/* CTA Button */} 
              <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}}> 
                <Link to={assessment.buttonLink} className={`w-full ${assessment.buttonBg} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`} > 
                  <span>{assessment.buttonText}</span> 
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" /> 
                </Link> 
              </motion.div> 
            </motion.div> 
          ))} 
        </div> 
      </div> 
    </section> 
  );
};

export default Services;
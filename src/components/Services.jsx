import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {Link} from 'react-router-dom';

const {FiZap,FiShield,FiCloud,FiBot,FiCheck,FiArrowRight}=FiIcons;

const Services=()=> {
  const services=[ 
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
     title: 'Business Protection Strategy',
     description: 'Comprehensive security that protects your growth without limiting it',
     features: ['Multi-layered security architecture design','Automated compliance and risk management','Security strategy aligned with business objectives'],
     buttonText: 'Protect Your Growth',
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
     features: ['Technology readiness','Process automation','Growth potential'],
     buttonText: 'Identify Growth Bottlenecks',
     buttonLink: '/assessment',
     color: 'blue',
     bgColor: 'bg-blue-50',
     iconBg: 'bg-blue-100',
     iconColor: 'text-primary-blue',
     buttonBg: 'bg-primary-blue'},
    
    {icon: FiShield,
     title: 'Cybersecurity Risk Assessment',
     description: 'Detailed 25-question security evaluation across 5 domains',
     features: ['Email security','Network protection','Compliance status'],
     buttonText: 'Start Security Assessment',
     buttonLink: '/security-assessment',
     color: 'red',
     bgColor: 'bg-red-50',
     iconBg: 'bg-red-100',
     iconColor: 'text-primary-warning',
     buttonBg: 'bg-primary-warning'} 
  ];

  return ( 
    <section id="services" className="py-20 bg-primary-light"> 
      <div className="container mx-auto px-6"> 
        {/* Header */} 
        <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
            Complete Service Portfolio 
          </h2> 
          <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
            Everything your business needs to thrive in the digital age 
          </p> 
        </motion.div> 
        
        {/* Services Grid */} 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"> 
          {services.map((service,index)=> ( 
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
        
        {/* Assessments Section */} 
        <motion.div id="assessments" className="text-center mb-12" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h3 className="text-3xl font-bold text-primary-dark mb-4"> 
            Free Business Assessments 
          </h3> 
          <p className="text-lg text-slate-600 max-w-2xl mx-auto"> 
            Get detailed insights into your business readiness with our comprehensive assessments 
          </p> 
        </motion.div> 
        
        {/* Assessments Grid */} 
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> 
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
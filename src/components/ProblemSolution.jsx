import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiZap,FiShield,FiCpu,FiBuilding,FiGlobe,FiBot,FiCheckCircle,FiCloud,FiStar}=FiIcons;

const ProblemSolution=()=> {
  const problems=[ 
    {icon: FiZap,
     title: 'Digital Transformation Complexity',
     description: 'Technology decisions that worked at 20 employees break at 50+ - creating growth bottlenecks instead of enabling expansion'},
    
    {icon: FiShield,
     title: 'Cybersecurity Threats',
     description: 'Growing businesses become attractive targets but lack enterprise-grade protection - one incident could destroy everything you\'ve built'},
    
    {icon: FiCpu,
     title: 'Manual Processes',
     description: 'Manual processes that worked before become bottlenecks - your team spends time on repetitive tasks instead of growing the business'},
    
    {icon: FiBuilding,
     title: 'Multiple Vendors',
     description: 'Technology vendors that don\'t talk to each other - creating complexity, higher costs, and integration nightmares'},
    
    {icon: FiGlobe,
     title: 'Lack of Strategy',
     description: 'Reactive technology decisions instead of strategic planning - limiting your ability to scale and compete effectively'} 
  ];

  const solutions=[ 
    {icon: FiBot,
     title: 'RTILA AI Automation',
     description: 'Strategic consulting + cutting-edge business automation',
     badge: 'Master Agent',
     color: 'green'},
    
    {icon: FiShield,
     title: 'Complete Security',
     description: 'IRONSCALES + Check Point + Microsoft + Swif.ai protection',
     badge: '16,000+ Orgs',
     color: 'green'},
    
    {icon: FiCheckCircle,
     title: 'Compliance Automation',
     description: 'Vanta + Swif.ai automated SOC 2,HIPAA,ISO 27001',
     badge: '14 Days',
     color: 'green'},
    
    {icon: FiCloud,
     title: 'Cloud Infrastructure',
     description: 'Microsoft CSP + Pax8 marketplace + Intermedia',
     badge: 'Direct Support',
     color: 'green'},
    
    {icon: FiStar,
     title: 'Single Partner',
     description: 'Complete technology ecosystem through one relationship',
     badge: 'Integrated',
     color: 'green'} 
  ];

  return ( 
    <section id="solutions" className="py-20 bg-white"> 
      <div className="container mx-auto px-6"> 
        {/* Header */} 
        <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
            The Challenges Growing Businesses Face 
          </h2> 
          <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
            We solve the complex technology challenges that hold your business back 
          </p> 
        </motion.div> 
        
        {/* Problems Grid */} 
        <motion.div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: 0.2}} viewport={{once: true}} > 
          {problems.map((problem,index)=> ( 
            <motion.div key={index} className="bg-red-50 border border-red-200 rounded-xl p-6 text-center" initial={{opacity: 0,scale: 0.8}} whileInView={{opacity: 1,scale: 1}} transition={{duration: 0.5,delay: index * 0.1}} viewport={{once: true}} whileHover={{scale: 1.05}} > 
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"> 
                <SafeIcon icon={problem.icon} className="w-8 h-8 text-primary-warning" /> 
              </div> 
              <h3 className="font-semibold text-primary-dark mb-2">{problem.title}</h3> 
              <p className="text-sm text-slate-600">{problem.description}</p> 
            </motion.div> 
          ))} 
        </motion.div> 
        
        {/* Solution Header */} 
        <motion.div className="text-center mb-16" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6}} viewport={{once: true}} > 
          <h2 className="text-4xl font-bold text-primary-dark mb-4"> 
            Strategic Technology Solutions That Eliminate Growth Bottlenecks 
          </h2> 
          <p className="text-xl text-slate-600 max-w-3xl mx-auto"> 
            Comprehensive strategic consulting that transforms technology from growth barrier into competitive advantage 
          </p> 
        </motion.div> 
        
        {/* Solutions Grid */} 
        <motion.div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{duration: 0.6,delay: 0.2}} viewport={{once: true}} > 
          {solutions.map((solution,index)=> ( 
            <motion.div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6 text-center" initial={{opacity: 0,scale: 0.8}} whileInView={{opacity: 1,scale: 1}} transition={{duration: 0.5,delay: index * 0.1}} viewport={{once: true}} whileHover={{scale: 1.05}} > 
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"> 
                <SafeIcon icon={solution.icon} className="w-8 h-8 text-primary-success" /> 
              </div> 
              <h3 className="font-semibold text-primary-dark mb-2">{solution.title}</h3> 
              <p className="text-sm text-slate-600 mb-3">{solution.description}</p> 
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium"> 
                {solution.badge} 
              </span> 
            </motion.div> 
          ))} 
        </motion.div> 
      </div> 
    </section> 
  );
};

export default ProblemSolution;
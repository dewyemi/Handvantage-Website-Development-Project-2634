import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import {Link} from 'react-router-dom';

const {FiCheckCircle,FiExternalLink,FiLinkedin,FiArrowRight}=FiIcons;

const About=()=> {
  const credentials=[ 
    'Former Amazon Security Consultant',
    'Former Oracle Technology Consultant',
    'Former AWS Security Consultant',
    'MSP Owner with hands-on experience',
    'Advanced Business Automation Expert',
    'Cloud Infrastructure Specialist' 
  ];

  return ( 
    <section id="about" className="py-20 bg-white"> 
      <div className="container mx-auto px-6"> 
        <div className="grid lg:grid-cols-2 gap-12 items-center"> 
          {/* Left Column - Content */} 
          <motion.div className="space-y-8" initial={{opacity: 0,x: -50}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
            {/* Badge */} 
            <motion.div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold" initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.2}} viewport={{once: true}} > 
              Your Digital Transformation Expert 
            </motion.div> 
            {/* Title */} 
            <motion.h2 className="text-4xl font-bold text-primary-dark" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.3}} viewport={{once: true}} > 
              Meet Josh Olayemi 
            </motion.h2> 
            {/* Subtitle */} 
            <motion.p className="text-xl text-slate-600" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.4}} viewport={{once: true}} > 
              VP of Digital Transformation with 20+ years of complete technology expertise 
            </motion.p> 
            {/* Credentials */} 
            <motion.div className="space-y-4" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.5}} viewport={{once: true}} > 
              {credentials.map((credential,index)=> ( 
                <motion.div key={index} className="flex items-center space-x-3" initial={{opacity: 0,x: -20}} whileInView={{opacity: 1,x: 0}} transition={{delay: 0.6 + index * 0.1}} viewport={{once: true}} > 
                  <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-primary-success" /> 
                  <span className="text-gray-700">{credential}</span> 
                </motion.div> 
              ))} 
            </motion.div> 
            {/* CTA Buttons */} 
            <motion.div className="flex flex-col sm:flex-row gap-4" initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.8}} viewport={{once: true}} > 
              <motion.a href="https://handvantage.co/contact" target="_blank" rel="noopener noreferrer" className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300" whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} > 
                Schedule Call with Josh 
              </motion.a> 
              <Link to="/about" className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary-blue hover:text-primary-blue transition-colors duration-300" > 
                <span>Learn More About Josh</span> 
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" /> 
              </Link> 
            </motion.div> 
          </motion.div> 
          {/* Right Column - Profile */} 
          <motion.div className="text-center" initial={{opacity: 0,x: 50}} whileInView={{opacity: 1,x: 0}} transition={{duration: 0.8}} viewport={{once: true}} > 
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8"> 
              {/* Profile Image */} 
              <motion.div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg" initial={{scale: 0.8,opacity: 0}} whileInView={{scale: 1,opacity: 1}} transition={{delay: 0.3}} viewport={{once: true}} > 
                <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844826077-Olayemi-profile2-2023-jpg.webp" alt="Josh Olayemi" className="w-full h-full object-cover" /> 
              </motion.div> 
              {/* Profile Info */} 
              <motion.div initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} transition={{delay: 0.5}} viewport={{once: true}} > 
                <h3 className="text-2xl font-bold text-primary-dark mb-2">Josh Olayemi</h3> 
                <p className="text-slate-600 mb-4">VP of Digital Transformation</p> 
                <blockquote className="text-sm text-gray-600 italic"> 
                  "Growing businesses need more than cybersecurity - they need complete digital transformation." 
                </blockquote> 
              </motion.div> 
            </div> 
          </motion.div> 
        </div> 
      </div> 
    </section> 
  );
};

export default About;
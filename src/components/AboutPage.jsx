import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const {FiCheckCircle,FiExternalLink,FiLinkedin,FiUser,FiShield,FiZap,FiHeart,FiCloud,FiDatabase,FiStar,FiBuilding,FiPhone,FiMail,FiMapPin}=FiIcons;

const AboutPage=()=> {
  // Career timeline data
  const careerTimeline=[ 
    {
      company: 'Amazon Security Consultant',
      period: 'Enterprise Security Solutions',
      icon: FiShield,
      iconBg: '#ff9500',
      description: `Josh career span across Finance, Utility, Telecoms, Service Provider, Government and top Tech companies like Amazon and Oracle, working on enterprise-scale IT, security implementations and multi million dollars Digital Transformation projects. This experience taught him how to design and deploy technologies and security solutions that accelerate business growth and protect massive, complex infrastructures while maintaining operational efficiency.`,
      achievements: [
        'Designed security architectures for enterprise clients',
        'Implemented multi-layered security strategies', 
        'Gained deep understanding of enterprise security challenges',
        'Learned to balance security with business operations'
      ]
    },
    {
      company: 'Oracle Technology Consultant',
      period: 'Business Technology Solutions',
      icon: FiDatabase,
      iconBg: '#f80000',
      description: `At Oracle, Josh expanded his expertise beyond security into complete business technology solutions. He learned how to align technology investments with business objectives and drive digital transformation initiatives.`,
      achievements: [
        'Implemented enterprise software solutions',
        'Designed technology roadmaps for business growth',
        'Developed expertise in database and application security',
        'Learned to translate business needs into technical solutions'
      ]
    },
    {
      company: 'AWS Security Consultant',
      period: 'Cloud Transformation & Security',
      icon: FiCloud,
      iconBg: '#ff9900',
      description: `Josh's role at AWS positioned him at the forefront of cloud transformation. He helped businesses migrate to the cloud while maintaining security and compliance, giving him deep expertise in modern cloud architectures.`,
      achievements: [
        'Led cloud migration and security projects',
        'Specialized in AWS security services and compliance',
        'Helped businesses transform their IT infrastructure',
        'Gained expertise in scalable, cloud-native solutions'
      ]
    },
    {
      company: 'MSP Owner & Operator',
      period: 'Hands-On Business Experience',
      icon: FiBuilding,
      iconBg: '#16a34a',
      description: `Josh took his enterprise expertise and applied it to the real world by starting and operating his own Managed Service Provider. This experience taught him the challenges that growing businesses face and how to deliver enterprise-grade solutions at SME scale.`,
      achievements: [
        'Built and operated successful MSP business',
        'Served 50+ growing businesses with complete IT solutions',
        'Learned the unique challenges of SME technology needs',
        'Developed efficient service delivery methodologies'
      ]
    },
    {
      company: 'VP of Digital Transformation',
      period: 'Complete Technology Leadership',
      icon: FiStar,
      iconBg: '#7c3aed',
      description: `Today, Josh combines all his experience as VP of Digital Transformation at Handvantage. He brings together enterprise expertise, cloud transformation knowledge, security specialization, and real-world business experience to help companies achieve complete digital transformation.`,
      achievements: [
        'Strategic digital transformation consulting',
        'Enterprise partnership development (Microsoft, RTILA AI, Check Point)',
        'Business automation and AI implementation',
        'Complete technology ecosystem design'
      ]
    }
  ];

  // Partnership categories
  const partnershipCategories=[ 
    {
      title: 'Transformation Partners',
      icon: FiZap,
      color: '#2563eb',
      partners: [
        {
          name: 'Microsoft Cloud Solution Provider',
          description: 'Direct access to Microsoft 365, Azure, and enterprise solutions'
        },
        {
          name: 'RTILA AI Master Agent',
          description: 'Cutting-edge business automation and AI implementation'
        },
        {
          name: 'Pax8 Partner',
          description: 'Cloud marketplace preferred by MSPs globally'
        }
      ]
    },
    {
      title: 'Security & Compliance Partners',
      icon: FiShield,
      color: '#dc2626',
      partners: [
        {
          name: 'IRONSCALES Partner',
          description: 'Email security protecting 16,000+ organizations worldwide'
        },
        {
          name: 'Check Point Certified',
          description: 'Next-generation firewall and network security solutions'
        },
        {
          name: 'Vanta Specialist',
          description: 'Automated compliance for SOC 2, HIPAA, ISO 27001'
        },
        {
          name: 'Swif.ai Partner',
          description: 'AI-powered device management and Shadow IT visibility'
        }
      ]
    },
    {
      title: 'Infrastructure Partners',
      icon: FiCloud,
      color: '#16a34a',
      partners: [
        {
          name: 'Intermedia Partner',
          description: 'Unified communications and VoIP solutions'
        },
        {
          name: 'Additional Cloud Partners',
          description: 'Access to 200+ solutions through strategic partnerships'
        },
        {
          name: 'Direct Vendor Relationships',
          description: 'Preferred pricing and support for all solutions'
        }
      ]
    }
  ];

  // Process steps
  const processSteps=[ 
    {
      number: '01',
      title: 'Assess',
      color: '#2563eb',
      description: 'Complete Technology Audit',
      details: 'We analyze your current technology stack, security posture, and business processes to identify transformation opportunities and risks.',
      items: [
        'Infrastructure assessment',
        'Security vulnerability analysis',
        'Process automation opportunities',
        'Compliance gap identification'
      ]
    },
    {
      number: '02',
      title: 'Design',
      color: '#16a34a',
      description: 'Strategic Roadmap Creation',
      details: 'Based on your assessment, we design a comprehensive digital transformation roadmap using our enterprise partnerships.',
      items: [
        'Technology architecture design',
        'Partnership solution mapping',
        'Implementation timeline',
        'ROI projections and milestones'
      ]
    },
    {
      number: '03',
      title: 'Implement',
      color: '#f59e0b',
      description: 'Phased Deployment',
      details: 'We implement solutions in carefully planned phases, minimizing disruption while maximizing impact through our partner ecosystem.',
      items: [
        'Microsoft 365 & Azure deployment',
        'Security solution implementation',
        'Automation platform setup',
        'Staff training and change management'
      ]
    },
    {
      number: '04',
      title: 'Optimize',
      color: '#7c3aed',
      description: 'Continuous Improvement',
      details: 'We monitor, measure, and optimize your technology ecosystem for maximum performance and ROI.',
      items: [
        'Performance monitoring',
        'Security posture management',
        'Process optimization',
        'Strategic technology planning'
      ]
    }
  ];

  return (
    <>
      <SEOHead {...seoConfig.about} />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-light to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Professional Photo */}
              <motion.div
                className="text-center lg:text-left"
                initial={{opacity: 0,y: 20}}
                whileInView={{opacity: 1,y: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <motion.div
                    className="w-64 h-64 mx-auto mb-6 bg-gradient-to-r from-primary-blue to-primary-purple rounded-2xl overflow-hidden"
                    initial={{scale: 0.9,opacity: 0}}
                    whileInView={{scale: 1,opacity: 1}}
                    transition={{delay: 0.2}}
                    viewport={{once: true}}
                  >
                    <img
                      src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753844826077-Olayemi-profile2-2023-jpg.webp"
                      alt="Josh Olayemi - VP of Digital Transformation with 20+ years experience"
                      className="w-full h-full object-cover"
                      loading="eager"
                      width="256"
                      height="256"
                    />
                  </motion.div>
                  <motion.div
                    initial={{opacity: 0,y: 20}}
                    whileInView={{opacity: 1,y: 0}}
                    transition={{delay: 0.4}}
                    viewport={{once: true}}
                  >
                    <h1 className="text-3xl font-bold text-primary-dark mb-2">Josh Olayemi</h1>
                    <p className="text-xl text-primary-blue font-semibold mb-2">VP of Digital Transformation</p>
                    <p className="text-slate-600">20+ Years Technology Leadership</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column - Introduction Content */}
              <motion.div
                className="space-y-8"
                initial={{opacity: 0,x: 30}}
                whileInView={{opacity: 1,x: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
              >
                <motion.div
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
                  initial={{opacity: 0,y: 20}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{delay: 0.3}}
                  viewport={{once: true}}
                >
                  Meet Your Digital Transformation Expert
                </motion.div>

                <motion.header
                  className="text-4xl lg:text-5xl font-bold text-primary-dark leading-tight"
                  initial={{opacity: 0,y: 20}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{delay: 0.4}}
                  viewport={{once: true}}
                >
                  <h2>The Complete Technology Expert You've Been Looking For</h2>
                </motion.header>

                <motion.div
                  className="text-lg text-slate-600 space-y-4"
                  initial={{opacity: 0,y: 20}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{delay: 0.5}}
                  viewport={{once: true}}
                >
                  <p>
                    Josh isn't just another IT consultant — he's a complete digital transformation expert with over 20 years of experience helping businesses leverage technology for growth.
                  </p>
                  <p>
                    From enterprise-scale implementations at Amazon, Oracle, and AWS to hands-on experience as an MSP owner serving growing businesses, Josh brings a unique combination of strategic vision and practical execution that's rare in the industry.
                  </p>
                </motion.div>

                <motion.div
                  className="space-y-6"
                  initial={{opacity: 0,y: 20}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{delay: 0.6}}
                  viewport={{once: true}}
                >
                  {/* Differentiator 1 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-green-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-primary-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Enterprise Experience, SME Understanding</h3>
                      <p className="text-slate-600">Worked at Amazon, Oracle, AWS + owned an MSP serving growing businesses</p>
                    </div>
                  </div>

                  {/* Differentiator 2 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-green-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-primary-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Complete Technology Expertise</h3>
                      <p className="text-slate-600">Not just cybersecurity — full digital transformation, automation, and strategic consulting</p>
                    </div>
                  </div>

                  {/* Differentiator 3 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-green-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-primary-success" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Proven Partnership Strategy</h3>
                      <p className="text-slate-600">Master Agent and certified partner relationships delivering enterprise-grade solutions</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-4"
                  initial={{opacity: 0,y: 20}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{delay: 0.7}}
                  viewport={{once: true}}
                >
                  <motion.a
                    href="https://handvantage.co/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    aria-label="Schedule Strategy Call with Josh Olayemi"
                  >
                    Schedule Strategy Call
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/josh-olayemi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-semibold hover:bg-primary-blue hover:text-white transition-colors duration-300"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    aria-label="View Josh Olayemi LinkedIn Profile"
                  >
                    <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                    <span>View LinkedIn Profile</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4 ml-1" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Journey Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6}}
              viewport={{once: true}}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-4">
                Josh's Journey: From Enterprise to Entrepreneurship
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A unique path that combines enterprise-scale expertise with hands-on business experience
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline connecting line (visible on medium screens and up) */}
              <div className="absolute left-[40px] top-0 bottom-0 w-1 bg-gradient-to-b from-primary-blue to-primary-purple hidden md:block"></div>

              {/* Timeline Items */}
              {careerTimeline.map((item,index)=> (
                <motion.article
                  key={index}
                  className="mb-16 last:mb-0 md:pl-24"
                  initial={{opacity: 0,y: 50}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: index * 0.1}}
                  viewport={{once: true}}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Timeline Icon (always visible, but positioned differently on mobile) */}
                    <div className="flex md:block">
                      <div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center flex-shrink-0 md:absolute md:left-0"
                        style={{backgroundColor: item.iconBg}}
                      >
                        <SafeIcon icon={item.icon} className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <div className="ml-4 md:ml-0">
                        <h3 className="text-2xl font-bold text-primary-dark md:hidden">{item.company}</h3>
                        <p className="text-lg font-medium" style={{color: item.iconBg}}>{item.period}</p>
                      </div>
                    </div>

                    {/* Timeline Content */}
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100">
                      <h3 className="text-2xl font-bold text-primary-dark mb-3 hidden md:block">{item.company}</h3>
                      <p className="text-slate-600 mb-6">{item.description}</p>
                      <h4 className="font-bold text-primary-dark mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement,i)=> (
                          <li key={i} className="flex items-start">
                            <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary-success mr-2 mt-0.5" />
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Strategy Section */}
        <section className="py-20 bg-primary-light">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6}}
              viewport={{once: true}}
            >
              <h2 className="text-4xl font-bold text-primary-dark mb-4">
                Why Josh Built a Partnership-First Strategy
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Instead of being just another reseller, Josh became a strategic partner with industry leaders
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto mb-16"
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6,delay: 0.2}}
              viewport={{once: true}}
            >
              <div className="bg-white rounded-xl p-8 border-l-4 border-primary-blue shadow-lg relative">
                <div className="absolute -top-4 -left-4 text-8xl font-serif text-primary-blue opacity-20">"</div>
                <blockquote className="text-lg text-slate-600 italic relative z-10">
                  "After working at Amazon, Oracle, and AWS, then running my own MSP, I realized that growing businesses don't need another vendor — they need a trusted technology partner who can provide access to the best solutions in the market.
                  <br /><br />
                  That's why I didn't just start another IT company. I built strategic partnerships with industry leaders so I can offer my clients the same enterprise-grade solutions I implemented at Fortune 500 companies, but with the personal attention and understanding they get from someone who's been in their shoes."
                </blockquote>
                <cite className="text-right text-primary-blue font-semibold mt-4 block">
                  — Josh Olayemi, VP of Digital Transformation
                </cite>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipCategories.map((category,index)=> (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: 0.3 + index * 0.1}}
                  viewport={{once: true}}
                  whileHover={{y: -8}}
                >
                  <SafeIcon icon={category.icon} className="w-16 h-16 mb-6" style={{color: category.color}} />
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">{category.title}</h3>
                  <div className="space-y-4">
                    {category.partners.map((partner,i)=> (
                      <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                        <h4 className="font-bold text-primary-dark mb-1">{partner.name}</h4>
                        <p className="text-sm text-slate-600">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Handvantage Difference Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Why Different */}
              <motion.div
                className="space-y-8"
                initial={{opacity: 0,x: -30}}
                whileInView={{opacity: 1,x: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
              >
                <h2 className="text-4xl font-bold text-primary-dark">
                  What Makes Handvantage Different
                </h2>

                <div className="text-lg text-slate-600 space-y-4">
                  <p>
                    Most IT companies are either:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="text-primary-warning mr-2">•</span>
                      <span><strong>Large enterprises</strong> that treat you like a number</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-warning mr-2">•</span>
                      <span><strong>Small providers</strong> without enterprise-grade solutions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-warning mr-2">•</span>
                      <span><strong>Single-vendor shops</strong> with limited options</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-primary-warning mr-2">•</span>
                      <span><strong>Generalists</strong> without deep expertise</span>
                    </li>
                  </ul>
                  <p>
                    Handvantage is different. We combine enterprise expertise with personal attention, offering complete digital transformation through proven partnerships.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Value Prop 1 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiUser} className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">20+ Years Enterprise Experience</h3>
                      <p className="text-slate-600">Amazon, Oracle, AWS background + MSP ownership experience</p>
                    </div>
                  </div>

                  {/* Value Prop 2 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Proven Partnership Strategy</h3>
                      <p className="text-slate-600">Master Agent and certified relationships, not just reseller agreements</p>
                    </div>
                  </div>

                  {/* Value Prop 3 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiZap} className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Complete Digital Transformation</h3>
                      <p className="text-slate-600">Security + Automation + Cloud + Compliance in one integrated approach</p>
                    </div>
                  </div>

                  {/* Value Prop 4 */}
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-blue-100 rounded-full flex-shrink-0">
                      <SafeIcon icon={FiHeart} className="w-6 h-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-primary-dark">Personal Attention at Scale</h3>
                      <p className="text-slate-600">Enterprise solutions with the personal service of a trusted advisor</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Results & Proof */}
              <motion.div
                initial={{opacity: 0,x: 30}}
                whileInView={{opacity: 1,x: 0}}
                transition={{duration: 0.8}}
                viewport={{once: true}}
              >
                <div className="bg-primary-light rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-primary-dark text-center mb-8">
                    The Results Speak for Themselves
                  </h3>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {/* Stat 1 */}
                    <motion.div
                      className="bg-white rounded-xl p-6 text-center"
                      whileHover={{y: -5}}
                      transition={{duration: 0.2}}
                    >
                      <p className="text-4xl font-bold text-primary-blue mb-2">20+</p>
                      <p className="text-slate-600">Years Experience</p>
                    </motion.div>

                    {/* Stat 2 */}
                    <motion.div
                      className="bg-white rounded-xl p-6 text-center"
                      whileHover={{y: -5}}
                      transition={{duration: 0.2}}
                    >
                      <p className="text-4xl font-bold text-primary-success mb-2">8</p>
                      <p className="text-slate-600">Enterprise Partnerships</p>
                    </motion.div>

                    {/* Stat 3 */}
                    <motion.div
                      className="bg-white rounded-xl p-6 text-center"
                      whileHover={{y: -5}}
                      transition={{duration: 0.2}}
                    >
                      <p className="text-4xl font-bold text-primary-purple mb-2">100%</p>
                      <p className="text-slate-600">Client Satisfaction</p>
                    </motion.div>

                    {/* Stat 4 */}
                    <motion.div
                      className="bg-white rounded-xl p-6 text-center"
                      whileHover={{y: -5}}
                      transition={{duration: 0.2}}
                    >
                      <p className="text-4xl font-bold text-[#f59e0b] mb-2">24/7</p>
                      <p className="text-slate-600">Support Available</p>
                    </motion.div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white rounded-xl p-6">
                    <blockquote className="text-slate-600 italic text-center mb-4">
                      "Josh's combination of enterprise experience and personal attention is exactly what our growing business needed. He didn't just sell us solutions — he became our strategic technology partner."
                    </blockquote>
                    <cite className="text-slate-500 text-center text-sm block">
                      — Technology Director, Growing SaaS Company
                    </cite>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 bg-primary-dark text-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{opacity: 0,y: 30}}
              whileInView={{opacity: 1,y: 0}}
              transition={{duration: 0.6}}
              viewport={{once: true}}
            >
              <h2 className="text-4xl font-bold mb-4">
                Our Proven 4-Step Approach
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                How we transform your business through strategic technology partnerships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step,index)=> (
                <motion.div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-8 relative"
                  initial={{opacity: 0,y: 50}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: 0.2 + index * 0.1}}
                  viewport={{once: true}}
                  whileHover={{y: -8}}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{backgroundColor: step.color}}
                  >
                    <p className="text-2xl font-bold">{step.number}</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-center font-medium text-blue-300 mb-4">{step.description}</p>
                  <p className="text-slate-300 mb-4 text-center">{step.details}</p>
                  <ul className="space-y-2">
                    {step.items.map((item,i)=> (
                      <li key={i} className="flex items-center">
                        <span className="mr-2 text-xl" style={{color: step.color}}>•</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Work Together Section */}
        <section className="py-20 bg-gradient-to-r from-primary-blue to-primary-purple text-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Left Column - CTA Content */}
              <div className="lg:col-span-3 space-y-8">
                <motion.h2
                  className="text-4xl font-bold"
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6}}
                  viewport={{once: true}}
                >
                  Ready to Transform Your Business?
                </motion.h2>

                <motion.div
                  className="text-lg space-y-4 text-blue-100"
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: 0.1}}
                  viewport={{once: true}}
                >
                  <p>
                    Let's discuss how Josh's 20+ years of experience and our enterprise partnerships can accelerate your digital transformation.
                  </p>
                  <div>
                    <p className="font-semibold mb-2">What you'll get in our strategy call:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>Complete technology assessment</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>Partnership solution recommendations</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>Custom transformation roadmap</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">•</span>
                        <span>ROI projections and timeline</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4"
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: 0.2}}
                  viewport={{once: true}}
                >
                  <motion.a
                    href="https://handvantage.co/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white text-primary-blue px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-300"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    aria-label="Schedule Your Strategy Call with Josh Olayemi"
                  >
                    Schedule Your Strategy Call
                  </motion.a>
                  <motion.a
                    href="tel:+12362350919"
                    className="flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white hover:text-primary-blue transition-colors duration-300"
                    whileHover={{scale: 1.02}}
                    whileTap={{scale: 0.98}}
                    aria-label="Call Josh Directly at 236-235-0919"
                  >
                    <SafeIcon icon={FiPhone} className="w-5 h-5" />
                    <span>Call Josh Directly: 236-235-0919</span>
                  </motion.a>
                </motion.div>
              </div>

              {/* Right Column - Contact Info */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  transition={{duration: 0.6,delay: 0.3}}
                  viewport={{once: true}}
                >
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <address className="space-y-6 not-italic">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                      <a href="tel:+12362350919" className="hover:underline">+1 236-235-0919</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                      <span>Vancouver, BC Canada</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiLinkedin} className="w-6 h-6 text-white" />
                      <a
                        href="https://linkedin.com/in/josh-olayemi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/josh-olayemi
                      </a>
                    </div>
                  </address>
                  <p className="text-blue-100 text-center mt-6 text-sm">
                    Available for calls Monday-Friday, 9 AM - 6 PM PST
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
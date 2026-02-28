import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';

const { FiPlus, FiMinus, FiArrowRight } = FiIcons;

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-800 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-xl font-bold transition-colors pr-4 ${isOpen ? 'text-viability-primary' : 'text-white group-hover:text-viability-primary'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-10 h-10 sharp-edges flex items-center justify-center transition-all ${isOpen ? 'bg-viability-primary text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-viability-primary/20 group-hover:text-viability-primary'}`}>
                    <SafeIcon icon={isOpen ? FiMinus : FiPlus} className="w-5 h-5" />
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-lg text-slate-300 leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        // --- Security / Pilot Side ---
        {
            question: "Do you replace my IT team?",
            answer: "No. We liberate them. We handle the 24/7 monitoring, threat response, and grunt work so they can focus on strategic projects that actually move the business forward. We make your IT team look like heroes."
        },
        {
            question: "Do I need to switch my EDR or security tools?",
            answer: "Likely not. We are vendor-agnostic and support the tools you already own — CrowdStrike, SentinelOne, Microsoft Defender, Vanta, Drata, and more. We fly the jet you already have. If your current stack has gaps or dead weight (Shelf-Ware), we will tell you honestly and help you cut it."
        },
        {
            question: "How is this different from a traditional MSP?",
            answer: "MSPs fix printers and forward alerts by email. We are a specialized Security Operations unit — the equivalent of Special Forces, not a general helpdesk. We don't just monitor; we hunt, isolate, remediate, and report. Our 15-minute response SLA is guaranteed, not aspirational."
        },
        {
            question: "Who is watching the screen at 3 AM on Christmas?",
            answer: "We are. This is the exact question most companies can't answer — and it's the question that keeps CISOs awake at night. Our team operates 24/7/365. There is no \"after hours\" when it comes to threats. If your EDR fires an alert at 3 AM on December 25th, we are on it."
        },
        // --- AI Fleet Side ---
        {
            question: "What does an AI agent actually do day-to-day?",
            answer: "Each agent has a specific mission. The Hunter finds and qualifies leads, writes personalized outreach, and books meetings autonomously. The Sentry reads every log, monitors compliance posture, and preps audit evidence automatically. The Concierge triages and resolves IT support tickets — password resets, access provisioning, and more — in under a minute. They run 24/7 without breaks, burnout, or bias."
        },
        {
            question: "How is the AI fleet different from just using ChatGPT?",
            answer: "ChatGPT is a tool that requires a human to operate it. Our agents are autonomous workers — they are integrated into your systems, given a mission, and they execute it continuously without human prompting. Think of the difference between hiring a professional driver and handing someone a car manual. One delivers outcomes; the other requires your attention."
        },
        {
            question: "Is our data secure when AI agents access our systems?",
            answer: "Security is core to everything we do. All agent access is role-scoped, logged, and auditable. We follow the principle of least privilege — agents only access what they need for their specific mission. Full audit trails are available at any time, and all data handling meets enterprise security standards."
        },
        // --- Pricing / Business ---
        {
            question: "How does pricing work?",
            answer: "We structure pricing as a fraction of what you'd pay for an internal hire. The benchmark: a single qualified security hire costs $180,000+/year in salary alone — before benefits, training, and churn. Our service starts significantly below that and includes a full specialist team, not one person. Use our ROI Calculator to see your specific numbers."
        },
        {
            question: "How long does onboarding take?",
            answer: "Most clients are operational within 2 weeks. We conduct a discovery session to map your existing stack, configure our agents to your environment, and run a parallel monitoring period before full handover. We do not require rip-and-replace migrations — we layer on top of what you have."
        }
    ];

    return (
        <>
            <SEOHead
                title="FAQ - Clearing The Air | Handvantage"
                description="Answers to common questions about Handvantage's Managed Security, AI Workforce agents, pricing, and onboarding. Pilot + Fleet. 24/7. Vendor Agnostic."
            />

            <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Header */}
                        <div className="text-center mb-16">
                            <p className="text-viability-primary font-mono text-sm uppercase tracking-widest mb-6">
                                OBJECTION KILLERS
                            </p>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                                CLEARING THE AIR.
                            </h1>
                            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                                Every question you have. Answered directly. No fluff.
                            </p>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-slate-900 sharp-edges p-8 md:p-12 border border-slate-800">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={index === openIndex}
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                />
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            className="mt-16 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <p className="text-slate-500 font-mono text-sm uppercase tracking-widest mb-6">
                                Still not convinced? Let's talk.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="https://handvantage.co/contact"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-viability-primary text-white font-bold sharp-edges hover:bg-viability-glow transition-colors"
                                >
                                    Book The Briefing
                                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                                </a>
                                <Link
                                    to="/roi-calculator"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-signal/40 text-signal font-bold sharp-edges hover:bg-signal hover:text-void transition-all"
                                >
                                    Calculate My Savings
                                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FAQPage;

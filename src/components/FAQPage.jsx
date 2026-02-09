import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';

const { FiPlus, FiMinus } = FiIcons;

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-800 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-viability-primary' : 'text-white group-hover:text-viability-primary'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-10 h-10 sharp-edges flex items-center justify-center transition-all ${isOpen ? 'bg-viability-primary text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-viability-primary/20 group-hover:text-viability-primary'}`}>
                    <SafeIcon icon={isOpen ? FiMinus : FiPlus} className="w-5 h-5" />
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-8 text-xl text-slate-300 leading-relaxed max-w-3xl">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "Do you replace my IT team?",
            answer: "No. We liberate them. We handle the 24/7 monitoring and grunt work so they can focus on strategic projects."
        },
        {
            question: "Do I need to switch my EDR?",
            answer: "Likely not. We support CrowdStrike, SentinelOne, Defender, and more. We fly the jet you already own."
        },
        {
            question: "How is this different from an MSP?",
            answer: "MSPs fix printers. We hunt hackers. We are a specialized Security Operations unit, not a general IT helpdesk."
        }
    ];

    return (
        <>
            <SEOHead
                title="FAQ - Common Questions | Handvantage"
                description="Common questions about Handvantage services. Do you replace my IT team? Do I need to switch my EDR? How is this different from an MSP?"
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
                                COMMON QUESTIONS
                            </p>
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                                FAQ
                            </h1>
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
                                Still have questions?
                            </p>
                            <a
                                href="https://handvantage.co/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-8 py-4 bg-viability-primary text-white font-bold sharp-edges hover:bg-viability-glow transition-colors"
                            >
                                Book The Briefing
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FAQPage;

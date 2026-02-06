import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const { FiPlus, FiMinus, FiHelpCircle } = FiIcons;

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
                <div className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-viability-primary text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-viability-primary/20 group-hover:text-viability-primary'}`}>
                    <SafeIcon icon={isOpen ? FiMinus : FiPlus} className="w-5 h-5" />
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <div className="pb-8 text-xl text-slate-300 leading-relaxed max-w-3xl">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

const FAQPage = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "\"Do you replace my IT team?\"",
            answer: (
                <>
                    <strong className="text-viability-glow">No. We liberate them.</strong> We take the "Night Watch" and the "Grunt Work" so they can focus on strategic projects. <strong className="text-white">We make them look like heroes.</strong>
                </>
            )
        },
        {
            question: "\"Do I need to switch tools?\"",
            answer: (
                <>
                    <strong className="text-viability-glow">Rarely.</strong> We are agnostic. We likely support what you already have. If you are using "Shelf-Ware," we will help you cut it.
                </>
            )
        },
        {
            question: "\"Are you an MSP?\"",
            answer: (
                <>
                    <strong className="text-viability-glow">No.</strong> An MSP fixes printers and forwards emails. We are a <strong className="text-white">Service Layer.</strong> We are the <strong className="text-white">Special Forces</strong> that handle the high-stakes operations (Security & Automation).
                </>
            )
        }
    ];

    return (
        <>
            <SEOHead title="FAQ - Clearing The Air | Handvantage" description="Objection Killers. The things you are thinking but haven't asked." />

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
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                                CLEARING THE AIR.
                            </h1>
                            <p className="text-xl text-slate-400 font-light">
                                Objection Killers. The things you are thinking but haven't asked.
                            </p>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800">
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
                                className="inline-flex items-center px-8 py-4 bg-viability-primary text-white font-bold rounded-full hover:bg-viability-glow transition-colors"
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

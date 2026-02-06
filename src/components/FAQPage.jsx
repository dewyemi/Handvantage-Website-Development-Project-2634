import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const { FiPlus, FiMinus, FiHelpCircle } = FiIcons;

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-slate-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-viability-primary' : 'text-slate-800 group-hover:text-viability-primary'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-viability-primary text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-viability-primary/10 group-hover:text-viability-primary'}`}>
                    <SafeIcon icon={isOpen ? FiMinus : FiPlus} className="w-5 h-5" />
                </div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
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
            answer: "No. We liberate them. We take the \"Night Watch\" and the \"Grunt Work\" so they can focus on strategic projects. We make them look like heroes."
        },
        {
            question: "Do I need to switch tools?",
            answer: "Rarely. We are agnostic. We likely support what you already have. If you are using \"Shelf-Ware,\" we will help you cut it."
        },
        {
            question: "Are you an MSP?",
            answer: "No. An MSP fixes printers and forwards emails. We are a Service Layer. We are the Special Forces that handle the high-stakes operations (Security & Automation)."
        }
    ];

    return (
        <>
            <SEOHead title="FAQ - Clearing The Air | Handvantage" description="Common questions about the Handvantage service model." />

            <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Header */}
                        <div className="text-center mb-16">
                            <div className="w-16 h-16 bg-viability-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <SafeIcon icon={FiHelpCircle} className="w-8 h-8 text-viability-primary" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-primary-dark mb-6 tracking-tight">
                                CLEARING THE AIR.
                            </h1>
                            <p className="text-xl text-slate-500">
                                Objection Killers. The things you are thinking but haven't asked.
                            </p>
                        </div>

                        {/* FAQ Accordion */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
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
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default FAQPage;

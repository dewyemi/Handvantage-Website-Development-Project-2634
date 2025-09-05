import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const TermsConditionsPage = () => {
  return (
    <>
      <SEOHead {...seoConfig.termsConditions} />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-primary-light to-blue-50">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-primary-dark mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl text-slate-600">
              By using our website and services, including text messaging, you agree to these terms.
            </p>
          </motion.header>

          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-700 mb-6">
                These Terms and Conditions govern your use of Handvantage website and our services. If you disagree, please do not use our website or services.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">2. Using Our Website</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Age Restriction:</strong> You must be at least 18 years old to use our website and services, including text messaging.</li>
                <li><strong>Legal Use Only:</strong> You may not use our website or text messaging for any illegal or unauthorised purpose. You must obey all relevant laws.</li>
                <li><strong>Changes:</strong> We may modify, stop, or remove any part of our website, services, or content without notice.</li>
                <li><strong>Your Responsibility:</strong> You are responsible for how you use any information or materials from our website, including text messages. We are not liable for any issues that arise.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">3. Intellectual Property</h2>
              <p className="text-slate-700 mb-6">
                All text, images, logos, software, videos, and text message content on our website are protected by copyright and other laws. You may not copy, distribute, change, or use any of our content without our written permission.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">4. Privacy</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Privacy Policy:</strong> Our Privacy Policy explains how we collect, use, and protect your data, including information you share through text messages. By using our website and text messaging, you agree to our Privacy Policy.</li>
                <li><strong>No Data Sharing:</strong> We do not share or sell your personal information, including the content of your text messages.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">5. No Guarantees</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Information:</strong> Information on our website is for general knowledge only. We do not guarantee it is accurate, complete, or reliable.</li>
                <li><strong>No Liability:</strong> We are not responsible for any losses or problems that may occur from using our website, text messaging services, or any information they provide.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">6. Other Websites</h2>
              <p className="text-slate-700 mb-6">
                We may link to third-party websites. We are not responsible for their content or how they handle your data. Use them at your own risk.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-slate-700 mb-6">
                As allowed by law, Handvantage is not liable for any damages (direct, indirect, or otherwise) caused by using our website, services, or text messaging.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">8. Your Responsibility to Protect Us</h2>
              <p className="text-slate-700 mb-6">
                You will protect Handvantage including its officers, directors, employees, and affiliates, from any claims, losses, or expenses (including legal costs) arising from your use of our website or if you break these Terms and Conditions.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">9. Laws and Disputes</h2>
              <p className="text-slate-700 mb-6">
                These Terms and Conditions are governed by the laws of Palm Beach County, Florida. Any disputes relating to these terms will be resolved in the courts of Palm Beach County, Florida.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">10. Changes to These Terms</h2>
              <p className="text-slate-700 mb-6">
                We may change these Terms and Conditions at any time. If we do, your continued use of our website and services, including text messaging, means you accept the updated terms.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">11. Contact</h2>
              <p className="text-slate-700 mb-6">
                For questions about these Terms and Conditions, please email us at:{' '}
                <a 
                  href="mailto:hello@handvantage.com" 
                  className="text-primary-blue hover:text-blue-700 font-semibold"
                >
                  hello@handvantage.com
                </a>
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-slate-500">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default TermsConditionsPage;
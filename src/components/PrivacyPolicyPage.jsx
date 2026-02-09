import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from './SEOHead';
import { seoConfig } from '../utils/seoConfig';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead {...seoConfig.privacyPolicy} />
      <main className="pt-20 min-h-screen bg-gradient-to-br from-primary-light to-blue-50">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          <motion.header
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-primary-dark mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600">
              Protecting Your Privacy
            </p>
          </motion.header>

          <motion.div
            className="bg-white sharp-edges shadow-lg p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 mb-6">
                We value your privacy. This Privacy Policy outlines how we collect, utilize, share, and safeguard your information when you use our website ("Site") and services, including text messaging. By using our services, you agree to the terms of this policy.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">What We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Personally Identifiable Information (PII):</strong> This includes your name, email, address, phone number, and any other details you directly provide, even through a text message.</li>
                <li><strong>Non-Personally Identifiable Information (Non-PII):</strong> Technical data like your IP address, browser, device details, website usage, including how you use our text messaging.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">How We Use Your Data</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Service Delivery:</strong> To provide and enhance our services, including our text messaging.</li>
                <li><strong>Communication:</strong> Responding to your questions (including those via text), and for marketing if you opt-in.</li>
                <li><strong>Analytics:</strong> Understanding how you use our Site and text features to make improvements.</li>
                <li><strong>Legal Compliance:</strong> Fulfilling legal requirements.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">We Do Not Sell Your Data</h2>
              <p className="text-slate-700 mb-6">
                Your information, including that shared via text, is never sold.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Security Measures</h2>
              <p className="text-slate-700 mb-6">
                We take reasonable steps to protect your data against unauthorized access or misuse. However, no internet-based system is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Third-Parties</h2>
              <p className="text-slate-700 mb-6">
                We only share your information when legally obligated or to provide necessary services. We ensure they handle your data securely and in line with this Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Cookies, etc.</h2>
              <p className="text-slate-700 mb-6">
                We may use cookies and similar technologies for better user experience, analytics, and personalization. You can manage these settings in your browser.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">External Links</h2>
              <p className="text-slate-700 mb-6">
                We may link to other websites. Please review their privacy policies as we are not responsible for their practices.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Children's Privacy</h2>
              <p className="text-slate-700 mb-6">
                Our services, including texting, are not for children under 13. We do not intentionally gather their data.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Updates</h2>
              <p className="text-slate-700 mb-6">
                This Privacy Policy may change. The "Last Updated" date reflects revisions. Continued use of our services means you accept any changes.
              </p>

              <h2 className="text-2xl font-bold text-primary-dark mt-8 mb-4">Questions?</h2>
              <p className="text-slate-700 mb-6">
                If you have questions about this policy or our data practices related to text messaging, contact us at:{' '}
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

export default PrivacyPolicyPage;
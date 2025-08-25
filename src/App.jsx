import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import About from './components/About';
import Partnerships from './components/Partnerships';
import CTA from './components/CTA';
import Footer from './components/Footer';

import AboutPage from './components/AboutPage';
import DigitalTransformationPage from './components/DigitalTransformationPage';
import CybersecurityPage from './components/CybersecurityPage';
import CloudInfrastructurePage from './components/CloudInfrastructurePage';
import BusinessAutomationPage from './components/BusinessAutomationPage';
import ManagedSecurityPage from './components/ManagedSecurityPage';

import AssessmentLanding from './components/AssessmentLanding';
import AssessmentTool from './components/AssessmentTool';
import CybersecurityAssessmentLanding from './components/CybersecurityAssessmentLanding';
import CybersecurityAssessment from './components/CybersecurityAssessment';

import ROICalculatorLanding from './components/ROICalculatorLanding';
import ROICalculator from './components/ROICalculator';

import SecurityMaturityAssessment from './components/SecurityMaturityAssessment';
import CyberMaturityRoadmap from './components/CyberMaturityRoadmap';
import ComplianceAssessment from './components/ComplianceAssessment';
import BudgetPlanner from './components/BudgetPlanner';
import VendorEvaluation from './components/VendorEvaluation';

import SEOHead from './components/SEOHead';
import { seoConfig } from './utils/seoConfig';
import { trackPageView } from './utils/analytics';

// Component to handle page tracking
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view
    const fullUrl = `${window.location.origin}${location.pathname}${location.hash}`;
    trackPageView(fullUrl, document.title);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <PageTracker />
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <ProblemSolution />
              <Services />
              <About />
              <Partnerships />
              <CTA />
            </main>
          } />
          
          <Route path="/about" element={<AboutPage />} />
          
          <Route path="/services/digital-transformation" element={
            <>
              <SEOHead {...seoConfig.digitalTransformation} />
              <DigitalTransformationPage />
            </>
          } />
          
          <Route path="/services/cybersecurity" element={
            <>
              <SEOHead {...seoConfig.cybersecurity} />
              <CybersecurityPage />
            </>
          } />
          
          <Route path="/services/managed-security" element={
            <>
              <SEOHead {...seoConfig.managedSecurity} />
              <ManagedSecurityPage />
            </>
          } />
          
          <Route path="/services/cloud-infrastructure" element={
            <>
              <SEOHead {...seoConfig.cloudInfrastructure} />
              <CloudInfrastructurePage />
            </>
          } />
          
          <Route path="/services/business-automation" element={
            <>
              <SEOHead {...seoConfig.businessAutomation} />
              <BusinessAutomationPage />
            </>
          } />
          
          <Route path="/assessment" element={
            <>
              <SEOHead {...seoConfig.assessment} />
              <AssessmentLanding />
            </>
          } />
          
          <Route path="/assessment/start" element={<AssessmentTool />} />
          
          <Route path="/security-assessment" element={
            <>
              <SEOHead {...seoConfig.securityAssessment} />
              <CybersecurityAssessmentLanding />
            </>
          } />
          
          <Route path="/security-assessment/start" element={<CybersecurityAssessment />} />
          
          <Route path="/security-maturity-assessment" element={<SecurityMaturityAssessment />} />
          
          <Route path="/maturity-roadmap" element={<CyberMaturityRoadmap />} />
          
          <Route path="/compliance-assessment" element={<ComplianceAssessment />} />
          
          <Route path="/budget-planner" element={<BudgetPlanner />} />
          
          <Route path="/vendor-evaluation" element={<VendorEvaluation />} />
          
          <Route path="/roi-calculator" element={
            <>
              <SEOHead {...seoConfig.roiCalculator} />
              <ROICalculatorLanding />
            </>
          } />
          
          <Route path="/roi-calculator/start" element={<ROICalculator />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={
            <div className="pt-20 min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-primary-dark mb-4">Page Not Found</h1>
                <p className="text-slate-600 mb-8">The page you're looking for doesn't exist.</p>
                <a
                  href="/#"
                  className="bg-primary-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Return Home
                </a>
              </div>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
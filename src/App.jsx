import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

// Critical components (loaded immediately)
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import About from './components/About';
import Partnerships from './components/Partnerships';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

// New components for Viability Engineering
import ViabilityOSSection from './components/ViabilityOSSection';
import ProofSection from './components/ProofSection';
import AgentRoster from './components/AgentRoster';
import ComparisonTable from './components/ComparisonTable';

// Lazy load non-critical page components for better performance
const AboutPage = lazy(() => import('./components/AboutPage'));
const DigitalTransformationPage = lazy(() => import('./components/DigitalTransformationPage'));
const CybersecurityPage = lazy(() => import('./components/CybersecurityPage'));
const CloudInfrastructurePage = lazy(() => import('./components/CloudInfrastructurePage'));
const BusinessAutomationPage = lazy(() => import('./components/BusinessAutomationPage'));
const ManagedSecurityPage = lazy(() => import('./components/ManagedSecurityPage'));
const AIWorkforcePage = lazy(() => import('./components/AIWorkforcePage'));

const AssessmentLanding = lazy(() => import('./components/AssessmentLanding'));
const AssessmentTool = lazy(() => import('./components/AssessmentTool'));
const CybersecurityAssessmentLanding = lazy(() => import('./components/CybersecurityAssessmentLanding'));
const CybersecurityAssessment = lazy(() => import('./components/CybersecurityAssessment'));

const ROICalculatorLanding = lazy(() => import('./components/ROICalculatorLanding'));
const ROICalculator = lazy(() => import('./components/ROICalculator'));

const SecurityMaturityAssessment = lazy(() => import('./components/SecurityMaturityAssessment'));
const CyberMaturityRoadmap = lazy(() => import('./components/CyberMaturityRoadmap'));
const ComplianceAssessment = lazy(() => import('./components/ComplianceAssessment'));

const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));
const TermsConditionsPage = lazy(() => import('./components/TermsConditionsPage'));
const BudgetPlanner = lazy(() => import('./components/BudgetPlanner'));
const VendorEvaluation = lazy(() => import('./components/VendorEvaluation'));
const ManifestoPage = lazy(() => import('./components/ManifestoPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#020617]">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-signal border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-sm font-mono tracking-widest text-signal uppercase">CALIBRATING INSTRUMENTS...</p>
    </div>
  </div>
);

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
        <Breadcrumbs />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <AgentRoster />
                <ProblemSolution />
                <ComparisonTable />
                <Partnerships />
                <ProofSection />
                <CTA />
              </main>
            } />

            <Route path="/services" element={<Services />} />

            <Route path="/manifesto" element={<ManifestoPage />} />

            <Route path="/faq" element={<FAQPage />} />

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

            <Route path="/services/ai-workforce" element={<AIWorkforcePage />} />

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

            <Route path="/security-maturity-assessment" element={
              <>
                <SEOHead {...seoConfig.securityMaturityAssessment} />
                <SecurityMaturityAssessment />
              </>
            } />

            <Route path="/maturity-roadmap" element={
              <>
                <SEOHead {...seoConfig.maturityRoadmap} />
                <CyberMaturityRoadmap />
              </>
            } />

            <Route path="/compliance-assessment" element={
              <>
                <SEOHead {...seoConfig.complianceAssessment} />
                <ComplianceAssessment />
              </>
            } />

            <Route path="/budget-planner" element={
              <>
                <SEOHead {...seoConfig.budgetPlanner} />
                <BudgetPlanner />
              </>
            } />

            <Route path="/vendor-evaluation" element={
              <>
                <SEOHead {...seoConfig.vendorEvaluation} />
                <VendorEvaluation />
              </>
            } />

            <Route path="/roi-calculator" element={
              <>
                <SEOHead {...seoConfig.roiCalculator} />
                <ROICalculator />
              </>
            } />

            <Route path="/roi-calculator/start" element={<ROICalculator />} />

            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

            <Route path="/terms-conditions" element={<TermsConditionsPage />} />

            <Route path="*" element={
              <div className="pt-20 min-h-screen flex items-center justify-center bg-[#020617]">
                <div className="text-center">
                  <p className="font-mono text-sm tracking-widest text-signal mb-4 uppercase">SIGNAL LOST</p>
                  <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">RETURN TO BASE.</h1>
                  <p className="text-slate-400 mb-8 font-mono text-sm">The coordinates you entered don't exist.</p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-signal text-void px-8 py-4 font-bold sharp-edges hover:bg-signal/90 transition-all"
                  >
                    RETURN HOME
                  </Link>
                </div>
              </div>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
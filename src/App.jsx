import React from 'react';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
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
import AssessmentLanding from './components/AssessmentLanding';
import AssessmentTool from './components/AssessmentTool';
import CybersecurityAssessmentLanding from './components/CybersecurityAssessmentLanding';
import CybersecurityAssessment from './components/CybersecurityAssessment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
          <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/services/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/services/cloud-infrastructure" element={<CloudInfrastructurePage />} />
          <Route path="/services/business-automation" element={<BusinessAutomationPage />} />
          <Route path="/assessment" element={<AssessmentLanding />} />
          <Route path="/assessment/start" element={<AssessmentTool />} />
          <Route path="/security-assessment" element={<CybersecurityAssessmentLanding />} />
          <Route path="/security-assessment/start" element={<CybersecurityAssessment />} />
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
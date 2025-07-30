import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
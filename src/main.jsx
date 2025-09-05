import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render React app:', error);
  
  // Fallback content in case React fails to load
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 80px 20px; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;">
        <h1 style="color: #1e40af; font-size: 2.5rem; margin-bottom: 1rem;">Handvantage</h1>
        <p style="color: #475569; font-size: 1.25rem; margin-bottom: 2rem;">Strategic Technology Consulting</p>
        <p style="color: #64748b; margin-bottom: 2rem;">We're experiencing a technical issue. Please refresh the page or contact us directly.</p>
        <a href="https://handvantage.co/contact" style="background: #1e40af; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600;">Contact Us</a>
      </div>
    `;
  }
}
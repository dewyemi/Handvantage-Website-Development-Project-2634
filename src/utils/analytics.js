// Google Analytics 4 tracking functions
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Track page views
export const trackPageView = (url, title) => {
  gtag('config', 'G-CG9491VNQK', {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName, formLocation) => {
  trackEvent('form_submit', 'engagement', `${formName}_${formLocation}`);
};

// Track phone calls
export const trackPhoneCall = (source) => {
  trackEvent('phone_call', 'contact', source);
};

// Track assessment starts
export const trackAssessmentStart = (assessmentType) => {
  trackEvent('assessment_start', 'engagement', assessmentType);
};

// Track assessment completions
export const trackAssessmentComplete = (assessmentType, score) => {
  trackEvent('assessment_complete', 'conversion', assessmentType, score);
};

// Track service page visits
export const trackServiceView = (serviceName) => {
  trackEvent('service_view', 'engagement', serviceName);
};

// Track CTA clicks
export const trackCTAClick = (ctaName, location) => {
  trackEvent('cta_click', 'engagement', `${ctaName}_${location}`);
};

// Enhanced tracking functions for better insights
export const trackUserEngagement = (engagementType, details) => {
  trackEvent('user_engagement', 'behavior', engagementType, details);
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds) => {
  trackEvent('time_on_page', 'engagement', 'duration', seconds);
};

// Track assessment progress
export const trackAssessmentProgress = (assessmentType, questionNumber, totalQuestions) => {
  const progressPercentage = Math.round((questionNumber / totalQuestions) * 100);
  trackEvent('assessment_progress', 'engagement', `${assessmentType}_${progressPercentage}%`);
};

// Track partnership interest
export const trackPartnershipInterest = (partnerName, action) => {
  trackEvent('partnership_interest', 'engagement', `${partnerName}_${action}`);
};

// Track service interest
export const trackServiceInterest = (serviceName, action) => {
  trackEvent('service_interest', 'engagement', `${serviceName}_${action}`);
};

// Track contact attempts
export const trackContactAttempt = (contactMethod, source) => {
  trackEvent('contact_attempt', 'conversion', `${contactMethod}_${source}`);
};

// Track download events
export const trackDownload = (fileName, source) => {
  trackEvent('download', 'engagement', `${fileName}_${source}`);
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link', 'engagement', `${linkText}_${url}`);
};
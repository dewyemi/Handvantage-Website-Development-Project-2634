/**
 * Performance Monitoring Utilities for Handvantage Website
 * Tracks Core Web Vitals, page load times, and user interactions
 */

// Core Web Vitals tracking
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.observers = [];
    this.initialized = false;
    
    if (typeof window !== 'undefined') {
      this.init();
    }
  }

  init() {
    if (this.initialized) return;
    
    // Track page load performance
    this.trackPageLoad();
    
    // Track Core Web Vitals
    this.trackCoreWebVitals();
    
    // Track resource loading
    this.trackResourceLoading();
    
    // Track user interactions
    this.trackUserInteractions();
    
    this.initialized = true;
  }

  // Track page load metrics
  trackPageLoad() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          if (perfData) {
            this.metrics.pageLoad = {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalLoadTime: perfData.loadEventEnd - perfData.fetchStart,
              timeToFirstByte: perfData.responseStart - perfData.requestStart,
              domInteractive: perfData.domInteractive - perfData.fetchStart,
              timestamp: Date.now()
            };
            
            this.reportMetric('page_load', this.metrics.pageLoad);
          }
        }, 0);
      });
    }
  }

  // Track Core Web Vitals (LCP, FID, CLS)
  trackCoreWebVitals() {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          
          this.metrics.lcp = {
            value: lastEntry.startTime,
            element: lastEntry.element?.tagName,
            timestamp: Date.now()
          };
          
          this.reportMetric('lcp', this.metrics.lcp);
        });
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported');
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((entryList) => {
          entryList.getEntries().forEach((entry) => {
            this.metrics.fid = {
              value: entry.processingStart - entry.startTime,
              name: entry.name,
              timestamp: Date.now()
            };
            
            this.reportMetric('fid', this.metrics.fid);
          });
        });
        
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported');
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          entryList.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          
          this.metrics.cls = {
            value: clsValue,
            timestamp: Date.now()
          };
        });
        
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }
  }

  // Track resource loading performance
  trackResourceLoading() {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((entryList) => {
          entryList.getEntries().forEach((entry) => {
            if (entry.transferSize > 100000) { // Track large resources (>100KB)
              this.metrics.largeResources = this.metrics.largeResources || [];
              this.metrics.largeResources.push({
                name: entry.name,
                size: entry.transferSize,
                duration: entry.duration,
                type: entry.initiatorType,
                timestamp: Date.now()
              });
            }
          });
        });
        
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn('Resource observer not supported');
      }
    }
  }

  // Track user interactions
  trackUserInteractions() {
    let interactionCount = 0;
    
    const trackClick = (event) => {
      interactionCount++;
      
      // Track clicks on key elements
      const element = event.target;
      const isButton = element.tagName === 'BUTTON' || element.role === 'button';
      const isLink = element.tagName === 'A';
      
      if (isButton || isLink) {
        this.reportMetric('user_interaction', {
          type: 'click',
          element: element.tagName,
          text: element.textContent?.substring(0, 50),
          timestamp: Date.now(),
          totalInteractions: interactionCount
        });
      }
    };

    document.addEventListener('click', trackClick, { passive: true });
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      this.reportMetric('visibility_change', {
        hidden: document.hidden,
        timestamp: Date.now()
      });
    });
  }

  // Report metrics to console (can be extended to send to analytics)
  reportMetric(name, data) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🔍 Performance Metric [${name}]:`, data);
    }
    
    // Send to analytics service (implement as needed)
    this.sendToAnalytics(name, data);
  }

  // Placeholder for analytics integration
  sendToAnalytics(metricName, data) {
    // Google Analytics 4 integration
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', 'performance_metric', {
        metric_name: metricName,
        metric_value: data.value || 0,
        custom_parameter: JSON.stringify(data)
      });
    }
    
    // Can also integrate with other analytics platforms
    // - Adobe Analytics
    // - Mixpanel
    // - Custom analytics endpoint
  }

  // Get current performance summary
  getPerformanceSummary() {
    return {
      ...this.metrics,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      connectionType: navigator.connection?.effectiveType || 'unknown'
    };
  }

  // Clean up observers
  disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.initialized = false;
  }
}

// Create singleton instance
const performanceMonitor = new PerformanceMonitor();

// Utility functions for component-level performance tracking
export const trackComponentRender = (componentName, startTime) => {
  const endTime = performance.now();
  const renderTime = endTime - startTime;
  
  if (renderTime > 16) { // Only track slow renders (>1 frame)
    performanceMonitor.reportMetric('component_render', {
      component: componentName,
      renderTime,
      timestamp: Date.now()
    });
  }
};

export const trackAsyncOperation = async (operationName, asyncFn) => {
  const startTime = performance.now();
  
  try {
    const result = await asyncFn();
    const duration = performance.now() - startTime;
    
    performanceMonitor.reportMetric('async_operation', {
      operation: operationName,
      duration,
      status: 'success',
      timestamp: Date.now()
    });
    
    return result;
  } catch (error) {
    const duration = performance.now() - startTime;
    
    performanceMonitor.reportMetric('async_operation', {
      operation: operationName,
      duration,
      status: 'error',
      error: error.message,
      timestamp: Date.now()
    });
    
    throw error;
  }
};

// React hook for component performance tracking
export const usePerformanceTracking = (componentName) => {
  React.useEffect(() => {
    const startTime = performance.now();
    
    return () => {
      trackComponentRender(componentName, startTime);
    };
  }, [componentName]);
};

// Export the monitor instance for direct use
export default performanceMonitor;
import { logEvent } from 'firebase/analytics';
import { analytics } from '../services/firebase';

export const useAnalytics = () => {
  const trackEvent = (eventName, parameters = {}) => {
    try {
      // Only track if analytics is available and we're not in development
      if (analytics && typeof window !== 'undefined') {
        logEvent(analytics, eventName, parameters);
      }
    } catch (error) {
      console.error('Analytics error:', error);
    }
  };

  const trackPageView = (pageName) => {
    try {
      if (analytics && typeof window !== 'undefined') {
        trackEvent('page_view', {
          page_title: pageName,
          page_location: window.location.href
        });
      }
    } catch (error) {
      console.error('Page view tracking error:', error);
    }
  };

  const trackUserAction = (action, category = 'user_interaction') => {
    try {
      if (analytics && typeof window !== 'undefined') {
        trackEvent('user_action', {
          action,
          category,
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('User action tracking error:', error);
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackUserAction
  };
};

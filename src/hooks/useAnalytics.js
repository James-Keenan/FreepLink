import { logEvent } from 'firebase/analytics';
import { analytics } from '../services/firebase';

export const useAnalytics = () => {
  const trackEvent = (eventName, parameters = {}) => {
    try {
      logEvent(analytics, eventName, parameters);
    } catch (error) {
      console.error('Analytics error:', error);
    }
  };

  const trackPageView = (pageName) => {
    trackEvent('page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  };

  const trackUserAction = (action, category = 'user_interaction') => {
    trackEvent('user_action', {
      action,
      category,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackUserAction
  };
};

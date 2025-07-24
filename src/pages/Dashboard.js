import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAnalytics } from '../hooks/useAnalytics';

const Dashboard = ({ user }) => {
  const { trackPageView, trackUserAction } = useAnalytics();

  useEffect(() => {
    // Track dashboard page view
    trackPageView('Dashboard');
  }, [trackPageView]);

  // Function to format the member since date
  const formatMemberSince = (timestamp) => {
    if (!timestamp) return 'Unknown';
    
    // Handle Firestore Timestamp object
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="dashboard-container">
      <Header user={user} />
      <main>
        <div className="user-info">
          <h2>Welcome to FreepLink, {user?.userName || user?.firstName || 'User'}!</h2>
          <div className="user-details">
            {user?.firstName && user?.lastName && (
              <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            )}
            {user?.userName && (
              <p><strong>Username:</strong> {user.userName}</p>
            )}
            {user?.email && <p><strong>Email:</strong> {user.email}</p>}
            {user?.createdAt && (
              <p><strong>Member Since:</strong> {formatMemberSince(user.createdAt)}</p>
            )}
          </div>
          <div className="dashboard-actions">
            <p>Dashboard functionality coming soon...</p>
            <button 
              onClick={() => trackUserAction('explore_features', 'dashboard')}
              className="action-btn"
            >
              Explore Features
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
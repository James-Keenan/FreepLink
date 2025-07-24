import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <Header user={user} />
      <main>
        <div className="user-info">
          <h2>Welcome to FreepLink!</h2>
          <p>You are logged in as: {user?.email}</p>
          <p>Dashboard functionality coming soon...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

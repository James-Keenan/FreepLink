import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, user, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

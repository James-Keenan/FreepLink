import React from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Dashboard = ({ user }) => {
  const location = useLocation();
  const isGitHubPages = location.pathname.includes("/FreepLink");
  const basePath = isGitHubPages ? "/FreepLink" : "";

  // Function to format the member since date
  const formatMemberSince = (timestamp) => {
    if (!timestamp) return "Unknown";

    // Handle Firestore Timestamp object
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="dashboard-container">
      <Header user={user} />
      <main>
        <div className="user-info">
          <h2>
            Welcome to FreepLink, {user?.userName || user?.firstName || "User"}!
          </h2>
          <div className="user-details">
            {user?.firstName && user?.lastName && (
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
            )}
            {user?.email && (
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            )}
            {user?.createdAt && (
              <p>
                <strong>Member Since:</strong>{" "}
                {formatMemberSince(user.createdAt)}
              </p>
            )}
          </div>
          <div className="dashboard-actions">
            <p>Dashboard functionality coming soon...</p>
            <div className="dashboard-buttons">
              <Link
                to={`${basePath}/profile`}
                className="dashboard-btn profile-btn"
              >
                📝 Edit Profile
              </Link>
              <button className="dashboard-btn coming-soon" disabled>
                👥 My Groups
              </button>
              <button className="dashboard-btn coming-soon" disabled>
                📅 Events
              </button>
              <button className="dashboard-btn coming-soon" disabled>
                💬 Messages
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

import React from "react";
import "./AppInfo.css";

const AppInfo = () => {
  return (
    <div className="app-info">
      <header className="app-header">
        <h2>FreepLink</h2>
        <span className="beta-badge">Beta</span>
      </header>

      <div className="info-content">
        <p className="tagline">
          A social media platform designed for intimate group connections and
          meaningful relationships within close-knit communities.
        </p>

        <div className="status-note">
          <span className="status-icon">🚧</span>
          <span>
            Currently in development - Thank you for being part of our early
            beta journey!
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;

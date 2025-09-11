import React from "react";
import freepLogo from "../logo/FREEPLOGO.png";
import "./AppInfo.css";

const AppInfo = () => {
  return (
    <div className="app-info">
      <header className="app-header">
       <h2>About</h2> 
        <span className="beta-badge">Beta</span>
      </header>

      <div className="info-content">
        <p className="tagline">
          The revolutionary social platform for meaningful connections. Connect
          with friends and family, create private groups, plan events, and stay
          in touch - all without strangers or noise.
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

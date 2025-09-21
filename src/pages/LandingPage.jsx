import React from "react";
import { Link, useLocation } from "react-router-dom";
import freepLogo from "../logo/FREEPLOGO.png";
import "./LandingPage.css";

const LandingPage = () => {
  const location = useLocation();
  const isGitHubPages = location.pathname.includes("/FreepLink");
  const basePath = isGitHubPages ? "/FreepLink" : "";

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        {/* Top Centered Logo */}
        <div className="top-logo-section">
          <img src={freepLogo} alt="FreepLink" className="top-brand-logo" />
        </div>

        <div className="hero-main-content">
          <div className="hero-content">
            <h2 className="hero-title">Finally. Social That Makes Sense.</h2>

            <p className="hero-subtitle">
              Your private social space for the people who matter most. Share
              moments, plan events, and stay connected with your loved ones.
            </p>

            <div className="cta-buttons">
              <Link to={`${basePath}/signup`} className="btn btn-primary">
                Sign Up
              </Link>
              <Link to={`${basePath}/login`} className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>

          {/* Interactive Moving Object */}
          <div className="interactive-logo">
            <div className="connection-hub">
              {/* Central Hub */}
              <div className="central-node">
                <div className="pulse-ring"></div>
                <div className="pulse-ring pulse-ring-2"></div>
                <div className="core"></div>
              </div>

              {/* Connection Nodes */}
              <div className="connection-node node-1">
                <div className="node-avatar"></div>
              </div>
              <div className="connection-node node-2">
                <div className="node-avatar"></div>
              </div>
              <div className="connection-node node-3">
                <div className="node-avatar"></div>
              </div>
              <div className="connection-node node-4">
                <div className="node-avatar"></div>
              </div>
              <div className="connection-node node-5">
                <div className="node-avatar"></div>
              </div>
              <div className="connection-node node-6">
                <div className="node-avatar"></div>
              </div>

              {/* Connection Lines */}
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
              <div className="connection-line line-4"></div>
              <div className="connection-line line-5"></div>
              <div className="connection-line line-6"></div>

              {/* Floating Data Particles */}
              <div className="data-particle particle-1"></div>
              <div className="data-particle particle-2"></div>
              <div className="data-particle particle-3"></div>
              <div className="data-particle particle-4"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h3 className="features-title">
            Everything You Need to Stay Connected
          </h3>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h4>Personal Profiles</h4>
              <p>
                Create your profile and connect with friends and family. Add
                people you know and trust to build your network.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h4>Private Groups</h4>
              <p>
                Create dedicated groups for family, close friends, or specific
                interests. Keep conversations organized and meaningful.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎉</div>
              <h4>Event Planning</h4>
              <p>
                Plan gatherings, parties, and meetups directly within your
                groups. Coordinate with the people who matter most.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h4>No Strangers</h4>
              <p>
                Only interact with people you know and trust. No random feeds,
                no unwanted contact, just your circle.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h4>Social Reimagined</h4>
              <p>
                Social networking done right. No algorithms, no ads, just
                genuine connections with real people.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h4>Meaningful Connections</h4>
              <p>
                Focus on quality over quantity. Every conversation matters when
                it's with the people you care about.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2025 FreepLink. Currently in development.</p>
          <p className="development-note">
            🚧 Thank you for being part of our early beta journey!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

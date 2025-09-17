import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AppInfo from "../components/AppInfo.jsx";
import FreepLogo from "../logo/FREEPLOGO.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isGitHubPages = location.pathname.includes("/FreepLink");
  const basePath = isGitHubPages ? "/FreepLink" : "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Check for empty fields and highlight them
    if (!formData.email || !formData.password) {
      setError("⚠️ Please fill in all required fields!");
      setLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(`${basePath}/dashboard`);
    } catch (error) {
      setError("❌ Invalid email or password. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!formData.email) {
      setError("📧 Please enter your email address first.");
      return;
    }

    // Show confirmation modal instead of immediately sending
    setShowResetModal(true);
  };
  const confirmPasswordReset = async () => {
    setLoading(true);
    setError("");
    setResetEmailSent(false);
    setShowResetModal(false);

    try {
      await sendPasswordResetEmail(auth, formData.email);
      setResetEmailSent(true);
    } catch (error) {
      console.error("Password reset error:", error);
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email address.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (error.code === "auth/too-many-requests") {
        setError("Too many reset attempts. Please wait before trying again.");
      } else {
        setError(`Failed to send reset email: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const cancelPasswordReset = () => {
    setShowResetModal(false);
  };

  return (
    <div className="login-container">
      <Link to={basePath || "/"} className="back-btn">
        ← Back
      </Link>

      <div className="logo-container">
        \n <img src={FreepLogo} alt="FreepLink Logo" className="auth-logo" />
      </div>

      <main>
        <div className="auth-layout">
          <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="auth-form">
              <h2>Login</h2>

              {error && <div className="error-message">{error}</div>}
              {resetEmailSent && (
                <div className="success-message">
                  Password reset email sent! Check your inbox and follow the
                  instructions to reset your password.
                </div>
              )}

              <div
                className={`form-group ${
                  error && !formData.email ? "error" : ""
                }`}
              >
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div
                className={`form-group ${
                  error && !formData.password ? "error" : ""
                }`}
              >
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="auth-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>

              <div className="form-links">
                <button
                  type="button"
                  className="forgot-password-btn"
                  onClick={handlePasswordReset}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Forgot Password?"}
                </button>

                <p>
                  Don't have an account?{" "}
                  <Link to={`${basePath}/signup`}>Sign up here</Link>
                </p>
              </div>
            </form>
          </div>
          <div className="app-info-container">
            <AppInfo />
          </div>
        </div>
      </main>

      {/* Password Reset Confirmation Modal */}
      {showResetModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>🔐 Reset Password</h3>
            </div>
            <div className="modal-body">
              <p>We'll send a password reset link to:</p>
              <div className="email-display">
                <strong>{formData.email}</strong>
              </div>
              <p className="modal-note">
                Check your inbox (and spam folder) for the reset email. The link
                will expire in 1 hour for security.
              </p>
            </div>
            <div className="modal-actions">
              <button
                className="modal-btn modal-btn-cancel"
                onClick={cancelPasswordReset}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="modal-btn modal-btn-confirm"
                onClick={confirmPasswordReset}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;

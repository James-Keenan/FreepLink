import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate(`${basePath}/dashboard`);
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
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

              <div className="form-group">
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

              <div className="form-group">
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
    </div>
  );
};

export default Login;

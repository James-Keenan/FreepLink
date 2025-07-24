import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { trackPageView, trackEvent } = useAnalytics();

  useEffect(() => {
    // Track login page view
    trackPageView('Login');
  }, [trackPageView]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      
      // Track successful login attempt (actual login event is tracked in App.js)
      trackEvent('login_attempt', {
        method: 'email',
        success: true
      });
      
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', error);
      
      // Track failed login attempt
      trackEvent('login_attempt', {
        method: 'email',
        success: false,
        error_code: error.code
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <main>
        <div className="auth-form-container">
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>Login to FreepLink</h2>
            
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
            
            <button 
              type="submit" 
              className="auth-btn" 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            
            <div className="form-links">
              <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

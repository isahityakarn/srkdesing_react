import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <Link to="/" className="back-home-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
          <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="SRKDesigns Logo" className="login-logo" />
          <h2 className="login-title">Welcome to SRKDesigns</h2>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-btn">
            Sign In
          </button>
        </form>

        <div className="login-footer">
          <p className="signup-text">
            Don't have an account?
            <button type="button" className="signup-link">Sign up here</button>
          </p>
        </div>

        <div className="social-login">
          <p className="social-text">Or sign in with</p>
          <div className="social-buttons">
            <button className="social-btn google-btn">
              <i className="fab fa-google"></i>
              Google
            </button>
            <button className="social-btn facebook-btn">
              <i className="fab fa-facebook-f"></i>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

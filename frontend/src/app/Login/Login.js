import React, { useState } from 'react';
import { useRouter } from 'next/router';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const validateForm = () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const formData = new URLSearchParams();
      formData.append('username', email);
      formData.append('password', password);

      const res = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
        credentials: 'include'
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.access_token);
        onLoginSuccess();
        router.push('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Connection failed. Please check your internet and try again.');
    }
  };

  const handleRegisterClick = () => {
    router.push('/register');
  };

  const handleForgotPasswordClick = () => {
    router.push('/forgot-password');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              disabled={loading}
              className={error ? 'error' : ''}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              disabled={loading}
              className={error ? 'error' : ''}
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className={loading ? 'loading' : ''}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <div className="additional-buttons">
            <button 
              type="button" 
              onClick={handleRegisterClick}
              disabled={loading}
            >
              Register
            </button>
            <button 
              type="button" 
              onClick={handleForgotPasswordClick}
              disabled={loading}
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

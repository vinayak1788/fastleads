'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaGoogle, FaFacebook, FaMicrosoft, FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../../styles/Login.module.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      if (email === 'info@fastleads99.com' && password === '123456') {
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }
        alert('Login Successful!');
        router.push('/Homepage');
      } else {
        alert('Invalid credentials!');
      }
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    router.push('/register');
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login will be implemented soon!`);
  };

  return (
    <div className={styles.loginContainer}>
      
      <form onSubmit={isRegistering ? handleRegister : handleLogin} className={styles.loginForm}>
      <div className={styles.loginHeader}><h1>Fastleads99</h1></div>
        <h2>{isRegistering ? 'Register' : 'Login'}</h2>
        
        <div className={styles.formGroup}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <div className={`${styles.formGroup} ${styles.passwordGroup}`}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button 
            type="button" 
            className={styles.showPasswordBtn}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className={styles.formOptions}>
          <label className={styles.rememberMe}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
        </div>

        <button type="submit" className={styles.button}>
          {isRegistering ? 'Register' : 'Login'}
        </button>

        <div className={styles.socialLogin}>
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Google')} 
            className={`${styles.socialButton} ${styles.google}`}
          >
            <FaGoogle /> Google
          </button>
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Facebook')} 
            className={`${styles.socialButton} ${styles.facebook}`}
          >
            <FaFacebook /> Facebook
          </button>
          <button 
            type="button" 
            onClick={() => handleSocialLogin('Microsoft')} 
            className={`${styles.socialButton} ${styles.microsoft}`}
          >
            <FaMicrosoft /> Microsoft
          </button>
        </div>

        <p className={styles.toggleForm}>
          {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button 
            type="button"
            className={styles.toggleBtn}
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </p>
      </form>
    </div>
  );
}

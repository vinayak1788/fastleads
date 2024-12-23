import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../Login/Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email === "info@fastleads99.com" && password === "12345@") {
      console.log("Login successful");
      router.push("/"); // Redirect to the homepage
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.leftPane}>
        <h1 className={styles.title}>FASTLEADS99</h1>
        <div className={styles.imageContainer}>
          <img
            src="/images/Login.png"
            alt="Funnel Illustration"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.rightPane}>
        <h2 className={styles.loginTitle}>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <label className={styles.label}>
            Email ID
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <div className={styles.passwordContainer}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
          </label>
          <div className={styles.options}>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <a href="/forgot-password" className={styles.link}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
        <p className={styles.footerText}>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

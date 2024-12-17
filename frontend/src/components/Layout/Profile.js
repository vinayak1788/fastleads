import { useState, useEffect } from 'react';
import styles from '../../styles/UserProfile.module.css';
import { FaUser, FaCog, FaSignOutAlt, FaAdjust } from 'react-icons/fa';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light-theme'); // Default theme

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Change the theme and apply it to the body
  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = ''; 
    document.body.classList.add(styles[selectedTheme]); 
  };
  

  useEffect(() => {
    // Apply default theme on initial load
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className={styles.userProfile}>
      {/* Profile Button */}
      <button onClick={toggleDropdown} className={styles.profileButton}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55938268bcdac80412255a2b5434dc6647804e83bbb10abdc70c9818c04ed309?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
          // {image="https://cdn.builder.io/api/v1/image/assets/TEMP/55938268bcdac80412255a2b5434dc6647804e83bbb10abdc70c9818c04ed309?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"}
          alt="User Avatar"
          className={styles.avatar}
        />
        <span className={styles.username}>GEN AI</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <a href="/profile">
                <FaUser className={styles.icon} /> My Profile
              </a>
            </li>
            <li>
              <a href="/settings">
                <FaCog className={styles.icon} /> Settings
              </a>
            </li>
            <li className={styles.divider}></li>
            <li>
              <a href="/logout">
                <FaSignOutAlt className={styles.icon} /> Sign Out
              </a>
            </li>
          </ul>
          {/* Theme Selector */}
          <div className={styles.themeSelector}>
            <button onClick={() => changeTheme('light')} className={styles.themeButton}>
              Light
            </button>
            <button onClick={() => changeTheme('dark')} className={styles.themeButton}>
              Dark
            </button>
            <button onClick={() => changeTheme('gradient')} className={styles.themeButton}>
              Gradient
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

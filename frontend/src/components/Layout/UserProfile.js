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
    document.body.className = ''; // Clear all existing theme classes
    document.body.classList.add(selectedTheme); // Add selected theme class
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
          src="/avatar-placeholder.png"
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
            <button onClick={() => changeTheme('light-theme')} className={styles.themeButton}>
              Light
            </button>
            <button onClick={() => changeTheme('dark-theme')} className={styles.themeButton}>
              Dark
            </button>
            <button onClick={() => changeTheme('blue-theme')} className={styles.themeButton}>
              Blue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

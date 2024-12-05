import { useState } from 'react';
import styles from '../../styles/UserProfile.module.css';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.userProfile}>
      <button onClick={toggleDropdown} className={styles.profileButton}>
        <img
          src="/avatar-placeholder.png"
          alt="User"
          className={styles.avatar}
        />
        <span className={styles.username}>GEN AI</span>
      </button>

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
        </div>
      )}
    </div>
  );
}

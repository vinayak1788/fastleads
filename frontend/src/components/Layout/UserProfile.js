// import { useState, useEffect } from "react";
// import styles from "../../styles/UserProfile.module.css";
// import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

// export default function UserProfile() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState("light"); // Default theme

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleOutsideClick = (event) => {
//       if (!event.target.closest(`.${styles.userProfile}`)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("click", handleOutsideClick);
//     return () => document.removeEventListener("click", handleOutsideClick);
//   }, []);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const changeTheme = (newTheme) => {
//     setTheme(newTheme);
//   };

//   return (
//     <div className={`${styles.userProfile} ${styles[theme]}`}>
//       {/* Profile Button */}
//       <button
//         onClick={toggleDropdown}
//         className={styles.profileButton}
//         aria-expanded={isOpen}
//         aria-controls="dropdownMenu"
//       >
//         <img
//           src="/avatar-placeholder.png"
//           alt="User Avatar"
//           className={styles.avatar}
//         />
//         <span className={styles.username}>GEN AI</span>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div id="dropdownMenu" className={`${styles.dropdown} ${styles[theme]}`}>
//           <ul>
//             <li>
//               <a href="/profile">
//                 <FaUser className={styles.icon} /> My Profile
//               </a>
//             </li>
//             <li>
//               <a href="/settings">
//                 <FaCog className={styles.icon} /> Settings
//               </a>
//             </li>
//             <li className={styles.divider}></li>
//             <li>
//               <a href="/logout">
//                 <FaSignOutAlt className={styles.icon} /> Sign Out
//               </a>
//             </li>
//           </ul>
//           {/* Theme Selector */}
//           <div className={styles.themeSelector}>
//             <button onClick={() => changeTheme("light")}>Light</button>
//             <button onClick={() => changeTheme("dark")}>Dark</button>
//             <button onClick={() => changeTheme("blue")}>Blue</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState,useEffect } from 'react';
import styles from '../../styles/UserProfile.module.css';
import { FaUser, FaCog, FaSignOutAlt, FaAdjust } from 'react-icons/fa';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light-theme'); // Default theme

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeTheme = (selectedTheme) => {
    setTheme(selectedTheme);
    document.body.className = ''; // Clear all existing theme classes
    document.body.classList.add(selectedTheme); // Add selected theme class
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
            <li className={styles.themeOptions}>
              <span className={styles.themeTitle}>Theme:</span>
              <button
                onClick={() => changeTheme('light-theme')}
                className={`${styles.themeButton} ${
                  theme === 'light-theme' ? styles.active : ''
                }`}
              >
                <FaAdjust className={styles.icon} /> Light
              </button>
              <button
                onClick={() => changeTheme('dark-theme')}
                className={`${styles.themeButton} ${
                  theme === 'dark-theme' ? styles.active : ''
                }`}
              >
                <FaAdjust className={styles.icon} /> Dark
              </button>
              <button
                onClick={() => changeTheme('custom-theme')}
                className={`${styles.themeButton} ${
                  theme === 'custom-theme' ? styles.active : ''
                }`}
              >
                <FaAdjust className={styles.icon} /> Custom
              </button>
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

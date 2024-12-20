import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/UserProfile.module.css';
import { FaUser, FaSignOutAlt, FaPalette } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export default function UserProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [showProfile, setShowProfile] = useState(false);
    const [activeTheme, setActiveTheme] = useState('light');
    const router = useRouter();
    const profileRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setShowProfile(false);
    };

    const changeTheme = (selectedTheme) => {
        setTheme(selectedTheme);
        setActiveTheme(selectedTheme);
    };

    const handleProfileClick = () => {
        setIsOpen(false);
        setShowProfile(true);
    };

    const closeProfile = (e) => {
        if (profileRef.current && !profileRef.current.contains(e.target)) {
            setShowProfile(false);
        }
    };

    const handleLogout = () => {
        router.push('./components/Layout/Login'); // Update path based on the Next.js pages directory
    };

    useEffect(() => {
        document.body.classList.add(styles[theme]);
        return () => {
            document.body.classList.remove(styles[theme]);
        };
    }, [theme]);

    useEffect(() => {
        if (showProfile) {
            document.addEventListener('mousedown', closeProfile);
        } else {
            document.removeEventListener('mousedown', closeProfile);
        }
        return () => {
            document.removeEventListener('mousedown', closeProfile);
        };
    }, [showProfile]);

    return (
        <div className={styles.userProfile}>
            <button onClick={toggleDropdown} className={styles.profileButton}>
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/55938268bcdac80412255a2b5434dc6647804e83bbb10abdc70c9818c04ed309?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
                    alt="User Avatar"
                    className={styles.avatar}
                />
                <span className={styles.username}>GEN AI</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    <ul>
                        <li className={styles.themesListItem}>
                            <a className={styles.themesLink}>
                                <FaPalette className={styles.icon} /> Themes
                            </a>
                            <div className={styles.themeSelector}>
                                <button
                                    onClick={() => changeTheme('light')}
                                    className={`${styles.themeButton} ${styles.lightButton} ${activeTheme === 'light' ? styles.activeTheme : ''}`}
                                ></button>
                                <button
                                    onClick={() => changeTheme('dark')}
                                    className={`${styles.themeButton} ${styles.darkButton} ${activeTheme === 'dark' ? styles.activeTheme : ''}`}
                                ></button>
                                <button
                                    onClick={() => changeTheme('gradient')}
                                    className={`${styles.themeButton} ${styles.gradientButton} ${activeTheme === 'gradient' ? styles.activeTheme : ''}`}
                                ></button>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <button onClick={handleProfileClick} className={styles.dropdownLink}>
                                <FaUser className={styles.icon} /> Profile
                            </button>
                        </li>
                        <li>
                            <button onClick={handleLogout} className={styles.dropdownLink}>
                                <FaSignOutAlt className={styles.icon} /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}

            {showProfile &&
                createPortal(
                    <div className={styles.overlay}>
                        <div className={styles.profileContainer} ref={profileRef}>
                            <div className={styles.profileHeader}>
                                <div className={styles.profileImageContainer}>
                                    <img
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55938268bcdac80412255a2b5434dc6647804e83bbb10abdc70c9818c04ed309?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
                                        alt="User Avatar"
                                        className={styles.profileAvatar}
                                    />
                                </div>
                                <div className={styles.profileNameContainer}>
                                    <h2 className={styles.profileName}>Jane Cooper</h2>
                                    <p className={styles.profileDesignation}>Manager</p>
                                </div>
                            </div>
                            <div className={styles.profileContent}>
                                <div className={styles.profileDetails}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="name">Name*</label>
                                        <input type="text" id="name" value="Jane Cooper" readOnly />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="email">Email Id*</label>
                                        <input type="email" id="email" value="janec@gmail.com" readOnly />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="phone">Phone No*</label>
                                        <input type="tel" id="phone" value="9123457891" readOnly />
                                    </div>
                                </div>
                                <div className={styles.profileChangePassword}>
                                    <h2>Change Password</h2>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="old-password">Old Password*</label>
                                        <input type="password" id="old-password" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="new-password">New Password*</label>
                                        <input type="password" id="new-password" placeholder="Enter Password" />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="reenter-password">Reenter Password*</label>
                                        <input type="password" id="reenter-password" placeholder="Reenter Password" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.profileActions}>
                                <button onClick={(e) => closeProfile(e)} className={styles.cancelButton}>
                                    Cancel
                                </button>
                                <button className={styles.saveButton}>Save</button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </div>
    );
}

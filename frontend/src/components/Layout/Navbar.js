import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

// UserMenuItem Component
function UserMenuItem({ icon, text }) {
  return (
    <div className={styles.menuItem} role="button" tabIndex={0}>
      <img loading="lazy" src={icon} className={styles.menuIcon} alt="" />
      <div className={styles.menuText}>{text}</div>
    </div>
  );
}

// ThemeSelector Component
function ThemeSelector({ onChangeTheme }) {
  return (
    <div className={styles.themeContainer}>
      <div className={styles.themeOptions}>
        <div
          className={styles.themeCircle}
          role="button"
          tabIndex={0}
          aria-label="Theme option 1"
          onClick={() => onChangeTheme('light')}
        />
        <div
          className={styles.themeCircleWhite}
          role="button"
          tabIndex={0}
          aria-label="Theme option 2"
          onClick={() => onChangeTheme('dark')}
        />
        <div
          className={styles.themeCirclePlain}
          role="button"
          tabIndex={0}
          aria-label="Theme option 3"
          onClick={() => onChangeTheme('blue')}
        />
      </div>
    </div>
  );
}

const menuItems = [
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e93ef7ec913321fcc938e93e83324d2e976cb268aa2f9b4e6e517f08e89a70bd?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b', text: 'Themes' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b1b370f8e9631c2af9f42657a469b8802da15e16ce5972354ee11e8b4f133a8b?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b', text: 'Profile' },
  { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/297f9f29d155760be66dfde09dfaaec117c0a08c52119ed06d1e7d3e6ff89c1b?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b', text: 'Logout' }
];

// UserProfile Component
const UserProfile = ({ name, role, image, onClick }) => {
  return (
    <div className={styles.profileSection} onClick={onClick}>
      <div className={styles.profileInfo}>
        <img
          loading="lazy"
          src={image}
          className={styles.profileImage}
          alt={`${name}'s profile picture`}
        />
        <div className={styles.userDetails}>
          <div className={styles.userName}>{name}</div>
          <div className={styles.userRole}>{role}</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2ae91a05b275dc93b76d55896dc9fa5eac7114adde3a987a2fd7742381d7101?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
          className={styles.dropdownIcon}
          alt="Dropdown"
        />
      </div>
    </div>
  );
};

// NavigationBar Component
const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // State for managing the theme

  const toggleDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme); // Update the theme state
  };

  return (
    <nav className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logoSection}>
            <div className={styles.brandName}>
              <span>FastLeads</span>99
            </div>
            <SearchBar />
          </div>

          <div className={styles.mainContent}>
            <div className={styles.actionButtons}>
              <div className={styles.buttonWrapper}>
                <ActionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6aad46e0a4574f558cca2c254097357409535627c1e2072b81e251198da2ae10?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
                  label="Buy now"
                  variant="buy"
                />
                <ActionButton
                  icon="https://cdn.builder.io/api/v1/image/assets/TEMP/4b24c1b57a426dac2c08011d85c15cde399233547dd9c32a96173a190cd4b3dc?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
                  label="Invite"
                  variant="invite"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/820c3e97892c4816f9ec0482e42a2822cba7f8a190067d6910f395fa42d39f44?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
                className={styles.notificationIcon}
                alt="Notifications"
              />
            </div>

            {/* User Profile with dropdown toggle */}
            <UserProfile
              name="Jane Cooper"
              role="Manager"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/55938268bcdac80412255a2b5434dc6647804e83bbb10abdc70c9818c04ed309?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
              onClick={toggleDropdown}  // Toggle dropdown on profile click
            />
          </div>
        </div>

        {/* UserMenu - Dropdown */}
        {isMenuOpen && (
          <div className={styles.menuContainer}>
            <div className={styles.menuWrapper}>
              <div className={styles.menuContent}>
                <UserMenuItem icon={menuItems[0].icon} text={menuItems[0].text} />
                <ThemeSelector onChangeTheme={changeTheme} />
                {menuItems.slice(1).map((item, index) => (
                  <UserMenuItem key={index} icon={item.icon} text={item.text} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// ActionButton Component
const ActionButton = ({ icon, label, variant }) => {
  const buttonClass = variant === 'buy' ? styles.buyButton : styles.inviteButton;

  return (
    <button className={buttonClass}>
      <div className={styles.buttonWrapper}>
        <img
          loading="lazy"
          src={icon}
          className={styles.buttonIcon}
          alt=""
        />
        <span>{label}</span>
      </div>
    </button>
  );
};

// SearchBar Component
const SearchBar = () => {
  return (
    <form className={styles.searchBar} role="search">
      <label htmlFor="searchInput" className={styles.visuallyHidden}>
        Search
      </label>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f648ef9f16453af26762638ce2f74a9bc39273f363abc0929ff4640a8ded4dba?placeholderIfAbsent=true&apiKey=1fcf7458f0984c828835e605ab2bf74b"
        className={styles.buttonIcon}
        alt=""
      />
      <input
        type="search"
        id="searchInput"
        className={styles.searchInput}
        placeholder="Search"
      />
    </form>
  );
};

export default NavigationBar;

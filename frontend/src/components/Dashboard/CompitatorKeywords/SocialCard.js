import React, { useState } from 'react';
import styles from '../../../styles/Competitors_styles/SocialCard.module.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLink, FaGlobe } from 'react-icons/fa';

const SocialCard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log('Submitted URL:', searchTerm);
  };

  return (
    <div className={`${styles.socialCard} ${styles.fadeIn}`}>
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row items-start ml-4 my-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaLink style={{ color: '#2E2E2E' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaLinkedin style={{ color: '#0077B5' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaFacebook style={{ color: '#1877F2' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaInstagram style={{ color: '#E4405F' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaTwitter style={{ color: '#1DA1F2' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.iconWrapper}>
            <FaYoutube style={{ color: '#FF0000' }} className={`${styles.socialIcon} transform hover:scale-110 transition-all`} />
          </a>
        </div>
        
        <div className={styles.searchContainer}>
          <form onSubmit={handleSubmit} className={styles.searchWrapper}>
            <FaGlobe className={styles.globeIcon} />
            <input
              type="text"
              placeholder="Website link here..."
              value={searchTerm}
              onChange={handleSearch}
              className={styles.searchInput}
            />
            
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SocialCard;
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

import styles from './Hastag.module.css';
import { FaHashtag, FaTags } from 'react-icons/fa';
import { MdOutlineShortText } from 'react-icons/md';
import { MdSwapHoriz } from 'react-icons/md';


const Hastag = () => {
  const [activeButton, setActiveButton] = useState('hashtag');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className={styles.hashCard}>
      <div className={styles.cardContent}>
      <div className={styles.emptyBar}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${activeButton === 'hashtag' ? styles.active : ''}`}
              onClick={() => handleButtonClick('hashtag')}
            >
              <FaHashtag className={styles.icon} />
              Hashtag
            </button>
            <button
              className={`${styles.button} ${activeButton === 'taglines' ? styles.active : ''}`}
              onClick={() => handleButtonClick('taglines')}
            >
              <MdOutlineShortText className={styles.icon} />
              Taglines
            </button>
            <button
              className={`${styles.button} ${activeButton === 'keywords' ? styles.active : ''}`}
              onClick={() => handleButtonClick('keywords')}
            >
              <FaTags className={styles.icon} />
              Keywords
            </button>
          </div>
        </div>
          <div className={styles.content}>
            <div className={styles.contentNav}>
              <h2 className={styles.contentTitle}>
                <FaGoogle style={{ color: 'green', marginRight: '8px' }} />
                Website
              </h2>
              <div className={styles.navActions}>
                <MdSwapHoriz style={{ fontSize: '24px', cursor: 'pointer' }} />
              </div>
            </div>
  <p className={styles.date}>on 15 DEC 2024</p>
            {/* Rest of your existing content... */}
          {activeButton === 'hashtag' && (
            <div className={styles.section}>
              <p>
                <span className={styles.hashtag}>#snack</span>{' '}
                <span className={styles.hashtag}>#healthy</span> Feeling hungry?
                When our week gets busy, it can be challenging to get creative
                with your tasty plant-based meal options — we get it! Tag a
                friend to share this week’s snack plan with them!
              </p>
              <hr></hr>
              <p>
                <span className={styles.hashtag}>#healthy</span> You and your
                family will love this refreshing dessert!
              </p>
              <hr></hr>
              <p>
                <span className={styles.hashtag}>#sweet</span>{' '}
                <span className={styles.hashtag}>#healthy</span> ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt.
              </p>
              <hr></hr>
              <p>
                <span className={styles.hashtag}>#sweet</span>{' '}
                <span className={styles.hashtag}>#healthy</span> Feeling hungry?
                When our week gets busy, it can be challenging to get creative
                with your tasty plant-based meal options — we get it! Tag a
                friend to share this week’s snack plan with them!
              </p>
            </div>
          )}

          {activeButton === 'taglines' && (
            <div className={styles.section}>
              <p>Feeling hungry? Tasty plant-based meals made easy!</p>
              <p>You and your family will love these refreshing ideas!</p>
              <p>Healthy options to keep your week on track!</p>
            </div>
          )}

          {activeButton === 'keywords' && (
            <div className={styles.section}>
              <p>snack, healthy, plant-based, dessert, meal plan, creative</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hastag;
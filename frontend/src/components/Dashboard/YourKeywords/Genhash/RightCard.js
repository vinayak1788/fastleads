import React from "react";
import { BsStars } from 'react-icons/bs';
import { FaYoutube, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import styles from '../../../../styles/Keywords/Rightcard.module.css';

const RightCard = ({ selectedCategory, handleCategoryChange, data }) => {
  const socialPlatforms = {
    YouTube: {
      hashtags: ["#snack #healthy Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week's snack plan with them!",
        "#healthy You and your family will love this refreshing dessert!"],
      taglines: ["Broadcast Yourself", "Share your story with the world"],
      keywords: ["video content", "subscribers", "viral", "monetization"]
    },
    Facebook: {
      hashtags: ["#healthy Your trusted partner for health and happiness.",
        "Because your health is our priority."],
      taglines: ["Connect with friends", "Build your community"],
      keywords: ["social networking", "engagement", "reach", "audience"]
    },
    Twitter: {
      hashtags: ["#tweet", "#twittermarketing", "#trending"],
      taglines: ["What's happening?", "Join the conversation"],
      keywords: ["tweets", "retweets", "viral content", "trending topics"]
    },
    LinkedIn: {
      hashtags: ["#linkedin", "#networking", "#business"],
      taglines: ["Professional networking", "Career growth"],
      keywords: ["professional", "B2B", "networking", "business growth"]
    },
    Instagram: {
      hashtags: ["#instagram", "#insta", "#instadaily"],
      taglines: ["Capture and share moments", "Visual storytelling"],
      keywords: ["visual content", "stories", "reels", "engagement"]
    }
  };

  const platformIcons = {
    YouTube: <FaYoutube />,
    Facebook: <FaFacebook />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedin />,
    Instagram: <FaInstagram />
  };

  const platformStyles = {
    YouTube: { background: '#FF0000', color: 'white' },
    Facebook: { background: '#1877F2', color: 'white' },
    Twitter: { background: '#1DA1F2', color: 'white' },
    LinkedIn: { background: '#0A66C2', color: 'white' },
    Instagram: { background: '#E4405F', color: 'white' }
  };

  const renderSocialCards = () => {
    return Object.entries(socialPlatforms).map(([platform, content]) => (
      <div key={platform} className={styles.websiteCard}>
        <div className={styles.cardTopbar}>
          <span 
            className={styles.iconWrapper} 
            style={platformStyles[platform]}
          >
            {platformIcons[platform]}
          </span>
          <h3 className={styles.platformTitle}>{platform}</h3>
        </div>
        <div className={styles.timestamp}>
          {new Date().toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
        <div className={styles.tagContainer}>
          {selectedCategory === "Hashtags" && 
            content.hashtags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))
          }
          {selectedCategory === "Taglines" && 
            content.taglines.map((tagline, index) => (
              <span key={index} className={styles.tag}>{tagline}</span>
            ))
          }
          {selectedCategory === "Keywords" && 
            content.keywords.map((keyword, index) => (
              <span key={index} className={styles.tag}>{keyword}</span>
            ))
          }
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.aiCard}>
      <div className={styles.navbar}>
        <h2>
          <BsStars style={{ marginRight: '8px', color: '#2915F9' }} />
          Industry Trends
        </h2>
      </div>
      <div className={styles.emptyBar}>
        <div className={styles.navigationButtons}>
          <button
            className={`${styles.navButton} ${selectedCategory === "Hashtags" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("Hashtags")}
          >
            # Hashtag
          </button>
          <button
            className={`${styles.navButton} ${selectedCategory === "Taglines" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("Taglines")}
          >
            Taglines
          </button>
          <button
            className={`${styles.navButton} ${selectedCategory === "Keywords" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("Keywords")}
          >
            Keywords
          </button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {renderSocialCards()}
      </div>
    </div>
  );
};

export default RightCard;
import React, { useState } from "react";
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHashtag,
  FaTags,
} from "react-icons/fa";
import { MdOutlineShortText } from "react-icons/md";
import styles from "./Genai.module.css";

const data = {
  hashtags: [
    {
      platform: "YouTube",
      icon: <FaYoutube color="#FF0000" size={50} />,
      website: "www.youtube.com",
      date: "15 Dec 2024",
      content:
        "#snack #healthy Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this week's snack plan with them!",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter color="#1DA1F2" size={50} />,
      website: "www.twitter.com",
      date: "15 Dec 2024",
      content: "#healthy You and your family will love this refreshing dessert!",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram color="#C13584" size={50} />,
      website: "www.instagram.com",
      date: "15 Dec 2024",
      content:
        "#sweet #healthy ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin color="#0077B5" size={50} />,
      website: "www.linkedin.com",
      date: "15 Dec 2024",
      content: "#snack #healthy Empowering businesses with Generative AI for tomorrow.",
    },
  ],
  taglines: [
    {
      platform: "YouTube",
      icon: <FaYoutube color="#FF0000" size={50} />,
      website: "www.youtube.com",
      date: "15 Dec 2024",
      content: "Innovate your day with creativity and plant-based meals.",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter color="#1DA1F2" size={50} />,
      website: "www.twitter.com",
      date: "15 Dec 2024",
      content: "Refreshing taglines for every family moment!",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram color="#C13584" size={50} />,
      website: "www.instagram.com",
      date: "15 Dec 2024",
      content: "Capture the moment with sweetness and creativity.",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin color="#0077B5" size={50} />,
      website: "www.linkedin.com",
      date: "15 Dec 2024",
      content: "Unlocking the power of Generative AI for businesses worldwide.",
    },
  ],
  keywords: [
    {
      platform: "YouTube",
      icon: <FaYoutube color="#FF0000" size={50} />,
      date : "15 Dec 2024",
      content: "Generative AI, Snack ideas, Healthy eating",
    },
    {
      platform: "Twitter",
      icon: <FaTwitter color="#1DA1F2" size={50} />,
      website: "www.twitter.com",
      date: "15 Dec 2024",
      content: "Healthy lifestyle, Family time, Refreshing ideas",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram color="#C13584" size={50} />,
      website: "www.instagram.com",
      date: "15 Dec 2024",
      content: "Sweet desserts, Creative meals, Plant-based recipes",
    },
    {
      platform: "LinkedIn",
      icon: <FaLinkedin color="#0077B5" size={50} />,
      website: "www.linkedin.com",
      date: "15 Dec 2024",
      content: "Business growth, AI innovation, Healthy living",
    },
  ],
};

const App = () => {
  const [activeButton, setActiveButton] = useState("hashtags");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const platformIcons = {
    YouTube: <FaYoutube color="#FF0000" />,
    Twitter: <FaTwitter color="#1DA1F2" />,
    Instagram: <FaInstagram color="#C13584" />,
    LinkedIn: <FaLinkedin color="#0077B5" />,
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>Industry Trends</div>
      </nav>

      <div className={styles.hashCard}>
        <div className={styles.cardContent}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${
                activeButton === "hashtags" ? styles.active : ""
              }`}
              onClick={() => handleButtonClick("hashtags")}
            >
              <FaHashtag className={styles.icon} />
              Hashtags
            </button>
            <button
              className={`${styles.button} ${
                activeButton === "taglines" ? styles.active : ""
              }`}
              onClick={() => handleButtonClick("taglines")}
            >
              <MdOutlineShortText className={styles.icon} />
              Taglines
            </button>
            <button
              className={`${styles.button} ${
                activeButton === "keywords" ? styles.active : ""
              }`}
              onClick={() => handleButtonClick("keywords")}
            >
              <FaTags className={styles.icon} />
              Keywords
            </button>
          </div>

          <div className={styles.cardsGrid}>
            {data[activeButton].map((item, index) => (
              <div key={index} className={styles.card}>
                {/* Card Navbar */}
                <div className={styles.cardNavbar}>
                  <span className={styles.platformNavbar}>
                    {platformIcons[item.platform]} {item.platform}
                  </span>
                  <span className={styles.date}>{item.date}</span>
                </div>

                {/* Card Content */}
                <div className={styles.cardBody}>
                  <p className={styles.content}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import TopBar from './TopBar';
import CommentSection from "./CommentSection";
import UrgentAlerts from "./UrgentAlerts";
import '../../../styles/SocialInbox/CardBoard.css';

const CardBoard = () => {
  const platforms = [
    { name: 'LinkedIn', icon: <FaLinkedin /> },
    { name: 'Facebook', icon: <FaFacebook /> },
    { name: 'Twitter', icon: <FaTwitter /> },
    { name: 'Instagram', icon: <FaInstagram /> },
    { name: 'YouTube', icon: <FaYoutube /> },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].name);
    const handleSelectPlatform = (platformName) => {
      setSelectedPlatform(platformName);
      // Update CSS variable for platform color
      document.documentElement.style.setProperty(
        '--platform-color',
        getPlatformColor(platformName)
      );
    };

    // Add platform color helper
    const getPlatformColor = (platform) => {
      switch(platform) {
        case 'LinkedIn': return '#0077B5';
        case 'Facebook': return '#1877F2';
        case 'Twitter': return '#1DA1F2';
        case 'Instagram': return '#E4405F';
        case 'YouTube': return '#FF0000';
        default: return '#B8B2EB';
      }
    };
  return (
    <div className="dashboard-container">
      <TopBar />
      <div className="content">
        <div className="sidebar">
          <ul>
            {platforms.map((platform) => (
              <li
                key={platform.name}
                className={`sidebar-item ${selectedPlatform === platform.name ? 'active' : ''}`}
                onClick={() => handleSelectPlatform(platform.name)}
              >
                <div className="platform-icon">{platform.icon}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          <div className="content-section comments">
            <CommentSection selectedPlatform={selectedPlatform} />
          </div>
          <div className="content-section alerts">
            <UrgentAlerts selectedPlatform={selectedPlatform} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBoard;

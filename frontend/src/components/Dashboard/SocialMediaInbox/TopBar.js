import React from 'react';
import { FaInbox } from 'react-icons/fa';
import '../../../styles/SocialInbox/TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-content">
        <FaInbox className="topbar-icon" />
        <h1 className="topbar-heading">Social Media inbox</h1>
      </div>
    </div>
  );
};

export default TopBar;

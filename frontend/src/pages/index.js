'use client';

import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/globals.css';
import Dashboardpage from './Dashboardpage';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      <div className="navHeader">
        <Navbar toggleSidebar={handleSidebarToggle} />
      </div>

      <div className="main-layout">
        <Sidebar
          className="sidebarele"
          isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        <div className={`dashboardgrid ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Dashboardpage />
        </div>
      </div>
    </div>
  );
};

export default Home;

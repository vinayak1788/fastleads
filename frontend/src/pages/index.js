'use client';

import React, { useState, useEffect } from 'react'
import NavBar from '../components/Layout/Navbar'
import Sidebar from '../components/Layout/Sidebar'
import Dashboardpage from './Dashboardpage'
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
 
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="indexcontainer">
      <div className="navHeader">
        <NavBar toggleSidebar={handleSidebarToggle} />
      </div>

      <div className="main-layout">
        <Sidebar
          className="sidebarele"
          isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        <div className={`dashboardgrid ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Dashboardpage />
          <div className="flex space-x-6 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

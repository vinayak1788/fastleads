'use client';

import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/globals.css';
import Dashboardpage from './Dashboardpage';
import Login from '../app/Login/Login';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;

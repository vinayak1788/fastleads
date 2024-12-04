'use client';
import React, { useState } from 'react';
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import Dashboard from '../components/Dashboard/Dashboard';

import '../styles/globals.css';
import { FaPlug, FaChartLine, FaUsers, FaSearch, FaPenSquare, FaShareAlt, FaChartBar, FaBullhorn, FaCommentDots, FaHeart, FaUserPlus, FaListAlt, FaInbox, FaComment, FaCalendarAlt, FaClock } from 'react-icons/fa';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="container">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="dashboard-cards-container">
          <div className="dashboard-cards grid-layout">
            <Dashboard />
          </div>
        </div>
      </div>
    </main>
  );
}

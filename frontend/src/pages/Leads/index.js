"use client";

import React, { useState } from "react";
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import "../../styles/globals.css";
import CustomizationLeadManagement from "../../components/Dashboard/LeadAndCustomization/Customizationleadmanagement";
import SocialMediaCards from "../../components/Dashboard/LeadAndCustomization/SocialMediaCards";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navHeader">
        <Navbar toggleSidebar={handleSidebarToggle} />
      </div>

      {/* Layout with Sidebar */}
      <div className="main-layout">
        <Sidebar
          className="sidebarele"
          isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        {/* Main Content Section */}
        <div className={`dashboardgrid ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <div className="flex-1 p-6 overflow-auto">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="text-sm breadcrumbs">
                <span className="text-gray-600">Dashboard</span>
                <span className="mx-2">/</span>
                <span className="text-blue-600">
                  Customization Lead Management
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex space-x-6 mt-6">
              {/* Customization Lead Management */}
              <div className="flex-1">
                <CustomizationLeadManagement />
              </div>

              {/* Social Media Cards */}
              <div className="w-1/3">
                <SocialMediaCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

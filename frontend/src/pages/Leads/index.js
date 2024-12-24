"use client";

import React, { useState } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>FastLead99</title>
        <meta name="description" content="Lead Management Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="h-screen flex bg-gray-50">
        {/* Sidebar */}
        <Sidebar
          className={`sidebarele transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          isOpen={isSidebarOpen}
          toggleSidebar={handleSidebarToggle}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="navHeader">
            <Navbar toggleSidebar={handleSidebarToggle} />
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 p-6 overflow-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="text-sm breadcrumbs">
                <span className="text-gray-600">Dashboard</span>
                <span className="mx-2">/</span>
                <span className="text-blue-600">Customization Lead Management</span>
              </div>
            </div>

            {/* Combined Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart Section */}
                <div className="flex-1">
                  <CustomizationLeadManagement />
                </div>

                {/* Social Media Cards */}
                <div className="flex-1">
                  <SocialMediaCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

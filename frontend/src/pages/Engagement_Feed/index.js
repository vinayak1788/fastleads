import React, {useState} from "react";
import { EngagementFeed } from "../../components/Dashboard/EngagementFeed/EngagementFeed";
import "../../styles/Engagementfeed/globals.css";
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import  "../../styles/globals.css";

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

    {/* Layout with Sidebar and CampaignPerformanceCard */}
    <div className="main-layout">
      <Sidebar
        className="sidebarele"
        isOpen={isSidebarOpen}
        toggleSidebar={handleSidebarToggle}
      />
      <div className="EngagementFeed">
        <EngagementFeed />
      </div>
    </div>
  </div>
  );
}

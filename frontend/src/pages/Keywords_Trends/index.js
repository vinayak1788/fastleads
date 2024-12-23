import React,{useState} from 'react';
import DashboardCard from '../../components/Dashboard/YourKeywords/DashboardCard';
import { FaRegThumbsUp } from 'react-icons/fa';
import SocialCard from '../../components/Dashboard/YourKeywords/SocialCard';
import GenhashContainer from '../../components/Dashboard/YourKeywords/Genhash/GenhashContainer';
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import  "../../styles/globals.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };  // Add closing brace here

  const platforms = [
    // { name: 'LinkedIn', percentage: 32, color: 'bg-blue-500' },
    // { name: 'Facebook', percentage: 48, color: 'bg-blue-400' },
    // { name: 'X Twitter', percentage: 55, color: 'bg-blue-600' },
    // { name: 'Instagram', percentage: 88, color: 'bg-pink-500' },
    // { name: 'YouTube', percentage: 92, color: 'bg-red-500' },
  ];    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
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
        <div className="flex-grow p-8">
        <DashboardCard platforms={platforms} />
        <div className="mt-8 mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-20" style={{ color: '#3A29FA', fontFamily: 'Inter, sans-serif' }}>
            <FaRegThumbsUp className="text-[#3A29FA] text-xl" />
            Social Media Platforms
            <hr style={{ borderColor: '#8C82FF' }} className="w-full border-t-2" />
          </h2>
          <div>
            <SocialCard />
            <GenhashContainer />
          </div>
        </div>
      </div>
      
      {/* Footer */}
      {/* <hr></hr> */}
      {/* <footer className="bg-gray-800 text-white py-4 text-right flex items-center justify-center min-h-[60px]">
        <p>All rights reserved© 2024 Fastleads99.</p>
      </footer> */}
    </div>
    </div>
  );
};

export default App;
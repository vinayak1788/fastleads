import React,{useState} from 'react';
import DashboardCard from '../../components/Dashboard/SocialMediaInbox/DashboardCard';
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";

export default function Dashboard() {
 
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
     <div className="SocialInbox">
      <DashboardCard />
    </div>
    </div>
    </div>
  );
}

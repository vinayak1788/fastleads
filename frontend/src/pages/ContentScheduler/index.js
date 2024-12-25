import React,{useState} from 'react';
import Calendar from '../../components/Dashboard/ContentScheduler/Content/Calendar';
import Graphs from '../../components/Dashboard/ContentScheduler/Content/Graphs';
import DragandDrop from '../../components/Dashboard/ContentScheduler/Content/DragandDrop';
import Navbar from '../../components/Layout/Navbar';
import Sidebar from '../../components/Layout/Sidebar';


export default function Home() {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>

      <main className="container">
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
        
        <Graphs />
     
        <div className="content-layout" style={{ display: 'flex', gap: '10px' }}>
          <div className="scheduler-container" style={{ flex: 2 }}>
            <Calendar />
          </div>
          <div className="drag-drop-container" style={{ flex: 1 }}>
            <DragandDrop />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required elements
import DashboardCard from '../../DashboardCard'; // Import the reusable DashboardCard component
import './SocialMediaInboxCard.module.css'; // Import CSS for the card

// Register required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const SocialMediaInboxCard = () => {
  // Data for the pie chart
  const data = {
    labels: ['High-priority messages', 'Messages'],
    datasets: [
      {
        data: [20, 70], // Values corresponding to the two categories
        backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each segment
        hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Hover colors
      },
    ],
  };

  return (
    <DashboardCard className="social-media-inbox-card">
      <div className="card-header"><span>Social Media Inbox</span>
        {/* Adding a button with a link href */}
       <a href="/SocialInbox" className="close-button">
          <button>↗</button>
        </a></div>
      <div className="card-body">
        {/* Insert Pie Chart */}
        <Pie data={data} />
      </div>
    </DashboardCard>
  );
};

export default SocialMediaInboxCard;

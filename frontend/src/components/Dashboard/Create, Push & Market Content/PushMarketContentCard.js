"use client"

import React from 'react';
import DashboardCard from '../../DashboardCard'; // Import reusable DashboardCard component
import './PushMarketContentCard.module.css'; // Import CSS file for this component
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Data for the content push marketing radial chart (static doughnut chart)
const data = {
  labels: ['Content Push', 'Remaining'], // Labels for the doughnut sections
  datasets: [
    {
      label: 'Content Push Marketing', // Label for the dataset
      data: [652, 1000 - 652], // Data values (Total 1000, with 652 for content push)
      backgroundColor: ['#36A2EB', '#FFCD56'], // Colors for each section
      borderWidth: 0, // Remove border width for a clean look
    },
  ],
};

// Options for the doughnut chart (static radial chart)
const options = {
  responsive: true,
  cutout: '60%', // Makes the center hole larger, creating a doughnut effect
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`; // Display value on hover
        },
      },
    },
  },
};

const PushMarketContentCard = () => {
  // Total Visitors Calculation
  const totalVisitors = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <DashboardCard className="push-market-content-card">
      <div className="card-header"><span> Create, Push & Market Content</span>
       {/* Adding a button with a link href */}
       <a href="/Contentpush" className="expend-button">
          <button>↗</button>
        </a>

      </div>
      <div className="card-body">
        <div className="content-push">
          {/* Doughnut Chart for Push Market Content */}
          <Doughnut data={data} options={options} />
          </div>
        <div className="content-info">
          <p><strong>Content Push Marketing:</strong>652 </p>
          <p><strong>Last Check:</strong> 24 Apr</p>
          {/* <p><strong>Total Visitors:</strong> {totalVisitors.toLocaleString()}</p> */}
        
        </div>
      </div>
    </DashboardCard>
  );
};

export default PushMarketContentCard;

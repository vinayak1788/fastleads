import React from 'react';
import DashboardCard from '../../DashboardCard';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary Chart.js components
import './CampaignPerformanceCard.module.css'; // Import CSS module for styling
import Link from 'next/link';
// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CampaignPerformanceCard = () => {
  // Data for the bar chart including Twitter
  const data = {
    labels: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter'], // Added Twitter label
    datasets: [
      {
        label: 'Campaign Performance', // Label for the dataset
        data: [500, 400, 600, 450], // Added sample data for Twitter (450)
        backgroundColor: ['#36A2EB', '#FFCD56', '#FF5733', '#1DA1F2'], // Colors for each bar, added Twitter color
        borderColor: ['#36A2EB', '#FFCD56', '#FF5733', '#1DA1F2'], // Border color for each bar, added Twitter color
        borderWidth: 1, // Border width for bars
      },
    ],
  };

  // Options for the bar chart
  const options = {
    responsive: true,
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

  return (
    <DashboardCard className="campaign-performance-card">
      <div className="Campaign-header"><span>Campaign Management & Performance</span>
        {/* Adding a button with a link href */}
       <Link href="/Campaign" className="close-button">
          <button>↗</button>
        </Link>
      </div>
      <div className="campcard-body">
        <div className="bar-chart">
          {/* Bar Chart for Campaign Performance */}
          <Bar data={data} options={options} />
        </div>
      </div>
    </DashboardCard>
  );
};

export default CampaignPerformanceCard;

import React from 'react';
import DashboardCard from '../../DashboardCard';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary Chart.js components
import  styles from './CampaignPerformanceCard.module.css'; // Import CSS module for styling
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
    <DashboardCard className={styles['campaign-performance-card']}>
    <div className={styles['Campaign-header']}>
      <span>Campaign Management & Performance</span>
      <Link href="/Campaign" className={styles['close-button']}>
        <button>↗</button>
      </Link>
    </div>
    <div className={styles['campcard-body']}>
      <div className={styles['bar-chart']}>
        <Bar data={data} options={options} />
      </div>
    </div>
  </DashboardCard>
  );
};

export default CampaignPerformanceCard;

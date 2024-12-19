import React from 'react';
import Link from 'next/link';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'; // Import required elements
import DashboardCard from '../../DashboardCard'; // Import the reusable DashboardCard component
import './KeywordsTrendsCard.css'; // Import the CSS file for this component

// Register required elements for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const KeywordsTrendsCard = () => {
  // Data for the pie chart
  const data = {
    labels: ['To write content', 'Ideas and Inspiration', 'To create Outline', 'To draft content'],
    datasets: [
      {
        data: [6, 45, 31, 18],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <DashboardCard className="keywords-trends-card">
      <div className="keycard-header">
        <span>Your Keywords, Trends, Insights</span>
        {/* Adding a button with a link href */}
        <Link href="/Keywords_Trends" className="close-button">
          <button>↗</button>
        </Link>
      </div>

      {/* Pie chart without the expand functionality */}
      <div className="card-body">
        <Pie data={data} />
      </div>
    </DashboardCard>
  );
};

export default KeywordsTrendsCard;

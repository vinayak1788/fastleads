import React from 'react';
import DashboardCard from '../../DashboardCard'; // Import reusable DashboardCard component
import './CompetitorKeywordsCard.css'; // Import CSS file for this component
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CompetitorKeywordsCard = () => {
  // Data for the competitor keywords bar chart
  const data = {
    labels: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'YouTube', 'Share Chat'], // Labels for the bars
    datasets: [
      {
        label: 'Competitor Keywords', // Label for the dataset
        data: [22779, 62635, 29657, 12456, 10234, 8765], // The competitor keyword data (values)
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCD56', '#4BC0C0', '#FF9F40', '#9966FF'], // Colors for each bar
        borderColor: ['#36A2EB', '#FF6384', '#FFCD56', '#4BC0C0', '#FF9F40', '#9966FF'], // Border color for each bar
        borderWidth: 1, // Border width
      },
    ],
  };

  // Options for the bar chart (horizontal bar chart)
  const options = {
    indexAxis: 'y', // Set horizontal bars by changing indexAxis to 'y'
    responsive: true,
    scales: {
      x: {
        beginAtZero: true, // Ensure the x-axis starts at zero
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return ( 
    <DashboardCard className="competitor-keywords-card">
      <div className="card-header">Your Competitor Keywords & Trends
        {/* Adding a button with a link href */}
        <a href="/another-page" className="close-button">
          <button>↗</button>
        </a>
      </div>
      <div className="card-body">
        <div className="chart-container">
          <div className="bar-chart">
            {/* Bar Chart for Competitor Keywords */}
            <Bar data={data} options={options} />
          </div>
          {/* <div className="competitor-info">
            <p><strong>LinkedIn:</strong> 22,779</p>
            <p><strong>Facebook:</strong> 62,635</p>
            <p><strong>Instagram:</strong> 29,657</p>
            <p><strong>Twitter:</strong> 12,456</p>
            <p><strong>YouTube:</strong> 10,234</p>
            <p><strong>Share Chat:</strong> 8,765</p>
          </div> */}
        </div>
      </div>
    </DashboardCard>
  );
};

export default CompetitorKeywordsCard;

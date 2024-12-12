import React from 'react';
import DashboardCard from '../../DashboardCard'; // Import reusable DashboardCard component
import './ContentSchedulerCard.css'; // Import CSS file for this component
import { Doughnut } from 'react-chartjs-2'; // Import Doughnut chart from chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ContentSchedulerCard = () => {
  // Data for the content scheduler radial chart (stacked doughnut)
  const data = {
    //labels: ['Approved Posts', 'Published Posts', 'Pending Posts', 'Scheduled Posts'], // Labels for the doughnut sections
    datasets: [
      {
        label: 'Content Posts',
        data: [25, 18, 7, 5], // Data values for each section
        backgroundColor: ['#4BC0C0', '#FF9F40', '#FFCD56', '#FF6384'], // Colors for each section
        borderWidth: 0, // Remove border width for a clean look
      },
    ],
  };

  // Options for the doughnut chart (stacked radial chart)
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

  return (
    <DashboardCard className="content-scheduler-card">
           <div className="card-header">Content Scheduler
            {/* Adding a button with a link href */}
        <a href="/another-page" className="close-button">
          <button>↗</button> </a>  

      </div>
      <div className="card-body">
        <div className="doughnut-chart">
          {/* Doughnut Chart for Content Scheduler */}
          <Doughnut data={data} options={options} />
        </div>
        <div className="content-info">
          <p><strong>Approved Posts:</strong> 25</p>
          <p><strong>Published Posts:</strong> 18</p>
          <p><strong>Pending Posts:</strong> 7</p>
          <p><strong>Scheduled Posts:</strong> 5</p>
        </div>
      </div>
    </DashboardCard>
  );
};

export default ContentSchedulerCard;

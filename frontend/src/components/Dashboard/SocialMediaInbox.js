import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(Tooltip, Legend, ArcElement);

const SocialMediaInboxCard = () => {
  // Pie chart data
  const data = {
    labels: ["High-priority messages", "Messages"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#10b981", "#fbbf24"], // Green and Yellow
        hoverBackgroundColor: ["#059669", "#f59e0b"], // Darker Green and Yellow on hover
      },
    ],
  };

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom", // Legend displayed at the bottom
        labels: {
          font: { size: 14 },
          color: "#374151", // Gray color for text
        },
      },
      tooltip: {
        backgroundColor: "#374151", // Gray background for tooltips
        titleColor: "#ffffff", // White tooltip title text
        bodyColor: "#ffffff", // White tooltip body text
      },
    },
  };

  return (
    <div className="card-container">
      {/* Header with title and expand button */}
      <div className="header-container">
        <h2>Social Media Inbox</h2>
        <button className="extension-button">Expand</button>
      </div>

      {/* Pie chart container */}
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>

      {/* Styles */}
      <style jsx>{`
        .card-container {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          padding: 20px;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 20px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-container h2 {
          font-size: 24px;
          font-weight: bold;
          color: #374151;
          margin: 0;
        }

        .extension-button {
          background-color: #10b981;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s ease-in-out;
        }

        .extension-button:hover {
          background-color: #059669;
        }

        .chart-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 200px; /* Adjust the height as needed */
          position: relative;
        }

        .chart-container canvas {
          width: 100% !important; /* Ensures the chart is responsive */
          height: 100% !important; /* Ensures the chart is responsive */
        }
      `}</style>
    </div>
  );
};

export default SocialMediaInboxCard;

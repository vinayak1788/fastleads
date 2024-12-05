import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const LeadManagementCard = () => {
  // Line chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Months
    datasets: [
      {
        label: "Total Leads",
        data: [100, 200, 300, 400, 500, 600, 700], // Example lead data
        borderColor: "#6366f1", // Purple line color
        backgroundColor: "rgba(99, 102, 241, 0.3)", // Transparent purple fill
        tension: 0.4, // Smooth curve
        pointBackgroundColor: "#6366f1", // Points on the line
        pointBorderColor: "#ffffff", // White border around points
        pointHoverRadius: 6, // Enlarges points on hover
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend for simplicity
      },
      tooltip: {
        backgroundColor: "#374151", // Tooltip background color (gray)
        titleColor: "#ffffff", // White title text
        bodyColor: "#ffffff", // White body text
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide vertical grid lines
        },
        ticks: {
          color: "#374151", // Gray color for x-axis labels
        },
      },
      y: {
        grid: {
          color: "#e5e7eb", // Light gray horizontal grid lines
        },
        ticks: {
          color: "#374151", // Gray color for y-axis labels
        },
      },
    },
  };

  return (
    <div className="card-container">
      {/* Header with title and expand button */}
      <div className="header-container">
        <h2>Customization Lead Management</h2>
        <button className="extension-button">Expand</button>
      </div>

      {/* Line chart container */}
      <div className="chart-container">
        <Line data={data} options={options} />
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
          background-color: #6366f1;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s ease-in-out;
        }

        .extension-button:hover {
          background-color: #4f46e5;
        }

        .chart-container {
          height: 300px; /* Adjust the height as needed */
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

export default LeadManagementCard;

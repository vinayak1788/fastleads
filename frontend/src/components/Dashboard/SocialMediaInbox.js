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
    <div style={styles.cardContainer}>
      {/* Header Section */}
      <div style={styles.header}>
        <span style={styles.title}>Social Media Inbox</span>
        <button title="Expand" style={styles.expandButton}>
          ↗
        </button>
      </div>

      {/* Pie Chart Section */}
      <div style={styles.chartContainer}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

// Styles for the card and its components
const styles = {
  cardContainer: {
    background: "linear-gradient(to bottom right, #eef3ff, #cdd8f9)",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "350px",
    height: "280px",
    gap: "15px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#333",
  },
  expandButton: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    color: "#888",
    cursor: "pointer",
  },
  chartContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
  },
};

export default SocialMediaInboxCard;

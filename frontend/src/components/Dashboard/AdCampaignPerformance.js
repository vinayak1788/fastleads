import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

// Register the chart.js elements
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const AdCampaignCard = () => {
  // Data for the Bar chart
  const data = {
    labels: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
    datasets: [
      {
        label: "Ad clicks",
        data: [500, 400, 550, 300],
        backgroundColor: ["#0072b1", "#1877f2", "#e4405f", "#1da1f2"],
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={styles.adCampaignCard}>
      <div style={styles.adCampaignCardHeader}>
        <h2 style={styles.adCampaignCardHeaderTitle}>Ad Campaign Management</h2>
        <button style={styles.adCampaignCardHeaderButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
      <div style={styles.chartContainer}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

// Inline styles as a JavaScript object at the bottom
const styles = {
  adCampaignCard: {
    padding: "1px",
    background: "linear-gradient(to right, #e0f7fa, #bbdefb)",
  
    borderRadius: "8px",
    width : "522px",
    height : "300px",
    //boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  adCampaignCardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1px",
  },
  adCampaignCardHeaderTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
  },
  adCampaignCardHeaderButton: {
    color: "#4b5563",
  },
  chartContainer: {
    // background: "linear-gradient(to right, #e0f7fa, #bbdefb)",
   padding: "10px",
    borderRadius: "8px",
    width : "500px",
    height : "220px",
    
  },
};

export default AdCampaignCard;

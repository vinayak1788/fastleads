import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const CompetitorInsightsCard = () => {
  const data = {
    labels: ["LinkedIn", "Facebook", "Instagram", "Twitter", "YouTube", "Share chat"],
    datasets: [
      {
        label: "Engagement",
        data: [74779, 56635, 43887, 19027, 8142, 4918],
        backgroundColor: [
          "#0077b5", // LinkedIn
          "#4267B2", // Facebook
          "#E1306C", // Instagram
          "#1DA1F2", // Twitter
          "#FF0000", // YouTube
          "#FFC107", // Share chat
        ],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bars
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
        },
        grid: {
          drawBorder: false,
          color: "#e0e0e0",
        },
      },
      y: {
        ticks: {
          color: "#000",
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
  };

  return (
    <div style={styles.card}>
      {/* Card Header */}
      
      {/* Chart Section */}
      <div style={styles.chartContainer}>
      <div style={styles.header}>
        <span style={styles.title}>Competitor insights & Industry Trends</span>
        <button title="Expand" style={styles.expandButton}>
        ↗
        </button>
      </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

const styles = {
  // card: {
  //   width: "600px",
  //   background: "linear-gradient(to bottom right, #fdfdfd, #f0f4ff)",
  //   borderRadius: "15px",
  //   //boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  //   padding: "20px",
  //   fontFamily: "Arial, sans-serif",
  //   margin: "auto", // Center card horizontally
  // },
  chartContainer: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  expandButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#888',
    cursor: 'pointer',
  },
};

export default CompetitorInsightsCard;

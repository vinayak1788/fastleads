  
import React from "react";
import { Pie } from "react-chartjs-2";
import styles from "./SocialMediaInboxCard.module.css";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SocialMediaInboxCard = () => {
  const data = {
    labels: ["High-priority messages", "Messages"],
    datasets: [
      {
        data: [40, 60], // Replace with your actual data
        backgroundColor: ["#00C49F", "#FFDB58"], // Colors for chart segments
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    maintainAspectRatio: false,
    cutout: "50%",
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.title}>Social Media Inbox</span>
        <a href="/SocialInbox" className="close-button">
           <button>↗</button>
         </a>
      </div>
      <div className={styles.content}>
        <div className={styles.chartContainer}>
          <Pie data={data} options={options} />
        </div>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.highPriority}`}></span>
            High-priority messages
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.dot} ${styles.messages}`}></span>
            Messages
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInboxCard;


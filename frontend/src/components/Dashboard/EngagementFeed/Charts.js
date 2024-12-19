import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import styles from "../../../styles/Engagementfeed/Charts.module.css";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
  const Charts = ({ trendsData, influencersData, platformMetrics }) => {
    // Define chartOptions inside the component
    const chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 10,
            font: {
              size: 11
            }
          }
        }
      }
    };

    // Data for Line Chart (Engagement Trends)
    const lineChartData = {
      labels: trendsData.dates,
      datasets: [
        {
          label: "Number of Posts",
          data: trendsData.posts,
          borderColor: "#2196F3",
          backgroundColor: "rgba(33, 150, 243, 0.2)",
          tension: 0.4,
          pointBorderColor: "#2196F3",
          pointBackgroundColor: "#ffffff",
          pointBorderWidth: 2,
        },
      ],
    };

    // Data for Doughnut Chart (Sentiment Distribution)
    const doughnutData = {
      labels: ["Positive", "Neutral", "Negative"],
      datasets: [
        {
          data: Object.values(trendsData.sentiments),
          backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
        },
      ],
    };

    // Data for Bar Chart (Influencer Engagement)
    const barChartData = {
      labels: influencersData.map((inf) => inf.name),
      datasets: [
        {
          label: "Engagement",
          data: influencersData.map((inf) => inf.engagement),
          backgroundColor: "#3F51B5",
        },
      ],
    };

    // Data for Platform Metrics Chart
    const platformMetricsData = {
      labels: Object.keys(platformMetrics),
      datasets: [
        {
          label: "Mentions",
          data: Object.values(platformMetrics).map((platform) => platform.mentions),
          backgroundColor: "#FF5722",
        },
        {
          label: "Likes",
          data: Object.values(platformMetrics).map((platform) => platform.likes),
          backgroundColor: "#2196F3",
        },
        {
          label: "Retweets",
          data: Object.values(platformMetrics).map((platform) => platform.retweets),
          backgroundColor: "#4CAF50",
        },
      ],
    };

    return (
      <>
        <div className={styles.chartItem}>
          <h3>Engagement Trends</h3>
          <div className={styles.chartWrapper}>
            <Line data={lineChartData} options={chartOptions} />
          </div>
        </div>
        <div className={styles.chartItem}>
          <h3>Sentiment Distribution</h3>
          <div className={styles.chartWrapper}>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
        <div className={styles.chartItem}>
          <h3>Influencer Engagement</h3>
          <div className={styles.chartWrapper}>
            <Bar data={barChartData} options={chartOptions} />
          </div>
        </div>
        <div className={styles.chartItem}>
          <h3>Platform Metrics</h3>
          <div className={styles.chartWrapper}>
            <Bar data={platformMetricsData} options={chartOptions} />
          </div>
        </div>
      </>
    );
  };export default Charts;

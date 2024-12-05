"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import Link from "next/link";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const EngagementCard = () => {
  // Chart data
  const data = {
    labels: ["Posts", "Comments"],
    datasets: [
      {
        data: [20, 70],
        backgroundColor: ["#6DD28A", "#5A8DEE"],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  };

  return (
    <div className="card-container">
      {/* Card Header */}
      <div className="card-header">
        <span>Engagement & Interaction Feed</span>
        <Link href="/components/InteractionFeed">
          <button className="navigate-button">↗</button>
        </Link>
      </div>

      {/* Doughnut Chart */}
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="chart-center">
          <p className="total">90</p>
          <p className="label">Total</p>
        </div>
      </div>

      {/* Legend */}
      <div className="chart-legend">
        <div className="legend-item">
          <span className="dot posts"></span>
          Posts <span className="value">20</span>
        </div>
        <div className="legend-item">
          <span className="dot comments"></span>
          Comments <span className="value">70</span>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .card-container {
          background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 16px;
          width: 300px;
          font-family: Arial, sans-serif;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 16px;
          color: #3a3b3f;
          margin-bottom: 20px;
        }

        .navigate-button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #5a8dee;
        }

        .chart-container {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto;
        }

        .chart-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .chart-center .total {
          font-size: 24px;
          font-weight: bold;
          color: #3a3b3f;
        }

        .chart-center .label {
          font-size: 14px;
          color: #6c6f72;
        }

        .chart-legend {
          margin-top: 16px;
          display: flex;
          justify-content: space-around;
          font-size: 14px;
          color: #3a3b3f;
        }

        .legend-item {
          display: flex;
          align-items: center;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 8px;
        }

        .dot.posts {
          background-color: #6dd28a;
        }

        .dot.comments {
          background-color: #5a8dee;
        }

        .value {
          font-weight: bold;
          margin-left: 4px;
        }
      `}</style>
    </div>
  );
};

export default EngagementCard;
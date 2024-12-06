"use client";

import React, { useState } from "react";
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

const ContentSchedulerCard = () => {
  // Chart data for Content Scheduler
  const data = {
    labels: ["Approved", "Published Posts", "Pending", "Scheduled Posts"],
    datasets: [
      {
        data: [30, 50, 20, 40],
        backgroundColor: ["#6DD28A", "#5A8DEE", "#FF9F00", "#FFD700"],
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

  // State to control the extension (toggle visibility)
  const [isExtended, setIsExtended] = useState(false);

  const toggleExtension = () => {
    setIsExtended(!isExtended);
  };

  return (
    <div className="card-container">
      {/* Card Header */}
      <div className="card-header">
        <span>Content Scheduler</span>
        <Link href="/components/ContentScheduler">
          <button className="navigate-button">↗</button>
        </Link>
      </div>

      {/* Doughnut Chart */}
      <div className="chart-container">
        <Doughnut data={data} options={options} />
        <div className="chart-center">
          <p className="total">140</p>
          <p className="label">Total</p>
        </div>
      </div>

      {/* Legend */}
      <div className="chart-legend">
        <div className="legend-item">
          <span className="dot approved"></span>
          Approved <span className="value">30</span>
        </div>
        <div className="legend-item">
          <span className="dot published"></span>
          Published Posts <span className="value">50</span>
        </div>
        <div className="legend-item">
          <span className="dot pending"></span>
          Pending <span className="value">20</span>
        </div>
        <div className="legend-item">
          <span className="dot scheduled"></span>
          Scheduled Posts <span className="value">40</span>
        </div>
      </div>

      {/* Expand/Collapse Content */}
      <button className="expand-button" onClick={toggleExtension}>
        {isExtended ? "Collapse" : "Expand"}
      </button>

      {isExtended && (
        <div className="expanded-content">
          <p className="details">Here you can find more details about the content scheduler.</p>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        .card-container {
          background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
          border-radius: 8px;
          //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 10px;
          width: 500px;
          font-family: Arial, sans-serif;
         
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 16px;
          color: #3a3b3f;
          margin-bottom: 10px;
        }

        .navigate-button {
          background: lightblue;
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
          font-size: 25px;
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

        .dot.approved {
          background-color: #6dd28a;
        }

        .dot.published {
          background-color: #5a8dee;
        }

        .dot.pending {
          background-color: #ff9f00;
        }

        .dot.scheduled {
          background-color: #ffd700;
        }

        .value {
          font-weight: bold;
          margin-left: 5px;
        }

        .expand-button {
          background: none;
          border: none;
          color: #6a79a1;
          cursor: pointer;
          font-size: 14px;
          margin-top: 15px;
        }

        .expanded-content {
          margin-top: 15px;
          font-size: 14px;
          color: #3a3b3f;
        }

        .details {
          font-size: 14px;
          color: #3a3b3f;
        }
      `}</style>
    </div>
  );
};

export default ContentSchedulerCard;

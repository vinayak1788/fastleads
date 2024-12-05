"use client";

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Image from "next/image";

// Register necessary chart.js components for horizontal bar chart
ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const SocialMediaStatsCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Data for the horizontal bar chart
  const data = {
    labels: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
    datasets: [
      {
        label: "Leads",
        data: [2203, 320, 321, 562],
        backgroundColor: ["#0077B5", "#1877F2", "#E4405F", "#1DA1F2"],
        borderRadius: 10,
        borderWidth: 1,
      },
    ],
  };

  // Options for the horizontal bar chart
  const options = {
    indexAxis: "y", // This makes the chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        ticks: {
          font: {
            weight: "bold",
          },
        },
      },
    },
  };

  return (
    <div className="card-container">
      {/* Heading with Extension Button */}
      <div className="header-container">
        <h2>Lead Generation Overview</h2>
        <button
          className="extension-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>

      {/* Conditionally Rendered Content */}
      {isExpanded && (
        <div className="additional-content">
          <p>Here is more detailed information about the lead generation data...</p>
        </div>
      )}

      {/* Social Media Cards */}
      <div className="cards-container">
        {/* LinkedIn Card */}
        <div className="platform-card linkedin">
          <div className="card-header">
            <Image
              src="/linkedin-icon.png" // Add your image source here
              alt="LinkedIn"
              width={40}
              height={40}
              className="platform-icon"
            />
            <p>LinkedIn</p>
          </div>
          <div className="card-body">
            <p>2203 Leads</p>
          </div>
        </div>

        {/* Facebook Card */}
        <div className="platform-card facebook">
          <div className="card-header">
            <Image
              src="/facebook-icon.png" // Add your image source here
              alt="Facebook"
              width={40}
              height={40}
              className="platform-icon"
            />
            <p>Facebook</p>
          </div>
          <div className="card-body">
            <p>320 Leads</p>
          </div>
        </div>

        {/* Instagram Card */}
        <div className="platform-card instagram">
          <div className="card-header">
            <Image
              src="/instagram-icon.png" // Add your image source here
              alt="Instagram"
              width={40}
              height={40}
              className="platform-icon"
            />
            <p>Instagram</p>
          </div>
          <div className="card-body">
            <p>321 Leads</p>
          </div>
        </div>

        {/* Twitter Card */}
        <div className="platform-card twitter">
          <div className="card-header">
            <Image
              src="/twitter-icon.png" // Add your image source here
              alt="Twitter"
              width={40}
              height={40}
              className="platform-icon"
            />
            <p>Twitter</p>
          </div>
          <div className="card-body">
            <p>562 Leads</p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .card-container {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .header-container h2 {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }

        .extension-button {
          background-color: #0077b5;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
        }

        .extension-button:hover {
          background-color: #005f87;
        }

        .chart-container {
          margin-bottom: 40px;
        }

        .cards-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .platform-card {
          background: #fff;
          border-radius: 12px;
          padding: 16px;
          width: 220px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .platform-card .card-header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }

        .platform-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .platform-card .card-body {
          font-size: 16px;
          font-weight: bold;
          color: #3a3b3f;
        }

        .platform-card.linkedin .platform-icon {
          background-color: #0077b5;
        }

        .platform-card.facebook .platform-icon {
          background-color: #1877f2;
        }

        .platform-card.instagram .platform-icon {
          background-color: #e4405f;
        }

        .platform-card.twitter .platform-icon {
          background-color: #1da1f2;
        }

        .platform-card p {
          font-size: 18px;
          color: #3a3b3f;
          font-weight: bold;
        }

        .additional-content {
          margin-top: 20px;
          font-size: 16px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaStatsCard;

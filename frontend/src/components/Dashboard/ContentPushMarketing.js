import React from "react";
import { CircularProgressbar } from "react-circular-progressbar"; // Import the new library
import "react-circular-progressbar/dist/styles.css"; // Import styles

const ContentPushMarketingCard = () => {
  return (
    <div className="card-container">
      <div className="header-container">
        <h3>Content Push Marketing</h3>
        <button className="expand-button">Expand</button>
      </div>

      <div className="chart-container">
        <CircularProgressbar
          value={65} // 65% equivalent to 652
          text={`${652}`} // Display the value inside the circle
          styles={{
            path: {
              stroke: "#10B981", // Customize path color
            },
            text: {
              fill: "#3B82F6", // Text color
              fontSize: "32px", // Font size
              fontWeight: "bold",
            },
          }}
        />
      </div>

      <div className="info-container">
        <p className="value">652</p>
        <p>Content Push Marketing</p>
        <p>Last Check on 24 Apr</p>
      </div>

      <style jsx>{`
        .card-container {
          background-color: #f0fdf4; /* Light green */
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          width: 350px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #bbf7d0;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .header-container h3 {
          font-size: 18px;
          font-weight: bold;
          color: #065f46;
          margin: 0;
        }

        .expand-button {
          background-color: #10b981;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .expand-button:hover {
          background-color: #059669;
        }

        .chart-container {
          margin: 20px 0;
        }

        .info-container {
          font-size: 14px;
          color: #4b5563; /* Gray text */
        }

        .info-container .value {
          font-size: 32px;
          font-weight: bold;
          color: #2563eb; /* Blue for the main value */
        }

        .info-container p {
          margin: 4px 0;
        }
      `}</style>
    </div>
  );
};

export default ContentPushMarketingCard;

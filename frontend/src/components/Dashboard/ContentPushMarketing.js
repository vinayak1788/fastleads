import React from "react";
import Link from "next/link";
import { CircularProgressbar } from "react-circular-progressbar"; // Import the new library
import "react-circular-progressbar/dist/styles.css"; // Import styles

const ContentPushMarketingCard = () => {
  return (
    <div className="pushcard-container">
      <div className="header-container">
         <span>Content Push Marketing</span>
         <Link href="/components/ContentScheduler">
          <button className="navigate-button">↗</button>
        </Link>
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
        .pushcard-container {
         background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
          border-radius: 10px;
          padding: 2px;
          text-align: center;
          width: 520px;
          height: 400px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
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
          background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          font-size: 10px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .expand-button:hover {
          background-color: #059669;
        }

        .chart-container {
        position: relative;
        background: linear-gradient(to bottom right, #eef3ff, #cdd8f9);
        
          width: 250px;
         
          margin: 0 auto;
        }

        .info-container {
          font-size: 14px;
          color: #4b5563; /* Gray text */
        }

        .info-container .value {
          font-size: 20px;
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

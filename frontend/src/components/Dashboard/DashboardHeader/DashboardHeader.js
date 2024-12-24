import React, { useState } from "react";
import { FaChartBar, FaStar, FaComments, FaClipboardList, FaTh, FaMinus } from "react-icons/fa";

const DashboardHeader = ({ onWidgetClick }) => {
  return (
    <header style={{ padding: "16px" }}>
      {/* First Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>
          Dashboard
        </h1>
        <button
          style={{
            backgroundColor: "#6366f1",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          + New Post
        </button>
      </div>

      {/* Second Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Left-aligned buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              backgroundColor: "#e2e8f0",
              borderRadius: "12px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaChartBar style={{ marginRight: "8px" }} />
            Company Structure
          </button>
          <button
            style={{
              backgroundColor: "#e2e8f0",
              borderRadius: "12px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaStar style={{ marginRight: "8px" }} />
            Rating
          </button>
        </div>

        {/* Right-aligned buttons */}
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              backgroundColor: "#e2e8f0",
              borderRadius: "12px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaComments style={{ marginRight: "8px" }} />
            Messenger
          </button>
          <button
            style={{
              backgroundColor: "#e2e8f0",
              borderRadius: "12px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaClipboardList style={{ marginRight: "8px" }} />
            Feed
          </button>
          {/* New Widget Button */}
          <button
            onClick={onWidgetClick}
            style={{
              backgroundColor: "#e2e8f0",
              borderRadius: "12px",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            <FaTh style={{ marginRight: "8px" }} />
            Widget
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;

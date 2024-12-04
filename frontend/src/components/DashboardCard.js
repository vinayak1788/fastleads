"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


export default function DashboardCard({ content, chartData, type, totalContent }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {type === "chart" ? (
        <Bar data={chartData} />
      ) : (
        <div>
          {content && content.length > 0 ? (
            <div>
              {content.map((item, index) => (
                <div key={index} className="flex justify-between items-center mb-2">
                  <span>{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
              {totalContent && (
                <div className="mt-4 text-center font-bold text-xl">
                  Total Content: {totalContent}
                </div>
              )}
            </div>
          ) : (
            <p>No content available</p>
          )}
        </div>
      )}
    </div>
  );
}

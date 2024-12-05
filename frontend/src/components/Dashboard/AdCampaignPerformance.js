import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const AdCampaignCard = () => {
  const data = {
    labels: ["LinkedIn", "Facebook", "Instagram", "Twitter"],
    datasets: [
      {
        label: "Ad clicks",
        data: [500, 400, 550, 300],
        backgroundColor: ["#0072b1", "#1877f2", "#e4405f", "#1da1f2"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 bg-pink-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Ad Campaign Management</h2>
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>
      </div>
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-lg">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AdCampaignCard;

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import '../../../styles/campaign.module.css';

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CampaignPerformance = () => {
  // Bar Chart Data
  const barData = {
    labels: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter'],
    datasets: [
      {
        label: 'Ad clicks',
        data: [500, 400, 500, 300],
        backgroundColor: ['#0077B5', '#1877F2', '#E1306C', '#1DA1F2'],
        borderRadius: 5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      afterDatasetsDraw: (chart) => {
        const ctx = chart.ctx;
        const dataset = chart.data.datasets[0];
        const bars = chart.getElementsForDataset(dataset);

        // Icon URLs
        const iconUrls = [
          `${process.env.PUBLIC_URL}/linkedin.png`,
          `${process.env.PUBLIC_URL}/facebook.png`,
          `${process.env.PUBLIC_URL}/instagram.png`,
          `${process.env.PUBLIC_URL}/twitter.png`,
        ];

        // Load images and draw
        const icons = iconUrls.map((url) => {
          const img = new Image();
          img.src = url;
          return img;
        });

        // Draw icons inside bars
        bars.forEach((bar, index) => {
          const img = icons[index];
          img.onload = () => {
            const x = bar.x - img.width / 2; // Center the icon in the bar
            const y = bar.y + (bar.height - img.height) / 2; // Center the icon vertically in the bar

            ctx.drawImage(img, x, y, img.width, img.height);
            const borderSize = 2; // Size of the border
            ctx.lineWidth = borderSize;
            ctx.strokeStyle = 'white';
            ctx.strokeRect(
              x - borderSize / 2,
              y - borderSize / 2,
              img.width + borderSize,
              img.height + borderSize
            );
          };
        });
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.6,
        categoryPercentage: 0.6,
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  // Line Chart Data
  const lineData = {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: 'Impressions',
        data: [170, 270, 220, 300, 250, 330, 270, 330, 250, 340],
        borderColor: '#FFC107',
        backgroundColor: 'rgba(255, 193, 7, 0.2)',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'Spend',
        data: [130, 230, 180, 270, 210, 300, 230, 300, 210, 298],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'Clicks',
        data: [220, 320, 260, 350, 300, 390, 320, 390, 300, 390],
        borderColor: '#2196F3',
        backgroundColor: 'rgba(33, 150, 243, 0.2)',
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: false,
        min: 100,
        max: 600,
        grid: {
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-[#E3E4FF] via-[#CDEAE6] to-[#FFF8D8] p-0">
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-[95%] max-w-6xl bg-white p-6 rounded-md shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-bold text-grey-700">Campaign Management & Performance</h1>
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-6">
  {/* Bar Chart */}
  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-md shadow relative w-2/3"> {/* Change w-1/2 to w-2/3 */}
    <Bar data={barData} options={barOptions} height={100} />
    <p className="text-center text-gray-600 mt-4 font-medium">Ad clicks</p>
  </div>

  {/* Line Chart */}
  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-md shadow w-2/3"> {/* Change w-1/2 to w-2/3 */}
    <h2 className="text-center text-gray-600 font-medium mb-4">Ads Performance</h2>
    <div className="w-full">
      <Line data={lineData} options={lineOptions} />
    </div>
  </div>
</div>

          {/* Footer Section */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-purple-600 font-semibold flex items-center">
              <span className="mr-2">📊</span> Ad Campaign
            </p>
          </div>

          {/* Line separator before search input */}
          <div className="border-t border-blue-300 my-10"></div>

          {/* Search Input Section */}
          <div className="mt-4 w-full max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-1/3 rounded-full border border-gray-300 px-3 py-1 pl-8 text-sm text-grey-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

        {/* Social Post Section with margin-top for spacing */}
        <div className="mt-4">
            <div className="bg-gradient-to-r from-[#E3E4FF] via-[#CDEAE6] to-[#FFF8D8] p-0">
              <div className="w-full max-w-4xl mx-auto mb-0">
                <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Social Post for Ad</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
                      Published
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Untitled</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                      Scheduled
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Untitled-2</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm">
                      Scheduled
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Post for Ad</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">
                      Draft
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4 border-b">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Untitled</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">
                      Draft
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-center justify-between px-6 py-4">
                    <div>
                      <h3 className="text-blue-700 font-bold text-lg">Post for Ad</h3>
                      <p className="text-gray-600 text-sm">Social Post - X Twitter</p>
                      <p className="text-gray-600 text-sm">
                        Scheduled for Tue, NOV <strong>29th 11:45 am</strong>
                      </p>
                    </div>
                    <span className="bg-gray-200 text-gray-600 px-4 py-1 rounded-full text-sm">
                      Draft
                    </span>
                    <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPerformance;
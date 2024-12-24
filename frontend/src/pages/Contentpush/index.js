import React, { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import Link from "next/link";
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import "../../styles/Contentpush/content.module.css";
import "../../styles/globals.css";

// Register Chart.js components at the top level
Chart.register(...registerables);

const GaugeChart = () => {
  const gaugeRef = useRef(null);

  // Gauge Chart logic
  useEffect(() => {
    const canvas = gaugeRef.current;
    const ctx = canvas.getContext("2d");
    const centerX = canvas.width / 2;
    const centerY = canvas.height - 140;
    const radius = 150;
    const gapSize = 0.08;
    const arcLineWidth = 15;

    const drawArc = (start, end, color) => {
      ctx.beginPath();
      ctx.lineWidth = arcLineWidth;
      ctx.strokeStyle = color;
      ctx.lineCap = "round";
      ctx.arc(centerX, centerY, radius, start, end, false);
      ctx.stroke();
    };

    const drawDotOnArc = (value, maxValue) => {
      const orangeStartAngle = 1.7 * Math.PI + gapSize;
      const orangeEndAngle = 1.9 * Math.PI - gapSize;

      const normalizedValue = Math.min(Math.max(value, 0), maxValue);
      const angle =
        orangeStartAngle +
        (normalizedValue / maxValue) * (orangeEndAngle - orangeStartAngle);
      const dotX = centerX + radius * Math.cos(angle);
      const dotY = centerY + radius * Math.sin(angle);

      const dotSize = 12;
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotSize, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFA500";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotSize - 4, 0, 2 * Math.PI);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const redArcStart = Math.PI;
    const redArcEnd = 1.4 * Math.PI - gapSize;
    const yellowArcStart = 1.4 * Math.PI + gapSize;
    const yellowArcEnd = 1.7 * Math.PI - gapSize;
    const orangeArcStart = 1.7 * Math.PI + gapSize;
    const orangeArcEnd = 1.9 * Math.PI - gapSize;
    const greenArcStart = 1.9 * Math.PI + gapSize;
    const greenArcEnd = 2 * Math.PI;

    const drawFullStopsInArc = (start, end, count) => {
      const step = (end - start) / (count - 1);
      const stopRadius = 1;

      for (let i = 0; i < count; i++) {
        const angle = start + i * step;
        const dotX = centerX + (radius * 0.85) * Math.cos(angle);
        const dotY = centerY + (radius * 0.85) * Math.sin(angle);

        ctx.beginPath();
        ctx.arc(dotX, dotY, stopRadius, 0, 2 * Math.PI);
        ctx.fillStyle = "#000000";
        ctx.fill();
      }
    };

    const stopCount = 8;
    drawFullStopsInArc(Math.PI, 1.5 * Math.PI - gapSize, stopCount);
    drawFullStopsInArc(1.5 * Math.PI + gapSize, 2 * Math.PI, stopCount);

    drawArc(redArcStart, redArcEnd, "#FF5C5C");
    drawArc(yellowArcStart, yellowArcEnd, "#FFFF00");
    drawArc(orangeArcStart, orangeArcEnd, "#FFAA00");
    drawArc(greenArcStart, greenArcEnd, "#5DCB8A");

    const value = 652; // Sample value
    const maxValue = 1000;
    drawDotOnArc(value, maxValue);
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      <canvas ref={gaugeRef} width="450" height="300" />
      <div
        className="absolute text-center"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <span className="text-5xl text-blue-700 font-bold">652</span>
        <p className="text-lg text-gray-500 font-semibold mt-2">
          Content Push Marketing
        </p>
        <p className="text-gray-500 text-sm">Last Check on 24 Apr</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const barChartRef = useRef(null);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const ctx = barChartRef.current.getContext("2d");
    const barChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Posts", "Reels", "Videos", "Blogs"],
        datasets: [
          {
            label: "Content Types",
            data: [500, 150, 100, 50],
            backgroundColor: ["#0000FF", "#74B72E", "#FFA500", "#FFB6C1"],
            borderRadius: 5,
            barThickness: 130,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: {
            beginAtZero: true,
            max: 600,
            grid: { display: false },
          },
        },
      },
    });

    return () => {
      barChartInstance.destroy();
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#E3E4FF] via-[#CDEAE6] to-[#FFF8D8] min-h-screen flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleSidebarToggle} />

      <div className="flex-grow flex flex-col p-6">
        {/* Main card with margin pushed to the right */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-screen-lg ml-auto"> {/* Added ml-auto */}
          <div className="bg-green-100 p-4 rounded-lg flex justify-between items-center">
            <h2 className="text-gray-800 font-bold text-lg">
              📄 Create, Push & Market Content
            </h2>
            <button className="text-gray-600 hover:text-gray-800 font-bold text-xl">
              ✖
            </button>
          </div>

          {/* Navbar inside the card */}
          <Navbar toggleSidebar={handleSidebarToggle} />

          {/* Create a flex container for both charts side by side */}
          <div className="flex gap-12 mt-6">
            {/* Gauge Chart Card */}
            <div className="w-1/2 bg-white shadow-lg rounded-lg p-4">
              <GaugeChart />
            </div>

            {/* Bar Chart Card */}
            <div className="w-1/2 bg-white shadow-lg rounded-lg p-4">
              <canvas ref={barChartRef} className="w-full h-full" width="650" height="200" />
            </div>
          </div>

          {/* Footer Section */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-purple-600 font-semibold flex items-center">
              <span className="mr-2">📊</span> Ad Campaign
            </p>
            <Link href="/Details">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                + Create Campaign
              </button>
            </Link>
          </div>

          {/* Search Input Section */}
          <div className="border-t border-blue-300 my-4"></div>
          <div className="mt-4 w-full max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-1/3 rounded-full border border-gray-300 px-3 py-1 pl-8 text-sm text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          {/* Social Post Section with margin-top for spacing */}
          <div className="mt-4">
            <div className="bg-gradient-to-r from-[#c1c2e8] via-[#CDEAE6] to-[#FFF8D8] p-0">
              <div className="w-full max-w-4xl mx-auto mb-0">
                <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                  {/* Social Post Items */}
                  {Array.from({ length: 5 }).map((_, index) => {
                    const commonPost = {
                      title: "Untitled" + (index > 0 ? "-" + index : ""),
                      description: "Social Post - X Twitter",
                      scheduledDate: "Tue, NOV 29th 11:45 am",
                      status: index % 2 === 0 ? "Published" : index % 3 === 0 ? "Scheduled" : "Draft", 
                      statusStyle: index % 2 === 0 ? "bg-green-100 text-green-600" : (index % 3 === 0 ? "bg-orange-100 text-orange-600" : "bg-gray-200 text-gray-600"),
                    };

                    return (
                      <div className="flex items-center justify-between px-6 py-4 border-b" key={index}>
                        <div>
                          <h3 className="text-blue-700 font-bold text-lg">{commonPost.title}</h3>
                          <p className="text-gray-600 text-sm">{commonPost.description}</p>
                          <p className="text-gray-600 text-sm">Scheduled for {commonPost.scheduledDate}</p>
                        </div>
                        <span className={`${commonPost.statusStyle} px-4 py-1 rounded-full text-sm`}>
                          {commonPost.status}
                        </span>
                        <button className="text-blue-500 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-semibold">
                          Edit
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React from 'react';
// import DashboardCard from '../../DashboardCard'; // Import reusable DashboardCard component
// import './CompetitorKeywordsCard.module.css'; // Import CSS file for this component
// import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const CompetitorKeywordsCard = () => {
//   // Data for the competitor keywords bar chart
//   const data = {
//     labels: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'YouTube', 'Share Chat'], // Labels for the bars
//     datasets: [
//       {
//         label: 'Competitor Keywords', // Label for the dataset
//         data: [22779, 62635, 29657, 12456, 10234, 8765], // The competitor keyword data (values)
//         backgroundColor: ['#36A2EB', '#FF6384', '#FFCD56', '#4BC0C0', '#FF9F40', '#9966FF'], // Colors for each bar
//         borderColor: ['#36A2EB', '#FF6384', '#FFCD56', '#4BC0C0', '#FF9F40', '#9966FF'], // Border color for each bar
//         borderWidth: 1, // Border width
//       },
//     ],
//   };

//   // Options for the bar chart (horizontal bar chart)
//   const options = {
//     indexAxis: 'y', // Set horizontal bars by changing indexAxis to 'y'
//     responsive: true,
//     scales: {
//       x: {
//         beginAtZero: true, // Ensure the x-axis starts at zero
//       },
//     },
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
//           },
//         },
//       },
//     },
//   };

//   return ( 
//     <DashboardCard className="competitor-keywords-card">
//       <div className="card-header">Your Competitor Keywords & Trends
//         {/* Adding a button with a link href */}
//         <a href="/Competitors" className="close-button">
//           <button>↗</button>
//         </a>
//       </div>
//       <div className="card-body">
//         <div className="chart-container">
//           <div className="bar-chart">
//             {/* Bar Chart for Competitor Keywords */}
//             <Bar data={data} options={options} />
//           </div>
//           {/* <div className="competitor-info">
//             <p><strong>LinkedIn:</strong> 22,779</p>
//             <p><strong>Facebook:</strong> 62,635</p>
//             <p><strong>Instagram:</strong> 29,657</p>
//             <p><strong>Twitter:</strong> 12,456</p>
//             <p><strong>YouTube:</strong> 10,234</p>
//             <p><strong>Share Chat:</strong> 8,765</p>
//           </div> */}
//         </div>
//       </div>
//     </DashboardCard>
//   );
// };

// export default CompetitorKeywordsCard;

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styles from './CompetitorKeywordsCard.module.css';
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const data = [
  { name: "LinkedIn", value: 74779, color: "#0077B5" },
  { name: "Facebook", value: 56635, color: "#4267B2" },
  { name: "Instagram", value: 43887, color: "#E4405F" },
  { name: "Twitter", value: 19027, color: "#1DA1F2" },
  { name: "YouTube", value: 8142, color: "#FF0000" },
  { name: "Share chat", value: 4918, color: "#00B87C" }
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <rect x={x} y={y} width={width} height={height} fill={fill} />;
};

const CompetitorTrends = () => {
  return (
    <div className={styles['competitor-container']}>
      <div className={styles.header}>
        <div className={styles['header-title']}>
          <TrendingUpIcon className={styles.icon} />
          <span>Your Competitor Keywords, Trends</span>
        </div>
        <a href="/Competitors" className="close-button">
           <button>↗</button>
       </a>
      </div>

      <div className={styles['chart-container']}>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" domain={[0, 80000]} />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip
              formatter={(value, name) => [`${value.toLocaleString()}`, name]}
            />
            <Legend />
            <Bar
              dataKey="value"
              shape={<CustomBar />}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Bar
                  key={`bar-${index}`}
                  dataKey="value"
                  fill={entry.color}
                  name={entry.name}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompetitorTrends;

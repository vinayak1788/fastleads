
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from '../../../styles/Keywords/KeywordsTrendsCard.module.css';
import NotesIcon from "@mui/icons-material/Notes";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const data = [
  { name: "Ideas and Inspiration", value: 45, color: "#F44336" },
  { name: "To create Outline", value: 31, color: "#FFC107" },
  { name: "To draft content", value: 18, color: "#673AB7" },
  { name: "To write content", value: 6, color: "#4CAF50" },
];

const InsightsChart = () => {
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="black" 
        textAnchor="middle" 
        dominantBaseline="middle"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={styles['insights-container']}>
      <div className={styles.header}>
        <div className={styles['header-title']}>
          <NotesIcon className={styles.icon} />
          <span>Your Keywords, Trends, Insights</span>
        </div>
        <OpenInNewIcon className={styles['icon-btn']} />
      </div>

      <div className={styles['chart-container']}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={120}
            labelLine={true}
            label={renderCustomLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <div className={styles.labels}>
        {data.map((item, index) => (
          <div key={index} className={styles['label-item']}>
            <span style={{ color: item.color, fontWeight: "bold" }}>
              {item.value}%
            </span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsChart;

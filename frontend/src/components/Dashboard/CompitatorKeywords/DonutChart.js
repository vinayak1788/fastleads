import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styles from './DonutChart.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const ComparisonChart = () => {
  const data = {
    labels: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter', 'YouTube', 'ShareChat'],
    datasets: [{
      label: 'Platform Engagement',
      data: [74779, 56635, 43887, 19027, 8142, 4918],
      backgroundColor: [
        '#0077B5',
        '#4267B2',
        '#E1306C',
        '#1DA1F2',
        '#FF0000',
        '#FFE812',
      ],
    }]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#333',
        font: { weight: 'bold' },
        formatter: (value) => value.toLocaleString(),
        padding: 6
      }
    },
    scales: {
      x: { 
        grid: { display: false }
      },
      y: { 
        grid: { display: false },
        barThickness: 8,
        barPercentage: 0.2,
        categoryPercentage: 0.05
      }
    }
  };

  return (
    <div className={styles.chartWrapper}>
      <Bar data={data} options={options} />
    </div>
  );
};
export const DonutChart = () => {
  const data = {
    labels: ['Taglines', 'Keywords', 'Hashtags'],
    datasets: [{
      data: [25,20,55],
      backgroundColor: [
        '#FFCC00',
        '#F76659',
        '#00C7BE',
      ],
      borderWidth: 0
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: 180,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { 
          padding: 20,
          font: { size: 14 }
        }
      },
      datalabels: {
        color: '#fff',
        font: { weight: 'bold', size: 16 },
        formatter: (value) => `${value}%`
      }
    }
  };

  return (
    <div className={styles.chartWrapper}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

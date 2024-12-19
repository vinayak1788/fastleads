import React from "react";
import styles from '../../../styles/Keywords/DashboardCard.module.css';
import { Link } from 'react-router-dom';
import { FaTimes, FaChartLine } from 'react-icons/fa';

const DashboardCard = () => {
    const data = [
      { color: '#FF6B6B', percentage: 6, label: 'To write content' },
      { color: '#4ECDC4', percentage: 18, label: 'To draft content' },
      { color: '#45B7D1', percentage: 31, label: 'To create Outline' },
      { color: '#96CEB4', percentage: 45, label: 'Ideas and Inspiration' }
    ]

    return (
      <div className={styles.card}>
        <div className={styles.navbar}>
          <h2 className={styles.navTitle}>
            <FaChartLine style={{ marginRight: '10px' }} /> 
            Your Keywords, Trends, Insights
          </h2>
          <button className={styles.closeButton}>
            <FaTimes />
          </button>

        </div>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <div className={styles.pieChart}>
              {/* Empty pie chart - labels moved outside */}
            </div>
            <div className={styles.legendContainer}>
              {data.map((item, index) => (
                <div key={index} className={styles.legendItem}>
                  <div 
                    className={styles.legendColor} 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className={styles.legendText}>
                    {item.label}
                    <span className={styles.legendPercentage}>
                      {item.percentage}%
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.barChart}>
              <div className={styles.bar}>
                <span className={styles.barLabel}>Keywords</span>
                <div className={styles.verticalLine}></div>
                <div 
                  className={styles.barFill} 
                  style={{ 
                    width: "32%", 
                    backgroundColor: "#7F73FB"
                  }}
                />
                <span className={styles.percentageLabel}>32%</span>
              </div>
              <div className={styles.bar}>
                <span className={styles.barLabel}>Hashtags</span>
                <div className={styles.verticalLine}></div>
                <div 
                  className={styles.barFill} 
                  style={{ 
                    width: "48%", 
                    backgroundColor: "#A9A1FD"
                  }}
                />
                <span className={styles.percentageLabel}>48%</span>
              </div>
              <div className={styles.bar}>
                <span className={styles.barLabel}>Taglines</span>
                <div className={styles.verticalLine}></div>
                <div 
                  className={styles.barFill} 
                  style={{ 
                    width: "55%", 
                    backgroundColor: "#BFB9FD"
                  }}
                />
                <span className={styles.percentageLabel}>55%</span>
              </div>
            </div>            <div className={styles.totalScore}>
            <h1>2056</h1>
            <span>Total Score</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
import React from 'react';

const ContentAnalysisCard = () => {
  return (
    <div style={styles.card}>
      {/* Header Section */}
      <div style={styles.header}>
        <span style={styles.title}>Content Integration & Analysis</span>
        <button title="Expand" style={styles.expandButton}>
          ↗
        </button>
      </div>

      {/* Content Section */}
      <div style={styles.content}>
        {/* Left Side: Social Platforms with Progress Bars */}
        <div style={styles.leftContent}>
          {progressData.map((item, index) => (
            <div key={index} style={styles.row}>
              <span style={styles.platform}>
                {item.icon} {item.name}
              </span>
              <div style={styles.progressBarContainer}>
                <div
                  style={{
                    ...styles.progressBar,
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                ></div>
              </div>
              <span style={styles.percentage}>{item.percentage}%</span>
            </div>
          ))}
        </div>

        {/* Right Side: Total Content Count */}
        <div style={styles.rightContent}>
          <div style={styles.totalCount}>2056</div>
          <div style={styles.totalLabel}>Total no of Content</div>
        </div>
      </div>
    </div>
  );
};

const progressData = [
  { name: 'LinkedIn', icon: '🔗', percentage: 32, color: '#0077b5' },
  { name: 'Facebook', icon: '📘', percentage: 48, color: '#1877F2' },
  { name: 'Twitter', icon: '🐦', percentage: 55, color: '#1DA1F2' },
  { name: 'Instagram', icon: '📸', percentage: 88, color: '#E1306C' },
  { name: 'YouTube', icon: '🎥', percentage: 92, color: '#FF0000' },
];

const styles = {
  card: {
    width: '490px',
    height: '00px',
    background: 'linear-gradient(to bottom right, #fdfdfd, #f0f4ff)',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  expandButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#888',
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    width: '65%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  platform: {
    width: '100px',
    fontSize: '0.9rem',
    color: '#555',
    display: 'flex',
    alignItems: 'center',
  },
  progressBarContainer: {
    flex: 1,
    background: '#e0e0e0',
    borderRadius: '5px',
    height: '10px',
    overflow: 'hidden',
    margin: '0 10px',
  },
  progressBar: {
    height: '100%',
    borderRadius: '5px',
  },
  percentage: {
    fontSize: '0.9rem',
    color: '#555',
  },
  rightContent: {
    width: '30%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  totalCount: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#0000FF',
  },
  totalLabel: {
    fontSize: '1rem',
    color: '#666',
    marginTop: '5px',
  },
};

export default ContentAnalysisCard;

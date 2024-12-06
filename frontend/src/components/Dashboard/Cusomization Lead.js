import React from 'react';

const Card = () => {
  return (
    <div style={styles.card}>
      {/* Header Section */}
      <div style={styles.header}>
        <span style={styles.title}>Customization Lead Management</span>
        <button title="Expand" style={styles.expandButton}>
          ↗
        </button>
      </div>

      {/* Chart Section */}
      <div style={styles.chartContainer}>
        <svg viewBox="0 0 100 70" preserveAspectRatio="none" style={styles.chart}>
          {/* Line graph resembling the uploaded image */}
          <polyline
            fill="none"
            stroke="#8C52FF"
            strokeWidth="3"
            strokeLinecap="round"
            points="0,55 20,50 40,40 60,45 80,25 100,10"
          />
        </svg>

        {/* Total Leads Box */}
        <div style={styles.totalLeadsBox}>
          <span style={styles.leadsLabel}>Total Leads</span>
          <div style={styles.leadsCount}>402</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '360px',
    height: '300px',
    background: 'linear-gradient(to bottom right, #e0f7fa, #f5f7ff)',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#555',
  },
  expandButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#888',
    cursor: 'pointer',
  },
  chartContainer: {
    position: 'relative',
    height: '200px',
    marginTop: '10px',
  },
  chart: {
    width: '100%',
    height: '100%',
  },
  totalLeadsBox: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '10px 15px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
  },
  leadsLabel: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '5px',
    display: 'block',
  },
  leadsCount: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#6200ea',
  },
};

export default Card;

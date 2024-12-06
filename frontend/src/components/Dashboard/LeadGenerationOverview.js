import React from 'react';

const LeadOverview = () => {
  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.title}>Lead Generation Overview</span>
        <button title="Expand" style={styles.expandButton}>
          ↗
        </button>
      </div>

      {/* Total Leads Section */}
      <div style={styles.totalLeadsContainer}>
        <div>
          <span style={styles.totalLeadsLabel}>Total Leads</span>
        </div>
        <div style={styles.totalLeadsCount}>3205</div>
      </div>

      {/* Divider */}
      <div style={styles.divider}></div>

      {/* Social Media Breakdown */}
      <div style={styles.socialContainer}>
        <div style={styles.socialCard}>
          <span style={styles.socialLabel}>
            <i style={styles.icon}>🔗</i> LinkedIn
          </span>
          <span style={styles.socialCount}>2203</span>
        </div>
        <div style={styles.socialCard}>
          <span style={styles.socialLabel}>
            <i style={styles.icon}>📘</i> Facebook
          </span>
          <span style={styles.socialCount}>320</span>
        </div>
        <div style={styles.socialCard}>
          <span style={styles.socialLabel}>
            <i style={styles.icon}>📸</i> Instagram
          </span>
          <span style={{ ...styles.socialCount, color: '#ff4d4d' }}>321</span>
        </div>
        <div style={styles.socialCard}>
          <span style={styles.socialLabel}>
            <i style={styles.icon}>🐦</i> Twitter
          </span>
          <span style={styles.socialCount}>562</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '480px',
    background: 'linear-gradient(to bottom right, #f0f8ff, #e6e6fa)',
    borderRadius: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
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
    color: '#333',
  },
  expandButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    color: '#888',
    cursor: 'pointer',
  },
  totalLeadsContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  totalLeadsLabel: {
    fontSize: '1.2rem',
    color: '#555',
    display: 'block',
  },
  totalLeadsCount: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#0000FF',
  },
  divider: {
    height: '4px',
    width: '100%',
    background: 'linear-gradient(to right, #0066ff, #ff3366, #0066ff)',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  socialContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  socialCard: {
    background: '#fff',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  socialLabel: {
    fontSize: '1rem',
    color: '#666',
    display: 'block',
    marginBottom: '5px',
  },
  socialCount: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0066ff',
  },
  icon: {
    marginRight: '5px',
  },
};

export default LeadOverview;

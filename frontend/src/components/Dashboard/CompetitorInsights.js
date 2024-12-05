import React from 'react';
import Link from 'next/link';

const CompetitorInsightsCard = () => {
  const data = [
    { label: "LinkedIn", value: 74779, color: "#0e76a8" },
    { label: "Facebook", value: 56635, color: "#3b5998" },
    { label: "Instagram", value: 43887, color: "#e4405f" },
    { label: "Twitter", value: 19027, color: "#1da1f2" },
    { label: "YouTube", value: 8142, color: "#ff0000" },
    { label: "Share chat", value: 4918, color: "#f1c40f" },
  ];

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <span style={styles.cardTitle}>Competitor insights & Industry Trends</span>
        <Link href="/components/CompetitorInsights">
          <button style={styles.navigateButton}>↗</button>
        </Link>
      </div>
      
      <div style={styles.graph}>
        {data.map((item, index) => (
          <div key={index} style={styles.barWrapper}>
            <div style={styles.barInfo}>
              <span style={styles.label}>{item.label}</span>
            </div>
            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.bar,
                  width: `${(item.value / 80000) * 100}%`, // Dynamic width calculation based on max value
                  backgroundColor: item.color,
                }}
              />
            </div>
            <span style={styles.value}>{item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '750px',
    margin: '20px auto',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '15px',
    borderBottom: '2px solid #e0e0e0',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#333',
  },
  navigateButton: {
    padding: '8px 15px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  graph: {
    marginTop: '20px',
  },
  barWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  barInfo: {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
  },
  barContainer: {
    width: '60%',
    height: '12px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    marginRight: '15px',
  },
  bar: {
    height: '100%',
    borderRadius: '8px',
  },
  value: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    width: '10%',
    textAlign: 'right',
  },
};

export default CompetitorInsightsCard;

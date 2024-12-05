import React from 'react';
import Link from 'next/link';

const ContentIntegrationAnalysis = () => {
  const data = [
    { label: "LinkedIn", value: 32, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/LinkedIn_Logo_2013.svg" },
    { label: "Facebook", value: 48, icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
    { label: "Twitter", value: 55, icon: "https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_2021.svg" },
    { label: "Instagram", value: 88, icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
    { label: "YouTube", value: 92, icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" },
  ];

  const totalContent = 2056;

  const getColor = (label) => {
    const colors = {
      LinkedIn: '#0e76a8',
      Facebook: '#3b5998',
      Twitter: '#1da1f2',
      Instagram: '#e4405f',
      YouTube: '#ff0000',
    };
    return colors[label] || '#000';
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <span style={styles.cardTitle}>Content Integration & Analysis</span>
        <Link href="/components/ContentIntegration">
          <button style={styles.navigateButton}>↗</button>
        </Link>
      </div>
      
      {/* Display the Total Content value in a larger, centered format */}
      <div style={styles.totalContentWrapper}>
        <span style={styles.totalContentText}>Total Content:</span>
        <span style={styles.totalCount}>{totalContent}</span>
      </div>

      <div style={styles.graph}>
        {data.map((item, index) => (
          <div key={index} style={styles.barWrapper}>
            <div style={styles.barInfo}>
              <img src={item.icon} alt={item.label} style={styles.icon} />
              <span style={styles.label}>{item.label}</span>
            </div>
            <div style={styles.barContainer}>
              <div
                style={{
                  ...styles.bar,
                  width: `${item.value}%`,
                  backgroundColor: getColor(item.label),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    padding: '15px', // Reduced padding
    borderRadius: '12px', // Slightly reduced border radius
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)', // Smaller shadow
    width: '80%', // Reduced width for smaller card
    maxWidth: '750px', // Maximum width of the card
    margin: '20px auto',
    transition: 'all 0.3s ease',
    ':hover': {
      boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px', // Reduced padding
    borderBottom: '2px solid #e0e0e0',
    borderRadius: '10px 10px 0 0', // Slightly reduced top border radius
  },
  cardTitle: {
    fontSize: '20px', // Reduced font size
    fontWeight: '700',
    color: '#333',
  },
  navigateButton: {
    padding: '8px 15px', // Smaller padding
    fontSize: '14px', // Smaller font size
    backgroundColor: '#3498db',
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  navigateButtonHover: {
    backgroundColor: '#2980b9',
  },
  totalContentWrapper: {
    textAlign: 'center',
    margin: '20px 0', // Reduced margin
    fontSize: '20px', // Reduced font size
    fontWeight: '700',
    color: '#333',
  },
  totalContentText: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333',
  },
  totalCount: {
    fontSize: '40px', // Reduced font size
    fontWeight: '800',
    color: '#3498db',
  },
  graph: {
    marginTop: '20px', // Reduced margin
  },
  barWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px', // Reduced margin
    justifyContent: 'space-between',
  },
  barInfo: {
    display: 'flex',
    alignItems: 'center',
    width: '25%',
  },
  icon: {
    width: '25px', // Smaller icons
    height: '25px', // Smaller icons
    marginRight: '8px', // Reduced margin
  },
  label: {
    fontSize: '14px', // Smaller font size for labels
    fontWeight: '600',
    color: '#333',
  },
  barContainer: {
    width: '60%',
    height: '12px', // Reduced bar height
    backgroundColor: '#f4f4f4',
    borderRadius: '8px', // Smaller border radius
    marginRight: '15px', // Reduced margin
  },
  bar: {
    height: '100%',
    borderRadius: '8px', // Smaller border radius
  },
};

export default ContentIntegrationAnalysis;

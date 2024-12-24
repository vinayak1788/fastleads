import React from 'react';
import DashboardCard from '../../DashboardCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './LeadAndCustomizationCard.module.css';
import Link from 'next/link';

const LeadAndCustomizationCard = () => {
  const data = [
    { name: 'Jan', leads: 200 },
    { name: 'Feb', leads: 400 },
    { name: 'Mar', leads: 600 },
    { name: 'Apr', leads: 700 },
    { name: 'May', leads: 800 },
    { name: 'Jun', leads: 900 },
  ];

  return (
    <div className={styles['lead-and-customization-card']}>
      <div className={styles.leadcard1}>
        <DashboardCard>
          <div className={styles['leadcard-header']}>
            Lead Generation Overview
            <Link href="/Leads" className={styles['close-button']}>
              <button>↗</button>
            </Link>
          </div>
          <div className={styles['card-body']}>
            <div className={styles['lead-overview-content']}>
              <div className={styles['total-leads']}>
                <h2>Total Leads</h2>
                <h1>3205</h1>
              </div>
              <div className={styles['platform-leads']}>
                <div className={`${styles['platform-item']} ${styles.linkedin}`}>
                  <p>LinkedIn</p>
                  <p>2203</p>
                </div>
                <div className={`${styles['platform-item']} ${styles.facebook}`}>
                  <p>Facebook</p>
                  <p>320</p>
                </div>
                <div className={`${styles['platform-item']} ${styles.instagram}`}>
                  <p>Instagram</p>
                  <p>321</p>
                </div>
                <div className={`${styles['platform-item']} ${styles.twitter}`}>
                  <p>Twitter</p>
                  <p>562</p>
                </div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
      
      <div className={styles.leadcard2}>
      
        <DashboardCard>
          <div className={styles['card-headercustomization']}>
            <span>Customization Lead Management</span>
          </div>
          <div className={styles['card-body']}>
            <div className={styles['chart-containercustomization']}>
              <ResponsiveContainer width="100%" height={180}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="leads" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
              <div className={styles['total-leads-graph']}>
                <h2>Total Leads</h2>
                <h1>402</h1>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default LeadAndCustomizationCard;

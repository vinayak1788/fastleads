import React from 'react';
import { MdTrendingUp, MdClose } from 'react-icons/md';
import { DonutChart, ComparisonChart } from '../../components/Dashboard/CompitatorKeywords/DonutChart';
import styles from '../../components/Dashboard/CompitatorKeywords/DonutChart.module.css';
import SocialCard from '../../components/Dashboard/CompitatorKeywords/SocialCard';
import GenhashContainer from '../../components/Dashboard/CompitatorKeywords/Genhash/GenhashContainer';

export default function Home() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.card}>
        <nav className={styles.navbar}>
          <div className={styles.navContent}>
            <h2 className={styles.navTitle}>
              <MdTrendingUp className={styles.navIcon} />
              Your Competitor Keywords,Trends
            </h2>
            <MdClose className={styles.closeIcon} />
          </div>
        </nav>
        <div className={styles.chartsWrapper}>
          <div className={styles.barSection}>
            <ComparisonChart />
          </div>
          <div className={styles.donutSection}>
            <DonutChart />
            
          </div>
          
        </div>

        <h2 className={styles.navTitle}>
          <MdTrendingUp className={styles.navIcon} />Industry Trends</h2>
        <hr></hr>
        <SocialCard />
        <GenhashContainer />
      </div>
     
    </div>
  );
}
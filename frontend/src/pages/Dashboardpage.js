"use client";
import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import KeywordsTrendsCard from '../components/Dashboard/YourKeywords/KeywordsTrendsCard';
import CompetitorKeywordsCard from '../components/Dashboard/CompitatorKeywords/CompitorKeyCard';
import PushMarketContentCard from '../components/Dashboard/Create, Push & Market Content/PushMarketContentCard';
import CampaignPerformanceCard from '../components/Dashboard/Campaign Management & Performance Card/CampaignPerformanceCard';
import EngagementFeedCard from '../components/Dashboard/EngagementFeed/EngagementFeedCard';
import SocialMediaInboxCard from '../components/Dashboard/SocialMediaInbox/SocialMediaInboxCard';
import ContentSchedulerCard from '../components/Dashboard/ContentScheduler/ContentSchedulerCard';
import LeadOverviewCard from '../components/Dashboard/LeadAndCustomization/LeadAndCustomizationCard';
import DashboardHeader from '../components/Dashboard/DashboardHeader/DashboardHeader';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from "../styles/Dashboard/Dashboardpage.module.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardPage = () => {
  const [isWidgetVisible, setWidgetVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState({
    keywords: true,
    competitor: true,
    pushMarket: true,
    campaign: true,
    engagement: true,
    social: true,
    scheduler: true,
    lead: true
  });

  const handleWidgetClick = () => {
    setWidgetVisible(!isWidgetVisible);
  };

  const toggleCard = (cardId) => {
    setVisibleCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const layout = [
    ...(visibleCards.keywords ? [{ i: 'keywords', x: 0, y: 0, w: 6, h: 4 }] : []),
    ...(visibleCards.competitor ? [{ i: 'competitor', x: 6, y: 0, w: 6, h: 4 }] : []),
    ...(visibleCards.pushMarket ? [{ i: 'pushMarket', x: 0, y: 4, w: 6, h: 4 }] : []),
    ...(visibleCards.campaign ? [{ i: 'campaign', x: 6, y: 4, w: 6, h: 4 }] : []),
    ...(visibleCards.engagement ? [{ i: 'engagement', x: 0, y: 8, w: 4, h: 4 }] : []),
    ...(visibleCards.social ? [{ i: 'social', x: 4, y: 8, w: 4, h: 4 }] : []),
    ...(visibleCards.scheduler ? [{ i: 'scheduler', x: 8, y: 8, w: 4, h: 4 }] : []),
    ...(visibleCards.lead ? [{ i: 'lead', x: 0, y: 12, w: 12, h: 4 }] : [])
  ];

  return (
    <div className={styles.dashboardWrapper}>
      <div className={styles.dashHeader}>
        <DashboardHeader />
      </div>
      <div className={styles.dashboardContainer}>
        <ResponsiveGridLayout
          className={styles.layout}
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          // cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={100}
          margin={[16, 16]}
          containerPadding={[16, 16]}
          isDraggable={true}
          isResizable={true}
        >
          {visibleCards.keywords && (
            <div key="keywords" className={styles.gridItem}>
              <KeywordsTrendsCard onClose={() => toggleCard('keywords')} />
            </div>
          )}
          {visibleCards.competitor && (
            <div key="competitor" className={styles.gridItem}>
              <CompetitorKeywordsCard onClose={() => toggleCard('competitor')} />
            </div>
          )}
          {visibleCards.pushMarket && (
            <div key="pushMarket" className={styles.gridItem}>
              <PushMarketContentCard onClose={() => toggleCard('pushMarket')} />
            </div>
          )}
          {visibleCards.campaign && (
            <div key="campaign" className={styles.gridItem}>
              <CampaignPerformanceCard onClose={() => toggleCard('campaign')} />
            </div>
          )}
          {visibleCards.engagement && (
            <div key="engagement" className={styles.gridItem}>
              <EngagementFeedCard onClose={() => toggleCard('engagement')} />
            </div>
          )}
          {visibleCards.social && (
            <div key="social" className={styles.gridItem}>
              <SocialMediaInboxCard onClose={() => toggleCard('social')} />
            </div>
          )}
          {visibleCards.scheduler && (
            <div key="scheduler" className={styles.gridItem}>
              <ContentSchedulerCard onClose={() => toggleCard('scheduler')} />
            </div>
          )}
          {visibleCards.lead && (
            <div key="lead" className={styles.gridItem}>
              <LeadOverviewCard onClose={() => toggleCard('lead')} />
            </div>
          )}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default DashboardPage;

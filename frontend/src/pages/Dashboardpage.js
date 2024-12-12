import React from 'react';
import KeywordsTrendsCard from '../components/Dashboard/YourKeywords/KeywordsTrendsCard';
import CompetitorKeywordsCard from '../components/Dashboard/CompitatorKeywords/CompitorKeyCard';
import PushMarketContentCard from '../components/Dashboard/Create, Push & Market Content/PushMarketContentCard';
import CampaignPerformanceCard from '../components/Dashboard/Campaign Management & Performance Card/CampaignPerformanceCard';
import EngagementFeedCard from '../components/Dashboard/EngagementFeed/EngagementFeedCard';
import SocialMediaInboxCard from '../components/Dashboard/SocialMediaInbox/SocialMediaInboxCard';
import ContentSchedulerCard from '../components/Dashboard/ContentScheduler/ContentSchedulerCard';
import LeadOverviewCard from '../components/Dashboard/LeadAndCustomization/LeadAndCustomizationCard';  // Updated import

import DashboardHeader from '../components/Dashboard/DashboardHeader/DashboardHeader'; // Import DashboardHeader component
import "../styles/Dashboard.css";  // CSS file import

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div className="dash-header">
        <DashboardHeader />
        </div>
        <dragable>
      <div className="row">
        <KeywordsTrendsCard />
        <CompetitorKeywordsCard />
      </div>
      <div className="row">
        <PushMarketContentCard />
        <CampaignPerformanceCard />
      </div>
      <div className="row">
        <EngagementFeedCard />
        <SocialMediaInboxCard />
        <ContentSchedulerCard />
      </div>
      <div className="row">
        <LeadOverviewCard />
      </div>
      </dragable>
    </div>
  );
};

export default DashboardPage;

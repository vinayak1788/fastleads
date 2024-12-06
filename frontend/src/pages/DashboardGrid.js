"use client";
import styles from "../styles/grid.module.css";
import React, { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
import { MdDashboard, MdClose, MdWidgets, MdAdd } from 'react-icons/md';
import ContentIntegrationAnalysis from "../components/Dashboard/ContentAnalysisCard";
import CompetitorInsightsTrends from "../components/Dashboard/CompetitorInsights";
import EngagementInteractionFeed from "../components/Dashboard/EngagementInteraction";
import Leads from "../components/Dashboard/LeadGenerationOverview";
import SocialMediaInbox from "../components/Dashboard/SocialMediaInbox";
import LeadManagement from "../components/Dashboard/Cusomization Lead";
import AdCampaignPerformance from "../components/Dashboard/AdCampaignPerformance";
import ContentScheduler from "../components/Dashboard/ContentScheduler";
import ContentPushMarketing from "../components/Dashboard/ContentPushMarketing";
import { MdBusiness } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import { MdMessage } from 'react-icons/md';
import { MdRssFeed } from 'react-icons/md';


const DraggableCard = ({ id, index, moveCard, onClose, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={styles.draggableCard}
    >
      <div className={styles.cardHeader}>
        <button className={styles.closeButton} onClick={() => onClose(id)}>
          <MdClose />
        </button>
      </div>
      {children}
    </div>
  );
};

const DashboardHeader = ({ closedCards, onRestoreCard }) => {
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.headerLeft}>
        {/* <MdDashboard className={styles.dashboardIcon} /> */}
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
      </div>
      <div className={styles.headerRight}>
        <button className={styles.newPostButton}>
          <MdAdd /> New Post
        </button>
        <div className={styles.widgetMenu}>
          <button className={styles.widgetIconButton}>
            <MdWidgets />
          </button>
          <div className={styles.widgetDropdown}>
            {closedCards.map(card => (
              <div
                key={card.id}
                className={styles.widgetItem}
                onClick={() => onRestoreCard(card.id)}
              >
                {card.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardGrid = () => {
  const [activeCards, setActiveCards] = useState([
    { id: 1, title: 'Content Integration', component: <ContentIntegrationAnalysis /> },
    { id: 2, title: 'Competitor Insights', component: <CompetitorInsightsTrends /> },
    { id: 3, title: 'Engagement Interaction', component: <EngagementInteractionFeed /> },
    { id: 4, title: 'Social Media Inbox', component: <SocialMediaInbox /> },
    { id: 5, title: 'Customization Lead ', component: <LeadManagement /> },
    { id: 6, title: 'Leads Genrative', component: <Leads /> },
    { id: 7, title: 'Ad Campaign Performance', component: <AdCampaignPerformance /> },
    { id: 8, title: 'Content Scheduler', component: <ContentScheduler /> },
    { id: 9, title: 'Content Push Marketing', component: <ContentPushMarketing /> },
  ]);

  const [closedCards, setClosedCards] = useState([]);

  const handleCloseCard = (cardId) => {
    const cardToClose = activeCards.find(card => card.id === cardId);
    setActiveCards(prev => prev.filter(card => card.id !== cardId));
    setClosedCards(prev => [...prev, cardToClose]);
  };

  const handleRestoreCard = (cardId) => {
    const cardToRestore = closedCards.find(card => card.id === cardId);
    setClosedCards(prev => prev.filter(card => card.id !== cardId));
    setActiveCards(prev => [...prev, cardToRestore]);
  };

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = activeCards[dragIndex];
    setActiveCards(prevCards => {
      const newCards = [...prevCards];
      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);
      return newCards;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <DashboardHeader closedCards={closedCards} onRestoreCard={handleRestoreCard} />
      <DashboardSubHeader />
      <div className={styles.grid}>
        <div className={styles.gridContainer}>
          {activeCards.map((card, index) => (
            <DraggableCard
              key={card.id}
              id={card.id}
              index={index}
              moveCard={moveCard}
              onClose={handleCloseCard}
            >
              {card.component}
            </DraggableCard>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

const DashboardSubHeader = () => {
  return (
    <div className={styles.subHeader}>
  <div className={styles.subHeaderLeft}>
    <div className={styles.subHeaderItem}>
      <MdBusiness className={styles.subHeaderIcon} />
     
      <button className={styles.actionButton}>Company Structure</button> {/* Button added */}
    </div>
    <div className={styles.subHeaderItem}>
      <MdStar className={styles.subHeaderIcon} />
      
      <button className={styles.actionButton}>Rating</button> {/* Button added */}
    </div>
  </div>
  <div className={styles.subHeaderRight}>
    <div className={styles.subHeaderItem}>
      <MdMessage className={styles.subHeaderIcon} />
  
      <button className={styles.actionButton}>Messenger</button> {/* Button added */}
    </div>
    
  </div>
</div>

  );
};export default DashboardGrid;
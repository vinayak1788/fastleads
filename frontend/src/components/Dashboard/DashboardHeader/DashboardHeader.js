import React from 'react';
import Image from 'next/image';
import styles from "./DashboardHeader.module.css";

const NavigationButton = ({ icon, label }) => {
  return (
    <button className={styles.Headerbutton}>
      <div className={styles.buttonContent}>
        {icon && (
          <Image
            src={icon}
            alt=""
            width={20}
            height={20}
            className={styles.icon}
          />
        )}
        <span className={styles.label}>{label}</span>
      </div>
    </button>
  );
};

const DashboardHeader = ({ visibleCards, onToggleCard }) => {
  const widgets = [
    { id: 'keywords', name: 'Keywords Trends' },
    { id: 'competitor', name: 'Competitor Keywords' },
    { id: 'pushMarket', name: 'Push & Market Content' },
    { id: 'campaign', name: 'Campaign Performance' },
    { id: 'engagement', name: 'Engagement Feed' },
    { id: 'social', name: 'Social Media Inbox' },
    { id: 'scheduler', name: 'Content Scheduler' },
    { id: 'lead', name: 'Lead Overview' }
  ];

  const navigationTop = [
    {
      label: "Dashboard",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0e158bca254f394363e9838c588e176ffeeeef56f1c599fb32fae0abf845f",
    },
    {
      label: "New Post",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe",
    },
  ];

  const navigationLeft = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8e2fb753990f8ad9948746a20a440148dcb173e12c17c2be1a6d94337567211",
      label: "Company Structure",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb0e158bca254f394363e9838c588e176ffeeeef56f1c599fb32fae0abf845f",
      label: "Rating",
    },
  ];

  const navigationRight = [
    {
      label: "Calendar",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe",
    },
    {
      label: "Messenger",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd1976aebdd38c57c3fcb71f230e7b9968eef97afc167c90097a8803e6c5fcf7",
    },
    {
      label: "Feed",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/226da273c6c6eed92fdf348465adc771372b8dcce516b4f1b4a4ccd5d3e600fe",
    },
  ];

  return (
    <div className={styles['topheader-container']}>
      <div className={styles.topRow}>
        <div className={styles.navigationTop}>
          {navigationTop.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </div>

      <div className={styles.mainRow}>
        <div className={styles.leftSection}>
          {navigationLeft.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>

        <div className={styles.rightSection}>
          {navigationRight.map((item, index) => (
            <NavigationButton
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
          <div className={styles['widgets-dropdown']}>
            <button className={styles['widgets-button']}>Widgets</button>
            <div className={styles['widgets-content']}>
              {widgets.map(widget => (
                <label key={widget.id} className={styles['widget-item']}>
                  <input
                    type="checkbox"
                    checked={visibleCards[widget.id]}
                    onChange={() => onToggleCard(widget.id)}
                  />
                  {widget.name}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

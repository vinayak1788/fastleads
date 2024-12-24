"use client"; // Required for Next.js client-side rendering

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaChartLine, FaUsers, FaRegEdit, FaBullhorn, FaEnvelope, FaLayerGroup, FaCalendarAlt } from "react-icons/fa"; // Example icons
import { MdExpandMore } from "react-icons/md"; // Dropdown icon
import styles from "../../styles/Sidebar/Sidebar.module.css"; // Adjust this path as per your structure

// Navigation items configuration
const navigationItems = [
  {
    icon: <FaHome />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <FaChartLine />,
    label: "Keyword Trends",
    path: "../Keywords_Trends",
  },
  {
    icon: <FaUsers />,
    label: "Competitor",
    path: "../Competitors",
  },
  {
    icon: <FaRegEdit />,
    label: "Content Push",
    path: "../Contentpush",
  },
  {
    icon: <FaBullhorn />,
    label: "Ad Campaign",
    path: "../Campaign",
  },
  {
    icon: <FaEnvelope />,
    label: "Interaction Feed",
    path: "../Engagement_Feed",
  },
  {
    icon: <FaLayerGroup />,
    label: "Lead Generation",
    path: "../Leads",
  },
  {
    icon: <FaEnvelope />,
    label: "Social Inbox",
    path: "../SocialInbox",
    hasDropdown: true,
    dropdownItems: [
      { label: "Inbox High", path: "../social-inbox/high" },
      { label: "Inbox Medium", path: "../social-inbox/medium" },
      { label: "Inbox Low", path: "../social-inbox/low" },
    ],
  },
  {
    icon: <FaUsers />,
    label: "Leads",
    path: "../Leads",
    hasDropdown: true,
    dropdownItems: [
      { label: "Leads High", path: "/social-inbox/high" },
      { label: "Leads Medium", path: "/social-inbox/medium" },
      { label: "Leads Low", path: "/social-inbox/low" },
    ],
  },
  {
    icon: <FaCalendarAlt />,
    label: "Content Scheduler",
    path: "../ContentScheduler",
  },
];

// NavItem Component for each navigation item
const NavItem = ({ icon, label, path, hasDropdown, dropdownItems }) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = () => {
    // Navigate to the path first
    if (path) {
      router.push(path);
    }
    // Then toggle dropdown if it exists
    if (hasDropdown) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  return (
    <div className={styles.navItem}>
      <div className={styles.navItemContent} onClick={handleItemClick}>
        <span className={styles.navItemIcon}>{icon}</span>
        <span className={styles.navItemLabel}>{label}</span>
        {hasDropdown && (
          <MdExpandMore className={styles.dropdownIcon} />
        )}
      </div>
      {hasDropdown && isDropdownOpen && (
        <div className={styles.dropdownMenu}>
          {dropdownItems.map((item, index) => (
            <div
              key={index}
              className={styles.dropdownItem}
              onClick={() => router.push(item.path)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Sidebar Component
const Sidebar = () => (
  <div className={styles.sidebarContainer}>
    {navigationItems.map((item, index) => (
      <NavItem
        key={index}
        icon={item.icon}
        label={item.label}
        path={item.path}
        hasDropdown={item.hasDropdown}
        dropdownItems={item.dropdownItems || []}
      />
    ))}
  </div>
);

export default Sidebar;

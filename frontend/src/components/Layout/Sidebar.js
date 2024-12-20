"use client"; // Required for Next.js client-side rendering

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/Sidebar.module.css"; // Adjust this path as per your structure


// Navigation items configuration
const navigationItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ca21d5e0e5ef5f374fe514aab83051aeb0e8dc15622034477330b8b342dfacd?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Dashboard",
    path: "/Dashboardpage",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dfbe2131f6df32ca2e2242adf05a6675e247679ec91a645e2e7a4f3b747ea9b?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Keyword Trends",
    path: "../Keywords_Trends",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4dcc8a25406ce3e6a29ed73b822de789beb215144a9958ada7eb0612c0cb3b7?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Competitor",
    path: "../Competitors",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2eec28e61825a14ba9ebc7bc764553ca5ae9cdf40a6d7635a4717ab08d4e3f44?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Content Push",
    path: "../content-push",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf973f77f47c3f9b93b62779a161fd8d18ded1ae16ce28386e5734e6c41e09e?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Ad Campaign",
    path: "../ad-campaign",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c35d24e8dbe5c1966ac377bcaf4d3a03ce067e18ef04a2524f0e969ff0fcb76?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "interaction Feed",
    path: "../Engagement_Feed",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/431135a906834a6769bafa4fa2a0a9d9cff7c31cb4883c0465c07a6ae8af97eb?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Lead Generation",
    path: "../Leads",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8a6640b3c8e0e6332af1321870a7df00e5af45af56754af9f6a0b9ae6e72ef5?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
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
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/27e54dd5e89f1a15533e10ee9ca332c6cad303a62db1d77c67ce237f3406bd91?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Leads",
    path: "../leads",
    hasDropdown: true,
    dropdownItems: [
      { label: "Leads High", path: "/social-inbox/high" },
      { label: "Leads Medium", path: "/social-inbox/medium" },
      { label: "Leads Low", path: "/social-inbox/low" },
    ],
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/814ae01b6f8a191c1bf671e3dcd7cc902c668c1a4dc7fa341a078fd7431f1398?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12",
    label: "Content Scheduler",
    path: "../content-scheduler",
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
        <img src={icon} alt={label} className={styles.navItemIcon} />
        <span className={styles.navItemLabel}>{label}</span>
        {hasDropdown && (
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66773275b85593f15e01765b01650e882afb06b9030c66311baa88ad3f43bfba?placeholderIfAbsent=true&apiKey=0bda2653b3104374a175304f95be6d12"
            alt="Dropdown Icon"
            className={styles.dropdownIcon}
          />
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

export default Sidebar;

"use client";

import Link from 'next/link';
import {
  FaPlug,
  FaChartLine,
  FaUsers,
  FaPenSquare,
  FaChartBar,
  FaBullhorn,
  FaHeart,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Sidebar.module.css'; // Ensure the path is correct

export default function Sidebar({ toggleSidebar }) {
  const router = useRouter(); // For dynamic active class

  const navItems = [
    { href: "/DashboardGrid", icon: <FaChartLine />, label: "Dashboard" },
    { href: "/Content_Integration_Analysis", icon: <FaPlug />, label: "Content Integration" },
    { href: "/competitor-insights", icon: <FaUsers />, label: "Competitor Insights" },
    { href: "/content-creation", icon: <FaPenSquare />, label: "Content Create & Marketing" },
    { href: "/lead-generation", icon: <FaHeart />, label: "Interaction Feed" },
    { href: "/ad-campaign", icon: <FaChartBar />, label: "Ad Campaign Management" },
    { href: "/social-media-index", icon: <FaBullhorn />, label: "Social Media Index" },
    { href: "/customization-lead", icon: <FaBullhorn />, label: "Customization Lead" },
    { href: "/content-scheduler", icon: <FaCalendarAlt />, label: "Content Scheduler" },
    { href: "/content-push-marketing", icon: <FaCalendarAlt />, label: "Content Push Marketing" },
  ];

  return (
    <aside className={styles.sidebar}>
      
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} passHref>
            <div
              className={`${styles.navLink} ${
                router.pathname === item.href ? styles.active : ""
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

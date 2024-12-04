'use client';

import { MagnifyingGlassIcon, BellIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import UserProfile from './UserProfile';
import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

export default function Navbar({ toggleSidebar }) {
  const [showWorkspaceMenu, setShowWorkspaceMenu] = useState(false);

  const workspaces = [
    { id: 1, name: 'Personal Workspace' },
    { id: 2, name: 'Team Workspace' },
    { id: 3, name: 'Project Workspace' }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <h1 className={styles.logo}>FASTLEAD99</h1>
        <div className={styles.searchContainer}>
          <div className={styles.relative}>
            <MagnifyingGlassIcon className={styles.icon} />
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.buyNow}>Buy Now</button>
        <button className={styles.invite}>Invite</button>
        <button className={styles.notification}>
          <BellIcon className={styles.icon} />
          <span className={styles.badge}></span>
        </button>
        <div className={styles.workspaceWidget}>
          <button 
            className={styles.workspace}
            onClick={() => setShowWorkspaceMenu(!showWorkspaceMenu)}
          >
            <BuildingOfficeIcon className={styles.icon} />
          </button>
          {showWorkspaceMenu && (
            <div className={styles.workspaceMenu}>
              <div className={styles.workspaceHeader}>
                <h3>Your Workspaces</h3>
              </div>
              <ul className={styles.workspaceList}>
                {workspaces.map(workspace => (
                  <li key={workspace.id} className={styles.workspaceItem}>
                    <BuildingOfficeIcon className={styles.smallIcon} />
                    <span>{workspace.name}</span>
                  </li>
                ))}
              </ul>
              <button className={styles.createWorkspace}>
                Create New Workspace
              </button>
            </div>
          )}
        </div>
        <UserProfile />
      </div>
    </nav>
  );
}

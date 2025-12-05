import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, ScanLine, User } from 'lucide-react';
import styles from './MobileTabBar.module.css';

const MobileTabBar = () => {
  return (
    <nav className={styles.tabBar}>
      <NavLink 
        to="/dashboard" 
        end
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        <LayoutDashboard size={24} />
        <span className={styles.label}>Home</span>
      </NavLink>
      
      <NavLink 
        to="/dashboard/documents" 
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        <FileText size={24} />
        <span className={styles.label}>Docs</span>
      </NavLink>

      <div className={styles.scanWrapper}>
        <button className={styles.scanBtn}>
          <ScanLine size={28} />
        </button>
      </div>

      <NavLink 
        to="/dashboard/analytics" 
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        <User size={24} /> {/* Using User icon for Profile/Analytics placeholder */}
        <span className={styles.label}>Profile</span>
      </NavLink>
      
      <NavLink 
        to="/dashboard/settings" 
        className={({ isActive }) => `${styles.tab} ${isActive ? styles.active : ''}`}
      >
        <User size={24} />
        <span className={styles.label}>Settings</span>
      </NavLink>
    </nav>
  );
};

export default MobileTabBar;

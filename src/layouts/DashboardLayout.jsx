import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import MobileTabBar from '../components/dashboard/MobileTabBar';
import styles from './DashboardLayout.module.css';

const DashboardLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <MobileTabBar />
    </div>
  );
};

export default DashboardLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/admin/AdminSidebar';
import styles from './AdminLayout.module.css';

const AdminLayout = () => {
  return (
    <div className={styles.layout}>
      <AdminSidebar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

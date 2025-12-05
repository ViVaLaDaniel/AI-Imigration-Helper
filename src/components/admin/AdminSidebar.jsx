import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart2, Settings, LogOut, Shield } from 'lucide-react';
import styles from './AdminSidebar.module.css';

const AdminSidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };
  
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Shield size={18} />
        </div>
        <span>Admin Panel</span>
      </div>

      <nav className={styles.nav}>
        <NavLink 
          to="/admin" 
          end
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <LayoutDashboard size={20} />
          <span>Overview</span>
        </NavLink>
        <NavLink 
          to="/admin/users" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <Users size={20} />
          <span>Users</span>
        </NavLink>
        <NavLink 
          to="/admin/analytics" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </NavLink>
        <NavLink 
          to="/admin/settings" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

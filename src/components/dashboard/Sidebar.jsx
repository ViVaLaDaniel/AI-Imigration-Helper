import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, BarChart2, CreditCard, Settings, LogOut, FolderOpen, HelpCircle, Bell } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Redirect to home page
    navigate('/');
  };
  
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>AI</div>
        <span>ImmiHelper</span>
      </div>

      <nav className={styles.nav}>
        <NavLink 
          to="/dashboard" 
          end
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/dashboard/documents" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <FileText size={20} />
          <span>History</span>
        </NavLink>
        <NavLink 
          to="/dashboard/my-documents" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <FolderOpen size={20} />
          <span>My Documents</span>
        </NavLink>
        <NavLink 
          to="/dashboard/analytics" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </NavLink>
        <NavLink 
          to="/dashboard/billing" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <CreditCard size={20} />
          <span>Billing</span>
        </NavLink>
        <NavLink 
          to="/dashboard/support" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <HelpCircle size={20} />
          <span>Support</span>
        </NavLink>
        <NavLink 
          to="/dashboard/notifications" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
        >
          <Bell size={20} />
          <span>Notifications</span>
        </NavLink>
        <NavLink 
          to="/dashboard/settings" 
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

export default Sidebar;

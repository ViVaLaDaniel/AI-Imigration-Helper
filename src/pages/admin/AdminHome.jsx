import React from 'react';
import { Users, FileText, DollarSign, Activity, MoreVertical } from 'lucide-react';
import Card from '../../components/Card';
import styles from './AdminHome.module.css';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <Card className={styles.statCard}>
    <div className={styles.statHeader}>
      <span className={styles.statTitle}>{title}</span>
      <div className={styles.iconWrapper} style={{ background: `${color}20`, color: color }}>
        <Icon size={20} />
      </div>
    </div>
    <div className={styles.statValue}>{value}</div>
  </Card>
);

const AdminHome = () => {
  return (
    <div className={`${styles.container} animate-enter`}>
      <h1 className={styles.pageTitle}>Admin Overview</h1>
      
      <div className={styles.statsGrid}>
        <StatCard title="Total Users" value="12,345" icon={Users} color="#4F46E5" />
        <StatCard title="Documents Processed" value="85,123" icon={FileText} color="#10B981" />
        <StatCard title="Revenue (MTD)" value="$45,230" icon={DollarSign} color="#F59E0B" />
        <StatCard title="System Health" value="99.9%" icon={Activity} color="#EF4444" />
      </div>

      <div className={styles.grid}>
        <Card className={styles.usersCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.sectionTitle}>Recent Users</h2>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>User</th>
                <th>Plan</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Alice Johnson', email: 'alice@example.com', plan: 'Monthly', status: 'Active', date: '2 mins ago' },
                { name: 'Bob Smith', email: 'bob@example.com', plan: 'Free', status: 'Active', date: '15 mins ago' },
                { name: 'Charlie Brown', email: 'charlie@example.com', plan: 'Pay Per Doc', status: 'Inactive', date: '1 hour ago' },
                { name: 'Diana Prince', email: 'diana@example.com', plan: 'Monthly', status: 'Active', date: '3 hours ago' },
              ].map((user, idx) => (
                <tr key={idx}>
                  <td>
                    <div className={styles.userInfo}>
                      <div className={styles.avatar}>{user.name[0]}</div>
                      <div>
                        <div className={styles.userName}>{user.name}</div>
                        <div className={styles.userEmail}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.plan}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${user.status === 'Active' ? styles.active : styles.inactive}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className={styles.dateCell}>{user.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className={styles.logsCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.sectionTitle}>System Logs</h2>
          </div>
          <div className={styles.logList}>
            {[
              { type: 'error', msg: 'Failed to process PDF: Corrupt file', time: '10:23 AM' },
              { type: 'info', msg: 'New user registration: user_123', time: '10:15 AM' },
              { type: 'success', msg: 'Payment received: $12.00', time: '10:05 AM' },
              { type: 'warning', msg: 'High API latency detected', time: '09:45 AM' },
            ].map((log, idx) => (
              <div key={idx} className={styles.logItem}>
                <div className={`${styles.logDot} ${styles[log.type]}`}></div>
                <div className={styles.logContent}>
                  <div className={styles.logMsg}>{log.msg}</div>
                  <div className={styles.logTime}>{log.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminHome;

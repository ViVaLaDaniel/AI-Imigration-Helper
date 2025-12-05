import React from 'react';
import { Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import Card from '../../components/Card';
import styles from './Notifications.module.css';

const NotificationItem = ({ type, title, msg, time, read }) => {
  const icons = {
    success: <CheckCircle size={20} className={styles.iconSuccess} />,
    warning: <AlertTriangle size={20} className={styles.iconWarning} />,
    info: <Info size={20} className={styles.iconInfo} />,
  };

  return (
    <div className={`${styles.item} ${!read ? styles.unread : ''}`}>
      <div className={styles.iconWrapper}>
        {icons[type] || icons.info}
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.time}>{time}</span>
        </div>
        <p className={styles.message}>{msg}</p>
      </div>
      {!read && <div className={styles.dot}></div>}
    </div>
  );
};

const Notifications = () => {
  return (
    <div className={`${styles.container} animate-enter`}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Notifications</h1>
        <button className={styles.markAllBtn}>Mark all as read</button>
      </div>

      <Card className={styles.card}>
        <div className={styles.list}>
          <NotificationItem 
            type="success"
            title="Document Analysis Complete"
            msg="Your document 'Visa_Application_v2.pdf' has been successfully analyzed."
            time="2 mins ago"
            read={false}
          />
          <NotificationItem 
            type="warning"
            title="Subscription Expiring Soon"
            msg="Your Monthly Pro plan will renew in 3 days. Please ensure your payment method is up to date."
            time="1 day ago"
            read={false}
          />
          <NotificationItem 
            type="info"
            title="New Feature Available"
            msg="We've added support for 5 new languages! Check out the updates in your settings."
            time="3 days ago"
            read={true}
          />
          <NotificationItem 
            type="success"
            title="Welcome to AI Immigration Helper"
            msg="Thanks for joining! Get started by uploading your first document."
            time="1 week ago"
            read={true}
          />
        </div>
      </Card>
    </div>
  );
};

export default Notifications;

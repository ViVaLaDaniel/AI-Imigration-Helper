import React, { useState } from 'react';
import { User, Lock, Bell, Moon, Save } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import styles from './Settings.module.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className={`${styles.container} animate-enter`}>
      <h1 className={styles.pageTitle}>Settings</h1>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'profile' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={18} />
          <span>Profile</span>
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'security' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('security')}
        >
          <Lock size={18} />
          <span>Security</span>
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'preferences' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('preferences')}
        >
          <Bell size={18} />
          <span>Preferences</span>
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'profile' && (
          <Card className={styles.card}>
            <h2 className={styles.cardTitle}>Personal Information</h2>
            <div className={styles.formGrid}>
              <div className={styles.avatarSection}>
                <div className={styles.avatar}>JD</div>
                <Button variant="outline" size="sm">Change Avatar</Button>
              </div>
              <div className={styles.inputs}>
                <div className={styles.row}>
                  <Input label="First Name" defaultValue="John" />
                  <Input label="Last Name" defaultValue="Doe" />
                </div>
                <Input label="Email Address" defaultValue="john.doe@example.com" type="email" />
                <Input label="Phone Number" defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
            <div className={styles.actions}>
              <Button icon={Save}>Save Changes</Button>
            </div>
          </Card>
        )}

        {activeTab === 'security' && (
          <Card className={styles.card}>
            <h2 className={styles.cardTitle}>Change Password</h2>
            <div className={styles.formStack}>
              <Input label="Current Password" type="password" />
              <Input label="New Password" type="password" />
              <Input label="Confirm New Password" type="password" />
            </div>
            <div className={styles.actions}>
              <Button icon={Save}>Update Password</Button>
            </div>
          </Card>
        )}

        {activeTab === 'preferences' && (
          <Card className={styles.card}>
            <h2 className={styles.cardTitle}>App Preferences</h2>
            <div className={styles.toggles}>
              <div className={styles.toggleItem}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Email Notifications</div>
                  <div className={styles.toggleDesc}>Receive updates about your document status.</div>
                </div>
                <input type="checkbox" defaultChecked className={styles.checkbox} />
              </div>
              <div className={styles.toggleItem}>
                <div className={styles.toggleInfo}>
                  <div className={styles.toggleLabel}>Dark Mode</div>
                  <div className={styles.toggleDesc}>Switch between light and dark themes.</div>
                </div>
                <input type="checkbox" className={styles.checkbox} />
              </div>
            </div>
            <div className={styles.actions}>
              <Button icon={Save}>Save Preferences</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Settings;

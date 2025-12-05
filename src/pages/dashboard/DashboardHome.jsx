import React from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockStats, mockDocuments } from '../../data/mockData';
import styles from './DashboardHome.module.css';

const DashboardHome = () => {
  // Get only completed documents for recent display
  const recentDocuments = mockDocuments
    .filter(doc => doc.status === 'completed')
    .slice(0, 4);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const uploaded = new Date(date);
    const diffHours = Math.floor((now - uploaded) / (1000 * 60 * 60));
    
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className={`${styles.container} animate-enter`}>
      <h1 className={styles.pageTitle}>Welcome back, John 👋</h1>
      <p className={styles.pageSubtitle}>
        You've processed {mockStats.documentsThisMonth} documents this month. Great progress!
      </p>
      
      {/* Stats Row */}
      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Total Documents</span>
            <FileText size={20} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>{mockStats.totalDocuments}</div>
          <div className={styles.statTrend}>
            <span className={styles.trendUp}>+{mockStats.documentsThisMonth}</span>
            <span className={styles.trendLabel}>this month</span>
          </div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Success Rate</span>
            <CheckCircle size={20} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>{mockStats.successRate}%</div>
          <div className={styles.statTrend}>
            <TrendingUp size={14} style={{ marginRight: '4px', color: '#10B981' }} />
            <span className={styles.trendLabel}>Excellent</span>
          </div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Active Issues</span>
            <AlertCircle size={20} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>{mockStats.activeIssues}</div>
          <div className={styles.statTrend}>
            <span className={styles.trendLabel} style={{ color: '#F59E0B' }}>Needs attention</span>
          </div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statTitle}>Avg Processing</span>
            <TrendingUp size={20} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>{mockStats.avgProcessingTime}</div>
          <div className={styles.statTrend}>
            <span className={styles.trendLabel}>Lightning fast</span>
          </div>
        </Card>
      </div>

      <div className={styles.mainGrid}>
        {/* Left Column: Upload */}
        <div className={styles.leftCol}>
          <Card className={styles.uploadCard}>
            <h2 className={styles.sectionTitle}>Upload & Analyze Document</h2>
            <div className={styles.dropzone}>
              <div className={styles.uploadIconWrapper}>
                <Upload size={32} />
              </div>
              <p className={styles.dropText}>Drop your PDF or image here</p>
              <p className={styles.supportText}>Supported formats: PDF, JPG, PNG, TXT</p>
              <Link to="/dashboard/process">
                <Button className={styles.uploadBtn}>Upload File</Button>
              </Link>
            </div>
          </Card>

          {/* Charts Placeholder */}
          <div className={styles.chartsGrid}>
            <Card className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Monthly Usage</h3>
              <div className={styles.chartPlaceholder}>
                {[40, 60, 45, 80, 55, 90].map((h, i) => (
                  <div key={i} className={styles.bar} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </Card>
            <Card className={styles.chartCard}>
              <h3 className={styles.chartTitle}>Processing Volume</h3>
              <div className={styles.chartPlaceholder}>
                {[30, 50, 70, 40, 60, 80].map((h, i) => (
                  <div key={i} className={styles.barAlt} style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Recent Documents */}
        <div className={styles.rightCol}>
          <Card className={styles.recentCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.sectionTitle}>Recent Documents</h2>
              <Link to="/dashboard/documents">
                <Button variant="ghost" size="sm">View All</Button>
              </Link>
            </div>
            
            <div className={styles.docList}>
              {recentDocuments.map((doc) => (
                <div key={doc.id} className={styles.docItem}>
                  <div className={styles.docIcon}>
                    <FileText size={20} />
                  </div>
                  <div className={styles.docInfo}>
                    <div className={styles.docName}>{doc.name}</div>
                    <div className={styles.docMeta}>
                      <span>{doc.type}</span>
                      <span className={styles.dot}>•</span>
                      <span>{formatTimeAgo(doc.uploadedAt)}</span>
                    </div>
                  </div>
                  <div className={styles.docStatus}>
                    <span className={`${styles.statusBadge} ${styles.completed}`}>
                      {doc.status}
                    </span>
                  </div>
                  <Link to={`/dashboard/result/${doc.id}`}>
                    <button className={styles.moreBtn}>
                      <MoreVertical size={16} />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

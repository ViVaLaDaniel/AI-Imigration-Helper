import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, FileText, CheckCircle } from 'lucide-react';
import Card from '../../components/Card';
import styles from './Analytics.module.css';

const Analytics = () => {
  const monthlyData = [
    { month: 'Jan', documents: 234, revenue: 3200, users: 89 },
    { month: 'Feb', documents: 389, revenue: 5800, users: 142 },
    { month: 'Mar', documents: 567, revenue: 9400, users: 218 },
    { month: 'Apr', documents: 723, revenue: 14200, users: 287 },
    { month: 'May', documents: 945, revenue: 21300, users: 356 },
    { month: 'Jun', documents: 1089, revenue: 28900, users: 423 },
    { month: 'Jul', documents: 1247, revenue: 42380, users: 512 },
  ];

  const getMaxValue = (data, key) => Math.max(...data.map(d => d[key]));

  return (
    <div className={styles.analytics}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Analytics</h1>
          <p className={styles.subtitle}>Track your document processing metrics and trends</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className={styles.kpiGrid}>
        <Card className={styles.kpiCard}>
          <div className={styles.kpiIcon} style={{ background: 'linear-gradient(135deg, #6366F1, #8B5CF6)' }}>
            <FileText size={24} color="white" />
          </div>
          <div className={styles.kpiContent}>
            <div className={styles.kpiValue}>1,247</div>
            <div className={styles.kpiLabel}>Total Documents</div>
            <div className={styles.kpiChange}>
              <TrendingUp size={16} />
              <span>+14.5%</span>
            </div>
          </div>
        </Card>

        <Card className={styles.kpiCard}>
          <div className={styles.kpiIcon} style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
            <CheckCircle size={24} color="white" />
          </div>
          <div className={styles.kpiContent}>
            <div className={styles.kpiValue}>94.7%</div>
            <div className={styles.kpiLabel}>Success Rate</div>
            <div className={styles.kpiChange}>
              <TrendingUp size={16} />
              <span>+2.3%</span>
            </div>
          </div>
        </Card>

        <Card className={styles.kpiCard}>
          <div className={styles.kpiIcon} style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)' }}>
            <Users size={24} color="white" />
          </div>
          <div className={styles.kpiContent}>
            <div className={styles.kpiValue}>512</div>
            <div className={styles.kpiLabel}>Active Users</div>
            <div className={styles.kpiChange}>
              <TrendingUp size={16} />
              <span>+21.0%</span>
            </div>
          </div>
        </Card>

        <Card className={styles.kpiCard}>
          <div className={styles.kpiIcon} style={{ background: 'linear-gradient(135deg, #EC4899, #BE185D)' }}>
            <DollarSign size={24} color="white" />
          </div>
          <div className={styles.kpiContent}>
            <div className={styles.kpiValue}>$42.4K</div>
            <div className={styles.kpiLabel}>Monthly Revenue</div>
            <div className={styles.kpiChange}>
              <TrendingUp size={16} />
              <span>+46.6%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className={styles.chartsGrid}>
        {/* Document Processing Chart */}
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Document Processing Trend</h3>
            <span className={styles.chartSubtext}>Last 7 months</span>
          </div>
          <div className={styles.chart}>
            <div className={styles.barChart}>
              {monthlyData.map((data, idx) => {
                const height = (data.documents / getMaxValue(monthlyData, 'documents')) * 100;
                return (
                  <div key={idx} className={styles.barGroup}>
                    <div className={styles.barTooltip}>
                      <div>{data.documents} docs</div>
                    </div>
                    <div 
                      className={styles.bar}
                      style={{ height: `${height}%` }}
                    />
                    <div className={styles.barLabel}>{data.month}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Revenue Chart */}
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Revenue Growth</h3>
            <span className={styles.chartSubtext}>Monthly recurring revenue</span>
          </div>
          <div className={styles.chart}>
            <div className={styles.lineChart}>
              <svg width="100%" height="200" viewBox="0 0 700 200">
                <defs>
                  <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.05"/>
                  </linearGradient>
                </defs>
                
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line 
                    key={i}
                    x1="0" 
                    y1={i * 50} 
                    x2="700" 
                    y2={i * 50}
                    stroke="#E5E7EB"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Line path */}
                <path
                  d={monthlyData.map((d, i) => {
                    const x = (i / (monthlyData.length - 1)) * 700;
                    const y = 180 - (d.revenue / getMaxValue(monthlyData, 'revenue')) * 160;
                    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                />
                
                {/* Area fill */}
                <path
                  d={`
                    ${monthlyData.map((d, i) => {
                      const x = (i / (monthlyData.length - 1)) * 700;
                      const y = 180 - (d.revenue / getMaxValue(monthlyData, 'revenue')) * 160;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    }).join(' ')}
                    L 700 180 L 0 180 Z
                  `}
                  fill="url(#revenueGradient)"
                />
                
                {/* Data points */}
                {monthlyData.map((d, i) => {
                  const x = (i / (monthlyData.length - 1)) * 700;
                  const y = 180 - (d.revenue / getMaxValue(monthlyData, 'revenue')) * 160;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#10B981"
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>
              <div className={styles.chartLabels}>
                {monthlyData.map((d, i) => (
                  <span key={i}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* User Growth Chart */}
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>User Growth</h3>
            <span className={styles.chartSubtext}>Active users per month</span>
          </div>
          <div className={styles.chart}>
            <div className={styles.barChart}>
              {monthlyData.map((data, idx) => {
                const height = (data.users / getMaxValue(monthlyData, 'users')) * 100;
                return (
                  <div key={idx} className={styles.barGroup}>
                    <div className={styles.barTooltip}>
                      <div>{data.users} users</div>
                    </div>
                    <div 
                      className={styles.bar}
                      style={{ 
                        height: `${height}%`,
                        background: 'linear-gradient(135deg, #F59E0B, #D97706)'
                      }}
                    />
                    <div className={styles.barLabel}>{data.month}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Document Types Distribution */}
        <Card className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Document Types</h3>
            <span className={styles.chartSubtext}>Processing distribution</span>
          </div>
          <div className={styles.chart}>
            <div className={styles.pieStats}>
              {[
                { type: 'Passports', count: 423, color: '#6366F1', percent: 34 },
                { type: 'Visas', count: 324, color: '#10B981', percent: 26 },
                { type: 'Birth Certificates', count: 248, color: '#F59E0B', percent: 20 },
                { type: 'Employment', count: 186, color: '#EC4899', percent: 15 },
                { type: 'Other', count: 66, color: '#8B5CF6', percent: 5 },
              ].map((item, idx) => (
                <div key={idx} className={styles.pieStatItem}>
                  <div className={styles.pieStatColor} style={{ background: item.color }} />
                  <div className={styles.pieStatInfo}>
                    <div className={styles.pieStatType}>{item.type}</div>
                    <div className={styles.pieStatValue}>{item.count} ({item.percent}%)</div>
                  </div>
                  <div className={styles.pieStatBar}>
                    <div 
                      className={styles.pieStatFill}
                      style={{ width: `${item.percent}%`, background: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;

import React from 'react';
import { ArrowLeft, Download, Share2, CheckCircle, AlertTriangle, Info, TrendingUp, ExternalLink, FileText } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { mockDocuments } from '../../data/mockData';
import styles from './DocumentResult.module.css';

const DocumentResult = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Find document by ID
  const document = mockDocuments.find(doc => doc.id === id) || mockDocuments[0];
  const result = document.aiResult;

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertTriangle size={18} color="#EF4444" />;
      case 'warning':
        return <AlertTriangle size={18} color="#F59E0B" />;
      case 'info':
      default:
        return <Info size={18} color="#3B82F6" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error':
        return '#FEE2E2';
      case 'warning':
        return '#FEF3C7';
      case 'info':
      default:
        return '#DBEAFE';
    }
  };

  return (
    <div className={`${styles.container} animate-enter`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <button className={styles.backBtn} onClick={() => navigate('/dashboard')}>
            <ArrowLeft size={20} />
          </button>
          <div className={styles.titleWrapper}>
            <h1 className={styles.pageTitle}>AI Analysis Result</h1>
            <span className={styles.docBadge}>
              <FileText size={14} />
              {document.name}
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <Button variant="outline" icon={Share2}>Share</Button>
          <Button icon={Download}>Download PDF</Button>
        </div>
      </div>

      {/* Confidence Score Banner */}
      {result && result.confidence && (
        <Card className={styles.confidenceCard}>
          <div className={styles.confidenceContent}>
            <div className={styles.confidenceLeft}>
              <CheckCircle size={24} color="#10B981" />
              <div>
                <div className={styles.confidenceLabel}>AI Confidence Score</div>
                <div className={styles.confidenceValue}>{(result.confidence * 100).toFixed(0)}%</div>
              </div>
            </div>
            <div className={styles.confidenceBar}>
              <div 
                className={styles.confidenceProgress} 
                style={{ width: `${result.confidence * 100}%` }}
              />
            </div>
            <div className={styles.confidenceRight}>
              <TrendingUp size={18} color="#10B981" />
              <span>High Accuracy</span>
            </div>
          </div>
        </Card>
      )}

      <div className={styles.grid}>
        {/* Left Column: Analysis Details */}
        <div className={styles.analysisCol}>
          {/* Summary Card */}
          <Card className={styles.summaryCard}>
            <h2 className={styles.cardTitle}>
              <FileText size={20} />
              Executive Summary
            </h2>
            <p className={styles.summaryText}>
              {result?.summary || 'No summary available'}
            </p>
          </Card>

          {/* Issues & Warnings */}
          {result && result.issues && result.issues.length > 0 && (
            <Card className={styles.issuesCard}>
              <h2 className={styles.cardTitle}>
                <AlertTriangle size={20} />
                Issues Detected ({result.issues.length})
              </h2>
              <div className={styles.issuesList}>
                {result.issues.map((issue, idx) => (
                  <div 
                    key={idx} 
                    className={styles.issueItem}
                    style={{ borderLeftColor: getSeverityColor(issue.severity) }}
                  >
                    <div className={styles.issueHeader}>
                      {getSeverityIcon(issue.severity)}
                      <span className={styles.issueTitle}>{issue.title}</span>
                      <span className={styles.severityBadge} style={{ 
                        background: getSeverityColor(issue.severity),
                        color: issue.severity === 'error' ? '#DC2626' : issue.severity === 'warning' ? '#D97706' : '#2563EB'
                      }}>
                        {issue.severity}
                      </span>
                    </div>
                    <p className={styles.issueDescription}>{issue.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Action Plan */}
          {result && result.recommendations && (
            <Card className={styles.planCard}>
              <h2 className={styles.cardTitle}>
                <CheckCircle size={20} />
                Recommended Actions
              </h2>
              <div className={styles.checklist}>
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <input 
                      type="checkbox" 
                      id={`rec-${idx}`} 
                      className={styles.checkbox} 
                    />
                    <label htmlFor={`rec-${idx}`}>{rec}</label>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Right Column: Extracted Data & Sources */}
        <div className={styles.sideCol}>
          {/* Extracted Data */}
          {result && result.extractedData && (
            <Card className={styles.dataCard}>
              <h2 className={styles.cardTitle}>
                <Info size={20} />
                Extracted Information
              </h2>
              <div className={styles.dataGrid}>
                {Object.entries(result.extractedData).map(([key, value]) => (
                  <div key={key} className={styles.dataItem}>
                    <div className={styles.dataLabel}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </div>
                    <div className={styles.dataValue}>{value}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Document Preview */}
          <Card className={styles.previewCard}>
            <h2 className={styles.cardTitle}>
              <FileText size={20} />
              Document Preview
            </h2>
            <div className={styles.previewWrapper}>
              <div className={styles.pdfPlaceholder}>
                <FileText size={48} color="#94A3B8" />
                <p>PDF Preview</p>
                <span className={styles.fileSize}>{document.fileSize}</span>
              </div>
            </div>
          </Card>

          {/* Official Sources */}
          <Card className={styles.sourcesCard}>
            <h2 className={styles.cardTitle}>
              <ExternalLink size={20} />
              Official Resources
            </h2>
            <div className={styles.sourceList}>
              <a href="#" className={styles.sourceLink}>
                <ExternalLink size={16} />
                <span>USCIS Official Guidelines</span>
              </a>
              <a href="#" className={styles.sourceLink}>
                <ExternalLink size={16} />
                <span>Immigration Law Handbook</span>
              </a>
              <a href="#" className={styles.sourceLink}>
                <ExternalLink size={16} />
                <span>Document Requirements Guide</span>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentResult;

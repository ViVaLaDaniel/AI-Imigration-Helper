import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, CheckCircle2, Circle } from 'lucide-react';
import Card from '../../components/Card';
import styles from './DocumentProcessing.module.css';

const Step = ({ number, title, status }) => (
  <div className={`${styles.step} ${styles[status]}`}>
    <div className={styles.stepIcon}>
      {status === 'completed' ? <CheckCircle2 size={20} /> : status === 'current' ? <Loader2 className={styles.spinner} size={20} /> : <Circle size={20} />}
    </div>
    <span className={styles.stepTitle}>{title}</span>
  </div>
);

const DocumentProcessing = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // Simulate processing
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('/dashboard/result/123'), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backBtn} onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={20} />
          Back to dashboard
        </button>
        <div className={styles.docInfo}>
          <span className={styles.flag}>🇪🇸</span>
          <span className={styles.docName}>Residence_denial_ES.pdf</span>
        </div>
      </div>

      <Card className={styles.processCard}>
        <div className={styles.progressCircle}>
          <svg className={styles.svg} viewBox="0 0 100 100">
            <circle className={styles.bgCircle} cx="50" cy="50" r="45" />
            <circle 
              className={styles.fgCircle} 
              cx="50" 
              cy="50" 
              r="45" 
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
            />
          </svg>
          <div className={styles.percentage}>{progress}%</div>
        </div>

        <h2 className={styles.statusText}>Analyzing your document...</h2>
        <p className={styles.subText}>Extracting text, checking rules, preparing your personalized plan</p>

        <div className={styles.steps}>
          <Step number="1" title="Upload" status="completed" />
          <Step number="2" title="Analyze" status="current" />
          <Step number="3" title="Results" status="pending" />
        </div>
      </Card>

      <div className={styles.skeletons}>
        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonCard}`}></div>
        <div className={`${styles.skeleton} ${styles.skeletonCard}`}></div>
      </div>
    </div>
  );
};

export default DocumentProcessing;

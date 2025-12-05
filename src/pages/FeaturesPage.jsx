import React from 'react';
import { FileText, Shield, Globe, Zap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/landing/Footer';
import styles from './FeaturesPage.module.css';

const FeatureBlock = ({ icon: Icon, title, desc, reverse }) => (
  <div className={`${styles.featureBlock} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.featureContent}>
      <div className={styles.iconBox}>
        <Icon size={32} />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
    <div className={styles.featureVisual}>
      <Card className={styles.visualCard}>
        <div className={styles.visualPlaceholder}></div>
      </Card>
    </div>
  </div>
);

const FeaturesPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Powerful Features for Your Journey</h1>
          <p className={styles.heroSubtitle}>
            Everything you need to navigate the immigration process with confidence and ease.
          </p>
        </div>

        <div className={styles.container}>
          <FeatureBlock 
            icon={FileText}
            title="Instant Document Analysis"
            desc="Upload any official document (PDF, JPG) and get an instant summary in plain English. Our AI highlights critical dates, requirements, and missing information."
          />
          <FeatureBlock 
            icon={Globe}
            title="Multilingual Support"
            desc="Don't speak the local language? No problem. We translate complex legal terms into your native language, supporting over 20+ languages."
            reverse
          />
          <FeatureBlock 
            icon={Shield}
            title="Bank-Level Security"
            desc="Your documents contain sensitive personal data. We use AES-256 encryption and never share your data with third parties without your explicit consent."
          />
          <FeatureBlock 
            icon={Zap}
            title="Actionable Checklists"
            desc="Stop guessing what to do next. We generate a personalized step-by-step checklist based on your specific case and document analysis."
            reverse
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeaturesPage;

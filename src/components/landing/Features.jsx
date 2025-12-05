import React from 'react';
import { Brain, FileCheck, Globe, Shield, Zap, Users } from 'lucide-react';
import Card from '../Card';
import styles from './Features.module.css';

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <Card className={styles.featureCard} style={{ '--card-gradient': gradient }}>
    <div className={styles.iconWrapper}>
      <Icon size={28} className={styles.icon} />
    </div>
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDesc}>{description}</p>
  </Card>
);

const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionBadge}>Features</div>
          <h2 className={styles.sectionTitle}>
            Everything You Need to<br />
            <span className={styles.highlight}>Navigate Immigration</span>
          </h2>
          <p className={styles.sectionDesc}>
            Powerful AI-driven tools designed to simplify every step of your immigration journey
          </p>
        </div>

        <div className={styles.grid}>
          <FeatureCard 
            icon={Brain}
            title="AI Document Analysis"
            description="Upload any official document and get instant, clear summaries in your language. Our AI identifies key requirements, deadlines, and missing information."
            gradient="linear-gradient(135deg, #667EEA 0%, #764BA2 100%)"
          />
          <FeatureCard 
            icon={FileCheck}
            title="Personalized Checklists"
            description="Get a step-by-step action plan tailored to your specific case. Never miss a deadline or required document again."
            gradient="linear-gradient(135deg, #F093FB 0%, #F5576C 100%)"
          />
          <FeatureCard 
            icon={Globe}
            title="Multi-Language Support"
            description="Translate complex legal documents into 20+ languages. Understand every detail in your native language."
            gradient="linear-gradient(135deg, #4FACFE 0%, #00F2FE 100%)"
          />
          <FeatureCard 
            icon={Shield}
            title="Bank-Level Security"
            description="Your sensitive documents are protected with AES-256 encryption. We never share your data with third parties."
            gradient="linear-gradient(135deg, #43E97B 0%, #38F9D7 100%)"
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Results"
            description="No waiting days for analysis. Get comprehensive insights within seconds of uploading your documents."
            gradient="linear-gradient(135deg, #FA709A 0%, #FEE140 100%)"
          />
          <FeatureCard 
            icon={Users}
            title="Expert Community"
            description="Connect with immigration consultants and others going through the same process. Share experiences and get advice."
            gradient="linear-gradient(135deg, #30CDC4 0%, #0ABFBC 100%)"
          />
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3>Ready to Get Started?</h3>
              <p>Join thousands of successful immigrants who simplified their journey with AI Immigration Helper</p>
            </div>
            <div className={styles.ctaActions}>
              <button className={styles.ctaButton}>Start Free Trial</button>
              <button className={styles.ctaSecondary}>View Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

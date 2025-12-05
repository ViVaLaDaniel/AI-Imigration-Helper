import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Globe2 } from 'lucide-react';
import Button from '../Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Shield size={14} />
            <span>🚀 Processing 10,000+ documents monthly | 96% accuracy rate</span>
          </div>
          
          <h1 className={styles.title}>
            Navigate Your <br />
            <span className={styles.highlight}>Immigration Journey</span><br />
            with Confidence
          </h1>
          
          <p className={styles.subtitle}>
            Transform immigration documentation with AI. We analyze passports, visas, and certificates 
            *instantly* - saving applicants $1000s in legal fees and months of processing time.
          </p>
          
          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statValue}>$12M+</div>
              <div className={styles.statLabel}>Saved in legal fees</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>94.7%</div>
              <div className={styles.statLabel}>Success rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statValue}>3.8s</div>
              <div className={styles.statLabel}>Avg analysis time</div>
            </div>
          </div>
          
          <div className={styles.actions}>
            <Link to="/dashboard">
              <Button size="lg" className={styles.ctaBtn} icon={ArrowRight}>
                Start For Free
              </Button>
            </Link>
            <Button variant="ghost" size="lg">
              See How It Works
            </Button>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <Zap size={20} className={styles.featureIcon} />
              <div>
                <div className={styles.featureName}>Instant Analysis</div>
                <div className={styles.featureDesc}>Results in seconds</div>
              </div>
            </div>
            <div className={styles.feature}>
              <Globe2 size={20} className={styles.featureIcon} />
              <div>
                <div className={styles.featureName}>20+ Languages</div>
                <div className={styles.featureDesc}>Full translation support</div>
              </div>
            </div>
            <div className={styles.feature}>
              <Shield size={20} className={styles.featureIcon} />
              <div>
                <div className={styles.featureName}>100% Secure</div>
                <div className={styles.featureDesc}>Bank-level encryption</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.showcase}>
            <div className={styles.window}>
              <div className={styles.windowHeader}>
                <div className={styles.dots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={styles.windowTitle}>Document Analysis</div>
              </div>
              <div className={styles.windowBody}>
                <div className={styles.documentPreview}>
                  <div className={styles.docIcon}>📄</div>
                  <div className={styles.docInfo}>
                    <div className={styles.docName}>Visa_Application.pdf</div>
                    <div className={styles.docSize}>2.4 MB • Uploaded 2 mins ago</div>
                  </div>
                  <div className={styles.docStatus}>
                    <div className={styles.statusDot}></div>
                    <span>Analyzing...</span>
                  </div>
                </div>
                
                <div className={styles.aiResponse}>
                  <div className={styles.aiAvatar}>AI</div>
                  <div className={styles.aiMessage}>
                    <p><strong>Document Type:</strong> Tourist Visa Application (Schengen)</p>
                    <p><strong>Missing Items:</strong> Financial proof, Travel insurance</p>
                    <p><strong>Deadline:</strong> Submit by Dec 15, 2023</p>
                    <div className={styles.aiActions}>
                      <button className={styles.aiBtn}>View Checklist →</button>
                    </div>
                  </div>
                </div>

                <div className={styles.countries}>
                  <span>🇩🇪</span>
                  <span>🇪🇸</span>
                  <span>🇫🇷</span>
                  <span>🇮🇹</span>
                  <span>🇵🇱</span>
                  <span>+20</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.floatingElements}>
            <div className={`${styles.floatingCard} ${styles.float1}`}>
              <div className={styles.floatingIcon}>✓</div>
              <div className={styles.floatingText}>98% Success Rate</div>
            </div>
            <div className={`${styles.floatingCard} ${styles.float2}`}>
              <div className={styles.floatingIcon}>⚡</div>
              <div className={styles.floatingText}>Instant Results</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bgGradient}></div>
    </section>
  );
};

export default Hero;

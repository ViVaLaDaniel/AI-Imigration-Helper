import React from 'react';
import Navbar from '../components/Navbar';
import PricingSection from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';
import styles from './PricingPage.module.css';

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.badge}>Pricing</div>
          <h1 className={styles.heroTitle}>
            Choose Your Plan
          </h1>
          <p className={styles.heroSubtitle}>
            Flexible pricing options for individuals and teams. Start free, upgrade anytime.
          </p>
        </div>

        <PricingSection />
      </div>
      <Footer />
    </>
  );
};

export default PricingPage;

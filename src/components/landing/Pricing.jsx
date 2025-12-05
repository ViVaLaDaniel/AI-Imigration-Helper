import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Card from '../Card';
import Button from '../Button';
import styles from './Pricing.module.css';

const PricingCard = ({ title, price, period, features, buttonText, popular, variant = 'glass' }) => (
  <div className={`${styles.pricingCard} ${popular ? styles.popular : ''}`}>
    {popular && <div className={styles.popularBadge}>MOST POPULAR</div>}
    <h3 className={styles.planTitle}>{title}</h3>
    <div className={styles.priceWrapper}>
      <span className={styles.currency}>€</span>
      <span className={styles.price}>{price}</span>
      {period && <span className={styles.period}>{period}</span>}
    </div>
    <ul className={styles.featureList}>
      {features.map((feature, idx) => (
        <li key={idx} className={styles.featureItem}>
          <Check size={18} className={styles.checkIcon} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      variant={popular ? 'primary' : 'outline'} 
      className={styles.planBtn}
      size="lg"
    >
      {buttonText}
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionBadge}>Pricing</div>
          <h2 className={styles.sectionTitle}>
            Choose the Perfect Plan<br />
            <span className={styles.highlight}>for Your Journey</span>
          </h2>
          <p className={styles.sectionDesc}>
            Transparent pricing with no hidden fees. Start free, upgrade anytime.
          </p>
        </div>
        
        <div className={styles.grid}>
          <PricingCard 
            title="Starter" 
            price="0" 
            features={[
              '3 document analyses',
              'Basic translations',
              'Email support',
              '7-day history'
            ]}
            buttonText="Get Started Free"
          />
          <PricingCard 
            title="Professional" 
            price="29" 
            period="/month"
            features={[
              'Unlimited document analyses',
              'Priority support',
              'Advanced translations',
              'Full history access',
              'Export to PDF',
              'Dedicated account manager'
            ]}
            buttonText="Start 14-Day Trial"
            popular
          />
          <PricingCard 
            title="Pay As You Go" 
            price="5.99" 
            period="/document"
            features={[
              'No monthly commitment',
              'Single document analysis',
              'Full translation',
              'Download results',
              'Valid for 30 days'
            ]}
            buttonText="Buy Now"
          />
        </div>

        <div className={styles.comparison}>
          <h3 className={styles.comparisonTitle}>Compare All Features</h3>
          <div className={styles.comparisonTable}>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Pay As You Go</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Document Analyses</td>
                  <td>3/month</td>
                  <td>Unlimited</td>
                  <td>1 per purchase</td>
                </tr>
                <tr>
                  <td>Translation Languages</td>
                  <td>5</td>
                  <td>20+</td>
                  <td>20+</td>
                </tr>
                <tr>
                  <td>Support Response Time</td>
                  <td>48 hours</td>
                  <td>1 hour</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>History Access</td>
                  <td>7 days</td>
                  <td>Unlimited</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>Export to PDF</td>
                  <td><X size={16} className={styles.noIcon} /></td>
                  <td><Check size={16} className={styles.yesIcon} /></td>
                  <td><Check size={16} className={styles.yesIcon} /></td>
                </tr>
                <tr>
                  <td>API Access</td>
                  <td><X size={16} className={styles.noIcon} /></td>
                  <td><Check size={16} className={styles.yesIcon} /></td>
                  <td><X size={16} className={styles.noIcon} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import React from 'react';
import { CreditCard, Check, Download } from 'lucide-react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import styles from './Billing.module.css';

const Billing = () => {
  return (
    <div className={`${styles.container} animate-enter`}>
      <h1 className={styles.pageTitle}>Billing & Subscription</h1>

      <div className={styles.grid}>
        <Card className={styles.planCard}>
          <div className={styles.planHeader}>
            <div>
              <div className={styles.planLabel}>Current Plan</div>
              <h2 className={styles.planName}>Monthly Pro</h2>
            </div>
            <div className={styles.planPrice}>$29<span>/mo</span></div>
          </div>
          <div className={styles.planFeatures}>
            <div className={styles.feature}><Check size={16} /> Unlimited Documents</div>
            <div className={styles.feature}><Check size={16} /> Priority Support</div>
            <div className={styles.feature}><Check size={16} /> Advanced Analytics</div>
          </div>
          <div className={styles.planActions}>
            <Button variant="outline">Cancel Plan</Button>
            <Button>Upgrade Plan</Button>
          </div>
        </Card>

        <Card className={styles.paymentCard}>
          <h2 className={styles.cardTitle}>Payment Method</h2>
          <div className={styles.cardRow}>
            <div className={styles.cardIcon}>
              <CreditCard size={24} />
            </div>
            <div className={styles.cardInfo}>
              <div className={styles.cardNum}>•••• •••• •••• 4242</div>
              <div className={styles.cardExp}>Expires 12/25</div>
            </div>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
        </Card>
      </div>

      <Card className={styles.historyCard}>
        <h2 className={styles.cardTitle}>Billing History</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {[
              { date: 'Oct 1, 2023', desc: 'Monthly Pro Subscription', amount: '$29.00', status: 'Paid' },
              { date: 'Sep 1, 2023', desc: 'Monthly Pro Subscription', amount: '$29.00', status: 'Paid' },
              { date: 'Aug 1, 2023', desc: 'Monthly Pro Subscription', amount: '$29.00', status: 'Paid' },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{item.date}</td>
                <td>{item.desc}</td>
                <td>{item.amount}</td>
                <td><span className={styles.statusPaid}>{item.status}</span></td>
                <td>
                  <button className={styles.downloadBtn}>
                    <Download size={16} /> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Billing;

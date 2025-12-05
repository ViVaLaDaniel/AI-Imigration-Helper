import React from 'react';
import { MessageSquare, Send, FileText } from 'lucide-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Card from '../../components/Card';
import styles from './Support.module.css';

const Support = () => {
  return (
    <div className={`${styles.container} animate-enter`}>
      <h1 className={styles.pageTitle}>Support Center</h1>

      <div className={styles.grid}>
        <Card className={styles.formCard}>
          <h2 className={styles.cardTitle}>Contact Support</h2>
          <p className={styles.cardDesc}>
            Having trouble? Fill out the form below and our team will get back to you within 24 hours.
          </p>
          <div className={styles.form}>
            <Input label="Subject" placeholder="e.g., Document Upload Issue" />
            <div className={styles.textareaWrapper}>
              <label className={styles.label}>Message</label>
              <textarea 
                className={styles.textarea} 
                placeholder="Describe your issue in detail..."
                rows="5"
              ></textarea>
            </div>
            <div className={styles.fileUpload}>
              <button className={styles.attachBtn}>
                <FileText size={16} /> Attach Screenshot
              </button>
            </div>
            <Button icon={Send} className={styles.submitBtn}>Send Message</Button>
          </div>
        </Card>

        <div className={styles.sideColumn}>
          <Card className={styles.faqCard}>
            <h3 className={styles.sideTitle}>Quick Help</h3>
            <ul className={styles.faqList}>
              <li><a href="/faq">How to upload documents?</a></li>
              <li><a href="/faq">Supported file formats</a></li>
              <li><a href="/faq">Billing questions</a></li>
              <li><a href="/faq">Privacy policy</a></li>
            </ul>
          </Card>

          <Card className={styles.historyCard}>
            <h3 className={styles.sideTitle}>Recent Tickets</h3>
            <div className={styles.ticketList}>
              {[
                { id: '#2023', subject: 'Payment Failed', status: 'Closed', date: '2 days ago' },
                { id: '#2024', subject: 'Translation Error', status: 'Open', date: '5 hours ago' },
              ].map((ticket, idx) => (
                <div key={idx} className={styles.ticket}>
                  <div className={styles.ticketHeader}>
                    <span className={styles.ticketId}>{ticket.id}</span>
                    <span className={`${styles.status} ${ticket.status === 'Open' ? styles.open : styles.closed}`}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className={styles.ticketSubject}>{ticket.subject}</div>
                  <div className={styles.ticketDate}>{ticket.date}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;

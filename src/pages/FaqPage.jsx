import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Footer from '../components/landing/Footer';
import styles from './FaqPage.module.css';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.faqHeader}>
        <span className={styles.question}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <Minus size={20} className={styles.icon} /> : <Plus size={20} className={styles.icon} />}
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.answer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      category: 'General',
      items: [
        { q: 'What is AI Immigration Helper?', a: 'We are an AI-powered platform that helps you understand immigration documents, translate them, and plan your application process.' },
        { q: 'Is this a substitute for a lawyer?', a: 'No. We provide information and assistance with paperwork, but we do not provide legal advice. For complex cases, we recommend consulting a lawyer.' },
      ]
    },
    {
      category: 'Documents & Privacy',
      items: [
        { q: 'How secure is my data?', a: 'We use bank-level encryption (AES-256) to protect your documents. Your data is never shared with third parties.' },
        { q: 'What file formats are supported?', a: 'We support PDF, JPG, PNG, and DOCX files up to 25MB.' },
      ]
    },
    {
      category: 'Billing',
      items: [
        { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime from your dashboard settings. You will retain access until the end of your billing period.' },
        { q: 'Do you offer refunds?', a: 'We offer a 14-day money-back guarantee if you are not satisfied with our service.' },
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSubtitle}>
            Find answers to common questions about our service, security, and billing.
          </p>
          <div className={styles.searchWrapper}>
            <Input 
              placeholder="Search for answers..." 
              icon={Search} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.container}>
          {faqs.map((section, idx) => (
            <div key={idx} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.category}</h2>
              <div className={styles.list}>
                {section.items.map((item, i) => (
                  <FaqItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqPage;

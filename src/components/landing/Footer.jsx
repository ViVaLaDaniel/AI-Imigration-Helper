import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Shield } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <Shield size={24} />
              </div>
              <span className={styles.logoText}>AI Immigration Helper</span>
            </div>
            <p className={styles.tagline}>
              Simplifying immigration with the power of AI. 
              Trusted by thousands of immigrants worldwide.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Product</h4>
            <ul className={styles.links}>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/">Supported Countries</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.links}>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Press Kit</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <ul className={styles.links}>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Service</Link></li>
              <li><Link to="/">Cookie Policy</Link></li>
              <li><Link to="/">GDPR</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.contact}>
              <li>
                <Mail size={16} />
                <span>support@aiimmigration.com</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Berlin, Germany</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2023 AI Immigration Helper. All rights reserved.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>🔒 GDPR Compliant</span>
            <span className={styles.badge}>✓ ISO 27001</span>
            <span className={styles.badge}>🇪🇺 EU Based</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

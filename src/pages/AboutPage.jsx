import React from 'react';
import { Users, Target, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/landing/Footer';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Empowering Global Citizens</h1>
          <p className={styles.heroSubtitle}>
            We believe that borders shouldn't be barriers. Our mission is to make immigration simple, transparent, and accessible for everyone.
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <Card className={styles.missionCard}>
              <div className={styles.iconWrapper}><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To democratize legal immigration knowledge using advanced AI, reducing anxiety and rejection rates.</p>
            </Card>
            <Card className={styles.missionCard}>
              <div className={styles.iconWrapper}><Users size={32} /></div>
              <h3>Who We Are</h3>
              <p>A diverse team of immigrants, lawyers, and engineers who have all faced the same bureaucracy you are facing.</p>
            </Card>
            <Card className={styles.missionCard}>
              <div className={styles.iconWrapper}><Heart size={32} /></div>
              <h3>Our Values</h3>
              <p>Transparency, Privacy, and Empathy are at the core of everything we build.</p>
            </Card>
          </div>

          <div className={styles.statsSection}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50k+</span>
              <span className={styles.statLabel}>Documents Processed</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Success Rate</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>Countries Supported</span>
            </div>
          </div>

          <div className={styles.teamSection}>
            <h2 className={styles.sectionTitle}>Meet the Team</h2>
            <div className={styles.teamGrid}>
              {[
                { name: 'Sarah Chen', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80' },
                { name: 'David Miller', role: 'Head of Legal', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80' },
                { name: 'Elena Rodriguez', role: 'CTO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
              ].map((member, idx) => (
                <Card key={idx} className={styles.teamCard}>
                  <img src={member.img} alt={member.name} className={styles.teamImg} />
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;

import React from 'react';
import { Star, TrendingUp, Users, Globe } from 'lucide-react';
import Card from '../Card';
import styles from './Testimonials.module.css';
import { mockTestimonials, successMetrics } from '../../data/investorData';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Success Metrics Banner */}
        <div className={styles.metricsBar}>
          <div className={styles.metric}>
            <Users size={24} className={styles.metricIcon} />
            <div>
              <div className={styles.metricValue}>{(successMetrics.totalUsers / 1000).toFixed(1)}K+</div>
              <div className={styles.metricLabel}>Active Users</div>
            </div>
          </div>
          <div className={styles.metric}>
            <TrendingUp size={24} className={styles.metricIcon} />
            <div>
              <div className={styles.metricValue}>{successMetrics.approvalRate}%</div>
              <div className={styles.metricLabel}>Success Rate</div>
            </div>
          </div>
          <div className={styles.metric}>
            <Globe size={24} className={styles.metricIcon} />
            <div>
              <div className={styles.metricValue}>{successMetrics.countriesSupported}+</div>
              <div className={styles.metricLabel}>Countries</div>
            </div>
          </div>
          <div className={styles.metric}>
            <Star size={24} className={styles.metricIcon} />
            <div>
              <div className={styles.metricValue}>{successMetrics.averageRating}/5</div>
              <div className={styles.metricLabel}>User Rating</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted by Thousands of Immigrants</h2>
          <p className={styles.subtitle}>
            Real stories from people who achieved their immigration dreams with AI-powered guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.grid}>
          {mockTestimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="glass" className={styles.testimonialCard}>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              
              <p className={styles.quote}>"{testimonial.text}"</p>
              
              <div className={styles.author}>
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className={styles.avatar}
                />
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                  <div className={styles.authorJourney}>{testimonial.country}</div>
                </div>
              </div>

              <div className={styles.outcome}>
                <div className={styles.outcomeBadge}>
                  ✓ {testimonial.outcome}
                </div>
                <div className={styles.docsProcessed}>
                  {testimonial.documentsProcessed} documents processed
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Join {(successMetrics.totalUsers / 1000).toFixed(0)}K+ successful applicants</h3>
          <p className={styles.ctaText}>
            Start analyzing your documents for free. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

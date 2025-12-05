import React from 'react';
import styles from './Card.module.css';

const Card = ({ 
  children, 
  variant = 'glass', 
  className = '', 
  hover = false,
  ...props 
}) => {
  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${hover ? styles.hover : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

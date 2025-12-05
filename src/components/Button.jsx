import React from 'react';
import styles from './Button.module.css';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false, 
  icon: Icon,
  ...props 
}) => {
  return (
    <button 
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className={styles.spinner} size={18} />}
      {!isLoading && Icon && <Icon size={18} className={styles.icon} />}
      {children}
    </button>
  );
};

export default Button;

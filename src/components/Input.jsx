import React, { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ 
  label, 
  error, 
  icon: Icon, 
  className = '', 
  containerClassName = '',
  ...props 
}, ref) => {
  return (
    <div className={`${styles.container} ${containerClassName}`}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputWrapper}>
        {Icon && <Icon className={styles.icon} size={20} />}
        <input 
          ref={ref}
          className={`${styles.input} ${Icon ? styles.hasIcon : ''} ${error ? styles.hasError : ''} ${className}`}
          {...props}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;

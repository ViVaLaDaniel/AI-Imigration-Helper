import React, { useState } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Button from '../Button';
import Input from '../Input';
import styles from './AuthModal.module.css';

const AuthModal = ({ initialTab = 'login', onClose }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <Card variant="glass" className={styles.authCard}>
          {onClose && (
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>
          )}

          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeTab === 'login' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={`${styles.tab} ${activeTab === 'register' ? styles.activeTab : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          <div className={styles.socialButtons}>
            <Button variant="secondary" className={styles.socialBtn}>
              <img src="https://www.google.com/favicon.ico" alt="Google" className={styles.socialIcon} />
              Google
            </Button>
            <Button variant="secondary" className={styles.socialBtn}>
              <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className={styles.socialIcon} />
              Facebook
            </Button>
          </div>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <form className={styles.form}>
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="name@example.com" 
            />
            
            <div className={styles.passwordWrapper}>
              <Input 
                label="Password" 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
              />
              <button 
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {activeTab === 'login' && (
              <Link to="/forgot-password" className={styles.forgotLink}>
                Forgot Password?
              </Link>
            )}

            <Button size="lg" className={styles.submitBtn}>
              {activeTab === 'login' ? 'Log In' : 'Create Account'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AuthModal;

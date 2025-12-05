import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import Button from './Button';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>AI</div>
          <span>Immigration Helper</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/features" className={styles.navLink}>Features</Link>
          <Link to="/pricing" className={styles.navLink}>Pricing</Link>
          <Link to="/faq" className={styles.navLink}>FAQ</Link>
        </div>

        <div className={styles.actions}>
          <div className={styles.langSwitcher}>
            <Globe size={18} />
            <span>EN</span>
          </div>
          <Link to="/dashboard" className={styles.loginLink}>Log in</Link>
          <Link to="/dashboard">
            <Button size="sm">Try Now</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className={styles.mobileToggle} onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`${styles.mobileMenu} glass`}>
          <Link to="/about" className={styles.mobileLink} onClick={toggleMenu}>About</Link>
          <Link to="/features" className={styles.mobileLink} onClick={toggleMenu}>Features</Link>
          <Link to="/pricing" className={styles.mobileLink} onClick={toggleMenu}>Pricing</Link>
          <Link to="/faq" className={styles.mobileLink} onClick={toggleMenu}>FAQ</Link>
          <div className={styles.mobileActions}>
            <Link to="/dashboard" className={styles.mobileLink} onClick={toggleMenu}>Log in</Link>
            <Link to="/dashboard" onClick={toggleMenu}>
              <Button className={styles.mobileBtn}>Try Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

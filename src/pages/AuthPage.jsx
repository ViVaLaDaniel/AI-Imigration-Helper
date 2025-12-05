import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../components/auth/AuthModal';

const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    } 
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ 
        minHeight: '100vh', 
        background: 'url("https://images.unsplash.com/photo-1444723121867-c61267198d42?auto=format&fit=crop&q=80") center/cover no-repeat fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem'
      }}
    >
      <AuthModal onClose={() => navigate('/')} />
    </motion.div>
  );
};

export default AuthPage;

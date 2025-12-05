import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PublicLayout from './layouts/PublicLayout';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import FaqPage from './pages/FaqPage';
import AuthPage from './pages/AuthPage';
import PricingPage from './pages/PricingPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardHome from './pages/dashboard/DashboardHome';
import DocumentProcessing from './pages/dashboard/DocumentProcessing';
import DocumentResult from './pages/dashboard/DocumentResult';
import History from './pages/dashboard/History';
import MyDocuments from './pages/dashboard/MyDocuments';
import Analytics from './pages/dashboard/Analytics';
import Settings from './pages/dashboard/Settings';
import Billing from './pages/dashboard/Billing';
import Support from './pages/dashboard/Support';
import Notifications from './pages/dashboard/Notifications';
import AdminLayout from './layouts/AdminLayout';
import AdminHome from './pages/admin/AdminHome';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<AuthPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="process" element={<DocumentProcessing />} />
          <Route path="result/:id" element={<DocumentResult />} />
          <Route path="documents" element={<History />} />
          <Route path="my-documents" element={<MyDocuments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="billing" element={<Billing />} />
          <Route path="support" element={<Support />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default LandingPage;

import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CategoriesSection from '../components/CategoriesSection';
import ProductsSection from '../components/ProductsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import HowItWorksSection from '../components/HowItWorksSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div style={{ paddingTop: 70 }}>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <ProductsSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

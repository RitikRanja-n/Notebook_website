import React from 'react';
import { ConfigProvider } from 'antd';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseSection from './components/WhyChooseSection';
import HowItWorksSection from './components/HowItWorksSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

const antdTheme = {
  token: {
    colorPrimary: '#2563EB',
    fontFamily: "'Inter', sans-serif",
    borderRadius: 10,
  },
};

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <div style={{ fontFamily: "'Inter', sans-serif" }}>
        <Navbar />
        {/* Main content with top padding to offset fixed navbar */}
        <main
         style={{ paddingTop: 70 }}
         >
          <HeroSection />
          <StatsSection />
          <CategoriesSection />
          <ProductsSection />
          <WhyChooseSection />
          <HowItWorksSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default App;

import React, { useContext } from 'react';
import { ConfigProvider, theme as antdThemeParams } from 'antd';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ReturnPolicy from './pages/ReturnPolicy';
import ScrollToTop from './components/ScrollToTop';
import './i18n';
import './index.css';

const baseToken = {
  colorPrimary: '#2563EB',
  fontFamily: "'Inter', sans-serif",
  borderRadius: 10,
};

function App() {
  return (
    <ConfigProvider theme={{ token: baseToken }}>
      <div className="app-wrapper bg-white text-gray-900" style={{ fontFamily: "'Inter', sans-serif", minHeight: '100vh' }}>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ConfigProvider>
  );
}

export default App;

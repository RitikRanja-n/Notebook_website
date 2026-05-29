import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, Tooltip } from 'antd';
import AppButton from '../reusable/AppButton';
import { useTranslation } from 'react-i18next';
import {
  MenuOutlined,
  CloseOutlined,
  BookOutlined,
  UserOutlined,
  UserAddOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('navbar.home');

  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  const navLinks = [
    { label: t('navbar.home'), key: 'navbar.home', href: '#home' },
    { label: t('navbar.products'), key: 'navbar.products', href: '#products' },
    { label: t('navbar.categories'), key: 'navbar.categories', href: '#categories' },
    { label: t('navbar.about'), key: 'navbar.about', href: '#about' },
    { label: t('navbar.contact'), key: 'navbar.contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (label, href) => {
    setActiveLink(label);
    setDrawerOpen(false);
    
    const scrollToElement = () => {
      const el = document.querySelector(href);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          height: 70,
          borderBottom: '1px solid rgba(229, 231, 235, 0.5)',
          boxShadow: scrolled ? '0 2px 20px rgba(15,23,42,0.08)' : 'none',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.82)',
        }}
      >
        <div
          className="h-full flex items-center justify-between px-6 md:px-10"
          style={{ maxWidth: 1280, margin: '0 auto' }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 no-underline"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => { e.preventDefault(); handleNavClick('navbar.home', '#home'); }}
          >
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: 44, height: 44, background: '#2563EB' }}
            >
              <BookOutlined style={{ color: '#fff', fontSize: 22 }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="multicolor-neon-text" style={{ 
                fontSize: 34, 
                fontWeight: 800, 
                letterSpacing: '-0.5px', 
                lineHeight: 1,
              }}>
                {t('navbar.brand_name')}
              </span>
              <span style={{ fontSize: 12, fontWeight: 500, color: '#081F5A', letterSpacing: '1px' }}>
                {t('navbar.brand_subtitle')}
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.key, link.href); }}
                className="no-underline transition-colors duration-200 relative group"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: activeLink === link.key ? '#2563EB' : '#081F5A',
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"
                  style={{
                    backgroundColor: '#2563EB',
                    width: activeLink === link.key ? '100%' : '0%',
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Lang Toggle + Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Tooltip title={i18n.language === 'en' ? t('navbar.change_hindi') : t('navbar.change_english')}>
              <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100"
                style={{ width: 40, height: 40, border: 'none', background: 'transparent', cursor: 'pointer', color: '#081F5A' }}
              >
                <GlobalOutlined style={{ fontSize: 20 }} />
                <span style={{ marginLeft: 4, fontWeight: 600, fontSize: 14 }}>
                  {i18n.language === 'en' ? 'अ' : 'A'}
                </span>
              </button>
            </Tooltip>

            <AppButton
              id="login-btn"
              variant="outline"
              icon={<UserOutlined />}
              style={{ height: 44, paddingInline: 20 }}
            >
              {t('navbar.login')}
            </AppButton>
            <AppButton
              id="become-retailer-nav-btn"
              variant="primary"
              icon={<UserAddOutlined />}
              style={{ height: 44, paddingInline: 20 }}
            >
              {t('navbar.become_retailer')}
            </AppButton>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-xl transition-colors duration-200 bg-white hover:bg-gray-50"
              style={{ width: 40, height: 40, border: '1px solid #E5E7EB', cursor: 'pointer', color: '#081F5A' }}
              aria-label="Toggle Language"
            >
              <GlobalOutlined style={{ fontSize: 16 }} />
              <span style={{ marginLeft: 3, fontWeight: 600, fontSize: 12 }}>
                {i18n.language === 'en' ? 'अ' : 'A'}
              </span>
            </button>

            <button
              className="flex items-center justify-center transition-colors duration-200 hover:bg-gray-50"
              style={{
                width: 40, height: 40,
                border: '1px solid #E5E7EB',
                borderRadius: 10,
                background: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <MenuOutlined style={{ fontSize: 18, color: '#081F5A' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={280}
        title={
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-lg" style={{ width: 32, height: 32, background: '#2563EB' }}>
              <BookOutlined style={{ color: '#fff', fontSize: 16 }} />
            </div>
            <span className="multicolor-neon-text" style={{ 
              fontWeight: 900, 
              fontSize: 20,
            }}>{t('navbar.brand_name')}</span>
          </div>
        }
        closeIcon={<CloseOutlined />}
        bodyStyle={{ padding: '16px 0' }}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.key, link.href); }}
              className="px-6 py-4 no-underline border-b transition-colors duration-200"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: activeLink === link.key ? '#2563EB' : '#081F5A',
                borderColor: '#F1F5F9',
                backgroundColor: activeLink === link.key ? '#EFF6FF' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 px-6 pt-6">
            <AppButton block variant="outline" style={{ height: 44 }}>
              {t('navbar.login')}
            </AppButton>
            <AppButton block variant="primary" style={{ height: 44 }}>
              {t('navbar.become_retailer')}
            </AppButton>
          </div>
        </nav>
      </Drawer>
    </>
  );
}

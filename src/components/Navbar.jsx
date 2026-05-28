import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  BookOutlined,
  UserOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Categories', href: '#categories' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label, href) => {
    setActiveLink(label);
    setDrawerOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300"
        style={{
          height: 70,
          borderBottom: '1px solid #E5E7EB',
          boxShadow: scrolled ? '0 2px 20px rgba(15,23,42,0.08)' : 'none',
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
            onClick={(e) => { e.preventDefault(); handleNavClick('Home', '#home'); }}
          >
            <div
              className="flex items-center justify-center rounded-xl"
              style={{ width: 44, height: 44, background: '#2563EB' }}
            >
              <BookOutlined style={{ color: '#fff', fontSize: 22 }} />
            </div>
            <div className="flex flex-col leading-tight">
              <span style={{ fontSize: 20, fontWeight: 800, color: '#2563EB', letterSpacing: '-0.5px', lineHeight: 1 }}>
                RANJAN
              </span>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#081F5A', letterSpacing: '0.5px' }}>
                NOTEBOOK FACTORY
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
                className="no-underline transition-colors duration-200 relative group"
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: activeLink === link.label ? '#2563EB' : '#081F5A',
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"
                  style={{
                    backgroundColor: '#2563EB',
                    width: activeLink === link.label ? '100%' : undefined,
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              id="login-btn"
              size="large"
              icon={<UserOutlined />}
              style={{
                height: 44,
                paddingInline: 20,
                borderColor: '#2563EB',
                color: '#2563EB',
                fontWeight: 500,
                borderRadius: 10,
              }}
            >
              Login
            </Button>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                id="become-retailer-nav-btn"
                type="primary"
                size="large"
                icon={<UserAddOutlined />}
                style={{
                  height: 44,
                  paddingInline: 20,
                  backgroundColor: '#2563EB',
                  borderColor: '#2563EB',
                  fontWeight: 600,
                  borderRadius: 10,
                  boxShadow: '0 4px 12px rgba(37,99,235,0.20)',
                }}
              >
                Become a Retailer
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden flex items-center justify-center"
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
            <span style={{ fontWeight: 800, color: '#2563EB', fontSize: 16 }}>RANJAN</span>
          </div>
        }
        closeIcon={<CloseOutlined />}
        bodyStyle={{ padding: '16px 0' }}
      >
        <nav className="flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.label, link.href); }}
              className="px-6 py-4 no-underline border-b transition-colors duration-200"
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: activeLink === link.label ? '#2563EB' : '#081F5A',
                borderColor: '#F1F5F9',
                backgroundColor: activeLink === link.label ? '#EFF6FF' : 'transparent',
              }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 px-6 pt-6">
            <Button block size="large" style={{ borderColor: '#2563EB', color: '#2563EB', borderRadius: 10, fontWeight: 500 }}>
              Login
            </Button>
            <Button block type="primary" size="large" style={{ backgroundColor: '#2563EB', borderRadius: 10, fontWeight: 600 }}>
              Become a Retailer
            </Button>
          </div>
        </nav>
      </Drawer>
    </>
  );
}

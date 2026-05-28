import React from 'react';
import { BookOutlined } from '@ant-design/icons';
import { useWindowSize } from '../hooks/useWindowSize';

const footerColumns = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Products', href: '#products' },
      { label: 'About Us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { label: 'Notebooks', href: '#categories' },
      { label: 'Registers', href: '#categories' },
      { label: 'Diaries', href: '#categories' },
      { label: 'Pens & Pencils', href: '#categories' },
      { label: 'Office Stationery', href: '#categories' },
    ],
  },
  {
    title: 'For Retailers',
    links: [
      { label: 'Become a Retailer', href: '#contact' },
      { label: 'Retailer Login', href: '#' },
      { label: 'How It Works', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Return Policy', href: '#' },
    ],
  },
];

const linkStyle = {
  fontSize: 13,
  fontWeight: 400,
  color: 'rgba(255,255,255,0.72)',
  textDecoration: 'none',
  display: 'block',
  lineHeight: 1,
  transition: 'color 0.2s',
};

export default function Footer() {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  // Grid columns: desktop = brand + 4 cols, tablet/mobile = 2 cols
  const gridCols = isDesktop
    ? '220px repeat(4, 1fr)'
    : 'repeat(2, 1fr)';

  const padding = isMobile ? '28px 20px 20px' : '36px 40px 28px';
  const copyrightPadding = isMobile ? '14px 20px' : '14px 40px';

  return (
    <footer style={{ background: '#081F5A' }}>
      {/* Main grid */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding,
          display: 'grid',
          gridTemplateColumns: gridCols,
          gap: isMobile ? '24px' : isTablet ? '28px 32px' : '28px',
          alignItems: 'start',
        }}
      >
        {/* ── Brand ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            // On tablet/mobile, span full width so it sits alone on first row
            gridColumn: !isDesktop ? '1 / -1' : undefined,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 38, height: 38, borderRadius: 8,
                background: '#2563EB', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <BookOutlined style={{ color: '#fff', fontSize: 18 }} />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>
                RANJAN
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.6px' }}>
                NOTEBOOK FACTORY
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65, margin: 0, maxWidth: 240,
            }}
          >
            Manufacturing and supplying premium notebooks,
            stationery and office supplies to retailers and wholesalers.
          </p>
        </div>

        {/* ── Link columns ── */}
        {footerColumns.map((col) => (
          <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <h4
              style={{
                fontSize: 14, fontWeight: 700, color: '#fff',
                margin: '0 0 4px', letterSpacing: '0.1px',
              }}
            >
              {col.title}
            </h4>
            {col.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* ── Copyright bar ── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.10)',
          padding: copyrightPadding,
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.50)' }}>
          © 2024 Ranjan Notebook Factory. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

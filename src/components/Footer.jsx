import React from 'react';
import { BookOutlined } from '@ant-design/icons';
import { useWindowSize } from '../hooks/useWindowSize';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



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
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const footerColumns = [
    {
      title: t('footer.quick_links'),
      links: [
        { label: t('footer.link_home'), href: '#home' },
        { label: t('footer.link_products'), href: '#products' },
        { label: t('footer.link_about'), href: '#about' },
        { label: t('footer.link_contact'), href: '#contact' },
      ],
    },
    {
      title: t('footer.categories'),
      links: [
        { label: t('footer.link_notebooks'), href: '#categories' },
        { label: t('footer.link_registers'), href: '#categories' },
        { label: t('footer.link_diaries'), href: '#categories' },
        { label: t('footer.link_pens'), href: '#categories' },
        { label: t('footer.link_office'), href: '#categories' },
      ],
    },
    {
      title: t('footer.for_retailers'),
      links: [
        { label: t('footer.link_become_retailer'), href: '#contact' },
        { label: t('footer.link_retailer_login'), href: '#' },
        { label: t('footer.link_how_it_works'), href: '#' },
        { label: t('footer.link_faqs'), href: '#' },
      ],
    },
    {
      title: t('footer.policies'),
      links: [
        { label: t('footer.link_privacy'), href: '/privacy-policy', isRoute: true },
        { label: t('footer.link_terms'), href: '/terms-conditions', isRoute: true },
        { label: t('footer.link_return'), href: '/return-policy', isRoute: true },
      ],
    },
  ];

  const handleFooterLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
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
    }
  };

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
              <div style={{ fontSize: 16, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px', textTransform: 'uppercase' }}>
                {t('navbar.brand_name')}
              </div>
              <div style={{ fontSize: 9, fontWeight: 500, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                {t('navbar.brand_subtitle')}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.65, margin: 0, maxWidth: 240,
            }}
          >
            {t('footer.desc')}
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
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleFooterLinkClick(e, link.href)}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')}
                >
                  {link.label}
                </a>
              )
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
          {t('footer.copyright', { brand: t('navbar.brand_name') })}
        </span>
      </div>
    </footer>
  );
}

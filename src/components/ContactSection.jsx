import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import { useWindowSize } from '../hooks/useWindowSize';
import COMPANY from '../config/company';

const contactItems = [
  {
    id: 'contact-phone',
    icon: <PhoneOutlined style={{ fontSize: 15, color: '#2563EB' }} />,
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    id: 'contact-email',
    icon: <MailOutlined style={{ fontSize: 15, color: '#2563EB' }} />,
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    id: 'contact-address',
    icon: <EnvironmentOutlined style={{ fontSize: 15, color: '#2563EB' }} />,
    value: 'S K Notebook, Chandi Bazar, Barhauna, Bihar 803108',
    href: null,
  },
];

const businessHours = [
  { day: 'Mon – Sat', time: '9:00 AM – 7:00 PM' },
  { day: 'Sunday', time: 'Open' },
];

const socialLinks = [
  {
    id: 'social-whatsapp',
    icon: <WhatsAppOutlined style={{ fontSize: 18, color: '#fff' }} />,
    bg: '#25D366',
    href: `https://wa.me/${COMPANY.whatsapp}`,
    label: 'WhatsApp',
  },
  {
    id: 'social-facebook',
    icon: <FacebookOutlined style={{ fontSize: 18, color: '#fff' }} />,
    bg: '#1877F2',
    href: '#',
    label: 'Facebook',
  },
  {
    id: 'social-instagram',
    icon: <InstagramOutlined style={{ fontSize: 18, color: '#fff' }} />,
    bg: 'linear-gradient(135deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
    href: '#',
    label: 'Instagram',
  },
];

export default function ContactSection() {
  const { isDesktop, isMobile } = useWindowSize();
  const isCompact = isDesktop; // 3-col horizontal only on desktop

  return (
    <section
      id="contact"
      style={{ background: '#F1F5FF', padding: isMobile ? '28px 16px' : '40px 24px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: 1160,
          margin: '0 auto',
          background: '#fff',
          borderRadius: 16,
          border: '1px solid #E5E7EB',
          boxShadow: '0 4px 20px rgba(15,23,42,0.06)',
          overflow: 'hidden',
          // 3-col on desktop, single col on mobile/tablet
          display: 'grid',
          gridTemplateColumns: isCompact ? '1fr auto 1fr' : '1fr',
        }}
      >
        {/* ── LEFT / TOP: Get In Touch ─────────────────── */}
        <div
          style={{
            padding: isMobile ? '24px 20px' : '32px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            borderBottom: !isCompact ? '1px solid #F1F5F9' : 'none',
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#081F5A', margin: 0 }}>
            Get In Touch
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {contactItems.map((item) => (
              <div
                key={item.id}
                id={item.id}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
              >
                <div
                  style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: '#EFF6FF', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1,
                  }}
                >
                  {item.icon}
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    style={{
                      fontSize: 14, fontWeight: 500, color: '#0F172A',
                      textDecoration: 'none', lineHeight: 1.5, paddingTop: 6,
                    }}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: 14, fontWeight: 400, color: '#0F172A',
                      lineHeight: 1.55, paddingTop: 6, whiteSpace: 'pre-line',
                    }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CENTER / MIDDLE: Map ──────────────────────── */}
        <div
          style={{
            // fixed width column only on desktop; full-width on smaller
            width: isCompact ? 420 : '100%',
            padding: isMobile ? '0 20px 24px' : isCompact ? '20px 20px' : '0 36px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderLeft: isCompact ? '1px solid #F1F5F9' : 'none',
            borderRight: isCompact ? '1px solid #F1F5F9' : 'none',
            borderBottom: !isCompact ? '1px solid #F1F5F9' : 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              height: isMobile ? 200 : 200,
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid #E5E7EB',
              boxShadow: '0 2px 12px rgba(15,23,42,0.08)',
            }}
          >
            <iframe
              id="contact-map"
              title="Ranjan Notebook Factory Location"
              src="https://www.google.com/maps/embed?pb=!4v1779866965232!6m8!1m7!1sTH0ok9GuMAGd6SWQGoykvg!2m2!1d25.30640665328505!2d85.4176487197453!3f31.680981712328762!4f-4.7671232876712395!5f0.4000000000000002"
              
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ── RIGHT / BOTTOM: Business Hours + Follow Us ── */}
        <div
          style={{
            padding: isMobile ? '24px 20px' : '32px 36px',
            display: 'flex',
            flexDirection: isMobile ? 'row' : 'column',
            flexWrap: 'wrap',
            gap: isMobile ? 32 : 24,
          }}
        >
          {/* Business Hours */}
          <div style={{ flex: isMobile ? '1 1 auto' : undefined }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <ClockCircleOutlined style={{ fontSize: 16, color: '#081F5A' }} />
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#081F5A', margin: 0 }}>
                Business Hours
              </h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {businessHours.map((bh, idx) => (
                <div
                  key={idx}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}
                >
                  <span style={{ fontWeight: 500, color: '#0F172A', minWidth: 68 }}>
                    {bh.day}
                  </span>
                  <span style={{ color: '#94A3B8' }}>:</span>
                  <span style={{ fontWeight: 500, color: bh.time === 'Close' ? '#EF4444' : '#0F172A' }}>
                    {bh.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div style={{ flex: isMobile ? '1 1 auto' : undefined }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#081F5A', marginBottom: 12 }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: 10 }}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: social.bg, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    flexShrink: 0,
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import React from 'react';
import { Divider } from 'antd';
import AppButton from '../reusable/AppButton';
import { useTranslation } from 'react-i18next';
import {
  SafetyOutlined,
  CarOutlined,
  CustomerServiceOutlined,
  ShoppingOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import hero1 from "../assets/hero/hero1.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const imgVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroSection() {
  const { t } = useTranslation();

  const trustItems = [
    { icon: <SafetyOutlined style={{ fontSize: 22, color: '#2563EB' }} />, label: t('hero.quality_products') },
    { icon: <CarOutlined style={{ fontSize: 22, color: '#2563EB' }} />, label: t('hero.fast_delivery') },
    { icon: <CustomerServiceOutlined style={{ fontSize: 22, color: '#2563EB' }} />, label: t('hero.dedicated_support') },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="transition-colors duration-300"
      style={{
        background: '#F1F5FF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute', top: -80, right: -80,
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(219,234,254,0.5)', zIndex: 0,
        }}
      />

      <div
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 px-6 md:px-10"
        style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 24, paddingBottom: 64 }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col gap-6 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <span
              style={{
                background: '#2563EB',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                padding: '8px 18px',
                borderRadius: 999,
                display: 'inline-block',
              }}
            >
              {t('hero.badge')}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(26px, 3.2vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#081F5A',
              letterSpacing: '-0.5px',
              whiteSpace: 'nowrap',
            }}
          >
            {t('hero.title_part1')} <br />{' '}
            <span style={{ color: '#2563EB' }}>{t('hero.title_part2')}</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#64748B',
              maxWidth: 500,
              margin: '0 auto',
              marginLeft: 0,
            }}
            className="mx-auto lg:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <AppButton
              id="browse-products-btn"
              variant="primary"
              size="large"
              icon={<ShoppingOutlined />}
              onClick={() => scrollToSection('#products')}
            >
              {t('hero.browse_products')}
            </AppButton>
            <AppButton
              id="become-retailer-hero-btn"
              variant="outline"
              size="large"
              icon={<UserAddOutlined />}
              onClick={() => scrollToSection('#contact')}
            >
              {t('hero.become_retailer')}
            </AppButton>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                {item.icon}
                <span style={{ fontSize: 14, fontWeight: 500, color: '#0F172A' }}>
                  {item.label}
                  <Divider type="vertical" style={{ borderColor: '#1890ff', borderWidth: '3px' }}/>
                </span>
                
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          className="flex-1 flex justify-center items-center relative"
          variants={imgVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Background blob */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#EAF2FF',
              borderRadius: 24,
              zIndex: 0,
            }}
          />
          {/* Decorative dots */}
          <div
            style={{
              position: 'absolute', top: 20, right: 20,
              width: 80, height: 80,
              backgroundImage: 'radial-gradient(#2563EB22 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: 'absolute', bottom: 20, left: 20,
              width: 60, height: 60,
              backgroundImage: 'radial-gradient(#2563EB22 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              zIndex: 1,
            }}
          />
          <motion.img
            src={hero1}
            alt="Premium stationery products - notebooks, registers, pens, pencils"
            loading="lazy"
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: 900,
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 24,
              padding: 20,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  DeploymentUnitOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseSection() {
  const { t } = useTranslation();

  const features = [
    {
      id: 'feature-factory',
      icon: <DeploymentUnitOutlined style={{ fontSize: 32, color: '#2563EB' }} />,
      title: t('why_choose.direct_factory'),
      desc: t('why_choose.direct_factory_desc'),
    },
    {
      id: 'feature-quality',
      icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: '#2563EB' }} />,
      title: t('why_choose.quality_assured'),
      desc: t('why_choose.quality_assured_desc'),
    },
    {
      id: 'feature-delivery',
      icon: <TruckOutlined style={{ fontSize: 32, color: '#2563EB' }} />,
      title: t('why_choose.fast_delivery'),
      desc: t('why_choose.fast_delivery_desc'),
    },
    {
      id: 'feature-range',
      icon: <AppstoreOutlined style={{ fontSize: 32, color: '#2563EB' }} />,
      title: t('why_choose.wide_range'),
      desc: t('why_choose.wide_range_desc'),
    },
    {
      id: 'feature-support',
      icon: <PhoneOutlined style={{ fontSize: 32, color: '#2563EB' }} />,
      title: t('why_choose.customer_support'),
      desc: t('why_choose.customer_support_desc'),
    },
  ];

  return (
    <section
      id="about"
      className="transition-colors duration-300"
      style={{ padding: '56px 24px', background: 'linear-gradient(180deg, #FFFFFF, #F8FAFC)' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }} className="flex flex-col lg:flex-row items-center gap-6">
        {/* Left Side */}
        <div className="w-full lg:w-[26%] flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 24, fontWeight: 700, color: '#081F5A', marginBottom: 8 }}
          >
            {t('why_choose.title')} <br /> {t('navbar.brand_name')} {t('navbar.brand_subtitle')}?
          </motion.h2>
          <div style={{ width: 60, height: 4, background: '#2563EB', borderRadius: 999, marginBottom: 16 }} />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, maxWidth: 520 }}
          >
            {t('why_choose.desc')}
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[74%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              id={feature.id}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-4 justify-start"
              style={{ minHeight: 180 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.05, boxShadow: '0 10px 30px rgba(37,99,235,.15)' }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(37,99,235,0.08)',
                  marginBottom: 8,
                }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 13, color: '#64748B', lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

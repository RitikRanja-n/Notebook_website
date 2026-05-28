import React from 'react';
import { motion } from 'framer-motion';
import { Divider } from 'antd';

import {
  InboxOutlined,
  TeamOutlined,
  TrophyOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../hooks/useWindowSize';



const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function StatsSection() {
  const { isMobile, isTablet } = useWindowSize();
  const { t } = useTranslation();

  const stats = [
    {
      id: 'stat-products',
      icon: <InboxOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      iconBg: '#EFF6FF',
      number: '500+',
      label: t('stats.products'),
      color: '#2563EB',
      
    },
    {
      id: 'stat-retailers',
      icon: <TeamOutlined style={{ fontSize: 28, color: '#16A34A' }} />,
      iconBg: '#F0FDF4',
      number: '200+',
      label: t('stats.retailers'),
      color: '#16A34A',
    },
    {
      id: 'stat-experience',
      icon: <TrophyOutlined style={{ fontSize: 28, color: '#F59E0B' }} />,
      iconBg: '#FFFBEB',
      number: '8+',
      label: t('stats.years_experience'),
      color: '#F59E0B',
    },
    {
      id: 'stat-orders',
      icon: <ShoppingCartOutlined style={{ fontSize: 28, color: '#7C3AED' }} />,
      iconBg: '#F5F3FF',
      number: '50,000+',
      label: t('stats.orders_delivered'),
      color: '#7C3AED',
    },
  ];

  return (
    <section
      style={{
        padding: isMobile ? '0 16px' : '0 24px',
        marginTop: -48,
        position: 'relative',
        zIndex: 10,
      }}
    >

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            background: '#fff',
            borderRadius: 24,
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
            padding: '32px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 24,
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              variants={cardVariants}
              className="flex flex-col items-center text-center gap-3"
              style={{ minHeight: 120 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: stat.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                {stat.icon}
              </motion.div>
              <div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: stat.color,
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: '#64748B',
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                  
                </div>
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

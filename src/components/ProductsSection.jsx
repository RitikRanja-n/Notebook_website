import React, { useRef } from 'react';
import { Button } from 'antd';
import AppButton from '../reusable/AppButton';
import { motion } from 'framer-motion';
import { LockOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';



const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function ProductsSection() {
  const scrollRef = useRef(null);
  const { t } = useTranslation();

  const products = [
    {
      id: 'prod-a4-notebook',
      name: t('products.prod_a4_notebook'),
      emoji: '📓',
      bg: '#EFF6FF',
      status: t('products.in_stock'),
      statusColor: '#16A34A',
      statusBg: '#F0FDF4',
      moq: t('products.moq', { count: 20 }),
    },
    {
      id: 'prod-long-register',
      name: t('products.prod_long_register'),
      emoji: '📋',
      bg: '#FFF1F2',
      status: t('products.in_stock'),
      statusColor: '#16A34A',
      statusBg: '#F0FDF4',
      moq: t('products.moq', { count: 10 }),
    },
    {
      id: 'prod-spiral-notebook',
      name: t('products.prod_spiral_notebook'),
      emoji: '🌀',
      bg: '#FFF7ED',
      status: t('products.low_stock'),
      statusColor: '#F59E0B',
      statusBg: '#FFFBEB',
      moq: t('products.moq', { count: 20 }),
    },
    {
      id: 'prod-premium-diary',
      name: t('products.prod_premium_diary'),
      emoji: '📔',
      bg: '#F5F3FF',
      status: t('products.in_stock'),
      statusColor: '#16A34A',
      statusBg: '#F0FDF4',
      moq: t('products.moq', { count: 10 }),
    },
    {
      id: 'prod-drawing-book',
      name: t('products.prod_drawing_book'),
      emoji: '🎨',
      bg: '#F0FDF4',
      status: t('products.in_stock'),
      statusColor: '#16A34A',
      statusBg: '#F0FDF4',
      moq: t('products.moq', { count: 20 }),
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      style={{ padding: '56px 24px', background: '#F8FAFF' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 36, fontWeight: 700, color: '#081F5A', marginBottom: 12 }}
          >
            {t('products.title')}
          </motion.h2>
          <div className="section-underline" />
          <p style={{ fontSize: 16, color: '#64748B', marginTop: 16, fontWeight: 400 }}>
            {t('products.subtitle')}
          </p>
        </div>

        {/* Product Slider */}
        <div className="relative group px-4 md:px-12">
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center shadow-md bg-white border-none"
            style={{ width: 40, height: 40 }}
          />

          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar snap-x snap-mandatory pt-4 px-2"
          >
          {products.map((product) => (
            <motion.div
              key={product.id}
              id={product.id}
              variants={cardVariants}
              className="product-card flex-shrink-0 snap-start"
              style={{ width: 210 }}
            >
              {/* Product Image Area */}
              <div
                style={{
                  height: 140,
                  background: product.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 64,
                  padding: 20,
                }}
              >
                {product.emoji}
              </div>

              {/* Product Info */}
              <div style={{ padding: '14px 16px 16px' }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#0F172A',
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>

                {/* Status */}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: product.statusColor,
                    background: product.statusBg,
                    padding: '2px 8px',
                    borderRadius: 6,
                    display: 'inline-block',
                    marginBottom: 6,
                  }}
                >
                  ● {product.status}
                </span>

                {/* MOQ */}
                <div style={{ fontSize: 12, color: '#64748B', marginBottom: 10 }}>
                  {product.moq}
                </div>

                {/* Price locked */}
                <div
                  style={{
                    fontSize: 11,
                    color: '#64748B',
                    marginBottom: 10,
                    background: '#F8FAFC',
                    borderRadius: 6,
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <LockOutlined style={{ fontSize: 10 }} />
                  {t('products.wholesale_pricing')}
                </div>

                {/* Button */}
                <Button
                  block
                  style={{
                    height: 40,
                    borderColor: '#2563EB',
                    color: '#2563EB',
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: 14,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563EB';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#2563EB';
                  }}
                >
                  {t('products.view_details')}
                </Button>
              </div>
            </motion.div>
          ))}
          </motion.div>

          <Button
            shape="circle"
            icon={<RightOutlined />}
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center shadow-md bg-white border-none"
            style={{ width: 40, height: 40 }}
          />
           {/* View All Button */}
           <div className="flex justify-center mt-8">
             <AppButton
               id="view-all-products-btn"
               variant="primary"
               size="large"
               onClick={() => {}}
             >
               {t('products.view_all')}
             </AppButton>
           </div>
        </div>
      </div>
    </section>
  );
}

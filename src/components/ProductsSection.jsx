import React, { useRef } from 'react';
import { Button } from 'antd';
import AppButton from '../reusable/AppButton';
import { motion } from 'framer-motion';
import { LockOutlined, LeftOutlined, RightOutlined, SwapOutlined } from '@ant-design/icons';
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
      style={{ padding: '56px 24px', background: '#F8FAFC' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title text-center text-[#081F5A] mb-3"
          >
            {t('products.title')}
          </motion.h2>
          <div className="section-underline" />
          <p className="section-subtitle text-center mt-4">
            {t('products.subtitle')}
          </p>
          
          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm">
            <SwapOutlined className="animate-pulse" style={{ fontSize: 16 }} />
            <span>{t('products.swipe_hint')}</span>
          </div>
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
              className="product-card flex-shrink-0 snap-start relative group"
            >
              {/* Product Image Area */}
              <div
                className="overflow-hidden relative"
                style={{
                  height: 160,
                  background: product.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 64,
                  padding: 20,
                }}
              >
                {/* Ribbon */}
                {(product.id === 'prod-a4-notebook' || product.id === 'prod-premium-diary') && (
                  <div className="absolute top-3 left-0 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-r-full shadow-sm z-10 uppercase tracking-wider">
                    {product.id === 'prod-a4-notebook' ? 'Best Seller' : 'New Arrival'}
                  </div>
                )}
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {product.emoji}
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: '16px', textAlign: 'left', display: 'flex', flexDirection: 'column', height: 'calc(100% - 160px)' }}>
                <h3
                  className="product-name"
                  style={{
                    color: '#0F172A',
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {product.name}
                </h3>

                {/* Status & MOQ row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: product.statusColor,
                      background: product.statusBg,
                      padding: '2px 8px',
                      borderRadius: 6,
                      display: 'inline-block',
                    }}
                  >
                    ● {product.status}
                  </span>
                  <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500 }}>
                    {product.moq}
                  </div>
                </div>

                {/* Price locked */}
                <div
                  style={{
                    fontSize: 12,
                    color: '#64748B',
                    marginBottom: 16,
                    background: '#F1F5F9',
                    borderRadius: 6,
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <LockOutlined style={{ fontSize: 12 }} />
                  {t('products.wholesale_pricing')}
                </div>

                {/* Button */}
                <Button
                  block
                  style={{
                    height: 44,
                    borderColor: '#2563EB',
                    color: '#2563EB',
                    borderRadius: 8,
                    fontWeight: 600,
                    fontSize: 15,
                    transition: 'all 0.2s',
                    marginTop: 'auto',
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

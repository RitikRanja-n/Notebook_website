import React, { useRef } from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const categories = [
  { id: 'cat-notebooks', label: 'Notebooks', emoji: '📚', color: '#EFF6FF' },
  { id: 'cat-registers', label: 'Registers', emoji: '📖', color: '#F0FDF4' },
  { id: 'cat-spiral', label: 'Spiral Notebooks', emoji: '🌀', color: '#FFF7ED' },
  { id: 'cat-diaries', label: 'Diaries', emoji: '📔', color: '#FDF4FF' },
  { id: 'cat-drawing', label: 'Drawing Books', emoji: '🎨', color: '#FFF1F2' },
  { id: 'cat-pens', label: 'Pens', emoji: '🖊', color: '#F0FDFA' },
  { id: 'cat-pencils', label: 'Pencils', emoji: '✏️', color: '#FFFBEB' },
  { id: 'cat-geometry', label: 'Geometry Boxes', emoji: '📏', color: '#EEF2FF' },
  { id: 'cat-office', label: 'Office Stationery', emoji: '🏢', color: '#F8FAFC' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CategoriesSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="categories"
      style={{ padding: '50px 24px 20px', background: '#fff' }}
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
            Shop By Categories
          </motion.h2>
          <div className="section-underline" />
        </div>

        {/* Category Slider */}
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
            className="flex overflow-x-auto gap-5 mb-10 hide-scrollbar snap-x snap-mandatory py-4=2 px-2"
          >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              id={cat.id}
              variants={cardVariants}
              className="category-card flex-shrink-0 snap-start"
              role="button"
              tabIndex={0}
              aria-label={cat.label}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 12,
                  background: cat.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                }}
              >
                {cat.emoji}
              </div>
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#0F172A',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}
              >
                {cat.label}
              </span>
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
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Button
              id="view-all-categories-btn"
              type="primary"
              size="large"
              style={{
                height: 48,
                paddingInline: 36,
                fontSize: 15,
                fontWeight: 600,
                backgroundColor: '#2563EB',
                borderColor: '#2563EB',
                borderRadius: 10,
                boxShadow: '0 4px 12px rgba(37,99,235,0.20)',
              }}
            >
              View All Categories
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  DeploymentUnitOutlined,
  SafetyCertificateOutlined,
  CarOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const features = [
  {
    id: 'feature-factory',
    icon: <DeploymentUnitOutlined style={{ fontSize: 24, color: '#2563EB' }} />,
    iconBg: '#EFF6FF',
    title: 'Direct Factory',
    desc: 'Direct manufacturing ensures best prices.',
  },
  {
    id: 'feature-quality',
    icon: <SafetyCertificateOutlined style={{ fontSize: 24, color: '#16A34A' }} />,
    iconBg: '#F0FDF4',
    title: 'Quality Assured',
    desc: 'High quality raw materials used .',
  },
  {
    id: 'feature-delivery',
    icon: <CarOutlined style={{ fontSize: 24, color: '#F59E0B' }} />,
    iconBg: '#FFFBEB',
    title: 'Fast Delivery',
    desc: 'Timely delivery across the region ',
  },
  {
    id: 'feature-range',
    icon: <AppstoreOutlined style={{ fontSize: 24, color: '#7C3AED' }} />,
    iconBg: '#F5F3FF',
    title: 'Wide Product Range',
    desc: '500+ products under one roof',
  },
  {
    id: 'feature-support',
    icon: <PhoneOutlined style={{ fontSize: 24, color: '#2563EB' }} />,
    iconBg: '#EFF6FF',
    title: 'Customer Support',
    desc: 'Dedicated support  for retailers.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseSection() {
  return (
    <section
      id="about"
      style={{ padding: '56px 24px', background: '#F8FAFC' }}
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
            Why Choose <br /> Ranjan Notebook Factory?
          </motion.h2>
          <div style={{ width: 60, height: 4, background: '#2563EB', borderRadius: 999, marginBottom: 16 }} />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, maxWidth: 520 }}
          >
            We are committed to providing the best quality <br /> products, competitive prices and excellent <br />service to our valuable retailers across India.
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
              className="flex flex-col items-center text-center gap-4 p-5 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-lg justify-start"
              style={{ boxShadow: '0 4px 12px rgba(15,23,42,0.06)', borderRadius: 16, minHeight: 180 }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: feature.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: 12, color: '#64748B', lineHeight: 1.5 }}>
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

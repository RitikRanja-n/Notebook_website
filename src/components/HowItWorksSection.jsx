import React from 'react';
import { motion } from 'framer-motion';
import {
  UserAddOutlined,
  ScheduleOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  FileTextOutlined ,
  TruckOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';



const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 'step-register',
      number: 1,
      icon: <UserAddOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.register'),
      desc: t('how_it_works.register_desc'),
    },
    {
      id: 'step-approval',
      number: 2,
      icon: <ScheduleOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.approval'),
      desc: t('how_it_works.approval_desc'),
    },
    {
      id: 'step-browse',
      number: 3,
      icon: <ShoppingOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.browse'),
      desc: t('how_it_works.browse_desc'),
    },
    {
      id: 'step-order',
      number: 4,
      icon: <ShoppingCartOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.order'),
      desc: t('how_it_works.order_desc'),
    },
    {
      id: 'step-invoice',
      number: 5,
      icon: <FileTextOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.invoice'),
      desc: t('how_it_works.invoice_desc'),
    },
    {
      id: 'step-delivery',
      number: 6,
      icon: <TruckOutlined style={{ fontSize: 28, color: '#2563EB' }} />,
      title: t('how_it_works.delivery'),
      desc: t('how_it_works.delivery_desc'),
    },
  ];

  return (
    <section
      style={{ padding: '56px 24px', background: '#fff' }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Section Title */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 36, fontWeight: 700, color: '#081F5A', marginBottom: 12 }}
          >
            {t('how_it_works.title')}
          </motion.h2>
          <div className="section-underline" />
          <p style={{ fontSize: 16, color: '#64748B', marginTop: 16 }}>
            {t('how_it_works.subtitle')}
          </p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center items-start gap-4 lg:gap-0"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                id={step.id}
                variants={stepVariants}
                className="flex flex-col items-center text-center gap-3"
                style={{ minWidth: 120, maxWidth: 160, flex: '1 1 120px' }}
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: '0 8px 24px rgba(37,99,235,0.2)' }}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: '2px solid #E5E7EB',
                    background: '#EFF6FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {step.icon}
                  {/* Step number badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: '#2563EB',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.number}
                  </div>
                </motion.div>

                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F172A', marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: 13, color: '#64748B', lineHeight: 1.5 }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>

              {/* Connector arrow (only between steps, not after last) */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="hidden lg:flex items-center"
                  style={{ flex: '0 0 auto', paddingTop: 36 }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 2,
                      background: 'linear-gradient(90deg, #2563EB, #93C5FD)',
                      borderRadius: 2,
                    }}
                  />
                  <div style={{ color: '#2563EB', fontSize: 12, marginLeft: 2 }}>›</div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

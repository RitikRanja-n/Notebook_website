import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AppButton from '../reusable/AppButton';
import { 
  QuestionCircleOutlined, TagOutlined, InboxOutlined, TruckOutlined, 
  SyncOutlined, UserAddOutlined, InfoCircleOutlined, CreditCardOutlined, 
  FileTextOutlined, ShoppingOutlined, EnvironmentOutlined,
  DownOutlined, MinusOutlined, PhoneOutlined, WhatsAppOutlined, 
   MessageOutlined
} from '@ant-design/icons';

const faqIcons = [
  <QuestionCircleOutlined />, 
  <TagOutlined />,            
  <InboxOutlined />,          
  <TruckOutlined />,          
  <SyncOutlined />,           
  <UserAddOutlined />,        
  <InfoCircleOutlined />,     
  <CreditCardOutlined />,     
  <FileTextOutlined />,       
  <ShoppingOutlined />,       
  <EnvironmentOutlined />     
];

const AccordionItem = ({ question, answer, isOpen, onClick, icon }) => {
  return (
    <div className="mb-2 transition-all duration-300">
      <button
        className="w-full py-4 md:py-5 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className={`flex-shrink-0 w-8 h-8  rounded-full flex items-center justify-center text-base transition-colors ${isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
            {icon}
          </span>
          <span className={`text-[15px] md:text-[16px] font-semibold transition-colors pr-4  ${isOpen ? 'text-gray-900' : 'text-gray-800 group-hover:text-blue-600'}`}>
            {question}
          </span>
        </div>
        <span className={`flex-shrink-0 font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}>
          {isOpen ? <MinusOutlined /> : <DownOutlined style={{ fontSize: 14 }} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pl-16 pr-6 pb-5 pt-2 text-gray-500 leading-relaxed text-[14px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  // Retrieve items as an array from the locale
  const faqItems = t('faq.items', { returnObjects: true }) || [];

  return (
    <section id="faq" className="bg-[#F8FAFC] py-12 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-blue-600 text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1 rounded-full mb-3">
            FAQ
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-[#081F5A] mb-3"
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl mx-auto text-[14px] md:text-[15px]"
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {Array.isArray(faqItems) && faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                icon={faqIcons[index % faqIcons.length]}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-lg relative">
              <MessageOutlined />
              <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-500 text-sm md:text-[15px] max-w-md">We're happy to help! Reach out to our team and we'll get back to you as soon as possible.</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full sm:w-auto flex-shrink-0 justify-center">
            <AppButton variant="primary" icon={<PhoneOutlined />} style={{ height: 44 }}>Contact Us</AppButton>
            <AppButton variant="outline" icon={<WhatsAppOutlined />} style={{ height: 44, color: '#16a34a', borderColor: '#16a34a' }}>WhatsApp Us</AppButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

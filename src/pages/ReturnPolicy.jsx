import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ReturnPolicy() {
  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: 100, paddingBottom: 60, maxWidth: 800, margin: '0 auto', paddingLeft: 20, paddingRight: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#081F5A' }}>{t('return_policy.title')}</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.last_updated')} {new Date().toLocaleDateString()}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('return_policy.returns_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.returns_desc1')}
      </p>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.returns_desc2')}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('return_policy.process_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.process_desc')}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('return_policy.damages_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.damages_desc')}
      </p>
      
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('return_policy.refunds_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('return_policy.refunds_desc')}
      </p>
    </div>
  );
}

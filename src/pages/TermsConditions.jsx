import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TermsConditions() {
  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: 100, paddingBottom: 60, maxWidth: 800, margin: '0 auto', paddingLeft: 20, paddingRight: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#081F5A' }}>{t('terms_conditions.title')}</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('terms_conditions.last_updated')} {new Date().toLocaleDateString()}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('terms_conditions.agreement_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('terms_conditions.agreement_desc')}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('terms_conditions.license_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('terms_conditions.license_desc', { brand: t('navbar.brand_name') })}
      </p>
      <ul style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16, paddingLeft: 20 }}>
        <li>{t('terms_conditions.license_item1')}</li>
        <li>{t('terms_conditions.license_item2')}</li>
        <li>{t('terms_conditions.license_item3')}</li>
        <li>{t('terms_conditions.license_item4')}</li>
        <li>{t('terms_conditions.license_item5')}</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('terms_conditions.disclaimer_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('terms_conditions.disclaimer_desc', { brand: t('navbar.brand_name') })}
      </p>
      
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('terms_conditions.limitations_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('terms_conditions.limitations_desc', { brand: t('navbar.brand_name') })}
      </p>
    </div>
  );
}

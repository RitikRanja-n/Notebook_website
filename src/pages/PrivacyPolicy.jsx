import React from 'react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div style={{ paddingTop: 100, paddingBottom: 60, maxWidth: 800, margin: '0 auto', paddingLeft: 20, paddingRight: 20 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#081F5A' }}>{t('privacy_policy.title')}</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('privacy_policy.last_updated')} {new Date().toLocaleDateString()}
      </p>
      
      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('privacy_policy.intro_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('privacy_policy.intro_desc', { brand: t('navbar.brand_name') })}
      </p>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('privacy_policy.data_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('privacy_policy.data_desc')}
      </p>
      <ul style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16, paddingLeft: 20 }}>
        <li dangerouslySetInnerHTML={{ __html: t('privacy_policy.data_item1') }} />
        <li dangerouslySetInnerHTML={{ __html: t('privacy_policy.data_item2') }} />
        <li dangerouslySetInnerHTML={{ __html: t('privacy_policy.data_item3') }} />
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('privacy_policy.usage_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('privacy_policy.usage_desc')}
      </p>
      <ul style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16, paddingLeft: 20 }}>
        <li>{t('privacy_policy.usage_item1')}</li>
        <li>{t('privacy_policy.usage_item2')}</li>
        <li>{t('privacy_policy.usage_item3')}</li>
      </ul>

      <h2 style={{ fontSize: 24, fontWeight: 'bold', marginTop: 32, marginBottom: 16, color: '#1f2937' }}>{t('privacy_policy.contact_title')}</h2>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 16 }}>
        {t('privacy_policy.contact_desc')}
      </p>
    </div>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1D4ED8',
        'dark-blue': '#081F5A',
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
        'hero-bg': '#F1F5FF',
        border: '#E5E7EB',
        success: '#16A34A',
        warning: '#F59E0B',
        purple: '#7C3AED',
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.08)',
        'card-sm': '0 4px 12px rgba(0,0,0,0.06)',
        'btn-primary': '0 4px 12px rgba(37,99,235,0.20)',
      },
      borderRadius: {
        xl2: '20px',
        xl3: '24px',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable preflight to avoid conflicts with antd
  },
}

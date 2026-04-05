/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-light': '#F8F7F4',
        'bg-dark': '#0A0F1E',
        card: '#FFFFFF',
        border: {
          DEFAULT: '#E5E3DE',
          secondary: '#E2E0DA',
        },
        'text-heading': '#0A0F1E',
        'text-body': '#4A4A4A',
        'text-light': '#F8F7F4',
        'accent-blue': '#3B82F6',
        'accent-cyan': '#06B6D4',
        'accent-purple': '#7C3AED',
        'accent-solana': '#14F195',
      },
      fontFamily: {
        'sans-heading': ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

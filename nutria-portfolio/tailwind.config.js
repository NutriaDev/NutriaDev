/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#101B23',
        surface: '#14202A',
        surface2: '#1A2B36',
        accent: '#6A9294',
        accent2: '#4a7274',
        text: '#F5F5DC',
        'text-dim': 'rgba(245,245,220,0.45)',
        'text-mid': 'rgba(245,245,220,0.72)',
        border: 'rgba(106,146,148,0.15)',
        'border-strong': 'rgba(106,146,148,0.35)',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        otterFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '40%': { transform: 'translateY(-14px) rotate(0.5deg)' },
          '70%': { transform: 'translateY(-8px) rotate(-0.3deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease forwards',
        fadeDown: 'fadeDown 0.7s ease forwards 0.1s',
        fadeIn: 'fadeIn 1.2s ease forwards 1.2s',
        otterFloat: 'otterFloat 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

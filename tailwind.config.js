/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#132040',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
        },
        cream: '#f9f6f0',
        sage: '#4a7c6f',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f8',
          100: '#d9e1ed',
          200: '#b3c2db',
          300: '#8da3c9',
          400: '#6684b7',
          500: '#4065a5',
          600: '#334f84',
          700: '#263b63',
          800: '#1a2742',
          900: '#0d1321',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
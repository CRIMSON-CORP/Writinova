/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FE7F3C',
        'black-paragraph': '#494A4D',
        'black-link': '#01020F',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '22px',
          xl: '132px',
          '2xl': '132px',
        },
      },
      screens: {
        xl: '1336px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};

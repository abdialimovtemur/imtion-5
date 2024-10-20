/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '6rem'
      },

      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        gray: 'var(--color-gray)',
        light: 'var(--color-light)',
        offWhite: 'var(--color-off-white)',
        darkGray: 'var(--color-dark-gray)',
      },

      fontSize: {
        'h1': ['70px', { lineHeight: '83px', fontWeight: '700' }],
        'h2': ['50px', { lineHeight: '58px', fontWeight: '800' }],
        'h3': ['40px', { lineHeight: '46px', fontWeight: '800' }],
        'h4': ['35px', { lineHeight: '41px', fontWeight: '800' }],
        'h5': ['30px', { lineHeight: '35px', fontWeight: '800' }],
        'h6': ['25px', { lineHeight: '29px', fontWeight: '800' }],
        'p': ['18px', { lineHeight: '29px', fontWeight: '400' }],
      },

      fontFamily: {
        primary: ['"Open Sans"', 'sans-serif'],
        secondary: ['"Roboto"', 'sans-serif'],
        cursive: ['"Yellowtail"', 'cursive'],
      },
    },
  },
  plugins: [],
}

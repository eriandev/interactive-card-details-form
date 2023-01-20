/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },

    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'Arial', 'Noto Sans', 'sans-serif'],
    },

    colors: {
      black: 'hsl(0, 0%, 18%)',
      white: 'hsl(0, 0%, 100%)',
      error: 'hsl(0, 100%, 66%)',
      violet: 'hsl(278, 94%, 30%)',
      'gray': 'hsl(210, 12%, 71%)',
      'very-dark-violet': 'hsl(278, 68%, 11%)',
      'very-light-violet': 'hsl(249, 99%, 64%)',
      'dark-grayish-violet': 'hsl(279, 6%, 55%)',
      'light-grayish-violet': 'hsl(270, 3%, 87%)',
      transparent: 'transparent',
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#181c14',
        secondary: '#3c3d37',
        tertiary: '#697565',
        fourth: '#ecdfcc',
        fifth: '#E8AA42',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        cormorant: ['Cormorant Infant', 'serif'],
        roxale: ['"Roxale Story"', 'serif'],
        'roxale-calligraphy': ['"Roxale Story Calligraphy"', 'serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply font-dmsans text-sm font-normal py-3 px-8 rounded-md transition duration-500 uppercase w-full sm:w-auto':
            {},
        },
        '.btn-white': {
          '@apply btn ring-1 ring-white text-white hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth':
            {},
        },
        '.btn-primary': {
          '@apply btn ring-1 ring-primary text-primary hover:bg-secondary hover:ring-1 hover:ring-fifth hover:text-fifth':
            {},
        },
        '.section-title': {
          '@apply text-2xl sm:text-3xl md:text-3xl font-bold text-tertiary mb-2 font-roxale':
            {},
        },
      });
    },
  ],
};

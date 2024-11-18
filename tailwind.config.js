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
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        cormorant: ['Cormorant Infant', 'serif'],
        roxale: ['"Roxale Story"', 'serif'],
        'roxale-calligraphy': ['"Roxale Story Calligraphy"', 'serif'],
      },
    },
  },
  plugins: [],
};

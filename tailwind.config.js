/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00215E',
        secondary: '#FFF',
        tertiary: '#C3DAFC', 
        quaternary: '#0062F4',
      },
      fontFamily: {
        sans: ['Google Sans', 'sans-serif'],
        bai: ['Bai Jamjuree', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shine: 'shine 3s linear infinite',
      },
      
    },
  },
  plugins: [],
}
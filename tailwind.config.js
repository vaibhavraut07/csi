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
        ethno: ['Ethnocentric', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        productsans: ['"Product Sans Medium"', 'sans-serif'],
        'product-sans-medium': ['Product Sans Medium', 'sans-serif'],
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
      },
      animation: {
        shine: 'shine 5s linear infinite',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInLeft: 'fadeInLeft 1.5s ease-in-out',
        fadeInRight: 'fadeInRight 1.5s ease-in-out',
      },
      screens: {
        'sm-custom':'840px',
        'lg-custom':'1200px'
      },
      scrollBehavior: ['responsive'],
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-3px': {
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: 'white',
        },
        '.text-stroke-4px': {
          WebkitTextStrokeWidth: '4px', // Added for customization
          WebkitTextStrokeColor: 'white',
        },
      });
    },
  ],
}

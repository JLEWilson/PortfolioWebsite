/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        bigSlide: 'text-slide-lg 8s infinite',
        smallSlide: 'text-slide-sm 8s infinite',
      },
      keyframes: {
        'text-slide-lg': {
          '0%': { top: '0' },
          '20%': { top: '-192px' },
          '40%': { top: '-384px' },
          '60%': { top: '-576px' },
          '80%': { top: '-768px' },
          '100%': { top: '-936px' },
        },
        'text-slide-sm': {
          '0%': { top: '0' },
          '20%': { top: '-90px' },
          '40%': { top: '-180px' },
          '60%': { top: '-270px' },
          '80%': { top: '-360px' },
          '100%': { top: '-450px' },
        },
      },
      colors: {
        background: '#001C30',
        primary: '#176B87',
        secondary: '#64CCC5',
        text: '#DAFFFB',
      },
      skew: {
        140: '140deg',
      },
      fontFamily: {
        Roboto: ['Roboto', 'serif'],
        Changa: ['Changa', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  plugins: [require('tailwindcss-3d')({ legacy: true })],
}

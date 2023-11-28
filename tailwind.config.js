/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'moon-gradient':
          'linear-gradient(90deg, #001C30 37%, #64CCC5 49%, ' +
            '#64CCC5 51%, #001C30 63%)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '300%': '300%',
      },
      animation: {
        'bigSlide': 'text-slide-lg 8s infinite',
        'slide': 'text-slide 8s infinite',
        'smallSlide': 'text-slide-sm 8s infinite',
        'moon-md': 'moon 1s',
      },
      keyframes: {
        'moon': {
          '0%': { backgroundPosition: 'right' },
          '100%': { backgroundPosition: 'left' },
        },
        'text-slide-lg': {
          '0%': { top: '0' },
          '20%': { top: '-192px' },
          '40%': { top: '-384px' },
          '60%': { top: '-576px' },
          '80%': { top: '-768px' },
        },
        'text-slide': {
          '0%': { top: '0' },
          '20%': { top: '-90px' },
          '40%': { top: '-180px' },
          '60%': { top: '-270px' },
          '80%': { top: '-360px' },
        },
        'text-slide-sm': {
          '0%': { top: '0' },
          '20%': { top: '-36px' },
          '40%': { top: '-72px' },
          '60%': { top: '-108px' },
          '80%': { top: '-144px' },
        },
        'modal-open': {
          '0%': { top: '10', right: '10' },
          '100%': { top: '0', right: '0' },
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vogue: {
          // Cream/Background
          cream: {
            light: '#FAF7F0',
            DEFAULT: '#F5F1E8',
            dark: '#F0E9DC',
          },
          // Gold/Accent
          gold: {
            light: '#D4A574',
            DEFAULT: '#C4A57B',
            dark: '#B89968',
          },
          // Brown/Text
          brown: {
            lightest: '#8B6F47',
            lighter: '#A0826D',
            light: '#5D4E3C',
            DEFAULT: '#4A3526',
            dark: '#3D2E1F',
            darker: '#2C2116',
          },
        },
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        heading: ['Cormorant Garamond', 'serif'],
        display: ['Shalimar', 'cursive'],
      },
      backgroundImage: {
        'vogue-gradient': 'linear-gradient(135deg, #F5F1E8 0%, #FAF7F0 50%, #F0E9DC 100%)',
        'premium-gradient': 'linear-gradient(90deg, #8B6F47, #A0826D, #C4A57B)',
        'radial-vogue': 'radial-gradient(circle, #C4A57B, transparent)',
      },
      letterSpacing: {
        'widest-xl': '0.2em',
      },
    },
  },
  plugins: [],
}

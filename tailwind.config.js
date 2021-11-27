module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: { 'sm': { 'max' : '640px'} },
      backgroundImage: {
        'background': "url('/img/large-screen-background.jpg')",
        'mobile-background': "url('/img/mobile-background.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

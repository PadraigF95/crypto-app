module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: { 'sm': { 'max' : '640px'} },
      colors: {
        orange: {
          DEFAULT:'#FF5700'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

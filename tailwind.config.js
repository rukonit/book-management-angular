module.exports = {
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: ['./src/**/*.{ts,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
   
    extend: {
      backgroundColor: ['active', 'hover', 'focus'],
      colors: {

        'sky' : '#92EEE6'
      }
    },
  },
  plugins: [],
}

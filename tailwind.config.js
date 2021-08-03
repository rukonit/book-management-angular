module.exports = {
  mode: process.env.TAILWIND_MODE ? 'jit' : '',
  purge: ['./src/**/*.{ts,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
   
    extend: {},
  },
  plugins: [],
}

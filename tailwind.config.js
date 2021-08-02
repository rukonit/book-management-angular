module.exports = {
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        FontFamily: {
          'karla': ["Karla"]
        }
      },
    },
    variants: {
      
      
      extend: {
        padding: ['hover'], 
      border: ['hover'],
      ring: ['hover']
      },
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {       
        'logo': ['Lobster', 'cursive'],
       },
       backgroundImage: theme => ({
        'hero-pattern': "url('/bg.jpg')",        
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

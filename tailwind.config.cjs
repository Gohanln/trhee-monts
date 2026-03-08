module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./img/**/*.{png,jpg,jpeg,svg}"] ,
  theme: {
    extend: {
      colors: {
        rosy: '#FFB6C1',
        mrosa: '#FF77AA',
        sunny: '#FFE066',
        gold: '#FFD43B'
      },
      fontFamily: {
        decorative: ['Dancing Script', 'cursive'],
        sans: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}

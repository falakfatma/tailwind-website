// const tailwindcss = require("tailwindcss");

module.exports = {
  content: ['*'],
  theme: {
    extend: {
      
    },
    
    fontFamily:{
      poppins:["poppins, sans-serif"]
    } ,
    container:{
      center: true,
      padding:'1rem',
      screen:{
      lg:"1124px" ,
      xl:"1124px",
      "2xl": "1124px"
      }
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

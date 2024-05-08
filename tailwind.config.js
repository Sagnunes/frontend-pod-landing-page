/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'375px',
      md:'768px',
      lg:'1440px',
      xl:'1536px'
    },
    extend: {
      fontFamily:{
        "chivo":['Chivo','sans-serif'],
      },
      colors:{
        "grey-bluish":"hsl(225,21%,45%,100%)",
        "greenish":"hsl(157,74%,61%,100%)",
        "dark-blue":"hsl(224,35%,11%,100%)",
        "dark-grey":"hsl(224,26%,23%,100%)",
        "soft-blueish":"hsl(224,40%,83%,100%)",
      }
    },
  },
  plugins: [],
}
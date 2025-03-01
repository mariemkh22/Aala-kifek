/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        primary:"#67193D",
        secondary:"#EEEEEE",
        bg:"#FFEBEB",
      },
      fontFamily:{
        sans:["Inter","sans-serif"],
        serif:["Georgia","serif"],
        petemoss: ["Petemoss", "cursive"],
      },
    },
  },
  plugins: [],
}


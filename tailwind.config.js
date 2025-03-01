// tailwind.config.js

module.exports = {
  content: [
    "./src/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#262d44',  // Adjust to the original primary color
        'secondary-color': '#6c757d', // Adjust accordingly
        'card-color': '#ffffff',      // Adjust accordingly
        'text-color': '#333333',      // Adjust accordingly
        'bio-green': '#28a745',       // Adjust the bio color
        'primary-color-dark': '#1e2a37', // A darker shade for hover effects
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      spacing: {
        'hero-height': '80vh',         // Adjust as per design
      }
    },
  },
  plugins: [],
}

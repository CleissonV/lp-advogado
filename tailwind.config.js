export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#c9a84c', light: '#e8c97a', dark: '#8a6f2e' },
        dark: { DEFAULT: '#0a0505', card: '#150a0a', border: '#2a1a1a' }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}

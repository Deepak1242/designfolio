/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Art Gallery Palette
        'gallery-bg': '#FDFCF8', // Warm off-white paper feel
        'gallery-text': '#1A1A1A', // Soft charcoal
        'accent-purple': '#BFA2DB', // Pastel Purple
        'accent-lime': '#D4E66D', // Acid Lime
        'accent-orange': '#FF8C66', // Burnt Orange
        'accent-pink': '#F48FB1', // Soft Pink
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'], // Funky sans
        serif: ['Playfair Display', 'serif'], // Elegant serif
        display: ['Clash Display', 'sans-serif'], // Bold display
        hand: ['Reenie Beanie', 'cursive'], // Handwritten notes
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Subtle texture
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

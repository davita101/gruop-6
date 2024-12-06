/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "1rem",
      center: true,
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hoverOnLink': {
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-3px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '2px',
            backgroundColor: 'white',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
      });
    },
  ],
}


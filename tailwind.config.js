import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],

  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      variants: {
        height: ['responsive', 'hover', 'focus']
      },
      animation: {
        fadeInUp: 'fadeInDown 0.5s'
      },
      keyframes: () => ({
        fadeInDown: {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },

      }),
      textShadow: {
        md: '0 2px 4px var(--tw-shadow-color)',
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero': "url('/landingPage/harbor.jpg')"
      },
      colors: {
        primary: "#DAA520",
        primaryLigth: "#FFD700",
        secondary: "#C0C0C0"
      }
    }
  },

  plugins: [
    flowbite.plugin()
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E8CFD",
        secondary: "#0A0A0A",
      },
      fontFamily: {
        outfit: [
          "Outfit",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        roboto: [
          "Roboto",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      keyframes: {
        "light-bounce": {
          "0%, 100%": {
            transform: "translateY(-1%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        displace: {
          "0%": {
            transform: "translateX(-40px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(30vw)",
          },
          "100%": {
            transform: "translateX(0vw)",
          },
        },
        "slide-left-slow": {
          "0%": {
            transform: "translateX(10vw)",
          },
          "100%": {
            transform: "translateX(0vw)",
          },
        },
      },
      animation: {
        "light-bounce": "light-bounce 2s linear infinite",
        displace: "displace 1.5s ease-out",
        "slide-left": "slide-left 600ms ease-out",
        "slide-left-slow": "slide-left-slow 1500ms ease-out",
      },
    },
  },
  plugins: [],
};

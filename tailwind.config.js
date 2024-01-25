/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      colors: {
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E73BE",

          secondary: "#2D4B62",

          accent: "#00040f",

          neutral: "#000000",

          "base-100": "#FFFFFF",

          info: "#94171A",

          success: "#00f6ff",

          warning: "#94171A",

          error: "#F87272",
        },
      },
    ],
  },
};

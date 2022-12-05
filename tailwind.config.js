/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./pages/**/*.tsx"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xsm: "375px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        brand: {
          DEFAULT: "#222831",
          text: "#00ADB5",
          "text-light": "#00CAD3",
          gray: "#393e46",
          "gray-light": "#434A55",
        },
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
        Oswald: ["Oswald, sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};

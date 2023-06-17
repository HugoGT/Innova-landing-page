/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        p_green: {
          50: "#f0faf4",
          100: "#dcf5e8",
          200: "#5ab8a0",
        },
      },
      fontFamily: {
        sans: ["Noto Sans", "Noto Sans JP", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100rem)" },
        },
      },
      animation: {
        scroll: "scroll 16s linear infinite",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};

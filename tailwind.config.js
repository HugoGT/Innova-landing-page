/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "Noto Sans JP", "sans-serif"],
    },
    extend: {
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

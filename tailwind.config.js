/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
    },
    content: [
      `./src/pages/**/*.{js,jsx,ts,tsx}`,
      `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
  },
  plugins: [],
};

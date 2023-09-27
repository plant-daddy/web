/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "green-light": "#65CCB7",
      "green-medium": "#327F6B",
      "green-dark": "#124647",
      white: "#F2F2F2",
      "gray-primary": "#D0E1DD",
      "gray-backdrop": "#171923",
      "gray-mid": "#718096",
      red: "#E83F5B",
    },
    extend: {},
  },
  plugins: [],
};

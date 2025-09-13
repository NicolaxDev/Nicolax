/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#9E6EFF",
        darkAccent: "#6E42C8",
        background: "#e0e0e0",
        react: "#61DBFB",
        next: "#000000",
        tailwind: "#06B6D4",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan"],
      },
    },
  },
  plugins: [],
};

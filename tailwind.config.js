/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#4E4D4D",
      },
      spacing: {
        4: "1rem",
        8: "1.5rem",
        16: "2rem",
      },
      borderRadius: {
        sm: "1rem",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.5rem",
        "2xl": "3.75rem",
      },
    },
  },
  plugins: [],
};

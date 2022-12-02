/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "500px",
      md: "768px",
      lg: "1080px",
      xl: "1560px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        sidebar: "var(--color-sidebar)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
};

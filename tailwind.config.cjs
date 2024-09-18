/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ac1e72",
      secondary: "#6a1141",
      customGray: "#F5F5F5",
      light: "#ffffff",
      dark: "#2b2b2b",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};

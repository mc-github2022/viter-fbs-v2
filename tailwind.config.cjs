/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
      colors: {
        primary: "#ac1e72",
        secondary: "#6a1141",
        customGray: "#F5F5F5",
        light: "#ffffff",
        dark: "#2b2b2b",
        disable: "#cf8aac",
        dashPrimary: "rgb(var(--dashPrimary-color) / <alpha-value>)",
        dashSecondary: "rgb(var(--dashSecondary-color) / <alpha-value>)",
        dashAccent: "rgb(var(--dashAccent-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#00D7D4",
      secondary: "#18A0FB",
      customGray: "#F5F5F5",
      light: "#ffffff",
      dark: "#2b2b2b",
      alert: "#af1818",
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
      },
    },
  },
  plugins: [],
};

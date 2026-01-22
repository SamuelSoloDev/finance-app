export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#e11d48",
        "rose-accent": "#fb7185",
        "plum-deep": "#2e1065",
        "plum-mid": "#4c1d95",
        "magenta-accent": "#d946ef",
        "background-light": "#fdf2f8",
        "background-dark": "#0f0714",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

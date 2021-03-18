module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        mini: "150px",
        big: "200px",
        bigger: "250px",
        bigest: "300px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        IndieFlower: ['"Indie Flower"', 'cursive'],
      },
      borderImage: {
        'frosted': 'linear-gradient(135.72deg, rgba(255,255,255,0.27) 8.53%, rgba(255,255,255,0) 60.59%, rgba(255,255,255,0.33) 93.17%) 1'
      }
    }
  },
  plugins: [],
};

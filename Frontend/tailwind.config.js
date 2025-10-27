export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'fv-dark': '#0f2214',     // overall dark green background base
        'fv-darker': '#08140b',
        'fv-accent': '#7bbf4a',   // bright green accent
        'fv-muted': '#93a389'
      },
      boxShadow: {
        'card': '0 8px 30px rgba(0,0,0,0.45)',
        'soft': '0 6px 18px rgba(0,0,0,0.35)',
      },
      borderRadius: {
        'lg-oval': '28px',
      }
    }
  },
  plugins: [],
};

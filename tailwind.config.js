// filepath: c:\Users\ABDUL\OneDrive\Desktop\Portfolio-site\tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        k2d: ['K2D', 'sans-serif'],
        mono1: ['ui-monospace', 'monospace']
      },
      colors: {
        blue1: '#03045E',
        yel: '#FBF8CC',
        darkyel: '#F5EE84',
        darkbrown: '#474306'
      },
      padding: {
        global: '8rem',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        
      }

    },
  },
  plugins: [],
}
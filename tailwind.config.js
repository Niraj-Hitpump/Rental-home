// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  // mainly using it for the typescript
  theme: {
    extend: {
      animation: {
        flash: 'flash 2s infinite',
      },
      keyframes: {
        flash: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
  ],
}

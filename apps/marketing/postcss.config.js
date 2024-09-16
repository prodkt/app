/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    // 'tailwind-css-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config

module.exports = {
  plugins:
    [
      require('postcss-import'),
      require('postcss-cssnext'),
      require('tailwindcss')('./resources/js/tailwind.js'),
    ]
}

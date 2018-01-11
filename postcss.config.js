module.exports = {
  plugins:
    [
      require('postcss-import'),
      require('postcss-cssnext'),
      require('tailwindcss')('./resources/tailwind/js/tailwind.js'),
    ]
}

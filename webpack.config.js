const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './resources/js/main.js',
  output: {
    path: path.resolve(__dirname, "./public/css"),
    publicPath: "/public/css/",
    filename: "styles.css"
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      })
    }, ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
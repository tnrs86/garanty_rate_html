const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');  

const prodConfig = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/main.pug',
      filename: 'index.html',
      minify: false
    })
  ]
}

module.exports = [prodConfig]
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    library: 'siteMechanics'
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    },
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader
      ]
    },
    {
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'sass-loader',
          options: { sourceMap: true }
        }
      ]
    },
    {
      test: /\.(jpg|png|gif|svg)$/,
      include: path.resolve(__dirname, 'pictures'),
      loader: 'url-loader',
      options: {
        esModule: false,
      }
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/main.pug',
      filename: 'index.html',
      minify: false
    })
  ]
}

module.exports = [prodConfig]
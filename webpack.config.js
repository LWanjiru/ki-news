const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [
    './src/index.jsx',
    './public/stylesheets/index.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new ExtractTextPlugin({ filename: 'index.bundle.css', allChunks: true }),
  ],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
};

module.exports = config;

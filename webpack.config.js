const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AppCachePlugin = require('appcache-webpack-plugin');
const env = require('dotenv').config({ silent: process.env.NODE_ENV === 'production' }).parsed;

const envKeys = Object.keys(env).reduce((prev, next) => { prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const PORT = process.env.PORT;
const config = {
  entry: [
    './src/main.js',
    './public/stylesheets/index.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: PORT,
  },
  // Import files without having to include suffix
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: getPath => getPath('index.scss').replace('scss', 'css'),
      allChunks: true,
    }),
    new AppCachePlugin({
      exclude: ['.htaccess'],
    }),
  ],
  module: {
    rules: [
      // Match both .js and .jsx when compiling
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules|bower_components/ },

      // Extract CSS
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1',
        }),
      },

      // Extract SASS/SCSS
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      //
      {
        // Extract images
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=.+)?$/,
        use: ['file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
};

module.exports = config;

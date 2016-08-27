'use strict';

//noinspection JSUnresolvedFunction
var path = require('path');
//noinspection JSUnresolvedFunction
var webpack = require('webpack');
//noinspection JSUnresolvedFunction
var HtmlWebpackPlugin = require('html-webpack-plugin');

// App files location
const PATHS = {
  app: path.resolve(__dirname, '../src/js'),
  styles: path.resolve(__dirname, '../src/styles'),
  build: path.resolve(__dirname, '../build')
};

const sassLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'autoprefixer-loader',
  'sass-loader?outputStyle=expanded'
];

const lessLoaders = [
  'style-loader',
  'css-loader?sourceMap',
  'autoprefixer-loader',
  'less-loader?outputStyle=expanded'
];

module.exports = {
  env : process.env.NODE_ENV,
  entry: {
    hot: 'webpack-hot-middleware/client?reload=true',
    app: path.resolve(PATHS.app, 'main.js'),
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    // We can now require('file') instead of require('file.jsx')
    extensions: ['', '.js', '.jsx', '.scss', '.less']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: sassLoaders.join('!')
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.less$/,
        loader: lessLoaders.join('!')
      },
      {
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.(ttf|eot)$/, loader: 'file'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      inject: 'body',
      filename: 'index.html'
    }),
    // Shared code
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    port: 3000
  },
  devtool: 'eval-source-map'
};

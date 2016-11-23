'use strict';

//noinspection JSUnresolvedFunction
const path = require('path');
//noinspection JSUnresolvedFunction
const webpack = require('webpack');
//noinspection JSUnresolvedFunction
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// App files location
//noinspection JSUnresolvedVariable
const PATHS = {
  app: path.resolve(__dirname, '../'),
  styles: path.resolve(__dirname, '../src'),
  images: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, './build')
};

const sassLoaders = [
  'css-loader?sourceMap',
  'autoprefixer-loader',
  'sass-loader?outputStyle=compressed'
];

const lessLoaders = [
  'css-loader?sourceMap',
  'autoprefixer-loader',
  'less-loader?outputStyle=expanded'
];

//noinspection JSUnresolvedVariable
module.exports = {
  env : process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, './export/main.jsx')
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
    extensions: ['', '.js', '.jsx', '.scss', '.less', '.css']
  },
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel'],
        include: PATHS.app
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', lessLoaders.join('!'))
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
      },
      {
        test: /\.svg$/,
        loaders: ['raw']
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[ext]?[hash]'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=8192&name=fonts/[name].[ext]?[hash]'
      },
      {
        test: /\.(ttf|eot)$/, loader: 'file'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css', { allChunks: true })
  ]
};

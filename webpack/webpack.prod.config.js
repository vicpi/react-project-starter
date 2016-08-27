'use strict';

//noinspection JSUnresolvedFunction
const path = require('path');
//noinspection JSUnresolvedFunction
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//noinspection JSUnresolvedFunction
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// App files location
const PATHS = {
  app: path.resolve(__dirname, '../src/js'),
  styles: path.resolve(__dirname, '../src/styles'),
  images: path.resolve(__dirname, '../src/images'),
  build: path.resolve(__dirname, '../build')
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

module.exports = {
  env : process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'main.js'),
    vendor: ['react']
  },
  output: {
    path: PATHS.build,
    filename: 'js/[name].[chunkhash].js',
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
        test: /\.styl$/,
        loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
      },
      {
        test: /\.css$/,
        include: PATHS.styles,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
      },
      // Inline base64 URLs for <=8k images, direct URLs for the rest
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
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
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../src/production.html'),
    //   inject: 'body',
    //   filename: 'production.html'
    // }),
    new CopyWebpackPlugin([
      {
        from: PATHS.images,
        to: 'images'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/production.html'),
        to: '.'
      }
    ]),
    // Shared code
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/[name].[chunkhash].css', { allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
    }),
    new ManifestPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    port: 3000
  },
  devtool: 'source-map'
};

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var IndexHtmlPlugin = require('indexhtml-webpack-plugin');

var cssExtractPlugin = new ExtractTextPlugin('css/bundle-[contenthash:16].css');

module.exports = {
  debug: true,
  context: path.join(__dirname, 'src'),
  //resolve: {
  //  fallback: path.join(__dirname, 'node_modules')
  //},
  //resolveLoader: {
  //  root: path.join(__dirname, 'node_modules')
  //},
  entry: {
    'index.html': './index.html',
    'js/app.js': './js/app.js'
  },
  module:{
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['jshint']
      },
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: cssExtractPlugin.extract('style', 'css', { publicPath: '../' })
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=.*)?$/i,
        loaders: [ 'url?name=font/[name]-[hash].[ext]&limit=10000' ]
      },
      {
        test: /index\.html$/,
        loader: 'html?attrs=link:href img:src'
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery'
      }
    ]
  },
  plugins: [
    cssExtractPlugin,
    new IndexHtmlPlugin('index.html', 'index.html')
  ],
  output: {
    path: './dist',
    filename: '[name]'
  },

  // more options in the optional jshint object
  jshint: {
    // jshint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // jshint to not interrupt the compilation
    // if you want any file with jshint errors to fail
    // set failOnHint to true
    failOnHint: true
  }
};

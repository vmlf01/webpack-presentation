var path = require('path');
var webpack = require('webpack');

// extract-text is used to extract CSS definitions into separate CSS file
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// indexhtml is used to enable index.html as an entry point
var IndexHtmlPlugin = require('indexhtml-webpack-plugin');

// setup css target file name
var cssExtractPlugin = new ExtractTextPlugin('css/bundle-[contenthash:16].css');

module.exports = {
  // root folder for all reference paths
  context: path.join(__dirname, 'src'),

  // entry points for webpack to analyse
  entry: {
    'index.html': './index.html',
    'js/app.js': './js/app.js'
  },

  // loaders to use to process files
  module:{

    // lint all js files before compilation process starts
    // jshint config bellow will stop webpack if there is
    // any js problems
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['jshint']
      },
    ],
    loaders: [

      // css -> style -> text-extract all CSS files;
      // css loads css file contents and identifies dependencies;
      // style will link the CSS generated bundle into the html file;
      // cssExtractPlugin will generate a CSS bundle file;
      // publicPath option is needed because we are putting the CSS file
      // into a 'css' subfolder.
      {
        test: /\.css$/,
        loader: cssExtractPlugin.extract('style', 'css', { publicPath: '../' })
      },

      // use url loader for font files
      // url will inline font file contents if size is less than 'limit' value
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=.*)?$/i,
        loaders: [ 'url?name=font/[name]-[hash].[ext]&limit=10000' ]
      },

      // use html loader to load index.html and include dependencies
      // from 'link' and 'img' tags
      {
        test: /index\.html$/,
        loader: 'html?attrs=link:href img:src'
      },

      // expose jquery module as 'jQuery' global variable
      // because bootstrap needs it to work
      {
        test: require.resolve('jquery'),
        loader: 'expose?$!expose?jQuery'
      }
    ]
  },

  // register plug-ins
  plugins: [
    cssExtractPlugin,
    new IndexHtmlPlugin('index.html', 'index.html')
  ],

  // set output folder and filename
  output: {
    path: './dist',
    filename: '[name]'
  },

  jshint: {
    // set jshint to interrupt the compilation
    // if any file errors
    failOnHint: true
  }
};

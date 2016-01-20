const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: './source/app.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    library: 'GaAs'
  },

  devtool: '#cheap-module-source-map',

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /node_modules\/handlebars/,
        loaders: ['source-map-loader']
      },
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015']
      },
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=es2015', 'coffee']
      },
      {
        test: /\.handlebars$/,
        exclude: /node_modules/,
        loaders: ['handlebars']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
    ],
  },

  postcss: function () {
    return [autoprefixer];
  },

  resolve: {
    extensions: ['', '.js', '.js.coffee', '.coffee', '.handlebars'],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ]
}

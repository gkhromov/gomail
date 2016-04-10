var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'index.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  plugins: [
    new ExtractTextPlugin("index.css", { allChunks: true })
  ],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css?$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
      //{ test: /\.less$/, loader: 'style!css!less' }
    ]
  }
}

if (typeof(process.env.PRODUCTION) != undefined && process.env.PRODUCTION) {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const node_modules = path.resolve(__dirname, 'node_modules');
const path_react = path.resolve(node_modules, 'react/dist/react.min.js');
const path_react_dom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
  entry: require('./webpack/base/entry.config.js'),
  output: require('./webpack/base/output.config.js'),
  module: require('./webpack/base/module.config.js'),
  resolve: require('./webpack/base/resolve.config.js'),
  plugins: require('./webpack/base/plugins.config.js'),
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 4000,
    host: '0.0.0.0',
  }
}

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
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    // alias: {
    //   'react': path_react,
    //   'react-dom': path_react_dom
    // }
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'app/index.html'},
      {from: 'app/module00/index.html', to: 'module00'},
      {from: 'app/module01/index.html', to: 'module01'},
      {from: 'node_modules/jquery/dist/jquery.min.js', to: 'vendor'},
    ]),
    new ExtractTextPlugin('[name]/main.css'),
    // new webpack.optimize.CommonsChunkPlugin('common/main.js',['main']),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 4000,
    host: '0.0.0.0',
  }
}

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const node_modules = path.resolve(__dirname, 'node_modules');
const path_react = path.resolve(node_modules, 'react/dist/react.min.js');
const path_react_dom = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');
const moduleArray = ['module00','module01'];

let entryConfig = require('./webpack/base/entry.config.js');
let outputConfig = require('./webpack/base/output.config.js');

module.exports = {
  entry: entryConfig,
  output: outputConfig,
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      incluede: [path.resolve(__dirname, 'app')],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react']
      }
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      // loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      loader: 'file-loader?name=assets/fonts/[name].[ext]',
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      // loader: 'url-loader?limit=8192'
      loader: 'url-loader?limit=8192&name=assets/images/[name].[ext]'
    }]
  },
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

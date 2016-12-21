const MODULE_PATH = require('./dir.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let moduleConfig = {
  loaders: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    incluede: [MODULE_PATH.appRoot],
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
};

module.exports = moduleConfig;

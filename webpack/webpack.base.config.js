const PATH = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MODULE_PATH = {};
MODULE_PATH.root = PATH.resolve(__dirname, '../');  //根目录
MODULE_PATH.appRoot = PATH.resolve(MODULE_PATH.root, './app');  //项目根路径
MODULE_PATH.compileRoot = PATH.resolve(MODULE_PATH.root, './dist');  //编译根目录

const moduleArray = ['module00','module01'];
let entryConfig = {};
moduleArray.forEach( module => {
  entryConfig[module] = PATH.resolve(MODULE_PATH.appRoot, module + '/app.jsx')
} );

module.exports = {
  entry: entryConfig,
  output: {
    path: MODULE_PATH.compileRoot,
    filename: '[name]/app.js',
    chunkFilename: '[chunkhash:8].chunk.js',
    // publicPath: '../'  // 文件引用路径
    publicPath: '/'  // 编译
    // publicPath: MODULE_PATH.root + '/'
  },
  module: {
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
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
    // alias: {
    //   'react': path_react,
    //   'react-dom': path_react_dom
    // }
  }
};

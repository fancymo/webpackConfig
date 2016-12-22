const MODULE_PATH = require('./dir.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let pluginConfig = [
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
  ];

module.exports = pluginConfig;

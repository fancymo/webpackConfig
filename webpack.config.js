const webpack = require('webpack');

module.exports = require('./webpack/webpack.develop.config.js');

// module.exports = {
//   entry: require('./webpack/base/entry.config.js'),
//   output: require('./webpack/base/output.config.js'),
//   module: require('./webpack/base/module.config.js'),
//   resolve: require('./webpack/base/resolve.config.js'),
//   plugins: require('./webpack/base/plugins.config.js'),
//   devServer: {
//     contentBase: path.resolve(__dirname, './app'),
//     port: 8080,
//     host: '0.0.0.0',
//     inline: true,
//     historyApiFallback: true,
//     progress: true,
//     // stats: 'minimal'
//   }
// }

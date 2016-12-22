var webpackBaseConfig = require('./webpack.base.config.js');
const path = require('path');

console.log('******'+path.resolve(process.cwd(), 'dist'))
module.exports = Object.assign({}, webpackBaseConfig, {
  devServer: {
    // contentBase: path.resolve(__dirname, './app'),
    contentBase: path.resolve(process.cwd(), 'dist'),
    port: 8080,
    host: '0.0.0.0',
    inline: true,
    historyApiFallback: true,
    progress: true,
    // stats: 'minimal'
  }
});

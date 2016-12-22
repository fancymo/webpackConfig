var webpackBaseConfig = require('./webpack.base.config.js');

webpackBaseConfig.output.publicPath = '../';  // 文件引用路径

module.exports = Object.assign({}, webpackBaseConfig);

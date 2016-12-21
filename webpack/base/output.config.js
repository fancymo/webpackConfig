const MODULE_PATH = require('./dir.config.js');

let outputConfig = {
    path: MODULE_PATH.compileRoot,
    filename: '[name]/app.js',
    chunkFilename: '[chunkhash:8].chunk.js',
    // publicPath: '../'  // 文件引用路径
    publicPath: MODULE_PATH.compileRoot + '/'
  };

module.exports = outputConfig;

const PATH = require('path');

const MODULE_PATH = {};
MODULE_PATH.root = PATH.resolve(__dirname, '../../');  //根目录
MODULE_PATH.appRoot = PATH.resolve(MODULE_PATH.root, './app');  //项目根路径
MODULE_PATH.compileRoot = PATH.resolve(MODULE_PATH.root, './dist');  //编译根目录
module.exports = MODULE_PATH;

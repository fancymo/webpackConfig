const PATH = require('path');
console.log('*****'+process.env.NODE_ENV)
const NODE_ENV = process.env.NODE_ENV.trim() || 'develop';

const envConfigPath = PATH.resolve(__dirname, 'webpack', 'webpack.' + NODE_ENV + '.config.js');

module.exports = require(envConfigPath);

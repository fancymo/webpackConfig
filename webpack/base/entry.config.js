const PATH = require('path');
const MODULE_PATH = require('./dir.config.js');
const moduleArray = ['module00','module01'];

let entryConfig = {};

moduleArray.forEach( module => {
  entryConfig[module] = PATH.resolve(MODULE_PATH.appRoot, module + '/app.jsx')
} );

module.exports = entryConfig;

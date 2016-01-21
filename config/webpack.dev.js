const path = require('path');
var config = require('./webpack.config');

config.output.path = path.resolve(__dirname, '../build');
config.devtool = '#cheap-module-source-map';

module.exports = config;

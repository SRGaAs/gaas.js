const path = require('path');
var config = require('./webpack.config');

config.output.path = path.resolve(__dirname, '../dist');
config.output.filename = 'gaas.min.js';

module.exports = config;

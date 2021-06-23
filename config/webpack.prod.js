/**
 * @title: webpack.prod.js
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: webpack production server configuration
 */
const { merge } = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  target: 'browserslist',
  performance: {
    hints: false
  }
});

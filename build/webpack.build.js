'use strict'
const webpack = require('webpack')
const config = require('./webpack.base.conf')
const utils = require('./utils')
config.entry = {
  'hua-ui':'./src/index.js',
  ...utils.getComponentEntries('packages')
}

config.output = {
  filename: './lib/[name].js',
  library: 'hua-ui',
  libraryTarget: 'umd'
}

config.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': require('../config/prod.env')
  })
]

delete config.devtool

module.exports = config

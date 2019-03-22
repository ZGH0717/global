'use strict'
const webpack = require('webpack')
const config = require('./webpack.base.conf')

config.entry = {
  'global-vue': './src/index.js'
}

config.output = {
  filename: './lib/[name].js',
  library: 'global-vue',
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

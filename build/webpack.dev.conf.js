const webpack = require('webpack') // для вызвова плагина карты сайта вебпака
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf') // вызов базого файла вебпака

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV SETTINGS
    devtool: 'eval-sourcemap'
})

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})
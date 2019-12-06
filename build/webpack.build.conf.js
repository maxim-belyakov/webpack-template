const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf') // вызов базого файла вебпака

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD settings
    // Source map
    // devtool: 'eval-sourcemap'
})

// export buildWebpackConfig
module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})
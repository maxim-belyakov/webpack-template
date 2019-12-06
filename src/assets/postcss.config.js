module.exports = { // npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
  plugins: [
    require('autoprefixer'), // добавляет webkit, ms, o и пр. https://github.com/postcss/autoprefixer
    require('css-mqpacker'), // для media query https://github.com/hail2u/node-css-mqpacker
    require('cssnano')({ // минифицирует наш код https://github.com/hail2u/node-css-mqpacker
      preset: [
        'default', {
          discardComments: {
            removeAll: true // просто удаляет комментарии на проде
          }
        }
      ]
    })
  ]
}

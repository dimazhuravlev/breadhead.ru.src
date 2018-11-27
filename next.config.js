const optimizedImages = require('next-optimized-images')
const withCSS = require('next-css-unpluggable')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, {}],
  [withCSS, { cssModules: true }],
])

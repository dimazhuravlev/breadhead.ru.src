const optimizedImages = require('next-optimized-images')
const withCSS = require('next-css-unpluggable')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, {
    optimizeImagesInDev: true,
  }],
  [withCSS, { cssModules: true }],
])

const optimizedImages = require('next-optimized-images')
const withCSS = require('next-css-unpluggable')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, {
    webp: { quality: 100 },
    mozjpeg: { quality: 100 },
  }],
  [withCSS, {
    cssModules: true,
  }],
])

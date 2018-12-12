module.exports = {
  plugins: [
    require('postcss-preset-env'),
    require('postcss-custom-properties')({ preserve: true }),
    require('autoprefixer'),
    require('postcss-nesting')
  ]
}

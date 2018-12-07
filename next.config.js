const optimizedImages = require('next-optimized-images')
const withCSS = require('next-css-unpluggable')
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [optimizedImages, {
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    webp: { quality: 95 },
    mozjpeg: { quality: 95 },
  }],
  [withCSS, {
    cssModules: true,
  }],
  [withBundleAnalyzer, {
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    }
  }]
])

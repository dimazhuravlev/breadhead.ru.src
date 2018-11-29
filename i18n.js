const i18next = require('i18next')
const i18nextXHRBackend = require('i18next-xhr-backend')
const i18nextBrowserLanguageDetector = require('i18next-browser-languagedetector')

const config = require('./config')

const i18n = i18next.default ? i18next.default : i18next
i18n.nsFromReactTree = []

if (process.browser) { // Clientside i18n setup
  i18n.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector)
} else { // Serverside i18n setup
  const i18nextNodeBackend = require('i18next-node-fs-backend')
  const i18nextMiddleware = require('i18next-express-middleware')
  i18n.use(i18nextNodeBackend).use(i18nextMiddleware.LanguageDetector)
}

if (!i18n.isInitialized) {
  i18n.init(config.translation)
}

module.exports = i18n

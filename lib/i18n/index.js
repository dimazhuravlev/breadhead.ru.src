const NextI18Next = require('uncleseneca-next-i18next').default

const i18Next = new NextI18Next({
  defaultLanguage: 'ru',
  otherLanguages: ['en'],
  localeSubpaths: true
})

module.exports = i18Next

module.exports.preI18nextMiddleware = (req, _, next) => {
  const { config } = i18Next

  if (!req.headers['accept-language']) {
    const langs = [...config.otherLanguages, config.defaultLanguage]

    const lang =
      langs.find(lang => req.path.includes(lang)) || config.defaultLanguage

    req.headers['accept-language'] = lang
  }

  next()
}

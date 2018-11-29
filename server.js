const express = require('express')
const i18nextMiddleware = require('i18next-express-middleware')
const next = require('next')

const config = require('./lib/i18n/config')
const forceTrailingSlash = require('./lib/i18n/utils/forceTrailingSlash')
const i18n = require('./lib/i18n/i18n')
const lngPathDetector = require('./lib/i18n/utils/lngPathDetector')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const { allLanguages, localeSubpaths } = config.translation;

(async () => {
  await app.prepare()
  const server = express()

  server.use(i18nextMiddleware.handle(i18n))

  if (localeSubpaths) {
    server.get('*', forceTrailingSlash)
    server.get(/^\/(?!_next|static).*$/, lngPathDetector)
    server.get(`/:lng(${allLanguages.join('|')})/*`, (req, res) => {
      const { lng } = req.params
      app.render(req, res, req.url.replace(`/${lng}`, ''), { lng })
    })
  }

  server.get('*', (req, res) => handle(req, res))

  await server.listen(config.port)

  // eslint-disable-next-line no-console
  console.log(`> Ready on http://localhost:${config.port}`)
})()

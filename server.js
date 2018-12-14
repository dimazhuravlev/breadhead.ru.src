const express = require('express')
const next = require('next')
const morgan = require('morgan')

const { preI18nextMiddleware } = require('./lib/i18n')
const i18Next = require('./lib/i18n')
const nextI18NextMiddleware = require('next-i18next/middleware')

const app = next({ dev: process.env.NODE_ENV === 'development' })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 4242

const start = async () => {
  await app.prepare()
  const server = express()

  server.use(morgan('combined'))

  server.use(preI18nextMiddleware)
  nextI18NextMiddleware(i18Next, app, server)

  server.get('*', (req, res) => handle(req, res))

  await server.listen(PORT)
  console.log(`> Ready on http://localhost:${PORT}`) // eslint-disable-line no-console
}

start()

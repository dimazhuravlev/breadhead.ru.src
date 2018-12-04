const express = require('express')
const next = require('next')

const { nextI18NextMiddleware } = require('./lib/i18n')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 4242

const start = async () => {
  await app.prepare()
  const server = express()

  nextI18NextMiddleware(app, server)

  server.get('*', (req, res) => handle(req, res))

  await server.listen(PORT)
  console.log(`> Ready on http://localhost:${PORT}`) // eslint-disable-line no-console
}

start()

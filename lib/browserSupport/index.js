const uaParser = require('ua-parser-js')

const browserSupportMiddleware = (req, res, next) => {
  if (req.originalUrl !== '/unsupported') {
    const {
      browser: { name: browserName }
    } = uaParser(req.headers['user-agent'])
    if (browserName === 'IE') {
      res.redirect('/unsupported')
    }
  } else {
    next()
  }
}

module.exports = browserSupportMiddleware

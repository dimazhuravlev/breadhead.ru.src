import uaParser from 'ua-parser-js'

export const browserSupport = (pageProps, req) => {
  const userAgent = req.headers ? req.headers['user-agent'] : ''

  const {
    browser: { name: browserName }
  } = uaParser(userAgent)
  if (browserName === 'IE') {
    return { ...pageProps, unsupported: true }
  }
  return pageProps
}

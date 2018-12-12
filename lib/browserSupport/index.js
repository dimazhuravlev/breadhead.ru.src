import uaParser from 'ua-parser-js'

export const browserSupport = (pageProps, req = { headers: {} }) => {
  const {
    browser: { name: browserName }
  } = uaParser(req.headers['user-agent'])
  if (browserName === 'IE') {
    return { ...pageProps, unsupported: true }
  }
  return pageProps
}

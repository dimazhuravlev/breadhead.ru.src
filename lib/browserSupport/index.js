import uaParser from 'ua-parser-js'

export const browserSupport = (pageProps, ua) => {
  const {
    browser: { name: browserName }
  } = uaParser(ua)
  if (browserName === 'IE') {
    return { ...pageProps, unsupported: true }
  }
  return pageProps
}

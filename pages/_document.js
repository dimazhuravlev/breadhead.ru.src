import Document, { Head, Main, NextScript } from 'next/document'
import { getHTML } from '@site/features/googleAnalytics'
import { getCSS } from '@site/features/fonts'

import i18n from '@site/lib/i18n'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang={i18n.language}>
        <Head>
          
          <link rel="preload" href="/static/fonts/Aeroport-light.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" href="/static/fonts/Graphik-Light-Cy-Web.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
              
          <script
            dangerouslySetInnerHTML={{
              __html: getHTML()
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: getCSS()
            }}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="apple-mobile-web-app-title" content="Breadhead" />
          <meta name="application-name" content="Breadhead" />
          <meta name="msapplication-TileColor" content="#b91d47" />
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#0e0f0f" />
          <meta name="viewport" content="width=device-width, initial=scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

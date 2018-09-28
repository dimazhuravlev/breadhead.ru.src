import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Breadhead – разработка цифровых сервисов</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <meta charSet="utf-8" />
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

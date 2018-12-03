import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { compose } from 'recompose'

import Sprite from '@site/ui/atoms/icons/Sprite'
import { appWithTranslation, withNamespaces } from '@site/lib/i18n'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, t } = this.props

    return (
      <Container>
        <Head>
          <title>{t('title')}</title>
          <meta
            property="twitter:description"
            content={t('title')}
          />
        </Head>
        <Sprite />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default compose(
  appWithTranslation,
  withNamespaces(['common']),
)(MyApp)

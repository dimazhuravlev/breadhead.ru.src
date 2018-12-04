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

          <meta name="title" content={t('title')} />
          <meta name="description" content={t('meta-description')} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://breadhead.ru/" />
          <meta property="og:title" content={t('title')} />
          <meta property="og:description" content={t('meta-description')} />
          <meta
            property="og:image"
            content="https://breadhead.ru/static/img/bh_title.jpg"
          />
          <meta property="og:image:width" content="1080" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content={t('meta-locale')} />
          <meta property="og:site_name" content="breadhead.ru" />
          <meta property="fb:app_id" content="306467899461953" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://breadhead.ru/static/img/bh_title.jpg"
          />
          <meta property="twitter:title" content={t('title')} />
          <meta
            property="twitter:description"
            content={t('meta-description')}
          />
          <meta
            property="twitter:image"
            content="https://breadhead.ru/static/img/bh_title.jpg"
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
  withNamespaces(['common'])
)(MyApp)

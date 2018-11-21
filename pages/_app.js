import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Sprite from '@site/ui/atoms/icons/Sprite'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Breadhead – разработка цифровых сервисов</title>
        </Head>
        <Sprite />
        <Component {...pageProps} />
      </Container>
    )
  }
}

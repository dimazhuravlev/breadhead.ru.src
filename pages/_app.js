import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Router from 'next/router'
import { I18nextProvider } from 'react-i18next'

import Sprite from '@site/ui/atoms/icons/Sprite'

import config from '../config'
import i18n from '../i18n'
import languagePathCorrection from '../lib/lngPathCorrection'

/*
  We need to perform clientside validation of
  subpaths whenever the i18n language changes.
  The href/as arguments for Router.replace are
  critically important to preventing full reloads.

  We don't need to perform any validation on
  regular route changes, as our `Link` component
  will handle that automatically.
*/
if (config.translation.localeSubpaths) {
  i18n.on('languageChanged', lng => {
    if (process.browser) {
      const originalRoute = window.location.pathname
      const [href, as] = languagePathCorrection(originalRoute, lng)
      if (as !== originalRoute) {
        Router.replace(href, as, { shallow: true })
      }
    }
  })
}

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    // Initiate vars to return
    const { req } = ctx
    let initialI18nStore = {}
    let initialLanguage = null

    // Load translations to serialize if we're serverside
    if (req && req.i18n) {
      [initialLanguage] = req.i18n.languages
      await i18n.changeLanguage(initialLanguage)
      req.i18n.languages.forEach(l => {
        initialI18nStore[l] = {}
        i18n.nsFromReactTree.forEach(ns => {
          initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {}
        })
      })
    } else {
      // Load newly-required translations if changing route clientside
      await Promise.all(
        i18n.nsFromReactTree
          .filter(ns => !i18n.hasResourceBundle(i18n.languages[0], ns))
          .map(ns => new Promise(resolve => i18n.loadNamespaces(ns, () => resolve())))
      )
      initialI18nStore = i18n.store.data
      initialLanguage = i18n.language
    }

    // `pageProps` will get serialized automatically by NextJs
    return {
      pageProps: {
        initialI18nStore,
        initialLanguage,
        ...pageProps,
      },
    }
  }

  render() {
    const { Component, pageProps } = this.props

    let { initialLanguage, initialI18nStore } = pageProps

    if (!process.browser) {
      initialLanguage = i18n.language
      initialI18nStore = i18n.store.data
    }

    return (
      <Container>
        <I18nextProvider
          i18n={i18n}
          initialLanguage={initialLanguage}
          initialI18nStore={initialI18nStore}
        >
          <Head>
            <title>Breadhead – разработка цифровых сервисов</title>
          </Head>
          <Sprite />
          <Component {...pageProps} />
        </I18nextProvider>
      </Container>
    )
  }
}

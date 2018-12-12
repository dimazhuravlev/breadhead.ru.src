import React from 'react'
import ExternalLink from '@site/ui/molecules/ExternalLink'
import { withNamespaces } from '@site/lib/i18n'
import styles from './Hero.css'

const Hero = ({ t }) => {
  return (
    <section className={styles.Hero}>
      {t('support-title1')}{' '}
      <ExternalLink href="https://www.google.com/chrome/">Chrome</ExternalLink>,{' '}
      <ExternalLink href="https://www.mozilla.org/en-US/firefox/new/">
        Firefox
      </ExternalLink>{' '}
      {t('support-title2')}{' '}
      <ExternalLink href="https://www.opera.com/">Opera</ExternalLink>
    </section>
  )
}

export default withNamespaces(['common'])(Hero)

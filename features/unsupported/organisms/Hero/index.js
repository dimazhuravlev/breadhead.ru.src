import React from 'react'
import ExternalLink from '@site/ui/molecules/ExternalLink'
import styles from './Hero.css'

const Hero = () => {
  return (
    <section className={styles.Hero}>
      Наш сайт работает в современных браузерах{' '}
      <ExternalLink href="https://www.google.com/chrome/">Chrome</ExternalLink>,{' '}
      <ExternalLink href="https://www.mozilla.org/en-US/firefox/new/">
        Firefox
      </ExternalLink>{' '}
      или <ExternalLink href="https://www.opera.com/">Opera</ExternalLink>
    </section>
  )
}

export default Hero

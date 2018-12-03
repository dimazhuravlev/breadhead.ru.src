import React from 'react'
import withScrollOnClick from '@site/features/withScrollOnClick'
import NavLink from './atoms/navigationLink'
import styles from './navigation.css'
import withNamespaces from '@site/lib/i18n/utils/withNamespaces'

const ScrollLink = withScrollOnClick(NavLink)

const Navigation = ({ t }) => (
  <nav>
    <ul className={styles.navigation}>
      <li>
        <ScrollLink targetscroll="cases">{t('experience-nav')}</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="clients">{t('about-nav')}</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="howWeWork">{t('how-we-work-nav')}</ScrollLink>
      </li>
    </ul>
  </nav>
)

export default withNamespaces(['common'])(Navigation)

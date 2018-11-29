import React from 'react'
import withScrollOnClick from '@site/features/withScrollOnClick'
import NavLink from './atoms/navigationLink'
import styles from './navigation.css'
import withNamespaces from '@site/lib/withNamespaces'

const ScrollLink = withScrollOnClick(NavLink)

const Navigation = ({ t }) => (
  <nav>
    <ul className={styles.navigation}>
      <li>
        <ScrollLink targetscroll="cases">{t('experience')}</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="clients">студия</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="howWeWork">как мы работаем</ScrollLink>
      </li>
    </ul>
  </nav>
)

export default withNamespaces(['common'])(Navigation)

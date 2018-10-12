import React from 'react'
import withScrollOnClick from '@site/features/withScrollOnClick'
import NavLink from './atoms/navigationLink'
import styles from './navigation.css'

const ScrollLink = withScrollOnClick(NavLink)

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navWrapper}>
      <li>
        <ScrollLink linkId="cases">опыт</ScrollLink>
      </li>
      <li>
        <ScrollLink linkId="about">студия</ScrollLink>
      </li>
      <li>
        <ScrollLink linkId="howWeWork">как мы работаем</ScrollLink>
      </li>
    </ul>
  </nav>
)

export default Navigation

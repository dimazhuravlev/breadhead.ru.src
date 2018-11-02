import React from 'react'
import withScrollOnClick from '@site/features/withScrollOnClick'
import NavLink from './atoms/navigationLink'
import styles from './navigation.css'

const ScrollLink = withScrollOnClick(NavLink)

const Navigation = () => (
  <nav>
    <ul className={styles.navigation}>
      <li>
        <ScrollLink targetscroll="cases">опыт</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="about">студия</ScrollLink>
      </li>
      <li>
        <ScrollLink targetscroll="howWeWork">как мы работаем</ScrollLink>
      </li>
    </ul>
  </nav>
)

export default Navigation

import React from 'react'
import withScroll from '@site/features/withScroll'
import NavLink from './atoms/navigationLink'
import styles from './navigation.css'

const WithScrollNavLink = withScroll(NavLink)

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navWrapper}>
      <li>
        <WithScrollNavLink linkId="cases">опыт</WithScrollNavLink>
      </li>
      <li>
        <WithScrollNavLink linkId="about">студия</WithScrollNavLink>
      </li>
      <li>
        <WithScrollNavLink linkId="howWeWork">
          как мы работаем
        </WithScrollNavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation

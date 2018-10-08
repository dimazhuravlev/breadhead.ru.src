import React from 'react'

import NavLink from './atoms/navigationLink'
import styles from './navigation.css'

const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navWrapper}>
      <li>
        <NavLink linkId="cases">опыт</NavLink>
      </li>
      <li>
        <NavLink linkId="about">студия</NavLink>
      </li>
      <li>
        <NavLink linkId="howWeWork">как мы работаем</NavLink>
      </li>
    </ul>
  </nav>
)

export default Navigation

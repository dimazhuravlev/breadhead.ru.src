import React from 'react'

import NavLink from './atoms/navigationLink'
import styles from './navigation.css'

const Navigation = () => (
  <nav className={styles.NavWrapper}>
    <div>
      <NavLink>опыт</NavLink>
    </div>
    <div>
      <NavLink>студия</NavLink>
    </div>
    <div>
      <NavLink>как мы работаем</NavLink>
    </div>
  </nav>
)

export default Navigation

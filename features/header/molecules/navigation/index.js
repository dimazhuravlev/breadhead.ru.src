import React from 'react'

import NavLink from './atoms/navigationLink'
import * as styles from './navigation.css'

const Navigation = () => {
  return (
    <div className={styles.NavWrapper}>
      <div>
        <NavLink>опыт</NavLink>
      </div>
      <div>
        <NavLink>студия</NavLink>
      </div>
      <div>
        <NavLink>как мы работаем</NavLink>
      </div>
    </div>
  )
}

export default Navigation

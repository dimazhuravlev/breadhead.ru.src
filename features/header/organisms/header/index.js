import React from 'react'

import Logo from '../../atoms/logo'
import Navigation from '../../molecules/navigation'
import * as styles from './header.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header

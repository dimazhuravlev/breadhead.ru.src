import React from 'react'

import Logo from '../../atoms/logo'
import Navigation from '../../molecules/navigation'
import Button from '@site/ui/atoms/Button'
import * as styles from './header.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderWrapper}>
        <Logo />
        <Navigation />
      </div>
      <Button />
    </div>
  )
}

export default Header

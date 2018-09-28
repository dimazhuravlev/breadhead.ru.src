import React from 'react'

import { BreadHeadLogo } from '@site/ui/molecules/Icons'
import Navigation from '../../molecules/navigation'
import styles from './header.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <BreadHeadLogo />
      <Navigation />
    </div>
  )
}

export default Header

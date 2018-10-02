import React from 'react'

import { BreadHeadLogo } from '@site/ui/atoms/icons'
import Navigation from '../../molecules/navigation'
import styles from './header.css'

const Header = () => (
  <header className={styles.Header}>
    <BreadHeadLogo />
    <Navigation />
  </header>
)

export default Header

import React from 'react'

import { BreadheadLogo } from '@site/ui/atoms/icons'
import Navigation from '../../molecules/navigation'
import styles from './header.css'

const Header = () => (
  <header className={styles.Header}>
    <BreadheadLogo />
    <Navigation />
  </header>
)

export default Header

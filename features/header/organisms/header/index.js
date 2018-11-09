import React from 'react'

import { BreadheadLogo } from '@site/ui/atoms/icons'
import Navigation from '../../molecules/navigation'
import ButtonEng from '../../molecules/ButtonEng'
import styles from './header.css'

const Header = props => (
  <header className={styles.header} {...props}>
    <BreadheadLogo />
    <div className={styles.navigation}>
      <Navigation />
      <ButtonEng />
    </div>
  </header>
)

export default Header

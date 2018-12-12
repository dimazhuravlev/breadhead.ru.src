import React from 'react'

import { BreadheadLogo } from '@site/ui/atoms/icons'
import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <BreadheadLogo />
  </header>
)

export default Header

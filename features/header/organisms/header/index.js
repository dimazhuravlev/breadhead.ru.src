import React from 'react'

import { BreadheadLogo } from '@site/ui/atoms/icons'
import Navigation from '../../molecules/navigation'
import ButtonEng from '../../molecules/ButtonEng'
import styles from './header.css'

const Header = ({ toggleLang, lang }) => (
  <header className={styles.header}>
    <BreadheadLogo />
    <div className={styles.navigation}>
      <Navigation />
      <ButtonEng lang={lang} toggleLang={toggleLang} />
    </div>
  </header>
)

export default Header

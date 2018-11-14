import React from 'react'
import { Spring } from 'react-spring'

import { BreadheadLogo } from '@site/ui/atoms/icons'
import Navigation from '../../molecules/navigation'
import ButtonEng from '../../molecules/ButtonEng'
import styles from './header.css'

const Header = () => (
  <Spring
    from={{ opacity: 0, transform: 'translateY(-20px)' }}
    to={{ opacity: 1, transform: 'translateY(0px)' }}
    config={{ tension: 280, friction: 80 }}
  >
    {props => (
      <header style={props} className={styles.header}>
        <BreadheadLogo />
        <div className={styles.navigation}>
          <Navigation />
          <ButtonEng />
        </div>
      </header>
    )}
  </Spring>
)

export default Header

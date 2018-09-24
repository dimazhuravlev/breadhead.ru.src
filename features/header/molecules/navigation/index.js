import React from 'react'
import NavigationLink from './atoms/navigationLink'
import * as styles from './navigation.css'

const Navigation = () => {
  return (
    <div className={styles.NavigationWrapper}>
      <div>
        <NavigationLink link="опыт" />
      </div>
      <div>
        <NavigationLink link="студия" />
      </div>
      <div>
        <NavigationLink link="как мы работаем" />
      </div>
    </div>
  )
}

export default Navigation

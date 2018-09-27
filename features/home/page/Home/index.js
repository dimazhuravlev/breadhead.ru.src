import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Intro />
    </div>
  )
}

export default Home

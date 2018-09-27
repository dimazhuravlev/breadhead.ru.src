import React from 'react'

import Header from '@site/features/header'
import Headline from '@site/features/headline'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Headline />
    </div>
  )
}

export default Home

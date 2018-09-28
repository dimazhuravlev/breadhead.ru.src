import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Button from '@site/ui/atoms/Button'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Intro />
      <Case />
      <Case />
      <Case />
      <Button value="ещё" />
    </div>
  )
}

export default Home

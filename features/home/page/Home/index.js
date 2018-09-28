import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Button from '@site/ui/molecules/Button'
import { PlusIcon } from '@site/ui/atoms/icons'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Intro />
      <Case />
      <Case />
      <Case />
      <Button className={styles.plusButton} icon={<PlusIcon />}>
        ещё
      </Button>
    </div>
  )
}

export default Home

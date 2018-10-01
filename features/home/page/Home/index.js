import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
import Button from '@site/ui/molecules/Button'
import { PlusIcon } from '@site/ui/atoms/icons'
import styles from './home.css'

const Home = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <Intro />
      <Case
        casetype="проект"
        casename="Faster. Новый опыт покупки лекарств"
        icontype="globe"
        href="https://faster.ru/"
        // tooltip="Faster.ru"
        // text="ссылка на сайт"
      />

      <Case
        casetype="подборка"
        casename="E-learning сервисы"
        icontype="article"
        href="https://medium.com/breadhead-stories"
        // tooltip="Faster.ru"
        // text="ссылка на сайт"
      />

      <Case
        casetype="проект"
        casename="Yami Yami. Красивая доставка еды"
        icontype="globe"
        href="https://yamiyami.ru/"
        // tooltip="Faster.ru"
        // text="ссылка на сайт"
      />

      <Button className={styles.plusButton} icon={<PlusIcon />}>
        ещё
      </Button>
      <Clients />
    </div>
  )
}

export default Home

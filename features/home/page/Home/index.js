import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
import About from '@site/features/about'
import Button from '@site/ui/molecules/Button'
import Footer from '@site/features/footer'
import { PlusIcon } from '@site/ui/atoms/icons'
import styles from './home.css'

const Home = () => (
  <main>
    <Header />
    <Intro />
    <section className={styles.cases} id="cases">
      <Case
        type="проект"
        name="Faster. Новый опыт покупки лекарств"
        icontype="globe"
        href="https://faster.ru"
      />

      <Case
        type="подборка"
        name="E-learning сервисы"
        icontype="article"
        href="https://medium.com/breadhead-stories"
      />

      <Case
        type="проект"
        name="Yami Yami. Красивая доставка еды"
        icontype="globe"
        href="https://yamiyami.ru"
      />
    </section>

    <Button className={styles.plusButton} icon={<PlusIcon />}>
      ещё
    </Button>
    <Clients />
    <About id="about" />
    <Case
      id="howWeWork"
      className={styles.howWeWork}
      type="вики"
      name="Как мы работаем"
      icontype="globe"
      href="https://medium.com/"
    />
    <Footer />
  </main>
)

export default Home

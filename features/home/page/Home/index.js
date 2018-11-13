import React from 'react'
import { Spring } from 'react-spring'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
import About from '@site/features/about'
import Footer from '@site/features/footer'
import Cases from '@site/features/home/molecules/Cases'
import { aboutDataDesktop } from '@site/data/aboutDataDesktop'
import { aboutDataMobile } from '@site/data/aboutDataMobile'
import { howWeWorkDataDesktop } from '@site/data/howWeWorkDataDesktop'
import { howWeWorkDataMobile } from '@site/data/howWeWorkDataMobile'
import styles from './home.css'
import cx from 'classnames'

const Home = () => (
  <main>
    <Spring
      from={{ opacity: 0, transform: 'translateY(-20px)' }}
      to={{ opacity: 1, transform: 'translateY(0px)' }}
      config={{ tension: 280, friction: 120 }}
    >
      {props => <Header style={props} />}
    </Spring>

    <Spring
      // delay="250"
      from={{ opacity: 0, transform: 'translateY(20px)' }}
      to={{ opacity: 1, transform: 'translateY(0px)' }}
      config={{ tension: 280, friction: 120 }}
    >
      {props => <Intro style={props} />}
    </Spring>

    <Cases />
    <Clients />
    <About
      name="about"
      aboutDataDesktop={aboutDataDesktop}
      aboutDataMobile={aboutDataMobile}
    />
    <Case
      name="howWeWork"
      className={cx(styles.howWeWork, styles.howWeWorkDesktop)}
      {...howWeWorkDataDesktop}
    />
    <Case
      name="howWeWork"
      className={cx(styles.howWeWork, styles.howWeWorkMobile)}
      {...howWeWorkDataMobile}
    />
    <Footer />
  </main>
)

export default Home

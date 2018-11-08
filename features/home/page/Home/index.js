import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
import About from '@site/features/about'
import Button from '@site/ui/molecules/Button'
import Footer from '@site/features/footer'
import { PlusIcon } from '@site/ui/atoms/icons'
import { casesDataDesktop } from '@site/data/casesDataDesktop'
import { casesDataMobile } from '@site/data/casesDataMobile'
import { aboutDataDesktop } from '@site/data/aboutDataDesktop'
import { aboutDataMobile } from '@site/data/aboutDataMobile'
import { howWeWorkDataDesktop } from '@site/data/howWeWorkDataDesktop'
import { howWeWorkDataMobile } from '@site/data/howWeWorkDataMobile'
import styles from './home.css'
import cx from 'classnames'

const Home = () => (
  <main>
    <Header />
    <Intro />
    <section className={cx(styles.cases, styles.desktopCases)} name="cases">
      {casesDataDesktop.map(caseData => (
        <Case key={caseData.description.name} {...caseData} />
      ))}
    </section>
    <section className={cx(styles.cases, styles.mobileCases)} name="cases">
      {casesDataMobile.map(caseData => (
        <Case key={caseData.description.name} {...caseData} />
      ))}
    </section>

    <Button className={styles.plusButton} icon={<PlusIcon />}>
      ещё
    </Button>
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

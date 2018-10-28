import React from 'react'

import Header from '@site/features/header'
import Intro from '@site/features/intro'
import Case from '@site/features/case'
import Clients from '@site/features/clients'
// import About from '@site/features/about'
import Button from '@site/ui/molecules/Button'
import Footer from '@site/features/footer'
import { PlusIcon } from '@site/ui/atoms/icons'
import { casesData } from '@site/data/casesData'
// import { aboutData } from '@site/data/aboutData'
// import { howWeWorkData } from '@site/data/howWeWorkData'
import styles from './home.css'

const Home = () => (
  <main>
    <Header />
    <Intro />
    <section className={styles.cases} id="cases">
      {casesData.map(caseData => (
        <Case key={caseData.description.name} {...caseData} />
      ))}
    </section>

    <Button className={styles.plusButton} icon={<PlusIcon />}>
      ещё
    </Button>
    <Clients />
    {/* <About id="about" {...aboutData} /> */}
    {/* <Case id="howWeWork" className={styles.howWeWork} {...howWeWorkData} /> */}
    <Footer />
  </main>
)

export default Home

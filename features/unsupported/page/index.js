import React from 'react'
import styles from './Unsupported.css'
import Header from '../organisms/Header'
import Hero from '../organisms/Hero'
import Footer from '../organisms/Footer'

const Page = () => {
  return (
    <div className={styles.Unsupported}>
      <div className={styles.HeaderWrapper}>
        <Header />
      </div>
      <main className={styles.Main}>
        <Hero />
      </main>
      <div className={styles.FooterWrapper}>
        <Footer />
      </div>
    </div>
  )
}

export default Page

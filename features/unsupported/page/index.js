import React from 'react'
import styles from './Unsupported.css'
import Header from '../organisms/Header'
import Hero from '../organisms/Hero'
import Footer from '../organisms/Footer'

const Page = () => {
  return (
    <div className={styles.Unsupported}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default Page

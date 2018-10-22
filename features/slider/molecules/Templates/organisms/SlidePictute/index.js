import React from 'react'
import styles from './slidePicture.css'

const SlidePicture = ({ srcDesktop, srcMobile }) => (
  <picture className={styles.picture}>
    <source
      srcSet={srcMobile}
      media="(max-width: 600px)"
      className={styles.picture}
    />
    <img src={srcDesktop} className={styles.picture} />
  </picture>
)

export default SlidePicture

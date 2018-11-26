import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ image: { src, preloader } }) => {
  return <Img src={src} className={styles.picture} preloader={preloader} />
}

export default neverUpdate(SlidePictureDesktop)

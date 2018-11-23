import React from 'react'
import { shouldUpdate } from 'recompose'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ image: { src, preloader } }) => {
  return <Img src={src} className={styles.picture} preloader={preloader} />
}

export default shouldUpdate(() => false)(SlidePictureDesktop)

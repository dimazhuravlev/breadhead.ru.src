import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ image: { src, preloader } }) => (
  <Img src={src} className={styles.picture} preloader={preloader} />
)

export default neverUpdate(SlidePictureMobile)

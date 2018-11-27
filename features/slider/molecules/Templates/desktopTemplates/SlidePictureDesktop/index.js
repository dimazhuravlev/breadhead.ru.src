import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ image: { src, preloader } }) => {
  return <PreloadableImage src={src} className={styles.picture} preloader={preloader} />
}

export default neverUpdate(SlidePictureDesktop)

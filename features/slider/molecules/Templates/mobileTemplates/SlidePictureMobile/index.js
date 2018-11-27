import React from 'react'
import { neverUpdate } from '@site/lib/shouldUpdate'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ image: { src, preloader } }) => (
  <PreloadableImage
    src={src}
    className={styles.picture}
    preloader={preloader}
  />
)

export default neverUpdate(SlidePictureMobile)

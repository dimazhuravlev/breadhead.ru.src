import React from 'react'
import { compose, onlyUpdateForKeys } from 'recompose'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ image: { src, preloader }, preload }) => (
  <PreloadableImage
    preload={preload}
    src={src}
    className={styles.picture}
    preloader={preloader}
  />
)

const hoc = compose(onlyUpdateForKeys(['preload']))

export default hoc(SlidePictureMobile)

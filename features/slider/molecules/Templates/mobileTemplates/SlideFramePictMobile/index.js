import React from 'react'
import { compose, onlyUpdateForKeys } from 'recompose'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({
  image: { src, preloader },
  backgroundColor,
  preload
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <PreloadableImage
        preload={preload}
        src={src}
        className={styles.screen}
        preloader={preloader}
      />
    </div>
  </div>
)

const hoc = compose(onlyUpdateForKeys(['preload']))

export default hoc(SlideFramePictMobile)

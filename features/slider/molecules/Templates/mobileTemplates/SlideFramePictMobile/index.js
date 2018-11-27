import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({
  image: { src, preloader },
  backgroundColor,
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <PreloadableImage src={src} className={styles.screen} preloader={preloader} />
    </div>
  </div>
)

export default neverUpdate(SlideFramePictMobile)

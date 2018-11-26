import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import Img from '@site/ui/molecules/Img'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({
  image: { src, preloader },
  backgroundColor,
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <Img src={src} className={styles.screen} preloader={preloader} />
    </div>
  </div>
)

export default neverUpdate(SlideFramePictMobile)

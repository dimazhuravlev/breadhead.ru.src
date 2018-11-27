import React from 'react'
import { neverUpdate } from '@site/lib/shouldUpdate'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import Image from '@site/ui/atoms/Image'
import styles from './slideFramePictDesktop.css'

const SlideFramePictDesktop = ({
  image: { src, preloader },
  backgroundColor,
  backgroundSrc,
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
      <div className={styles.browser}>
        <div className={styles.header}>
          <Image className={styles.dots} src="dots.png" />
        </div>
        <PreloadableImage
          src={src}
          className={styles.screen}
          preloader={preloader}
        />
      </div>
      {backgroundSrc && (
        <Image src={backgroundSrc} className={styles.background} />
      )}
    </div>
  )
}

export default neverUpdate(SlideFramePictDesktop)

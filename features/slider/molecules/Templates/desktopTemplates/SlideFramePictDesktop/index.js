import React from 'react'
import { compose, onlyUpdateForKeys } from 'recompose'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
import Image from '@site/ui/atoms/Image'
import styles from './slideFramePictDesktop.css'

const SlideFramePictDesktop = ({
  image: { src, preloader },
  backgroundColor,
  backgroundSrc,
  preload
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
      <div className={styles.browser}>
        <div className={styles.header}>
          <Image className={styles.dots} src="dots.png" />
        </div>
        <PreloadableImage
          preload={preload}
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

const hoc = compose(onlyUpdateForKeys(['preload']))

export default hoc(SlideFramePictDesktop)

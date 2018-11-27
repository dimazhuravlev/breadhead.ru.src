import React from 'react'
import neverUpdate from '@site/lib/neverUpdate'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'
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
          <img className={styles.dots} src="/static/img/dots.png" />
        </div>
        <PreloadableImage src={src} className={styles.screen} preloader={preloader} />
      </div>
      {backgroundSrc && (
        <img src={backgroundSrc} className={styles.background} />
      )}
    </div>
  )
}

export default neverUpdate(SlideFramePictDesktop)

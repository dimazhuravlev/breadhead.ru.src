import React from 'react'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import Image from '@site/ui/atoms/Image'
import styles from './slidePhonesDesktop.css'
import PreloadableImage from '@site/ui/molecules/PreloadableImage'

const SlidePhonesDesktop = ({
  screens,
  backgroundColor,
  backgroundSrc,
  active,
  visible,
  preload
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
      <div className={styles.phones}>
        {screens.map((screen, i) => (
          <div key={i} className={styles.phone}>
            {screen.type === 'img' ? (
              <PreloadableImage
                src={screen.src}
                preload={preload}
                className={styles.screen}
                preloader={screen.preloader}
              />
            ) : (
              <VideoPlayer
                preload={preload}
                visible={visible}
                active={active}
                src={screen.src}
                preloader={screen.preloader}
                className={styles.screen}
                width="220"
                height="410"
              />
            )}
          </div>
        ))}
      </div>
      {backgroundSrc && (
        <Image src={backgroundSrc} className={styles.background} />
      )}
    </div>
  )
}

export default onlyUpdateForKeys(['active', 'visible', 'preload'])(
  SlidePhonesDesktop
)

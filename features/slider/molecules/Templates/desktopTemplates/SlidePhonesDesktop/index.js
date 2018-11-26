import React from 'react'
import { onlyUpdateForKeys } from 'recompose'
import neverUpdate from '@site/lib/neverUpdate'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slidePhonesDesktop.css'

const SlidePhonesDesktop = ({
  screens,
  backgroundColor,
  backgroundSrc,
  active
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
      <div className={styles.phones}>
        {screens.map((screen, i) => (
          <div key={i} className={styles.phone}>
            {screen.type === 'img' ? (
              <img src={screen.src} className={styles.screen} />
            ) : (
              <VideoPlayer
                active={active}
                src={screen.src}
                className={styles.screen}
                width="220"
                height="410"
              />
            )}
          </div>
        ))}
      </div>
      {backgroundSrc && (
        <img src={backgroundSrc} className={styles.background} />
      )}
    </div>
  )
}

export default onlyUpdateForKeys(['active'])(SlidePhonesDesktop)

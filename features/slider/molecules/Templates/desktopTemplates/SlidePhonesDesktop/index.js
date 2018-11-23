import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slidePhonesDesktop.css'

const SlidePhonesDesktop = ({
  screens,
  backgroundColor,
  backgroundSrc,
  active
}) => (
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
    {backgroundSrc && <img src={backgroundSrc} className={styles.background} />}
  </div>
)

SlidePhonesDesktop.propTypes = {
  screens: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  backgroundSrc: PropTypes.string
}

export default React.memo(SlidePhonesDesktop)

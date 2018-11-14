import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slidePhonesVideoDesktop.css'

const SlidePhonesVideoDesktop = ({
  srcLeft,
  srcCenter,
  srcRight,
  backgroundColor
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phones}>
      <div className={styles.phone}>
        <VideoPlayer
          src={srcLeft}
          className={styles.screen}
          width="220"
          height="410"
        />
      </div>

      <div className={styles.phone}>
        <VideoPlayer
          src={srcCenter}
          className={styles.screen}
          width="220"
          height="410"
        />
      </div>

      <div className={styles.phone}>
        <VideoPlayer
          src={srcRight}
          className={styles.screen}
          width="220"
          height="410"
        />
      </div>
    </div>
  </div>
)

SlidePhonesVideoDesktop.propTypes = {
  srcLeft: PropTypes.string.isRequired,
  srcCenter: PropTypes.string.isRequired,
  srcRight: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

export default SlidePhonesVideoDesktop

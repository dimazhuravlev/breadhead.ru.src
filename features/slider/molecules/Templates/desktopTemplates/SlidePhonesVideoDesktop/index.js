import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './slidePhonesVideoDesktop.css'

const SlidePhonesVideoDesktop = ({ srcLeft, srcCenter, srcRight }) => (
  <div className={styles.slide}>
    <div className={styles.phones}>
      <div className={styles.phone}>
        <ReactPlayer
          url={srcLeft}
          className={styles.screen}
          height="412"
          width="230"
          playsinline={true}
          autoPlay={true}
          loop={true}
          playing={true}
          muted={true}
        />
      </div>

      <div className={styles.phone}>
        <ReactPlayer
          url={srcCenter}
          className={styles.screen}
          height="410"
          width="220"
          playsinline={true}
          autoPlay={true}
          loop={true}
          playing={true}
          muted={true}
        />
      </div>

      <div className={styles.phone}>
        <ReactPlayer
          url={srcRight}
          className={styles.screen}
          height="410"
          width="220"
          playsinline={true}
          autoPlay={true}
          loop={true}
          playing={true}
          muted={true}
        />
      </div>
    </div>
  </div>
)

SlidePhonesVideoDesktop.propTypes = {
  srcLeft: PropTypes.string.isRequired,
  srcCenter: PropTypes.string.isRequired,
  srcRight: PropTypes.string.isRequired
}

export default SlidePhonesVideoDesktop

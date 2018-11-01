import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = data => (
  <div className={styles.slide}>
    <div className={styles.phone}>
      <ReactPlayer
        url={data.src}
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
)

SlideFrameVideoMobile.propTypes = {
  data: PropTypes.object
}

export default SlideFrameVideoMobile

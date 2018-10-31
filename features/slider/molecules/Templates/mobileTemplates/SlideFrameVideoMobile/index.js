import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = srcMobile => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <ReactPlayer
        className={styles.screen}
        url={srcMobile}
        playsinline="true"
        autoplay="true"
        height="410"
        width="220"
        loop="true"
        playing="true"
        muted="true"
      />
    </div>
  </div>
)

SlideFrameVideoMobile.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlideFrameVideoMobile

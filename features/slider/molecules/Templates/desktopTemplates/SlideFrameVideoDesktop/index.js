import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './slideFrameVideoDesktop.css'

const SlideFrameVideoDesktop = srcDesktop => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <ReactPlayer
        className={styles.screen}
        url={srcDesktop}
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

SlideFrameVideoDesktop.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlideFrameVideoDesktop

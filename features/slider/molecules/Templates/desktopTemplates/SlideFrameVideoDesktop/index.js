import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoDesktop.css'

const SlideFrameVideoDesktop = ({ src, backgroundColor }) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <VideoPlayer src={src} width="100%" height="auto" />
    </div>
  </div>
)

SlideFrameVideoDesktop.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

export default SlideFrameVideoDesktop

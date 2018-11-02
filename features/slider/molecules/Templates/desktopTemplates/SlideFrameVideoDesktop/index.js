import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoDesktop.css'

const SlideFrameVideoDesktop = ({ src }) => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <VideoPlayer src={src} />
    </div>
  </div>
)

SlideFrameVideoDesktop.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideFrameVideoDesktop

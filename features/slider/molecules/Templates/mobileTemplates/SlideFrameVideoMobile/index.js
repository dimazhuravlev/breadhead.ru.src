import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = ({ src }) => (
  <div className={styles.slide}>
    <div className={styles.phone}>
      <VideoPlayer src={src} width="220" height="410" />
    </div>
  </div>
)

SlideFrameVideoMobile.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideFrameVideoMobile

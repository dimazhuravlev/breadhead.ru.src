import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = ({ src, backgroundColor, active }) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <VideoPlayer
        active={active}
        className={styles.video}
        src={src}
        width="220"
        height="410"
      />
    </div>
  </div>
)

SlideFrameVideoMobile.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
}

export default React.memo(SlideFrameVideoMobile)

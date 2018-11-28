import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = ({
  image: { src, preloader },
  backgroundColor,
  active,
  visible,
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <VideoPlayer
        visible={visible}
        active={active}
        className={styles.video}
        src={src}
        preloader={preloader}
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

export default onlyUpdateForKeys(['active', 'visible'])(SlideFrameVideoMobile)

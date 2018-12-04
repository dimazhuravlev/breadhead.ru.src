import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoMobile.css'

const SlideFrameVideoMobile = ({
  image: { src, preloader },
  backgroundColor,
  active,
  visible,
  preload
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <VideoPlayer
        preload={preload}
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
  src: PropTypes.string,
  backgroundColor: PropTypes.string
}

const hoc = compose(onlyUpdateForKeys(['active', 'visible', 'preload']))

export default hoc(SlideFrameVideoMobile)

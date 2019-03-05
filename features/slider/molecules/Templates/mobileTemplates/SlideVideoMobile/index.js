import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoMobile.css'

const SlideVideoMobile = ({
  image: { src, preloader },
  active,
  visible,
  preload
}) => (
  <div className={styles.frame}>
    <VideoPlayer
      preload={preload}
      visible={visible}
      active={active}
      className={styles.video}
      src={src}
      preloader={preloader}
      width="auto"
      height="100%"
    />
  </div>
)

SlideVideoMobile.propTypes = {
  src: PropTypes.string.isRequired
}

export default onlyUpdateForKeys(['active', 'visible', 'preload'])(
  SlideVideoMobile
)

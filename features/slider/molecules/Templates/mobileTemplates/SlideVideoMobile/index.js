import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoMobile.css'

const SlideVideoMobile = ({ src, active }) => (
  <div className={styles.frame}>
    <VideoPlayer
      active={active}
      className={styles.video}
      src={src}
      width="auto"
      height="100%"
    />
  </div>
)

SlideVideoMobile.propTypes = {
  src: PropTypes.string.isRequired,
}

export default onlyUpdateForKeys(['active'])(SlideVideoMobile)

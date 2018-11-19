import React from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoDesktop.css'

const SlideVideoDesktop = ({ src }) => (
  <div className={styles.frame}>
    <VideoPlayer
      className={styles.video}
      src={src}
      width="auto"
      height="100%"
    />
  </div>
)

SlideVideoDesktop.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideVideoDesktop

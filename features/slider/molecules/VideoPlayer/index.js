import React from 'react'
import PropTypes from 'prop-types'
import styles from './videoPlayer.css'
import cx from 'classnames'

const VideoPlayer = ({ src, height, width, className }) => {
  return (
    <video
      src={src}
      height={height}
      width={width}
      className={cx(styles.screen, className)}
      playsInline
      autoPlay
      loop
      playing
      muted
    />
  )
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

export default VideoPlayer

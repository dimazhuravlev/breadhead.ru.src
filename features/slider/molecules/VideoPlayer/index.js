import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './videoPlayer.css'
import cx from 'classnames'

const VideoPlayer = ({ src, height, width, className }) => {
  return (
    <ReactPlayer
      url={src}
      height={height}
      width={width}
      className={cx(styles.screen, className)}
      playsinline={true}
      autoPlay={true}
      loop={true}
      playing={true}
      muted={true}
    />
  )
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default VideoPlayer

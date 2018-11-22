import React from 'react'
import PropTypes from 'prop-types'
import styles from './videoPlayer.css'
import cx from 'classnames'

class VideoPlayer extends React.Component {
  componentDidUpdate({ active: prevActive }) {
    const { active } = this.props
    if (active !== prevActive) {
      if (active) {
        this.playVideo()
      } else {
        this.stopVideo()
      }
    }
  }

  playVideo = () => {
    this.videoRef.current.play()
  }

  stopVideo = () => {
    this.videoRef.current.pause()
    this.videoRef.current.currentTime = 0
  }

  videoRef = React.createRef()

  render() {
    const { src, height, width, className, active } = this.props
    return (
      <video
        ref={this.videoRef}
        src={src}
        height={height}
        width={width}
        className={cx(styles.screen, className)}
        playsInline
        autoPlay={active}
        loop
        muted
      />
    )
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}

export default VideoPlayer

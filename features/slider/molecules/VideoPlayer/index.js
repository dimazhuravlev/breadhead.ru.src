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
      } else if (!active) {
        this.stopVideo()
      }
    }
  }

  playVideo = () => {
    this.videoRef.current.play()
  }

  videoRef = React.createRef()

  stopVideo = () => {
    this.videoRef.current.pause()
    this.videoRef.current.currentTime = 0
  }

  render() {
    const { src, height, width, className, active } = this.props
    return (
      <video
        ref={this.videoRef}
        src={src}
        height={height}
        width={width}
        className={cx(styles.screen, className)}
        playsInline={active}
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

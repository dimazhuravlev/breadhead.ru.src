import React from 'react'
import PropTypes from 'prop-types'
import styles from './videoPlayer.css'
import cx from 'classnames'

class VideoPlayer extends React.Component {
  state = { canPlay: false }

  componentDidUpdate({ active: prevActive }) {
    const { active } = this.props
    if (active) {
      if (active !== prevActive || this.videoRef.current.paused) {
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

  onCanPlay = () => {
    this.setState({ canPlay: true })
  }

  videoRef = React.createRef()

  render() {
    const { src, height, width, className, active, preloader } = this.props
    const { canPlay } = this.state
    return (
      <div className={styles.wrapper}>
        <video
          onCanPlay={this.onCanPlay}
          ref={this.videoRef}
          src={src}
          height={height}
          width={width}
          className={cx(styles.screen, className)}
          playsInline
          autoPlay={canPlay && active}
          loop
          muted
        />
        <img
          className={cx(styles.preloader, className, canPlay && styles.canPlay)}
          src={preloader}
          alt=""
        />
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default VideoPlayer

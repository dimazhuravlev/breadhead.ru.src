import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Image from '@site/ui/atoms/Image'
import styles from './videoPlayer.css'
import resolveStaticSrc from './resolveStaticSrc'

class VideoPlayer extends React.Component {
  state = { canPlay: false }

  componentDidUpdate({ active: prevActive }) {
    const { active, visible } = this.props
    if (active !== prevActive) {
      if (active) {
        this.handleActiveState(visible)
      } else {
        this.handleInActiveState()
      }
    }
  }

  play = () => {
    this.videoRef.current.paused && this.videoRef.current.play()
  }

  stop = () => {
    this.videoRef.current.pause()
    this.videoRef.current.currentTime = 0
  }

  pause = () => {
    this.videoRef.current.pause()
  }

  onCanPlay = () => {
    this.setState({ canPlay: true })
  }

  handleActiveState = visible => {
    if (visible) {
      this.play()
    } else {
      this.pause()
    }
  }

  handleInActiveState = () => {
    this.stop()
  }

  videoRef = React.createRef()

  render() {
    const { src, height, width, className, active, preloader } = this.props
    const { canPlay } = this.state
    return (
      <div className={cx(className, styles.wrapper, canPlay && styles.canPlay)}>
        <video
          onCanPlay={this.onCanPlay}
          ref={this.videoRef}
          src={resolveStaticSrc(src)}
          height={height}
          width={width}
          className={cx(styles.video)}
          playsInline
          autoPlay={active}
          loop
          muted
        />
        <Image className={cx(styles.preloader)} src={preloader} alt="" />
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

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Image from '@site/ui/atoms/Image'
import styles from './videoPlayer.css'
import resolveStaticSrc from './resolveStaticSrc'

class VideoPlayer extends React.Component {
  state = { canPlay: false, preloaded: false }

  componentDidMount() {
    this.handlePreload()
  }

  componentDidUpdate({ active: prevActive, visible: prevVisible }) {
    const { active, visible } = this.props
    this.handlePreload()
    if (active !== prevActive || visible !== prevVisible) {
      this.onActiveChange(active, visible)
    }
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

  handlePreload() {
    const { preload } = this.props
    const { preloaded } = this.state
    if (preload && !preloaded) {
      this.setState({ preloaded: true })
    }
  }

  onActiveChange(active, visible) {
    if (active) {
      this.handleActiveState(visible)
    } else {
      this.handleInActiveState()
    }
  }

  play = () => {
    const video = this.videoRef.current
    video && video.paused && video.play()
  }

  stop = () => {
    const video = this.videoRef.current
    if (video) {
      this.pause()
      video.currentTime = 0
    }
  }

  pause = () => {
    const video = this.videoRef.current
    video && video.pause()
  }

  videoRef = React.createRef()

  render() {
    const { src, height, width, className, active, preloader } = this.props
    const { canPlay, preloaded } = this.state
    return (
      <div className={cx(className, styles.wrapper, canPlay && styles.canPlay)}>
        {preloaded ? (
          <video
            onCanPlay={this.onCanPlay}
            ref={this.videoRef}
            src={resolveStaticSrc(src)}
            height={height}
            width={width}
            className={styles.video}
            playsInline
            autoPlay={active}
            loop
            muted
          />
        ) : (
          <div className={styles.video} />
        )}
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

import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideFrameVideoDesktop.css'

const SlideFrameVideoDesktop = ({
  image: { src, preloader },
  backgroundColor,
  active
}) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
      <div className={styles.browser}>
        <div className={styles.header}>
          <img className={styles.dots} src="/static/img/dots.png" />
        </div>
        <VideoPlayer
          active={active}
          className={styles.video}
          src={src}
          preloader={preloader}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  )
}

SlideFrameVideoDesktop.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  active: PropTypes.bool
}

export default onlyUpdateForKeys(['active'])(SlideFrameVideoDesktop)

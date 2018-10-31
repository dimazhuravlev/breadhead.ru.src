import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import styles from './slideBrowserPicture.css'

const SlideBrowserPicture = ({ srcDesktop, srcMobile }) => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      {/* <picture>
        <source
          className={styles.screen}
          media="(max-width: 600px)"
          srcSet={srcMobile}
        />
        <img src={srcDesktop} className={styles.screen} />
      </picture> */}

      <ReactPlayer
        className={styles.screen}
        url="/static/video/map.mov"
        playsinline="true"
        autoplay="true"
        height="410"
        width="220"
        loop="true"
        playing="true"
        muted="true"
      />
    </div>
  </div>
)

SlideBrowserPicture.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlideBrowserPicture

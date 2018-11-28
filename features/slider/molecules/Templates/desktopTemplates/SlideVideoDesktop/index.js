import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoDesktop.css'

const SlideVideoDesktop = ({ image: { src, preloader }, active }) => (
  <div className={styles.frame}>
    <VideoPlayer
      active={active}
      className={styles.video}
      src={src}
      preloader={preloader}
      width="auto"
      height="100%"
    />
  </div>
)

SlideVideoDesktop.propTypes = {
  src: PropTypes.string
}

export default onlyUpdateForKeys(['active'])(SlideVideoDesktop)

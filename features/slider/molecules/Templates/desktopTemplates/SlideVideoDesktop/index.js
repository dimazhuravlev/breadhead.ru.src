import React from 'react'
import PropTypes from 'prop-types'
import { onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoDesktop.css'

const SlideVideoDesktop = ({ image: { src, preloader }, active, visible }) => (
  <div className={styles.frame}>
    <VideoPlayer
      visible={visible}
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
  src: PropTypes.string.isRequired,
}

export default onlyUpdateForKeys(['active', 'visible'])(SlideVideoDesktop)

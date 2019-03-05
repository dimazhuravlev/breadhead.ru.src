import React from 'react'
import PropTypes from 'prop-types'
import { compose, onlyUpdateForKeys } from 'recompose'
import VideoPlayer from '@site/features/slider/molecules/VideoPlayer'
import styles from './slideVideoDesktop.css'

const SlideVideoDesktop = ({
  image: { src, preloader },
  active,
  visible,
  preload
}) => (
  <div className={styles.frame}>
    <VideoPlayer
      preload={preload}
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
  src: PropTypes.string
}

const hoc = compose(onlyUpdateForKeys(['active', 'visible', 'preload']))

export default hoc(SlideVideoDesktop)

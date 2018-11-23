import React from 'react'
import { shouldUpdate } from 'recompose'
import Img from '@site/ui/molecules/Img'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({
  image: { src, preloader },
  backgroundColor,
}) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <Img src={src} className={styles.screen} preloader={preloader} />
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
}

export default shouldUpdate(() => false)(SlideFramePictMobile)

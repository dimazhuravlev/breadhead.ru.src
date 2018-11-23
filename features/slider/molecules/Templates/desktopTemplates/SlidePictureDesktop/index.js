import React from 'react'
import PropTypes from 'prop-types'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ image: { src, preloader } }) => (
  <Img src={src} className={styles.picture} preloader={preloader} />
)

SlidePictureDesktop.propTypes = {
  src: PropTypes.string.isRequired,
}

export default React.memo(SlidePictureDesktop)

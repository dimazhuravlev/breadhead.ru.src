import React from 'react'
import PropTypes from 'prop-types'
import Img from '@site/ui/molecules/Img'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ image: { src, preloader } }) => (
  <Img src={src} className={styles.picture} preloader={preloader} />
)

SlidePictureMobile.propTypes = {
  src: PropTypes.string.isRequired,
}

export default React.memo(SlidePictureMobile)

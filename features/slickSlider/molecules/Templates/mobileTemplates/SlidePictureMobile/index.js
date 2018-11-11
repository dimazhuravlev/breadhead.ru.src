import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ src }) => (
  <img src={src} className={styles.picture} />
)

SlidePictureMobile.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlidePictureMobile

import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePicture.css'

const SlidePicture = ({ src }) => <img src={src} className={styles.picture} />

SlidePicture.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlidePicture

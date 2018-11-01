import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = data => (
  <img src={data.src} className={styles.picture} />
)

SlidePictureMobile.propTypes = {
  data: PropTypes.object
}

export default SlidePictureMobile

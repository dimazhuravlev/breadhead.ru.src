import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = data => (
  <img src={data.src} className={styles.picture} />
)

SlidePictureDesktop.propTypes = {
  data: PropTypes.array
}

export default SlidePictureDesktop

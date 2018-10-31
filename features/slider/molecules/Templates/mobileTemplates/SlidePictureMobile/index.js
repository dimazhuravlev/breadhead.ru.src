import React from 'react'
// import PropTypes from 'prop-types'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = aboutDataMobile => (
  <img src={aboutDataMobile.src} className={styles.picture} />
)

// SlidePictureMobile.propTypes = {
//   srcDesktop: PropTypes.string.isRequired,
//   srcMobile: PropTypes.string
// }

export default SlidePictureMobile

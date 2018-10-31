import React from 'react'
// import PropTypes from 'prop-types'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = aboutDataDesktop => (
  <img src={aboutDataDesktop.src} className={styles.picture} />
)

// SlidePictureDesktop.propTypes = {
//   srcDesktop: PropTypes.string.isRequired,
//   srcMobile: PropTypes.string
// }

export default SlidePictureDesktop

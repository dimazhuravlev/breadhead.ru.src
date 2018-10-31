import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureMobile.css'

const SlidePictureMobile = ({ srcDesktop, srcMobile }) => (
  <picture className={styles.picture}>
    <source
      srcSet={srcMobile}
      media="(max-width: 600px)"
      className={styles.picture}
    />
    <img src={srcDesktop} className={styles.picture} />
  </picture>
)

SlidePictureMobile.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlidePictureMobile

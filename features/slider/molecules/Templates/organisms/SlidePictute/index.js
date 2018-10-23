import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePicture.css'

const SlidePicture = ({ srcDesktop, srcMobile }) => (
  <picture className={styles.picture}>
    <source
      srcSet={srcMobile}
      media="(max-width: 600px)"
      className={styles.picture}
    />
    <img src={srcDesktop} className={styles.picture} />
  </picture>
)

SlidePicture.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlidePicture

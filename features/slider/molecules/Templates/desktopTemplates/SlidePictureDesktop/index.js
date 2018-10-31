import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ srcDesktop, srcMobile }) => (
  <picture className={styles.picture}>
    <source
      srcSet={srcMobile}
      media="(max-width: 600px)"
      className={styles.picture}
    />
    <img src={srcDesktop} className={styles.picture} />
  </picture>
)

SlidePictureDesktop.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlidePictureDesktop

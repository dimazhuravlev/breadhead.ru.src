import React from 'react'
import PropTypes from 'prop-types'
import styles from './slidePictureDesktop.css'

const SlidePictureDesktop = ({ src }) => (
  <img src={src} className={styles.picture} />
)

SlidePictureDesktop.propTypes = {
  src: PropTypes.string.isRequired,
}

export default React.memo(SlidePictureDesktop)

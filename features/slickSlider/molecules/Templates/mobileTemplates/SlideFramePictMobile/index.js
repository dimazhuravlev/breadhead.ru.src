import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({ src }) => (
  <div className={styles.slide}>
    <div className={styles.phone}>
      <img src={src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideFramePictMobile

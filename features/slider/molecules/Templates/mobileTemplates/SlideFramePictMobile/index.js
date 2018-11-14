import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({ src, backgroundColor }) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.phone}>
      <img src={src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
}

export default React.memo(SlideFramePictMobile)

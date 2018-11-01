import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = data => (
  <div className={styles.slide}>
    <div className={styles.phone}>
      <img src={data.src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  data: PropTypes.object
}

export default SlideFramePictMobile

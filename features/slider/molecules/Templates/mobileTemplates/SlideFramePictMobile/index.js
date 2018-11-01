import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = data => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <img src={data.src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  data: PropTypes.string
}

export default SlideFramePictMobile

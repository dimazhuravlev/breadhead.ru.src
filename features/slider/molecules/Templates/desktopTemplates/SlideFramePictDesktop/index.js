import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictDesktop.css'

const SlideFramePictDesktop = data => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <img src={data.src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictDesktop.propTypes = {
  data: PropTypes.object
}

export default SlideFramePictDesktop

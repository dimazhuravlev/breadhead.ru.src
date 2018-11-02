import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictDesktop.css'

const SlideFramePictDesktop = ({ src }) => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <img src={src} className={styles.screen} />
    </div>
  </div>
)

SlideFramePictDesktop.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideFramePictDesktop

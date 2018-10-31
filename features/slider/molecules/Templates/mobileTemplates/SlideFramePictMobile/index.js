import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictMobile.css'

const SlideFramePictMobile = ({ srcDesktop, srcMobile }) => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <picture>
        <source
          className={styles.screen}
          media="(max-width: 600px)"
          srcSet={srcMobile}
        />
        <img src={srcDesktop} className={styles.screen} />
      </picture>
    </div>
  </div>
)

SlideFramePictMobile.propTypes = {
  srcDesktop: PropTypes.string.isRequired,
  srcMobile: PropTypes.string
}

export default SlideFramePictMobile

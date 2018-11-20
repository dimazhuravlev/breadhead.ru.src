import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideFramePictDesktop.css'

const SlideFramePictDesktop = ({ src, backgroundColor, backgroundSrc }) => (
  <div style={{ backgroundColor: backgroundColor }} className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <img className={styles.dots} src="/static/img/dots.png" />
      </div>
      <img src={src} className={styles.screen} />
    </div>
    {backgroundSrc && <img src={backgroundSrc} className={styles.background} />}
  </div>
)

SlideFramePictDesktop.propTypes = {
  src: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  backgroundSrc: PropTypes.string,
}

export default React.memo(SlideFramePictDesktop)

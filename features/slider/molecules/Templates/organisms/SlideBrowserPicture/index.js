import React from 'react'
import PropTypes from 'prop-types'
import styles from './slideBrowserPicture.css'

const SlideBrowserPicture = ({ src }) => (
  <div className={styles.slide}>
    <div className={styles.browser}>
      <div className={styles.header}>
        <div className={styles.dots}>
          <svg
            className={styles.dot}
            width="7px"
            height="7px"
            viewBox="0 0 7 7"
          >
            <circle cx="3.5" cy="3.5" r="3.5" />
          </svg>
          <svg
            className={styles.dot}
            width="7px"
            height="7px"
            viewBox="0 0 7 7"
          >
            <circle cx="3.5" cy="3.5" r="3.5" />
          </svg>
          <svg
            className={styles.dot}
            width="7px"
            height="7px"
            viewBox="0 0 7 7"
          >
            <circle cx="3.5" cy="3.5" r="3.5" />
          </svg>
        </div>
      </div>
      <img src={src} className={styles.screen} />
    </div>
  </div>
)

SlideBrowserPicture.propTypes = {
  src: PropTypes.string.isRequired
}

export default SlideBrowserPicture
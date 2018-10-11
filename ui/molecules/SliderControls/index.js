import React from 'react'
import cx from 'classnames'
import styles from './sliderControls.css'

const SliderControls = () => (
  <div className={styles.background}>
    <button className={cx(styles.button, styles.left)}>
      <svg
        className={styles.leftArrow}
        width="14px"
        height="24px"
        viewBox="0 0 14 24"
      >
        <g fill="none">
          <polyline stroke="#0E0F0F" strokeWidth="2" points="13 1 2 12 13 23" />
        </g>
      </svg>
    </button>

    <button className={cx(styles.button, styles.right)}>
      <svg
        className={styles.rightArrow}
        width="14px"
        height="24px"
        viewBox="0 0 14 24"
      >
        <g fill="none">
          <polyline stroke="#0E0F0F" strokeWidth="2" points="1 1 12 12 1 23" />
        </g>
      </svg>
    </button>
  </div>
)

export default SliderControls

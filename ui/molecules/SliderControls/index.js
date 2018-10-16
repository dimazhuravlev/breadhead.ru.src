import React from 'react'
import { SliderArrowLeftIcon, SliderArrowRightIcon } from '@site/ui/atoms/icons'
import cx from 'classnames'
import styles from './sliderControls.css'

class SliderControls extends React.Component {
  render() {
    const { toggleBack, toggleAhead, className } = this.props

    return (
      <div className={cx(styles.background, className)}>
        <button onClick={toggleBack} className={cx(styles.button, styles.left)}>
          <SliderArrowLeftIcon className={styles.leftArrow} />
        </button>

        <button
          onClick={toggleAhead}
          className={cx(styles.button, styles.right)}
        >
          <SliderArrowRightIcon className={styles.rightArrow} />
        </button>
      </div>
    )
  }
}

export default SliderControls

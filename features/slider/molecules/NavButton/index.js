import React from 'react'
import { SliderArrowLeftIcon, SliderArrowRightIcon } from '@site/ui/atoms/icons'
import cx from 'classnames'
import styles from './sliderControls.css'

class NavButton extends React.Component {
  render() {
    const { onClick, className, direction } = this.props

    return (
      <div
        className={cx(
          styles.background,
          styles[`wrapper_${direction}`],
          className
        )}
      >
        <button
          onClick={onClick}
          className={cx(styles.button, styles[`button_${direction}`])}
        >
          {direction === 'left' ? (
            <SliderArrowLeftIcon className={styles.leftArrow} />
          ) : (
            <SliderArrowRightIcon className={styles.rightArrow} />
          )}
        </button>
      </div>
    )
  }
}

export default NavButton
